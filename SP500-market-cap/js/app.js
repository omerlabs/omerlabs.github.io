// App Configuration & State
let allData = [];
let filteredData = [];
let dataStore = {
    sp500: [],
    nasdaq100: [],
    nttr: []
};
let watchlist = new Set(JSON.parse(localStorage.getItem('sp500_watchlist') || '[]'));
let showWatchlistOnly = false;
let deferredPrompt = null;
let activeTab = 'sp500'; // 'sp500', 'nasdaq100', 'nttr'

let currentPage = 1;
const itemsPerPage = 50;

let sortBy = 'rank';
let sortAsc = true;

// DOM Elements
const elements = {
    searchInput: document.getElementById('search-input'),
    clearSearchBtn: document.getElementById('clear-search'),
    sectorFilter: document.getElementById('sector-filter'),
    
    tableBody: document.getElementById('table-body'),
    tableHeaders: document.querySelectorAll('#companies-table th.sortable'),
    
    filteredCount: document.getElementById('filtered-count'),
    totalCount: document.getElementById('total-count'),
    currentPage: document.getElementById('current-page'),
    totalPages: document.getElementById('total-pages'),
    btnPrev: document.getElementById('btn-prev'),
    btnNext: document.getElementById('btn-next'),
    chartModal: document.getElementById('chart-modal'),
    closeModalBtn: document.getElementById('close-modal-btn'),
    watchlistToggleBtn: document.getElementById('watchlist-toggle-btn'),
    installBtn: document.getElementById('install-btn'),
    tabButtons: document.querySelectorAll('.tab-btn')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    fetchData();
    setupEventListeners();
    registerServiceWorker();
});

// Register PWA Service Worker
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js?v=11')
            .then((reg) => {
                console.log('Service Worker registered successfully with scope:', reg.scope);
                reg.addEventListener('updatefound', () => {
                    const installingWorker = reg.installing;
                    if (installingWorker) {
                        installingWorker.addEventListener('statechange', () => {
                            if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                console.log('New service worker version installed, reloading...');
                                window.location.reload();
                            }
                        });
                    }
                });
            })
            .catch((err) => console.error('Service Worker registration failed:', err));
    }
}

// Fetch Data from JSON File
async function fetchData() {
    try {
        // Fetch all three datasets in parallel
        const [sp500Res, nasdaq100Res, nttrRes] = await Promise.all([
            fetch('data/sp500.json'),
            fetch('data/nasdaq100.json'),
            fetch('data/nttr.json')
        ]);
        
        if (!sp500Res.ok || !nasdaq100Res.ok || !nttrRes.ok) {
            throw new Error("Bazı endeks dosyaları yüklenemedi.");
        }
        
        const [sp500Payload, nasdaq100Payload, nttrPayload] = await Promise.all([
            sp500Res.json(),
            nasdaq100Res.json(),
            nttrRes.json()
        ]);
        
        dataStore.sp500 = sp500Payload.data || [];
        dataStore.nasdaq100 = nasdaq100Payload.data || [];
        dataStore.nttr = nttrPayload.data || [];
        
        // Update active dataset
        updateActiveDataset();
        
    } catch (error) {
        console.error('Veri yükleme hatası:', error);
        elements.tableBody.innerHTML = `
            <tr class="error-row">
                <td colspan="9" class="text-center text-negative" style="padding: 40px;">
                    <i class="fa-solid fa-triangle-exclamation" style="font-size: 2rem; margin-bottom: 12px; display: block;"></i>
                    Hata: Veriler yüklenemedi. Python veri güncelleme scriptinin çalıştırıldığından emin olun. <br>
                    <small style="color: var(--text-muted);">${error.message}</small>
                </td>
            </tr>
        `;
    }
}

// Update active dataset when switching tabs
function updateActiveDataset() {
    allData = dataStore[activeTab] || [];
    
    // Update total count
    elements.totalCount.textContent = allData.length;
    
    // Populate sector filter options
    populateSectorFilter();
    
    // Apply filters and render
    applyFilters();
}

// Setup Event Listeners for controls & table headers
function setupEventListeners() {
    // Live Search
    elements.searchInput.addEventListener('input', (e) => {
        const value = e.target.value;
        elements.clearSearchBtn.style.display = value ? 'block' : 'none';
        currentPage = 1;
        applyFilters();
    });
    
    // Sector Filter Change
    elements.sectorFilter.addEventListener('change', () => {
        currentPage = 1;
        applyFilters();
    });
    
    // Watchlist Filter Toggle
    elements.watchlistToggleBtn.addEventListener('click', () => {
        showWatchlistOnly = !showWatchlistOnly;
        
        if (showWatchlistOnly) {
            elements.watchlistToggleBtn.classList.add('watchlist-active');
            elements.watchlistToggleBtn.innerHTML = '<i class="fa-solid fa-heart text-negative"></i> Tüm Şirketler';
        } else {
            elements.watchlistToggleBtn.classList.remove('watchlist-active');
            elements.watchlistToggleBtn.innerHTML = '<i class="fa-regular fa-heart"></i> Takip Listesi';
        }
        
        currentPage = 1;
        applyFilters();
    });
    
    // Clear Search Button
    elements.clearSearchBtn.addEventListener('click', () => {
        elements.searchInput.value = '';
        elements.clearSearchBtn.style.display = 'none';
        currentPage = 1;
        applyFilters();
    });
    
    // Pagination Controls
    elements.btnPrev.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderTable();
        }
    });
    
    elements.btnNext.addEventListener('click', () => {
        const totalPages = Math.ceil(filteredData.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderTable();
        }
    });
    
    // Table Sorting
    elements.tableHeaders.forEach(th => {
        th.addEventListener('click', () => {
            const column = th.dataset.sort;
            handleSorting(column);
        });
    });
    
    // Close Modal Events
    elements.closeModalBtn.addEventListener('click', closeChartModal);
    
    window.addEventListener('click', (e) => {
        if (e.target === elements.chartModal) {
            closeChartModal();
        }
    });
    
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elements.chartModal.style.display === 'flex') {
            closeChartModal();
        }
    });
    
    // Listen for PWA install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        if (elements.installBtn) {
            elements.installBtn.style.display = 'inline-flex';
        }
    });

    // Custom PWA Install Button Click
    if (elements.installBtn) {
        elements.installBtn.addEventListener('click', async () => {
            if (!deferredPrompt) return;
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`User response to the install prompt: ${outcome}`);
            deferredPrompt = null;
            elements.installBtn.style.display = 'none';
        });
    }

    // Hide install button once PWA is successfully installed
    window.addEventListener('appinstalled', (event) => {
        console.log('PWA was installed successfully!');
        if (elements.installBtn) {
            elements.installBtn.style.display = 'none';
        }
        deferredPrompt = null;
    });

    // Tab Switch Events
    elements.tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetIndex = e.currentTarget.dataset.index;
            if (activeTab === targetIndex) return;
            
            activeTab = targetIndex;
            
            // Toggle active classes
            elements.tabButtons.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            // Reset sector filter and page (preserve search query)
            elements.sectorFilter.value = '';
            currentPage = 1;
            
            // Update active dataset
            updateActiveDataset();
        });
    });
}

// Apply Search & Dropdown Filters
function applyFilters() {
    const query = elements.searchInput.value.toLowerCase().trim();
    const selectedSector = elements.sectorFilter.value;
    
    if (query) {
        // Global Search across all tabs
        const uniqueMatches = [];
        const tickersSeen = new Set();
        
        // Priority order: active tab first, then others
        const searchOrder = [activeTab];
        ['sp500', 'nasdaq100', 'nttr'].forEach(idx => {
            if (!searchOrder.includes(idx)) {
                searchOrder.push(idx);
            }
        });
        
        searchOrder.forEach(idxName => {
            const db = dataStore[idxName] || [];
            db.forEach(item => {
                if (tickersSeen.has(item.ticker)) return;
                
                const matchesSearch = item.ticker.toLowerCase().includes(query) || 
                                      item.name.toLowerCase().includes(query);
                
                if (matchesSearch) {
                    tickersSeen.add(item.ticker);
                    
                    // Check sector filter and watchlist filter
                    const matchesSector = !selectedSector || item.subSector === selectedSector;
                    const matchesWatchlist = !showWatchlistOnly || watchlist.has(item.ticker);
                    
                    if (matchesSector && matchesWatchlist) {
                        uniqueMatches.push(item);
                    }
                }
            });
        });
        
        filteredData = uniqueMatches;
    } else {
        // Standard Tab Filtered Search (no active query)
        const activeDb = dataStore[activeTab] || [];
        filteredData = activeDb.filter(item => {
            // Sector Filter
            const matchesSector = !selectedSector || item.subSector === selectedSector;
            
            // Watchlist Filter
            const matchesWatchlist = !showWatchlistOnly || watchlist.has(item.ticker);
                
            return matchesSector && matchesWatchlist;
        });
    }
    
    // Update footer info counts
    elements.filteredCount.textContent = filteredData.length;
    
    // Re-apply sorting on filtered data
    sortData();
    renderTable();
}

// Populate Sector Filter Options
function populateSectorFilter() {
    const sectors = new Set();
    allData.forEach(item => {
        if (item.subSector) {
            sectors.add(item.subSector);
        }
    });
    
    // Sort sectors alphabetically
    const sortedSectors = Array.from(sectors).sort();
    
    // Clear and populate select element
    elements.sectorFilter.innerHTML = '<option value="">Tüm Faaliyet Alanları</option>';
    sortedSectors.forEach(sector => {
        const option = document.createElement('option');
        option.value = sector;
        option.textContent = sector;
        elements.sectorFilter.appendChild(option);
    });
}

// Manage header sort state and trigger sorting
function handleSorting(column) {
    if (sortBy === column) {
        // Toggle direction
        sortAsc = !sortAsc;
    } else {
        // New column sorted
        sortBy = column;
        // Default sort direction: descending for numerical, ascending for alphabetical/rank
        sortAsc = (column === 'rank' || column === 'ticker' || column === 'name');
    }
    
    // Update UI headers
    elements.tableHeaders.forEach(th => {
        const icon = th.querySelector('i');
        if (th.dataset.sort === sortBy) {
            th.classList.add('active');
            if (sortAsc) {
                icon.className = 'fa-solid fa-sort-up';
                icon.style.opacity = 1;
            } else {
                icon.className = 'fa-solid fa-sort-down';
                icon.style.opacity = 1;
            }
        } else {
            th.classList.remove('active');
            icon.className = 'fa-solid fa-sort';
            icon.style.opacity = 0.5;
        }
    });
    
    sortData();
    renderTable();
}

// Perform sorting in-place
function sortData() {
    filteredData.sort((a, b) => {
        let valA = a[sortBy];
        let valB = b[sortBy];
        
        // Push nulls/undefineds to the bottom regardless of sorting order
        if (valA === null || valA === undefined) return 1;
        if (valB === null || valB === undefined) return -1;
        
        if (typeof valA === 'string') {
            return sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
        } else {
            return sortAsc ? valA - valB : valB - valA;
        }
    });
}

// Render filtered paginated table rows
function renderTable() {
    const totalItems = filteredData.length;
    elements.filteredCount.textContent = totalItems;
    
    const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
    elements.totalPages.textContent = totalPages;
    
    // Bounds check page
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;
    elements.currentPage.textContent = currentPage;
    
    // Enable/disable page buttons
    elements.btnPrev.disabled = currentPage === 1;
    elements.btnNext.disabled = currentPage === totalPages;
    
    // Slice data
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const pageData = filteredData.slice(startIdx, endIdx);
    
    elements.tableBody.innerHTML = '';
    
    if (pageData.length === 0) {
        elements.tableBody.innerHTML = `
            <tr>
                <td colspan="9" class="text-center text-muted" style="padding: 40px;">
                    <i class="fa-regular fa-folder-open" style="font-size: 1.8rem; margin-bottom: 8px; display: block;"></i>
                    Arama kriterlerine uygun şirket bulunamadı.
                </td>
            </tr>
        `;
        return;
    }
    
    const fragment = document.createDocumentFragment();
    
    pageData.forEach(item => {
        const tr = document.createElement('tr');
        
        // Rank
        const tdRank = document.createElement('td');
        tdRank.className = 'cell-rank';
        tdRank.textContent = item.rank;
        tr.appendChild(tdRank);
        
        // Name & Ticker (with heart favorite button)
        const isFav = watchlist.has(item.ticker);
        const favIconClass = isFav ? 'fa-solid fa-heart fav-active' : 'fa-regular fa-heart fav-inactive';
        
        const tdName = document.createElement('td');
        tdName.className = 'text-left';
        tdName.innerHTML = `
            <div class="cell-company-row">
                <button class="fav-btn" data-ticker="${item.ticker}">
                    <i class="${favIconClass}"></i>
                </button>
                <div class="cell-company">
                    <span class="company-name">${item.name || '--'}</span>
                    <span class="company-sub">
                        <span class="ticker-badge">${item.ticker}</span>
                    </span>
                </div>
            </div>
        `;
        
        // Setup favorite heart click handler
        const favBtn = tdName.querySelector('.fav-btn');
        favBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent opening the chart modal
            toggleWatchlist(item.ticker);
        });
        
        tr.appendChild(tdName);
        
        // Price
        const tdPrice = document.createElement('td');
        tdPrice.className = 'cell-price text-right';
        tdPrice.textContent = formatPrice(item.price);
        tr.appendChild(tdPrice);
        
        // Market Cap
        const tdMarketCap = document.createElement('td');
        tdMarketCap.className = 'font-mono text-right';
        tdMarketCap.textContent = formatCompactCurrency(item.marketCap);
        tr.appendChild(tdMarketCap);
        
        // S&P 500 Weight
        const tdWeight = document.createElement('td');
        tdWeight.className = 'cell-weight text-right text-accent';
        tdWeight.textContent = item.sp500Weight !== undefined ? `%${item.sp500Weight.toFixed(3)}` : '--';
        tr.appendChild(tdWeight);
        
        // P/E Ratio
        const tdPE = document.createElement('td');
        tdPE.className = 'font-mono text-right';
        tdPE.textContent = item.pe !== null && item.pe !== undefined ? item.pe.toFixed(2) : '--';
        tr.appendChild(tdPE);
        
        // PEG Ratio
        const tdPEG = document.createElement('td');
        tdPEG.className = 'font-mono text-right';
        tdPEG.textContent = item.peg !== null && item.peg !== undefined ? item.peg.toFixed(2) : '--';
        tr.appendChild(tdPEG);
        
        // 24h Change
        const tdChange24h = document.createElement('td');
        tdChange24h.className = 'text-right';
        tdChange24h.appendChild(createChangeBadge(item.change24h));
        tr.appendChild(tdChange24h);
        
        // 7d Change
        const tdChange7d = document.createElement('td');
        tdChange7d.className = 'text-right';
        tdChange7d.appendChild(createChangeBadge(item.change7d));
        tr.appendChild(tdChange7d);
        
        // Open chart modal on row click
        tr.addEventListener('click', () => {
            showChartModal(item.ticker);
        });
        
        fragment.appendChild(tr);
    });
    
    elements.tableBody.appendChild(fragment);
}

// Helpers
function formatPrice(price) {
    if (price === null || price === undefined || isNaN(price)) return '--';
    return '$' + price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatCompactCurrency(number) {
    if (number === null || number === undefined || isNaN(number)) return '--';
    const abs = Math.abs(number);
    if (abs >= 1e12) {
        return '$' + (number / 1e12).toFixed(2) + 'T';
    } else if (abs >= 1e9) {
        return '$' + (number / 1e9).toFixed(2) + 'B';
    } else if (abs >= 1e6) {
        return '$' + (number / 1e6).toFixed(2) + 'M';
    } else {
        return '$' + number.toLocaleString('en-US', { maximumFractionDigits: 2 });
    }
}

function createChangeBadge(val) {
    const span = document.createElement('span');
    if (val === null || val === undefined || isNaN(val)) {
        span.className = 'badge-change neutral';
        span.textContent = '--';
        return span;
    }
    
    const sign = val >= 0 ? '+' : '';
    span.textContent = `${sign}${val.toFixed(2)}%`;
    
    if (val > 0) {
        span.className = 'badge-change positive';
    } else if (val < 0) {
        span.className = 'badge-change negative';
    } else {
        span.className = 'badge-change neutral';
    }
    
    return span;
}

// Show TradingView Chart Modal
function showChartModal(ticker) {
    elements.chartModal.style.display = 'flex';
    
    // Clean ticker for TradingView symbol (e.g. replace "-" with "." for class shares if yfinance used dashes)
    const tvSymbol = ticker.replace('-', '.');
    
    const container = document.getElementById('tv-chart-container');
    container.innerHTML = '<div class="tradingview-widget-container__widget"></div>';
    
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
    script.async = true;
    
    const config = {
        "symbols": [
            [
                tvSymbol,
                tvSymbol + "|1D"
            ]
        ],
        "chartOnly": false,
        "width": "100%",
        "height": "400",
        "locale": "tr",
        "colorTheme": "dark",
        "autosize": false,
        "showVolume": false,
        "showMA": false,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "Inter, sans-serif",
        "fontSize": "10",
        "noTimeScale": false,
        "valuesTracking": "1",
        "changeMode": "price-and-percent",
        "chartType": "area",
        "headerFontSize": "medium",
        "backgroundColor": "#0d1117",
        "gridLineColor": "rgba(240, 243, 250, 0.06)",
        "lineWidth": 2,
        "lineColor": "#00e676",
        "topColor": "rgba(0, 230, 118, 0.2)",
        "bottomColor": "rgba(0, 230, 118, 0)"
    };
    
    script.text = JSON.stringify(config);
    container.appendChild(script);
}

// Close TradingView Chart Modal
function closeChartModal() {
    elements.chartModal.style.display = 'none';
    const container = document.getElementById('tv-chart-container');
    container.innerHTML = ''; // Stop background script processes
}

// Toggle Watchlist Item
function toggleWatchlist(ticker) {
    if (watchlist.has(ticker)) {
        watchlist.delete(ticker);
    } else {
        watchlist.add(ticker);
    }
    
    // Save to localStorage
    localStorage.setItem('sp500_watchlist', JSON.stringify(Array.from(watchlist)));
    
    // Re-apply filters to update the view
    applyFilters();
}
