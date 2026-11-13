/**
 * Sihirli Satranç - Ses Efektleri, Masalsı Müzik ve Türkçe Seslendirme Motoru
 * WebAudio API ile %100 çevrimdışı, sıfır dosya bağımlılığı ve kristal netliğinde sesler.
 */

class SoundEngine {
  constructor() {
    this.audioCtx = null;
    this.sfxEnabled = true;
    this.musicEnabled = true;
    this.voiceEnabled = true;
    this.musicInterval = null;
    this.musicGain = null;
    this.sfxGain = null;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
        this.sfxGain = this.audioCtx.createGain();
        this.sfxGain.gain.value = 0.5;
        this.sfxGain.connect(this.audioCtx.destination);

        this.musicGain = this.audioCtx.createGain();
        this.musicGain.gain.value = 0.15;
        this.musicGain.connect(this.audioCtx.destination);
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  ensureContext() {
    this.init();
    return this.audioCtx && this.sfxEnabled;
  }

  // Taşa dokunma / seçme sesi
  playSelectSound() {
    if (!this.ensureContext()) return;
    const ctx = this.audioCtx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
    osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.08); // E5

    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  }

  // Taş hamle sesi (Tatlı ahşap pıt + parıltı)
  playMoveSound() {
    if (!this.ensureContext()) return;
    const ctx = this.audioCtx;
    const t = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, t);
    osc.frequency.exponentialRampToValueAtTime(140, t + 0.12);

    gain.gain.setValueAtTime(0.5, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.12);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start();
    osc.stop(t + 0.12);
  }

  // Taş yeme sesi (Sihirli woosh + pırıltı)
  playCaptureSound() {
    if (!this.ensureContext()) return;
    const ctx = this.audioCtx;
    const t = ctx.currentTime;

    // 2 tonlu neşeli pırıltı
    [587.33, 880].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t + idx * 0.06);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, t + idx * 0.06 + 0.14);

      gain.gain.setValueAtTime(0.35, t + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.06 + 0.14);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(t + idx * 0.06);
      osc.stop(t + idx * 0.06 + 0.14);
    });
  }

  // Şah çekildiğinde hafif uyarı tınısı
  playCheckSound() {
    if (!this.ensureContext()) return;
    const ctx = this.audioCtx;
    const t = ctx.currentTime;

    const notes = [440, 554.37, 659.25, 880];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t + i * 0.07);

      gain.gain.setValueAtTime(0.3, t + i * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.07 + 0.25);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(t + i * 0.07);
      osc.stop(t + i * 0.07 + 0.25);
    });
  }

  // Şah ve Mat / Zafer Kutlaması (Masalsı Fanfar)
  playVictorySound() {
    if (!this.ensureContext()) return;
    const ctx = this.audioCtx;
    const t = ctx.currentTime;

    // Zafer melodisi: C5 -> E5 -> G5 -> C6 -> E6
    const fanfare = [
      { f: 523.25, d: 0.15 },
      { f: 659.25, d: 0.15 },
      { f: 783.99, d: 0.2 },
      { f: 1046.50, d: 0.4 },
      { f: 1318.51, d: 0.6 }
    ];

    let offset = 0;
    fanfare.forEach(note => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, t + offset);

      gain.gain.setValueAtTime(0.4, t + offset);
      gain.gain.exponentialRampToValueAtTime(0.001, t + offset + note.d);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(t + offset);
      osc.stop(t + offset + note.d);

      offset += note.d * 0.8;
    });
  }

  // Yıldız kazanma tınısı
  playStarSound() {
    if (!this.ensureContext()) return;
    const ctx = this.audioCtx;
    const t = ctx.currentTime;

    [987.77, 1318.51, 1567.98].forEach((f, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, t + idx * 0.08);

      gain.gain.setValueAtTime(0.3, t + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.08 + 0.2);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(t + idx * 0.08);
      osc.stop(t + idx * 0.08 + 0.2);
    });
  }

  // Hazine Sandığı Açılma Sesi
  playChestSound() {
    if (!this.ensureContext()) return;
    const ctx = this.audioCtx;
    const t = ctx.currentTime;

    // Gizemli tırmanış
    for (let i = 0; i < 6; i++) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const f = 400 + i * 150;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, t + i * 0.06);

      gain.gain.setValueAtTime(0.25, t + i * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.06 + 0.18);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(t + i * 0.06);
      osc.stop(t + i * 0.06 + 0.18);
    }
  }

  // Arka plan masal müziği (Huzurlu, pentatonik arp melodisi)
  startBackgroundMusic() {
    if (this.musicInterval) return;
    this.init();
    if (!this.musicEnabled) return;

    const scale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];
    let step = 0;

    const playNextNote = () => {
      if (!this.musicEnabled || !this.audioCtx) return;
      const ctx = this.audioCtx;
      if (ctx.state === 'suspended') return;

      const f = scale[step % scale.length];
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, ctx.currentTime);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(this.musicGain);

      osc.start();
      osc.stop(ctx.currentTime + 1.2);

      // Pentatonik zıplamalar
      step = (step + [1, 2, 3, -1, 2][Math.floor(Math.random() * 5)] + scale.length) % scale.length;
    };

    this.musicInterval = setInterval(playNextNote, 850);
  }

  stopBackgroundMusic() {
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
  }

  // Türkçe Sesli Teşvik Motoru
  speak(text) {
    if (!this.voiceEnabled) return;
    if (!('speechSynthesis' in window)) return;

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'tr-TR';
      utterance.rate = 1.0;
      utterance.pitch = 1.25; // Sevimli, neşeli çocuk dostu ses tonu

      // Turkce ses ara
      const voices = window.speechSynthesis.getVoices();
      const trVoice = voices.find(v => v.lang.startsWith('tr'));
      if (trVoice) {
        utterance.voice = trVoice;
      }

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn("Ses sentezleyici hatası:", e);
    }
  }
}

window.soundEngine = new SoundEngine();
