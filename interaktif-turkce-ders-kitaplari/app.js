// ==========================================================================
// MAARİF INTERACTIVE TEXTBOOK APPLICATION LOGIC
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  
  // --- APPLICATION STATE ---
  const state = {
    currentGrade: null,
    currentBook: null,
    currentView: "grades", // "grades", "books", "reader"
    currentPage: 12,       // Bir Kelime Seyyahı starts on page 12
    maxPages: 176,         // 0 to 176 index (177 pages total)
    zoom: 1.0,
    zoomMin: 0.5,
    zoomMax: 2.0,
    zoomStep: 0.15,
    pan: { x: 0, y: 0 },
    isDragging: false,
    dragStart: { x: 0, y: 0 },
    bookData: {}           // Loaded dynamically from assets/data/book_data.json
  };

  // --- DOM ELEMENTS ---
  const views = {
    grades: document.getElementById("view-grades"),
    books: document.getElementById("view-books"),
    reader: document.getElementById("view-reader")
  };

  const loadingOverlay = document.getElementById("loading-overlay");
  const toast = document.getElementById("toast");

  // Navigation Links
  const gradeCards = document.querySelectorAll(".grade-card");
  const bookCards = document.querySelectorAll(".book-card");
  const btnBackToGrades = document.getElementById("btn-back-to-grades");
  const btnBackToBooks = document.getElementById("btn-back-to-books");

  // Reader Controls
  const btnPrevPage = document.getElementById("btn-prev-page");
  const btnNextPage = document.getElementById("btn-next-page");
  const inputPage = document.getElementById("input-page");
  const pageImage = document.getElementById("page-image");
  const hotspotsOverlay = document.getElementById("hotspots-overlay");
  const outcomesList = document.getElementById("outcomes-list");
  const btnSidebarPlay = document.getElementById("btn-sidebar-play");
  const sidebarBookTitle = document.getElementById("sidebar-book-title");
  let currentPlayUrl = "";
  
  // Zoom Controls
  const btnZoomIn = document.getElementById("btn-zoom-in");
  const btnZoomOut = document.getElementById("btn-zoom-out");
  const zoomValueText = document.getElementById("zoom-value");
  
  // Viewport Panning Elements
  const readerViewport = document.getElementById("reader-viewport");
  const bookContainer = document.getElementById("book-container");
  const pageWrapper = document.getElementById("page-wrapper");

  // Modals
  const modalAnswer = document.getElementById("modal-answer");
  const btnCloseAnswerModal = document.getElementById("btn-close-answer-modal");
  
  const answerModalTitle = document.getElementById("answer-modal-title");
  const answerModalBody = document.getElementById("answer-modal-body");

  // --- INITIALIZATION ---
  initApp();

  async function initApp() {
    showLoading(true);
    try {
      // Fetch the textbook hotspots & answers data
      const response = await fetch("assets/data/book_data.json");
      if (!response.ok) {
        throw new Error("Veri dosyası yüklenemedi.");
      }
      state.bookData = await response.json();
      console.log("Book data successfully loaded:", state.bookData);
    } catch (error) {
      console.error("Initialization error:", error);
      showToast("Veriler yüklenirken bir hata oluştu. Lütfen sayfayı yenileyin.");
    } finally {
      showLoading(false);
    }

    setupEventListeners();
    updateView();
  }

  // --- EVENT LISTENERS setup ---
  function setupEventListeners() {
    
    // Grade Selection
    gradeCards.forEach(card => {
      card.addEventListener("click", () => {
        const grade = card.dataset.grade;
        if (card.classList.contains("locked")) {
          showToast(`Müfredat hazırlığı sürüyor! ${grade}. Sınıf interaktif kitabı yakında eklenecektir.`);
          return;
        }
        state.currentGrade = parseInt(grade);
        state.currentView = "books";
        updateView();
      });
    });

    // Back to Grades
    btnBackToGrades.addEventListener("click", () => {
      state.currentGrade = null;
      state.currentView = "grades";
      updateView();
    });

    // Book Selection
    bookCards.forEach(card => {
      card.addEventListener("click", () => {
        const book = card.dataset.book;
        if (card.classList.contains("locked")) {
          showToast(`6. Sınıf 2. Kitap yakında eklenecektir.`);
          return;
        }
        state.currentBook = parseInt(book);
        state.currentView = "reader";
        
        // Dynamically set maxPages and start page based on selected book
        if (state.currentBook === 1) {
          state.maxPages = 176;
          state.currentPage = 12; // Bir Kelime Seyyahı starts on page 12
        } else if (state.currentBook === 2) {
          state.maxPages = 161;
          state.currentPage = 12; // Yeni Mahalleye Alışma Kılavuzu starts on page 12
        }
        
        if (sidebarBookTitle) {
          sidebarBookTitle.textContent = `6. Sınıf Türkçe (${state.currentBook}. Kitap)`;
        }
        
        updateView();
        loadPage(state.currentPage);
      });
    });

    // Back to Books
    btnBackToBooks.addEventListener("click", () => {
      state.currentBook = null;
      state.currentView = "books";
      updateView();
    });

    // Page Navigation Buttons
    btnPrevPage.addEventListener("click", () => {
      if (state.currentPage > 0) {
        loadPage(state.currentPage - 1);
      } else {
        showToast("Zaten ilk sayfadasınız.");
      }
    });

    btnNextPage.addEventListener("click", () => {
      if (state.currentPage < state.maxPages) {
        loadPage(state.currentPage + 1);
      } else {
        showToast("Zaten son sayfadasınız.");
      }
    });

    // Page Number Input Jump
    inputPage.addEventListener("change", (e) => {
      let pageNum = parseInt(e.target.value);
      if (isNaN(pageNum)) {
        inputPage.value = state.currentPage;
        return;
      }
      
      if (pageNum < 0) pageNum = 0;
      if (pageNum > state.maxPages) pageNum = state.maxPages;
      
      loadPage(pageNum);
    });

    // Zoom Controls
    btnZoomIn.addEventListener("click", () => {
      if (state.zoom < state.zoomMax) {
        setZoom(state.zoom + state.zoomStep);
      }
    });

    btnZoomOut.addEventListener("click", () => {
      if (state.zoom > state.zoomMin) {
        setZoom(state.zoom - state.zoomStep);
      }
    });

    // Sidebar Play Button Control
    if (btnSidebarPlay) {
      btnSidebarPlay.addEventListener("click", () => {
        if (currentPlayUrl) {
          window.open(currentPlayUrl, "_blank");
        }
      });
    }

    // Panning & Dragging Viewport Controls
    bookContainer.addEventListener("mousedown", dragStart);
    window.addEventListener("mousemove", dragMove);
    window.addEventListener("mouseup", dragEnd);

    // Touch support for mobile dragging
    bookContainer.addEventListener("touchstart", dragStartTouch, { passive: true });
    window.addEventListener("touchmove", dragMoveTouch, { passive: false });
    window.addEventListener("touchend", dragEnd);

    // Modal Close buttons
    btnCloseAnswerModal.addEventListener("click", () => closeModal(modalAnswer));
    
    // Close modals when clicking outside
    modalAnswer.addEventListener("click", (e) => {
      if (e.target === modalAnswer) {
        closeModal(modalAnswer);
      }
    });

    // ESC Key to close modals
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeModal(modalAnswer);
      }
    });
  }

  // --- VIEW ROUTING CONTROL ---
  function updateView() {
    // Hide all views first
    Object.values(views).forEach(view => {
      view.classList.remove("active");
    });

    // Show current view
    views[state.currentView].classList.add("active");
  }

  // --- PAGE LOADING & RENDERING ---
  function loadPage(pageNumber) {
    state.currentPage = pageNumber;
    inputPage.value = pageNumber;
    
    showLoading(true);
    
    // Set page image source based on current book
    const imgPath = `assets/pages/book${state.currentBook}/page_${pageNumber}.png`;
    pageImage.src = imgPath;
    
    pageImage.onload = () => {
      showLoading(false);
      resetZoomAndPan();
      renderHotspots(pageNumber);
      renderPageOutcomes(pageNumber);
      updateSidebarPlayButton(pageNumber);
    };

    pageImage.onerror = () => {
      showLoading(false);
      showToast(`Sayfa ${pageNumber} yüklenemedi. Asset dosyası eksik olabilir.`);
      renderHotspots(pageNumber); // clear previous hotspots anyway
      renderPageOutcomes(pageNumber);
      updateSidebarPlayButton(pageNumber);
    };
  }

  // --- RENDERING HOTSPOTS ---
  function renderHotspots(pageNumber) {
    // Clear existing hotspots
    hotspotsOverlay.innerHTML = "";
    
    const pageKey = pageNumber.toString();
    const bookKey = `book${state.currentBook}`;
    const pageHotspots = state.bookData[bookKey] ? state.bookData[bookKey][pageKey] : null;
    
    if (!pageHotspots) {
      return; // No interactive hotspots defined for this page
    }
    
    pageHotspots.forEach(hotspot => {
      // Create hotspot container element
      const container = document.createElement("div");
      container.className = "hotspot-container";
      container.style.left = `${hotspot.left}%`;
      container.style.top = `${hotspot.top}%`;
      
      // Pulsing indicator dot
      const glow = document.createElement("div");
      glow.className = "hotspot-glow";
      glow.title = `${hotspot.title} - Sihirli Düğmeler`;
      container.appendChild(glow);
      
      // Magic Buttons Group
      const btnGroup = document.createElement("div");
      btnGroup.className = "magic-buttons-group";
      
      // 2. CEVAPLAR BUTTON
      const btnAnswer = document.createElement("button");
      btnAnswer.className = "btn-magic btn-magic-answer";
      btnAnswer.title = "Sihirli Cevapları Göster";
      btnAnswer.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
          <path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Z" clip-rule="evenodd" />
          <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
        </svg>
      `;
      btnAnswer.addEventListener("click", (e) => {
        e.stopPropagation();
        openAnswerModal(hotspot);
      });
      btnGroup.appendChild(btnAnswer);
      container.appendChild(btnGroup);
      hotspotsOverlay.appendChild(container);
    });
  }

  // --- RENDERING PAGE-BASED OUTCOMES ---
  function renderPageOutcomes(pageNumber) {
    if (!outcomesList) return;
    outcomesList.innerHTML = "";
    
    const pageKey = pageNumber.toString();
    const outcomesKey = `book${state.currentBook}_outcomes`;
    const pageOutcomes = state.bookData[outcomesKey] ? state.bookData[outcomesKey][pageKey] : null;
    
    if (!pageOutcomes || pageOutcomes.length === 0) {
      outcomesList.innerHTML = "<div class='outcome-item'><span class='outcome-desc'>Bu sayfada tanımlı kazanım bulunmamaktadır.</span></div>";
      return;
    }
    
    pageOutcomes.forEach(outcome => {
      const match = outcome.match(/^([A-Z\.\d\-]+)\s+(.+)$/i);
      const item = document.createElement("div");
      item.className = "outcome-item";
      
      if (match) {
        const code = match[1];
        const desc = match[2];
        item.innerHTML = `<span class="outcome-code">${code}</span><span class="outcome-desc">${desc}</span>`;
      } else {
        item.innerHTML = `<span class="outcome-desc">${outcome}</span>`;
      }
      
      outcomesList.appendChild(item);
    });
  }

  // --- SIDEBAR PLAY BUTTON UPDATE ---
  function updateSidebarPlayButton(pageNumber) {
    if (!btnSidebarPlay) return;
    
    const pageKey = pageNumber.toString();
    const bookKey = `book${state.currentBook}`;
    const pageHotspots = state.bookData[bookKey] ? state.bookData[bookKey][pageKey] : null;
    
    let playUrl = "";
    if (pageHotspots) {
      const playHotspot = pageHotspots.find(hs => hs.has_play && hs.play_url);
      if (playHotspot) {
        playUrl = playHotspot.play_url;
      }
    }
    
    currentPlayUrl = playUrl;
    if (playUrl) {
      btnSidebarPlay.style.display = "inline-flex";
    } else {
      btnSidebarPlay.style.display = "none";
    }
  }

  // --- MODAL CONTROLLERS ---
  function openAnswerModal(hotspot) {
    answerModalTitle.textContent = `${hotspot.title} - Sihirli Cevap Anahtarı`;
    answerModalBody.innerHTML = hotspot.answers;
    modalAnswer.classList.add("active");
  }



  function closeModal(modal) {
    modal.classList.remove("active");
  }

  // --- ZOOM & PAN LOGIC ---
  function setZoom(val) {
    state.zoom = Math.round(val * 100) / 100;
    zoomValueText.textContent = `${Math.round(state.zoom * 100)}%`;
    applyZoomAndPan();
  }

  function applyZoomAndPan() {
    const scaleFactor = state.zoom * 2.25;
    pageWrapper.style.transform = `translate(${state.pan.x}px, ${state.pan.y}px) scale(${scaleFactor})`;
  }

  function resetZoomAndPan() {
    state.zoom = 1.0;
    state.pan.x = 0;
    state.pan.y = 0;
    zoomValueText.textContent = "100%";
    applyZoomAndPan();
  }

  // Mouse Dragging Panning
  function dragStart(e) {
    state.isDragging = true;
    state.dragStart.x = e.clientX - state.pan.x;
    state.dragStart.y = e.clientY - state.pan.y;
    bookContainer.style.cursor = "grabbing";
  }

  function dragMove(e) {
    if (!state.isDragging) return;
    state.pan.x = e.clientX - state.dragStart.x;
    state.pan.y = e.clientY - state.dragStart.y;
    
    // Bounds check to avoid panning out of view
    const scaleFactor = state.zoom * 2.25;
    const boundX = (scaleFactor - 1) * pageImage.clientWidth * 0.5;
    const boundY = (scaleFactor - 1) * pageImage.clientHeight * 0.5;
    
    state.pan.x = Math.max(-boundX, Math.min(boundX, state.pan.x));
    state.pan.y = Math.max(-boundY, Math.min(boundY, state.pan.y));
    
    applyZoomAndPan();
  }

  function dragEnd() {
    state.isDragging = false;
    bookContainer.style.cursor = "grab";
  }

  // Touch Support Panning
  function dragStartTouch(e) {
    state.isDragging = true;
    const touch = e.touches[0];
    state.dragStart.x = touch.clientX - state.pan.x;
    state.dragStart.y = touch.clientY - state.pan.y;
  }

  function dragMoveTouch(e) {
    if (!state.isDragging) return;
    e.preventDefault(); // Prevent page scrolling during drag
    const touch = e.touches[0];
    state.pan.x = touch.clientX - state.dragStart.x;
    state.pan.y = touch.clientY - state.dragStart.y;
    
    const scaleFactor = state.zoom * 2.25;
    const boundX = (scaleFactor - 1) * pageImage.clientWidth * 0.5;
    const boundY = (scaleFactor - 1) * pageImage.clientHeight * 0.5;
    
    state.pan.x = Math.max(-boundX, Math.min(boundX, state.pan.x));
    state.pan.y = Math.max(-boundY, Math.min(boundY, state.pan.y));
    
    applyZoomAndPan();
  }

  // --- HELPERS (LOADING & TOASTS) ---
  function showLoading(show) {
    if (show) {
      loadingOverlay.classList.remove("hidden");
    } else {
      loadingOverlay.classList.add("hidden");
    }
  }

  let toastTimeout;
  function showToast(message) {
    clearTimeout(toastTimeout);
    toast.textContent = message;
    toast.classList.remove("hidden");
    
    toastTimeout = setTimeout(() => {
      toast.classList.add("hidden");
    }, 3500);
  }

});
