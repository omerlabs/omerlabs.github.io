// App Configuration & State
let allData = [];
let filteredData = [];
let dataStore = {
    sp500: [],
    nasdaq100: [],
    nttr: [],
    commodities: [],
    etfs: []
};
let indexMetadata = {
    sp500: { price: null, change: null },
    nasdaq100: { price: null, change: null },
    nttr: { price: null, change: null },
    commodities: { price: null, change: null },
    etfs: { price: null, change: null }
};
let watchlist = new Set(JSON.parse(localStorage.getItem('sp500_watchlist') || '[]'));
let showWatchlistOnly = false;
let deferredPrompt = null;
let activeTab = 'sp500'; // 'sp500', 'nasdaq100', 'nttr'
let selectedSector = ''; // Selected sector filter

let currentPage = 1;
const itemsPerPage = 50;

let sortBy = 'rank';
let sortAsc = true;

// DOM Elements
const elements = {
    searchInput: document.getElementById('search-input'),
    clearSearchBtn: document.getElementById('clear-search'),
    sectorMenuBtn: document.getElementById('sector-menu-btn'),
    sectorMenuList: document.getElementById('sector-menu-list'),
    
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
    tabButtons: document.querySelectorAll('.tab-btn'),
    indexInfoDisplay: document.getElementById('index-info-display'),
    indexInfoLabel: document.getElementById('index-info-label'),
    indexPriceVal: document.getElementById('index-price-val'),
    indexChangeVal: document.getElementById('index-change-val')
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
        navigator.serviceWorker.register('./service-worker.js?v=24')
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
        // Fetch all three index datasets in parallel
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
        indexMetadata.sp500 = { price: sp500Payload.indexPrice, change: sp500Payload.indexChangePercent };
        
        // Update last updated timestamp display using the S&P 500 JSON timestamp
        if (sp500Payload && sp500Payload.lastUpdated) {
            updateLastUpdatedUI(sp500Payload.lastUpdated);
        }
        
        dataStore.nasdaq100 = nasdaq100Payload.data || [];
        indexMetadata.nasdaq100 = { price: nasdaq100Payload.indexPrice, change: nasdaq100Payload.indexChangePercent };
        
        dataStore.nttr = nttrPayload.data || [];
        indexMetadata.nttr = { price: nttrPayload.indexPrice, change: nttrPayload.indexChangePercent };
        
        // Defensively fetch Commodities
        try {
            const commRes = await fetch('data/commodities.json');
            if (commRes.ok) {
                const commPayload = await commRes.json();
                dataStore.commodities = commPayload.data || [];
                indexMetadata.commodities = { price: commPayload.indexPrice, change: commPayload.indexChangePercent };
            }
        } catch (e) {
            console.warn("commodities.json yüklenemedi (henüz oluşturulmamış olabilir):", e);
        }
        
        // Defensively fetch ETFs
        try {
            const etfsRes = await fetch('data/etfs.json');
            if (etfsRes.ok) {
                const etfsPayload = await etfsRes.json();
                dataStore.etfs = etfsPayload.data || [];
                indexMetadata.etfs = { price: etfsPayload.indexPrice, change: etfsPayload.indexChangePercent };
            }
        } catch (e) {
            console.warn("etfs.json yüklenemedi (henüz oluşturulmamış olabilir):", e);
        }
        
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
    
    // Set data-tab on table for CSS column visibility
    const table = document.getElementById('companies-table');
    if (table) table.setAttribute('data-tab', activeTab);
    
    // Update headers dynamically based on asset tab
    updateTableHeaders();
    
    // Populate sector filter options
    populateSectorFilter();
    
    // Update index price/change display
    updateIndexDisplay();
    
    // Apply filters and render
    applyFilters();
}

// Update table header labels based on selected asset tab
function updateTableHeaders() {
    const headers = document.querySelectorAll('#companies-table th.sortable');
    if (!headers || headers.length < 9) return;
    
    // First restore all headers to visible
    Array.from(headers).forEach(h => { h.style.display = ''; });
    
    if (showWatchlistOnly) {
        // Global Watchlist displays all columns: S | Varlık | Fiyat | DEĞER / HACİM | AĞIRLIK | P/E | PEG | 24s % | 7G %
        headers[1].innerHTML = `Varlık <i class="fa-solid fa-sort"></i>`;
        headers[3].innerHTML = `DEĞER /<br>HACİM <i class="fa-solid fa-sort"></i>`;
        headers[4].innerHTML = `AĞIRLIK <i class="fa-solid fa-sort"></i>`;
        headers[5].innerHTML = `P/E <i class="fa-solid fa-sort"></i>`;
        headers[6].innerHTML = `PEG <i class="fa-solid fa-sort"></i>`;
        return;
    }
    
    if (activeTab === 'commodities' || activeTab === 'etfs') {
        // Both commodity and ETF tabs: S | Ad | Fiyat | Günlük Hacim | 24s% | 7G%
        const label = activeTab === 'commodities' ? 'Emtia' : 'ETF';
        headers[1].innerHTML = `${label} <i class="fa-solid fa-sort"></i>`;
        headers[3].innerHTML = `GÜNLÜK<br>HACİM <i class="fa-solid fa-sort"></i>`;
        // Hide Weight, P/E, PEG columns — they don't exist for these assets
        headers[4].style.display = 'none';
        headers[5].style.display = 'none';
        headers[6].style.display = 'none';
    } else {
        headers[1].innerHTML = `Şirket <i class="fa-solid fa-sort"></i>`;
        headers[3].innerHTML = `PİYASA<br>DEĞERİ <i class="fa-solid fa-sort"></i>`;
        const weightLabels = {
            sp500: 'S&P 500<br>AĞIRLIĞI',
            nasdaq100: 'NASDAQ 100<br>AĞIRLIĞI',
            nttr: 'NTTR<br>AĞIRLIĞI'
        };
        headers[4].innerHTML = `${weightLabels[activeTab] || 'Ağırlık'} <i class="fa-solid fa-sort"></i>`;
        headers[5].innerHTML = `P/E <i class="fa-solid fa-sort"></i>`;
        headers[6].innerHTML = `PEG <i class="fa-solid fa-sort"></i>`;
    }
}

// Update index price/change header stats on tab change (stubbed out since index displays are removed)
function updateIndexDisplay() {
    // No-op
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
    
    // Sector Dropdown Toggle Button
    elements.sectorMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isHidden = elements.sectorMenuList.style.display === 'none' || !elements.sectorMenuList.style.display;
        elements.sectorMenuList.style.display = isHidden ? 'block' : 'none';
    });
    
    // Close Dropdown Menu when clicking outside
    document.addEventListener('click', (e) => {
        if (elements.sectorMenuList && !elements.sectorMenuList.contains(e.target) && e.target !== elements.sectorMenuBtn) {
            elements.sectorMenuList.style.display = 'none';
        }
    });
    
    // Watchlist Filter Toggle (Inside search bar)
    elements.watchlistToggleBtn.addEventListener('click', () => {
        showWatchlistOnly = !showWatchlistOnly;
        
        if (showWatchlistOnly) {
            elements.watchlistToggleBtn.classList.add('active');
            elements.watchlistToggleBtn.innerHTML = '<i class="fa-solid fa-heart text-negative"></i>';
        } else {
            elements.watchlistToggleBtn.classList.remove('active');
            elements.watchlistToggleBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
        }
        
        currentPage = 1;
        updateTableHeaders();
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
            
            // Reset sector filter state (preserve search query)
            selectedSector = '';
            elements.sectorMenuBtn.classList.remove('active-sector');
            elements.sectorMenuBtn.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
            currentPage = 1;
            
            // Update active dataset
            updateActiveDataset();
        });
    });
    
    // Index Info Display Click (Open Index Chart)
    if (elements.indexInfoDisplay) {
        elements.indexInfoDisplay.addEventListener('click', () => {
            // Use ETF proxies that work reliably with TradingView widget
            // SP500 → VOO, Nasdaq100 → QQQ, NTTR → QTEC (First Trust Nasdaq-100 Tech Sector ETF)
            const indexSymbolMap = {
                sp500: 'VOO',
                nasdaq100: 'QQQ',
                nttr: 'QTEC'
            };
            const symbol = indexSymbolMap[activeTab];
            if (symbol) {
                showChartModal(symbol);
            }
        });
    }
    
    // Smooth Page-Level Sticky Header Translator
    window.addEventListener('scroll', () => {
        const table = document.getElementById('companies-table');
        if (!table) return;
        const thead = table.querySelector('thead');
        if (!thead) return;
        
        const rect = table.getBoundingClientRect();
        const headerHeight = thead.offsetHeight;
        
        // If the table is scrolled past the top of the viewport but hasn't fully scrolled off the screen
        if (rect.top < 0 && rect.bottom > headerHeight) {
            const maxTranslate = rect.height - headerHeight;
            const translateVal = Math.min(Math.abs(rect.top), maxTranslate);
            thead.style.transform = `translateY(${translateVal}px)`;
            thead.style.zIndex = '15';
        } else {
            thead.style.transform = 'translateY(0)';
        }
    });
}

// Apply Search & Dropdown Filters
function applyFilters() {
    const query = elements.searchInput.value.toLowerCase().trim();
    
    if (query) {
        // Global Search across all tabs
        const uniqueMatches = [];
        const tickersSeen = new Set();
        
    // Determine the base source data depending on whether Watchlist is on
    let sourceData = [];
    if (showWatchlistOnly) {
        // Global Watchlist across all tabs
        const seen = new Set();
        const tabsOrder = ['sp500', 'nasdaq100', 'nttr', 'commodities', 'etfs'];
        // Put active tab first to prioritize its rank/weight context for duplicate tickers
        const priorityTabs = [activeTab].concat(tabsOrder.filter(t => t !== activeTab));
        
        priorityTabs.forEach(tabKey => {
            const db = dataStore[tabKey] || [];
            db.forEach(item => {
                if (watchlist.has(item.ticker) && !seen.has(item.ticker)) {
                    seen.add(item.ticker);
                    sourceData.push(item);
                }
            });
        });
    } else {
        // Standard single-tab source data
        sourceData = dataStore[activeTab] || [];
    }

    // Now filter this sourceData by query and sector
    filteredData = sourceData.filter(item => {
        // Sector Filter
        const matchesSector = !selectedSector || item.subSector === selectedSector;
        
        // Search Query Filter
        let matchesSearch = true;
        if (query) {
            matchesSearch = item.ticker.toLowerCase().includes(query) || 
                            item.name.toLowerCase().includes(query);
        }
        
        return matchesSector && matchesSearch;
    });

    // If query is active AND showWatchlistOnly is false, the user wants global search across all tabs
    if (query && !showWatchlistOnly) {
        const uniqueMatches = [];
        const tickersSeen = new Set();
        const searchOrder = [activeTab].concat(['sp500', 'nasdaq100', 'nttr', 'commodities', 'etfs'].filter(t => t !== activeTab));
        
        searchOrder.forEach(idxName => {
            const db = dataStore[idxName] || [];
            db.forEach(item => {
                if (tickersSeen.has(item.ticker)) return;
                
                const matchesSearch = item.ticker.toLowerCase().includes(query) || 
                                      item.name.toLowerCase().includes(query);
                
                if (matchesSearch) {
                    tickersSeen.add(item.ticker);
                    const matchesSector = !selectedSector || item.subSector === selectedSector;
                    if (matchesSector) {
                        uniqueMatches.push(item);
                    }
                }
            });
        });
        filteredData = uniqueMatches;
    }
    
    // Update footer info counts
    elements.filteredCount.textContent = filteredData.length;
    
    // Re-apply sorting on filtered data
    sortData();
    renderTable();
}

// Populate Sector Filter Options in the Omnibar Menu
function populateSectorFilter() {
    const sectors = new Set();
    allData.forEach(item => {
        if (item.subSector) {
            sectors.add(item.subSector);
        }
    });
    
    const sortedSectors = Array.from(sectors).sort();
    
    if (!elements.sectorMenuList) return;
    
    // Clear menu list
    elements.sectorMenuList.innerHTML = '';
    
    // Add "Tüm Faaliyet Alanları" default option
    const defaultBtn = document.createElement('button');
    defaultBtn.className = `omnibar-menu-item ${!selectedSector ? 'active' : ''}`;
    defaultBtn.textContent = 'Tüm Faaliyet Alanları';
    defaultBtn.addEventListener('click', () => {
        selectSector('');
    });
    elements.sectorMenuList.appendChild(defaultBtn);
    
    // Add each sector option
    sortedSectors.forEach(sector => {
        const sectorBtn = document.createElement('button');
        sectorBtn.className = `omnibar-menu-item ${selectedSector === sector ? 'active' : ''}`;
        sectorBtn.textContent = sector;
        sectorBtn.addEventListener('click', () => {
            selectSector(sector);
        });
        elements.sectorMenuList.appendChild(sectorBtn);
    });
}

// Select dynamic sector from dropdown
function selectSector(sector) {
    selectedSector = sector;
    
    // Toggle active visual classes on sector menu button
    if (selectedSector) {
        elements.sectorMenuBtn.classList.add('active-sector');
        elements.sectorMenuBtn.innerHTML = '<i class="fa-solid fa-chevron-down text-accent"></i>'; // Change color to accent blue
    } else {
        elements.sectorMenuBtn.classList.remove('active-sector');
        elements.sectorMenuBtn.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
    }
    
    // Close the dropdown menu
    elements.sectorMenuList.style.display = 'none';
    
    currentPage = 1;
    applyFilters();
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
        
        // Name cell — for commodities use short ticker name only, no sub-badge
        const displayName = activeTab === 'commodities'
            ? item.ticker
            : (item.name || '').split(' ').join('<br>');
        const showSubBadge = activeTab !== 'commodities';
        
        const tdName = document.createElement('td');
        tdName.className = 'text-left';
        tdName.innerHTML = `
            <div class="cell-company" style="position: relative; width: 100%; height: 100%; cursor: pointer; user-select: none;">
                <span class="company-name">${displayName || '--'}</span>
                ${showSubBadge ? `<span class="company-sub"><span class="ticker-badge">${item.ticker}</span></span>` : ''}
            </div>
        `;
        
        const companyCell = tdName.querySelector('.cell-company');
        let pressTimer = null;
        let didLongPress = false;
        let touchStartPos = { x: 0, y: 0 };
        
        const startPress = (e) => {
            didLongPress = false;
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            touchStartPos = { x: clientX, y: clientY };
            
            pressTimer = setTimeout(() => {
                didLongPress = true;
                handleCompanyLongPress(companyCell, item.ticker);
            }, 550);
        };
        
        const cancelPress = () => {
            if (pressTimer) {
                clearTimeout(pressTimer);
                pressTimer = null;
            }
        };
        
        const movePress = (e) => {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            if (Math.abs(clientX - touchStartPos.x) > 10 || Math.abs(clientY - touchStartPos.y) > 10) {
                cancelPress();
            }
        };
        
        companyCell.addEventListener('mousedown', startPress);
        companyCell.addEventListener('touchstart', startPress, { passive: true });
        
        companyCell.addEventListener('mouseup', cancelPress);
        companyCell.addEventListener('touchend', cancelPress);
        companyCell.addEventListener('mouseleave', cancelPress);
        
        companyCell.addEventListener('mousemove', movePress);
        companyCell.addEventListener('touchmove', movePress, { passive: true });
        
        companyCell.addEventListener('click', (e) => {
            if (didLongPress) {
                e.stopPropagation();
                didLongPress = false;
            }
        });
        
        tr.appendChild(tdName);
        
        // Price
        const tdPrice = document.createElement('td');
        tdPrice.className = 'cell-price text-right';
        tdPrice.textContent = formatPrice(item.price);
        tr.appendChild(tdPrice);
        
        // Volume / Market Cap
        const tdMarketCap = document.createElement('td');
        tdMarketCap.className = 'font-mono text-right';
        if ((activeTab === 'commodities' || activeTab === 'etfs') && !showWatchlistOnly) {
            // marketCap holds daily volume for both commodity and ETF tabs
            tdMarketCap.textContent = item.marketCap !== null && item.marketCap !== undefined
                ? item.marketCap.toLocaleString('en-US') : '--';
        } else {
            // In stock tabs or global watchlist, format appropriately
            if (item.sector === 'Emtia' || item.sector === 'ETF') {
                tdMarketCap.textContent = item.marketCap !== null && item.marketCap !== undefined
                    ? item.marketCap.toLocaleString('en-US') : '--';
            } else {
                tdMarketCap.textContent = formatCompactCurrency(item.marketCap);
            }
        }
        tr.appendChild(tdMarketCap);
        
        // Columns 5-7 (Weight / P/E / PEG) — only for stock tabs when not in global watchlist
        if ((activeTab === 'commodities' || activeTab === 'etfs') && !showWatchlistOnly) {
            // Only show volume (already in marketCap). No weight, no P/E, no PEG cells
        } else {
            // Standard stock columns
            const tdWeight = document.createElement('td');
            tdWeight.className = 'cell-weight text-right text-accent';
            tdWeight.textContent = item.sp500Weight !== undefined && item.sp500Weight !== null ? `%${item.sp500Weight.toFixed(3)}` : '--';
            tr.appendChild(tdWeight);
            
            const tdPE = document.createElement('td');
            tdPE.className = 'font-mono text-right';
            tdPE.textContent = item.pe !== null && item.pe !== undefined ? item.pe.toFixed(2) : '--';
            tr.appendChild(tdPE);
            
            const tdPEG = document.createElement('td');
            tdPEG.className = 'font-mono text-right';
            tdPEG.textContent = item.peg !== null && item.peg !== undefined ? item.peg.toFixed(2) : '--';
            tr.appendChild(tdPEG);
        }
        
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
    
    // Commodity mapping dictionary using free TVC / Capital.com CFD symbols to avoid licensing constraints
    const commodityTVMap = {
        'Altın': 'TVC:GOLD',
        'Gümüş': 'TVC:SILVER',
        'Platin': 'TVC:PLATINUM',
        'Ham Petrol': 'TVC:USOIL',
        'Brent Petrol': 'TVC:UKOIL',
        'Doğal Gaz': 'TVC:NATGAS',
        'Bakır': 'CAPITALCOM:COPPER',
        'Mısır': 'CAPITALCOM:CORN',
        'Buğday': 'CAPITALCOM:WHEAT',
        'Soya Fasulyesi': 'CAPITALCOM:SOYBEAN',
        'Kahve': 'CAPITALCOM:COFFEE',
        'Şeker': 'CAPITALCOM:SUGAR',
        'Pamuk': 'CAPITALCOM:COTTON'
    };
    
    // Clean ticker for TradingView symbol (e.g. replace "-" with "." for class shares if yfinance used dashes)
    let tvSymbol = ticker.replace('-', '.');
    if (commodityTVMap[ticker]) {
        tvSymbol = commodityTVMap[ticker];
    }
    
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
    localStorage.setItem('sp500_watchlist', JSON.stringify(Array.from(watchlist)));
    applyFilters();
}

// Handle company cell long press (add or remove watchlist)
function handleCompanyLongPress(element, ticker) {
    if (navigator.vibrate) {
        navigator.vibrate(50); // device vibration haptic feedback
    }
    
    const isFav = watchlist.has(ticker);
    
    if (showWatchlistOnly) {
        // Watchlist View: Long press REMOVES the item
        if (isFav) {
            triggerHeartBurstAnimation(element);
            
            setTimeout(() => {
                watchlist.delete(ticker);
                localStorage.setItem('sp500_watchlist', JSON.stringify(Array.from(watchlist)));
                applyFilters();
            }, 600);
        }
    } else {
        // Main View: Long press only ADDS the item
        if (!isFav) {
            watchlist.add(ticker);
            localStorage.setItem('sp500_watchlist', JSON.stringify(Array.from(watchlist)));
            triggerHeartPopupAnimation(element);
        } else {
            // If already added, trigger a small heart popup as visual feedback
            triggerHeartPopupAnimation(element);
        }
    }
}

// Sparkle/Popup heart animation (Follow feedback)
function triggerHeartPopupAnimation(element) {
    const heart = document.createElement('i');
    heart.className = 'fa-solid fa-heart heart-anim-overlay';
    element.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 800);
}

// Particle explosion heart animation (Unfollow feedback)
function triggerHeartBurstAnimation(element) {
    const container = document.createElement('div');
    container.className = 'heart-burst-container';
    element.appendChild(container);
    
    const mainHeart = document.createElement('i');
    mainHeart.className = 'fa-solid fa-heart main-burst-heart';
    container.appendChild(mainHeart);
    
    for (let i = 0; i < 6; i++) {
        const particle = document.createElement('i');
        particle.className = 'fa-solid fa-heart burst-particle';
        const angle = (i * 60) + Math.random() * 20;
        const dist = 30 + Math.random() * 20;
        particle.style.setProperty('--angle', `${angle}deg`);
        particle.style.setProperty('--dist', `${dist}px`);
        container.appendChild(particle);
    }
    
    setTimeout(() => {
        container.remove();
    }, 800);
}

// Function to update last updated time on UI in Turkey Time (TSİ)
function updateLastUpdatedUI(utcTimeStr) {
    const el = document.getElementById('last-updated');
    if (!el || !utcTimeStr) return;
    
    try {
        // Parse UTC time string (e.g., "2026-07-29 12:53:23 UTC")
        const cleanStr = utcTimeStr.replace(' UTC', '').replace(' ', 'T') + 'Z';
        const date = new Date(cleanStr);
        
        if (isNaN(date.getTime())) {
            el.textContent = `Son Güncelleme: ${utcTimeStr}`;
            return;
        }
        
        // Format to Turkey Time (UTC+3)
        const trTimeStr = date.toLocaleString('tr-TR', {
            timeZone: 'Europe/Istanbul',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        el.textContent = `Son Güncelleme: ${trTimeStr} (TSİ)`;
    } catch (e) {
        console.error("Error formatting date:", e);
        el.textContent = `Son Güncelleme: ${utcTimeStr}`;
    }
}
