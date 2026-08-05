import os
import json
import time
import random
import threading
import requests
import yfinance as yf
from concurrent.futures import ThreadPoolExecutor, as_completed


FINANCIAL_FIELDS = ['revenue', 'netIncome', 'fcf', 'revenueGrowth', 'netIncomeGrowth', 'fcfGrowth']


def fetch_financials_for_ticker(yf_ticker, session=None):
    """
    Fetches financial fields from official audited financial statement tables
    (t.income_stmt & t.cashflow) to prevent yfinance info precalculation bugs:
    revenue, netIncome, fcf and their YoY growth rates.
    """
    time.sleep(random.uniform(0.15, 0.45))

    result = {k: None for k in FINANCIAL_FIELDS}

    max_retries = 3
    for attempt in range(max_retries):
        try:
            t = yf.Ticker(yf_ticker, session=session)

            # 1. Income Statement (Ciro & Net Gelir)
            try:
                is_stmt = t.income_stmt
                if is_stmt is not None and not is_stmt.empty:
                    for k in ['Total Revenue', 'Operating Revenue']:
                        if k in is_stmt.index:
                            s = is_stmt.loc[k].dropna()
                            if len(s) > 0:
                                result['revenue'] = float(s.iloc[0])
                                if len(s) >= 2 and float(s.iloc[1]) != 0:
                                    result['revenueGrowth'] = round(((float(s.iloc[0]) - float(s.iloc[1])) / abs(float(s.iloc[1]))) * 100, 2)
                                break
                    for k in ['Net Income Common Stockholders', 'Net Income']:
                        if k in is_stmt.index:
                            s = is_stmt.loc[k].dropna()
                            if len(s) > 0:
                                result['netIncome'] = float(s.iloc[0])
                                if len(s) >= 2 and float(s.iloc[1]) != 0:
                                    result['netIncomeGrowth'] = round(((float(s.iloc[0]) - float(s.iloc[1])) / abs(float(s.iloc[1]))) * 100, 2)
                                break
            except Exception:
                pass

            # 2. Cash Flow Statement (Serbest Nakit / FCF & FCF YoY)
            try:
                cf_stmt = t.cashflow
                if cf_stmt is not None and not cf_stmt.empty and 'Free Cash Flow' in cf_stmt.index:
                    fcf_series = cf_stmt.loc['Free Cash Flow'].dropna()
                    if len(fcf_series) > 0:
                        result['fcf'] = float(fcf_series.iloc[0])
                    if len(fcf_series) >= 2:
                        curr_fcf = float(fcf_series.iloc[0])
                        prev_fcf = float(fcf_series.iloc[1])
                        if prev_fcf != 0:
                            result['fcfGrowth'] = round(((curr_fcf - prev_fcf) / abs(prev_fcf)) * 100, 2)
            except Exception:
                pass

            # 3. Fallback to info dictionary if statement table items were missing
            info = t.info or {}
            if result['revenue'] is None:
                result['revenue'] = info.get('totalRevenue')
            if result['netIncome'] is None:
                result['netIncome'] = info.get('netIncomeToCommon') or info.get('netIncome')
            if result['fcf'] is None:
                result['fcf'] = info.get('freeCashflow')

            if result['revenueGrowth'] is None and info.get('revenueGrowth') is not None:
                result['revenueGrowth'] = round(float(info.get('revenueGrowth')) * 100, 2)
            if result['netIncomeGrowth'] is None and info.get('earningsGrowth') is not None:
                result['netIncomeGrowth'] = round(float(info.get('earningsGrowth')) * 100, 2)

            break  # success

        except Exception as e:
            err_str = str(e)
            if 'Rate limit' in err_str or 'Too Many Requests' in err_str or '429' in err_str:
                sleep_time = (attempt + 1) * 8 + random.uniform(2, 6)
                print(f"Rate limited for {yf_ticker}. Retrying in {sleep_time:.1f}s (attempt {attempt+1}/{max_retries})...")
                time.sleep(sleep_time)
            else:
                print(f"Error fetching financials for {yf_ticker}: {e}")
                break

    return result


from bs4 import BeautifulSoup


def scrape_sp500_wikipedia(json_dir, session=None):
    """Scrapes S&P 500 constituents from Wikipedia and updates sp500_constituents.json."""
    print("Scraping fresh S&P 500 constituents from Wikipedia (Quarterly)...")
    url = "https://en.wikipedia.org/wiki/List_of_S%26P_500_companies"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    fetcher = session if session else requests
    resp = fetcher.get(url, headers=headers)
    if resp.status_code != 200:
        print(f"Warning: Failed Wikipedia fetch HTTP {resp.status_code}")
        return load_constituents_cache(json_dir, 'sp500_constituents.json')

    soup = BeautifulSoup(resp.text, "html.parser")
    table = soup.find("table", {"id": "constituents"})
    if not table:
        print("Warning: constituents table not found on Wikipedia page")
        return load_constituents_cache(json_dir, 'sp500_constituents.json')

    companies = []
    for row in table.find_all("tr")[1:]:
        cols = row.find_all("td")
        if len(cols) < 5:
            continue
        ticker = cols[0].text.strip()
        name = cols[1].text.strip()
        sector = cols[2].text.strip()
        sub_sector = cols[3].text.strip()
        yf_ticker = ticker.replace(".", "-")
        companies.append({
            "ticker": ticker,
            "yf_ticker": yf_ticker,
            "name": name,
            "sector": sector,
            "subSector": sub_sector
        })

    if companies:
        from datetime import datetime, timezone
        cache_path = os.path.join(json_dir, "sp500_constituents.json")
        cache_payload = {
            "lastUpdated": datetime.now(timezone.utc).isoformat(),
            "companies": companies
        }
        with open(cache_path, "w", encoding="utf-8") as f:
            json.dump(cache_payload, f, indent=2, ensure_ascii=False)
        print(f"Saved {len(companies)} S&P 500 constituents to cache.")
    return companies


def scrape_nasdaq100_wikipedia(json_dir, session=None):
    """Scrapes Nasdaq 100 constituents from Wikipedia and updates nasdaq100_constituents.json."""
    print("Scraping fresh Nasdaq 100 constituents from Wikipedia (Quarterly)...")
    url = "https://en.wikipedia.org/wiki/List_of_NASDAQ-100_companies"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    fetcher = session if session else requests
    resp = fetcher.get(url, headers=headers)
    if resp.status_code != 200:
        print(f"Warning: Failed Nasdaq 100 Wikipedia fetch HTTP {resp.status_code}")
        return load_constituents_cache(json_dir, 'nasdaq100_constituents.json')

    soup = BeautifulSoup(resp.text, "html.parser")
    table = soup.find("table", {"class": "wikitable"})
    if not table:
        print("Warning: Nasdaq 100 table not found on Wikipedia page")
        return load_constituents_cache(json_dir, 'nasdaq100_constituents.json')

    companies = []
    for row in table.find_all("tr")[1:]:
        cols = row.find_all("td")
        if len(cols) < 4:
            continue
        ticker = cols[0].text.strip()
        name = cols[1].text.strip()
        sector = cols[2].text.strip()
        sub_sector = cols[3].text.strip()
        yf_ticker = ticker.replace(".", "-")
        companies.append({
            "ticker": ticker,
            "yf_ticker": yf_ticker,
            "name": name,
            "sector": sector,
            "subSector": sub_sector
        })

    if companies:
        from datetime import datetime, timezone
        cache_path = os.path.join(json_dir, "nasdaq100_constituents.json")
        cache_payload = {
            "lastUpdated": datetime.now(timezone.utc).isoformat(),
            "companies": companies
        }
        with open(cache_path, "w", encoding="utf-8") as f:
            json.dump(cache_payload, f, indent=2, ensure_ascii=False)
        print(f"Saved {len(companies)} Nasdaq 100 constituents to cache.")
    return companies


def load_constituents_cache(json_dir, filename):
    """Load a constituents cache file and return the list of companies."""
    cache_path = os.path.join(json_dir, filename)
    if not os.path.exists(cache_path):
        print(f"Cache not found: {cache_path}")
        return []
    try:
        with open(cache_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        return data.get('companies', [])
    except Exception as e:
        print(f"Error reading {cache_path}: {e}")
        return []


def update_json_with_financials(json_path, financials_map):
    """
    Reads an existing index JSON file, updates each company's financial fields
    from financials_map (keyed by ticker), and writes it back.

    80% guard: if fewer than 80% of existing companies have revenue data in the
    new fetch, skip the write to avoid overwriting good data with bad.
    """
    if not os.path.exists(json_path):
        print(f"Skipping {json_path} — file does not exist.")
        return

    try:
        with open(json_path, 'r', encoding='utf-8') as f:
            payload = json.load(f)
    except Exception as e:
        print(f"Error reading {json_path}: {e}")
        return

    companies = payload.get('data', [])
    if not companies:
        print(f"Skipping {json_path} — no data entries.")
        return

    # Count how many tickers in this file have new financial data
    matched_with_revenue = sum(
        1 for c in companies
        if financials_map.get(c['ticker'], {}).get('revenue') is not None
    )
    ratio = matched_with_revenue / len(companies)
    if ratio < 0.80:
        print(f"WARNING: Only {matched_with_revenue}/{len(companies)} ({ratio:.0%}) have revenue data for {os.path.basename(json_path)}. Skipping write (threshold: 80%).")
        return

    # Apply new financials
    updated = 0
    for company in companies:
        ticker = company['ticker']
        if ticker in financials_map:
            for field in FINANCIAL_FIELDS:
                company[field] = financials_map[ticker].get(field)
            updated += 1

    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)

    print(f"Updated {updated}/{len(companies)} companies in {os.path.basename(json_path)}")


def main():
    start_time = time.time()

    script_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    json_dir = os.path.join(script_dir, 'data')

    # Create HTTP session
    session = requests.Session()
    session.headers.update({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    })
    from urllib3.util import Retry
    from requests.adapters import HTTPAdapter
    retries = Retry(total=5, backoff_factor=1.5, status_forcelist=[429, 500, 502, 503, 504])
    session.mount('https://', HTTPAdapter(max_retries=retries))

    # Scrape fresh Wikipedia constituents quarterly
    try:
        sp500_companies = scrape_sp500_wikipedia(json_dir, session)
    except Exception as e:
        print(f"Error scraping S&P 500 Wikipedia: {e}. Falling back to cache.")
        sp500_companies = load_constituents_cache(json_dir, 'sp500_constituents.json')

    try:
        nasdaq100_companies = scrape_nasdaq100_wikipedia(json_dir, session)
    except Exception as e:
        print(f"Error scraping Nasdaq 100 Wikipedia: {e}. Falling back to cache.")
        nasdaq100_companies = load_constituents_cache(json_dir, 'nasdaq100_constituents.json')

    if not sp500_companies and not nasdaq100_companies:
        print("ERROR: No constituent caches found. Run update_data.py first to populate caches.")
        return

    # Build unique ticker set: S&P 500 ∪ Nasdaq 100
    all_companies_map = {}  # yf_ticker -> company dict
    for c in sp500_companies:
        all_companies_map[c['yf_ticker']] = c
    for c in nasdaq100_companies:
        if c['yf_ticker'] not in all_companies_map:
            all_companies_map[c['yf_ticker']] = c

    unique_companies = list(all_companies_map.values())
    print(f"\nFetching financial data for {len(unique_companies)} unique tickers (S&P 500 & Nasdaq 100)...")

    # Parallel financial data fetch
    financials_map = {}  # ticker -> {revenue, netIncome, fcf, ...}
    max_workers = 6
    lock = threading.Lock()

    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        future_to_company = {
            executor.submit(fetch_financials_for_ticker, c['yf_ticker'], session): c
            for c in unique_companies
        }

        completed = 0
        total = len(unique_companies)
        for future in as_completed(future_to_company):
            company = future_to_company[future]
            try:
                result = future.result()
                with lock:
                    financials_map[company['ticker']] = result
            except Exception as exc:
                print(f"{company['ticker']} generated an exception: {exc}")
                with lock:
                    financials_map[company['ticker']] = {k: None for k in FINANCIAL_FIELDS}

            completed += 1
            if completed % 50 == 0 or completed == total:
                print(f"Financial fetch progress: {completed}/{total}...")

    # Count coverage
    has_revenue = sum(1 for v in financials_map.values() if v.get('revenue') is not None)
    has_fcg = sum(1 for v in financials_map.values() if v.get('fcfGrowth') is not None)
    print(f"\nCoverage: revenue={has_revenue}/{len(financials_map)}, fcfGrowth={has_fcg}/{len(financials_map)}")

    # Update all stock index JSON files
    for filename in ['sp500.json', 'nasdaq100.json', 'nttr.json']:
        path = os.path.join(json_dir, filename)
        update_json_with_financials(path, financials_map)

    elapsed = time.time() - start_time
    print(f"\nQuarterly financial update completed in {elapsed:.1f} seconds.")


if __name__ == '__main__':
    main()
