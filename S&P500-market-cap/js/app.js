// App Configuration & State
let allData = [];
let filteredData = [];

let currentPage = 1;
const itemsPerPage = 50;

let sortBy = 'rank';
let sortAsc = true;

// DOM Elements
const elements = {
    headerIndexVal: document.getElementById('header-index-val'),
    headerTotalCap: document.getElementById('header-total-cap'),
    headerUpdateTime: document.getElementById('header-update-time'),
    
    cardIndexPrice: document.getElementById('card-index-price'),
    cardIndexChange: document.getElementById('card-index-change'),
    cardTotalCap: document.getElementById('card-total-cap'),
    
    searchInput: document.getElementById('search-input'),
    clearSearchBtn: document.getElementById('clear-search'),
    
    tableBody: document.getElementById('table-body'),
    tableHeaders: document.querySelectorAll('#companies-table th.sortable'),
    
    filteredCount: document.getElementById('filtered-count'),
    totalCount: document.getElementById('total-count'),
    currentPage: document.getElementById('current-page'),
    totalPages: document.getElementById('total-pages'),
    btnPrev: document.getElementById('btn-prev'),
    btnNext: document.getElementById('btn-next')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    fetchData();
    setupEventListeners();
});

// Fetch Data from JSON File
async function fetchData() {
    try {
        const response = await fetch('data/sp500.json');
        if (!response.ok) {
            throw new Error(`Veri dosyası yüklenemedi: HTTP ${response.status}`);
        }
        const payload = await response.json();
        
        allData = payload.data || [];
        filteredData = [...allData];
        
        // Update header & summary stats
        updateHeaderAndCards(payload);
        
        // Render initial table
        renderTable();
        
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

// Setup Event Listeners for controls & table headers
function setupEventListeners() {
    // Live Search
    elements.searchInput.addEventListener('input', (e) => {
        const value = e.target.value;
        elements.clearSearchBtn.style.display = value ? 'block' : 'none';
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
}

// Calculate and render Top Stats cards
function updateHeaderAndCards(payload) {
    const timeStr = payload.lastUpdated || '--';
    const totalCap = payload.totalMarketCap || 0;
    const indexPrice = payload.indexPrice;
    const indexChange = payload.indexChangePercent;
    
    elements.headerUpdateTime.textContent = timeStr;
    elements.headerTotalCap.textContent = formatCompactCurrency(totalCap);
    elements.cardTotalCap.textContent = formatCompactCurrency(totalCap);
    elements.totalCount.textContent = allData.length;
    
    // Update S&P 500 Index Card
    if (indexPrice !== null && indexPrice !== undefined) {
        elements.cardIndexPrice.textContent = formatPrice(indexPrice);
        if (indexChange !== null && indexChange !== undefined) {
            const sign = indexChange >= 0 ? '+' : '';
            const caret = indexChange >= 0 ? '<i class="fa-solid fa-caret-up"></i>' : '<i class="fa-solid fa-caret-down"></i>';
            const colorClass = indexChange >= 0 ? 'text-positive' : 'text-negative';
            elements.cardIndexChange.innerHTML = `<span class="${colorClass}">${caret} ${sign}${indexChange.toFixed(2)}% (Bugün)</span>`;
            
            // Also update header value
            elements.headerIndexVal.innerHTML = `
                <span class="${colorClass}">
                    S&P 500 ${formatPrice(indexPrice)} (${sign}${indexChange.toFixed(2)}%) <i class="fa-solid ${indexChange >= 0 ? 'fa-caret-up' : 'fa-caret-down'}"></i>
                </span>
            `;
        } else {
            elements.cardIndexChange.textContent = '--';
            elements.headerIndexVal.textContent = `S&P 500 ${formatPrice(indexPrice)}`;
        }
    } else {
        elements.cardIndexPrice.textContent = '--';
        elements.cardIndexChange.textContent = '--';
        elements.headerIndexVal.textContent = 'S&P 500';
    }
}

// Apply Search & Dropdown Filters
function applyFilters() {
    const query = elements.searchInput.value.toLowerCase().trim();
    
    filteredData = allData.filter(item => {
        // Search Filter
        const matchesSearch = !query || 
            item.ticker.toLowerCase().includes(query) || 
            item.name.toLowerCase().includes(query);
            
        return matchesSearch;
    });
    
    // Re-apply sorting on filtered data
    sortData();
    renderTable();
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
        
        // Name & Ticker
        const tdName = document.createElement('td');
        tdName.className = 'text-left';
        tdName.innerHTML = `
            <div class="cell-company">
                <span class="company-name">${item.name || '--'}</span>
                <span class="company-sub">
                    <span class="ticker-badge">${item.ticker}</span>
                    <span>${item.subSector || '--'}</span>
                </span>
            </div>
        `;
        tr.appendChild(tdName);
        
        // Ticker symbol (just for search/sorting compatibility)
        const tdTicker = document.createElement('td');
        tdTicker.className = 'font-mono text-center';
        tdTicker.innerHTML = `<span class="company-name">${item.ticker}</span>`;
        tr.appendChild(tdTicker);
        
        // Price
        const tdPrice = document.createElement('td');
        tdPrice.className = 'cell-price text-right';
        tdPrice.textContent = formatPrice(item.price);
        tr.appendChild(tdPrice);
        
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
