/**
 * Sihirli Satranç - 5 Temel Mini Oyun Motoru
 * At Yıldız Toplama, 1 Hamlede Mat, Piyon Yarışı, Bedava Taş Avı, Kralı Kurtar
 */

class MiniGameManager {
  constructor(app) {
    this.app = app;
    this.activeGameType = null;
    this.gameConfig = null;
    this.collectedStars = [];
    this.moveCount = 0;
  }

  startMiniGame(type, config) {
    this.activeGameType = type;
    this.gameConfig = config || {};
    this.moveCount = 0;
    this.collectedStars = [];

    switch (type) {
      case 'knight_stars':
        this.setupKnightStars();
        break;
      case 'mate_in_one':
        this.setupMateInOne();
        break;
      case 'pawn_race':
        this.setupPawnRace();
        break;
      case 'free_piece':
        this.setupFreePiece();
        break;
      case 'save_king':
        this.setupSaveKing();
        break;
    }
  }

  // 1. At ile Yıldız Toplama
  setupKnightStars() {
    const fen = this.gameConfig.fen || '8/8/8/8/8/8/8/N7 w - - 0 1';
    this.targets = [...(this.gameConfig.targets || [18, 35, 41])];
    this.maxMoves = this.gameConfig.maxMoves || 7;
    this.app.engine.loadFen(fen);
    this.app.renderBoard();
    this.renderStarsOnBoard();

    this.app.setMascotSpeech(
      `Atınla tahtadaki parıldayan ${this.targets.length} yıldızı topla! Her 'L' zıplayışında dikkatli ol! 🦄⭐`
    );
  }

  renderStarsOnBoard() {
    document.querySelectorAll('.star-overlay').forEach(el => el.remove());
    this.targets.forEach(sq => {
      const squareEl = document.querySelector(`.square[data-sq="${sq}"]`);
      if (squareEl) {
        const star = document.createElement('div');
        star.className = 'star-overlay pulse-anim';
        star.innerHTML = '⭐';
        squareEl.appendChild(star);
      }
    });
  }

  handleKnightMove(toSq) {
    this.moveCount++;
    const idx = this.targets.indexOf(toSq);
    if (idx !== -1) {
      this.targets.splice(idx, 1);
      window.soundEngine.playStarSound();
      this.app.showFloatingText(toSq, '+1 Yıldız! ✨');
      this.renderStarsOnBoard();

      if (this.targets.length === 0) {
        // Hepsi toplandı!
        window.soundEngine.playVictorySound();
        window.soundEngine.speak('Tebrikler! Tüm yıldızları topladın!');
        this.app.unlockSticker('knight_master');
        this.app.showVictoryModal('At Ustası!', 'Tüm sihirli yıldızları başarıyla topladın! 🦄⭐');
        return true;
      }
    }

    if (this.moveCount >= this.maxMoves && this.targets.length > 0) {
      this.app.setMascotSpeech('Hamlelerin bitti ama hiç sorun değil! Tekrar deneyelim mi? 🌟');
    }
    return false;
  }

  // 2. 1 Hamlede Mat Avı
  setupMateInOne() {
    const fen = this.gameConfig.fen || 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 0 5';
    this.correctMove = this.gameConfig.correctMove || { from: 45, to: 13 };
    this.app.engine.loadFen(fen);
    this.app.renderBoard();
    this.app.setMascotSpeech('Tek bir büyülü hamleyle rakip şahı mat edebilirsin! Hangi taş mat yapabilir? 🎯👑');
  }

  handleMateMove(move) {
    if (this.app.engine.isCheckmate()) {
      window.soundEngine.playVictorySound();
      window.soundEngine.speak('Şah ve Mat! Muhteşem bir taktik!');
      this.app.unlockSticker('mate_hunter');
      this.app.showVictoryModal('Şah ve Mat!', 'Harika bir hamleyle rakip şahı mat ettin! Prenses Tacı senin! 👑🎉');
      return true;
    } else {
      window.soundEngine.playMoveSound();
      this.app.setMascotSpeech('Şah çekildi veya güzel bir hamleydi, ama tam mat olmadı. Geri alıp tekrar dene! 💫');
      return false;
    }
  }

  // 3. Piyon Yarışı
  setupPawnRace() {
    const fen = this.gameConfig.fen || '8/pppppppp/8/8/8/8/PPPPPPPP/4K1k1 w - - 0 1';
    this.app.engine.loadFen(fen);
    this.app.renderBoard();
    this.app.setMascotSpeech('Piyon fırtınası! Son sıraya ilk ulaşan piyon vezir olur ve oyunu kazanır! 🏃‍♀️💨');
  }

  checkPawnRacePromotion() {
    // Beyaz son siraya ulasti mi?
    for (let c = 0; c < 8; c++) {
      if (this.app.engine.board[c] === 'Q' || this.app.engine.board[c] === 'P') {
        window.soundEngine.playVictorySound();
        window.soundEngine.speak('Tebrikler! Piyonun vezir oldu ve yarışı kazandın!');
        this.app.unlockSticker('pawn_hero');
        this.app.showVictoryModal('Vezir Doğdu!', 'Piyonun yarışı kazandı ve krallığın en güçlü taşı oldu! 👸✨');
        return true;
      }
    }
    return false;
  }

  // 4. Bedava Taş Avcısı
  setupFreePiece() {
    const fen = this.gameConfig.fen || '8/8/8/3p4/8/2B5/8/8 w - - 0 1';
    this.targetSquare = this.gameConfig.targetSquare || 27;
    this.app.engine.loadFen(fen);
    this.app.renderBoard();
    this.app.setMascotSpeech('Rakip taşını korumasız unuttu! Onu filin veya atınla kapabilir misin? 🎯');
  }

  handleFreePieceMove(move) {
    if (move.to === this.targetSquare) {
      window.soundEngine.playCaptureSound();
      window.soundEngine.playVictorySound();
      window.soundEngine.speak('Bravo! Korumasız taşı yakaladın!');
      this.app.showVictoryModal('Taktik Şampiyonu!', 'Boşta kalan taşı hemen fark edip yakaladın! Harika gözler! 👀✨');
      return true;
    }
    return false;
  }

  // 5. Kralı Kurtar
  setupSaveKing() {
    const fen = this.gameConfig.fen || '4r3/8/8/8/8/8/4K3/8 w - - 0 1';
    this.app.engine.loadFen(fen);
    this.app.renderBoard();
    this.app.setMascotSpeech('Eyvah! Kralımız tehlikede! Onu hemen güvenli bir kareye kaçıralım! 🛡️🏰');
  }

  handleSaveKingMove() {
    if (!this.app.engine.isInCheck('w')) {
      window.soundEngine.playVictorySound();
      window.soundEngine.speak('Kral kurtuldu! Çok cesursun!');
      this.app.unlockSticker('castle_guard');
      this.app.showVictoryModal('Kral Kurtarıldı!', 'Kralımızı güvenli bir kareye ulaştırarak kaleyi kurtardın! 🏰💖');
      return true;
    }
    return false;
  }
}

window.MiniGameManager = MiniGameManager;
