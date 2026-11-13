/**
 * Sihirli Satranç - Macera Haritası Bölümleri ve Görev Verileri
 * Seviye seviye açılan 4 farklı masalsı dünya ve bölümler.
 */

const AdventureData = {
  worlds: [
    {
      id: 'world1',
      name: 'Peri Ormanı',
      bgGradient: 'linear-gradient(135deg, #a8e063 0%, #56ab2f 100%)',
      desc: 'Büyülü ağaçlar ve sevimli perilerle dolu orman yolu.',
      levels: [
        {
          id: 1,
          title: 'İlk Adımlar: Minik At Zıpzıp',
          type: 'knight_stars',
          stars: 0,
          dialogue: 'Hoş geldin küçük prenses! Ormandaki altın yıldızları toplamak için Atın L hareketini kullanalım!',
          fen: '8/8/8/8/8/8/8/N7 w - - 0 1',
          targets: [18, 35, 41], // Yıldız kareleri
          maxMoves: 6,
          rewardStars: 3
        },
        {
          id: 2,
          title: 'Korumasız Piyonu Yakala',
          type: 'free_piece',
          stars: 0,
          dialogue: 'Bak, ormandaki minik tavşan piyonunu korumasız unuttu! Filinle o piyonu yakalayabilir misin?',
          fen: '8/8/8/3p4/8/2B5/8/8 w - - 0 1',
          targetSquare: 27, // d5
          rewardStars: 3
        },
        {
          id: 3,
          title: 'Piyon Yarışı Başlıyor!',
          type: 'pawn_race',
          stars: 0,
          dialogue: 'Piyonlar koşu yarışında! Beyaz piyonu vezir yapmak için ilerlet, rakip piyonlara dikkat et!',
          fen: '8/4p3/8/8/8/8/4P3/4K1k1 w - - 0 1',
          rewardStars: 3
        },
        {
          id: 4,
          title: 'Tavşan Pamuk ile Dostluk Maçı',
          type: 'bot_game',
          bot: 'tavsan',
          stars: 0,
          dialogue: 'Tavşan Pamuk seninle ilk tam satranç maçını yapmak için çok heyecanlı! Haydi taşlarını merkeze çıkar!',
          fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
          rewardStars: 3
        }
      ]
    },
    {
      id: 'world2',
      name: 'Şeker Şatosu',
      bgGradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
      desc: 'Lolipop kuleler ve çikolatadan kaleler diyarı.',
      levels: [
        {
          id: 5,
          title: '1 Hamlede Mat: Vezir Akını',
          type: 'mate_in_one',
          stars: 0,
          dialogue: 'Vezirin ve filin harika bir işbirliği kurdu! Siyah şahı tek bir hamlede mat edebilir misin?',
          fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 0 5',
          correctMove: { from: 45, to: 13 }, // Qf3xf7#
          rewardStars: 3
        },
        {
          id: 6,
          title: 'At Çatalı Taktiği',
          type: 'free_piece',
          stars: 0,
          dialogue: 'Atın öyle bir kareye zıplayabilir ki, aynı anda hem şaha hem kaleye saldırabilir!',
          fen: 'r3k3/8/8/8/8/5N2/8/4K3 w - - 0 1',
          targetSquare: 18, // Nc7+ (c7 karesi)
          rewardStars: 3
        },
        {
          id: 7,
          title: 'Kralı Kurtar: Tehditten Kaçış',
          type: 'save_king',
          stars: 0,
          dialogue: 'Eyvah! Rakip kale şahımıza doğru yaklaştı. Şahımızı güvenli bir kareye kaçıralım!',
          fen: '4r3/8/8/8/8/8/4K3/8 w - - 0 1',
          rewardStars: 3
        },
        {
          id: 8,
          title: 'Kurnaz Tilki ile Karşılaşma',
          type: 'bot_game',
          bot: 'tilki',
          stars: 0,
          dialogue: 'Kurnaz Tilki hızlı atak yapmayı sever. Dikkatli ol, taşlarını koru ve onu şaşırt!',
          fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
          rewardStars: 3
        }
      ]
    },
    {
      id: 'world3',
      name: 'Kristal Dağlar',
      bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      desc: 'Göz kamaştırıcı pırıltılı kristaller ve yıldızlı gökyüzü.',
      levels: [
        {
          id: 9,
          title: 'Kale Duvarı Matı',
          type: 'mate_in_one',
          stars: 0,
          dialogue: 'Siyah şah son sırada sıkışmış! Kalenle son sıraya inip koridor matı yap!',
          fen: '6k1/5ppp/8/8/8/8/8/R3K3 w - - 0 1',
          correctMove: { from: 56, to: 0 }, // Ra1-a8#
          rewardStars: 3
        },
        {
          id: 10,
          title: 'Kristal Labirentte At',
          type: 'knight_stars',
          stars: 0,
          dialogue: 'Kristal dağın tepesindeki parıldayan 4 yıldızı atınla toplayabilir misin?',
          fen: '8/8/8/8/8/8/8/3N4 w - - 0 1',
          targets: [11, 20, 29, 46],
          maxMoves: 8,
          rewardStars: 3
        },
        {
          id: 11,
          title: 'Bilge Baykuş Sınavı',
          type: 'bot_game',
          bot: 'baykus',
          stars: 0,
          dialogue: 'Bilge Baykuş taşlarını çok iyi korur. Rok atarak şahını güvene al ve merkeze hakim ol!',
          fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
          rewardStars: 3
        }
      ]
    },
    {
      id: 'world4',
      name: 'Kraliyet Sarayı',
      bgGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      desc: 'Büyük şampiyonların taç giydiği görkemli saray.',
      levels: [
        {
          id: 12,
          title: 'Büyük Çoban Matı Zaferi',
          type: 'mate_in_one',
          stars: 0,
          dialogue: 'Tüm saray seni izliyor! Vezir f7 karesine indiğinde zafer senin olacak!',
          fen: 'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 4 4',
          correctMove: { from: 45, to: 13 },
          rewardStars: 3
        },
        {
          id: 13,
          title: 'Kral Aslan ile Büyük Final!',
          type: 'bot_game',
          bot: 'aslan',
          stars: 0,
          dialogue: 'İşte krallığın şampiyonu Kral Aslan! Tüm öğrendiklerini kullan, Satranç Kraliçesi unvanını kazan!',
          fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
          rewardStars: 3
        }
      ]
    }
  ],

  // Çıkartma Albümü Verileri (Başarı Rozetleri)
  stickers: [
    { id: 'first_win', name: 'İlk Zafer Çıkartması', icon: '🏆', desc: 'İlk satranç maçını kazandığında açılır!', unlocked: false },
    { id: 'knight_master', name: 'Yıldız Toplayıcı At', icon: '🦄', desc: 'At labirentlerini tamamladığında açılır!', unlocked: false },
    { id: 'pawn_hero', name: 'Cesur Piyon Tacı', icon: '👑', desc: 'Piyon yarışında vezir çıkardığında açılır!', unlocked: false },
    { id: 'mate_hunter', name: 'Şah Mat Avcısı', icon: '✨', desc: '1 hamlede mat bulmacalarını çözdüğünde açılır!', unlocked: false },
    { id: 'castle_guard', name: 'Kral Muhafızı', icon: '🏰', desc: 'Kralı tehlikelerden başarıyla kurtardığında açılır!', unlocked: false },
    { id: 'chess_queen', name: 'Satranç Kraliçesi', icon: '👸', desc: 'Kral Aslanı yendiğinde açılır!', unlocked: false }
  ]
};

window.AdventureData = AdventureData;
