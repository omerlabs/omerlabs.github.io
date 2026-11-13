/**
 * Klasik Ahşap Satranç Ses Motoru
 * WebAudio API ile gerçekçi ahşap taş vuruş ve yeme sesleri.
 */

class ChessAudio {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Ahşap tahtaya taş koyma sesi (Tok vuruş)
  playMove() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180, t);
    osc.frequency.exponentialRampToValueAtTime(45, t + 0.08);

    gain.gain.setValueAtTime(0.6, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.08);
  }

  // Ahşap taş yeme sesi (Çift tok tıklama)
  playCapture() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;

    [0, 0.04].forEach((offset, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(idx === 0 ? 240 : 160, t + offset);
      osc.frequency.exponentialRampToValueAtTime(50, t + offset + 0.07);

      gain.gain.setValueAtTime(0.7, t + offset);
      gain.gain.exponentialRampToValueAtTime(0.001, t + offset + 0.07);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t + offset);
      osc.stop(t + offset + 0.07);
    });
  }

  // Şah sesi
  playCheck() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, t);
    osc.frequency.exponentialRampToValueAtTime(660, t + 0.18);

    gain.gain.setValueAtTime(0.4, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.18);
  }

  // Zafer / Mat Fanfarı
  playVictory() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t + idx * 0.12);

      gain.gain.setValueAtTime(0.35, t + idx * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.12 + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t + idx * 0.12);
      osc.stop(t + idx * 0.12 + 0.3);
    });
  }
}

window.chessAudio = new ChessAudio();
