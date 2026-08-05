import os
import json
import requests
from bs4 import BeautifulSoup
import yfinance as yf
from concurrent.futures import ThreadPoolExecutor, as_completed
import time
import random
import threading


def fetch_Sp500_wikipedia(json_dir):
    """
    Checks if a cached list of constituents exists and is less than 7 days old.
    If so, loads it. Otherwise, scrapes Wikipedia and saves the new cache.
    """
    cache_path = os.path.join(json_dir, "sp500_constituents.json")
    use_cache = False
    companies = []
    
    if os.path.exists(cache_path):
        try:
            with open(cache_path, "r", encoding="utf-8") as f:
                cache_data = json.load(f)
            
            last_updated_str = cache_data.get("lastUpdated")
            if last_updated_str:
                from datetime import datetime, timezone
                last_updated = datetime.fromisoformat(last_updated_str)
                now = datetime.now(timezone.utc)
                age_days = (now - last_updated).days
                if age_days < 7:
                    companies = cache_data.get("companies", [])
                    if companies:
                        use_cache = True
                        print(f"Using cached S&P 500 constituents (Age: {age_days} days).")
        except Exception as e:
            print(f"Error reading constituents cache: {e}. Will scrape Wikipedia.")
            
    if not use_cache:
        print("Fetching S&P 500 constituents from Wikipedia...")
        url = "https://en.wikipedia.org/wiki/List_of_S%26P_500_companies"
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        }
        
        response = requests.get(url, headers=headers)
        if response.status_code != 200:
            raise Exception(f"Failed to fetch Wikipedia page: HTTP {response.status_code}")
            
        soup = BeautifulSoup(response.text, "html.parser")
        table = soup.find("table", {"id": "constituents"})
        if not table:
            raise Exception("Could not find the constituents table in the Wikipedia page.")
            
        companies = []
        rows = table.find_all("tr")[1:] # skip headers
        
        for row in rows:
            cols = row.find_all("td")
            if len(cols) < 5:
                continue
                
            ticker = cols[0].text.strip()
            name = cols[1].text.strip()
            sector = cols[2].text.strip()
            sub_sector = cols[3].text.strip()
            
            # yfinance uses '-' instead of '.' for class shares (e.g., BRK.B -> BRK-B)
            yf_ticker = ticker.replace(".", "-")
            
            companies.append({
                "ticker": ticker,
                "yf_ticker": yf_ticker,
                "name": name,
                "sector": sector,
                "subSector": sub_sector
            })
            
        print(f"Successfully scraped {len(companies)} companies from Wikipedia.")
        
        # Save cache
        try:
            from datetime import datetime, timezone
            cache_payload = {
                "lastUpdated": datetime.now(timezone.utc).isoformat(),
                "companies": companies
            }
            with open(cache_path, "w", encoding="utf-8") as f:
                json.dump(cache_payload, f, indent=2, ensure_ascii=False)
            print(f"Saved new constituents cache to {cache_path}")
        except Exception as e:
            print(f"Error saving constituents cache: {e}")
            
    return companies


def fetch_nasdaq100_wikipedia(json_dir):
    """
    Checks if a cached list of Nasdaq 100 constituents exists and is less than 7 days old.
    If so, loads it. Otherwise, scrapes Wikipedia and saves the new cache.
    """
    cache_path = os.path.join(json_dir, "nasdaq100_constituents.json")
    use_cache = False
    companies = []
    
    if os.path.exists(cache_path):
        try:
            with open(cache_path, "r", encoding="utf-8") as f:
                cache_data = json.load(f)
            last_updated_str = cache_data.get("lastUpdated")
            if last_updated_str:
                from datetime import datetime, timezone
                last_updated = datetime.fromisoformat(last_updated_str)
                now = datetime.now(timezone.utc)
                age_days = (now - last_updated).days
                if age_days < 7:
                    companies = cache_data.get("companies", [])
                    if companies:
                        use_cache = True
                        print(f"Using cached Nasdaq 100 constituents (Age: {age_days} days).")
        except Exception as e:
            print(f"Error reading Nasdaq 100 cache: {e}. Will scrape Wikipedia.")
            
    if not use_cache:
        print("Fetching Nasdaq 100 constituents from Wikipedia...")
        url = "https://en.wikipedia.org/wiki/List_of_NASDAQ-100_companies"
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        }
        
        response = requests.get(url, headers=headers)
        if response.status_code != 200:
            raise Exception(f"Failed to fetch Wikipedia page: HTTP {response.status_code}")
            
        soup = BeautifulSoup(response.text, "html.parser")
        table = soup.find("table", {"class": "wikitable"})
        if not table:
            raise Exception("Could not find the constituents table in the Wikipedia page.")
            
        companies = []
        rows = table.find_all("tr")[1:] # skip headers
        
        for row in rows:
            cols = row.find_all("td")
            if len(cols) < 4:
                continue
                
            ticker = cols[0].text.strip()
            name = cols[1].text.strip()
            sector = cols[2].text.strip()
            sub_sector = cols[3].text.strip()
            
            # yfinance uses '-' instead of '.' for class shares
            yf_ticker = ticker.replace(".", "-")
            
            companies.append({
                "ticker": ticker,
                "yf_ticker": yf_ticker,
                "name": name,
                "sector": sector,
                "subSector": sub_sector
            })
            
        print(f"Successfully scraped {len(companies)} Nasdaq 100 companies from Wikipedia.")
        
        # Save cache
        try:
            from datetime import datetime, timezone
            cache_payload = {
                "lastUpdated": datetime.now(timezone.utc).isoformat(),
                "companies": companies
            }
            with open(cache_path, "w", encoding="utf-8") as f:
                json.dump(cache_payload, f, indent=2, ensure_ascii=False)
            print(f"Saved new Nasdaq 100 constituents cache to {cache_path}")
        except Exception as e:
            print(f"Error saving constituents cache: {e}")
            
    return companies


def fetch_history_batch(yf_tickers):
    """
    Downloads historical close prices in bulk for the given list of tickers
    to calculate 24h change and 7d change.
    """
    print("Downloading historical prices in bulk...")
    # Downloading 15 days of data to guarantee at least 7-8 trading days
    try:
        data = yf.download(yf_tickers, period="15d", interval="1d", group_by="ticker", threads=True)
        return data
    except Exception as e:
        print(f"Error during bulk history download: {e}")
        return None

def fetch_single_ticker_info(company, hist_df=None, session=None, metadata_cache=None, metadata_cache_lock=None):
    """
    Fetches the metadata (market cap, float, PE) for a single ticker.
    Uses historical dataframe to compute 24h & 7d change, and current price if possible.
    """
    ticker = company["ticker"]
    yf_ticker = company["yf_ticker"]
    
    # Check cache first (thread-safe read)
    if metadata_cache is not None and metadata_cache_lock is not None:
        with metadata_cache_lock:
            if yf_ticker in metadata_cache:
                cached_data = metadata_cache[yf_ticker].copy()
                # Update context-specific fields
                cached_data["ticker"] = ticker
                cached_data["name"] = company["name"]
                cached_data["sector"] = company["sector"]
                cached_data["subSector"] = company["subSector"]
                return cached_data
        
    result = {
        "ticker": ticker,
        "name": company["name"],
        "sector": company["sector"],
        "subSector": company["subSector"],
        "price": None,
        "change24h": None,
        "change7d": None,
        "marketCap": None,
        "pe": None,
        "peg": None,
        "revenue": None,
        "netIncome": None,
        "fcf": None,
        "revenueGrowth": None,
        "netIncomeGrowth": None,
        "fcfGrowth": None
    }
    
    # Calculate price and changes from history if available
    has_history = False
    if hist_df is not None:
        try:
            # Check if yf_ticker is in hist_df columns
            # Column indexing depends on the shape of hist_df
            import pandas as pd
            if isinstance(hist_df.columns, pd.MultiIndex):
                # Multi-index: (ticker, info)
                if yf_ticker in hist_df.columns.levels[0]:
                    ticker_hist = hist_df[yf_ticker]["Close"].dropna()
                    if len(ticker_hist) > 0:
                        result["price"] = round(float(ticker_hist.iloc[-1]), 2)
                        has_history = True
                        
                        if len(ticker_hist) >= 2:
                            prev_close = float(ticker_hist.iloc[-2])
                            result["change24h"] = round(((result["price"] - prev_close) / prev_close) * 100, 2)
                            
                        if len(ticker_hist) >= 7:
                            prev_7d_close = float(ticker_hist.iloc[-7])
                            result["change7d"] = round(((result["price"] - prev_7d_close) / prev_7d_close) * 100, 2)
                        elif len(ticker_hist) >= 2:
                            # fallback to whatever elements we have
                            prev_7d_close = float(ticker_hist.iloc[0])
                            result["change7d"] = round(((result["price"] - prev_7d_close) / prev_7d_close) * 100, 2)
            else:
                # Single ticker dataframe
                ticker_hist = hist_df["Close"].dropna()
                if len(ticker_hist) > 0:
                    result["price"] = round(float(ticker_hist.iloc[-1]), 2)
                    has_history = True
                    if len(ticker_hist) >= 2:
                        prev_close = float(ticker_hist.iloc[-2])
                        result["change24h"] = round(((result["price"] - prev_close) / prev_close) * 100, 2)
                    if len(ticker_hist) >= 7:
                        prev_7d_close = float(ticker_hist.iloc[-7])
                        result["change7d"] = round(((result["price"] - prev_7d_close) / prev_7d_close) * 100, 2)
        except Exception as e:
            # Fall back to info fetching for price/changes
            pass

    # Fetch info metadata with sleep/retry logic
    # Adding a small sleep to space requests
    time.sleep(random.uniform(0.15, 0.45))
    
    max_retries = 3
    for attempt in range(max_retries):
        try:
            t = yf.Ticker(yf_ticker, session=session)
            info = t.info
            if info:
                # Fallback for name if wikipedia has a shorter name or missing
                if not result["name"] and info.get("longName"):
                    result["name"] = info.get("longName")
                    
                # Fallback price if history computation failed
                if result["price"] is None:
                    result["price"] = info.get("currentPrice") or info.get("regularMarketPrice") or info.get("previousClose")
                    if result["price"] is not None:
                        result["price"] = round(float(result["price"]), 2)
                    
                # Fallback 24h change if history computation failed
                if result["change24h"] is None:
                    change = info.get("regularMarketChangePercent")
                    if change is not None:
                        result["change24h"] = round(float(change), 2)
                        
                # Set key financials
                result["marketCap"] = info.get("marketCap")
                    
                # Custom mapping for commodities and ETFs
                if "desc" in company:
                    # Commodity — only need daily volume, no P/E, no PEG
                    volume = info.get("volume") or info.get("regularMarketVolume") or info.get("averageVolume") or 0
                    result["marketCap"] = volume
                    result["pe"] = None
                    result["peg"] = None
                elif "target" in company:
                    # ETF — only need daily volume, no AUM, no category, no underlying
                    volume = info.get("volume") or info.get("regularMarketVolume") or info.get("averageVolume") or 0
                    result["marketCap"] = volume
                    result["pe"] = None
                    result["peg"] = None
                else:
                    # Standard stock trailingPE & pegRatio
                    result["pe"] = info.get("trailingPE") or info.get("forwardPE")
                    if result["pe"] is not None:
                        result["pe"] = round(float(result["pe"]), 2)
                        
                    result["peg"] = info.get("pegRatio")
                    if result["peg"] is not None:
                        result["peg"] = round(float(result["peg"]), 2)
                    
                    # Absolute financials
                    result["revenue"] = info.get("totalRevenue")
                    result["netIncome"] = info.get("netIncomeToCommon")
                    result["fcf"] = info.get("freeCashflow")
                    
                    # YoY Growth fields from info
                    rev_growth = info.get("revenueGrowth")
                    if rev_growth is not None:
                        result["revenueGrowth"] = round(float(rev_growth) * 100, 2)
                    
                    ni_growth = info.get("earningsGrowth")
                    if ni_growth is not None:
                        result["netIncomeGrowth"] = round(float(ni_growth) * 100, 2)
                    
                    # FCF Growth: calculate from annual cashflow statement
                    try:
                        cf_stmt = t.cashflow
                        if cf_stmt is not None and not cf_stmt.empty and "Free Cash Flow" in cf_stmt.index:
                            fcf_series = cf_stmt.loc["Free Cash Flow"].dropna()
                            if len(fcf_series) >= 2:
                                curr_fcf = float(fcf_series.iloc[0])
                                prev_fcf = float(fcf_series.iloc[1])
                                if prev_fcf != 0:
                                    result["fcfGrowth"] = round(((curr_fcf - prev_fcf) / abs(prev_fcf)) * 100, 2)
                    except Exception:
                        pass
                    
                break
        except Exception as e:
            err_str = str(e)
            if "Rate limit" in err_str or "Too Many Requests" in err_str or "429" in err_str:
                # Exponential backoff retry
                sleep_time = (attempt + 1) * 8 + random.uniform(2, 6)
                print(f"Rate limited for {yf_ticker}. Retrying in {sleep_time:.2f} seconds (Attempt {attempt+1}/{max_retries})...")
                time.sleep(sleep_time)
            else:
                print(f"Error fetching metadata for {yf_ticker}: {e}")
                break
                
    # Save successful result to cache (thread-safe write)
    if metadata_cache is not None and metadata_cache_lock is not None and result["price"] is not None:
        with metadata_cache_lock:
            metadata_cache[yf_ticker] = {
                "price": result["price"],
                "change24h": result["change24h"],
                "change7d": result["change7d"],
                "marketCap": result["marketCap"],
                "pe": result["pe"],
                "peg": result["peg"],
                "revenue": result["revenue"],
                "netIncome": result["netIncome"],
                "fcf": result["fcf"],
                "revenueGrowth": result["revenueGrowth"],
                "netIncomeGrowth": result["netIncomeGrowth"],
                "fcfGrowth": result["fcfGrowth"]
            }
        
    return result

def collect_index_data(index_name, companies, output_path, session, global_hist_df, metadata_cache, metadata_cache_lock=None):
    """
    Downloads historical close prices, metadata (market cap, P/E, PEG),
    and computes weights for the given index constituents, then saves to output_path.
    """
    print(f"\n===== Collecting Data for {index_name} ({len(companies)} companies) =====")
    start_time = time.time()
    
    # Parallel metadata fetching
    print(f"Fetching {index_name} ticker metadata in parallel...")
    results = []
    max_workers = 6
    
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        future_to_company = {
            executor.submit(fetch_single_ticker_info, company, global_hist_df, session, metadata_cache, metadata_cache_lock): company 
            for company in companies
        }
        
        completed = 0
        total = len(companies)
        for future in as_completed(future_to_company):
            company = future_to_company[future]
            try:
                data = future.result()
                results.append(data)
            except Exception as exc:
                print(f"{company['ticker']} generated an exception: {exc}")
                results.append({
                    "ticker": company["ticker"],
                    "name": company["name"],
                    "sector": company["sector"],
                    "subSector": company["subSector"],
                    "price": None,
                    "change24h": None,
                    "change7d": None,
                    "marketCap": None,
                    "pe": None,
                    "peg": None
                })
            
            completed += 1
            if completed % 50 == 0 or completed == total:
                print(f"Metadata progress: {completed}/{total} fetched...")
                
    # 3. Calculate weights based on market cap
    valid_market_caps = [r["marketCap"] for r in results if r["marketCap"] is not None]
    total_market_cap = sum(valid_market_caps)
    print(f"Total computed {index_name} Market Cap: ${total_market_cap:,.2f}")
    
    # Sort results by market cap descending
    results.sort(key=lambda x: x["marketCap"] if x["marketCap"] is not None else -1, reverse=True)
    
    final_data = []
    rank = 1
    for r in results:
        weight = 0.0
        if r["marketCap"] is not None and total_market_cap > 0:
            weight = round((r["marketCap"] / total_market_cap) * 100, 3)
            
        r["weight"] = weight
        r["rank"] = rank
        rank += 1
        final_data.append(r)
        
    # 4. Data validation before writing — protect against overwriting with bad data
    valid_prices = [r for r in final_data if r.get("price") is not None]
    valid_ratio = len(valid_prices) / len(final_data) if final_data else 0
    
    if valid_ratio < 0.80:
        print(f"WARNING: Only {len(valid_prices)}/{len(final_data)} ({valid_ratio:.0%}) tickers have valid prices for {index_name}.")
        print(f"Skipping write to {output_path} to protect existing data (threshold: 80%).")
        elapsed = time.time() - start_time
        print(f"Collection for {index_name} aborted in {elapsed:.2f} seconds.")
        return
    
    # 5. Save data to JSON
    output_payload = {
        "lastUpdated": time.strftime("%Y-%m-%d %H:%M:%S UTC", time.gmtime()),
        "totalMarketCap": total_market_cap,
        "companiesCount": len(final_data),
        "data": final_data
    }
    
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(output_payload, f, indent=2, ensure_ascii=False)
        
    elapsed = time.time() - start_time
    print(f"Collection for {index_name} completed in {elapsed:.2f} seconds. Written to {output_path} ({len(valid_prices)}/{len(final_data)} valid prices)")

def main():
    start_time = time.time()
    
    # Get the parent directory of this script (which is the SP500-market-cap root)
    script_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    json_dir = os.path.join(script_dir, "data")
    os.makedirs(json_dir, exist_ok=True)
    
    # Create persistent session with retries and a custom user agent
    session = requests.Session()
    session.headers.update({
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    })
    from urllib3.util import Retry
    from requests.adapters import HTTPAdapter
    retries = Retry(total=5, backoff_factor=1.5, status_forcelist=[429, 500, 502, 503, 504])
    session.mount('https://', HTTPAdapter(max_retries=retries))
    
    # 1. Fetch S&P 500 constituents
    try:
        sp500_companies = fetch_Sp500_wikipedia(json_dir)
    except Exception as e:
        print(f"Critical Error scraping S&P 500: {e}")
        sp500_companies = []
        
    # 2. Fetch Nasdaq 100 constituents
    try:
        nasdaq100_companies = fetch_nasdaq100_wikipedia(json_dir)
    except Exception as e:
        print(f"Critical Error scraping Nasdaq 100: {e}")
        nasdaq100_companies = []
        
    # 3. Filter NTTR constituents
    nttr_companies = [c for c in nasdaq100_companies if c.get("sector") == "Technology"]
    
    # Curated Commodities list
    COMMODITIES_LIST = [
        {"ticker": "Altın", "yf_ticker": "GC=F", "name": "Altın (Gold Futures)", "sector": "Emtia", "subSector": "Değerli Metaller", "desc": "1 Ons Altın Vadeli İşlemi"},
        {"ticker": "Gümüş", "yf_ticker": "SI=F", "name": "Gümüş (Silver Futures)", "sector": "Emtia", "subSector": "Değerli Metaller", "desc": "Gümüş Vadeli İşlemi"},
        {"ticker": "Platin", "yf_ticker": "PL=F", "name": "Platin (Platinum Futures)", "sector": "Emtia", "subSector": "Değerli Metaller", "desc": "Platin Vadeli İşlemi"},
        {"ticker": "Ham Petrol", "yf_ticker": "CL=F", "name": "Ham Petrol (WTI Crude)", "sector": "Emtia", "subSector": "Enerji", "desc": "WTI Petrol Vadeli İşlemi"},
        {"ticker": "Brent Petrol", "yf_ticker": "BZ=F", "name": "Brent Petrol (Brent Crude)", "sector": "Emtia", "subSector": "Enerji", "desc": "Brent Petrol Vadeli İşlemi"},
        {"ticker": "Doğal Gaz", "yf_ticker": "NG=F", "name": "Doğal Gaz (Natural Gas)", "sector": "Emtia", "subSector": "Enerji", "desc": "Doğal Gaz Vadeli İşlemi"},
        {"ticker": "Bakır", "yf_ticker": "HG=F", "name": "Bakır (Copper Futures)", "sector": "Emtia", "subSector": "Endüstriyel Metaller", "desc": "Bakır Vadeli İşlemi"},
        {"ticker": "Mısır", "yf_ticker": "ZC=F", "name": "Mısır (Corn Futures)", "sector": "Emtia", "subSector": "Tarım", "desc": "Mısır Vadeli İşlemi"},
        {"ticker": "Buğday", "yf_ticker": "ZW=F", "name": "Buğday (Wheat Futures)", "sector": "Emtia", "subSector": "Tarım", "desc": "Buğday Vadeli İşlemi"},
        {"ticker": "Soya Fasulyesi", "yf_ticker": "ZS=F", "name": "Soya Fasulyesi (Soybeans)", "sector": "Emtia", "subSector": "Tarım", "desc": "Soya Fasulyesi Vadeli İşlemi"},
        {"ticker": "Kahve", "yf_ticker": "KC=F", "name": "Kahve (Coffee Futures)", "sector": "Emtia", "subSector": "Tarım", "desc": "Kahve Vadeli İşlemi"},
        {"ticker": "Şeker", "yf_ticker": "SB=F", "name": "Şeker (Sugar Futures)", "sector": "Emtia", "subSector": "Tarım", "desc": "Şeker Vadeli İşlemi"},
        {"ticker": "Pamuk", "yf_ticker": "CT=F", "name": "Pamuk (Cotton Futures)", "sector": "Emtia", "subSector": "Tarım", "desc": "Pamuk Vadeli İşlemi"}
    ]

    # Curated ETFs list
    ETFS_LIST = [
        {"ticker": "QQQ", "yf_ticker": "QQQ", "name": "Invesco QQQ Trust", "sector": "ETF", "subSector": "Hisse Senedi (Teknoloji)", "target": "Nasdaq 100 Index"},
        {"ticker": "VOO", "yf_ticker": "VOO", "name": "Vanguard S&P 500 ETF", "sector": "ETF", "subSector": "Hisse Senedi (Geniş)", "target": "S&P 500 Index"},
        {"ticker": "IWM", "yf_ticker": "IWM", "name": "iShares Russell 2000 ETF", "sector": "ETF", "subSector": "Hisse Senedi (Küçük Ölçek)", "target": "Russell 2000 Index"},
        {"ticker": "XLE", "yf_ticker": "XLE", "name": "Energy Select Sector SPDR", "sector": "ETF", "subSector": "Hisse Senedi (Sektör)", "target": "Energy Index"},
        {"ticker": "ARKK", "yf_ticker": "ARKK", "name": "ARK Innovation ETF", "sector": "ETF", "subSector": "Hisse Senedi (Aktif/İnovasyon)", "target": "Disruptive Innovation"},
        {"ticker": "QTEC", "yf_ticker": "QTEC", "name": "First Trust Nasdaq-100 Technology Sector Index Fund", "sector": "ETF", "subSector": "Hisse Senedi (Teknoloji)", "target": "Nasdaq 100 Technology Index"},
        {"ticker": "EWJ", "yf_ticker": "EWJ", "name": "iShares MSCI Japan ETF", "sector": "ETF", "subSector": "Ülke (Japonya)", "target": "MSCI Japan Index"},
        {"ticker": "EWG", "yf_ticker": "EWG", "name": "iShares MSCI Germany ETF", "sector": "ETF", "subSector": "Ülke (Almanya)", "target": "MSCI Germany Index"},
        {"ticker": "EWU", "yf_ticker": "EWU", "name": "iShares MSCI United Kingdom ETF", "sector": "ETF", "subSector": "Ülke (İngiltere)", "target": "MSCI UK Index"},
        {"ticker": "INDA", "yf_ticker": "INDA", "name": "iShares MSCI India ETF", "sector": "ETF", "subSector": "Ülke (Hindistan)", "target": "MSCI India Index"},
        {"ticker": "EPI", "yf_ticker": "EPI", "name": "WisdomTree India Earnings Fund", "sector": "ETF", "subSector": "Ülke (Hindistan)", "target": "WisdomTree India Index"},
        {"ticker": "EWT", "yf_ticker": "EWT", "name": "iShares MSCI Taiwan ETF", "sector": "ETF", "subSector": "Ülke (Tayvan)", "target": "MSCI Taiwan Index"},
        {"ticker": "EWY", "yf_ticker": "EWY", "name": "iShares MSCI South Korea ETF", "sector": "ETF", "subSector": "Ülke (Güney Kore)", "target": "MSCI South Korea Index"},
        {"ticker": "MCHI", "yf_ticker": "MCHI", "name": "iShares MSCI China ETF", "sector": "ETF", "subSector": "Ülke (Çin)", "target": "MSCI China Index"},
        {"ticker": "FXI", "yf_ticker": "FXI", "name": "iShares China Large-Cap ETF", "sector": "ETF", "subSector": "Ülke (Çin)", "target": "China Large-Cap Index"},
        {"ticker": "EWZ", "yf_ticker": "EWZ", "name": "iShares MSCI Brazil ETF", "sector": "ETF", "subSector": "Ülke (Brezilya)", "target": "MSCI Brazil Index"},
        {"ticker": "EWW", "yf_ticker": "EWW", "name": "iShares MSCI Mexico ETF", "sector": "ETF", "subSector": "Ülke (Meksika)", "target": "MSCI Mexico Index"},
        {"ticker": "KSA", "yf_ticker": "KSA", "name": "iShares MSCI Saudi Arabia ETF", "sector": "ETF", "subSector": "Ülke (Suudi Arabistan)", "target": "MSCI Saudi Arabia Index"},
        {"ticker": "TUR", "yf_ticker": "TUR", "name": "iShares MSCI Turkey ETF", "sector": "ETF", "subSector": "Ülke (Türkiye)", "target": "MSCI Turkey Index"}
    ]

    # Gather all constituents globally to batch download history and run shared caching
    all_companies = []
    if sp500_companies:
        all_companies.extend(sp500_companies)
    if nasdaq100_companies:
        all_companies.extend(nasdaq100_companies)
    all_companies.extend(COMMODITIES_LIST)
    all_companies.extend(ETFS_LIST)
    
    # Get all unique yfinance tickers
    all_yf_tickers = list(set(c["yf_ticker"] for c in all_companies))
    
    # Download history once globally
    global_hist_df = fetch_history_batch(all_yf_tickers)
    
    # Shared metadata cache dictionary (thread-safe)
    metadata_cache = {}
    metadata_cache_lock = threading.Lock()
    
    # 4. Collect and save index data
    if sp500_companies:
        collect_index_data("S&P 500", sp500_companies, os.path.join(json_dir, "sp500.json"), session, global_hist_df, metadata_cache, metadata_cache_lock)
        
    if nasdaq100_companies:
        collect_index_data("Nasdaq 100", nasdaq100_companies, os.path.join(json_dir, "nasdaq100.json"), session, global_hist_df, metadata_cache, metadata_cache_lock)
        
    if nttr_companies:
        collect_index_data("NTTR", nttr_companies, os.path.join(json_dir, "nttr.json"), session, global_hist_df, metadata_cache, metadata_cache_lock)
        
    # 5. Collect non-stock datasets
    collect_index_data("Emtia", COMMODITIES_LIST, os.path.join(json_dir, "commodities.json"), session, global_hist_df, metadata_cache, metadata_cache_lock)
    collect_index_data("ETFs", ETFS_LIST, os.path.join(json_dir, "etfs.json"), session, global_hist_df, metadata_cache, metadata_cache_lock)
        
    elapsed = time.time() - start_time
    print(f"\nAll index updates completed in {elapsed:.2f} seconds.")

if __name__ == "__main__":
    main()
