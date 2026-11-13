/**
 * Klasik Satranç - Akıcı Kayma Animasyonlu ve Tam Ekran Arayüz Kontrolörü
 */

class ClassicChessApp {
  constructor() {
    this.engine = new ChessEngine();

    // Ayarlar & Durum
    this.gameMode = localStorage.getItem('chess_game_mode') || 'bot_1'; // 'pvp', 'bot_1'..'bot_5'
    this.isFlipped = false;
    this.selectedSquare = null;
    this.legalMovesForSelected = [];
    this.lastMove = null;
    this.pendingPromotion = null;
    this.isAnimating = false;

    this.init();
  }

  init() {
    this.bindEvents();
    this.applyModeFromSelect();
    this.renderBoard();
    this.updateStatus();
  }

  bindEvents() {
    // Mod & Seviye Seçimi
    const modeSelect = document.getElementById('select-game-mode');
    if (modeSelect) {
      modeSelect.value = this.gameMode;
      modeSelect.addEventListener('change', (e) => {
        this.gameMode = e.target.value;
        localStorage.setItem('chess_game_mode', this.gameMode);
        this.restartGame();
      });
    }

    // Butonlar
    document.getElementById('btn-undo').addEventListener('click', () => {
      this.undoMove();
    });

    document.getElementById('btn-restart').addEventListener('click', () => {
      this.restartGame();
    });

    document.getElementById('btn-flip').addEventListener('click', () => {
      this.flipBoard();
    });

    // Terfi Butonları
    document.querySelectorAll('.promo-square-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const promoPiece = btn.getAttribute('data-promo');
        this.completePromotion(promoPiece);
      });
    });

    // İlk tıklamada ses motorunu başlat
    window.addEventListener('click', () => {
      window.chessAudio.init();
    }, { once: true });
  }

  isBotMode() {
    return this.gameMode.startsWith('bot_');
  }

  getBotLevel() {
    if (!this.isBotMode()) return 1;
    return parseInt(this.gameMode.split('_')[1], 10) || 1;
  }

  applyModeFromSelect() {
    const modeSelect = document.getElementById('select-game-mode');
    if (modeSelect) {
      this.gameMode = modeSelect.value;
    }
  }

  restartGame() {
    this.engine = new ChessEngine();
    this.selectedSquare = null;
    this.legalMovesForSelected = [];
    this.lastMove = null;
    this.isAnimating = false;
    this.renderBoard();
    this.updateStatus();
  }

  flipBoard() {
    this.isFlipped = !this.isFlipped;
    this.renderBoard();
  }

  renderBoard() {
    const boardEl = document.getElementById('chess-board');
    if (!boardEl) return;
    boardEl.innerHTML = '';

    const inCheck = this.engine.isInCheck(this.engine.turn);
    const kingSq = inCheck ? this.engine.findKing(this.engine.turn) : -1;

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const sq = this.isFlipped ? (7 - r) * 8 + (7 - c) : r * 8 + c;
        const actualR = Math.floor(sq / 8);
        const actualC = sq % 8;
        const isLight = (actualR + actualC) % 2 === 0;

        const squareEl = document.createElement('div');
        squareEl.className = `square ${isLight ? 'light' : 'dark'}`;
        squareEl.setAttribute('data-sq', sq);

        // Seçili kare
        if (this.selectedSquare === sq) {
          squareEl.classList.add('selected');
        }

        // Son hamle vurgusu
        if (this.lastMove && (this.lastMove.from === sq || this.lastMove.to === sq)) {
          squareEl.classList.add('last-move');
        }

        // Şah tehdit vurgusu
        if (sq === kingSq) {
          squareEl.classList.add('in-check');
        }

        // Koordinat etiketleri (Sol alt ve kenarlar)
        if ((!this.isFlipped && actualC === 0) || (this.isFlipped && actualC === 7)) {
          const rankLabel = document.createElement('span');
          rankLabel.className = 'coord-label coord-rank';
          rankLabel.innerText = 8 - actualR;
          squareEl.appendChild(rankLabel);
        }
        if ((!this.isFlipped && actualR === 7) || (this.isFlipped && actualR === 0)) {
          const fileLabel = document.createElement('span');
          fileLabel.className = 'coord-label coord-file';
          fileLabel.innerText = String.fromCharCode('a'.charCodeAt(0) + actualC);
          squareEl.appendChild(fileLabel);
        }

        // Geçerli hamle noktası veya yeme halkası
        const legalMove = this.legalMovesForSelected.find(m => m.to === sq);
        if (legalMove) {
          const dot = document.createElement('div');
          dot.className = legalMove.captured ? 'legal-capture-ring' : 'legal-dot';
          squareEl.appendChild(dot);
        }

        // Taş çizimi
        const piece = this.engine.board[sq];
        if (piece) {
          const pieceEl = document.createElement('div');
          pieceEl.className = 'piece-view';
          pieceEl.innerHTML = StauntonPieces.getPieceSvg(piece);
          squareEl.appendChild(pieceEl);
        }

        // Tıklama olayı
        squareEl.addEventListener('click', () => {
          this.handleSquareClick(sq);
        });

        boardEl.appendChild(squareEl);
      }
    }
  }

  handleSquareClick(sq) {
    if (this.isAnimating) return;
    if (this.isBotMode() && this.engine.turn === 'b') return;

    const clickedPiece = this.engine.board[sq];
    const isPieceMine = clickedPiece && this.engine.getColor(clickedPiece) === this.engine.turn;

    // 1. Taş seçimi
    if (isPieceMine) {
      this.selectedSquare = sq;
      this.legalMovesForSelected = this.engine.getLegalMovesForSquare(sq);
      this.renderBoard();
      return;
    }

    // 2. Hamle yapma
    if (this.selectedSquare !== null) {
      const move = this.legalMovesForSelected.find(m => m.to === sq);
      if (move) {
        if (move.promotion) {
          this.pendingPromotion = move;
          this.openPromotionModal();
          return;
        }
        this.animateAndMakeMove(move);
      } else {
        // Geçersiz kareye basıldı, seçimi kaldır
        this.selectedSquare = null;
        this.legalMovesForSelected = [];
        this.renderBoard();
      }
    }
  }

  // Akıcı Kayma Animasyonu (Smooth Sliding Animation)
  animateAndMakeMove(move, onDone) {
    this.isAnimating = true;
    const fromSquareEl = document.querySelector(`.square[data-sq="${move.from}"]`);
    const toSquareEl = document.querySelector(`.square[data-sq="${move.to}"]`);

    if (!fromSquareEl || !toSquareEl) {
      this.finishMove(move);
      if (onDone) onDone();
      return;
    }

    const fromRect = fromSquareEl.getBoundingClientRect();
    const toRect = toSquareEl.getBoundingClientRect();

    const dx = toRect.left - fromRect.left;
    const dy = toRect.top - fromRect.top;

    // Geçici kayan taş oluştur
    const slidingEl = document.createElement('div');
    slidingEl.className = 'sliding-piece';
    slidingEl.style.width = `${fromRect.width * 0.96}px`;
    slidingEl.style.height = `${fromRect.height * 0.96}px`;
    slidingEl.style.left = `${fromRect.left + fromRect.width * 0.02}px`;
    slidingEl.style.top = `${fromRect.top + fromRect.height * 0.02}px`;
    slidingEl.innerHTML = StauntonPieces.getPieceSvg(move.piece);

    // Kaynak karedeki taşı gizle
    const pieceEl = fromSquareEl.querySelector('.piece-view');
    if (pieceEl) pieceEl.style.visibility = 'hidden';

    document.body.appendChild(slidingEl);

    // Bir sonraki karede hedefe kaydır
    requestAnimationFrame(() => {
      slidingEl.style.transform = `translate(${dx}px, ${dy}px)`;
    });

    setTimeout(() => {
      slidingEl.remove();
      this.finishMove(move);
      this.isAnimating = false;
      if (onDone) onDone();
    }, 160);
  }

  finishMove(move) {
    const isCapture = !!move.captured;
    this.engine.makeMove(move);
    this.lastMove = move;
    this.selectedSquare = null;
    this.legalMovesForSelected = [];

    if (isCapture) {
      window.chessAudio.playCapture();
    } else {
      window.chessAudio.playMove();
    }

    if (this.engine.isInCheck(this.engine.turn)) {
      window.chessAudio.playCheck();
    }

    this.renderBoard();
    this.updateStatus();

    // Oyun bitti mi kontrol et
    if (this.engine.isGameOver()) {
      if (this.engine.isCheckmate()) {
        window.chessAudio.playVictory();
      }
      return;
    }

    // Bot modunda sıra siyahtaysa bot oynasın
    if (this.isBotMode() && this.engine.turn === 'b') {
      setTimeout(() => {
        this.makeBotMove();
      }, 350);
    }
  }

  makeBotMove() {
    if (this.engine.isGameOver()) return;
    const level = this.getBotLevel();
    const botMove = this.engine.getComputerMove(level);
    if (botMove) {
      this.animateAndMakeMove(botMove);
    }
  }

  undoMove() {
    if (this.isAnimating) return;

    if (this.isBotMode()) {
      // Bilgisayara karşı oynarken hem botun hem oyuncunun hamlesi geri alınır
      this.engine.undoMove();
      this.engine.undoMove();
    } else {
      this.engine.undoMove();
    }

    this.lastMove = this.engine.history.length > 0 ? this.engine.history[this.engine.history.length - 1].move : null;
    this.selectedSquare = null;
    this.legalMovesForSelected = [];
    window.chessAudio.playMove();
    this.renderBoard();
    this.updateStatus();
  }

  openPromotionModal() {
    const modal = document.getElementById('modal-promotion');
    if (modal) modal.classList.add('active');
  }

  completePromotion(pieceType) {
    const modal = document.getElementById('modal-promotion');
    if (modal) modal.classList.remove('active');

    if (this.pendingPromotion) {
      this.pendingPromotion.promotion = pieceType;
      this.animateAndMakeMove(this.pendingPromotion);
      this.pendingPromotion = null;
    }
  }

  updateStatus() {
    const titleEl = document.getElementById('status-title');
    const turnEl = document.getElementById('status-turn');
    if (!titleEl || !turnEl) return;

    if (this.engine.isCheckmate()) {
      const winner = this.engine.turn === 'b' ? 'Beyaz' : 'Siyah';
      titleEl.innerText = 'ŞAH VE MAT!';
      titleEl.style.color = '#2ecc71';
      turnEl.innerText = `${winner} Kazandı!`;
    } else if (this.engine.isStalemate()) {
      titleEl.innerText = 'PAT (BERABERE)';
      titleEl.style.color = '#f1c40f';
      turnEl.innerText = 'Hamle kalmadı, oyun berabere.';
    } else if (this.engine.isInCheck(this.engine.turn)) {
      titleEl.innerText = 'ŞAH!';
      titleEl.style.color = '#e74c3c';
      turnEl.innerText = `${this.engine.turn === 'w' ? 'Beyaz' : 'Siyah'} tehdit altında`;
    } else {
      titleEl.innerText = 'Klasik Satranç';
      titleEl.style.color = '#f1c40f';
      turnEl.innerText = `${this.engine.turn === 'w' ? 'Beyazın' : 'Siyahın'} Sırası`;
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.chessApp = new ClassicChessApp();
});
