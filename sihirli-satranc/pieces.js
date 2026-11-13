/**
 * Sihirli Satranç - Vektörel Masal Taşları, Tahta Temaları ve Maskot Çizimleri
 * Yüksek çözünürlüklü tablet ekranları için kristal netliğinde SVG grafikler.
 */

const PieceThemeManager = {
  // Aktif tema
  currentTheme: 'magical',

  // Maskot Vektörleri
  mascots: {
    unicorn: {
      id: 'unicorn',
      name: 'Yıldız',
      title: 'Sihirli Unicorn',
      greeting: 'Ben Yıldız! Sihirli boynuzum ve parıltılarımla satranç maceranda yanındayım! 🦄✨',
      svg: `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <defs>
            <linearGradient id="unicornMane" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FF9AA2"/>
              <stop offset="33%" stop-color="#FFDAC1"/>
              <stop offset="66%" stop-color="#E2F0CB"/>
              <stop offset="100%" stop-color="#B5EAD7"/>
            </linearGradient>
            <linearGradient id="unicornHorn" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stop-color="#FFD700"/>
              <stop offset="100%" stop-color="#FFF9A6"/>
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="45" fill="#FFF0F5" stroke="#FFB6C1" stroke-width="3"/>
          <!-- Yele -->
          <path d="M 35 25 C 20 30, 20 65, 38 85 C 30 70, 30 45, 42 35 Z" fill="url(#unicornMane)"/>
          <!-- Kafa -->
          <path d="M 40 75 C 38 55, 50 40, 70 42 C 78 43, 82 50, 78 60 C 74 68, 62 76, 50 78 Z" fill="#FFFFFF" stroke="#E0C3FC" stroke-width="2"/>
          <!-- Kulak -->
          <polygon points="52,40 58,24 63,38" fill="#FFF0F5" stroke="#FFB6C1" stroke-width="2"/>
          <polygon points="55,37 58,28 60,36" fill="#FFB6C1"/>
          <!-- Boynuz (Horn) -->
          <polygon points="62,40 75,10 68,40" fill="url(#unicornHorn)" stroke="#E5C100" stroke-width="1.5"/>
          <line x1="65" y1="32" x2="70" y2="28" stroke="#E5C100" stroke-width="1"/>
          <line x1="67" y1="23" x2="72" y2="19" stroke="#E5C100" stroke-width="1"/>
          <!-- Göz (Büyük gülen sevimli göz) -->
          <ellipse cx="64" cy="52" rx="4" ry="5.5" fill="#4A306D"/>
          <circle cx="65.5" cy="50.5" r="1.8" fill="#FFFFFF"/>
          <circle cx="62.5" cy="54" r="0.8" fill="#FFFFFF"/>
          <!-- Burun ve Yanak -->
          <circle cx="75" cy="57" r="1.2" fill="#FF85A1"/>
          <circle cx="59" cy="60" r="4.5" fill="#FFB6C1" opacity="0.6"/>
          <!-- Gülümseme -->
          <path d="M 72 62 Q 74 66 70 67" fill="none" stroke="#4A306D" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      `
    },
    cat: {
      id: 'cat',
      name: 'Pamuk',
      title: 'Peri Kedi',
      greeting: 'Miyav! Ben Pamuk. Taktikleri ve taş yakalamayı çok severim! 🐱🐾',
      svg: `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="50" cy="50" r="45" fill="#E8F8F5" stroke="#A3E4D7" stroke-width="3"/>
          <!-- Kulaklar -->
          <polygon points="28,45 22,20 42,32" fill="#FFFFFF" stroke="#A3E4D7" stroke-width="2"/>
          <polygon points="26,38 24,24 38,32" fill="#FADBD8"/>
          <polygon points="72,45 78,20 58,32" fill="#FFFFFF" stroke="#A3E4D7" stroke-width="2"/>
          <polygon points="74,38 76,24 62,32" fill="#FADBD8"/>
          <!-- Kafa -->
          <ellipse cx="50" cy="55" rx="30" ry="24" fill="#FFFFFF" stroke="#A3E4D7" stroke-width="2"/>
          <!-- Peri Tacı -->
          <path d="M 42 32 L 46 25 L 50 30 L 54 25 L 58 32 Z" fill="#F9E79F" stroke="#F1C40F" stroke-width="1.5"/>
          <!-- Gözler -->
          <ellipse cx="38" cy="52" rx="4.5" ry="6" fill="#16A085"/>
          <circle cx="39.5" cy="50" r="2" fill="#FFFFFF"/>
          <ellipse cx="62" cy="52" rx="4.5" ry="6" fill="#16A085"/>
          <circle cx="63.5" cy="50" r="2" fill="#FFFFFF"/>
          <!-- Yanaklar & Burun -->
          <polygon points="48,58 52,58 50,61" fill="#E74C3C"/>
          <path d="M 50 61 Q 46 66 43 63 M 50 61 Q 54 66 57 63" fill="none" stroke="#2C3E50" stroke-width="1.5" stroke-linecap="round"/>
          <circle cx="34" cy="60" r="4" fill="#FADBD8" opacity="0.8"/>
          <circle cx="66" cy="60" r="4" fill="#FADBD8" opacity="0.8"/>
          <!-- Bıyıklar -->
          <line x1="28" y1="56" x2="18" y2="54" stroke="#BDC3C7" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="28" y1="60" x2="16" y2="62" stroke="#BDC3C7" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="72" y1="56" x2="82" y2="54" stroke="#BDC3C7" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="72" y1="60" x2="84" y2="62" stroke="#BDC3C7" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      `
    },
    rabbit: {
      id: 'rabbit',
      name: 'Zıpzıp',
      title: 'Şövalye Tavşan',
      greeting: 'Ben Şövalye Zıpzıp! At gibi hızlı, kale gibi güçlüyüz! 🐰🥕',
      svg: `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="50" cy="50" r="45" fill="#FEF9E7" stroke="#F9E79F" stroke-width="3"/>
          <!-- Uzun Kulaklar -->
          <ellipse cx="36" cy="24" rx="7" ry="18" fill="#FFFFFF" stroke="#FADBD8" stroke-width="2"/>
          <ellipse cx="36" cy="24" rx="4" ry="13" fill="#F5B7B1"/>
          <ellipse cx="64" cy="24" rx="7" ry="18" fill="#FFFFFF" stroke="#FADBD8" stroke-width="2"/>
          <ellipse cx="64" cy="24" rx="4" ry="13" fill="#F5B7B1"/>
          <!-- Şövalye Başlığı Bandı -->
          <path d="M 28 42 Q 50 36 72 42" stroke="#5DADE2" stroke-width="4" fill="none" stroke-linecap="round"/>
          <circle cx="50" cy="38" r="4" fill="#F1C40F" stroke="#B7950B" stroke-width="1"/>
          <!-- Yüz -->
          <circle cx="50" cy="60" r="26" fill="#FFFFFF" stroke="#E5E7E9" stroke-width="2"/>
          <!-- Gözler -->
          <ellipse cx="40" cy="56" rx="4" ry="5.5" fill="#2C3E50"/>
          <circle cx="41.5" cy="54" r="1.8" fill="#FFFFFF"/>
          <ellipse cx="60" cy="56" rx="4" ry="5.5" fill="#2C3E50"/>
          <circle cx="61.5" cy="54" r="1.8" fill="#FFFFFF"/>
          <!-- Sevimli Havuç Burun & Yanak -->
          <ellipse cx="50" cy="64" rx="3" ry="2" fill="#E67E22"/>
          <circle cx="34" cy="65" r="4" fill="#FADBD8" opacity="0.8"/>
          <circle cx="66" cy="65" r="4" fill="#FADBD8" opacity="0.8"/>
          <path d="M 47 66 Q 50 69 53 66" fill="none" stroke="#2C3E50" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      `
    },
    dragon: {
      id: 'dragon',
      name: 'Kıvılcım',
      title: 'Minik Ejderha',
      greeting: 'Merhaba! Ben Kıvılcım! Ateş yerine neşeli kalpler üflerim! 🐲💜',
      svg: `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="50" cy="50" r="45" fill="#F4ECF7" stroke="#D7BDE2" stroke-width="3"/>
          <!-- Minik Boynuzlar -->
          <polygon points="34,36 30,22 42,32" fill="#F5B041" stroke="#D68910" stroke-width="1.5"/>
          <polygon points="66,36 70,22 58,32" fill="#F5B041" stroke="#D68910" stroke-width="1.5"/>
          <!-- Kafa -->
          <ellipse cx="50" cy="55" rx="28" ry="25" fill="#AF7AC5" stroke="#7D3C98" stroke-width="2"/>
          <!-- Sevimli Kanatlar -->
          <path d="M 22 56 C 12 50, 10 38, 20 42 C 20 48, 22 52, 25 56 Z" fill="#BB8FCE" stroke="#7D3C98" stroke-width="1"/>
          <path d="M 78 56 C 88 50, 90 38, 80 42 C 80 48, 78 52, 75 56 Z" fill="#BB8FCE" stroke="#7D3C98" stroke-width="1"/>
          <!-- Göbek / Çene -->
          <ellipse cx="50" cy="66" rx="16" ry="12" fill="#F5EEF8"/>
          <!-- Gözler -->
          <ellipse cx="38" cy="50" rx="5" ry="6.5" fill="#4A235A"/>
          <circle cx="40" cy="48" r="2.2" fill="#FFFFFF"/>
          <circle cx="37" cy="52" r="1" fill="#FFFFFF"/>
          <ellipse cx="62" cy="50" rx="5" ry="6.5" fill="#4A235A"/>
          <circle cx="64" cy="48" r="2.2" fill="#FFFFFF"/>
          <circle cx="61" cy="52" r="1" fill="#FFFFFF"/>
          <!-- Sevimli Burun Delikleri ve Gülümseme -->
          <circle cx="47" cy="62" r="1.5" fill="#7D3C98"/>
          <circle cx="53" cy="62" r="1.5" fill="#7D3C98"/>
          <path d="M 45 67 Q 50 72 55 67" fill="none" stroke="#4A235A" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      `
    }
  },

  // Bot Karakter Avatarları (Yapay Zeka Rakipler)
  bots: {
    tavsan: {
      name: 'Minik Tavşan',
      title: 'Sevimli Çırak',
      elo: 'Kolay',
      desc: 'Satrancı yeni öğreniyor, bazen taşlarını korumayı unutabilir!',
      color: '#A9DFBF'
    },
    tilki: {
      name: 'Kurnaz Tilki',
      title: 'Cesur Saldırgan',
      elo: 'Orta',
      desc: 'Hızlı hücumları ve taş kapmayı çok sever!',
      color: '#FAD7A0'
    },
    baykus: {
      name: 'Bilge Baykuş',
      title: 'Saray Eğitmeni',
      elo: 'İyi',
      desc: 'Taşlarını sağlam savunur, sakin ve düşünerek oynar.',
      color: '#D2B4DE'
    },
    aslan: {
      name: 'Kral Aslan',
      title: 'Krallık Şampiyonu',
      elo: 'Usta',
      desc: 'Krallığın en iyi oyuncusu! Şah mat yapma ustası.',
      color: '#F9E79F'
    }
  },

  // Satranç Taşları SVG Üreticisi
  getPieceSvg(piece, theme = this.currentTheme) {
    if (!piece) return '';
    const isWhite = piece === piece.toUpperCase();
    const type = piece.toUpperCase();

    // Renk paleti
    // Beyaz: Masalsı İnci Beyazı & Pembe/Altın detaylar
    // Siyah: Büyülü Ametist Moru & Lacivert detaylar
    const baseWhite = '#FFFFFF';
    const strokeWhite = '#D4AF37';
    const accentWhite = '#FFB6C1';

    const baseBlack = '#5B2C6F';
    const strokeBlack = '#E8DAEF';
    const accentBlack = '#A569BD';

    const fill = isWhite ? baseWhite : baseBlack;
    const stroke = isWhite ? '#B7950B' : '#E8DAEF';
    const detail = isWhite ? accentWhite : accentBlack;
    const eyeFill = isWhite ? '#4A306D' : '#FADBD8';

    switch (type) {
      case 'P': // Piyon: Sevimli Taçlı / Fındık Şapkalı Muhafız
        return `
          <svg viewBox="0 0 80 80" width="100%" height="100%" class="chess-piece">
            <ellipse cx="40" cy="72" rx="22" ry="6" fill="rgba(0,0,0,0.15)"/>
            <!-- Taban -->
            <path d="M 24 68 C 24 64, 56 64, 56 68 L 52 72 L 28 72 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
            <!-- Gövde -->
            <path d="M 32 64 C 30 52, 34 44, 40 44 C 46 44, 50 52, 48 64 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
            <!-- Kafa (Gülümseyen) -->
            <circle cx="40" cy="34" r="14" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
            <!-- Minik Piyon Tacı / Şapkası -->
            <path d="M 33 22 L 36 26 L 40 21 L 44 26 L 47 22 L 46 27 L 34 27 Z" fill="#F1C40F" stroke="#B7950B" stroke-width="1"/>
            <!-- Gözler -->
            <ellipse cx="36" cy="33" rx="2" ry="2.8" fill="${eyeFill}"/>
            <circle cx="37" cy="32" r="0.8" fill="#FFFFFF"/>
            <ellipse cx="44" cy="33" rx="2" ry="2.8" fill="${eyeFill}"/>
            <circle cx="45" cy="32" r="0.8" fill="#FFFFFF"/>
            <!-- Yanaklar & Gülüş -->
            <circle cx="33" cy="37" r="2" fill="${detail}" opacity="0.8"/>
            <circle cx="47" cy="37" r="2" fill="${detail}" opacity="0.8"/>
            <path d="M 38 37 Q 40 40 42 37" fill="none" stroke="${eyeFill}" stroke-width="1.2" stroke-linecap="round"/>
          </svg>
        `;

      case 'N': // At: Sihirli Tek Boynuzlu At (Unicorn)
        return `
          <svg viewBox="0 0 80 80" width="100%" height="100%" class="chess-piece">
            <ellipse cx="40" cy="72" rx="24" ry="6" fill="rgba(0,0,0,0.15)"/>
            <!-- Taban -->
            <rect x="22" y="65" width="36" height="7" rx="3" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
            <!-- At Gövdesi ve Yelesi -->
            <path d="M 26 65 C 24 50, 32 30, 48 24 C 58 24, 62 30, 58 40 C 56 46, 44 52, 54 65 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
            <!-- Yele Dalgaları -->
            <path d="M 28 42 Q 22 48 26 56 M 34 32 Q 28 38 31 46" fill="none" stroke="${detail}" stroke-width="2.5" stroke-linecap="round"/>
            <!-- Boynuz (Unicorn Horn) -->
            <polygon points="46,24 54,8 52,24" fill="#F1C40F" stroke="#B7950B" stroke-width="1.5"/>
            <!-- Kulak -->
            <polygon points="40,24 43,14 47,23" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>
            <!-- Göz -->
            <ellipse cx="50" cy="33" rx="2.2" ry="3" fill="${eyeFill}"/>
            <circle cx="51" cy="32" r="1" fill="#FFFFFF"/>
            <!-- Burun ve Gülüş -->
            <circle cx="58" cy="38" r="1" fill="${stroke}"/>
            <path d="M 54 42 Q 57 44 55 45" fill="none" stroke="${eyeFill}" stroke-width="1.2" stroke-linecap="round"/>
          </svg>
        `;

      case 'B': // Fil: Bilge Büyücü Kuş / Şapkalı Piskopos
        return `
          <svg viewBox="0 0 80 80" width="100%" height="100%" class="chess-piece">
            <ellipse cx="40" cy="72" rx="22" ry="6" fill="rgba(0,0,0,0.15)"/>
            <!-- Taban -->
            <rect x="24" y="66" width="32" height="6" rx="3" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
            <!-- Gövde -->
            <path d="M 30 66 C 30 54, 34 46, 40 46 C 46 46, 50 54, 50 66 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
            <!-- Baş ve Mitre (Fil Başlığı) -->
            <path d="M 30 42 C 28 28, 40 16, 40 16 C 40 16, 52 28, 50 42 C 50 48, 30 48, 30 42 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
            <!-- Tepe Pırıltısı -->
            <circle cx="40" cy="14" r="3.5" fill="#F1C40F" stroke="#B7950B" stroke-width="1"/>
            <!-- Başlıktaki Çapraz Yarık -->
            <line x1="36" y1="26" x2="44" y2="34" stroke="${stroke}" stroke-width="2" stroke-linecap="round"/>
            <!-- Yüz -->
            <ellipse cx="36" cy="40" rx="2" ry="2.5" fill="${eyeFill}"/>
            <circle cx="36.8" cy="39.2" r="0.7" fill="#FFFFFF"/>
            <ellipse cx="44" cy="40" rx="2" ry="2.5" fill="${eyeFill}"/>
            <circle cx="44.8" cy="39.2" r="0.7" fill="#FFFFFF"/>
            <circle cx="33" cy="42" r="1.8" fill="${detail}" opacity="0.8"/>
            <circle cx="47" cy="42" r="1.8" fill="${detail}" opacity="0.8"/>
            <path d="M 38 42 Q 40 44 42 42" fill="none" stroke="${eyeFill}" stroke-width="1.2" stroke-linecap="round"/>
          </svg>
        `;

      case 'R': // Kale: Gülümseyen Masal Kalesi ve Dalgalanan Bayrak
        return `
          <svg viewBox="0 0 80 80" width="100%" height="100%" class="chess-piece">
            <ellipse cx="40" cy="72" rx="24" ry="6" fill="rgba(0,0,0,0.15)"/>
            <!-- Taban -->
            <rect x="22" y="65" width="36" height="7" rx="2" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
            <!-- Kule Duvarı -->
            <path d="M 26 65 L 28 36 L 52 36 L 54 65 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
            <!-- Siperler (Kule Dişleri) -->
            <path d="M 24 36 L 24 24 L 30 24 L 30 29 L 37 29 L 37 24 L 43 24 L 43 29 L 50 29 L 50 24 L 56 24 L 56 36 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
            <!-- Sevimli Minik Bayrak -->
            <line x1="40" y1="24" x2="40" y2="12" stroke="#B7950B" stroke-width="1.5"/>
            <polygon points="40,12 48,15 40,19" fill="#E74C3C"/>
            <!-- Kale Yüzü -->
            <ellipse cx="35" cy="48" rx="2.2" ry="3" fill="${eyeFill}"/>
            <circle cx="36" cy="47" r="0.9" fill="#FFFFFF"/>
            <ellipse cx="45" cy="48" rx="2.2" ry="3" fill="${eyeFill}"/>
            <circle cx="46" cy="47" r="0.9" fill="#FFFFFF"/>
            <circle cx="31" cy="52" r="2.2" fill="${detail}" opacity="0.8"/>
            <circle cx="49" cy="52" r="2.2" fill="${detail}" opacity="0.8"/>
            <path d="M 37 53 Q 40 57 43 53" fill="none" stroke="${eyeFill}" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        `;

      case 'Q': // Vezir: Peri Masalı Prenses Kraliçe
        return `
          <svg viewBox="0 0 80 80" width="100%" height="100%" class="chess-piece">
            <ellipse cx="40" cy="72" rx="25" ry="6" fill="rgba(0,0,0,0.15)"/>
            <!-- Taban -->
            <rect x="20" y="65" width="40" height="7" rx="3" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
            <!-- Kraliçe Elbisesi/Gövdesi -->
            <path d="M 25 65 C 28 50, 32 40, 40 40 C 48 40, 52 50, 55 65 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
            <!-- Kraliçe Tacı -->
            <path d="M 25 32 L 23 20 L 31 26 L 40 16 L 49 26 L 57 20 L 55 32 Z" fill="#F1C40F" stroke="#B7950B" stroke-width="1.8"/>
            <!-- Taç İncileri -->
            <circle cx="23" cy="19" r="2" fill="#E74C3C"/>
            <circle cx="31" cy="25" r="2" fill="#3498DB"/>
            <circle cx="40" cy="15" r="2.5" fill="#9B59B6"/>
            <circle cx="49" cy="25" r="2" fill="#3498DB"/>
            <circle cx="57" cy="19" r="2" fill="#E74C3C"/>
            <!-- Kafa ve Yüz -->
            <circle cx="40" cy="38" r="11" fill="${fill}" stroke="${stroke}" stroke-width="1.8"/>
            <!-- Gözler (Kirpikli sevimli gözler) -->
            <ellipse cx="36" cy="37" rx="2" ry="2.8" fill="${eyeFill}"/>
            <circle cx="37" cy="36" r="0.8" fill="#FFFFFF"/>
            <line x1="34" y1="35" x2="33" y2="33" stroke="${eyeFill}" stroke-width="1" stroke-linecap="round"/>
            <ellipse cx="44" cy="37" rx="2" ry="2.8" fill="${eyeFill}"/>
            <circle cx="45" cy="36" r="0.8" fill="#FFFFFF"/>
            <line x1="46" y1="35" x2="47" y2="33" stroke="${eyeFill}" stroke-width="1" stroke-linecap="round"/>
            <!-- Allık ve Gülümseme -->
            <circle cx="33" cy="40" r="2.5" fill="${detail}" opacity="0.85"/>
            <circle cx="47" cy="40" r="2.5" fill="${detail}" opacity="0.85"/>
            <path d="M 38 41 Q 40 44 42 41" fill="none" stroke="${eyeFill}" stroke-width="1.3" stroke-linecap="round"/>
          </svg>
        `;

      case 'K': // Şah: Gülümseyen Sevimli Kral
        return `
          <svg viewBox="0 0 80 80" width="100%" height="100%" class="chess-piece">
            <ellipse cx="40" cy="72" rx="25" ry="6" fill="rgba(0,0,0,0.15)"/>
            <!-- Taban -->
            <rect x="20" y="65" width="40" height="7" rx="3" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
            <!-- Kral Kaftanı -->
            <path d="M 24 65 C 28 48, 32 38, 40 38 C 48 38, 52 48, 56 65 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
            <!-- Kraliyet Tacı -->
            <path d="M 26 32 C 26 22, 54 22, 54 32 Z" fill="#F1C40F" stroke="#B7950B" stroke-width="2"/>
            <!-- Taç Tepesindeki Masalsı Haç / Yıldız -->
            <path d="M 40 10 L 40 22 M 34 16 L 46 16" stroke="#F1C40F" stroke-width="3" stroke-linecap="round"/>
            <!-- Kafa ve Yüz -->
            <circle cx="40" cy="37" r="11" fill="${fill}" stroke="${stroke}" stroke-width="1.8"/>
            <!-- Gözler -->
            <ellipse cx="36" cy="36" rx="2" ry="2.8" fill="${eyeFill}"/>
            <circle cx="37" cy="35" r="0.8" fill="#FFFFFF"/>
            <ellipse cx="44" cy="36" rx="2" ry="2.8" fill="${eyeFill}"/>
            <circle cx="45" cy="35" r="0.8" fill="#FFFFFF"/>
            <!-- Kral Bıyığı & Yanaklar -->
            <path d="M 36 41 Q 40 44 44 41" fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round"/>
            <circle cx="33" cy="39" r="2.2" fill="${detail}" opacity="0.8"/>
            <circle cx="47" cy="39" r="2.2" fill="${detail}" opacity="0.8"/>
          </svg>
        `;
    }
    return '';
  }
};

window.PieceThemeManager = PieceThemeManager;
