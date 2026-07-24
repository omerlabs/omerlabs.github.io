import os
import json
import requests
from bs4 import BeautifulSoup
import yfinance as yf
from concurrent.futures import ThreadPoolExecutor, as_completed
import time
import random


def fetch_sp500_wikipedia():
    """
    Fetches the list of S&P 500 companies from Wikipedia.
    Returns a list of dictionaries with company details.
    """
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

def fetch_single_ticker_info(company, hist_df=None, session=None):
    """
    Fetches the metadata (market cap, float, PE) for a single ticker.
    Uses historical dataframe to compute 24h & 7d change, and current price if possible.
    """
    ticker = company["ticker"]
    yf_ticker = company["yf_ticker"]
    
    result = {
        "ticker": ticker,
        "name": company["name"],
        "sector": company["sector"],
        "subSector": company["subSector"],
        "price": None,
        "change24h": None,
        "change7d": None,
        "marketCap": None,
        "sharesOutstanding": None,
        "floatPercent": None,
        "pe": None
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
                result["sharesOutstanding"] = info.get("sharesOutstanding")
                
                # Free Float computation: leave null if not provided, no estimations!
                float_shares = info.get("floatShares")
                shares_out = info.get("sharesOutstanding")
                shares_percent_out = info.get("sharesPercentSharesOut")
                
                if float_shares is not None and shares_out:
                    val = (float(float_shares) / float(shares_out)) * 100
                    result["floatPercent"] = round(min(val, 100.0), 2)
                elif shares_percent_out is not None:
                    val = float(shares_percent_out) * 100
                    result["floatPercent"] = round(min(val, 100.0), 2)
                else:
                    result["floatPercent"] = None
                    
                result["pe"] = info.get("trailingPE") or info.get("forwardPE")
                if result["pe"] is not None:
                    result["pe"] = round(float(result["pe"]), 2)
                    
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
                
    return result

def main():
    start_time = time.time()
    
    # 1. Fetch S&P 500 list
    try:
        companies = fetch_sp500_wikipedia()
    except Exception as e:
        print(f"Critical Error: {e}")
        return
        
    yf_tickers = [c["yf_ticker"] for c in companies]
    
    # 2. Fetch history in batch
    hist_df = fetch_history_batch(yf_tickers)
    
    # Create persistent session with retries and a custom user agent
    session = requests.Session()
    session.headers.update({
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    })
    from urllib3.util import Retry
    from requests.adapters import HTTPAdapter
    retries = Retry(total=5, backoff_factor=1.5, status_forcelist=[429, 500, 502, 503, 504])
    session.mount('https://', HTTPAdapter(max_retries=retries))
    
    # 3. Fetch metadata in parallel using ThreadPoolExecutor
    print("Fetching ticker metadata in parallel...")
    results = []
    max_workers = 6  # reduced workers to be respectful of rate limits
    
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        # Submit tasks passing the session
        future_to_company = {executor.submit(fetch_single_ticker_info, company, hist_df, session): company for company in companies}
        
        completed = 0
        total = len(companies)
        for future in as_completed(future_to_company):
            company = future_to_company[future]
            try:
                data = future.result()
                results.append(data)
            except Exception as exc:
                print(f"{company['ticker']} generated an exception: {exc}")
                # Append blank structure
                results.append({
                    "ticker": company["ticker"],
                    "name": company["name"],
                    "sector": company["sector"],
                    "subSector": company["subSector"],
                    "price": None,
                    "change24h": None,
                    "change7d": None,
                    "marketCap": None,
                    "sharesOutstanding": None,
                    "floatPercent": None,
                    "pe": None
                })
            
            completed += 1
            if completed % 50 == 0 or completed == total:
                print(f"Metadata progress: {completed}/{total} fetched...")

    # 4. Clean up results and compute weights
    # Calculate S&P 500 Weight
    valid_market_caps = [r["marketCap"] for r in results if r["marketCap"] is not None]
    total_market_cap = sum(valid_market_caps)
    print(f"Total computed S&P 500 Market Cap: ${total_market_cap:,.2f}")
    
    # Sort results by market cap descending
    results.sort(key=lambda x: x["marketCap"] if x["marketCap"] is not None else -1, reverse=True)
    
    final_data = []
    rank = 1
    for r in results:
        # Calculate weight
        weight = 0.0
        if r["marketCap"] is not None and total_market_cap > 0:
            weight = round((r["marketCap"] / total_market_cap) * 100, 3)
            
        r["sp500Weight"] = weight
        r["rank"] = rank
        rank += 1
        final_data.append(r)
        
    # Fetch S&P 500 index price & change
    print("Fetching S&P 500 index price (^GSPC)...")
    index_price = None
    index_change = None
    try:
        gspc = yf.Ticker("^GSPC", session=session)
        gspc_info = gspc.info
        if gspc_info:
            index_price = gspc_info.get("currentPrice") or gspc_info.get("regularMarketPrice") or gspc_info.get("previousClose")
            index_change = gspc_info.get("regularMarketChangePercent")
        
        # fallback
        if index_price is None or index_change is None:
            gspc_hist = gspc.history(period="2d")
            if len(gspc_hist) >= 1:
                index_price = round(float(gspc_hist["Close"].iloc[-1]), 2)
            if len(gspc_hist) >= 2:
                prev = float(gspc_hist["Close"].iloc[-2])
                index_change = round(((index_price - prev) / prev) * 100, 2)
                
        if index_price is not None:
            index_price = round(float(index_price), 2)
        if index_change is not None:
            index_change = round(float(index_change), 2)
    except Exception as e:
        print(f"Error fetching ^GSPC data: {e}")

    # 5. Save data to JSON
json_dir = os.path.join("SP500-market-cap", "data")
os.makedirs(json_dir, exist_ok=True)
json_path = os.path.join(json_dir, "sp500.json")
    
    output_payload = {
        "lastUpdated": time.strftime("%Y-%m-%d %H:%M:%S UTC", time.gmtime()),
        "totalMarketCap": total_market_cap,
        "companiesCount": len(final_data),
        "indexPrice": index_price,
        "indexChangePercent": index_change,
        "data": final_data
    }
    
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(output_payload, f, indent=2, ensure_ascii=False)
        
    elapsed = time.time() - start_time
    print(f"Data collection completed in {elapsed:.2f} seconds. Output written to {json_path}")

if __name__ == "__main__":
    main()
