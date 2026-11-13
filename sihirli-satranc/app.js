/**
 * Sihirli Satranç - Ana Uygulama Mantığı ve Etkileşim Kontrolörü
 * Tablet ekranı, ses, yapay zeka, mini oyunlar ve ödül sistemini birleştirir.
 */

class MagicChessApp {
  constructor() {
    this.engine = new ChessEngine();
    this.miniGames = new MiniGameManager(this);

    // Uygulama Durumu
    this.selectedMascotId = localStorage.getItem('magic_chess_mascot') || null;
    this.currentMode = 'menu'; // 'adventure', 'bot', 'pvp', 'minigame'
    this.activeBotId = 'tavsan';
    this.activeLevel = null;
    this.userStars = parseInt(localStorage.getItem('magic_chess_stars') || '0', 10);

    // Ayarlar
    this.settings = {
      showLegalMoves: true,
      showDanger: true,
      sfx: true,
      music: true,
      voice: true,
      ...JSON.parse(localStorage.getItem('magic_chess_settings') || '{}')
    };

    // Tahta Etkileşim Durumu
    this.selectedSquare = null;
    this.legalMovesForSelected = [];
    this.pendingPromotionMove = null;
    this.boardFlipped = false;

    // Konfeti parçacıkları
    this.confettiParticles = [];

    this.init();
  }

  init() {
    // Ses motoru ayarları
    window.soundEngine.sfxEnabled = this.settings.sfx;
    window.soundEngine.musicEnabled = this.settings.music;
    window.soundEngine.voiceEnabled = this.settings.voice;

    this.bindEvents();
    this.updateStarDisplay();

    // İlk açılış: Maskot seçimi yapılmamışsa seçim ekranına git
    if (!this.selectedMascotId) {
      this.showScreen('screen-mascot-select');
    } else {
      this.showScreen('screen-menu');
      this.updateMascotVisuals();
    }
  }

  bindEvents() {
    // Maskot Seçim Kartları
    document.querySelectorAll('.mascot-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const id = card.getAttribute('data-id');
        this.selectMascot(id);
      });
    });

    // Menü Butonları
    document.getElementById('btn-mode-adventure').addEventListener('click', () => {
      this.openAdventureScreen();
    });

    document.getElementById('btn-mode-bots').addEventListener('click', () => {
      this.openBotSelectModal();
    });

    document.getElementById('btn-mode-pvp').addEventListener('click', () => {
      this.startPvpGame();
    });

    document.getElementById('btn-mode-minigames').addEventListener('click', () => {
      this.openMiniGamesModal();
    });

    document.getElementById('btn-mode-chest').addEventListener('click', () => {
      this.openStickerAlbumModal();
    });

    // Header Butonları
    document.querySelectorAll('.btn-home').forEach(btn => {
      btn.addEventListener('click', () => {
        this.showScreen('screen-menu');
      });
    });

    document.getElementById('btn-settings-toggle').addEventListener('click', () => {
      this.openSettingsModal();
    });

    // Oyun Kontrol Butonları
    document.getElementById('btn-hint').addEventListener('click', () => {
      this.giveHint();
    });

    document.getElementById('btn-undo').addEventListener('click', () => {
      this.undoLastMove();
    });

    document.getElementById('btn-restart').addEventListener('click', () => {
      this.restartCurrentGame();
    });

    // Terfi (Promotion) Seçimleri
    document.querySelectorAll('.promo-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const promoPiece = btn.getAttribute('data-promo');
        this.completePromotion(promoPiece);
      });
    });

    // İlk dokunuşta ses motorunu uyandır
    window.addEventListener('click', () => {
      window.soundEngine.init();
      if (this.settings.music) {
        window.soundEngine.startBackgroundMusic();
      }
    }, { once: true });
  }

  showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add('active');
    }
  }

  selectMascot(id) {
    this.selectedMascotId = id;
    localStorage.setItem('magic_chess_mascot', id);
    window.soundEngine.playVictorySound();

    const mascot = PieceThemeManager.mascots[id];
    if (mascot) {
      window.soundEngine.speak(mascot.greeting);
    }

    this.updateMascotVisuals();
    this.showScreen('screen-menu');
  }

  updateMascotVisuals() {
    const mascot = PieceThemeManager.mascots[this.selectedMascotId] || PieceThemeManager.mascots.unicorn;
    // Ana menü avatarı
    const menuAvatar = document.getElementById('menu-mascot-avatar');
    if (menuAvatar) menuAvatar.innerHTML = mascot.svg;

    const menuSpeech = document.getElementById('menu-mascot-speech');
    if (menuSpeech) menuSpeech.innerText = mascot.greeting;

    // Oyun içi yan panel maskotu
    const sideAvatar = document.getElementById('side-mascot-avatar');
    if (sideAvatar) sideAvatar.innerHTML = mascot.svg;

    this.setMascotSpeech(`Sıra sende prensesim! En güzel hamleni göster bakalım! ✨`);
  }

  setMascotSpeech(text, speakVoice = true) {
    const speechEl = document.getElementById('side-speech-text');
    if (speechEl) {
      speechEl.innerText = text;
    }
    if (speakVoice && this.settings.voice) {
      window.soundEngine.speak(text);
    }
  }

  updateStarDisplay() {
    const starEls = document.querySelectorAll('.star-count-num');
    starEls.forEach(el => el.innerText = this.userStars);
  }

  addStars(amount) {
    this.userStars += amount;
    localStorage.setItem('magic_chess_stars', this.userStars);
    this.updateStarDisplay();
    window.soundEngine.playStarSound();
  }

  // --- Satranç Tahtası Çizimi ve Etkileşimi ---
  renderBoard() {
    const boardEl = document.getElementById('chess-board');
    if (!boardEl) return;
    boardEl.innerHTML = '';

    const inCheck = this.settings.showDanger && this.engine.isInCheck(this.engine.turn);
    const kingSq = inCheck ? this.engine.findKing(this.engine.turn) : -1;

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const sq = this.boardFlipped ? (7 - r) * 8 + (7 - c) : r * 8 + c;
        const isLight = (r + c) % 2 === 0;

        const squareEl = document.createElement('div');
        squareEl.className = `square ${isLight ? 'light' : 'dark'}`;
        squareEl.setAttribute('data-sq', sq);

        // Şah tehdit uyarısı
        if (sq === kingSq) {
          squareEl.classList.add('in-check');
        }

        // Seçili kare vurgusu
        if (this.selectedSquare === sq) {
          squareEl.classList.add('selected');
        }

        // Geçerli hamle noktaları
        if (this.settings.showLegalMoves && this.legalMovesForSelected.some(m => m.to === sq)) {
          const move = this.legalMovesForSelected.find(m => m.to === sq);
          if (move && move.captured) {
            const ring = document.createElement('div');
            ring.className = 'legal-capture-ring';
            squareEl.appendChild(ring);
          } else {
            const dot = document.createElement('div');
            dot.className = 'legal-dot';
            squareEl.appendChild(dot);
          }
        }

        // Taş çizimi
        const piece = this.engine.board[sq];
        if (piece) {
          const pieceEl = document.createElement('div');
          pieceEl.className = 'piece-view';
          pieceEl.innerHTML = PieceThemeManager.getPieceSvg(piece);
          squareEl.appendChild(pieceEl);
        }

        // Dokunma ve Taşıma Olayları
        squareEl.addEventListener('click', () => {
          this.handleSquareClick(sq);
        });

        boardEl.appendChild(squareEl);
      }
    }

    this.updateCapturedList();
  }

  handleSquareClick(sq) {
    if (this.currentMode === 'bot' && this.engine.turn === 'b') {
      return; // Bot sırası beklenirken tıklama engellenir
    }

    const clickedPiece = this.engine.board[sq];
    const isPieceMine = clickedPiece && this.engine.getColor(clickedPiece) === this.engine.turn;

    // 1. Taş Seçimi
    if (isPieceMine) {
      this.selectedSquare = sq;
      this.legalMovesForSelected = this.engine.getLegalMovesForSquare(sq);
      window.soundEngine.playSelectSound();
      this.renderBoard();
      return;
    }

    // 2. Hamle Yapma (Seçili taş varsa ve geçerli hamleye tıklandıysa)
    if (this.selectedSquare !== null) {
      const move = this.legalMovesForSelected.find(m => m.to === sq);
      if (move) {
        // Terfi kontrolü
        if (move.promotion) {
          this.pendingPromotionMove = move;
          this.openPromotionModal();
          return;
        }

        this.executeMove(move);
      } else {
        // Geçersiz bir kareye tıklandı, seçimi kaldır
        this.selectedSquare = null;
        this.legalMovesForSelected = [];
        this.renderBoard();
      }
    }
  }

  executeMove(move) {
    const isCapture = !!move.captured;
    this.engine.makeMove(move);

    if (isCapture) {
      window.soundEngine.playCaptureSound();
    } else {
      window.soundEngine.playMoveSound();
    }

    this.selectedSquare = null;
    this.legalMovesForSelected = [];
    this.renderBoard();

    // Mini oyun kontrolü
    if (this.currentMode === 'minigame') {
      if (this.miniGames.activeGameType === 'knight_stars') {
        const finished = this.miniGames.handleKnightMove(move.to);
        if (finished) return;
      } else if (this.miniGames.activeGameType === 'mate_in_one') {
        const finished = this.miniGames.handleMateMove(move);
        if (finished) return;
      } else if (this.miniGames.activeGameType === 'pawn_race') {
        const finished = this.miniGames.checkPawnRacePromotion();
        if (finished) return;
      } else if (this.miniGames.activeGameType === 'free_piece') {
        const finished = this.miniGames.handleFreePieceMove(move);
        if (finished) return;
      } else if (this.miniGames.activeGameType === 'save_king') {
        const finished = this.miniGames.handleSaveKingMove();
        if (finished) return;
      }
    }

    // Şah / Mat / Pat Kontrolleri
    if (this.engine.isCheckmate()) {
      window.soundEngine.playVictorySound();
      const winner = this.engine.turn === 'b' ? 'Beyaz' : 'Siyah';
      if (winner === 'Beyaz') {
        window.soundEngine.speak('Tebrikler! Şah ve Mat yaptın!');
        this.unlockSticker('first_win');
        this.addStars(3);
        this.showVictoryModal('Tebrikler Prenses!', 'Harika bir şah ve mat ile maçı kazandın! 👑⭐');
      } else {
        this.setMascotSpeech('Şah mat oldu! Hiç üzülme, bir sonrakinde sen kazanacaksın! 💖');
      }
      return;
    }

    if (this.engine.isStalemate()) {
      window.soundEngine.playMoveSound();
      this.setMascotSpeech('Oyun Pat oldu! Karşılıklı berabere bitti, tebrikler!');
      return;
    }

    if (this.engine.isInCheck(this.engine.turn)) {
      window.soundEngine.playCheckSound();
      this.setMascotSpeech('Dikkat! Şah çekildi! Kralını güvene almalısın! 👑⚠️');
    }

    // Bot Hamlesi Tetikleyici
    if (this.currentMode === 'bot' && this.engine.turn === 'b') {
      this.setMascotSpeech('Rakibin düşünüyor... 🤔');
      setTimeout(() => {
        this.makeBotMove();
      }, 700);
    }
  }

  makeBotMove() {
    const botMove = this.engine.getBotMove(this.activeBotId);
    if (botMove) {
      this.executeMove(botMove);
      this.setMascotSpeech('Sıra sende şampiyon! 🌟');
    }
  }

  openPromotionModal() {
    const modal = document.getElementById('modal-promotion');
    if (modal) modal.classList.add('active');
  }

  completePromotion(pieceType) {
    const modal = document.getElementById('modal-promotion');
    if (modal) modal.classList.remove('active');

    if (this.pendingPromotionMove) {
      this.pendingPromotionMove.promotion = pieceType;
      this.executeMove(this.pendingPromotionMove);
      this.pendingPromotionMove = null;
    }
  }

  // --- İpucu ve Geri Alma ---
  giveHint() {
    const hint = this.engine.getHintForPlayer();
    if (hint) {
      this.selectedSquare = hint.move.from;
      this.legalMovesForSelected = [hint.move];
      this.renderBoard();
      this.setMascotSpeech(hint.text, true);
    }
  }

  undoLastMove() {
    // Bot modunda hem botun hem kullanıcının hamlesi geri alınır
    if (this.currentMode === 'bot') {
      this.engine.undoMove(); // Botun hamlesini geri al
      this.engine.undoMove(); // Kullanıcının hamlesini geri al
    } else {
      this.engine.undoMove();
    }
    this.selectedSquare = null;
    this.legalMovesForSelected = [];
    this.renderBoard();
    window.soundEngine.playMoveSound();
    this.setMascotSpeech('Hamleyi geri aldık! Şimdi daha iyi bir kare seçebilirsin! ↩️');
  }

  restartCurrentGame() {
    this.engine.loadFen(this.engine.initialFen);
    this.selectedSquare = null;
    this.legalMovesForSelected = [];
    this.renderBoard();
    this.setMascotSpeech('Oyun yeniden başladı! Başarılar dilerim! 🦄✨');
  }

  updateCapturedList() {
    const whiteBox = document.getElementById('captured-white-list');
    const blackBox = document.getElementById('captured-black-list');
    if (whiteBox) {
      whiteBox.innerHTML = this.engine.capturedWhite.map(p => this.getPieceIcon(p)).join(' ');
    }
    if (blackBox) {
      blackBox.innerHTML = this.engine.capturedBlack.map(p => this.getPieceIcon(p)).join(' ');
    }
  }

  getPieceIcon(p) {
    const map = { P: '♙', N: '♘', B: '♗', R: '♖', Q: '♕', K: '♔', p: '♟', n: '♞', b: '♝', r: '♜', q: '♛', k: '♚' };
    return map[p] || '';
  }

  // --- Macera Haritası ---
  openAdventureScreen() {
    this.showScreen('screen-adventure');
    this.renderAdventureMap();
  }

  renderAdventureMap() {
    const container = document.getElementById('adventure-map-container');
    if (!container) return;
    container.innerHTML = '';

    AdventureData.worlds.forEach(w => {
      const worldCard = document.createElement('div');
      worldCard.className = 'world-zone';
      worldCard.style.background = w.bgGradient;

      worldCard.innerHTML = `
        <div class="world-title">${w.name}</div>
        <div class="world-desc">${w.desc}</div>
        <div class="levels-path" id="levels-for-${w.id}"></div>
      `;

      container.appendChild(worldCard);

      const pathBox = worldCard.querySelector(`#levels-for-${w.id}`);
      w.levels.forEach(lvl => {
        const lvlBtn = document.createElement('div');
        lvlBtn.className = 'level-node-card';
        lvlBtn.innerHTML = `
          <div>
            <div class="level-title-sub">${lvl.title}</div>
            <div style="font-size: 11px; color: #7f8c8d;">Bölüm ${lvl.id}</div>
          </div>
          <div class="level-stars-display">⭐⭐⭐</div>
        `;
        lvlBtn.addEventListener('click', () => {
          this.startAdventureLevel(lvl);
        });
        pathBox.appendChild(lvlBtn);
      });
    });
  }

  startAdventureLevel(level) {
    this.activeLevel = level;
    this.currentMode = level.type === 'bot_game' ? 'bot' : 'minigame';
    this.activeBotId = level.bot || 'tavsan';

    this.showScreen('screen-game');
    document.getElementById('header-game-title').innerText = level.title;

    if (level.type === 'bot_game') {
      this.engine.loadFen(level.fen);
      this.renderBoard();
      this.setMascotSpeech(level.dialogue);
    } else {
      this.miniGames.startMiniGame(level.type, level);
    }
  }

  // --- Bot Seçim Modalı ---
  openBotSelectModal() {
    const modal = document.getElementById('modal-bot-select');
    if (modal) modal.classList.add('active');
  }

  startBotMatch(botId) {
    this.activeBotId = botId;
    this.currentMode = 'bot';
    const bot = PieceThemeManager.bots[botId];

    const modal = document.getElementById('modal-bot-select');
    if (modal) modal.classList.remove('active');

    this.showScreen('screen-game');
    document.getElementById('header-game-title').innerText = `${bot.name} ile Maç`;
    this.engine = new ChessEngine();
    this.renderBoard();
    this.setMascotSpeech(`${bot.name} seninle oynamak için tahtanın başında! İyi eğlenceler! 🎮`);
  }

  startPvpGame() {
    this.currentMode = 'pvp';
    this.showScreen('screen-game');
    document.getElementById('header-game-title').innerText = 'Baba-Kız İki Kişilik Masaüstü';
    this.engine = new ChessEngine();
    this.renderBoard();
    this.setMascotSpeech('Masaüstü karşılıklı mod başladı! Beyaz başlar, sıra sende! 👨‍👧💖');
  }

  // --- Mini Oyunlar Modalı ---
  openMiniGamesModal() {
    const modal = document.getElementById('modal-minigames');
    if (modal) modal.classList.add('active');
  }

  startSpecificMiniGame(type) {
    const modal = document.getElementById('modal-minigames');
    if (modal) modal.classList.remove('active');

    this.currentMode = 'minigame';
    this.showScreen('screen-game');
    document.getElementById('header-game-title').innerText = 'Taktik Antrenmanı';
    this.miniGames.startMiniGame(type);
  }

  // --- Çıkartma Albümü ---
  openStickerAlbumModal() {
    const modal = document.getElementById('modal-stickers');
    if (!modal) return;
    modal.classList.add('active');

    const grid = document.getElementById('stickers-container');
    if (grid) {
      grid.innerHTML = AdventureData.stickers.map(s => `
        <div class="sticker-item ${s.unlocked ? 'unlocked' : ''}">
          <div class="sticker-icon">${s.icon}</div>
          <div class="sticker-name">${s.name}</div>
          <div style="font-size: 10px; color: #7b1fa2; text-align: center;">${s.desc}</div>
        </div>
      `).join('');
    }
  }

  unlockSticker(stickerId) {
    const sticker = AdventureData.stickers.find(s => s.id === stickerId);
    if (sticker && !sticker.unlocked) {
      sticker.unlocked = true;
      this.showVictoryModal('Yeni Çıkartma Açıldı!', `${sticker.name} çıkartma albümüne eklendi! 🏆✨`);
    }
  }

  // --- Ayarlar Paneli ---
  openSettingsModal() {
    const modal = document.getElementById('modal-settings');
    if (modal) modal.classList.add('active');

    document.getElementById('setting-sfx').checked = this.settings.sfx;
    document.getElementById('setting-music').checked = this.settings.music;
    document.getElementById('setting-voice').checked = this.settings.voice;
    document.getElementById('setting-legal').checked = this.settings.showLegalMoves;
    document.getElementById('setting-danger').checked = this.settings.showDanger;
  }

  saveSettings() {
    this.settings.sfx = document.getElementById('setting-sfx').checked;
    this.settings.music = document.getElementById('setting-music').checked;
    this.settings.voice = document.getElementById('setting-voice').checked;
    this.settings.showLegalMoves = document.getElementById('setting-legal').checked;
    this.settings.showDanger = document.getElementById('setting-danger').checked;

    window.soundEngine.sfxEnabled = this.settings.sfx;
    window.soundEngine.musicEnabled = this.settings.music;
    window.soundEngine.voiceEnabled = this.settings.voice;

    if (this.settings.music) {
      window.soundEngine.startBackgroundMusic();
    } else {
      window.soundEngine.stopBackgroundMusic();
    }

    localStorage.setItem('magic_chess_settings', JSON.stringify(this.settings));
    this.renderBoard();

    const modal = document.getElementById('modal-settings');
    if (modal) modal.classList.remove('active');
  }

  // --- Zafer Kutlaması ve Konfeti ---
  showVictoryModal(title, message) {
    const modal = document.getElementById('modal-victory');
    if (modal) {
      document.getElementById('victory-title').innerText = title;
      document.getElementById('victory-desc').innerText = message;
      modal.classList.add('active');
      this.launchConfetti();
    }
  }

  launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#f1c40f', '#e74c3c', '#3498db', '#9b59b6', '#2ecc71', '#ff9aa2'];
    this.confettiParticles = [];

    for (let i = 0; i < 120; i++) {
      this.confettiParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vy: Math.random() * 4 + 3,
        vx: (Math.random() - 0.5) * 3,
        rotation: Math.random() * 360
      });
    }

    let frames = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.confettiParticles.forEach(p => {
        p.y += p.vy;
        p.x += p.vx;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });

      frames++;
      if (frames < 140) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
    animate();
  }

  showFloatingText(sq, text) {
    const squareEl = document.querySelector(`.square[data-sq="${sq}"]`);
    if (squareEl) {
      const fl = document.createElement('div');
      fl.style.position = 'absolute';
      fl.style.top = '10px';
      fl.style.color = '#f1c40f';
      fl.style.fontWeight = 'bold';
      fl.style.fontSize = '14px';
      fl.style.pointerEvents = 'none';
      fl.style.animation = 'bounce 0.8s ease-out';
      fl.innerText = text;
      squareEl.appendChild(fl);
      setTimeout(() => fl.remove(), 800);
    }
  }
}

// Uygulamayı başlat
window.addEventListener('DOMContentLoaded', () => {
  window.magicApp = new MagicChessApp();
});
