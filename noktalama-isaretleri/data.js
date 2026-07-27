// ==========================================================================
// DİL BİLGİSİ NOKTALAMA İŞARETLERİ VE EDEBİ PARAGRAF VERİTABANI
// ==========================================================================

const punctuationData = [
  {
    "id": "nokta",
    "symbol": ".",
    "name": "Nokta",
    "color": "#10b981",
    "description": "Cümlelerin sonuna, kısaltmaların ardına ve sıra bildiren sayıların yanına konan temel durak işareti.",
    "rules": [
      {
        "id": "nokta_r1",
        "title": "Cümlenin Sonu",
        "ruleText": "Tamamlanmış cümlelerin sonuna konur.",
        "examples": [
          "Türk dili, dillerin en zenginlerindendir.",
          "Bu akşam sinemaya gitmek için hazırlandık.",
          "Kitap okumak insanın bakış açısını genişletir.",
          "Yeni projeyi zamanında bitirmek için çok çalıştık.",
          "Bahçedeki çiçekler baharın gelişiyle açmıştı."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Cümlenin Sonu' kuralı doğru uygulanmıştır?",
            "options": [
              "Kitap okumak insanın bakış açısını genişletir!",
              "Bahçedeki çiçekler baharın gelişiyle açmıştı,",
              "Türk dili, dillerin en zenginlerindendir.",
              "Türk dili dillerin en zenginlerindendir;"
            ],
            "correctIndex": 2,
            "explanation": "Tamamlanmış bildirme cümlelerinin sonuna nokta konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Yeni projeyi zamanında bitirmek için çok çalıştık.",
              "Kitap okumak insanın bakış açısını genişletir.",
              "Türk dili, dillerin en zenginlerindendir.",
              "Kitap okumak insanın bakış açısını genişletir!"
            ],
            "correctIndex": 3,
            "explanation": "Tamamlanmış bildirme cümlelerinin sonuna nokta konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Cümlenin Sonu' kuralı doğru uygulanmıştır?",
            "options": [
              "Yarın sabah erkenden yola çıkacağız:",
              "Türk dili dillerin en zenginlerindendir;",
              "Kitap okumak insanın bakış açısını genişletir.",
              "Bu akşam sinemaya gitmek için hazırlandık?"
            ],
            "correctIndex": 2,
            "explanation": "Tamamlanmış bildirme cümlelerinin sonuna nokta konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Bu akşam sinemaya gitmek için hazırlandık.",
              "Yarın sabah erkenden yola çıkacağız.",
              "Bahçedeki çiçekler baharın gelişiyle açmıştı,",
              "Kitap okumak insanın bakış açısını genişletir."
            ],
            "correctIndex": 2,
            "explanation": "Tamamlanmış bildirme cümlelerinin sonuna nokta konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Cümlenin Sonu' kuralı doğru uygulanmıştır?",
            "options": [
              "Bahçedeki çiçekler baharın gelişiyle açmıştı.",
              "Bu akşam sinemaya gitmek için hazırlandık?",
              "Yeni projeyi zamanında bitirmek için çok çalıştık;",
              "Türk dili dillerin en zenginlerindendir;"
            ],
            "correctIndex": 0,
            "explanation": "Tamamlanmış bildirme cümlelerinin sonuna nokta konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Bahçedeki çiçekler baharın gelişiyle açmıştı.",
              "Türk dili dillerin en zenginlerindendir;",
              "Türk dili, dillerin en zenginlerindendir.",
              "Kitap okumak insanın bakış açısını genişletir."
            ],
            "correctIndex": 1,
            "explanation": "Tamamlanmış bildirme cümlelerinin sonuna nokta konur."
          }
        ]
      },
      {
        "id": "nokta_r2",
        "title": "Kısaltmaların Sonu",
        "ruleText": "Bazı kısaltmaların sonuna konur.",
        "examples": [
          "Dr. Kemal Bey bugün klinikte değil.",
          "Prof. Dr. İlber Ortaylı yarın konferans verecek.",
          "Kitaptaki vb. kısaltmaların anlamları sözlükte var.",
          "İng. dersinde yeni kelimeler öğrendik.",
          "Av. Selim Bey dosyayı mahkemeye sundu."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Kısaltmaların Sonu' kuralı doğru uygulanmıştır?",
            "options": [
              "Dr. Kemal Bey bugün klinikte değil.",
              "Alb rütbesindeki subaylar törene katıldı.",
              "Prof Dr İlber Ortaylı yarın konferans verecek.",
              "Av Selim Bey dosyayı mahkemeye sundu."
            ],
            "correctIndex": 0,
            "explanation": "TDK kurallarına göre küçük harfle başlayan bazı kısaltmaların sonuna nokta konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Av. Selim Bey dosyayı mahkemeye sundu.",
              "İng. dersinde yeni kelimeler öğrendik.",
              "Dr. Kemal Bey bugün klinikte değil.",
              "Prof Dr İlber Ortaylı yarın konferans verecek."
            ],
            "correctIndex": 3,
            "explanation": "TDK kurallarına göre küçük harfle başlayan bazı kısaltmaların sonuna nokta konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Kısaltmaların Sonu' kuralı doğru uygulanmıştır?",
            "options": [
              "Alb rütbesindeki subaylar törene katıldı.",
              "Kitaptaki vb. kısaltmaların anlamları sözlükte var.",
              "Av Selim Bey dosyayı mahkemeye sundu.",
              "İng dersinde yeni kelimeler öğrendik."
            ],
            "correctIndex": 1,
            "explanation": "TDK kurallarına göre küçük harfle başlayan bazı kısaltmaların sonuna nokta konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Alb. rütbesindeki subaylar törene katıldı.",
              "İng dersinde yeni kelimeler öğrendik.",
              "Kitaptaki vb. kısaltmaların anlamları sözlükte var.",
              "Dr. Kemal Bey bugün klinikte değil."
            ],
            "correctIndex": 1,
            "explanation": "TDK kurallarına göre küçük harfle başlayan bazı kısaltmaların sonuna nokta konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Kısaltmaların Sonu' kuralı doğru uygulanmıştır?",
            "options": [
              "Av. Selim Bey dosyayı mahkemeye sundu.",
              "Alb rütbesindeki subaylar törene katıldı.",
              "Prof Dr İlber Ortaylı yarın konferans verecek.",
              "Dr Kemal Bey bugün klinikte değil."
            ],
            "correctIndex": 0,
            "explanation": "TDK kurallarına göre küçük harfle başlayan bazı kısaltmaların sonuna nokta konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Alb rütbesindeki subaylar törene katıldı.",
              "Av. Selim Bey dosyayı mahkemeye sundu.",
              "Kitaptaki vb. kısaltmaların anlamları sözlükte var.",
              "Prof. Dr. İlber Ortaylı yarın konferans verecek."
            ],
            "correctIndex": 0,
            "explanation": "TDK kurallarına göre küçük harfle başlayan bazı kısaltmaların sonuna nokta konur."
          }
        ]
      },
      {
        "id": "nokta_r3",
        "title": "Sıra Bildiren Sayılar",
        "ruleText": "Sayılardan sonra sıra bildirmek için (-ıncı, -inci ekleri yerine) konur.",
        "examples": [
          "Sınavda 1. olan öğrenciye madalya verildi.",
          "Bu binanın 3. katında oturuyoruz.",
          "Cumhuriyetimizin 100. yılını coşkuyla kutladık.",
          "Koşuda 2. sırayı alarak gümüş madalya kazandı.",
          "Tarih dersinde II. Göktürk Devleti'ni işledik."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Sıra Bildiren Sayılar' kuralı doğru uygulanmıştır?",
            "options": [
              "Cumhuriyetimizin 100 yılını coşkuyla kutladık.",
              "Koşuda 2 sırayı alarak gümüş madalya kazandı.",
              "Sınavda 1. olan öğrenciye madalya verildi.",
              "Bu binanın 3 katında oturuyoruz."
            ],
            "correctIndex": 2,
            "explanation": "Sıra bildiren sayıların arkasına nokta yerleştirilerek '-inci/-üncü' eki anlamı verilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Bu binanın 3 katında oturuyoruz.",
              "Kitabın 15. sayfasındaki resmi inceledik.",
              "Koşuda 2. sırayı alarak gümüş madalya kazandı.",
              "Tarih dersinde II. Göktürk Devleti'ni işledik."
            ],
            "correctIndex": 0,
            "explanation": "Sıra bildiren sayıların arkasına nokta yerleştirilerek '-inci/-üncü' eki anlamı verilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Sıra Bildiren Sayılar' kuralı doğru uygulanmıştır?",
            "options": [
              "Cumhuriyetimizin 100. yılını coşkuyla kutladık.",
              "Kitabın 15 sayfasındaki resmi inceledik.",
              "Sınavda 1 olan öğrenciye madalya verildi.",
              "Bu binanın 3 katında oturuyoruz."
            ],
            "correctIndex": 0,
            "explanation": "Sıra bildiren sayıların arkasına nokta yerleştirilerek '-inci/-üncü' eki anlamı verilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Cumhuriyetimizin 100. yılını coşkuyla kutladık.",
              "Sınavda 1. olan öğrenciye madalya verildi.",
              "Koşuda 2 sırayı alarak gümüş madalya kazandı.",
              "Bu binanın 3. katında oturuyoruz."
            ],
            "correctIndex": 2,
            "explanation": "Sıra bildiren sayıların arkasına nokta yerleştirilerek '-inci/-üncü' eki anlamı verilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Sıra Bildiren Sayılar' kuralı doğru uygulanmıştır?",
            "options": [
              "Koşuda 2 sırayı alarak gümüş madalya kazandı.",
              "Sınavda 1 olan öğrenciye madalya verildi.",
              "Tarih dersinde II. Göktürk Devleti'ni işledik.",
              "Kitabın 15 sayfasındaki resmi inceledik."
            ],
            "correctIndex": 2,
            "explanation": "Sıra bildiren sayıların arkasına nokta yerleştirilerek '-inci/-üncü' eki anlamı verilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Kitabın 15 sayfasındaki resmi inceledik.",
              "Tarih dersinde II. Göktürk Devleti'ni işledik.",
              "Cumhuriyetimizin 100. yılını coşkuyla kutladık.",
              "Koşuda 2. sırayı alarak gümüş madalya kazandı."
            ],
            "correctIndex": 0,
            "explanation": "Sıra bildiren sayıların arkasına nokta yerleştirilerek '-inci/-üncü' eki anlamı verilir."
          }
        ]
      },
      {
        "id": "nokta_r4",
        "title": "Tarihlerin Yazılışı",
        "ruleText": "Tarihlerin yazılışında gün, ay ve yılı gösteren sayıları birbirinden ayırmak için konur.",
        "examples": [
          "Atatürk 19.05.1919 tarihinde Samsun'a ayak bastı.",
          "Kardeşim 25.12.2015 tarihinde dünyaya geldi.",
          "Okullar bu yıl 12.09.2026 tarihinde açılacak.",
          "Sınav sonuçları 15.06.2026 günü açıklanacak.",
          "Cumhuriyetimiz 29.10.1923 yılında ilan edildi."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Tarihlerin Yazılışı' kuralı doğru uygulanmıştır?",
            "options": [
              "Sınav sonuçları 15;06;2026 günü açıklanacak.",
              "Okullar bu yıl 12-09-2026 tarihinde açılacak.",
              "Atatürk 19.05.1919 tarihinde Samsun'a ayak bastı.",
              "Kardeşim 25:12:2015 tarihinde dünyaya geldi."
            ],
            "correctIndex": 2,
            "explanation": "Tarihlerin arasına sadece nokta (.) veya eğik çizgi (/) konabilir; virgül veya iki nokta konamaz."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Kardeşim 25:12:2015 tarihinde dünyaya geldi.",
              "Sınav sonuçları 15.06.2026 günü açıklanacak.",
              "Okullar bu yıl 12.09.2026 tarihinde açılacak.",
              "Atatürk 19.05.1919 tarihinde Samsun'a ayak bastı."
            ],
            "correctIndex": 0,
            "explanation": "Tarihlerin arasına sadece nokta (.) veya eğik çizgi (/) konabilir; virgül veya iki nokta konamaz."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Tarihlerin Yazılışı' kuralı doğru uygulanmıştır?",
            "options": [
              "Okullar bu yıl 12.09.2026 tarihinde açılacak.",
              "Toplantıyı 05:08:2026 tarihine ertelediler.",
              "Atatürk 19,05,1919 tarihinde Samsun'a ayak bastı.",
              "Kardeşim 25:12:2015 tarihinde dünyaya geldi."
            ],
            "correctIndex": 0,
            "explanation": "Tarihlerin arasına sadece nokta (.) veya eğik çizgi (/) konabilir; virgül veya iki nokta konamaz."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Toplantıyı 05.08.2026 tarihine ertelediler.",
              "Cumhuriyetimiz 29.10.1923 yılında ilan edildi.",
              "Okullar bu yıl 12.09.2026 tarihinde açılacak.",
              "Sınav sonuçları 15;06;2026 günü açıklanacak."
            ],
            "correctIndex": 3,
            "explanation": "Tarihlerin arasına sadece nokta (.) veya eğik çizgi (/) konabilir; virgül veya iki nokta konamaz."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Tarihlerin Yazılışı' kuralı doğru uygulanmıştır?",
            "options": [
              "Sınav sonuçları 15;06;2026 günü açıklanacak.",
              "Toplantıyı 05:08:2026 tarihine ertelediler.",
              "Cumhuriyetimiz 29.10.1923 yılında ilan edildi.",
              "Okullar bu yıl 12-09-2026 tarihinde açılacak."
            ],
            "correctIndex": 2,
            "explanation": "Tarihlerin arasına sadece nokta (.) veya eğik çizgi (/) konabilir; virgül veya iki nokta konamaz."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Cumhuriyetimiz 29.10.1923 yılında ilan edildi.",
              "Sınav sonuçları 15.06.2026 günü açıklanacak.",
              "Kardeşim 25.12.2015 tarihinde dünyaya geldi.",
              "Toplantıyı 05:08:2026 tarihine ertelediler."
            ],
            "correctIndex": 3,
            "explanation": "Tarihlerin arasına sadece nokta (.) veya eğik çizgi (/) konabilir; virgül veya iki nokta konamaz."
          }
        ]
      },
      {
        "id": "nokta_r5",
        "title": "Saat ve Dakika",
        "ruleText": "Saat ve dakika gösteren sayıları birbirinden ayırmak için konur.",
        "examples": [
          "Dersimiz sabah tam 08.30'da başlıyor.",
          "Uçağımız akşam 21.45'te kalkacaktır.",
          "Sınav 10.15'te başlayıp iki saat sürecek.",
          "Otobüsümüz saat 14.00'te hareket edecek.",
          "Öğle yemeği arası 12.30'da başlıyor."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Saat ve Dakika' kuralı doğru uygulanmıştır?",
            "options": [
              "Otobüsümüz saat 14:00'te hareket edecek.",
              "Yarın sabah 07:15'te garda buluşalım.",
              "Sınav 10:15'te başlayıp iki saat sürecek.",
              "Dersimiz sabah tam 08.30'da başlıyor."
            ],
            "correctIndex": 3,
            "explanation": "Yaygın bir hata olarak dijital saatlerde iki nokta kullanılsa da, TDK'ye göre saat ve dakikanın arasına yalnızca nokta konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Yarın sabah 07.15'te garda buluşalım.",
              "Dersimiz sabah tam 08.30'da başlıyor.",
              "Uçağımız akşam 21:45'te kalkacaktır.",
              "Sınav 10.15'te başlayıp iki saat sürecek."
            ],
            "correctIndex": 2,
            "explanation": "Yaygın bir hata olarak dijital saatlerde iki nokta kullanılsa da, TDK'ye göre saat ve dakikanın arasına yalnızca nokta konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Saat ve Dakika' kuralı doğru uygulanmıştır?",
            "options": [
              "Otobüsümüz saat 14:00'te hareket edecek.",
              "Yarın sabah 07:15'te garda buluşalım.",
              "Uçağımız akşam 21:45'te kalkacaktır.",
              "Sınav 10.15'te başlayıp iki saat sürecek."
            ],
            "correctIndex": 3,
            "explanation": "Yaygın bir hata olarak dijital saatlerde iki nokta kullanılsa da, TDK'ye göre saat ve dakikanın arasına yalnızca nokta konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Dersimiz sabah tam 08.30'da başlıyor.",
              "Otobüsümüz saat 14:00'te hareket edecek.",
              "Uçağımız akşam 21.45'te kalkacaktır.",
              "Sınav 10.15'te başlayıp iki saat sürecek."
            ],
            "correctIndex": 1,
            "explanation": "Yaygın bir hata olarak dijital saatlerde iki nokta kullanılsa da, TDK'ye göre saat ve dakikanın arasına yalnızca nokta konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Saat ve Dakika' kuralı doğru uygulanmıştır?",
            "options": [
              "Otobüsümüz saat 14:00'te hareket edecek.",
              "Yarın sabah 07:15'te garda buluşalım.",
              "Öğle yemeği arası 12.30'da başlıyor.",
              "Dersimiz sabah tam 08:30'da başlıyor."
            ],
            "correctIndex": 2,
            "explanation": "Yaygın bir hata olarak dijital saatlerde iki nokta kullanılsa da, TDK'ye göre saat ve dakikanın arasına yalnızca nokta konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Öğle yemeği arası 12.30'da başlıyor.",
              "Uçağımız akşam 21.45'te kalkacaktır.",
              "Yarın sabah 07:15'te garda buluşalım.",
              "Otobüsümüz saat 14.00'te hareket edecek."
            ],
            "correctIndex": 2,
            "explanation": "Yaygın bir hata olarak dijital saatlerde iki nokta kullanılsa da, TDK'ye göre saat ve dakikanın arasına yalnızca nokta konur."
          }
        ]
      },
      {
        "id": "nokta_r6",
        "title": "Bibliyografik Künyeler",
        "ruleText": "Kitap, dergi vb.nin künyelerinin sonuna konur.",
        "examples": [
          "Seyfettin, Ömer, Kaşağı, Timaş Yayınları, İstanbul, 2020.",
          "Abasıyanık, Sait Faik, Semaver, Bilgi Yayınevi, Ankara, 1998.",
          "Güntekin, Reşat Nuri, Çalıkuşu, İnkılap Kitabevi, İstanbul, 2012.",
          "Karaosmanoğlu, Yakup Kadri, Yaban, İletişim Yayınları, İstanbul, 2005.",
          "Ataç, Nurullah, Günlerin Getirdiği, Can Yayınları, İstanbul, 2002."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Bibliyografik Künyeler' kuralı doğru uygulanmıştır?",
            "options": [
              "Seyfettin, Ömer, Kaşağı, Timaş Yayınları, İstanbul, 2020.",
              "Tanpınar, Ahmet Hamdi, Huzur, Dergah Yayınları, İstanbul, 1999;",
              "Karaosmanoğlu, Yakup Kadri, Yaban, İletişim Yayınları, İstanbul, 2005;",
              "Ataç, Nurullah, Günlerin Getirdiği, Can Yayınları, İstanbul, 2002,"
            ],
            "correctIndex": 0,
            "explanation": "Bibliyografik künyelerin en sonuna nokta yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Güntekin, Reşat Nuri, Çalıkuşu, İnkılap Kitabevi, İstanbul, 2012.",
              "Tanpınar, Ahmet Hamdi, Huzur, Dergah Yayınları, İstanbul, 1999.",
              "Seyfettin, Ömer, Kaşağı, Timaş Yayınları, İstanbul, 2020.",
              "Abasıyanık, Sait Faik, Semaver, Bilgi Yayınevi, Ankara, 1998;"
            ],
            "correctIndex": 3,
            "explanation": "Bibliyografik künyelerin en sonuna nokta yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Bibliyografik Künyeler' kuralı doğru uygulanmıştır?",
            "options": [
              "Karaosmanoğlu, Yakup Kadri, Yaban, İletişim Yayınları, İstanbul, 2005;",
              "Abasıyanık, Sait Faik, Semaver, Bilgi Yayınevi, Ankara, 1998;",
              "Güntekin, Reşat Nuri, Çalıkuşu, İnkılap Kitabevi, İstanbul, 2012.",
              "Tanpınar, Ahmet Hamdi, Huzur, Dergah Yayınları, İstanbul, 1999;"
            ],
            "correctIndex": 2,
            "explanation": "Bibliyografik künyelerin en sonuna nokta yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Abasıyanık, Sait Faik, Semaver, Bilgi Yayınevi, Ankara, 1998.",
              "Tanpınar, Ahmet Hamdi, Huzur, Dergah Yayınları, İstanbul, 1999.",
              "Seyfettin, Ömer, Kaşağı, Timaş Yayınları, İstanbul, 2020.",
              "Karaosmanoğlu, Yakup Kadri, Yaban, İletişim Yayınları, İstanbul, 2005;"
            ],
            "correctIndex": 3,
            "explanation": "Bibliyografik künyelerin en sonuna nokta yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Bibliyografik Künyeler' kuralı doğru uygulanmıştır?",
            "options": [
              "Tanpınar, Ahmet Hamdi, Huzur, Dergah Yayınları, İstanbul, 1999;",
              "Abasıyanık, Sait Faik, Semaver, Bilgi Yayınevi, Ankara, 1998;",
              "Ataç, Nurullah, Günlerin Getirdiği, Can Yayınları, İstanbul, 2002.",
              "Karaosmanoğlu, Yakup Kadri, Yaban, İletişim Yayınları, İstanbul, 2005;"
            ],
            "correctIndex": 2,
            "explanation": "Bibliyografik künyelerin en sonuna nokta yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Karaosmanoğlu, Yakup Kadri, Yaban, İletişim Yayınları, İstanbul, 2005.",
              "Tanpınar, Ahmet Hamdi, Huzur, Dergah Yayınları, İstanbul, 1999;",
              "Ataç, Nurullah, Günlerin Getirdiği, Can Yayınları, İstanbul, 2002.",
              "Seyfettin, Ömer, Kaşağı, Timaş Yayınları, İstanbul, 2020."
            ],
            "correctIndex": 1,
            "explanation": "Bibliyografik künyelerin en sonuna nokta yerleştirilir."
          }
        ]
      },
      {
        "id": "nokta_r7",
        "title": "Büyük Sayıların Gruplanması",
        "ruleText": "Dört ve dörtten çok rakamlı sayılar sondan sayılmak üzere üçlü gruplara ayrılarak yazılır ve araya nokta konur.",
        "examples": [
          "Şehrin nüfusu son sayımda 1.250.000 kişiye ulaştı.",
          "Yeni kütüphanemizde toplam 45.200 adet kitap bulunuyor.",
          "Bu araba için 780.500 lira ödeme yaptı.",
          "Fabrikamız bu ay tam 12.350 adet ürün üretti.",
          "Dünyanın güneşe olan uzaklığı yaklaşık 149.600.000 km'dir."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Büyük Sayıların Gruplanması' kuralı doğru uygulanmıştır?",
            "options": [
              "Şehrin nüfusu son sayımda 1.250.000 kişiye ulaştı.",
              "Şirket bu yıl 3,450,000 lira kâr elde etti.",
              "Yeni kütüphanemizde toplam 45,200 adet kitap bulunuyor.",
              "Fabrikamız bu ay tam 12,350 adet ürün üretti."
            ],
            "correctIndex": 0,
            "explanation": "Büyük sayıların okunmasını kolaylaştırmak için üçlü basamak gruplarının arasına nokta konur; virgül ise sadece ondalık kesirler için kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Dünyanın güneşe olan uzaklığı yaklaşık 149.600.000 km'dir.",
              "Fabrikamız bu ay tam 12.350 adet ürün üretti.",
              "Şirket bu yıl 3.450.000 lira kâr elde etti.",
              "Yeni kütüphanemizde toplam 45,200 adet kitap bulunuyor."
            ],
            "correctIndex": 3,
            "explanation": "Büyük sayıların okunmasını kolaylaştırmak için üçlü basamak gruplarının arasına nokta konur; virgül ise sadece ondalık kesirler için kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Büyük Sayıların Gruplanması' kuralı doğru uygulanmıştır?",
            "options": [
              "Şehrin nüfusu son sayımda 1,250,000 kişiye ulaştı.",
              "Fabrikamız bu ay tam 12,350 adet ürün üretti.",
              "Bu araba için 780.500 lira ödeme yaptı.",
              "Dünyanın güneşe olan uzaklığı yaklaşık 149,600,000 km'dir."
            ],
            "correctIndex": 2,
            "explanation": "Büyük sayıların okunmasını kolaylaştırmak için üçlü basamak gruplarının arasına nokta konur; virgül ise sadece ondalık kesirler için kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Şirket bu yıl 3.450.000 lira kâr elde etti.",
              "Yeni kütüphanemizde toplam 45.200 adet kitap bulunuyor.",
              "Fabrikamız bu ay tam 12,350 adet ürün üretti.",
              "Bu araba için 780.500 lira ödeme yaptı."
            ],
            "correctIndex": 2,
            "explanation": "Büyük sayıların okunmasını kolaylaştırmak için üçlü basamak gruplarının arasına nokta konur; virgül ise sadece ondalık kesirler için kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Büyük Sayıların Gruplanması' kuralı doğru uygulanmıştır?",
            "options": [
              "Bu araba için 780,500 lira ödeme yaptı.",
              "Şirket bu yıl 3,450,000 lira kâr elde etti.",
              "Dünyanın güneşe olan uzaklığı yaklaşık 149.600.000 km'dir.",
              "Yeni kütüphanemizde toplam 45,200 adet kitap bulunuyor."
            ],
            "correctIndex": 2,
            "explanation": "Büyük sayıların okunmasını kolaylaştırmak için üçlü basamak gruplarının arasına nokta konur; virgül ise sadece ondalık kesirler için kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Dünyanın güneşe olan uzaklığı yaklaşık 149.600.000 km'dir.",
              "Şehrin nüfusu son sayımda 1.250.000 kişiye ulaştı.",
              "Fabrikamız bu ay tam 12.350 adet ürün üretti.",
              "Şirket bu yıl 3,450,000 lira kâr elde etti."
            ],
            "correctIndex": 3,
            "explanation": "Büyük sayıların okunmasını kolaylaştırmak için üçlü basamak gruplarının arasına nokta konur; virgül ise sadece ondalık kesirler için kullanılır."
          }
        ]
      },
      {
        "id": "nokta_r8",
        "title": "Genel Ağ Adresleri",
        "ruleText": "Genel Ağ (İnternet) adreslerinde kullanılır.",
        "examples": [
          "Araştırmalarımı yapmak için tdk.gov.tr adresine girdim.",
          "E-devlet hizmetlerine turkiye.gov.tr üzerinden erişiliyor.",
          "Ödevlerimizi eba.gov.tr sitesinden takip ediyoruz.",
          "Derneğin resmi sitesi olan kızılay.org.tr güncellenmiş.",
          "Bilgilere google.com üzerinden hızlıca ulaştım."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Genel Ağ Adresleri' kuralı doğru uygulanmıştır?",
            "options": [
              "Bilgilere google,com üzerinden hızlıca ulaştım.",
              "Ödevlerimizi eba;gov;tr sitesinden takip ediyoruz.",
              "Araştırmalarımı yapmak için tdk.gov.tr adresine girdim.",
              "Ders videolarını youtube:com adresinden izledik."
            ],
            "correctIndex": 2,
            "explanation": "İnternet alan adlarının uzantılarını ve bölümlerini ayırmak için nokta kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Bilgilere google.com üzerinden hızlıca ulaştım.",
              "Ödevlerimizi eba.gov.tr sitesinden takip ediyoruz.",
              "Araştırmalarımı yapmak için tdk.gov.tr adresine girdim.",
              "E-devlet hizmetlerine turkiye:gov:tr üzerinden erişiliyor."
            ],
            "correctIndex": 3,
            "explanation": "İnternet alan adlarının uzantılarını ve bölümlerini ayırmak için nokta kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Genel Ağ Adresleri' kuralı doğru uygulanmıştır?",
            "options": [
              "Bilgilere google,com üzerinden hızlıca ulaştım.",
              "Derneğin resmi sitesi olan kızılay/org/tr güncellenmiş.",
              "Ödevlerimizi eba.gov.tr sitesinden takip ediyoruz.",
              "E-devlet hizmetlerine turkiye:gov:tr üzerinden erişiliyor."
            ],
            "correctIndex": 2,
            "explanation": "İnternet alan adlarının uzantılarını ve bölümlerini ayırmak için nokta kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Araştırmalarımı yapmak için tdk.gov.tr adresine girdim.",
              "Ödevlerimizi eba.gov.tr sitesinden takip ediyoruz.",
              "E-devlet hizmetlerine turkiye.gov.tr üzerinden erişiliyor.",
              "Derneğin resmi sitesi olan kızılay/org/tr güncellenmiş."
            ],
            "correctIndex": 3,
            "explanation": "İnternet alan adlarının uzantılarını ve bölümlerini ayırmak için nokta kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Genel Ağ Adresleri' kuralı doğru uygulanmıştır?",
            "options": [
              "Araştırmalarımı yapmak için tdk,gov,tr adresine girdim.",
              "Bilgilere google.com üzerinden hızlıca ulaştım.",
              "Ders videolarını youtube:com adresinden izledik.",
              "Ödevlerimizi eba;gov;tr sitesinden takip ediyoruz."
            ],
            "correctIndex": 1,
            "explanation": "İnternet alan adlarının uzantılarını ve bölümlerini ayırmak için nokta kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Araştırmalarımı yapmak için tdk.gov.tr adresine girdim.",
              "Derneğin resmi sitesi olan kızılay.org.tr güncellenmiş.",
              "Bilgilere google.com üzerinden hızlıca ulaştım.",
              "Ders videolarını youtube:com adresinden izledik."
            ],
            "correctIndex": 3,
            "explanation": "İnternet alan adlarının uzantılarını ve bölümlerini ayırmak için nokta kullanılır."
          }
        ]
      },
      {
        "id": "nokta_r9",
        "title": "Çarpma İşareti",
        "ruleText": "Matematikte çarpma işareti yerine kullanılır.",
        "examples": [
          "Öğretmen tahtaya 4.5 = 20 işlemini yazdı.",
          "Üçgenin alanı taban x yükseklik / 2 yani 6.8/2'dir.",
          "Matematik sınavındaki 3.12 sorusunu kolayca çözdüm.",
          "Haftalık çalışma saatimizi 5.8 = 40 olarak hesapladık.",
          "Bu kare matrisin alan hesabı 2.2 = 4 birimdir."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Çarpma İşareti' kuralı doğru uygulanmıştır?",
            "options": [
              "Üçgenin alanı taban x yükseklik / 2 yani 6,8/2'dir.",
              "Öğretmen tahtaya 4.5 = 20 işlemini yazdı.",
              "Bu kare matrisin alan hesabı 2,2 = 4 birimdir.",
              "Matematik sınavındaki 3,12 sorusunu kolayca çözdüm."
            ],
            "correctIndex": 1,
            "explanation": "Matematiksel işlemlerde nokta çarpma işareti görevi görür. Virgül konursa bu ondalık sayı anlamına gelir (örn: 4,5 dört buçuk demektir)."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Matematik sınavındaki 3.12 sorusunu kolayca çözdüm.",
              "Üçgenin alanı taban x yükseklik / 2 yani 6,8/2'dir.",
              "Soruda verilen 7.9 işleminin sonucu 63'tür.",
              "Öğretmen tahtaya 4.5 = 20 işlemini yazdı."
            ],
            "correctIndex": 1,
            "explanation": "Matematiksel işlemlerde nokta çarpma işareti görevi görür. Virgül konursa bu ondalık sayı anlamına gelir (örn: 4,5 dört buçuk demektir)."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Çarpma İşareti' kuralı doğru uygulanmıştır?",
            "options": [
              "Üçgenin alanı taban x yükseklik / 2 yani 6,8/2'dir.",
              "Haftalık çalışma saatimizi 5,8 = 40 olarak hesapladık.",
              "Matematik sınavındaki 3.12 sorusunu kolayca çözdüm.",
              "Bu kare matrisin alan hesabı 2,2 = 4 birimdir."
            ],
            "correctIndex": 2,
            "explanation": "Matematiksel işlemlerde nokta çarpma işareti görevi görür. Virgül konursa bu ondalık sayı anlamına gelir (örn: 4,5 dört buçuk demektir)."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Matematik sınavındaki 3.12 sorusunu kolayca çözdüm.",
              "Öğretmen tahtaya 4.5 = 20 işlemini yazdı.",
              "Bu kare matrisin alan hesabı 2.2 = 4 birimdir.",
              "Haftalık çalışma saatimizi 5,8 = 40 olarak hesapladık."
            ],
            "correctIndex": 3,
            "explanation": "Matematiksel işlemlerde nokta çarpma işareti görevi görür. Virgül konursa bu ondalık sayı anlamına gelir (örn: 4,5 dört buçuk demektir)."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Çarpma İşareti' kuralı doğru uygulanmıştır?",
            "options": [
              "Matematik sınavındaki 3,12 sorusunu kolayca çözdüm.",
              "Öğretmen tahtaya 4,5 = 20 işlemini yazdı.",
              "Bu kare matrisin alan hesabı 2.2 = 4 birimdir.",
              "Üçgenin alanı taban x yükseklik / 2 yani 6,8/2'dir."
            ],
            "correctIndex": 2,
            "explanation": "Matematiksel işlemlerde nokta çarpma işareti görevi görür. Virgül konursa bu ondalık sayı anlamına gelir (örn: 4,5 dört buçuk demektir)."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Haftalık çalışma saatimizi 5.8 = 40 olarak hesapladık.",
              "Öğretmen tahtaya 4.5 = 20 işlemini yazdı.",
              "Soruda verilen 7,9 işleminin sonucu 63'tür.",
              "Üçgenin alanı taban x yükseklik / 2 yani 6.8/2'dir."
            ],
            "correctIndex": 2,
            "explanation": "Matematiksel işlemlerde nokta çarpma işareti görevi görür. Virgül konursa bu ondalık sayı anlamına gelir (örn: 4,5 dört buçuk demektir)."
          }
        ]
      }
    ]
  },
  {
    "id": "virgul",
    "symbol": ",",
    "name": "Virgül",
    "color": "#3b82f6",
    "description": "Cümle içinde eş görevli kelimeleri, sıralı cümleleri veya vurgulanmak istenen ögeleri ayırmak için kullanılan çok yönlü imla işareti.",
    "rules": [
      {
        "id": "virgul_r1",
        "title": "Eş Görevli Sözcükler",
        "ruleText": "Birbiri ardınca sıralanan eş görevli kelime ve kelime gruplarının arasına konur.",
        "examples": [
          "Pazardan elma, armut, muz ve çilek aldık.",
          "Sakin, huzurlu, yeşillikler içinde bir köye yerleşti.",
          "Fırtınada defterleri, kitapları, kalemleri etrafa saçıldı.",
          "Çalışkan, dürüst ve saygılı bir insan olarak bilinirdi.",
          "Bahçede güller, laleler, karanfiller mis gibi kokuyordu."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Eş Görevli Sözcükler' kuralı doğru uygulanmıştır?",
            "options": [
              "Bahçede güller laleler karanfiller mis gibi kokuyordu.",
              "Kırmızı mavi sarı renkli balonlar havada uçuştu.",
              "Çalışkan dürüst ve saygılı bir insan olarak bilinirdi.",
              "Pazardan elma, armut, muz ve çilek aldık."
            ],
            "correctIndex": 3,
            "explanation": "Cümle içinde peş peşe gelen eş görevli kelimeleri (adlar, sıfatlar, nesneler vb.) ayırmak için aralarına virgül konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Pazardan elma, armut, muz ve çilek aldık.",
              "Fırtınada defterleri, kitapları, kalemleri etrafa saçıldı.",
              "Bahçede güller, laleler, karanfiller mis gibi kokuyordu.",
              "Sakin huzurlu yeşillikler içinde bir köye yerleşti."
            ],
            "correctIndex": 3,
            "explanation": "Cümle içinde peş peşe gelen eş görevli kelimeleri (adlar, sıfatlar, nesneler vb.) ayırmak için aralarına virgül konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Eş Görevli Sözcükler' kuralı doğru uygulanmıştır?",
            "options": [
              "Fırtınada defterleri, kitapları, kalemleri etrafa saçıldı.",
              "Bahçede güller laleler karanfiller mis gibi kokuyordu.",
              "Kırmızı mavi sarı renkli balonlar havada uçuştu.",
              "Çalışkan dürüst ve saygılı bir insan olarak bilinirdi."
            ],
            "correctIndex": 0,
            "explanation": "Cümle içinde peş peşe gelen eş görevli kelimeleri (adlar, sıfatlar, nesneler vb.) ayırmak için aralarına virgül konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Fırtınada defterleri, kitapları, kalemleri etrafa saçıldı.",
              "Çalışkan dürüst ve saygılı bir insan olarak bilinirdi.",
              "Sakin, huzurlu, yeşillikler içinde bir köye yerleşti.",
              "Bahçede güller, laleler, karanfiller mis gibi kokuyordu."
            ],
            "correctIndex": 1,
            "explanation": "Cümle içinde peş peşe gelen eş görevli kelimeleri (adlar, sıfatlar, nesneler vb.) ayırmak için aralarına virgül konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Eş Görevli Sözcükler' kuralı doğru uygulanmıştır?",
            "options": [
              "Çalışkan dürüst ve saygılı bir insan olarak bilinirdi.",
              "Pazardan elma armut muz ve çilek aldık.",
              "Sakin huzurlu yeşillikler içinde bir köye yerleşti.",
              "Bahçede güller, laleler, karanfiller mis gibi kokuyordu."
            ],
            "correctIndex": 3,
            "explanation": "Cümle içinde peş peşe gelen eş görevli kelimeleri (adlar, sıfatlar, nesneler vb.) ayırmak için aralarına virgül konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Kırmızı mavi sarı renkli balonlar havada uçuştu.",
              "Sakin, huzurlu, yeşillikler içinde bir köye yerleşti.",
              "Fırtınada defterleri, kitapları, kalemleri etrafa saçıldı.",
              "Pazardan elma, armut, muz ve çilek aldık."
            ],
            "correctIndex": 0,
            "explanation": "Cümle içinde peş peşe gelen eş görevli kelimeleri (adlar, sıfatlar, nesneler vb.) ayırmak için aralarına virgül konur."
          }
        ]
      },
      {
        "id": "virgul_r2",
        "title": "Sıralı Cümleler",
        "ruleText": "Sıralı cümleleri birbirinden ayırmak için konur.",
        "examples": [
          "Erkenden uyandı, elini yüzünü yıkadı, kahvaltı yaptı.",
          "Kitabını açtı, ilk sayfayı okumaya başladı.",
          "Kapıyı çaldı, bekledi, içeriden bir ses gelmeyince gitti.",
          "Yaz geldi, havalar ısındı, herkes tatile çıktı.",
          "Eve geldi, çantasını bıraktı, hemen dinlenmeye çekildi."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Sıralı Cümleler' kuralı doğru uygulanmıştır?",
            "options": [
              "Rüzgar esti yapraklar döküldü sonbahar kendini hissettirdi.",
              "Eve geldi çantasını bıraktı hemen dinlenmeye çekildi.",
              "Kitabını açtı ilk sayfayı okumaya başladı.",
              "Erkenden uyandı, elini yüzünü yıkadı, kahvaltı yaptı."
            ],
            "correctIndex": 3,
            "explanation": "Birden çok yüklemi olan sıralı cümleleri bağlaç kullanmadan birbirine bağlamak için aralarına virgül konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Erkenden uyandı, elini yüzünü yıkadı, kahvaltı yaptı.",
              "Kitabını açtı ilk sayfayı okumaya başladı.",
              "Kapıyı çaldı, bekledi, içeriden bir ses gelmeyince gitti.",
              "Rüzgar esti, yapraklar döküldü, sonbahar kendini hissettirdi."
            ],
            "correctIndex": 1,
            "explanation": "Birden çok yüklemi olan sıralı cümleleri bağlaç kullanmadan birbirine bağlamak için aralarına virgül konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Sıralı Cümleler' kuralı doğru uygulanmıştır?",
            "options": [
              "Yaz geldi havalar ısındı herkes tatile çıktı.",
              "Kitabını açtı ilk sayfayı okumaya başladı.",
              "Erkenden uyandı elini yüzünü yıkadı kahvaltı yaptı.",
              "Kapıyı çaldı, bekledi, içeriden bir ses gelmeyince gitti."
            ],
            "correctIndex": 3,
            "explanation": "Birden çok yüklemi olan sıralı cümleleri bağlaç kullanmadan birbirine bağlamak için aralarına virgül konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Kitabını açtı, ilk sayfayı okumaya başladı.",
              "Yaz geldi havalar ısındı herkes tatile çıktı.",
              "Erkenden uyandı, elini yüzünü yıkadı, kahvaltı yaptı.",
              "Rüzgar esti, yapraklar döküldü, sonbahar kendini hissettirdi."
            ],
            "correctIndex": 1,
            "explanation": "Birden çok yüklemi olan sıralı cümleleri bağlaç kullanmadan birbirine bağlamak için aralarına virgül konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Sıralı Cümleler' kuralı doğru uygulanmıştır?",
            "options": [
              "Kitabını açtı ilk sayfayı okumaya başladı.",
              "Rüzgar esti yapraklar döküldü sonbahar kendini hissettirdi.",
              "Eve geldi, çantasını bıraktı, hemen dinlenmeye çekildi.",
              "Erkenden uyandı elini yüzünü yıkadı kahvaltı yaptı."
            ],
            "correctIndex": 2,
            "explanation": "Birden çok yüklemi olan sıralı cümleleri bağlaç kullanmadan birbirine bağlamak için aralarına virgül konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Yaz geldi, havalar ısındı, herkes tatile çıktı.",
              "Rüzgar esti yapraklar döküldü sonbahar kendini hissettirdi.",
              "Eve geldi, çantasını bıraktı, hemen dinlenmeye çekildi.",
              "Kapıyı çaldı, bekledi, içeriden bir ses gelmeyince gitti."
            ],
            "correctIndex": 1,
            "explanation": "Birden çok yüklemi olan sıralı cümleleri bağlaç kullanmadan birbirine bağlamak için aralarına virgül konur."
          }
        ]
      },
      {
        "id": "virgul_r3",
        "title": "Özneyi Belirtme",
        "ruleText": "Uzun cümlelerde yüklemden uzak düşmüş olan özneyi belirtmek için konur.",
        "examples": [
          "Yaşlı adam, yavaş adımlarla parktaki banka doğru ilerledi.",
          "Genç yazar, romanının son bölümünü yazmak için odasına çekildi.",
          "Küçük kız, kaybettiği bebeğini bulmak için her yeri arıyordu.",
          "Yeni müdür, işe başlar başlamaz bütün dosyaları tek tek inceledi.",
          "Başarılı sporcu, olimpiyatlarda altın madalya almak için yemin etti."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Özneyi Belirtme' kuralı doğru uygulanmıştır?",
            "options": [
              "Genç yazar romanının son bölümünü yazmak için odasına çekildi.",
              "Başarılı sporcu olimpiyatlarda altın madalya almak için yemin etti.",
              "Yaşlı adam, yavaş adımlarla parktaki banka doğru ilerledi.",
              "Tarihçi arşivlerdeki eski belgeleri büyük bir dikkatle okuyordu."
            ],
            "correctIndex": 2,
            "explanation": "Özneden sonra virgül konularak cümlenin ana ögesinin kim olduğu vurgulanır ve okuma kolaylığı sağlanır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Küçük kız, kaybettiği bebeğini bulmak için her yeri arıyordu.",
              "Yeni müdür, işe başlar başlamaz bütün dosyaları tek tek inceledi.",
              "Genç yazar romanının son bölümünü yazmak için odasına çekildi.",
              "Başarılı sporcu, olimpiyatlarda altın madalya almak için yemin etti."
            ],
            "correctIndex": 2,
            "explanation": "Özneden sonra virgül konularak cümlenin ana ögesinin kim olduğu vurgulanır ve okuma kolaylığı sağlanır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Özneyi Belirtme' kuralı doğru uygulanmıştır?",
            "options": [
              "Tarihçi arşivlerdeki eski belgeleri büyük bir dikkatle okuyordu.",
              "Genç yazar romanının son bölümünü yazmak için odasına çekildi.",
              "Küçük kız, kaybettiği bebeğini bulmak için her yeri arıyordu.",
              "Başarılı sporcu olimpiyatlarda altın madalya almak için yemin etti."
            ],
            "correctIndex": 2,
            "explanation": "Özneden sonra virgül konularak cümlenin ana ögesinin kim olduğu vurgulanır ve okuma kolaylığı sağlanır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Küçük kız, kaybettiği bebeğini bulmak için her yeri arıyordu.",
              "Tarihçi, arşivlerdeki eski belgeleri büyük bir dikkatle okuyordu.",
              "Yeni müdür işe başlar başlamaz bütün dosyaları tek tek inceledi.",
              "Başarılı sporcu, olimpiyatlarda altın madalya almak için yemin etti."
            ],
            "correctIndex": 2,
            "explanation": "Özneden sonra virgül konularak cümlenin ana ögesinin kim olduğu vurgulanır ve okuma kolaylığı sağlanır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Özneyi Belirtme' kuralı doğru uygulanmıştır?",
            "options": [
              "Küçük kız kaybettiği bebeğini bulmak için her yeri arıyordu.",
              "Tarihçi arşivlerdeki eski belgeleri büyük bir dikkatle okuyordu.",
              "Başarılı sporcu, olimpiyatlarda altın madalya almak için yemin etti.",
              "Genç yazar romanının son bölümünü yazmak için odasına çekildi."
            ],
            "correctIndex": 2,
            "explanation": "Özneden sonra virgül konularak cümlenin ana ögesinin kim olduğu vurgulanır ve okuma kolaylığı sağlanır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Genç yazar, romanının son bölümünü yazmak için odasına çekildi.",
              "Tarihçi arşivlerdeki eski belgeleri büyük bir dikkatle okuyordu.",
              "Başarılı sporcu, olimpiyatlarda altın madalya almak için yemin etti.",
              "Yeni müdür, işe başlar başlamaz bütün dosyaları tek tek inceledi."
            ],
            "correctIndex": 1,
            "explanation": "Özneden sonra virgül konularak cümlenin ana ögesinin kim olduğu vurgulanır ve okuma kolaylığı sağlanır."
          }
        ]
      },
      {
        "id": "virgul_r4",
        "title": "Ara Sözleri Ayırma",
        "ruleText": "Cümle içinde ara sözleri veya ara cümleleri ayırmak için ara sözlerin veya ara cümlelerin başına ve sonuna konur.",
        "examples": [
          "Doğup büyüdüğüm şehri, İzmir'i, çok özledim.",
          "En yakın arkadaşım, sınıf temsilcimiz, bugün okula gelmedi.",
          "Geçen hafta aldığım kitabı, o çok övülen romanı, nihayet bitirdim.",
          "Komşumuz, o sevimli yaşlı teyze, bize kurabiye getirdi.",
          "Sonunda hayalindeki eve, deniz kenarındaki o villaya, kavuştu."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Ara Sözleri Ayırma' kuralı doğru uygulanmıştır?",
            "options": [
              "Matematik öğretmenimiz okulun en tecrübelisi yarın emekli oluyor.",
              "Sonunda hayalindeki eve deniz kenarındaki o villaya kavuştu.",
              "Geçen hafta aldığım kitabı o çok övülen romanı nihayet bitirdim.",
              "Doğup büyüdüğüm şehri, İzmir'i, çok özledim."
            ],
            "correctIndex": 3,
            "explanation": "Cümledeki ara sözlerin hem başına hem de sonuna virgül (ya da kısa çizgi) yerleştirilmesi kuraldır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Geçen hafta aldığım kitabı, o çok övülen romanı, nihayet bitirdim.",
              "Doğup büyüdüğüm şehri, İzmir'i, çok özledim.",
              "En yakın arkadaşım sınıf temsilcimiz bugün okula gelmedi.",
              "Sonunda hayalindeki eve, deniz kenarındaki o villaya, kavuştu."
            ],
            "correctIndex": 2,
            "explanation": "Cümledeki ara sözlerin hem başına hem de sonuna virgül (ya da kısa çizgi) yerleştirilmesi kuraldır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Ara Sözleri Ayırma' kuralı doğru uygulanmıştır?",
            "options": [
              "Sonunda hayalindeki eve deniz kenarındaki o villaya kavuştu.",
              "Matematik öğretmenimiz okulun en tecrübelisi yarın emekli oluyor.",
              "Komşumuz o sevimli yaşlı teyze bize kurabiye getirdi.",
              "Geçen hafta aldığım kitabı, o çok övülen romanı, nihayet bitirdim."
            ],
            "correctIndex": 3,
            "explanation": "Cümledeki ara sözlerin hem başına hem de sonuna virgül (ya da kısa çizgi) yerleştirilmesi kuraldır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Komşumuz o sevimli yaşlı teyze bize kurabiye getirdi.",
              "Geçen hafta aldığım kitabı, o çok övülen romanı, nihayet bitirdim.",
              "Matematik öğretmenimiz, okulun en tecrübelisi, yarın emekli oluyor.",
              "Sonunda hayalindeki eve, deniz kenarındaki o villaya, kavuştu."
            ],
            "correctIndex": 0,
            "explanation": "Cümledeki ara sözlerin hem başına hem de sonuna virgül (ya da kısa çizgi) yerleştirilmesi kuraldır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Ara Sözleri Ayırma' kuralı doğru uygulanmıştır?",
            "options": [
              "Sonunda hayalindeki eve, deniz kenarındaki o villaya, kavuştu.",
              "Geçen hafta aldığım kitabı o çok övülen romanı nihayet bitirdim.",
              "En yakın arkadaşım sınıf temsilcimiz bugün okula gelmedi.",
              "Doğup büyüdüğüm şehri İzmir'i çok özledim."
            ],
            "correctIndex": 0,
            "explanation": "Cümledeki ara sözlerin hem başına hem de sonuna virgül (ya da kısa çizgi) yerleştirilmesi kuraldır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Sonunda hayalindeki eve, deniz kenarındaki o villaya, kavuştu.",
              "Geçen hafta aldığım kitabı, o çok övülen romanı, nihayet bitirdim.",
              "En yakın arkadaşım, sınıf temsilcimiz, bugün okula gelmedi.",
              "Matematik öğretmenimiz okulun en tecrübelisi yarın emekli oluyor."
            ],
            "correctIndex": 3,
            "explanation": "Cümledeki ara sözlerin hem başına hem de sonuna virgül (ya da kısa çizgi) yerleştirilmesi kuraldır."
          }
        ]
      },
      {
        "id": "virgul_r5",
        "title": "Tekrarlanan Kelimeler",
        "ruleText": "Anlama güç kazandırmak için tekrarlanan kelimeler arasına konur.",
        "examples": [
          "Akşam, yine akşam, yine akşam, / Göllerde bu dem bir kamış olsam!",
          "Sevgi, sevgi, sevgi... Dünyayı kurtaracak tek güç budur.",
          "Sessizce, sessizce, sessizce yaklaştı avına.",
          "Para, para, para! İnsanların peşinden koştuğu bu şey nedir?",
          "Kar, kar, kar... Günlerdir durmaksızın yağıyordu gökyüzünden."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Tekrarlanan Kelimeler' kuralı doğru uygulanmıştır?",
            "options": [
              "Akşam, yine akşam, yine akşam, / Göllerde bu dem bir kamış olsam!",
              "Para para para! İnsanların peşinden koştuğu bu şey nedir?",
              "Sessizce sessizce sessizce yaklaştı avına.",
              "Kar kar kar... Günlerdir durmaksızın yağıyordu gökyüzünden."
            ],
            "correctIndex": 0,
            "explanation": "Şiirsel anlatımda veya vurgulamalarda tekrarlanan kelimelerin arasına virgül yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Kar, kar, kar... Günlerdir durmaksızın yağıyordu gökyüzünden.",
              "Sevgi sevgi sevgi... Dünyayı kurtaracak tek güç budur.",
              "Sessizce, sessizce, sessizce yaklaştı avına.",
              "Para, para, para! İnsanların peşinden koştuğu bu şey nedir?"
            ],
            "correctIndex": 1,
            "explanation": "Şiirsel anlatımda veya vurgulamalarda tekrarlanan kelimelerin arasına virgül yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Tekrarlanan Kelimeler' kuralı doğru uygulanmıştır?",
            "options": [
              "Akşam yine akşam yine akşam / Göllerde bu dem bir kamış olsam!",
              "Kar kar kar... Günlerdir durmaksızın yağıyordu gökyüzünden.",
              "Sessizce, sessizce, sessizce yaklaştı avına.",
              "Para para para! İnsanların peşinden koştuğu bu şey nedir?"
            ],
            "correctIndex": 2,
            "explanation": "Şiirsel anlatımda veya vurgulamalarda tekrarlanan kelimelerin arasına virgül yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Akşam, yine akşam, yine akşam, / Göllerde bu dem bir kamış olsam!",
              "Sevgi, sevgi, sevgi... Dünyayı kurtaracak tek güç budur.",
              "Para para para! İnsanların peşinden koştuğu bu şey nedir?",
              "Sessizce, sessizce, sessizce yaklaştı avına."
            ],
            "correctIndex": 2,
            "explanation": "Şiirsel anlatımda veya vurgulamalarda tekrarlanan kelimelerin arasına virgül yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Tekrarlanan Kelimeler' kuralı doğru uygulanmıştır?",
            "options": [
              "Sessizce sessizce sessizce yaklaştı avına.",
              "Para para para! İnsanların peşinden koştuğu bu şey nedir?",
              "Sevgi sevgi sevgi... Dünyayı kurtaracak tek güç budur.",
              "Kar, kar, kar... Günlerdir durmaksızın yağıyordu gökyüzünden."
            ],
            "correctIndex": 3,
            "explanation": "Şiirsel anlatımda veya vurgulamalarda tekrarlanan kelimelerin arasına virgül yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Yavaş yavaş yavaş adımlarla zirveye ulaştık.",
              "Sevgi, sevgi, sevgi... Dünyayı kurtaracak tek güç budur.",
              "Kar, kar, kar... Günlerdir durmaksızın yağıyordu gökyüzünden.",
              "Sessizce, sessizce, sessizce yaklaştı avına."
            ],
            "correctIndex": 0,
            "explanation": "Şiirsel anlatımda veya vurgulamalarda tekrarlanan kelimelerin arasına virgül yerleştirilir."
          }
        ]
      },
      {
        "id": "virgul_r6",
        "title": "Alıntı Cümleler",
        "ruleText": "Tırnak içinde olmayan alıntı cümlelerden sonra konur.",
        "examples": [
          "Yarın mutlaka orada olmalıyım, dedi.",
          "Bu ödevi zamanında bitirmeliyiz, diyerek çalışmaya koyuldu.",
          "Beni bir daha asla aramayın, diye bağırdı öfkeyle.",
          "Gelecek hafta tatile çıkıyoruz, müjdesini verdi ailesine.",
          "Sizinle çalışmak benim için bir onurdur, sözleriyle veda etti."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Alıntı Cümleler' kuralı doğru uygulanmıştır?",
            "options": [
              "Yemek çok lezzetli olmuş diyerek tabağını uzattı.",
              "Beni bir daha asla aramayın diye bağırdı öfkeyle.",
              "Gelecek hafta tatile çıkıyoruz müjdesini verdi ailesine.",
              "Yarın mutlaka orada olmalıyım, dedi."
            ],
            "correctIndex": 3,
            "explanation": "Doğrudan aktarma cümleleri tırnak işareti kullanılmadan veriliyorsa, aktarılan cümlenin bittiği yere virgül konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Beni bir daha asla aramayın, diye bağırdı öfkeyle.",
              "Yemek çok lezzetli olmuş, diyerek tabağını uzattı.",
              "Bu ödevi zamanında bitirmeliyiz diyerek çalışmaya koyuldu.",
              "Gelecek hafta tatile çıkıyoruz, müjdesini verdi ailesine."
            ],
            "correctIndex": 2,
            "explanation": "Doğrudan aktarma cümleleri tırnak işareti kullanılmadan veriliyorsa, aktarılan cümlenin bittiği yere virgül konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Alıntı Cümleler' kuralı doğru uygulanmıştır?",
            "options": [
              "Beni bir daha asla aramayın, diye bağırdı öfkeyle.",
              "Yarın mutlaka orada olmalıyım dedi.",
              "Sizinle çalışmak benim için bir onurdur sözleriyle veda etti.",
              "Yemek çok lezzetli olmuş diyerek tabağını uzattı."
            ],
            "correctIndex": 0,
            "explanation": "Doğrudan aktarma cümleleri tırnak işareti kullanılmadan veriliyorsa, aktarılan cümlenin bittiği yere virgül konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Yemek çok lezzetli olmuş, diyerek tabağını uzattı.",
              "Sizinle çalışmak benim için bir onurdur, sözleriyle veda etti.",
              "Gelecek hafta tatile çıkıyoruz müjdesini verdi ailesine.",
              "Beni bir daha asla aramayın, diye bağırdı öfkeyle."
            ],
            "correctIndex": 2,
            "explanation": "Doğrudan aktarma cümleleri tırnak işareti kullanılmadan veriliyorsa, aktarılan cümlenin bittiği yere virgül konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Alıntı Cümleler' kuralı doğru uygulanmıştır?",
            "options": [
              "Sizinle çalışmak benim için bir onurdur, sözleriyle veda etti.",
              "Gelecek hafta tatile çıkıyoruz müjdesini verdi ailesine.",
              "Yarın mutlaka orada olmalıyım dedi.",
              "Beni bir daha asla aramayın diye bağırdı öfkeyle."
            ],
            "correctIndex": 0,
            "explanation": "Doğrudan aktarma cümleleri tırnak işareti kullanılmadan veriliyorsa, aktarılan cümlenin bittiği yere virgül konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Sizinle çalışmak benim için bir onurdur, sözleriyle veda etti.",
              "Bu ödevi zamanında bitirmeliyiz, diyerek çalışmaya koyuldu.",
              "Beni bir daha asla aramayın, diye bağırdı öfkeyle.",
              "Yemek çok lezzetli olmuş diyerek tabağını uzattı."
            ],
            "correctIndex": 3,
            "explanation": "Doğrudan aktarma cümleleri tırnak işareti kullanılmadan veriliyorsa, aktarılan cümlenin bittiği yere virgül konur."
          }
        ]
      },
      {
        "id": "virgul_r7",
        "title": "Hitaplardan Sonra",
        "ruleText": "Hitap için kullanılan kelimelerden sonra konur.",
        "examples": [
          "Sayın Başkan, toplantıya katılımınız için teşekkür ederiz.",
          "Sevgili Anneciğim, seni çok özledim ve yakında döneceğim.",
          "Değerli Arkadaşlar, bugünkü sunumumuzda yeni projeyi tanıtacağız.",
          "Aziz Milletim, bağımsızlık mücadelemiz sonsuza kadar sürecektir.",
          "Canım Arkadaşım, doğum gününü en içten dileklerimle kutlarım."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Hitaplardan Sonra' kuralı doğru uygulanmıştır?",
            "options": [
              "Değerli Arkadaşlar bugünkü sunumumuzda yeni projeyi tanıtacağız.",
              "Sayın Başkan, toplantıya katılımınız için teşekkür ederiz.",
              "Saygıdeğer Hocam üzerimizdeki emekleriniz için minnettarız.",
              "Aziz Milletim bağımsızlık mücadelemiz sonsuza kadar sürecektir."
            ],
            "correctIndex": 1,
            "explanation": "Mektuplarda, hitabet metinlerinde ve konuşmalarda hitap kelimelerinden sonra virgül kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Değerli Arkadaşlar, bugünkü sunumumuzda yeni projeyi tanıtacağız.",
              "Sevgili Anneciğim seni çok özledim ve yakında döneceğim.",
              "Saygıdeğer Hocam, üzerimizdeki emekleriniz için minnettarız.",
              "Sayın Başkan, toplantıya katılımınız için teşekkür ederiz."
            ],
            "correctIndex": 1,
            "explanation": "Mektuplarda, hitabet metinlerinde ve konuşmalarda hitap kelimelerinden sonra virgül kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Hitaplardan Sonra' kuralı doğru uygulanmıştır?",
            "options": [
              "Değerli Arkadaşlar, bugünkü sunumumuzda yeni projeyi tanıtacağız.",
              "Sayın Başkan toplantıya katılımınız için teşekkür ederiz.",
              "Sevgili Anneciğim seni çok özledim ve yakında döneceğim.",
              "Saygıdeğer Hocam üzerimizdeki emekleriniz için minnettarız."
            ],
            "correctIndex": 0,
            "explanation": "Mektuplarda, hitabet metinlerinde ve konuşmalarda hitap kelimelerinden sonra virgül kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Sayın Başkan, toplantıya katılımınız için teşekkür ederiz.",
              "Aziz Milletim bağımsızlık mücadelemiz sonsuza kadar sürecektir.",
              "Canım Arkadaşım, doğum gününü en içten dileklerimle kutlarım.",
              "Saygıdeğer Hocam, üzerimizdeki emekleriniz için minnettarız."
            ],
            "correctIndex": 1,
            "explanation": "Mektuplarda, hitabet metinlerinde ve konuşmalarda hitap kelimelerinden sonra virgül kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Hitaplardan Sonra' kuralı doğru uygulanmıştır?",
            "options": [
              "Sevgili Anneciğim seni çok özledim ve yakında döneceğim.",
              "Aziz Milletim bağımsızlık mücadelemiz sonsuza kadar sürecektir.",
              "Saygıdeğer Hocam üzerimizdeki emekleriniz için minnettarız.",
              "Canım Arkadaşım, doğum gününü en içten dileklerimle kutlarım."
            ],
            "correctIndex": 3,
            "explanation": "Mektuplarda, hitabet metinlerinde ve konuşmalarda hitap kelimelerinden sonra virgül kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Canım Arkadaşım, doğum gününü en içten dileklerimle kutlarım.",
              "Saygıdeğer Hocam üzerimizdeki emekleriniz için minnettarız.",
              "Değerli Arkadaşlar, bugünkü sunumumuzda yeni projeyi tanıtacağız.",
              "Aziz Milletim, bağımsızlık mücadelemiz sonsuza kadar sürecektir."
            ],
            "correctIndex": 1,
            "explanation": "Mektuplarda, hitabet metinlerinde ve konuşmalarda hitap kelimelerinden sonra virgül kullanılır."
          }
        ]
      },
      {
        "id": "virgul_r8",
        "title": "Sayıların Yazılışı (Ondalık)",
        "ruleText": "Sayıların yazılışında kesirleri ayırmak için kullanılır.",
        "examples": [
          "Yeni telefonun ağırlığı tam 185,4 grammış.",
          "Sınavda Türkçe testinin net ortalaması 14,5 olarak belirlendi.",
          "Benzinin litre fiyatına bugün 1,20 lira zam yapıldı.",
          "Bu koşuyu 9,84 saniyede tamamlayarak rekor kırdı.",
          "Dün gece ateşinin 38,6 dereceye çıktığını söylediler."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Sayıların Yazılışı (Ondalık)' kuralı doğru uygulanmıştır?",
            "options": [
              "Benzinin litre fiyatına bugün 1.20 lira zam yapıldı.",
              "Dün gece ateşinin 38.6 dereceye çıktığını söylediler.",
              "Bu koşuyu 9.84 saniyede tamamlayarak rekor kırdı.",
              "Yeni telefonun ağırlığı tam 185,4 grammış."
            ],
            "correctIndex": 3,
            "explanation": "Türkçe imla kurallarına göre ondalık sayılarda kesir kısmını ayırmak için nokta değil, sadece virgül kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Aldığımız kumaşın uzunluğu tam 4,5 metre geldi.",
              "Sınavda Türkçe testinin net ortalaması 14.5 olarak belirlendi.",
              "Benzinin litre fiyatına bugün 1,20 lira zam yapıldı.",
              "Dün gece ateşinin 38,6 dereceye çıktığını söylediler."
            ],
            "correctIndex": 1,
            "explanation": "Türkçe imla kurallarına göre ondalık sayılarda kesir kısmını ayırmak için nokta değil, sadece virgül kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Sayıların Yazılışı (Ondalık)' kuralı doğru uygulanmıştır?",
            "options": [
              "Yeni telefonun ağırlığı tam 185.4 grammış.",
              "Dün gece ateşinin 38.6 dereceye çıktığını söylediler.",
              "Benzinin litre fiyatına bugün 1,20 lira zam yapıldı.",
              "Aldığımız kumaşın uzunluğu tam 4.5 metre geldi."
            ],
            "correctIndex": 2,
            "explanation": "Türkçe imla kurallarına göre ondalık sayılarda kesir kısmını ayırmak için nokta değil, sadece virgül kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Yeni telefonun ağırlığı tam 185,4 grammış.",
              "Bu koşuyu 9.84 saniyede tamamlayarak rekor kırdı.",
              "Sınavda Türkçe testinin net ortalaması 14,5 olarak belirlendi.",
              "Aldığımız kumaşın uzunluğu tam 4,5 metre geldi."
            ],
            "correctIndex": 1,
            "explanation": "Türkçe imla kurallarına göre ondalık sayılarda kesir kısmını ayırmak için nokta değil, sadece virgül kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Sayıların Yazılışı (Ondalık)' kuralı doğru uygulanmıştır?",
            "options": [
              "Dün gece ateşinin 38,6 dereceye çıktığını söylediler.",
              "Benzinin litre fiyatına bugün 1.20 lira zam yapıldı.",
              "Bu koşuyu 9.84 saniyede tamamlayarak rekor kırdı.",
              "Sınavda Türkçe testinin net ortalaması 14.5 olarak belirlendi."
            ],
            "correctIndex": 0,
            "explanation": "Türkçe imla kurallarına göre ondalık sayılarda kesir kısmını ayırmak için nokta değil, sadece virgül kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Benzinin litre fiyatına bugün 1,20 lira zam yapıldı.",
              "Sınavda Türkçe testinin net ortalaması 14,5 olarak belirlendi.",
              "Yeni telefonun ağırlığı tam 185,4 grammış.",
              "Aldığımız kumaşın uzunluğu tam 4.5 metre geldi."
            ],
            "correctIndex": 3,
            "explanation": "Türkçe imla kurallarına göre ondalık sayılarda kesir kısmını ayırmak için nokta değil, sadece virgül kullanılır."
          }
        ]
      },
      {
        "id": "virgul_r9",
        "title": "Anlam Karışıklığını Önleme",
        "ruleText": "Bir kelimenin kendinden sonra gelen kelime veya kelime gruplarıyla yapı ve anlam bakımından bağlantısı olmadığını göstermek ve anlam karışıklığını önlemek için kullanılır.",
        "examples": [
          "O, eski defteri çoktan kapatmış ve yeni bir hayata başlamıştı.",
          "Genç, kadına yardım etmek için hemen yerinden doğruldu.",
          "Gazeteci, bayanın sözlerini dikkatle not almaya başladı.",
          "Hasta, doktora şikayetlerini büyük bir sakinlikle anlattı.",
          "Yabancı, adama adresi tarif etmek için haritayı açtı."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Anlam Karışıklığını Önleme' kuralı doğru uygulanmıştır?",
            "options": [
              "Hasta doktora şikayetlerini büyük bir sakinlikle anlattı.",
              "Çocuk elindeki oyuncağı kaybetmenin üzüntüsüyle ağlıyordu.",
              "Gazeteci bayanın sözlerini dikkatle not almaya başladı.",
              "O, eski defteri çoktan kapatmış ve yeni bir hayata başlamıştı."
            ],
            "correctIndex": 3,
            "explanation": "Virgül kaldırıldığında anlam değişiyorsa (örn: 'Genç kadına...' sıfat tamlaması haline gelip başka bir genç kadını anlatıyorsa), anlamı netleştirmek için virgül şarttır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "O, eski defteri çoktan kapatmış ve yeni bir hayata başlamıştı.",
              "Çocuk, elindeki oyuncağı kaybetmenin üzüntüsüyle ağlıyordu.",
              "Gazeteci, bayanın sözlerini dikkatle not almaya başladı.",
              "Genç kadına yardım etmek için hemen yerinden doğruldu."
            ],
            "correctIndex": 3,
            "explanation": "Virgül kaldırıldığında anlam değişiyorsa (örn: 'Genç kadına...' sıfat tamlaması haline gelip başka bir genç kadını anlatıyorsa), anlamı netleştirmek için virgül şarttır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Anlam Karışıklığını Önleme' kuralı doğru uygulanmıştır?",
            "options": [
              "Genç kadına yardım etmek için hemen yerinden doğruldu.",
              "Yabancı adama adresi tarif etmek için haritayı açtı.",
              "Çocuk elindeki oyuncağı kaybetmenin üzüntüsüyle ağlıyordu.",
              "Gazeteci, bayanın sözlerini dikkatle not almaya başladı."
            ],
            "correctIndex": 3,
            "explanation": "Virgül kaldırıldığında anlam değişiyorsa (örn: 'Genç kadına...' sıfat tamlaması haline gelip başka bir genç kadını anlatıyorsa), anlamı netleştirmek için virgül şarttır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Genç, kadına yardım etmek için hemen yerinden doğruldu.",
              "Hasta doktora şikayetlerini büyük bir sakinlikle anlattı.",
              "Gazeteci, bayanın sözlerini dikkatle not almaya başladı.",
              "Yabancı, adama adresi tarif etmek için haritayı açtı."
            ],
            "correctIndex": 1,
            "explanation": "Virgül kaldırıldığında anlam değişiyorsa (örn: 'Genç kadına...' sıfat tamlaması haline gelip başka bir genç kadını anlatıyorsa), anlamı netleştirmek için virgül şarttır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Anlam Karışıklığını Önleme' kuralı doğru uygulanmıştır?",
            "options": [
              "O eski defteri çoktan kapatmış ve yeni bir hayata başlamıştı.",
              "Gazeteci bayanın sözlerini dikkatle not almaya başladı.",
              "Genç kadına yardım etmek için hemen yerinden doğruldu.",
              "Yabancı, adama adresi tarif etmek için haritayı açtı."
            ],
            "correctIndex": 3,
            "explanation": "Virgül kaldırıldığında anlam değişiyorsa (örn: 'Genç kadına...' sıfat tamlaması haline gelip başka bir genç kadını anlatıyorsa), anlamı netleştirmek için virgül şarttır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Genç, kadına yardım etmek için hemen yerinden doğruldu.",
              "O, eski defteri çoktan kapatmış ve yeni bir hayata başlamıştı.",
              "Çocuk elindeki oyuncağı kaybetmenin üzüntüsüyle ağlıyordu.",
              "Hasta, doktora şikayetlerini büyük bir sakinlikle anlattı."
            ],
            "correctIndex": 2,
            "explanation": "Virgül kaldırıldığında anlam değişiyorsa (örn: 'Genç kadına...' sıfat tamlaması haline gelip başka bir genç kadını anlatıyorsa), anlamı netleştirmek için virgül şarttır."
          }
        ]
      }
    ]
  },
  {
    "id": "iki-nokta",
    "symbol": ":",
    "name": "İki Nokta",
    "color": "#f59e0b",
    "description": "Açıklama veya örnek verilecek cümlelerin sonuna konan ve konuşmaları aktarmada kullanılan noktalama işareti.",
    "rules": [
      {
        "id": "iki_nokta_r1",
        "title": "Örnek Verme",
        "ruleText": "Kendisinden sonra örnek verilecek cümlenin sonuna konur.",
        "examples": [
          "En sevdiğim meyvelerden bazıları şunlardır: elma, çilek, şeftali.",
          "Sıfır atık projesinde toplananlar: cam, plastik, kağıt, metal.",
          "Millî edebiyat akımının temsilcilerini sayalım: Ömer Seyfettin, Ziya Gökalp.",
          "Çantamda şu kırtasiye malzemeleri vardı: defter, cetvel, pergel.",
          "Akdeniz Bölgesi'nin ünlü ürünleri: turunçgiller, zeytin, pamuk."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Örnek Verme' kuralı doğru uygulanmıştır?",
            "options": [
              "Çantamda şu kırtasiye malzemeleri vardı; defter, cetvel, pergel.",
              "Sıfır atık projesinde toplananlar, cam, plastik, kağıt, metal.",
              "Hafta sonu yapacağım işler, kitap okumak, spor yapmak, temizlik.",
              "En sevdiğim meyvelerden bazıları şunlardır: elma, çilek, şeftali."
            ],
            "correctIndex": 3,
            "explanation": "Cümle içinde örnek sıralaması yapılmadan hemen önce iki nokta kullanılır; noktalı virgül veya virgül konamaz."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Hafta sonu yapacağım işler: kitap okumak, spor yapmak, temizlik.",
              "Çantamda şu kırtasiye malzemeleri vardı: defter, cetvel, pergel.",
              "Sıfır atık projesinde toplananlar, cam, plastik, kağıt, metal.",
              "En sevdiğim meyvelerden bazıları şunlardır: elma, çilek, şeftali."
            ],
            "correctIndex": 2,
            "explanation": "Cümle içinde örnek sıralaması yapılmadan hemen önce iki nokta kullanılır; noktalı virgül veya virgül konamaz."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Örnek Verme' kuralı doğru uygulanmıştır?",
            "options": [
              "Millî edebiyat akımının temsilcilerini sayalım: Ömer Seyfettin, Ziya Gökalp.",
              "Akdeniz Bölgesi'nin ünlü ürünleri; turunçgiller, zeytin, pamuk.",
              "Sıfır atık projesinde toplananlar, cam, plastik, kağıt, metal.",
              "En sevdiğim meyvelerden bazıları şunlardır; elma, çilek, şeftali."
            ],
            "correctIndex": 0,
            "explanation": "Cümle içinde örnek sıralaması yapılmadan hemen önce iki nokta kullanılır; noktalı virgül veya virgül konamaz."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Çantamda şu kırtasiye malzemeleri vardı; defter, cetvel, pergel.",
              "Sıfır atık projesinde toplananlar: cam, plastik, kağıt, metal.",
              "En sevdiğim meyvelerden bazıları şunlardır: elma, çilek, şeftali.",
              "Akdeniz Bölgesi'nin ünlü ürünleri: turunçgiller, zeytin, pamuk."
            ],
            "correctIndex": 0,
            "explanation": "Cümle içinde örnek sıralaması yapılmadan hemen önce iki nokta kullanılır; noktalı virgül veya virgül konamaz."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Örnek Verme' kuralı doğru uygulanmıştır?",
            "options": [
              "Millî edebiyat akımının temsilcilerini sayalım, Ömer Seyfettin, Ziya Gökalp.",
              "Akdeniz Bölgesi'nin ünlü ürünleri: turunçgiller, zeytin, pamuk.",
              "Çantamda şu kırtasiye malzemeleri vardı; defter, cetvel, pergel.",
              "Hafta sonu yapacağım işler, kitap okumak, spor yapmak, temizlik."
            ],
            "correctIndex": 1,
            "explanation": "Cümle içinde örnek sıralaması yapılmadan hemen önce iki nokta kullanılır; noktalı virgül veya virgül konamaz."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Hafta sonu yapacağım işler, kitap okumak, spor yapmak, temizlik.",
              "Millî edebiyat akımının temsilcilerini sayalım: Ömer Seyfettin, Ziya Gökalp.",
              "Sıfır atık projesinde toplananlar: cam, plastik, kağıt, metal.",
              "En sevdiğim meyvelerden bazıları şunlardır: elma, çilek, şeftali."
            ],
            "correctIndex": 0,
            "explanation": "Cümle içinde örnek sıralaması yapılmadan hemen önce iki nokta kullanılır; noktalı virgül veya virgül konamaz."
          }
        ]
      },
      {
        "id": "iki_nokta_r2",
        "title": "Açıklama Yapma",
        "ruleText": "Kendisinden sonra açıklama yapılacak cümlenin sonuna konur.",
        "examples": [
          "Kendimi takdim edeyim: Meclis kâtiplerindenim.",
          "Başarısının tek bir sırrı vardı: Hiç durmadan planlı çalışmak.",
          "En çok güvendiğim kural şudur: Dürüstlük her zaman kazandırır.",
          "Bu kararın bir amacı bulunuyor: Şirketin geleceğini kurtarmak.",
          "Sözlük anlamı şudur: İmla kuralları yazım kılavuzuna dayanır."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Açıklama Yapma' kuralı doğru uygulanmıştır?",
            "options": [
              "En çok güvendiğim kural şudur, Dürüstlük her zaman kazandırır.",
              "Bu kararın bir amacı bulunuyor, Şirketin geleceğini kurtarmak.",
              "Kendimi takdim edeyim: Meclis kâtiplerindenim.",
              "Başarısının tek bir sırrı vardı; Hiç durmadan planlı çalışmak."
            ],
            "correctIndex": 2,
            "explanation": "Kendisiyle ilgili açıklama yapılacak cümlelerin sonuna iki nokta konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Başarısının tek bir sırrı vardı; Hiç durmadan planlı çalışmak.",
              "Tiyatro sanatını şöyle tanımladı: İnsanı insana insanla anlatma sanatıdır.",
              "En çok güvendiğim kural şudur: Dürüstlük her zaman kazandırır.",
              "Bu kararın bir amacı bulunuyor: Şirketin geleceğini kurtarmak."
            ],
            "correctIndex": 0,
            "explanation": "Kendisiyle ilgili açıklama yapılacak cümlelerin sonuna iki nokta konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Açıklama Yapma' kuralı doğru uygulanmıştır?",
            "options": [
              "Bu kararın bir amacı bulunuyor, Şirketin geleceğini kurtarmak.",
              "Kendimi takdim edeyim, Meclis kâtiplerindenim.",
              "En çok güvendiğim kural şudur: Dürüstlük her zaman kazandırır.",
              "Tiyatro sanatını şöyle tanımladı, İnsanı insana insanla anlatma sanatıdır."
            ],
            "correctIndex": 2,
            "explanation": "Kendisiyle ilgili açıklama yapılacak cümlelerin sonuna iki nokta konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Bu kararın bir amacı bulunuyor, Şirketin geleceğini kurtarmak.",
              "En çok güvendiğim kural şudur: Dürüstlük her zaman kazandırır.",
              "Tiyatro sanatını şöyle tanımladı: İnsanı insana insanla anlatma sanatıdır.",
              "Sözlük anlamı şudur: İmla kuralları yazım kılavuzuna dayanır."
            ],
            "correctIndex": 0,
            "explanation": "Kendisiyle ilgili açıklama yapılacak cümlelerin sonuna iki nokta konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Açıklama Yapma' kuralı doğru uygulanmıştır?",
            "options": [
              "Tiyatro sanatını şöyle tanımladı, İnsanı insana insanla anlatma sanatıdır.",
              "Kendimi takdim edeyim, Meclis kâtiplerindenim.",
              "Bu kararın bir amacı bulunuyor, Şirketin geleceğini kurtarmak.",
              "Sözlük anlamı şudur: İmla kuralları yazım kılavuzuna dayanır."
            ],
            "correctIndex": 3,
            "explanation": "Kendisiyle ilgili açıklama yapılacak cümlelerin sonuna iki nokta konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Tiyatro sanatını şöyle tanımladı, İnsanı insana insanla anlatma sanatıdır.",
              "Sözlük anlamı şudur: İmla kuralları yazım kılavuzuna dayanır.",
              "Bu kararın bir amacı bulunuyor: Şirketin geleceğini kurtarmak.",
              "Başarısının tek bir sırrı vardı: Hiç durmadan planlı çalışmak."
            ],
            "correctIndex": 0,
            "explanation": "Kendisiyle ilgili açıklama yapılacak cümlelerin sonuna iki nokta konur."
          }
        ]
      },
      {
        "id": "iki_nokta_r3",
        "title": "Karşılıklı Konuşmalar",
        "ruleText": "Karşılıklı konuşmalarda, konuşan kişiyi belirten sözlerden sonra konur.",
        "examples": [
          "Bilge Kağan: Türklerim, işitin! Üstten gök basmasa, alttan yer delinmese...",
          "Hacivat: Hoş geldin Karagöz'üm, nereye böyle?",
          "Karagöz: Hoş bulduk Hacivat'ım, odun almaya gidiyorum.",
          "Öğretmen: Çocuklar, ödevlerinizi zamanında teslim edin.",
          "Ömer: Yarın sabah erkenden yola çıkalım mı?"
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Karşılıklı Konuşmalar' kuralı doğru uygulanmıştır?",
            "options": [
              "Bilge Kağan: Türklerim, işitin! Üstten gök basmasa, alttan yer delinmese...",
              "Öğretmen; Çocuklar, ödevlerinizi zamanında teslim edin.",
              "Ömer, Yarın sabah erkenden yola çıkalım mı?",
              "Karagöz, Hoş bulduk Hacivat'ım, odun almaya gidiyorum."
            ],
            "correctIndex": 0,
            "explanation": "Karşılıklı konuşmalarda konuşan kişinin adından sonra iki nokta üst üste konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Karagöz: Hoş bulduk Hacivat'ım, odun almaya gidiyorum.",
              "Hacivat; Hoş geldin Karagöz'üm, nereye böyle?",
              "Bilge Kağan: Türklerim, işitin! Üstten gök basmasa, alttan yer delinmese...",
              "Öğretmen: Çocuklar, ödevlerinizi zamanında teslim edin."
            ],
            "correctIndex": 1,
            "explanation": "Karşılıklı konuşmalarda konuşan kişinin adından sonra iki nokta üst üste konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Karşılıklı Konuşmalar' kuralı doğru uygulanmıştır?",
            "options": [
              "Karagöz: Hoş bulduk Hacivat'ım, odun almaya gidiyorum.",
              "Bilge Kağan, Türklerim, işitin! Üstten gök basmasa, alttan yer delinmese...",
              "Hacivat; Hoş geldin Karagöz'üm, nereye böyle?",
              "Dadaruh; Atların bakımını bugün ben yapacağım."
            ],
            "correctIndex": 0,
            "explanation": "Karşılıklı konuşmalarda konuşan kişinin adından sonra iki nokta üst üste konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Dadaruh: Atların bakımını bugün ben yapacağım.",
              "Öğretmen; Çocuklar, ödevlerinizi zamanında teslim edin.",
              "Bilge Kağan: Türklerim, işitin! Üstten gök basmasa, alttan yer delinmese...",
              "Karagöz: Hoş bulduk Hacivat'ım, odun almaya gidiyorum."
            ],
            "correctIndex": 1,
            "explanation": "Karşılıklı konuşmalarda konuşan kişinin adından sonra iki nokta üst üste konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Karşılıklı Konuşmalar' kuralı doğru uygulanmıştır?",
            "options": [
              "Karagöz, Hoş bulduk Hacivat'ım, odun almaya gidiyorum.",
              "Öğretmen; Çocuklar, ödevlerinizi zamanında teslim edin.",
              "Hacivat; Hoş geldin Karagöz'üm, nereye böyle?",
              "Ömer: Yarın sabah erkenden yola çıkalım mı?"
            ],
            "correctIndex": 3,
            "explanation": "Karşılıklı konuşmalarda konuşan kişinin adından sonra iki nokta üst üste konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Karagöz: Hoş bulduk Hacivat'ım, odun almaya gidiyorum.",
              "Dadaruh; Atların bakımını bugün ben yapacağım.",
              "Öğretmen: Çocuklar, ödevlerinizi zamanında teslim edin.",
              "Bilge Kağan: Türklerim, işitin! Üstten gök basmasa, alttan yer delinmese..."
            ],
            "correctIndex": 1,
            "explanation": "Karşılıklı konuşmalarda konuşan kişinin adından sonra iki nokta üst üste konur."
          }
        ]
      },
      {
        "id": "iki_nokta_r4",
        "title": "Matematikte Bölme",
        "ruleText": "Matematikte bölme işareti yerine kullanılır.",
        "examples": [
          "Öğretmen tahtaya 20:4 = 5 işlemini yazdı.",
          "Soruda verilen 100:10 işleminin sonucunu bulunuz.",
          "Haftalık harçlığını kardeşine bölüştürürken 50:2 = 25 yaptı.",
          "Kişi başı düşen miktarı 80:4 = 20 olarak hesapladık.",
          "Sınavdaki son soru olan 120:3 işlemini çözemedim."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Matematikte Bölme' kuralı doğru uygulanmıştır?",
            "options": [
              "Öğretmen tahtaya 20:4 = 5 işlemini yazdı.",
              "Bu işlemin sonucu 90,9 = 10 şeklinde olmalıdır.",
              "Sınavdaki son soru olan 120;3 işlemini çözemedim.",
              "Soruda verilen 100-10 işleminin sonucunu bulunuz."
            ],
            "correctIndex": 0,
            "explanation": "Matematiksel bölme işlemlerinde iki nokta bölme simgesi olarak kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Öğretmen tahtaya 20:4 = 5 işlemini yazdı.",
              "Kişi başı düşen miktarı 80:4 = 20 olarak hesapladık.",
              "Sınavdaki son soru olan 120:3 işlemini çözemedim.",
              "Soruda verilen 100-10 işleminin sonucunu bulunuz."
            ],
            "correctIndex": 3,
            "explanation": "Matematiksel bölme işlemlerinde iki nokta bölme simgesi olarak kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Matematikte Bölme' kuralı doğru uygulanmıştır?",
            "options": [
              "Öğretmen tahtaya 20/4 = 5 işlemini yazdı.",
              "Bu işlemin sonucu 90,9 = 10 şeklinde olmalıdır.",
              "Haftalık harçlığını kardeşine bölüştürürken 50:2 = 25 yaptı.",
              "Soruda verilen 100-10 işleminin sonucunu bulunuz."
            ],
            "correctIndex": 2,
            "explanation": "Matematiksel bölme işlemlerinde iki nokta bölme simgesi olarak kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Soruda verilen 100:10 işleminin sonucunu bulunuz.",
              "Haftalık harçlığını kardeşine bölüştürürken 50:2 = 25 yaptı.",
              "Kişi başı düşen miktarı 80.4 = 20 olarak hesapladık.",
              "Bu işlemin sonucu 90:9 = 10 şeklinde olmalıdır."
            ],
            "correctIndex": 2,
            "explanation": "Matematiksel bölme işlemlerinde iki nokta bölme simgesi olarak kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Matematikte Bölme' kuralı doğru uygulanmıştır?",
            "options": [
              "Sınavdaki son soru olan 120:3 işlemini çözemedim.",
              "Haftalık harçlığını kardeşine bölüştürürken 50,2 = 25 yaptı.",
              "Kişi başı düşen miktarı 80.4 = 20 olarak hesapladık.",
              "Öğretmen tahtaya 20/4 = 5 işlemini yazdı."
            ],
            "correctIndex": 0,
            "explanation": "Matematiksel bölme işlemlerinde iki nokta bölme simgesi olarak kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Sınavdaki son soru olan 120:3 işlemini çözemedim.",
              "Bu işlemin sonucu 90,9 = 10 şeklinde olmalıdır.",
              "Kişi başı düşen miktarı 80:4 = 20 olarak hesapladık.",
              "Soruda verilen 100:10 işleminin sonucunu bulunuz."
            ],
            "correctIndex": 1,
            "explanation": "Matematiksel bölme işlemlerinde iki nokta bölme simgesi olarak kullanılır."
          }
        ]
      }
    ]
  },
  {
    "id": "noktali-virgul",
    "symbol": ";",
    "name": "Noktalı Virgül",
    "color": "#8b5cf6",
    "description": "Ögeleri arasında virgül bulunan sıralı cümleleri veya farklı tür gruplarını ayırmak için kullanılan ara durak işareti.",
    "rules": [
      {
        "id": "noktali_virgul_r1",
        "title": "Grupları Ayırma",
        "ruleText": "Cümle içinde virgüllerle ayrılmış tür veya takımları birbirinden ayırmak için konur.",
        "examples": [
          "Erkek çocuklara Doğan, Tuğrul; kız çocuklara ise İnci, Çiçek adları konur.",
          "Pazardan elma, armut, portakal; ıspanak, pırasa, kereviz aldık.",
          "Sözel derslerden Türkçe, Tarih; sayısal derslerden Matematik, Fizik çalıştı.",
          "Takımımızda kaleciler Ahmet, Selim; forvetler Hakan, Murat seçildi.",
          "Ofise masa, sandalye, dolap; mutfağa çay makinesi, fincan, tabak aldık."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Grupları Ayırma' kuralı doğru uygulanmıştır?",
            "options": [
              "Pazardan elma, armut, portakal, ıspanak, pırasa, kereviz aldık.",
              "Erkek çocuklara Doğan, Tuğrul; kız çocuklara ise İnci, Çiçek adları konur.",
              "Ofise masa, sandalye, dolap, mutfağa çay makinesi, fincan, tabak aldık.",
              "Yazın Antalya, Bodrum, kışın Uludağ, Kartalkaya tatiline gideriz."
            ],
            "correctIndex": 1,
            "explanation": "Virgüllerle kendi içinde gruplanmış türlerin veya takımların arasına noktalı virgül yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Sözel derslerden Türkçe, Tarih; sayısal derslerden Matematik, Fizik çalıştı.",
              "Yazın Antalya, Bodrum; kışın Uludağ, Kartalkaya tatiline gideriz.",
              "Erkek çocuklara Doğan, Tuğrul; kız çocuklara ise İnci, Çiçek adları konur.",
              "Pazardan elma, armut, portakal, ıspanak, pırasa, kereviz aldık."
            ],
            "correctIndex": 3,
            "explanation": "Virgüllerle kendi içinde gruplanmış türlerin veya takımların arasına noktalı virgül yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Grupları Ayırma' kuralı doğru uygulanmıştır?",
            "options": [
              "Yazın Antalya, Bodrum, kışın Uludağ, Kartalkaya tatiline gideriz.",
              "Sözel derslerden Türkçe, Tarih; sayısal derslerden Matematik, Fizik çalıştı.",
              "Ofise masa, sandalye, dolap, mutfağa çay makinesi, fincan, tabak aldık.",
              "Takımımızda kaleciler Ahmet, Selim, forvetler Hakan, Murat seçildi."
            ],
            "correctIndex": 1,
            "explanation": "Virgüllerle kendi içinde gruplanmış türlerin veya takımların arasına noktalı virgül yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Takımımızda kaleciler Ahmet, Selim, forvetler Hakan, Murat seçildi.",
              "Pazardan elma, armut, portakal; ıspanak, pırasa, kereviz aldık.",
              "Ofise masa, sandalye, dolap; mutfağa çay makinesi, fincan, tabak aldık.",
              "Sözel derslerden Türkçe, Tarih; sayısal derslerden Matematik, Fizik çalıştı."
            ],
            "correctIndex": 0,
            "explanation": "Virgüllerle kendi içinde gruplanmış türlerin veya takımların arasına noktalı virgül yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Grupları Ayırma' kuralı doğru uygulanmıştır?",
            "options": [
              "Pazardan elma, armut, portakal, ıspanak, pırasa, kereviz aldık.",
              "Ofise masa, sandalye, dolap; mutfağa çay makinesi, fincan, tabak aldık.",
              "Takımımızda kaleciler Ahmet, Selim, forvetler Hakan, Murat seçildi.",
              "Erkek çocuklara Doğan, Tuğrul, kız çocuklara ise İnci, Çiçek adları konur."
            ],
            "correctIndex": 1,
            "explanation": "Virgüllerle kendi içinde gruplanmış türlerin veya takımların arasına noktalı virgül yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Pazardan elma, armut, portakal; ıspanak, pırasa, kereviz aldık.",
              "Yazın Antalya, Bodrum, kışın Uludağ, Kartalkaya tatiline gideriz.",
              "Sözel derslerden Türkçe, Tarih; sayısal derslerden Matematik, Fizik çalıştı.",
              "Ofise masa, sandalye, dolap; mutfağa çay makinesi, fincan, tabak aldık."
            ],
            "correctIndex": 1,
            "explanation": "Virgüllerle kendi içinde gruplanmış türlerin veya takımların arasına noktalı virgül yerleştirilir."
          }
        ]
      },
      {
        "id": "noktali_virgul_r2",
        "title": "Ögeleri Virgüllü Cümleler",
        "ruleText": "Ögeleri arasında virgül bulunan sıralı cümleleri birbirinden ayırmak için konur.",
        "examples": [
          "At ölür, meydan kalır; yiğit ölür, şan kalır.",
          "Kel ölür, sırma saçlı olur; kör ölür, badem gözlü olur.",
          "Sevinçten, heyecandan içim içime sığmıyor; bağırmak, şarkı söylemek istiyorum.",
          "Dün akşam kitap, gazete okudum; bugün ise resim, müzik yaptım.",
          "Pazardan meyve, sebze aldık; eve gelip hemen yıkadık, dolaba koyduk."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Ögeleri Virgüllü Cümleler' kuralı doğru uygulanmıştır?",
            "options": [
              "At ölür, meydan kalır; yiğit ölür, şan kalır.",
              "Kel ölür, sırma saçlı olur, kör ölür, badem gözlü olur.",
              "Pazardan meyve, sebze aldık, eve gelip hemen yıkadık, dolaba koyduk.",
              "Yazın sıcak, kurak günler geçer, kışın soğuk, karlı hava gelir."
            ],
            "correctIndex": 0,
            "explanation": "Zaten virgül barındıran iki sıralı cümleyi bağlarken aralarındaki ilişkiyi netleştirmek için noktalı virgül kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Kel ölür, sırma saçlı olur, kör ölür, badem gözlü olur.",
              "Pazardan meyve, sebze aldık; eve gelip hemen yıkadık, dolaba koyduk.",
              "Sevinçten, heyecandan içim içime sığmıyor; bağırmak, şarkı söylemek istiyorum.",
              "At ölür, meydan kalır; yiğit ölür, şan kalır."
            ],
            "correctIndex": 0,
            "explanation": "Zaten virgül barındıran iki sıralı cümleyi bağlarken aralarındaki ilişkiyi netleştirmek için noktalı virgül kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Ögeleri Virgüllü Cümleler' kuralı doğru uygulanmıştır?",
            "options": [
              "Dün akşam kitap, gazete okudum, bugün ise resim, müzik yaptım.",
              "Kel ölür, sırma saçlı olur, kör ölür, badem gözlü olur.",
              "Pazardan meyve, sebze aldık, eve gelip hemen yıkadık, dolaba koyduk.",
              "Sevinçten, heyecandan içim içime sığmıyor; bağırmak, şarkı söylemek istiyorum."
            ],
            "correctIndex": 3,
            "explanation": "Zaten virgül barındıran iki sıralı cümleyi bağlarken aralarındaki ilişkiyi netleştirmek için noktalı virgül kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Pazardan meyve, sebze aldık; eve gelip hemen yıkadık, dolaba koyduk.",
              "Yazın sıcak, kurak günler geçer; kışın soğuk, karlı hava gelir.",
              "Dün akşam kitap, gazete okudum, bugün ise resim, müzik yaptım.",
              "Sevinçten, heyecandan içim içime sığmıyor; bağırmak, şarkı söylemek istiyorum."
            ],
            "correctIndex": 2,
            "explanation": "Zaten virgül barındıran iki sıralı cümleyi bağlarken aralarındaki ilişkiyi netleştirmek için noktalı virgül kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Ögeleri Virgüllü Cümleler' kuralı doğru uygulanmıştır?",
            "options": [
              "Kel ölür, sırma saçlı olur, kör ölür, badem gözlü olur.",
              "Pazardan meyve, sebze aldık; eve gelip hemen yıkadık, dolaba koyduk.",
              "Sevinçten, heyecandan içim içime sığmıyor, bağırmak, şarkı söylemek istiyorum.",
              "At ölür, meydan kalır, yiğit ölür, şan kalır."
            ],
            "correctIndex": 1,
            "explanation": "Zaten virgül barındıran iki sıralı cümleyi bağlarken aralarındaki ilişkiyi netleştirmek için noktalı virgül kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Dün akşam kitap, gazete okudum; bugün ise resim, müzik yaptım.",
              "Yazın sıcak, kurak günler geçer, kışın soğuk, karlı hava gelir.",
              "Kel ölür, sırma saçlı olur; kör ölür, badem gözlü olur.",
              "Sevinçten, heyecandan içim içime sığmıyor; bağırmak, şarkı söylemek istiyorum."
            ],
            "correctIndex": 1,
            "explanation": "Zaten virgül barındıran iki sıralı cümleyi bağlarken aralarındaki ilişkiyi netleştirmek için noktalı virgül kullanılır."
          }
        ]
      },
      {
        "id": "noktali_virgul_r3",
        "title": "Özneden Sonra Karışıklığı Önleme",
        "ruleText": "İkiden fazla eş değer ögeler arasında virgül bulunan cümlelerde özneden sonra noktalı virgül konabilir.",
        "examples": [
          "Yeni usul şiirimiz; zevksiz, köksüz, acemice görünüyordu.",
          "Ahmet; Ali, Veli ve Hasan'dan daha çalışkan bir öğrencidir.",
          "Roman; hikaye, masal ve tiyatroya göre daha uzun soluklu bir türdür.",
          "İzmir; İstanbul, Ankara ve Bursa'dan daha sıcak bir iklime sahiptir.",
          "Zeynep; Elif, Merve ve Duru ile kütüphanede buluşacaktı."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Özneden Sonra Karışıklığı Önleme' kuralı doğru uygulanmıştır?",
            "options": [
              "Zeynep, Elif, Merve ve Duru ile kütüphanede buluşacaktı.",
              "Matematik, Fizik, Kimya ve Biyoloji derslerinden daha çok ilgimi çekiyor.",
              "Yeni usul şiirimiz; zevksiz, köksüz, acemice görünüyordu.",
              "İzmir, İstanbul, Ankara ve Bursa'dan daha sıcak bir iklime sahiptir."
            ],
            "correctIndex": 2,
            "explanation": "Özneden sonra normal virgül konursa, özne diğer eş görevli kelimelerle karışabilir. Bu karışıklığı önlemek için özneden hemen sonra noktalı virgül kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "İzmir; İstanbul, Ankara ve Bursa'dan daha sıcak bir iklime sahiptir.",
              "Ahmet, Ali, Veli ve Hasan'dan daha çalışkan bir öğrencidir.",
              "Roman; hikaye, masal ve tiyatroya göre daha uzun soluklu bir türdür.",
              "Zeynep; Elif, Merve ve Duru ile kütüphanede buluşacaktı."
            ],
            "correctIndex": 1,
            "explanation": "Özneden sonra normal virgül konursa, özne diğer eş görevli kelimelerle karışabilir. Bu karışıklığı önlemek için özneden hemen sonra noktalı virgül kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Özneden Sonra Karışıklığı Önleme' kuralı doğru uygulanmıştır?",
            "options": [
              "Roman; hikaye, masal ve tiyatroya göre daha uzun soluklu bir türdür.",
              "İzmir, İstanbul, Ankara ve Bursa'dan daha sıcak bir iklime sahiptir.",
              "Ahmet, Ali, Veli ve Hasan'dan daha çalışkan bir öğrencidir.",
              "Matematik, Fizik, Kimya ve Biyoloji derslerinden daha çok ilgimi çekiyor."
            ],
            "correctIndex": 0,
            "explanation": "Özneden sonra normal virgül konursa, özne diğer eş görevli kelimelerle karışabilir. Bu karışıklığı önlemek için özneden hemen sonra noktalı virgül kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Ahmet; Ali, Veli ve Hasan'dan daha çalışkan bir öğrencidir.",
              "Yeni usul şiirimiz; zevksiz, köksüz, acemice görünüyordu.",
              "Matematik; Fizik, Kimya ve Biyoloji derslerinden daha çok ilgimi çekiyor.",
              "İzmir, İstanbul, Ankara ve Bursa'dan daha sıcak bir iklime sahiptir."
            ],
            "correctIndex": 3,
            "explanation": "Özneden sonra normal virgül konursa, özne diğer eş görevli kelimelerle karışabilir. Bu karışıklığı önlemek için özneden hemen sonra noktalı virgül kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Özneden Sonra Karışıklığı Önleme' kuralı doğru uygulanmıştır?",
            "options": [
              "Ahmet, Ali, Veli ve Hasan'dan daha çalışkan bir öğrencidir.",
              "Roman, hikaye, masal ve tiyatroya göre daha uzun soluklu bir türdür.",
              "Yeni usul şiirimiz, zevksiz, köksüz, acemice görünüyordu.",
              "Zeynep; Elif, Merve ve Duru ile kütüphanede buluşacaktı."
            ],
            "correctIndex": 3,
            "explanation": "Özneden sonra normal virgül konursa, özne diğer eş görevli kelimelerle karışabilir. Bu karışıklığı önlemek için özneden hemen sonra noktalı virgül kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Matematik, Fizik, Kimya ve Biyoloji derslerinden daha çok ilgimi çekiyor.",
              "İzmir; İstanbul, Ankara ve Bursa'dan daha sıcak bir iklime sahiptir.",
              "Zeynep; Elif, Merve ve Duru ile kütüphanede buluşacaktı.",
              "Yeni usul şiirimiz; zevksiz, köksüz, acemice görünüyordu."
            ],
            "correctIndex": 0,
            "explanation": "Özneden sonra normal virgül konursa, özne diğer eş görevli kelimelerle karışabilir. Bu karışıklığı önlemek için özneden hemen sonra noktalı virgül kullanılır."
          }
        ]
      }
    ]
  },
  {
    "id": "soru-isareti",
    "symbol": "?",
    "name": "Soru İşareti",
    "color": "#ec4899",
    "description": "Soru bildiren cümlelerin sonuna ve kesin olmayan bilgilerin yanına konan soru işareti.",
    "rules": [
      {
        "id": "soru_isareti_r1",
        "title": "Soru Cümleleri",
        "ruleText": "Soru eki veya sözü içeren cümle veya sözlerin sonuna konur.",
        "examples": [
          "Yarın sabah bizimle birlikte kütüphaneye gelecek misin?",
          "Bu güzel kitabı bana hangi arkadaşın hediye etti?",
          "Toplantının ne zaman başlayacağını bilen var mı?",
          "Ankara'dan İstanbul'a hızlı trenle kaç saatte gidiliyor?",
          "Neden dün akşamki doğum günü partisine katılmadın?"
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Soru Cümleleri' kuralı doğru uygulanmıştır?",
            "options": [
              "Neden dün akşamki doğum günü partisine katılmadın,",
              "Yarın sabah bizimle birlikte kütüphaneye gelecek misin?",
              "Bu zor matematik sorusunu nasıl çözdüğünü anlatır mısın;",
              "Bu güzel kitabı bana hangi arkadaşın hediye etti!"
            ],
            "correctIndex": 1,
            "explanation": "Soru eki (-mı/-mi) veya soru sözcüğü (nasıl, neden, kim, kaç) içeren tüm cümlelerin sonuna soru işareti konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Ankara'dan İstanbul'a hızlı trenle kaç saatte gidiliyor?",
              "Neden dün akşamki doğum günü partisine katılmadın?",
              "Bu güzel kitabı bana hangi arkadaşın hediye etti!",
              "Bu zor matematik sorusunu nasıl çözdüğünü anlatır mısın?"
            ],
            "correctIndex": 2,
            "explanation": "Soru eki (-mı/-mi) veya soru sözcüğü (nasıl, neden, kim, kaç) içeren tüm cümlelerin sonuna soru işareti konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Soru Cümleleri' kuralı doğru uygulanmıştır?",
            "options": [
              "Bu güzel kitabı bana hangi arkadaşın hediye etti!",
              "Toplantının ne zaman başlayacağını bilen var mı?",
              "Ankara'dan İstanbul'a hızlı trenle kaç saatte gidiliyor.",
              "Bu zor matematik sorusunu nasıl çözdüğünü anlatır mısın;"
            ],
            "correctIndex": 1,
            "explanation": "Soru eki (-mı/-mi) veya soru sözcüğü (nasıl, neden, kim, kaç) içeren tüm cümlelerin sonuna soru işareti konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Neden dün akşamki doğum günü partisine katılmadın?",
              "Yarın sabah bizimle birlikte kütüphaneye gelecek misin?",
              "Ankara'dan İstanbul'a hızlı trenle kaç saatte gidiliyor.",
              "Bu zor matematik sorusunu nasıl çözdüğünü anlatır mısın?"
            ],
            "correctIndex": 2,
            "explanation": "Soru eki (-mı/-mi) veya soru sözcüğü (nasıl, neden, kim, kaç) içeren tüm cümlelerin sonuna soru işareti konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Soru Cümleleri' kuralı doğru uygulanmıştır?",
            "options": [
              "Neden dün akşamki doğum günü partisine katılmadın?",
              "Yarın sabah bizimle birlikte kütüphaneye gelecek misin.",
              "Ankara'dan İstanbul'a hızlı trenle kaç saatte gidiliyor.",
              "Bu güzel kitabı bana hangi arkadaşın hediye etti!"
            ],
            "correctIndex": 0,
            "explanation": "Soru eki (-mı/-mi) veya soru sözcüğü (nasıl, neden, kim, kaç) içeren tüm cümlelerin sonuna soru işareti konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Neden dün akşamki doğum günü partisine katılmadın?",
              "Bu zor matematik sorusunu nasıl çözdüğünü anlatır mısın;",
              "Bu güzel kitabı bana hangi arkadaşın hediye etti?",
              "Ankara'dan İstanbul'a hızlı trenle kaç saatte gidiliyor?"
            ],
            "correctIndex": 1,
            "explanation": "Soru eki (-mı/-mi) veya soru sözcüğü (nasıl, neden, kim, kaç) içeren tüm cümlelerin sonuna soru işareti konur."
          }
        ]
      },
      {
        "id": "soru_isareti_r2",
        "title": "Sözsüz Soru Bildirme",
        "ruleText": "Soru bildiren ancak soru eki veya sözü içermeyen cümlelerin sonuna konur.",
        "examples": [
          "Gümrükteki memur başını kaldırdı: — Adınız?",
          "Karşıdaki adam şaşkınlıkla yüzüme baktı: — Yaşınız?",
          "Polis memuru ehliyeti inceledikten sonra sordu: — Memleketiniz?",
          "Danışmadaki görevli formu uzatarak fısıldadı: — Doğum yeriniz?",
          "Kütüphaneci kimliğimi kontrol ederken sordu: — Okul numaranız?"
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Sözsüz Soru Bildirme' kuralı doğru uygulanmıştır?",
            "options": [
              "Polis memuru ehliyeti inceledikten sonra sordu: — Memleketiniz.",
              "Danışmadaki görevli formu uzatarak fısıldadı: — Doğum yeriniz.",
              "Gümrükteki memur başını kaldırdı: — Adınız?",
              "Kütüphaneci kimliğimi kontrol ederken sordu: — Okul numaranız."
            ],
            "correctIndex": 2,
            "explanation": "Soru sözcüğü kullanılmasa da sadece vurgu ve tonlama ile soru anlamı kazanan tek kelimelik ifadelerin sonuna da soru işareti yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Sınıfa giren nöbetçi öğrenci bağırdı: — Sınıf başkanı?",
              "Kütüphaneci kimliğimi kontrol ederken sordu: — Okul numaranız?",
              "Karşıdaki adam şaşkınlıkla yüzüme baktı: — Yaşınız!",
              "Danışmadaki görevli formu uzatarak fısıldadı: — Doğum yeriniz?"
            ],
            "correctIndex": 2,
            "explanation": "Soru sözcüğü kullanılmasa da sadece vurgu ve tonlama ile soru anlamı kazanan tek kelimelik ifadelerin sonuna da soru işareti yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Sözsüz Soru Bildirme' kuralı doğru uygulanmıştır?",
            "options": [
              "Polis memuru ehliyeti inceledikten sonra sordu: — Memleketiniz?",
              "Danışmadaki görevli formu uzatarak fısıldadı: — Doğum yeriniz.",
              "Kütüphaneci kimliğimi kontrol ederken sordu: — Okul numaranız.",
              "Gümrükteki memur başını kaldırdı: — Adınız."
            ],
            "correctIndex": 0,
            "explanation": "Soru sözcüğü kullanılmasa da sadece vurgu ve tonlama ile soru anlamı kazanan tek kelimelik ifadelerin sonuna da soru işareti yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Danışmadaki görevli formu uzatarak fısıldadı: — Doğum yeriniz.",
              "Sınıfa giren nöbetçi öğrenci bağırdı: — Sınıf başkanı?",
              "Polis memuru ehliyeti inceledikten sonra sordu: — Memleketiniz?",
              "Kütüphaneci kimliğimi kontrol ederken sordu: — Okul numaranız?"
            ],
            "correctIndex": 0,
            "explanation": "Soru sözcüğü kullanılmasa da sadece vurgu ve tonlama ile soru anlamı kazanan tek kelimelik ifadelerin sonuna da soru işareti yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Sözsüz Soru Bildirme' kuralı doğru uygulanmıştır?",
            "options": [
              "Sınıfa giren nöbetçi öğrenci bağırdı: — Sınıf başkanı.",
              "Karşıdaki adam şaşkınlıkla yüzüme baktı: — Yaşınız!",
              "Kütüphaneci kimliğimi kontrol ederken sordu: — Okul numaranız?",
              "Polis memuru ehliyeti inceledikten sonra sordu: — Memleketiniz."
            ],
            "correctIndex": 2,
            "explanation": "Soru sözcüğü kullanılmasa da sadece vurgu ve tonlama ile soru anlamı kazanan tek kelimelik ifadelerin sonuna da soru işareti yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Sınıfa giren nöbetçi öğrenci bağırdı: — Sınıf başkanı.",
              "Gümrükteki memur başını kaldırdı: — Adınız?",
              "Polis memuru ehliyeti inceledikten sonra sordu: — Memleketiniz?",
              "Danışmadaki görevli formu uzatarak fısıldadı: — Doğum yeriniz?"
            ],
            "correctIndex": 0,
            "explanation": "Soru sözcüğü kullanılmasa da sadece vurgu ve tonlama ile soru anlamı kazanan tek kelimelik ifadelerin sonuna da soru işareti yerleştirilir."
          }
        ]
      },
      {
        "id": "soru_isareti_r3",
        "title": "Şüpheli / Bilinmeyen Bilgiler",
        "ruleText": "Bilinmeyen, kesin olmayan veya şüpheyle karşılanan yer, tarih vb. durumlar için kullanılır.",
        "examples": [
          "Yunus Emre (1240?-1320) Eskişehir'de dünyaya gelmiştir.",
          "Fuzuli (? - 1556) Kerbela'da vefat etmiştir.",
          "Dün akşam Ankara'dan yola çıkıp Konya'ya 2 saatte (?) varmış.",
          "Ünlü şairin 1490 (?) yılında Tebriz'de doğduğu tahmin ediliyor.",
          "Bu belgenin 1350 (?) yılında yazıldığı düşünülmektedir."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Şüpheli / Bilinmeyen Bilgiler' kuralı doğru uygulanmıştır?",
            "options": [
              "Dün akşam Ankara'dan yola çıkıp Konya'ya 2 saatte (!) varmış.",
              "Bu belgenin 1350 (;) yılında yazıldığı düşünülmektedir.",
              "Kardeşimin arkadaşı dün 5 saat (!) boyunca ders çalışmış.",
              "Yunus Emre (1240?-1320) Eskişehir'de dünyaya gelmiştir."
            ],
            "correctIndex": 3,
            "explanation": "Kesin olmayan, şüpheli veya doğruluğu tam olarak kanıtlanmamış bilgilerin yanına parantez içinde (?) soru işareti yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Yunus Emre (1240?-1320) Eskişehir'de dünyaya gelmiştir.",
              "Bu belgenin 1350 (?) yılında yazıldığı düşünülmektedir.",
              "Fuzuli (. - 1556) Kerbela'da vefat etmiştir.",
              "Kardeşimin arkadaşı dün 5 saat (?) boyunca ders çalışmış."
            ],
            "correctIndex": 2,
            "explanation": "Kesin olmayan, şüpheli veya doğruluğu tam olarak kanıtlanmamış bilgilerin yanına parantez içinde (?) soru işareti yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Şüpheli / Bilinmeyen Bilgiler' kuralı doğru uygulanmıştır?",
            "options": [
              "Dün akşam Ankara'dan yola çıkıp Konya'ya 2 saatte (?) varmış.",
              "Fuzuli (. - 1556) Kerbela'da vefat etmiştir.",
              "Bu belgenin 1350 (;) yılında yazıldığı düşünülmektedir.",
              "Yunus Emre (1240!-1320) Eskişehir'de dünyaya gelmiştir."
            ],
            "correctIndex": 0,
            "explanation": "Kesin olmayan, şüpheli veya doğruluğu tam olarak kanıtlanmamış bilgilerin yanına parantez içinde (?) soru işareti yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Dün akşam Ankara'dan yola çıkıp Konya'ya 2 saatte (?) varmış.",
              "Bu belgenin 1350 (?) yılında yazıldığı düşünülmektedir.",
              "Kardeşimin arkadaşı dün 5 saat (?) boyunca ders çalışmış.",
              "Ünlü şairin 1490 (.) yılında Tebriz'de doğduğu tahmin ediliyor."
            ],
            "correctIndex": 3,
            "explanation": "Kesin olmayan, şüpheli veya doğruluğu tam olarak kanıtlanmamış bilgilerin yanına parantez içinde (?) soru işareti yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Şüpheli / Bilinmeyen Bilgiler' kuralı doğru uygulanmıştır?",
            "options": [
              "Dün akşam Ankara'dan yola çıkıp Konya'ya 2 saatte (!) varmış.",
              "Kardeşimin arkadaşı dün 5 saat (!) boyunca ders çalışmış.",
              "Ünlü şairin 1490 (.) yılında Tebriz'de doğduğu tahmin ediliyor.",
              "Bu belgenin 1350 (?) yılında yazıldığı düşünülmektedir."
            ],
            "correctIndex": 3,
            "explanation": "Kesin olmayan, şüpheli veya doğruluğu tam olarak kanıtlanmamış bilgilerin yanına parantez içinde (?) soru işareti yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Dün akşam Ankara'dan yola çıkıp Konya'ya 2 saatte (?) varmış.",
              "Yunus Emre (1240?-1320) Eskişehir'de dünyaya gelmiştir.",
              "Fuzuli (? - 1556) Kerbela'da vefat etmiştir.",
              "Kardeşimin arkadaşı dün 5 saat (!) boyunca ders çalışmış."
            ],
            "correctIndex": 3,
            "explanation": "Kesin olmayan, şüpheli veya doğruluğu tam olarak kanıtlanmamış bilgilerin yanına parantez içinde (?) soru işareti yerleştirilir."
          }
        ]
      }
    ]
  },
  {
    "id": "unlem-isareti",
    "symbol": "!",
    "name": "Ünlem İşareti",
    "color": "#ef4444",
    "description": "Sevinç, korku, heyecan gibi coşkulu duyguları ve hitapları belirtmek için kullanılan ünlem işareti.",
    "rules": [
      {
        "id": "unlem_isareti_r1",
        "title": "Duygu Belirtme",
        "ruleText": "Sevinç, kıvanç, acı, korku, şaşma gibi duyguları anlatan cümlelerin sonuna konur.",
        "examples": [
          "Aşk olsun, bu ne büyük bir vefasızlık!",
          "Eyvah, ocaktaki yemeği kapatmayı unuttum!",
          "Yaşasın, sınavı birincilikle kazanmışım!",
          "Ne kadar da güzel bir gün, hayran kaldım!",
          "Aman Tanrım, bu ne korkunç bir gürültü!"
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Duygu Belirtme' kuralı doğru uygulanmıştır?",
            "options": [
              "Eyvah, ocaktaki yemeği kapatmayı unuttum?",
              "Yazık, zavallı kedi sokakta aç kalmış.",
              "Aşk olsun, bu ne büyük bir vefasızlık!",
              "Aman Tanrım, bu ne korkunç bir gürültü?"
            ],
            "correctIndex": 2,
            "explanation": "İçinde ani ve coşkulu bir duygu (şaşırma, sevinç, acı, korku vb.) barındıran cümlelerin sonuna ünlem işareti konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Eyvah, ocaktaki yemeği kapatmayı unuttum?",
              "Yaşasın, sınavı birincilikle kazanmışım!",
              "Ne kadar da güzel bir gün, hayran kaldım!",
              "Aşk olsun, bu ne büyük bir vefasızlık!"
            ],
            "correctIndex": 0,
            "explanation": "İçinde ani ve coşkulu bir duygu (şaşırma, sevinç, acı, korku vb.) barındıran cümlelerin sonuna ünlem işareti konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Duygu Belirtme' kuralı doğru uygulanmıştır?",
            "options": [
              "Eyvah, ocaktaki yemeği kapatmayı unuttum?",
              "Yaşasın, sınavı birincilikle kazanmışım!",
              "Yazık, zavallı kedi sokakta aç kalmış.",
              "Ne kadar da güzel bir gün, hayran kaldım;"
            ],
            "correctIndex": 1,
            "explanation": "İçinde ani ve coşkulu bir duygu (şaşırma, sevinç, acı, korku vb.) barındıran cümlelerin sonuna ünlem işareti konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Eyvah, ocaktaki yemeği kapatmayı unuttum!",
              "Ne kadar da güzel bir gün, hayran kaldım;",
              "Yazık, zavallı kedi sokakta aç kalmış!",
              "Aşk olsun, bu ne büyük bir vefasızlık!"
            ],
            "correctIndex": 1,
            "explanation": "İçinde ani ve coşkulu bir duygu (şaşırma, sevinç, acı, korku vb.) barındıran cümlelerin sonuna ünlem işareti konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Duygu Belirtme' kuralı doğru uygulanmıştır?",
            "options": [
              "Aman Tanrım, bu ne korkunç bir gürültü!",
              "Ne kadar da güzel bir gün, hayran kaldım;",
              "Eyvah, ocaktaki yemeği kapatmayı unuttum?",
              "Aşk olsun, bu ne büyük bir vefasızlık."
            ],
            "correctIndex": 0,
            "explanation": "İçinde ani ve coşkulu bir duygu (şaşırma, sevinç, acı, korku vb.) barındıran cümlelerin sonuna ünlem işareti konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Aman Tanrım, bu ne korkunç bir gürültü!",
              "Yaşasın, sınavı birincilikle kazanmışım!",
              "Ne kadar da güzel bir gün, hayran kaldım!",
              "Yazık, zavallı kedi sokakta aç kalmış."
            ],
            "correctIndex": 3,
            "explanation": "İçinde ani ve coşkulu bir duygu (şaşırma, sevinç, acı, korku vb.) barındıran cümlelerin sonuna ünlem işareti konur."
          }
        ]
      },
      {
        "id": "unlem_isareti_r2",
        "title": "Hitap ve Seslenmeler",
        "ruleText": "Seslenme, hitap ve uyarı sözlerinden sonra konur.",
        "examples": [
          "Ordular! İlk hedefiniz Akdeniz'dir, ileri!",
          "Hey arkadaşlar! Lütfen biraz beni dinler misiniz?",
          "Ey Türk gençliği! Birinci vazifen, Türk istiklalini korumaktır.",
          "Dur yolcu! Bilmeden gelip bastığın bu toprak bir devrin battığı yerdir.",
          "Sakın buraya bir daha adım atma!"
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Hitap ve Seslenmeler' kuralı doğru uygulanmıştır?",
            "options": [
              "Ordular! İlk hedefiniz Akdeniz'dir, ileri!",
              "Ey Türk gençliği. Birinci vazifen, Türk istiklalini korumaktır.",
              "Aman dikkat et, yerler çok kaygan.",
              "Hey arkadaşlar, Lütfen biraz beni dinler misiniz?"
            ],
            "correctIndex": 0,
            "explanation": "Uyarılarda, yüksek sesli seslenmelerde ve hitap sözcüklerinin hemen arkasında (veya cümlenin en sonunda) ünlem işareti kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Ey Türk gençliği! Birinci vazifen, Türk istiklalini korumaktır.",
              "Sakın buraya bir daha adım atma!",
              "Hey arkadaşlar, Lütfen biraz beni dinler misiniz?",
              "Dur yolcu! Bilmeden gelip bastığın bu toprak bir devrin battığı yerdir."
            ],
            "correctIndex": 2,
            "explanation": "Uyarılarda, yüksek sesli seslenmelerde ve hitap sözcüklerinin hemen arkasında (veya cümlenin en sonunda) ünlem işareti kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Hitap ve Seslenmeler' kuralı doğru uygulanmıştır?",
            "options": [
              "Ey Türk gençliği! Birinci vazifen, Türk istiklalini korumaktır.",
              "Sakın buraya bir daha adım atma.",
              "Ordular. İlk hedefiniz Akdeniz'dir, ileri.",
              "Aman dikkat et, yerler çok kaygan."
            ],
            "correctIndex": 0,
            "explanation": "Uyarılarda, yüksek sesli seslenmelerde ve hitap sözcüklerinin hemen arkasında (veya cümlenin en sonunda) ünlem işareti kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Sakın buraya bir daha adım atma!",
              "Aman dikkat et, yerler çok kaygan!",
              "Dur yolcu, Bilmeden gelip bastığın bu toprak bir devrin battığı yerdir.",
              "Ey Türk gençliği! Birinci vazifen, Türk istiklalini korumaktır."
            ],
            "correctIndex": 2,
            "explanation": "Uyarılarda, yüksek sesli seslenmelerde ve hitap sözcüklerinin hemen arkasında (veya cümlenin en sonunda) ünlem işareti kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Hitap ve Seslenmeler' kuralı doğru uygulanmıştır?",
            "options": [
              "Aman dikkat et, yerler çok kaygan.",
              "Ey Türk gençliği. Birinci vazifen, Türk istiklalini korumaktır.",
              "Ordular. İlk hedefiniz Akdeniz'dir, ileri.",
              "Sakın buraya bir daha adım atma!"
            ],
            "correctIndex": 3,
            "explanation": "Uyarılarda, yüksek sesli seslenmelerde ve hitap sözcüklerinin hemen arkasında (veya cümlenin en sonunda) ünlem işareti kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Ey Türk gençliği! Birinci vazifen, Türk istiklalini korumaktır.",
              "Sakın buraya bir daha adım atma!",
              "Aman dikkat et, yerler çok kaygan.",
              "Hey arkadaşlar! Lütfen biraz beni dinler misiniz?"
            ],
            "correctIndex": 2,
            "explanation": "Uyarılarda, yüksek sesli seslenmelerde ve hitap sözcüklerinin hemen arkasında (veya cümlenin en sonunda) ünlem işareti kullanılır."
          }
        ]
      },
      {
        "id": "unlem_isareti_r3",
        "title": "Alay ve Kinaye (Parantez İçi)",
        "ruleText": "Alay, kinaye veya küçümseme anlamı kazandırılmak istenen sözden hemen sonra yay ayraç içinde ünlem işareti kullanılır.",
        "examples": [
          "Onun ne kadar zeki (!) olduğunu herkes çok iyi biliyor.",
          "Çok çalışkan (!) bir öğrenci olduğu için ödevlerini hiç yapmaz.",
          "Kendi ifadesine göre çok dürüst (!) bir insanmış.",
          "Bu hızla gidersek yarın sabah (!) ancak varırız.",
          "O kadar cesur (!) ki karanlık odada yalnız yatamıyor."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Alay ve Kinaye (Parantez İçi)' kuralı doğru uygulanmıştır?",
            "options": [
              "O kadar cesur (.) ki karanlık odada yalnız yatamıyor.",
              "Onun ne kadar zeki (!) olduğunu herkes çok iyi biliyor.",
              "Bu hızla gidersek yarın sabah (?) ancak varırız.",
              "Bize yardım edecek cömert (?) bir arkadaşımız var."
            ],
            "correctIndex": 1,
            "explanation": "Söylenen sözün tam tersinin kastedildiğini (alay, kinaye, ironi) belirtmek için parantez içinde (!) ünlem işareti yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Kendi ifadesine göre çok dürüst (!) bir insanmış.",
              "Onun ne kadar zeki (!) olduğunu herkes çok iyi biliyor.",
              "Bu hızla gidersek yarın sabah (!) ancak varırız.",
              "Çok çalışkan (?) bir öğrenci olduğu için ödevlerini hiç yapmaz."
            ],
            "correctIndex": 3,
            "explanation": "Söylenen sözün tam tersinin kastedildiğini (alay, kinaye, ironi) belirtmek için parantez içinde (!) ünlem işareti yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Alay ve Kinaye (Parantez İçi)' kuralı doğru uygulanmıştır?",
            "options": [
              "Kendi ifadesine göre çok dürüst (!) bir insanmış.",
              "Çok çalışkan (?) bir öğrenci olduğu için ödevlerini hiç yapmaz.",
              "Bize yardım edecek cömert (?) bir arkadaşımız var.",
              "Onun ne kadar zeki (?) olduğunu herkes çok iyi biliyor."
            ],
            "correctIndex": 0,
            "explanation": "Söylenen sözün tam tersinin kastedildiğini (alay, kinaye, ironi) belirtmek için parantez içinde (!) ünlem işareti yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Bu hızla gidersek yarın sabah (?) ancak varırız.",
              "Çok çalışkan (!) bir öğrenci olduğu için ödevlerini hiç yapmaz.",
              "Onun ne kadar zeki (!) olduğunu herkes çok iyi biliyor.",
              "Bize yardım edecek cömert (!) bir arkadaşımız var."
            ],
            "correctIndex": 0,
            "explanation": "Söylenen sözün tam tersinin kastedildiğini (alay, kinaye, ironi) belirtmek için parantez içinde (!) ünlem işareti yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Alay ve Kinaye (Parantez İçi)' kuralı doğru uygulanmıştır?",
            "options": [
              "O kadar cesur (!) ki karanlık odada yalnız yatamıyor.",
              "Çok çalışkan (?) bir öğrenci olduğu için ödevlerini hiç yapmaz.",
              "Bize yardım edecek cömert (?) bir arkadaşımız var.",
              "Kendi ifadesine göre çok dürüst (.) bir insanmış."
            ],
            "correctIndex": 0,
            "explanation": "Söylenen sözün tam tersinin kastedildiğini (alay, kinaye, ironi) belirtmek için parantez içinde (!) ünlem işareti yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Bu hızla gidersek yarın sabah (!) ancak varırız.",
              "O kadar cesur (!) ki karanlık odada yalnız yatamıyor.",
              "Bize yardım edecek cömert (?) bir arkadaşımız var.",
              "Onun ne kadar zeki (!) olduğunu herkes çok iyi biliyor."
            ],
            "correctIndex": 2,
            "explanation": "Söylenen sözün tam tersinin kastedildiğini (alay, kinaye, ironi) belirtmek için parantez içinde (!) ünlem işareti yerleştirilir."
          }
        ]
      }
    ]
  },
  {
    "id": "uc-nokta",
    "symbol": "...",
    "name": "Üç Nokta",
    "color": "#06b6d4",
    "description": "Tamamlanmamış cümleleri, kesintileri veya alıntı atlamalarını gösteren yan yana üç nokta.",
    "rules": [
      {
        "id": "uc_nokta_r1",
        "title": "Tamamlanmamış Cümleler",
        "ruleText": "Anlatım olarak tamamlanmamış (yüklemi olmayan) cümlelerin sonuna konur.",
        "examples": [
          "Karşımızda uzanan masmavi bir deniz ve yemyeşil ağaçlar...",
          "Elimizde bavullar, içimizde tatlı bir telaş ve büyük bir umut...",
          "Sıcak bir yaz günü, gölgede hafif tatlı esen bir rüzgar...",
          "Kafasında çözülmeyi bekleyen yüzlerce deli soru...",
          "Yolun sonunda bizi bekleyen eski ve yıkık dökük bir kulübe..."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Tamamlanmamış Cümleler' kuralı doğru uygulanmıştır?",
            "options": [
              "Kafasında çözülmeyi bekleyen yüzlerce deli soru.",
              "Sınıfta derin bir sessizlik ve gözlerini bana dikmiş öğrenciler.",
              "Karşımızda uzanan masmavi bir deniz ve yemyeşil ağaçlar...",
              "Elimizde bavullar, içimizde tatlı bir telaş ve büyük bir umut."
            ],
            "correctIndex": 2,
            "explanation": "Eksiltili (yüklemsiz) cümlelerin sonunun okuyucu tarafından tamamlanması beklendiği için sonuna üç nokta konur; tek nokta konamaz."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Elimizde bavullar, içimizde tatlı bir telaş ve büyük bir umut.",
              "Sınıfta derin bir sessizlik ve gözlerini bana dikmiş öğrenciler...",
              "Sıcak bir yaz günü, gölgede hafif tatlı esen bir rüzgar...",
              "Karşımızda uzanan masmavi bir deniz ve yemyeşil ağaçlar..."
            ],
            "correctIndex": 0,
            "explanation": "Eksiltili (yüklemsiz) cümlelerin sonunun okuyucu tarafından tamamlanması beklendiği için sonuna üç nokta konur; tek nokta konamaz."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Tamamlanmamış Cümleler' kuralı doğru uygulanmıştır?",
            "options": [
              "Sınıfta derin bir sessizlik ve gözlerini bana dikmiş öğrenciler.",
              "Kafasında çözülmeyi bekleyen yüzlerce deli soru.",
              "Sıcak bir yaz günü, gölgede hafif tatlı esen bir rüzgar...",
              "Yolun sonunda bizi bekleyen eski ve yıkık dökük bir kulübe."
            ],
            "correctIndex": 2,
            "explanation": "Eksiltili (yüklemsiz) cümlelerin sonunun okuyucu tarafından tamamlanması beklendiği için sonuna üç nokta konur; tek nokta konamaz."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Yolun sonunda bizi bekleyen eski ve yıkık dökük bir kulübe...",
              "Kafasında çözülmeyi bekleyen yüzlerce deli soru.",
              "Sıcak bir yaz günü, gölgede hafif tatlı esen bir rüzgar...",
              "Karşımızda uzanan masmavi bir deniz ve yemyeşil ağaçlar..."
            ],
            "correctIndex": 1,
            "explanation": "Eksiltili (yüklemsiz) cümlelerin sonunun okuyucu tarafından tamamlanması beklendiği için sonuna üç nokta konur; tek nokta konamaz."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Tamamlanmamış Cümleler' kuralı doğru uygulanmıştır?",
            "options": [
              "Yolun sonunda bizi bekleyen eski ve yıkık dökük bir kulübe...",
              "Karşımızda uzanan masmavi bir deniz ve yemyeşil ağaçlar.",
              "Sıcak bir yaz günü, gölgede hafif tatlı esen bir rüzgar.",
              "Kafasında çözülmeyi bekleyen yüzlerce deli soru."
            ],
            "correctIndex": 0,
            "explanation": "Eksiltili (yüklemsiz) cümlelerin sonunun okuyucu tarafından tamamlanması beklendiği için sonuna üç nokta konur; tek nokta konamaz."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Yolun sonunda bizi bekleyen eski ve yıkık dökük bir kulübe...",
              "Elimizde bavullar, içimizde tatlı bir telaş ve büyük bir umut...",
              "Karşımızda uzanan masmavi bir deniz ve yemyeşil ağaçlar...",
              "Sınıfta derin bir sessizlik ve gözlerini bana dikmiş öğrenciler."
            ],
            "correctIndex": 3,
            "explanation": "Eksiltili (yüklemsiz) cümlelerin sonunun okuyucu tarafından tamamlanması beklendiği için sonuna üç nokta konur; tek nokta konamaz."
          }
        ]
      },
      {
        "id": "uc_nokta_r2",
        "title": "Açıklanmak İstenmeyen Kelimeler",
        "ruleText": "Kaba sayıldığı için veya bir başka sebepten dolayı açıklanmak istenmeyen kelime ve bölümlerin yerine konur.",
        "examples": [
          "Kılavuzu karga olanın burnu b...tan çıkmaz.",
          "Olayın faili olan A... dün mahkemece tutuklandı.",
          "Bu sırlar sadece B... kasabasında konuşulur.",
          "Bütün suçlamaları K... adlı şahıs üstlendi.",
          "Bize yardım eden gizemli hayırsever M... adında biriymiş."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Açıklanmak İstenmeyen Kelimeler' kuralı doğru uygulanmıştır?",
            "options": [
              "Kılavuzu karga olanın burnu b...tan çıkmaz.",
              "Şüpheli araç dün gece Ş- mahallesinde görüldü.",
              "Bize yardım eden gizemli hayırsever M- adında biriymiş.",
              "Olayın faili olan A- dün mahkemece tutuklandı."
            ],
            "correctIndex": 0,
            "explanation": "Kaba, argo sözlerin veya isim/yer gizlemelerinde sansürlenen harfin ardına üç nokta konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Bize yardım eden gizemli hayırsever M... adında biriymiş.",
              "Olayın faili olan A- dün mahkemece tutuklandı.",
              "Şüpheli araç dün gece Ş... mahallesinde görüldü.",
              "Bütün suçlamaları K... adlı şahıs üstlendi."
            ],
            "correctIndex": 1,
            "explanation": "Kaba, argo sözlerin veya isim/yer gizlemelerinde sansürlenen harfin ardına üç nokta konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Açıklanmak İstenmeyen Kelimeler' kuralı doğru uygulanmıştır?",
            "options": [
              "Olayın faili olan A- dün mahkemece tutuklandı.",
              "Bize yardım eden gizemli hayırsever M- adında biriymiş.",
              "Şüpheli araç dün gece Ş- mahallesinde görüldü.",
              "Bu sırlar sadece B... kasabasında konuşulur."
            ],
            "correctIndex": 3,
            "explanation": "Kaba, argo sözlerin veya isim/yer gizlemelerinde sansürlenen harfin ardına üç nokta konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Bize yardım eden gizemli hayırsever M... adında biriymiş.",
              "Bütün suçlamaları K- adlı şahıs üstlendi.",
              "Şüpheli araç dün gece Ş... mahallesinde görüldü.",
              "Olayın faili olan A... dün mahkemece tutuklandı."
            ],
            "correctIndex": 1,
            "explanation": "Kaba, argo sözlerin veya isim/yer gizlemelerinde sansürlenen harfin ardına üç nokta konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Açıklanmak İstenmeyen Kelimeler' kuralı doğru uygulanmıştır?",
            "options": [
              "Şüpheli araç dün gece Ş- mahallesinde görüldü.",
              "Bize yardım eden gizemli hayırsever M... adında biriymiş.",
              "Bu sırlar sadece B- kasabasında konuşulur.",
              "Kılavuzu karga olanın burnu b-tan çıkmaz."
            ],
            "correctIndex": 1,
            "explanation": "Kaba, argo sözlerin veya isim/yer gizlemelerinde sansürlenen harfin ardına üç nokta konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Bize yardım eden gizemli hayırsever M... adında biriymiş.",
              "Şüpheli araç dün gece Ş- mahallesinde görüldü.",
              "Bütün suçlamaları K... adlı şahıs üstlendi.",
              "Kılavuzu karga olanın burnu b...tan çıkmaz."
            ],
            "correctIndex": 1,
            "explanation": "Kaba, argo sözlerin veya isim/yer gizlemelerinde sansürlenen harfin ardına üç nokta konur."
          }
        ]
      },
      {
        "id": "uc_nokta_r3",
        "title": "Alıntılarda Atlama",
        "ruleText": "Alıntılarda başta, ortada ve sonda alınmayan kelime veya bölümlerin yerine konur.",
        "examples": [
          "... derken bir de baktım ki her yer bembeyaz karlarla kaplanmış.",
          "Edebiyatımızda en önemli akım ... hececiler tarafından temsil edilir.",
          "Atatürk Nutuk'ta şöyle der: ... Ey Türk gençliği!",
          "Biz bu yolda yürürken ... geride bıraktıklarımızı hiç unutmadık.",
          "... kitabın son sayfasına geldiğimde derin bir vicdan azabı duydum."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Alıntılarda Atlama' kuralı doğru uygulanmıştır?",
            "options": [
              "Rüzgar sert esiyordu - dalgalar sahili dövmeye başladı.",
              "... derken bir de baktım ki her yer bembeyaz karlarla kaplanmış.",
              "Biz bu yolda yürürken - geride bıraktıklarımızı hiç unutmadık.",
              "Edebiyatımızda en önemli akım - hececiler tarafından temsil edilir."
            ],
            "correctIndex": 1,
            "explanation": "Uzun metinlerden yapılan alıntılarda atlanan, kesilen bölümleri belirtmek amacıyla üç nokta kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Atatürk Nutuk'ta şöyle der: ... Ey Türk gençliği!",
              "Biz bu yolda yürürken ... geride bıraktıklarımızı hiç unutmadık.",
              "Edebiyatımızda en önemli akım - hececiler tarafından temsil edilir.",
              "... derken bir de baktım ki her yer bembeyaz karlarla kaplanmış."
            ],
            "correctIndex": 2,
            "explanation": "Uzun metinlerden yapılan alıntılarda atlanan, kesilen bölümleri belirtmek amacıyla üç nokta kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Alıntılarda Atlama' kuralı doğru uygulanmıştır?",
            "options": [
              "- derken bir de baktım ki her yer bembeyaz karlarla kaplanmış.",
              "Rüzgar sert esiyordu - dalgalar sahili dövmeye başladı.",
              "Atatürk Nutuk'ta şöyle der: ... Ey Türk gençliği!",
              "Edebiyatımızda en önemli akım - hececiler tarafından temsil edilir."
            ],
            "correctIndex": 2,
            "explanation": "Uzun metinlerden yapılan alıntılarda atlanan, kesilen bölümleri belirtmek amacıyla üç nokta kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Edebiyatımızda en önemli akım ... hececiler tarafından temsil edilir.",
              "... derken bir de baktım ki her yer bembeyaz karlarla kaplanmış.",
              "Atatürk Nutuk'ta şöyle der: ... Ey Türk gençliği!",
              "Biz bu yolda yürürken - geride bıraktıklarımızı hiç unutmadık."
            ],
            "correctIndex": 3,
            "explanation": "Uzun metinlerden yapılan alıntılarda atlanan, kesilen bölümleri belirtmek amacıyla üç nokta kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Alıntılarda Atlama' kuralı doğru uygulanmıştır?",
            "options": [
              "Atatürk Nutuk'ta şöyle der: - Ey Türk gençliği!",
              "Rüzgar sert esiyordu - dalgalar sahili dövmeye başladı.",
              "... kitabın son sayfasına geldiğimde derin bir vicdan azabı duydum.",
              "Edebiyatımızda en önemli akım - hececiler tarafından temsil edilir."
            ],
            "correctIndex": 2,
            "explanation": "Uzun metinlerden yapılan alıntılarda atlanan, kesilen bölümleri belirtmek amacıyla üç nokta kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Atatürk Nutuk'ta şöyle der: ... Ey Türk gençliği!",
              "Rüzgar sert esiyordu - dalgalar sahili dövmeye başladı.",
              "... derken bir de baktım ki her yer bembeyaz karlarla kaplanmış.",
              "Biz bu yolda yürürken ... geride bıraktıklarımızı hiç unutmadık."
            ],
            "correctIndex": 1,
            "explanation": "Uzun metinlerden yapılan alıntılarda atlanan, kesilen bölümleri belirtmek amacıyla üç nokta kullanılır."
          }
        ]
      },
      {
        "id": "uc_nokta_r4",
        "title": "Sözün Kesilmesi / Anlatım Gücü",
        "ruleText": "Sözün bir yerde kesilerek geri kalan bölümünün okuyucunun hayal dünyasına bırakıldığını göstermek veya anlatıma güç kazandırmak için konur.",
        "examples": [
          "Sana uğurlar olsun... Ayrılıyor yolumuz!",
          "Karşımızda koskoca bir ordu ve başlarında ulu komutan...",
          "Gökyüzünde yıldızlar parlıyordu, etrafta çıt çıkmıyordu...",
          "Yıllar geçti, her şey değişti, geriye kalan sadece anılar...",
          "Sessiz çığlıklar yükseliyordu karanlık sokaklardan..."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Sözün Kesilmesi / Anlatım Gücü' kuralı doğru uygulanmıştır?",
            "options": [
              "Karşımızda koskoca bir ordu ve başlarında ulu komutan.",
              "Sana uğurlar olsun... Ayrılıyor yolumuz!",
              "Gökyüzünde yıldızlar parlıyordu, etrafta çıt çıkmıyordu.",
              "Sessiz çığlıklar yükseliyordu karanlık sokaklardan."
            ],
            "correctIndex": 1,
            "explanation": "Şiirsel bir etki yaratmak, anlatıma duygusal derinlik katmak veya cümleyi askıda bırakmak için üç nokta kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Yıllar geçti, her şey değişti, geriye kalan sadece anılar...",
              "Sessiz çığlıklar yükseliyordu karanlık sokaklardan...",
              "Gökyüzünde yıldızlar parlıyordu, etrafta çıt çıkmıyordu...",
              "Karşımızda koskoca bir ordu ve başlarında ulu komutan."
            ],
            "correctIndex": 3,
            "explanation": "Şiirsel bir etki yaratmak, anlatıma duygusal derinlik katmak veya cümleyi askıda bırakmak için üç nokta kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Sözün Kesilmesi / Anlatım Gücü' kuralı doğru uygulanmıştır?",
            "options": [
              "Gökyüzünde yıldızlar parlıyordu, etrafta çıt çıkmıyordu...",
              "Sana uğurlar olsun- Ayrılıyor yolumuz!",
              "Sessiz çığlıklar yükseliyordu karanlık sokaklardan.",
              "Özgürlük, ne muhteşem bir duygu."
            ],
            "correctIndex": 0,
            "explanation": "Şiirsel bir etki yaratmak, anlatıma duygusal derinlik katmak veya cümleyi askıda bırakmak için üç nokta kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Sana uğurlar olsun... Ayrılıyor yolumuz!",
              "Sessiz çığlıklar yükseliyordu karanlık sokaklardan...",
              "Yıllar geçti, her şey değişti, geriye kalan sadece anılar.",
              "Gökyüzünde yıldızlar parlıyordu, etrafta çıt çıkmıyordu..."
            ],
            "correctIndex": 2,
            "explanation": "Şiirsel bir etki yaratmak, anlatıma duygusal derinlik katmak veya cümleyi askıda bırakmak için üç nokta kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Sözün Kesilmesi / Anlatım Gücü' kuralı doğru uygulanmıştır?",
            "options": [
              "Sessiz çığlıklar yükseliyordu karanlık sokaklardan...",
              "Karşımızda koskoca bir ordu ve başlarında ulu komutan.",
              "Sana uğurlar olsun- Ayrılıyor yolumuz!",
              "Gökyüzünde yıldızlar parlıyordu, etrafta çıt çıkmıyordu."
            ],
            "correctIndex": 0,
            "explanation": "Şiirsel bir etki yaratmak, anlatıma duygusal derinlik katmak veya cümleyi askıda bırakmak için üç nokta kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Yıllar geçti, her şey değişti, geriye kalan sadece anılar...",
              "Gökyüzünde yıldızlar parlıyordu, etrafta çıt çıkmıyordu...",
              "Özgürlük, ne muhteşem bir duygu.",
              "Karşımızda koskoca bir ordu ve başlarında ulu komutan..."
            ],
            "correctIndex": 2,
            "explanation": "Şiirsel bir etki yaratmak, anlatıma duygusal derinlik katmak veya cümleyi askıda bırakmak için üç nokta kullanılır."
          }
        ]
      }
    ]
  },
  {
    "id": "tirnak-isareti",
    "symbol": "\"",
    "name": "Tırnak İşareti",
    "color": "#14b8a6",
    "description": "Doğrudan aktarılan sözleri, eser adlarını veya vurgulanmak istenen kelimeleri çevreleyen çift tırnak.",
    "rules": [
      {
        "id": "tirnak_r1",
        "title": "Doğrudan Alıntılar",
        "ruleText": "Başka bir kimseden veya yazıdan olduğu gibi aktarılan sözler tırnak içine alınır.",
        "examples": [
          "Atatürk: \"Hayatta en hakiki mürşit ilimdir.\" diyerek bilimin önemini vurgulamıştır.",
          "Öğretmenimiz sınıfa girip: \"Sınav sonuçları açıklandı.\" dedi.",
          "Babam her zaman: \"Dürüstlük en büyük sermayedir.\" derdi.",
          "Yazar kitabında: \"Zaman akıp giden bir nehirdir.\" ifadesini kullanıyor.",
          "Doktor hastasına: \"İlaçlarınızı düzenli kullanmalısınız.\" uyarısında bulundu."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Doğrudan Alıntılar' kuralı doğru uygulanmıştır?",
            "options": [
              "Babam her zaman: Dürüstlük en büyük sermayedir. derdi.",
              "Arkadaşım heyecanla: Yarın pikniğe gidiyoruz! diye bağırdı.",
              "Atatürk: \"Hayatta en hakiki mürşit ilimdir.\" diyerek bilimin önemini vurgulamıştır.",
              "Doktor hastasına: İlaçlarınızı düzenli kullanmalısınız. uyarısında bulundu."
            ],
            "correctIndex": 2,
            "explanation": "Başkasına ait bir cümlenin birebir (doğrudan) aktarımında aktarılan söz çift tırnak içine alınmalıdır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Yazar kitabında: \"Zaman akıp giden bir nehirdir.\" ifadesini kullanıyor.",
              "Öğretmenimiz sınıfa girip: Sınav sonuçları açıklandı. dedi.",
              "Doktor hastasına: \"İlaçlarınızı düzenli kullanmalısınız.\" uyarısında bulundu.",
              "Babam her zaman: \"Dürüstlük en büyük sermayedir.\" derdi."
            ],
            "correctIndex": 1,
            "explanation": "Başkasına ait bir cümlenin birebir (doğrudan) aktarımında aktarılan söz çift tırnak içine alınmalıdır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Doğrudan Alıntılar' kuralı doğru uygulanmıştır?",
            "options": [
              "Öğretmenimiz sınıfa girip: Sınav sonuçları açıklandı. dedi.",
              "Babam her zaman: \"Dürüstlük en büyük sermayedir.\" derdi.",
              "Yazar kitabında: Zaman akıp giden bir nehirdir. ifadesini kullanıyor.",
              "Doktor hastasına: İlaçlarınızı düzenli kullanmalısınız. uyarısında bulundu."
            ],
            "correctIndex": 1,
            "explanation": "Başkasına ait bir cümlenin birebir (doğrudan) aktarımında aktarılan söz çift tırnak içine alınmalıdır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Atatürk: \"Hayatta en hakiki mürşit ilimdir.\" diyerek bilimin önemini vurgulamıştır.",
              "Doktor hastasına: \"İlaçlarınızı düzenli kullanmalısınız.\" uyarısında bulundu.",
              "Arkadaşım heyecanla: \"Yarın pikniğe gidiyoruz!\" diye bağırdı.",
              "Yazar kitabında: Zaman akıp giden bir nehirdir. ifadesini kullanıyor."
            ],
            "correctIndex": 3,
            "explanation": "Başkasına ait bir cümlenin birebir (doğrudan) aktarımında aktarılan söz çift tırnak içine alınmalıdır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Doğrudan Alıntılar' kuralı doğru uygulanmıştır?",
            "options": [
              "Arkadaşım heyecanla: Yarın pikniğe gidiyoruz! diye bağırdı.",
              "Atatürk: Hayatta en hakiki mürşit ilimdir. diyerek bilimin önemini vurgulamıştır.",
              "Babam her zaman: Dürüstlük en büyük sermayedir. derdi.",
              "Doktor hastasına: \"İlaçlarınızı düzenli kullanmalısınız.\" uyarısında bulundu."
            ],
            "correctIndex": 3,
            "explanation": "Başkasına ait bir cümlenin birebir (doğrudan) aktarımında aktarılan söz çift tırnak içine alınmalıdır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Atatürk: \"Hayatta en hakiki mürşit ilimdir.\" diyerek bilimin önemini vurgulamıştır.",
              "Arkadaşım heyecanla: Yarın pikniğe gidiyoruz! diye bağırdı.",
              "Yazar kitabında: \"Zaman akıp giden bir nehirdir.\" ifadesini kullanıyor.",
              "Öğretmenimiz sınıfa girip: \"Sınav sonuçları açıklandı.\" dedi."
            ],
            "correctIndex": 1,
            "explanation": "Başkasına ait bir cümlenin birebir (doğrudan) aktarımında aktarılan söz çift tırnak içine alınmalıdır."
          }
        ]
      },
      {
        "id": "tirnak_r2",
        "title": "Özel Vurgulanan Sözler",
        "ruleText": "Özel olarak vurgulanmak istenen sözler tırnak içine alınır.",
        "examples": [
          "Bugünkü dersimizde Türkçe dil bilgisindeki \"özne\" kavramını işleyeceğiz.",
          "Son yıllarda \"yapay zekâ\" teknolojileri büyük bir hızla gelişti.",
          "Kitaptaki \"biyografi\" tanımını defterinize yazınız.",
          "Toplantıda şirketin \"sürdürülebilirlik\" hedefleri masaya yatırıldı.",
          "Tarihte \"milliyetçilik\" akımı imparatorlukların dağılmasında rol oynamıştır."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Özel Vurgulanan Sözler' kuralı doğru uygulanmıştır?",
            "options": [
              "Toplantıda şirketin sürdürülebilirlik hedefleri masaya yatırıldı.",
              "Kitaptaki biyografi tanımını defterinize yazınız.",
              "Bizim için en önemli kural disiplin olarak belirlendi.",
              "Bugünkü dersimizde Türkçe dil bilgisindeki \"özne\" kavramını işleyeceğiz."
            ],
            "correctIndex": 3,
            "explanation": "Cümle içinde özellikle belirtilmek, dikkat çekilmek veya terim olarak kullanılmak istenen kelimeler tırnak içine alınır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Bugünkü dersimizde Türkçe dil bilgisindeki \"özne\" kavramını işleyeceğiz.",
              "Tarihte \"milliyetçilik\" akımı imparatorlukların dağılmasında rol oynamıştır.",
              "Kitaptaki \"biyografi\" tanımını defterinize yazınız.",
              "Son yıllarda yapay zekâ teknolojileri büyük bir hızla gelişti."
            ],
            "correctIndex": 3,
            "explanation": "Cümle içinde özellikle belirtilmek, dikkat çekilmek veya terim olarak kullanılmak istenen kelimeler tırnak içine alınır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Özel Vurgulanan Sözler' kuralı doğru uygulanmıştır?",
            "options": [
              "Toplantıda şirketin sürdürülebilirlik hedefleri masaya yatırıldı.",
              "Kitaptaki \"biyografi\" tanımını defterinize yazınız.",
              "Tarihte milliyetçilik akımı imparatorlukların dağılmasında rol oynamıştır.",
              "Bugünkü dersimizde Türkçe dil bilgisindeki özne kavramını işleyeceğiz."
            ],
            "correctIndex": 1,
            "explanation": "Cümle içinde özellikle belirtilmek, dikkat çekilmek veya terim olarak kullanılmak istenen kelimeler tırnak içine alınır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Toplantıda şirketin sürdürülebilirlik hedefleri masaya yatırıldı.",
              "Kitaptaki \"biyografi\" tanımını defterinize yazınız.",
              "Bugünkü dersimizde Türkçe dil bilgisindeki \"özne\" kavramını işleyeceğiz.",
              "Bizim için en önemli kural \"disiplin\" olarak belirlendi."
            ],
            "correctIndex": 0,
            "explanation": "Cümle içinde özellikle belirtilmek, dikkat çekilmek veya terim olarak kullanılmak istenen kelimeler tırnak içine alınır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Özel Vurgulanan Sözler' kuralı doğru uygulanmıştır?",
            "options": [
              "Bizim için en önemli kural disiplin olarak belirlendi.",
              "Bugünkü dersimizde Türkçe dil bilgisindeki özne kavramını işleyeceğiz.",
              "Tarihte \"milliyetçilik\" akımı imparatorlukların dağılmasında rol oynamıştır.",
              "Kitaptaki biyografi tanımını defterinize yazınız."
            ],
            "correctIndex": 2,
            "explanation": "Cümle içinde özellikle belirtilmek, dikkat çekilmek veya terim olarak kullanılmak istenen kelimeler tırnak içine alınır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Bugünkü dersimizde Türkçe dil bilgisindeki \"özne\" kavramını işleyeceğiz.",
              "Son yıllarda \"yapay zekâ\" teknolojileri büyük bir hızla gelişti.",
              "Kitaptaki \"biyografi\" tanımını defterinize yazınız.",
              "Bizim için en önemli kural disiplin olarak belirlendi."
            ],
            "correctIndex": 3,
            "explanation": "Cümle içinde özellikle belirtilmek, dikkat çekilmek veya terim olarak kullanılmak istenen kelimeler tırnak içine alınır."
          }
        ]
      },
      {
        "id": "tirnak_r3",
        "title": "Eser ve Bölüm Adları",
        "ruleText": "Cümle içerisinde eserlerin ve yazarların adları ile bölüm başlıkları tırnak içine alınır.",
        "examples": [
          "Ömer Seyfettin'in \"Kaşağı\" hikayesini okurken gözyaşlarımı tutamadım.",
          "Reşat Nuri Güntekin'in \"Çalıkuşu\" romanı Türk edebiyatının klasiklerindendir.",
          "Bugün derste \"Yazım Kuralları\" konusunu detaylıca inceledik.",
          "Sabahattin Ali'nin \"Kürk Mantolu Madonna\" eseri çok satanlar listesindedir.",
          "Şinasi'nin yazmış olduğu \"Şair Evlenmesi\" ilk tiyatro oyunumuzdur."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Eser ve Bölüm Adları' kuralı doğru uygulanmıştır?",
            "options": [
              "Bugün derste Yazım Kuralları konusunu detaylıca inceledik.",
              "Şinasi'nin yazmış olduğu Şair Evlenmesi ilk tiyatro oyunumuzdur.",
              "Ömer Seyfettin'in \"Kaşağı\" hikayesini okurken gözyaşlarımı tutamadım.",
              "Derginin bu sayısındaki Girişimcilik ve Gençlik makalesi çok faydalıydı."
            ],
            "correctIndex": 2,
            "explanation": "Cümle içinde geçen kitap isimleri, yazı ve makale başlıkları, bölüm adları tırnak içinde gösterilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Sabahattin Ali'nin \"Kürk Mantolu Madonna\" eseri çok satanlar listesindedir.",
              "Derginin bu sayısındaki \"Girişimcilik ve Gençlik\" makalesi çok faydalıydı.",
              "Şinasi'nin yazmış olduğu \"Şair Evlenmesi\" ilk tiyatro oyunumuzdur.",
              "Reşat Nuri Güntekin'in Çalıkuşu romanı Türk edebiyatının klasiklerindendir."
            ],
            "correctIndex": 3,
            "explanation": "Cümle içinde geçen kitap isimleri, yazı ve makale başlıkları, bölüm adları tırnak içinde gösterilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Eser ve Bölüm Adları' kuralı doğru uygulanmıştır?",
            "options": [
              "Sabahattin Ali'nin Kürk Mantolu Madonna eseri çok satanlar listesindedir.",
              "Ömer Seyfettin'in Kaşağı hikayesini okurken gözyaşlarımı tutamadım.",
              "Reşat Nuri Güntekin'in Çalıkuşu romanı Türk edebiyatının klasiklerindendir.",
              "Bugün derste \"Yazım Kuralları\" konusunu detaylıca inceledik."
            ],
            "correctIndex": 3,
            "explanation": "Cümle içinde geçen kitap isimleri, yazı ve makale başlıkları, bölüm adları tırnak içinde gösterilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Sabahattin Ali'nin Kürk Mantolu Madonna eseri çok satanlar listesindedir.",
              "Derginin bu sayısındaki \"Girişimcilik ve Gençlik\" makalesi çok faydalıydı.",
              "Şinasi'nin yazmış olduğu \"Şair Evlenmesi\" ilk tiyatro oyunumuzdur.",
              "Bugün derste \"Yazım Kuralları\" konusunu detaylıca inceledik."
            ],
            "correctIndex": 0,
            "explanation": "Cümle içinde geçen kitap isimleri, yazı ve makale başlıkları, bölüm adları tırnak içinde gösterilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Eser ve Bölüm Adları' kuralı doğru uygulanmıştır?",
            "options": [
              "Ömer Seyfettin'in Kaşağı hikayesini okurken gözyaşlarımı tutamadım.",
              "Reşat Nuri Güntekin'in Çalıkuşu romanı Türk edebiyatının klasiklerindendir.",
              "Şinasi'nin yazmış olduğu \"Şair Evlenmesi\" ilk tiyatro oyunumuzdur.",
              "Derginin bu sayısındaki Girişimcilik ve Gençlik makalesi çok faydalıydı."
            ],
            "correctIndex": 2,
            "explanation": "Cümle içinde geçen kitap isimleri, yazı ve makale başlıkları, bölüm adları tırnak içinde gösterilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Şinasi'nin yazmış olduğu \"Şair Evlenmesi\" ilk tiyatro oyunumuzdur.",
              "Bugün derste \"Yazım Kuralları\" konusunu detaylıca inceledik.",
              "Derginin bu sayısındaki Girişimcilik ve Gençlik makalesi çok faydalıydı.",
              "Sabahattin Ali'nin \"Kürk Mantolu Madonna\" eseri çok satanlar listesindedir."
            ],
            "correctIndex": 2,
            "explanation": "Cümle içinde geçen kitap isimleri, yazı ve makale başlıkları, bölüm adları tırnak içinde gösterilir."
          }
        ]
      }
    ]
  },
  {
    "id": "tek-tirnak",
    "symbol": "' '",
    "name": "Tek Tırnak İşareti",
    "color": "#20b2aa",
    "description": "Çift tırnak içinde verilmiş aktarımların içerisinde ikinci bir alıntı veya vurgu yapıldığında kullanılan tek tırnak.",
    "rules": [
      {
        "id": "tek_tirnak_r1",
        "title": "Tırnak İçi Vurgulama",
        "ruleText": "Tırnak içinde verilen cümlenin içinde yeniden belirtilmesi gereken bir sözü, ibareyi belirtmek için kullanılır.",
        "examples": [
          "Edebiyat öğretmeni: \"Sınıfta 'Kaşağı' hikayesini okumayan kaldı mı?\" diye sordu.",
          "Babam: \"Bana 'dürüstlük' kelimesinin sözlük anlamını söyler misin?\" dedi.",
          "Yazar: \"Kitabımda 'yapay zekâ' konusunu uzun uzun tartıştım.\" açıklamasında bulundu.",
          "Arkadaşım: \"Bugün derste 'özne' konusunu anlamakta zorlandım.\" dedi.",
          "Şef: \"Yemekte 'baharat' dengesini iyi kurmalıyız.\" uyarısını yaptı."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Tırnak İçi Vurgulama' kuralı doğru uygulanmıştır?",
            "options": [
              "Babam: \"Bana dürüstlük kelimesinin sözlük anlamını söyler misin?\" dedi.",
              "Edebiyat öğretmeni: \"Sınıfta 'Kaşağı' hikayesini okumayan kaldı mı?\" diye sordu.",
              "Kılavuzda: \"Lütfen \"güncelleme\" adımlarını sırayla takip edin.\" yazıyordu.",
              "Şef: \"Yemekte \"baharat\" dengesini iyi kurmalıyız.\" uyarısını yaptı."
            ],
            "correctIndex": 1,
            "explanation": "Çift tırnak içine alınmış bir cümlenin içinde tekrar tırnağa alınması gereken bir isim veya kelime varsa, iç içe çift tırnak karmaşasını önlemek adına tek tırnak kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Yazar: \"Kitabımda 'yapay zekâ' konusunu uzun uzun tartıştım.\" açıklamasında bulundu.",
              "Kılavuzda: \"Lütfen 'güncelleme' adımlarını sırayla takip edin.\" yazıyordu.",
              "Babam: \"Bana dürüstlük kelimesinin sözlük anlamını söyler misin?\" dedi.",
              "Arkadaşım: \"Bugün derste 'özne' konusunu anlamakta zorlandım.\" dedi."
            ],
            "correctIndex": 2,
            "explanation": "Çift tırnak içine alınmış bir cümlenin içinde tekrar tırnağa alınması gereken bir isim veya kelime varsa, iç içe çift tırnak karmaşasını önlemek adına tek tırnak kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Tırnak İçi Vurgulama' kuralı doğru uygulanmıştır?",
            "options": [
              "Kılavuzda: \"Lütfen \"güncelleme\" adımlarını sırayla takip edin.\" yazıyordu.",
              "Yazar: \"Kitabımda 'yapay zekâ' konusunu uzun uzun tartıştım.\" açıklamasında bulundu.",
              "Edebiyat öğretmeni: \"Sınıfta \"Kaşağı\" hikayesini okumayan kaldı mı?\" diye sordu.",
              "Şef: \"Yemekte \"baharat\" dengesini iyi kurmalıyız.\" uyarısını yaptı."
            ],
            "correctIndex": 1,
            "explanation": "Çift tırnak içine alınmış bir cümlenin içinde tekrar tırnağa alınması gereken bir isim veya kelime varsa, iç içe çift tırnak karmaşasını önlemek adına tek tırnak kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Kılavuzda: \"Lütfen 'güncelleme' adımlarını sırayla takip edin.\" yazıyordu.",
              "Arkadaşım: \"Bugün derste \"özne\" konusunu anlamakta zorlandım.\" dedi.",
              "Yazar: \"Kitabımda 'yapay zekâ' konusunu uzun uzun tartıştım.\" açıklamasında bulundu.",
              "Edebiyat öğretmeni: \"Sınıfta 'Kaşağı' hikayesini okumayan kaldı mı?\" diye sordu."
            ],
            "correctIndex": 1,
            "explanation": "Çift tırnak içine alınmış bir cümlenin içinde tekrar tırnağa alınması gereken bir isim veya kelime varsa, iç içe çift tırnak karmaşasını önlemek adına tek tırnak kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Tırnak İçi Vurgulama' kuralı doğru uygulanmıştır?",
            "options": [
              "Babam: \"Bana dürüstlük kelimesinin sözlük anlamını söyler misin?\" dedi.",
              "Edebiyat öğretmeni: \"Sınıfta \"Kaşağı\" hikayesini okumayan kaldı mı?\" diye sordu.",
              "Arkadaşım: \"Bugün derste \"özne\" konusunu anlamakta zorlandım.\" dedi.",
              "Şef: \"Yemekte 'baharat' dengesini iyi kurmalıyız.\" uyarısını yaptı."
            ],
            "correctIndex": 3,
            "explanation": "Çift tırnak içine alınmış bir cümlenin içinde tekrar tırnağa alınması gereken bir isim veya kelime varsa, iç içe çift tırnak karmaşasını önlemek adına tek tırnak kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Arkadaşım: \"Bugün derste 'özne' konusunu anlamakta zorlandım.\" dedi.",
              "Kılavuzda: \"Lütfen \"güncelleme\" adımlarını sırayla takip edin.\" yazıyordu.",
              "Şef: \"Yemekte 'baharat' dengesini iyi kurmalıyız.\" uyarısını yaptı.",
              "Yazar: \"Kitabımda 'yapay zekâ' konusunu uzun uzun tartıştım.\" açıklamasında bulundu."
            ],
            "correctIndex": 1,
            "explanation": "Çift tırnak içine alınmış bir cümlenin içinde tekrar tırnağa alınması gereken bir isim veya kelime varsa, iç içe çift tırnak karmaşasını önlemek adına tek tırnak kullanılır."
          }
        ]
      }
    ]
  },
  {
    "id": "kesme-isareti",
    "symbol": "'",
    "name": "Kesme İşareti",
    "color": "#f43f5e",
    "description": "Özel adlara ve kısaltmalara getirilen çekim eklerini ayırmak için kullanılan üstten virgül.",
    "rules": [
      {
        "id": "kesme_r1",
        "title": "Özel Adlar ve Ekler",
        "ruleText": "Özel adlara getirilen iyelik, durum ve bildirme ekleri kesme işaretiyle ayrılır.",
        "examples": [
          "Atatürk'ün milli mücadele yıllarındaki kararlılığı herkesi etkiledi.",
          "Yarın akşam Ankara'dan gelecek olan misafirlerimizi karşılayacağız.",
          "Biz bu yaz tatilinde Ege Denizi'nin kıyılarını gezmek istiyoruz.",
          "Tarih dersinde Osmanlı Devleti'nin kuruluş dönemini işledik.",
          "Türk dili, Türkçe'nin güzelliğini yansıtan en zengin dillerdendir."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Özel Adlar ve Ekler' kuralı doğru uygulanmıştır?",
            "options": [
              "Atatürk'ün milli mücadele yıllarındaki kararlılığı herkesi etkiledi.",
              "Biz bu yaz tatilinde Ege Denizinin kıyılarını gezmek istiyoruz.",
              "Yarın akşam Ankaradan gelecek olan misafirlerimizi karşılayacağız.",
              "Türk dili, Türkçenin güzelliğini yansıtan en zengin dillerdendir."
            ],
            "correctIndex": 0,
            "explanation": "Özel isimlerin sonuna gelen çekim eklerini (durum, iyelik, yönelme vb.) ayırmak için kesme işareti konur. Yapım ekleri (örn: -li, -çi, -ce) ve bunlardan sonra gelen ekler ayrılmaz."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Atatürk'ün milli mücadele yıllarındaki kararlılığı herkesi etkiledi.",
              "Tarih dersinde Osmanlı Devleti'nin kuruluş dönemini işledik.",
              "Biz bu yaz tatilinde Ege Denizi'nin kıyılarını gezmek istiyoruz.",
              "Yarın akşam Ankaradan gelecek olan misafirlerimizi karşılayacağız."
            ],
            "correctIndex": 3,
            "explanation": "Özel isimlerin sonuna gelen çekim eklerini (durum, iyelik, yönelme vb.) ayırmak için kesme işareti konur. Yapım ekleri (örn: -li, -çi, -ce) ve bunlardan sonra gelen ekler ayrılmaz."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Özel Adlar ve Ekler' kuralı doğru uygulanmıştır?",
            "options": [
              "Tarih dersinde Osmanlı Devletinin kuruluş dönemini işledik.",
              "Türk dili, Türkçenin güzelliğini yansıtan en zengin dillerdendir.",
              "Arkadaşım Ahmetin bugün okula gelmediğini fark ettim.",
              "Biz bu yaz tatilinde Ege Denizi'nin kıyılarını gezmek istiyoruz."
            ],
            "correctIndex": 3,
            "explanation": "Özel isimlerin sonuna gelen çekim eklerini (durum, iyelik, yönelme vb.) ayırmak için kesme işareti konur. Yapım ekleri (örn: -li, -çi, -ce) ve bunlardan sonra gelen ekler ayrılmaz."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Türk dili, Türkçe'nin güzelliğini yansıtan en zengin dillerdendir.",
              "Yarın akşam Ankara'dan gelecek olan misafirlerimizi karşılayacağız.",
              "Tarih dersinde Osmanlı Devletinin kuruluş dönemini işledik.",
              "Biz bu yaz tatilinde Ege Denizi'nin kıyılarını gezmek istiyoruz."
            ],
            "correctIndex": 2,
            "explanation": "Özel isimlerin sonuna gelen çekim eklerini (durum, iyelik, yönelme vb.) ayırmak için kesme işareti konur. Yapım ekleri (örn: -li, -çi, -ce) ve bunlardan sonra gelen ekler ayrılmaz."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Özel Adlar ve Ekler' kuralı doğru uygulanmıştır?",
            "options": [
              "Arkadaşım Ahmetin bugün okula gelmediğini fark ettim.",
              "Türk dili, Türkçe'nin güzelliğini yansıtan en zengin dillerdendir.",
              "Tarih dersinde Osmanlı Devletinin kuruluş dönemini işledik.",
              "Yarın akşam Ankaradan gelecek olan misafirlerimizi karşılayacağız."
            ],
            "correctIndex": 1,
            "explanation": "Özel isimlerin sonuna gelen çekim eklerini (durum, iyelik, yönelme vb.) ayırmak için kesme işareti konur. Yapım ekleri (örn: -li, -çi, -ce) ve bunlardan sonra gelen ekler ayrılmaz."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Yarın akşam Ankara'dan gelecek olan misafirlerimizi karşılayacağız.",
              "Tarih dersinde Osmanlı Devleti'nin kuruluş dönemini işledik.",
              "Arkadaşım Ahmetin bugün okula gelmediğini fark ettim.",
              "Atatürk'ün milli mücadele yıllarındaki kararlılığı herkesi etkiledi."
            ],
            "correctIndex": 2,
            "explanation": "Özel isimlerin sonuna gelen çekim eklerini (durum, iyelik, yönelme vb.) ayırmak için kesme işareti konur. Yapım ekleri (örn: -li, -çi, -ce) ve bunlardan sonra gelen ekler ayrılmaz."
          }
        ]
      },
      {
        "id": "kesme_r2",
        "title": "Kısaltma ve Sayılar",
        "ruleText": "Kısaltmalara, sayılara ve belirli tarihlere getirilen ekleri ayırmak için konur.",
        "examples": [
          "Sınav sonuçları TBMM'nin resmi internet sayfasında yayınlandı.",
          "Toplantı yarın sabah saat 10.30'da başlayacak.",
          "Okul takımımız bu yıl 2.'lik kupasını evine götürdü.",
          "TDK'nin yeni yazım kılavuzunu incelemek için kitapçıya gittim.",
          "Kardeşim 1995'te dünyaya geldi ve şu an mühendis olarak çalışıyor."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Kısaltma ve Sayılar' kuralı doğru uygulanmıştır?",
            "options": [
              "Okul takımımız bu yıl 2.lik kupasını evine götürdü.",
              "Başvurular 25 Aralıka kadar devam edecek.",
              "TDKnin yeni yazım kılavuzunu incelemek için kitapçıya gittim.",
              "Sınav sonuçları TBMM'nin resmi internet sayfasında yayınlandı."
            ],
            "correctIndex": 3,
            "explanation": "Büyük harfle yapılan kısaltmaların (TDK'nin, TBMM'nin), sayıların (1995'te, 2.'lik) ve belirli gün/ay belirten tarih eklerinin (25 Aralık'a) ayrılmasında kesme işareti kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Toplantı yarın sabah saat 10.30da başlayacak.",
              "Kardeşim 1995'te dünyaya geldi ve şu an mühendis olarak çalışıyor.",
              "TDK'nin yeni yazım kılavuzunu incelemek için kitapçıya gittim.",
              "Başvurular 25 Aralık'a kadar devam edecek."
            ],
            "correctIndex": 0,
            "explanation": "Büyük harfle yapılan kısaltmaların (TDK'nin, TBMM'nin), sayıların (1995'te, 2.'lik) ve belirli gün/ay belirten tarih eklerinin (25 Aralık'a) ayrılmasında kesme işareti kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Kısaltma ve Sayılar' kuralı doğru uygulanmıştır?",
            "options": [
              "Okul takımımız bu yıl 2.'lik kupasını evine götürdü.",
              "Kardeşim 1995te dünyaya geldi ve şu an mühendis olarak çalışıyor.",
              "Toplantı yarın sabah saat 10.30da başlayacak.",
              "Sınav sonuçları TBMMnin resmi internet sayfasında yayınlandı."
            ],
            "correctIndex": 0,
            "explanation": "Büyük harfle yapılan kısaltmaların (TDK'nin, TBMM'nin), sayıların (1995'te, 2.'lik) ve belirli gün/ay belirten tarih eklerinin (25 Aralık'a) ayrılmasında kesme işareti kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Toplantı yarın sabah saat 10.30'da başlayacak.",
              "Sınav sonuçları TBMM'nin resmi internet sayfasında yayınlandı.",
              "Okul takımımız bu yıl 2.'lik kupasını evine götürdü.",
              "TDKnin yeni yazım kılavuzunu incelemek için kitapçıya gittim."
            ],
            "correctIndex": 3,
            "explanation": "Büyük harfle yapılan kısaltmaların (TDK'nin, TBMM'nin), sayıların (1995'te, 2.'lik) ve belirli gün/ay belirten tarih eklerinin (25 Aralık'a) ayrılmasında kesme işareti kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Kısaltma ve Sayılar' kuralı doğru uygulanmıştır?",
            "options": [
              "Başvurular 25 Aralıka kadar devam edecek.",
              "Kardeşim 1995'te dünyaya geldi ve şu an mühendis olarak çalışıyor.",
              "TDKnin yeni yazım kılavuzunu incelemek için kitapçıya gittim.",
              "Sınav sonuçları TBMMnin resmi internet sayfasında yayınlandı."
            ],
            "correctIndex": 1,
            "explanation": "Büyük harfle yapılan kısaltmaların (TDK'nin, TBMM'nin), sayıların (1995'te, 2.'lik) ve belirli gün/ay belirten tarih eklerinin (25 Aralık'a) ayrılmasında kesme işareti kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "TDK'nin yeni yazım kılavuzunu incelemek için kitapçıya gittim.",
              "Toplantı yarın sabah saat 10.30'da başlayacak.",
              "Sınav sonuçları TBMM'nin resmi internet sayfasında yayınlandı.",
              "Başvurular 25 Aralıka kadar devam edecek."
            ],
            "correctIndex": 3,
            "explanation": "Büyük harfle yapılan kısaltmaların (TDK'nin, TBMM'nin), sayıların (1995'te, 2.'lik) ve belirli gün/ay belirten tarih eklerinin (25 Aralık'a) ayrılmasında kesme işareti kullanılır."
          }
        ]
      },
      {
        "id": "kesme_r3",
        "title": "Seslerin Düştüğünü Gösterme",
        "ruleText": "Seslerin şiirde veya konuşmada düştüğünü göstermek için kullanılır.",
        "examples": [
          "N'apalım, elden gelen başka bir şey yok.",
          "N'eylersin ölüm herkesin başında, / Uyudun uyanamadın kim bilir?",
          "Karac'oğlan der ki: Ölüp gidince geride kalan sadece bir isimdir.",
          "N'oldu sana böyle birdenbire durgunlaştın?",
          "Şiirde geçen 'A'şar' kelimesi n'eylesin bu gönül?"
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Seslerin Düştüğünü Gösterme' kuralı doğru uygulanmıştır?",
            "options": [
              "Şiirde geçen 'A'şar' kelimesi neylesin bu gönül?",
              "Neden bahsettiğini hiç kimse anlamadı.",
              "N'apalım, elden gelen başka bir şey yok.",
              "Noldu sana böyle birdenbire durgunlaştın?"
            ],
            "correctIndex": 2,
            "explanation": "Şiirlerde hece ölçüsünü tutturmak veya günlük hızlı konuşmadaki ses düşmelerini (Ne haber -> Naber, Ne oldu -> N'oldu) göstermek için kesme işareti kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "N'apalım, elden gelen başka bir şey yok.",
              "Şiirde geçen 'A'şar' kelimesi n'eylesin bu gönül?",
              "N'oldu sana böyle birdenbire durgunlaştın?",
              "Neylersin ölüm herkesin başında, / Uyudun uyanamadın kim bilir?"
            ],
            "correctIndex": 3,
            "explanation": "Şiirlerde hece ölçüsünü tutturmak veya günlük hızlı konuşmadaki ses düşmelerini (Ne haber -> Naber, Ne oldu -> N'oldu) göstermek için kesme işareti kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Seslerin Düştüğünü Gösterme' kuralı doğru uygulanmıştır?",
            "options": [
              "Neylersin ölüm herkesin başında, / Uyudun uyanamadın kim bilir?",
              "Karac'oğlan der ki: Ölüp gidince geride kalan sadece bir isimdir.",
              "Napalım, elden gelen başka bir şey yok.",
              "Noldu sana böyle birdenbire durgunlaştın?"
            ],
            "correctIndex": 1,
            "explanation": "Şiirlerde hece ölçüsünü tutturmak veya günlük hızlı konuşmadaki ses düşmelerini (Ne haber -> Naber, Ne oldu -> N'oldu) göstermek için kesme işareti kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Noldu sana böyle birdenbire durgunlaştın?",
              "N'eden bahsettiğini hiç kimse anlamadı.",
              "Karac'oğlan der ki: Ölüp gidince geride kalan sadece bir isimdir.",
              "N'eylersin ölüm herkesin başında, / Uyudun uyanamadın kim bilir?"
            ],
            "correctIndex": 0,
            "explanation": "Şiirlerde hece ölçüsünü tutturmak veya günlük hızlı konuşmadaki ses düşmelerini (Ne haber -> Naber, Ne oldu -> N'oldu) göstermek için kesme işareti kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Seslerin Düştüğünü Gösterme' kuralı doğru uygulanmıştır?",
            "options": [
              "Karacoğlan der ki: Ölüp gidince geride kalan sadece bir isimdir.",
              "Neden bahsettiğini hiç kimse anlamadı.",
              "Şiirde geçen 'A'şar' kelimesi n'eylesin bu gönül?",
              "Napalım, elden gelen başka bir şey yok."
            ],
            "correctIndex": 2,
            "explanation": "Şiirlerde hece ölçüsünü tutturmak veya günlük hızlı konuşmadaki ses düşmelerini (Ne haber -> Naber, Ne oldu -> N'oldu) göstermek için kesme işareti kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "N'apalım, elden gelen başka bir şey yok.",
              "Neden bahsettiğini hiç kimse anlamadı.",
              "N'eylersin ölüm herkesin başında, / Uyudun uyanamadın kim bilir?",
              "N'oldu sana böyle birdenbire durgunlaştın?"
            ],
            "correctIndex": 1,
            "explanation": "Şiirlerde hece ölçüsünü tutturmak veya günlük hızlı konuşmadaki ses düşmelerini (Ne haber -> Naber, Ne oldu -> N'oldu) göstermek için kesme işareti kullanılır."
          }
        ]
      }
    ]
  },
  {
    "id": "yay-ayrac",
    "symbol": "()",
    "name": "Yay Ayraç",
    "color": "#4b5563",
    "description": "Cümle dışı açıklamaları veya tiyatro metinlerinde oyuncu hareketlerini gösteren parantez.",
    "rules": [
      {
        "id": "yay_ayrac_r1",
        "title": "Ek Açıklamalar",
        "ruleText": "Cümlenin yapısıyla doğrudan doğruya ilgisi olmayan açıklamalar için kullanılır.",
        "examples": [
          "Anadolu kentlerini (çoğunu gezdim) yakından görmek gerekir.",
          "Şairin en ünlü eseri (bu kitabı mutlaka okumalısınız) son baskısını yaptı.",
          "İmla kuralları (yazım kılavuzu esas alınarak) derslerimizde işlendi.",
          "İzmir'deki çocukluğum (o güzel yılları hiç unutamam) gözümde canlandı.",
          "Matematik formülleri (hepsini ezberlemek zordur) sınavda işimize yaradı."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Ek Açıklamalar' kuralı doğru uygulanmıştır?",
            "options": [
              "Anadolu kentlerini (çoğunu gezdim) yakından görmek gerekir.",
              "Şairin en ünlü eseri, bu kitabı mutlaka okumalısınız, son baskısını yaptı.",
              "Bu eski ev, yıllar önce dedem yaptırmış, restore edilecek.",
              "İzmir'deki çocukluğum, o güzel yılları hiç unutamam, gözümde canlandı."
            ],
            "correctIndex": 0,
            "explanation": "Cümle içinde cümlenin ana yapısını bozmadan ek bilgi/açıklama vermek için parantez (yay ayraç) kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "İzmir'deki çocukluğum (o güzel yılları hiç unutamam) gözümde canlandı.",
              "İmla kuralları (yazım kılavuzu esas alınarak) derslerimizde işlendi.",
              "Matematik formülleri (hepsini ezberlemek zordur) sınavda işimize yaradı.",
              "Şairin en ünlü eseri, bu kitabı mutlaka okumalısınız, son baskısını yaptı."
            ],
            "correctIndex": 3,
            "explanation": "Cümle içinde cümlenin ana yapısını bozmadan ek bilgi/açıklama vermek için parantez (yay ayraç) kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Ek Açıklamalar' kuralı doğru uygulanmıştır?",
            "options": [
              "Bu eski ev, yıllar önce dedem yaptırmış, restore edilecek.",
              "İzmir'deki çocukluğum, o güzel yılları hiç unutamam, gözümde canlandı.",
              "Şairin en ünlü eseri, bu kitabı mutlaka okumalısınız, son baskısını yaptı.",
              "İmla kuralları (yazım kılavuzu esas alınarak) derslerimizde işlendi."
            ],
            "correctIndex": 3,
            "explanation": "Cümle içinde cümlenin ana yapısını bozmadan ek bilgi/açıklama vermek için parantez (yay ayraç) kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Anadolu kentlerini (çoğunu gezdim) yakından görmek gerekir.",
              "İzmir'deki çocukluğum, o güzel yılları hiç unutamam, gözümde canlandı.",
              "Bu eski ev (yıllar önce dedem yaptırmış) restore edilecek.",
              "İmla kuralları (yazım kılavuzu esas alınarak) derslerimizde işlendi."
            ],
            "correctIndex": 1,
            "explanation": "Cümle içinde cümlenin ana yapısını bozmadan ek bilgi/açıklama vermek için parantez (yay ayraç) kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Ek Açıklamalar' kuralı doğru uygulanmıştır?",
            "options": [
              "Bu eski ev, yıllar önce dedem yaptırmış, restore edilecek.",
              "İmla kuralları, yazım kılavuzu esas alınarak, derslerimizde işlendi.",
              "Matematik formülleri (hepsini ezberlemek zordur) sınavda işimize yaradı.",
              "Şairin en ünlü eseri, bu kitabı mutlaka okumalısınız, son baskısını yaptı."
            ],
            "correctIndex": 2,
            "explanation": "Cümle içinde cümlenin ana yapısını bozmadan ek bilgi/açıklama vermek için parantez (yay ayraç) kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Şairin en ünlü eseri (bu kitabı mutlaka okumalısınız) son baskısını yaptı.",
              "Matematik formülleri (hepsini ezberlemek zordur) sınavda işimize yaradı.",
              "Anadolu kentlerini (çoğunu gezdim) yakından görmek gerekir.",
              "Bu eski ev, yıllar önce dedem yaptırmış, restore edilecek."
            ],
            "correctIndex": 3,
            "explanation": "Cümle içinde cümlenin ana yapısını bozmadan ek bilgi/açıklama vermek için parantez (yay ayraç) kullanılır."
          }
        ]
      },
      {
        "id": "yay_ayrac_r2",
        "title": "Tiyatro Metinleri",
        "ruleText": "Tiyatro eserlerinde ve senaryolarda konuşanın hareketlerini, durumunu açıklamak ve göstermek için kullanılır.",
        "examples": [
          "Kuru Kadı (öfkeyle yerinden kalkarak): — Bu kararı asla kabul etmiyorum!",
          "İhtiyar (yavaş adımlarla ilerleyerek): — Evlat, bana biraz su verir misin?",
          "Sermet Bey (şaşkın şaşkın etrafına bakınarak): — Nereden geliyor bu gürültü?",
          "Zekiye (gözyaşlarını silerek): — Seni bir daha göremeyeceğim sanmıştım.",
          "Hacivat (sakalını sıvazlayarak): — Karagöz'üm, gel beraber bir kahve içelim."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Tiyatro Metinleri' kuralı doğru uygulanmıştır?",
            "options": [
              "Zekiye, gözyaşlarını silerek, : — Seni bir daha göremeyeceğim sanmıştım.",
              "Sermet Bey, şaşkın şaşkın etrafına bakınarak, : — Nereden geliyor bu gürültü?",
              "Kuru Kadı (öfkeyle yerinden kalkarak): — Bu kararı asla kabul etmiyorum!",
              "Öğretmen, gülümseyerek öğrencilerine döndü, : — Bugün sınav yapmayacağız."
            ],
            "correctIndex": 2,
            "explanation": "Tiyatro metinlerinde sahnede oyuncunun yapması gereken jest, mimik veya hareketleri parantez içinde tarif edilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Öğretmen (gülümseyerek öğrencilerine döndü): — Bugün sınav yapmayacağız.",
              "Sermet Bey (şaşkın şaşkın etrafına bakınarak): — Nereden geliyor bu gürültü?",
              "İhtiyar, yavaş adımlarla ilerleyerek, : — Evlat, bana biraz su verir misin?",
              "Zekiye (gözyaşlarını silerek): — Seni bir daha göremeyeceğim sanmıştım."
            ],
            "correctIndex": 2,
            "explanation": "Tiyatro metinlerinde sahnede oyuncunun yapması gereken jest, mimik veya hareketleri parantez içinde tarif edilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Tiyatro Metinleri' kuralı doğru uygulanmıştır?",
            "options": [
              "Sermet Bey (şaşkın şaşkın etrafına bakınarak): — Nereden geliyor bu gürültü?",
              "Zekiye, gözyaşlarını silerek, : — Seni bir daha göremeyeceğim sanmıştım.",
              "Hacivat -sakalını sıvazlayarak-: — Karagöz'üm, gel beraber bir kahve içelim.",
              "İhtiyar, yavaş adımlarla ilerleyerek, : — Evlat, bana biraz su verir misin?"
            ],
            "correctIndex": 0,
            "explanation": "Tiyatro metinlerinde sahnede oyuncunun yapması gereken jest, mimik veya hareketleri parantez içinde tarif edilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Öğretmen (gülümseyerek öğrencilerine döndü): — Bugün sınav yapmayacağız.",
              "İhtiyar (yavaş adımlarla ilerleyerek): — Evlat, bana biraz su verir misin?",
              "Zekiye, gözyaşlarını silerek, : — Seni bir daha göremeyeceğim sanmıştım.",
              "Hacivat (sakalını sıvazlayarak): — Karagöz'üm, gel beraber bir kahve içelim."
            ],
            "correctIndex": 2,
            "explanation": "Tiyatro metinlerinde sahnede oyuncunun yapması gereken jest, mimik veya hareketleri parantez içinde tarif edilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Tiyatro Metinleri' kuralı doğru uygulanmıştır?",
            "options": [
              "Hacivat (sakalını sıvazlayarak): — Karagöz'üm, gel beraber bir kahve içelim.",
              "İhtiyar, yavaş adımlarla ilerleyerek, : — Evlat, bana biraz su verir misin?",
              "Öğretmen, gülümseyerek öğrencilerine döndü, : — Bugün sınav yapmayacağız.",
              "Zekiye, gözyaşlarını silerek, : — Seni bir daha göremeyeceğim sanmıştım."
            ],
            "correctIndex": 0,
            "explanation": "Tiyatro metinlerinde sahnede oyuncunun yapması gereken jest, mimik veya hareketleri parantez içinde tarif edilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Hacivat (sakalını sıvazlayarak): — Karagöz'üm, gel beraber bir kahve içelim.",
              "Öğretmen, gülümseyerek öğrencilerine döndü, : — Bugün sınav yapmayacağız.",
              "Sermet Bey (şaşkın şaşkın etrafına bakınarak): — Nereden geliyor bu gürültü?",
              "İhtiyar (yavaş adımlarla ilerleyerek): — Evlat, bana biraz su verir misin?"
            ],
            "correctIndex": 1,
            "explanation": "Tiyatro metinlerinde sahnede oyuncunun yapması gereken jest, mimik veya hareketleri parantez içinde tarif edilir."
          }
        ]
      },
      {
        "id": "yay_ayrac_r3",
        "title": "Alıntı ve Kaynak Belirtme",
        "ruleText": "Alıntılarda, aktarılan sözün kime ait olduğunu göstermek için kullanılır.",
        "examples": [
          "\"Hayatta en hakiki mürşit ilimdir.\" (Atatürk) sözü çok değerlidir.",
          "\"Ne zaman gökyüzüne baksam seni hatırlarım.\" (Sait Faik) cümlesiyle başlar öykü.",
          "\"Yazım kuralları dilin anayasasıdır.\" (TDK Kılavuzu) ifadesini unutmayın.",
          "\"Sanat, güzelliğin ifadesidir.\" (Mustafa Kemal) tanımı sanata bakışımızı özetler.",
          "\"Fırtınada liman aranmaz.\" (Eski bir atasözü) sözü durumumuzu açıklıyor."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Alıntı ve Kaynak Belirtme' kuralı doğru uygulanmıştır?",
            "options": [
              "\"Fırtınada liman aranmaz.\" ,Eski bir atasözü, sözü durumumuzu açıklıyor.",
              "\"Kitap zekanın aynasıdır.\" [Nurullah Ataç] diyerek okumanın değerini belirtti.",
              "\"Sanat, güzelliğin ifadesidir.\" -Mustafa Kemal- tanımı sanata bakışımızı özetler.",
              "\"Hayatta en hakiki mürşit ilimdir.\" (Atatürk) sözü çok değerlidir."
            ],
            "correctIndex": 3,
            "explanation": "Alıntılarda sözün yazarını veya kaynağını göstermek için yay ayraç kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "\"Fırtınada liman aranmaz.\" (Eski bir atasözü) sözü durumumuzu açıklıyor.",
              "\"Ne zaman gökyüzüne baksam seni hatırlarım.\" ,Sait Faik, cümlesiyle başlar öykü.",
              "\"Sanat, güzelliğin ifadesidir.\" (Mustafa Kemal) tanımı sanata bakışımızı özetler.",
              "\"Hayatta en hakiki mürşit ilimdir.\" (Atatürk) sözü çok değerlidir."
            ],
            "correctIndex": 1,
            "explanation": "Alıntılarda sözün yazarını veya kaynağını göstermek için yay ayraç kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Alıntı ve Kaynak Belirtme' kuralı doğru uygulanmıştır?",
            "options": [
              "\"Hayatta en hakiki mürşit ilimdir.\" -Atatürk- sözü çok değerlidir.",
              "\"Yazım kuralları dilin anayasasıdır.\" (TDK Kılavuzu) ifadesini unutmayın.",
              "\"Fırtınada liman aranmaz.\" ,Eski bir atasözü, sözü durumumuzu açıklıyor.",
              "\"Kitap zekanın aynasıdır.\" [Nurullah Ataç] diyerek okumanın değerini belirtti."
            ],
            "correctIndex": 1,
            "explanation": "Alıntılarda sözün yazarını veya kaynağını göstermek için yay ayraç kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "\"Ne zaman gökyüzüne baksam seni hatırlarım.\" (Sait Faik) cümlesiyle başlar öykü.",
              "\"Fırtınada liman aranmaz.\" (Eski bir atasözü) sözü durumumuzu açıklıyor.",
              "\"Sanat, güzelliğin ifadesidir.\" -Mustafa Kemal- tanımı sanata bakışımızı özetler.",
              "\"Hayatta en hakiki mürşit ilimdir.\" (Atatürk) sözü çok değerlidir."
            ],
            "correctIndex": 2,
            "explanation": "Alıntılarda sözün yazarını veya kaynağını göstermek için yay ayraç kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Alıntı ve Kaynak Belirtme' kuralı doğru uygulanmıştır?",
            "options": [
              "\"Yazım kuralları dilin anayasasıdır.\" [TDK Kılavuzu] ifadesini unutmayın.",
              "\"Kitap zekanın aynasıdır.\" [Nurullah Ataç] diyerek okumanın değerini belirtti.",
              "\"Hayatta en hakiki mürşit ilimdir.\" -Atatürk- sözü çok değerlidir.",
              "\"Fırtınada liman aranmaz.\" (Eski bir atasözü) sözü durumumuzu açıklıyor."
            ],
            "correctIndex": 3,
            "explanation": "Alıntılarda sözün yazarını veya kaynağını göstermek için yay ayraç kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "\"Hayatta en hakiki mürşit ilimdir.\" (Atatürk) sözü çok değerlidir.",
              "\"Ne zaman gökyüzüne baksam seni hatırlarım.\" (Sait Faik) cümlesiyle başlar öykü.",
              "\"Yazım kuralları dilin anayasasıdır.\" (TDK Kılavuzu) ifadesini unutmayın.",
              "\"Kitap zekanın aynasıdır.\" [Nurullah Ataç] diyerek okumanın değerini belirtti."
            ],
            "correctIndex": 3,
            "explanation": "Alıntılarda sözün yazarını veya kaynağını göstermek için yay ayraç kullanılır."
          }
        ]
      }
    ]
  },
  {
    "id": "koseli-ayrac",
    "symbol": "[]",
    "name": "Köşeli Ayraç",
    "color": "#6b7280",
    "description": "Parantez içi açıklamalarda ikinci bir parantez gerektiğinde en dışa konan köşeli parantez.",
    "rules": [
      {
        "id": "koseli_ayrac_r1",
        "title": "Ayraç İçinde Ayraç",
        "ruleText": "Ayraç içinde ayraç kullanılması gereken durumlarda yay ayraçtan önce köşeli ayraç kullanılır.",
        "examples": [
          "Halikarnas Balıkçısı [Cevat Şakir Kabaağaçlı (1886-1973)] Bodrum'u çok severdi.",
          "Türk Dil Kurumu [TDK (1932)] dilimizin gelişmesi için kurulmuştur.",
          "Cumhuriyet döneminin ünlü romancısı [Reşat Nuri Güntekin (1889-1956)] pek çok eser vermiştir.",
          "Şairimizin en ünlü şiir kitabı [Çile (Necip Fazıl Kısakürek)] yeni baskısını yaptı.",
          "Dünyaca ünlü fizikçimiz [Albert Einstein (1879-1955)] izafiyet teorisini kurdu."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Ayraç İçinde Ayraç' kuralı doğru uygulanmıştır?",
            "options": [
              "Cumhuriyet döneminin ünlü romancısı (Reşat Nuri Güntekin (1889-1956)) pek çok eser vermiştir.",
              "Dünyaca ünlü fizikçimiz (Albert Einstein (1879-1955)) izafiyet teorisini kurdu.",
              "Sınıfımızın en eski üyesi (Hakan (1998 doğumlu)) bugün sunum yapacak.",
              "Halikarnas Balıkçısı [Cevat Şakir Kabaağaçlı (1886-1973)] Bodrum'u çok severdi."
            ],
            "correctIndex": 3,
            "explanation": "İç içe parantez kullanımı gerektiğinde, dil kurallarına göre en dıştaki parantezin köşeli ayraç [], içtekinin ise yay ayraç () olması gerekir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Cumhuriyet döneminin ünlü romancısı [Reşat Nuri Güntekin (1889-1956)] pek çok eser vermiştir.",
              "Şairimizin en ünlü şiir kitabı [Çile (Necip Fazıl Kısakürek)] yeni baskısını yaptı.",
              "Türk Dil Kurumu (TDK (1932)) dilimizin gelişmesi için kurulmuştur.",
              "Halikarnas Balıkçısı [Cevat Şakir Kabaağaçlı (1886-1973)] Bodrum'u çok severdi."
            ],
            "correctIndex": 2,
            "explanation": "İç içe parantez kullanımı gerektiğinde, dil kurallarına göre en dıştaki parantezin köşeli ayraç [], içtekinin ise yay ayraç () olması gerekir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Ayraç İçinde Ayraç' kuralı doğru uygulanmıştır?",
            "options": [
              "Şairimizin en ünlü şiir kitabı (Çile (Necip Fazıl Kısakürek)) yeni baskısını yaptı.",
              "Türk Dil Kurumu (TDK (1932)) dilimizin gelişmesi için kurulmuştur.",
              "Halikarnas Balıkçısı (Cevat Şakir Kabaağaçlı (1886-1973)) Bodrum'u çok severdi.",
              "Cumhuriyet döneminin ünlü romancısı [Reşat Nuri Güntekin (1889-1956)] pek çok eser vermiştir."
            ],
            "correctIndex": 3,
            "explanation": "İç içe parantez kullanımı gerektiğinde, dil kurallarına göre en dıştaki parantezin köşeli ayraç [], içtekinin ise yay ayraç () olması gerekir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Dünyaca ünlü fizikçimiz [Albert Einstein (1879-1955)] izafiyet teorisini kurdu.",
              "Halikarnas Balıkçısı [Cevat Şakir Kabaağaçlı (1886-1973)] Bodrum'u çok severdi.",
              "Sınıfımızın en eski üyesi [Hakan (1998 doğumlu)] bugün sunum yapacak.",
              "Şairimizin en ünlü şiir kitabı (Çile (Necip Fazıl Kısakürek)) yeni baskısını yaptı."
            ],
            "correctIndex": 3,
            "explanation": "İç içe parantez kullanımı gerektiğinde, dil kurallarına göre en dıştaki parantezin köşeli ayraç [], içtekinin ise yay ayraç () olması gerekir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Ayraç İçinde Ayraç' kuralı doğru uygulanmıştır?",
            "options": [
              "Dünyaca ünlü fizikçimiz [Albert Einstein (1879-1955)] izafiyet teorisini kurdu.",
              "Türk Dil Kurumu (TDK (1932)) dilimizin gelişmesi için kurulmuştur.",
              "Cumhuriyet döneminin ünlü romancısı (Reşat Nuri Güntekin (1889-1956)) pek çok eser vermiştir.",
              "Sınıfımızın en eski üyesi (Hakan (1998 doğumlu)) bugün sunum yapacak."
            ],
            "correctIndex": 0,
            "explanation": "İç içe parantez kullanımı gerektiğinde, dil kurallarına göre en dıştaki parantezin köşeli ayraç [], içtekinin ise yay ayraç () olması gerekir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Halikarnas Balıkçısı [Cevat Şakir Kabaağaçlı (1886-1973)] Bodrum'u çok severdi.",
              "Cumhuriyet döneminin ünlü romancısı [Reşat Nuri Güntekin (1889-1956)] pek çok eser vermiştir.",
              "Sınıfımızın en eski üyesi (Hakan (1998 doğumlu)) bugün sunum yapacak.",
              "Dünyaca ünlü fizikçimiz [Albert Einstein (1879-1955)] izafiyet teorisini kurdu."
            ],
            "correctIndex": 2,
            "explanation": "İç içe parantez kullanımı gerektiğinde, dil kurallarına göre en dıştaki parantezin köşeli ayraç [], içtekinin ise yay ayraç () olması gerekir."
          }
        ]
      }
    ]
  },
  {
    "id": "kisa-cizgi",
    "symbol": "-",
    "name": "Kısa Çizgi",
    "color": "#f97316",
    "description": "Satır sonu bölmelerinde, ara sözleri ayırmada ve kelimeler arasında ilişki kurmada kullanılan kısa çizgi.",
    "rules": [
      {
        "id": "kisa_cizgi_r1",
        "title": "Satır Sonu Bölmesi",
        "ruleText": "Satıra sığmayan kelimeler bölünürken satır sonuna konur.",
        "examples": [
          "Bugün okulda öğretmenimiz yeni yazım kurallarını anlat- / maya başladı.",
          "Karşımızdaki eski konağın pencereleri rüzgarda gıcır- / diyordu.",
          "Kitaptaki kelimelerin anlamlarını bulmak için söz- / lükten yararlandık.",
          "Kardeşim ders çalışırken uyuya- / kalmış.",
          "Dün akşam başlayan kar yağışı şehri tamamen be- / yaza bürüdü."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Satır Sonu Bölmesi' kuralı doğru uygulanmıştır?",
            "options": [
              "Karşımızdaki eski konağın pencereleri rüzgarda gıcır_ diyordu.",
              "Kardeşim ders çalışırken uyuya, kalmış.",
              "Yeni projeyi yetiştirmek için gece gündüz de: memeden çalıştık.",
              "Bugün okulda öğretmenimiz yeni yazım kurallarını anlat- / maya başladı."
            ],
            "correctIndex": 3,
            "explanation": "Satır sonuna sığmayan kelimeler hecelerinden bölünürken satır sonuna kısa çizgi yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Bugün okulda öğretmenimiz yeni yazım kurallarını anlat- / maya başladı.",
              "Karşımızdaki eski konağın pencereleri rüzgarda gıcır_ diyordu.",
              "Kitaptaki kelimelerin anlamlarını bulmak için söz- / lükten yararlandık.",
              "Dün akşam başlayan kar yağışı şehri tamamen be- / yaza bürüdü."
            ],
            "correctIndex": 1,
            "explanation": "Satır sonuna sığmayan kelimeler hecelerinden bölünürken satır sonuna kısa çizgi yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Satır Sonu Bölmesi' kuralı doğru uygulanmıştır?",
            "options": [
              "Karşımızdaki eski konağın pencereleri rüzgarda gıcır_ diyordu.",
              "Kitaptaki kelimelerin anlamlarını bulmak için söz- / lükten yararlandık.",
              "Bugün okulda öğretmenimiz yeni yazım kurallarını anlat/ maya başladı.",
              "Kardeşim ders çalışırken uyuya, kalmış."
            ],
            "correctIndex": 1,
            "explanation": "Satır sonuna sığmayan kelimeler hecelerinden bölünürken satır sonuna kısa çizgi yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Bugün okulda öğretmenimiz yeni yazım kurallarını anlat- / maya başladı.",
              "Kitaptaki kelimelerin anlamlarını bulmak için söz- / lükten yararlandık.",
              "Yeni projeyi yetiştirmek için gece gündüz de- / memeden çalıştık.",
              "Kardeşim ders çalışırken uyuya, kalmış."
            ],
            "correctIndex": 3,
            "explanation": "Satır sonuna sığmayan kelimeler hecelerinden bölünürken satır sonuna kısa çizgi yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Satır Sonu Bölmesi' kuralı doğru uygulanmıştır?",
            "options": [
              "Karşımızdaki eski konağın pencereleri rüzgarda gıcır_ diyordu.",
              "Dün akşam başlayan kar yağışı şehri tamamen be- / yaza bürüdü.",
              "Kardeşim ders çalışırken uyuya, kalmış.",
              "Kitaptaki kelimelerin anlamlarını bulmak için söz. lükten yararlandık."
            ],
            "correctIndex": 1,
            "explanation": "Satır sonuna sığmayan kelimeler hecelerinden bölünürken satır sonuna kısa çizgi yerleştirilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Bugün okulda öğretmenimiz yeni yazım kurallarını anlat- / maya başladı.",
              "Karşımızdaki eski konağın pencereleri rüzgarda gıcır- / diyordu.",
              "Yeni projeyi yetiştirmek için gece gündüz de: memeden çalıştık.",
              "Kitaptaki kelimelerin anlamlarını bulmak için söz- / lükten yararlandık."
            ],
            "correctIndex": 2,
            "explanation": "Satır sonuna sığmayan kelimeler hecelerinden bölünürken satır sonuna kısa çizgi yerleştirilir."
          }
        ]
      },
      {
        "id": "kisa_cizgi_r2",
        "title": "Ara Sözleri Ayırma",
        "ruleText": "Cümle içinde ara sözleri veya ara cümleleri ayırmak için ara sözlerin veya ara cümlelerin başına ve sonuna konur.",
        "examples": [
          "Doğup büyüdüğüm şehri -İzmir'i- çok özledim.",
          "En yakın arkadaşım -sınıf temsilcimiz- bugün okula gelmedi.",
          "Geçen hafta aldığım kitabı -o çok övülen romanı- nihayet bitirdim.",
          "Komşumuz -o sevimli yaşlı teyze- bize kurabiye getirdi.",
          "Sonunda hayalindeki eve -deniz kenarındaki o villaya- kavuştu."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Ara Sözleri Ayırma' kuralı doğru uygulanmıştır?",
            "options": [
              "Sonunda hayalindeki eve deniz kenarındaki o villaya kavuştu.",
              "En yakın arkadaşım sınıf temsilcimiz bugün okula gelmedi.",
              "Geçen hafta aldığım kitabı o çok övülen romanı nihayet bitirdim.",
              "Doğup büyüdüğüm şehri -İzmir'i- çok özledim."
            ],
            "correctIndex": 3,
            "explanation": "Ara sözlerin veya ara cümlelerin başında ve sonunda virgül yerine kısa çizgi de kullanılabilir. Bu kullanımda çizgiler kelimelere bitişik yazılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Sonunda hayalindeki eve -deniz kenarındaki o villaya- kavuştu.",
              "En yakın arkadaşım sınıf temsilcimiz bugün okula gelmedi.",
              "Matematik öğretmenimiz -okulun en tecrübelisi- yarın emekli oluyor.",
              "Komşumuz -o sevimli yaşlı teyze- bize kurabiye getirdi."
            ],
            "correctIndex": 1,
            "explanation": "Ara sözlerin veya ara cümlelerin başında ve sonunda virgül yerine kısa çizgi de kullanılabilir. Bu kullanımda çizgiler kelimelere bitişik yazılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Ara Sözleri Ayırma' kuralı doğru uygulanmıştır?",
            "options": [
              "Matematik öğretmenimiz okulun en tecrübelisi yarın emekli oluyor.",
              "En yakın arkadaşım sınıf temsilcimiz bugün okula gelmedi.",
              "Komşumuz o sevimli yaşlı teyze bize kurabiye getirdi.",
              "Geçen hafta aldığım kitabı -o çok övülen romanı- nihayet bitirdim."
            ],
            "correctIndex": 3,
            "explanation": "Ara sözlerin veya ara cümlelerin başında ve sonunda virgül yerine kısa çizgi de kullanılabilir. Bu kullanımda çizgiler kelimelere bitişik yazılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Komşumuz o sevimli yaşlı teyze bize kurabiye getirdi.",
              "Doğup büyüdüğüm şehri -İzmir'i- çok özledim.",
              "Geçen hafta aldığım kitabı -o çok övülen romanı- nihayet bitirdim.",
              "En yakın arkadaşım -sınıf temsilcimiz- bugün okula gelmedi."
            ],
            "correctIndex": 0,
            "explanation": "Ara sözlerin veya ara cümlelerin başında ve sonunda virgül yerine kısa çizgi de kullanılabilir. Bu kullanımda çizgiler kelimelere bitişik yazılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Ara Sözleri Ayırma' kuralı doğru uygulanmıştır?",
            "options": [
              "Sonunda hayalindeki eve -deniz kenarındaki o villaya- kavuştu.",
              "Komşumuz o sevimli yaşlı teyze bize kurabiye getirdi.",
              "Geçen hafta aldığım kitabı o çok övülen romanı nihayet bitirdim.",
              "Doğup büyüdüğüm şehri İzmir'i çok özledim."
            ],
            "correctIndex": 0,
            "explanation": "Ara sözlerin veya ara cümlelerin başında ve sonunda virgül yerine kısa çizgi de kullanılabilir. Bu kullanımda çizgiler kelimelere bitişik yazılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Sonunda hayalindeki eve -deniz kenarındaki o villaya- kavuştu.",
              "Geçen hafta aldığım kitabı -o çok övülen romanı- nihayet bitirdim.",
              "Matematik öğretmenimiz okulun en tecrübelisi yarın emekli oluyor.",
              "Doğup büyüdüğüm şehri -İzmir'i- çok özledim."
            ],
            "correctIndex": 2,
            "explanation": "Ara sözlerin veya ara cümlelerin başında ve sonunda virgül yerine kısa çizgi de kullanılabilir. Bu kullanımda çizgiler kelimelere bitişik yazılır."
          }
        ]
      },
      {
        "id": "kisa_cizgi_r3",
        "title": "Kelime İlişkileri / Köprü",
        "ruleText": "Kelimeler arasında 've, ile, ila, arasında' anlamlarını vermek için kullanılır.",
        "examples": [
          "Ankara-İstanbul hızlı tren hattı ulaşıma büyük kolaylık sağladı.",
          "Savaşta Türkiye-Yunanistan ilişkileri gerginleşmişti.",
          "2025-2026 eğitim öğretim yılı yarın resmen başlıyor.",
          "Toplantı 09.30-12.00 saatleri arasında gerçekleştirilecek.",
          "Türkçe-İngilizce sözlüğümü kütüphanede unuttuğumu fark ettim."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Kelime İlişkileri / Köprü' kuralı doğru uygulanmıştır?",
            "options": [
              "Toplantı 09.30:12.00 saatleri arasında gerçekleştirilecek.",
              "Ankara-İstanbul hızlı tren hattı ulaşıma büyük kolaylık sağladı.",
              "Tarih dersinde Ural,Altay dil ailesini detaylıca işledik.",
              "2025/2026 eğitim öğretim yılı yarın resmen başlıyor."
            ],
            "correctIndex": 1,
            "explanation": "İki yer, tarih, dil veya kavram arasındaki bağlantıyı (ve, ile, ila) belirtmek için aralarına kısa çizgi konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Savaşta Türkiye/Yunanistan ilişkileri gerginleşmişti.",
              "Türkçe-İngilizce sözlüğümü kütüphanede unuttuğumu fark ettim.",
              "Ankara-İstanbul hızlı tren hattı ulaşıma büyük kolaylık sağladı.",
              "Toplantı 09.30-12.00 saatleri arasında gerçekleştirilecek."
            ],
            "correctIndex": 0,
            "explanation": "İki yer, tarih, dil veya kavram arasındaki bağlantıyı (ve, ile, ila) belirtmek için aralarına kısa çizgi konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Kelime İlişkileri / Köprü' kuralı doğru uygulanmıştır?",
            "options": [
              "2025-2026 eğitim öğretim yılı yarın resmen başlıyor.",
              "Türkçe;İngilizce sözlüğümü kütüphanede unuttuğumu fark ettim.",
              "Tarih dersinde Ural,Altay dil ailesini detaylıca işledik.",
              "Ankara/İstanbul hızlı tren hattı ulaşıma büyük kolaylık sağladı."
            ],
            "correctIndex": 0,
            "explanation": "İki yer, tarih, dil veya kavram arasındaki bağlantıyı (ve, ile, ila) belirtmek için aralarına kısa çizgi konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "2025-2026 eğitim öğretim yılı yarın resmen başlıyor.",
              "Toplantı 09.30:12.00 saatleri arasında gerçekleştirilecek.",
              "Ankara-İstanbul hızlı tren hattı ulaşıma büyük kolaylık sağladı.",
              "Türkçe-İngilizce sözlüğümü kütüphanede unuttuğumu fark ettim."
            ],
            "correctIndex": 1,
            "explanation": "İki yer, tarih, dil veya kavram arasındaki bağlantıyı (ve, ile, ila) belirtmek için aralarına kısa çizgi konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Kelime İlişkileri / Köprü' kuralı doğru uygulanmıştır?",
            "options": [
              "Savaşta Türkiye/Yunanistan ilişkileri gerginleşmişti.",
              "Toplantı 09.30:12.00 saatleri arasında gerçekleştirilecek.",
              "Türkçe-İngilizce sözlüğümü kütüphanede unuttuğumu fark ettim.",
              "Ankara/İstanbul hızlı tren hattı ulaşıma büyük kolaylık sağladı."
            ],
            "correctIndex": 2,
            "explanation": "İki yer, tarih, dil veya kavram arasındaki bağlantıyı (ve, ile, ila) belirtmek için aralarına kısa çizgi konur."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Ankara-İstanbul hızlı tren hattı ulaşıma büyük kolaylık sağladı.",
              "Toplantı 09.30-12.00 saatleri arasında gerçekleştirilecek.",
              "Tarih dersinde Ural,Altay dil ailesini detaylıca işledik.",
              "Türkçe-İngilizce sözlüğümü kütüphanede unuttuğumu fark ettim."
            ],
            "correctIndex": 2,
            "explanation": "İki yer, tarih, dil veya kavram arasındaki bağlantıyı (ve, ile, ila) belirtmek için aralarına kısa çizgi konur."
          }
        ]
      }
    ]
  },
  {
    "id": "uzun-cizgi",
    "symbol": "—",
    "name": "Uzun Çizgi",
    "color": "#ea580c",
    "description": "Yazıda satır başına alınan konuşmaları göstermek için kullanılan konuşma çizgisi.",
    "rules": [
      {
        "id": "uzun_cizgi_r1",
        "title": "Konuşma Çizgisi",
        "ruleText": "Yazıda satır başına alınan konuşmaları göstermek için kullanılır.",
        "examples": [
          "— Yarın bizimle kütüphaneye gelecek misin?",
          "— Evet, sabah erkenden buluşup gideriz.",
          "— Bu zor matematik sorusunu nasıl çözdün?",
          "— Planlı çalışıp bol bol soru çözerek becerdim.",
          "— Anneme hediye almak için çarşıya çıkacağım."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Konuşma Çizgisi' kuralı doğru uygulanmıştır?",
            "options": [
              "- Planlı çalışıp bol bol soru çözerek becerdim.",
              "- Bu zor matematik sorusunu nasıl çözdün?",
              "- Ben de sana eşlik edebilirim.",
              "— Yarın bizimle kütüphaneye gelecek misin?"
            ],
            "correctIndex": 3,
            "explanation": "Diyalogların başında satır başlarında kullanılan çizgi kısa çizgi (-) değil, uzun çizgidir (—)."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "— Anneme hediye almak için çarşıya çıkacağım.",
              "— Planlı çalışıp bol bol soru çözerek becerdim.",
              "- Evet, sabah erkenden buluşup gideriz.",
              "— Bu zor matematik sorusunu nasıl çözdün?"
            ],
            "correctIndex": 2,
            "explanation": "Diyalogların başında satır başlarında kullanılan çizgi kısa çizgi (-) değil, uzun çizgidir (—)."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Konuşma Çizgisi' kuralı doğru uygulanmıştır?",
            "options": [
              "— Bu zor matematik sorusunu nasıl çözdün?",
              "- Ben de sana eşlik edebilirim.",
              "- Evet, sabah erkenden buluşup gideriz.",
              "- Planlı çalışıp bol bol soru çözerek becerdim."
            ],
            "correctIndex": 0,
            "explanation": "Diyalogların başında satır başlarında kullanılan çizgi kısa çizgi (-) değil, uzun çizgidir (—)."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "- Planlı çalışıp bol bol soru çözerek becerdim.",
              "— Yarın bizimle kütüphaneye gelecek misin?",
              "— Anneme hediye almak için çarşıya çıkacağım.",
              "— Evet, sabah erkenden buluşup gideriz."
            ],
            "correctIndex": 0,
            "explanation": "Diyalogların başında satır başlarında kullanılan çizgi kısa çizgi (-) değil, uzun çizgidir (—)."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Konuşma Çizgisi' kuralı doğru uygulanmıştır?",
            "options": [
              "— Anneme hediye almak için çarşıya çıkacağım.",
              "- Ben de sana eşlik edebilirim.",
              "- Evet, sabah erkenden buluşup gideriz.",
              "- Yarın bizimle kütüphaneye gelecek misin?"
            ],
            "correctIndex": 0,
            "explanation": "Diyalogların başında satır başlarında kullanılan çizgi kısa çizgi (-) değil, uzun çizgidir (—)."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "— Evet, sabah erkenden buluşup gideriz.",
              "— Bu zor matematik sorusunu nasıl çözdün?",
              "- Ben de sana eşlik edebilirim.",
              "— Planlı çalışıp bol bol soru çözerek becerdim."
            ],
            "correctIndex": 2,
            "explanation": "Diyalogların başında satır başlarında kullanılan çizgi kısa çizgi (-) değil, uzun çizgidir (—)."
          }
        ]
      },
      {
        "id": "uzun_cizgi_r2",
        "title": "Tiyatroda İsim Ardı",
        "ruleText": "Oyunlarda konuşanın adından sonra konabilir.",
        "examples": [
          "Kuru Kadı — Bu kararı asla kabul etmiyorum!",
          "Sermet Bey — Nereden geliyor bu gürültü?",
          "Hacivat — Karagöz'üm, gel beraber bir kahve içelim.",
          "Karagöz — Hoş bulduk Hacivat'ım, odun almaya gidiyorum.",
          "Zekiye — Seni bir daha göremeyeceğim sanmıştım."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Tiyatroda İsim Ardı' kuralı doğru uygulanmıştır?",
            "options": [
              "Kuru Kadı — Bu kararı asla kabul etmiyorum!",
              "İhtiyar , Evlat, bana biraz su verir misin?",
              "Sermet Bey - Nereden geliyor bu gürültü?",
              "Hacivat , Karagöz'üm, gel beraber bir kahve içelim."
            ],
            "correctIndex": 0,
            "explanation": "Tiyatro oyunlarında karakter isimlerinin ardına konuşma çizgisinden önce uzun çizgi yerleştirilebilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Kuru Kadı — Bu kararı asla kabul etmiyorum!",
              "Sermet Bey - Nereden geliyor bu gürültü?",
              "Zekiye — Seni bir daha göremeyeceğim sanmıştım.",
              "Karagöz — Hoş bulduk Hacivat'ım, odun almaya gidiyorum."
            ],
            "correctIndex": 1,
            "explanation": "Tiyatro oyunlarında karakter isimlerinin ardına konuşma çizgisinden önce uzun çizgi yerleştirilebilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Tiyatroda İsim Ardı' kuralı doğru uygulanmıştır?",
            "options": [
              "Sermet Bey - Nereden geliyor bu gürültü?",
              "Hacivat — Karagöz'üm, gel beraber bir kahve içelim.",
              "Karagöz , Hoş bulduk Hacivat'ım, odun almaya gidiyorum.",
              "İhtiyar , Evlat, bana biraz su verir misin?"
            ],
            "correctIndex": 1,
            "explanation": "Tiyatro oyunlarında karakter isimlerinin ardına konuşma çizgisinden önce uzun çizgi yerleştirilebilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Kuru Kadı — Bu kararı asla kabul etmiyorum!",
              "Sermet Bey — Nereden geliyor bu gürültü?",
              "Karagöz , Hoş bulduk Hacivat'ım, odun almaya gidiyorum.",
              "Hacivat — Karagöz'üm, gel beraber bir kahve içelim."
            ],
            "correctIndex": 2,
            "explanation": "Tiyatro oyunlarında karakter isimlerinin ardına konuşma çizgisinden önce uzun çizgi yerleştirilebilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Tiyatroda İsim Ardı' kuralı doğru uygulanmıştır?",
            "options": [
              "Sermet Bey - Nereden geliyor bu gürültü?",
              "Zekiye — Seni bir daha göremeyeceğim sanmıştım.",
              "Karagöz , Hoş bulduk Hacivat'ım, odun almaya gidiyorum.",
              "Kuru Kadı - Bu kararı asla kabul etmiyorum!"
            ],
            "correctIndex": 1,
            "explanation": "Tiyatro oyunlarında karakter isimlerinin ardına konuşma çizgisinden önce uzun çizgi yerleştirilebilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "İhtiyar , Evlat, bana biraz su verir misin?",
              "Karagöz — Hoş bulduk Hacivat'ım, odun almaya gidiyorum.",
              "Zekiye — Seni bir daha göremeyeceğim sanmıştım.",
              "Kuru Kadı — Bu kararı asla kabul etmiyorum!"
            ],
            "correctIndex": 0,
            "explanation": "Tiyatro oyunlarında karakter isimlerinin ardına konuşma çizgisinden önce uzun çizgi yerleştirilebilir."
          }
        ]
      }
    ]
  },
  {
    "id": "egik-cizgi",
    "symbol": "/",
    "name": "Eğik Çizgi",
    "color": "#0d9488",
    "description": "Tarihlerin yazımında, yan yana dizelerde veya genel ağ adreslerinde kullanılan bölme çizgisi.",
    "rules": [
      {
        "id": "egik_cizgi_r1",
        "title": "Yan Yana Dizeler",
        "ruleText": "Dizeler yan yana yazıldığında aralarına konur.",
        "examples": [
          "Korkma! Sönmez bu şafaklarda yüzen al sancak / Sönmeden yurdumun üstünde tüten en son ocak.",
          "Gözlerin bir çığlık gibi çınlar kulaklarımda / Uyudun uyanamadın kim bilir hangi rüyada?",
          "Sana dar gelmeyecek makberi kimler kazsın? / Gömelim gel seni tarihe desem sığmazsın.",
          "Bin atlı akınlarda çocuklar gibi şendik / Bin atlı o gün dev gibi bir orduyu yendik.",
          "Ruhumun senden İlahi şudur ancak emeli / Değmesin mabedimin göğsüne namahrem eli."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Yan Yana Dizeler' kuralı doğru uygulanmıştır?",
            "options": [
              "Ruhumun senden İlahi şudur ancak emeli - Değmesin mabedimin göğsüne namahrem eli.",
              "Ne yapsan ne etsen nafile her şey boşuna , Gidiyorsun nihayet o karanlık yolculuğa.",
              "Sana dar gelmeyecek makberi kimler kazsın? : Gömelim gel seni tarihe desem sığmazsın.",
              "Korkma! Sönmez bu şafaklarda yüzen al sancak / Sönmeden yurdumun üstünde tüten en son ocak."
            ],
            "correctIndex": 3,
            "explanation": "Şiir dizeleri alt alta değil de düz yazı gibi yan yana yazıldığında, dizelerin bittiği yer eğik çizgiyle gösterilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Korkma! Sönmez bu şafaklarda yüzen al sancak / Sönmeden yurdumun üstünde tüten en son ocak.",
              "Sana dar gelmeyecek makberi kimler kazsın? / Gömelim gel seni tarihe desem sığmazsın.",
              "Gözlerin bir çığlık gibi çınlar kulaklarımda , Uyudun uyanamadın kim bilir hangi rüyada?",
              "Ruhumun senden İlahi şudur ancak emeli / Değmesin mabedimin göğsüne namahrem eli."
            ],
            "correctIndex": 2,
            "explanation": "Şiir dizeleri alt alta değil de düz yazı gibi yan yana yazıldığında, dizelerin bittiği yer eğik çizgiyle gösterilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Yan Yana Dizeler' kuralı doğru uygulanmıştır?",
            "options": [
              "Gözlerin bir çığlık gibi çınlar kulaklarımda , Uyudun uyanamadın kim bilir hangi rüyada?",
              "Ruhumun senden İlahi şudur ancak emeli - Değmesin mabedimin göğsüne namahrem eli.",
              "Bin atlı akınlarda çocuklar gibi şendik ; Bin atlı o gün dev gibi bir orduyu yendik.",
              "Sana dar gelmeyecek makberi kimler kazsın? / Gömelim gel seni tarihe desem sığmazsın."
            ],
            "correctIndex": 3,
            "explanation": "Şiir dizeleri alt alta değil de düz yazı gibi yan yana yazıldığında, dizelerin bittiği yer eğik çizgiyle gösterilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Sana dar gelmeyecek makberi kimler kazsın? / Gömelim gel seni tarihe desem sığmazsın.",
              "Bin atlı akınlarda çocuklar gibi şendik ; Bin atlı o gün dev gibi bir orduyu yendik.",
              "Korkma! Sönmez bu şafaklarda yüzen al sancak / Sönmeden yurdumun üstünde tüten en son ocak.",
              "Gözlerin bir çığlık gibi çınlar kulaklarımda / Uyudun uyanamadın kim bilir hangi rüyada?"
            ],
            "correctIndex": 1,
            "explanation": "Şiir dizeleri alt alta değil de düz yazı gibi yan yana yazıldığında, dizelerin bittiği yer eğik çizgiyle gösterilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Yan Yana Dizeler' kuralı doğru uygulanmıştır?",
            "options": [
              "Korkma! Sönmez bu şafaklarda yüzen al sancak - Sönmeden yurdumun üstünde tüten en son ocak.",
              "Sana dar gelmeyecek makberi kimler kazsın? : Gömelim gel seni tarihe desem sığmazsın.",
              "Ruhumun senden İlahi şudur ancak emeli / Değmesin mabedimin göğsüne namahrem eli.",
              "Ne yapsan ne etsen nafile her şey boşuna , Gidiyorsun nihayet o karanlık yolculuğa."
            ],
            "correctIndex": 2,
            "explanation": "Şiir dizeleri alt alta değil de düz yazı gibi yan yana yazıldığında, dizelerin bittiği yer eğik çizgiyle gösterilir."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Gözlerin bir çığlık gibi çınlar kulaklarımda / Uyudun uyanamadın kim bilir hangi rüyada?",
              "Bin atlı akınlarda çocuklar gibi şendik / Bin atlı o gün dev gibi bir orduyu yendik.",
              "Sana dar gelmeyecek makberi kimler kazsın? / Gömelim gel seni tarihe desem sığmazsın.",
              "Ne yapsan ne etsen nafile her şey boşuna , Gidiyorsun nihayet o karanlık yolculuğa."
            ],
            "correctIndex": 3,
            "explanation": "Şiir dizeleri alt alta değil de düz yazı gibi yan yana yazıldığında, dizelerin bittiği yer eğik çizgiyle gösterilir."
          }
        ]
      },
      {
        "id": "egik_cizgi_r2",
        "title": "Adresler ve Kapı No",
        "ruleText": "Adres yazarken apartman numarası ile daire numarası arasına ve semt ile şehir arasına konur.",
        "examples": [
          "Mithatpaşa Caddesi No: 45/12 Çankaya / Ankara",
          "Atatürk Bulvarı No: 120/4 Kadıköy / İstanbul",
          "İnönü Sokak No: 8/3 Selçuk / İzmir",
          "Fatih Mahallesi No: 15/2 Melikgazi / Kayseri",
          "Hürriyet caddesi No: 98/1 Nilüfer / Bursa"
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Adresler ve Kapı No' kuralı doğru uygulanmıştır?",
            "options": [
              "Gazi Caddesi No: 34-5 Akdeniz : Mersin",
              "Mithatpaşa Caddesi No: 45/12 Çankaya / Ankara",
              "Atatürk Bulvarı No: 120:4 Kadıköy , İstanbul",
              "İnönü Sokak No: 8-3 Selçuk : İzmir"
            ],
            "correctIndex": 1,
            "explanation": "Adres bilgilerinde kapı numarası/daire numarası ve ilçe/il arasında eğik çizgi (/) kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Mithatpaşa Caddesi No: 45/12 Çankaya / Ankara",
              "Atatürk Bulvarı No: 120:4 Kadıköy , İstanbul",
              "Hürriyet caddesi No: 98/1 Nilüfer / Bursa",
              "Gazi Caddesi No: 34/5 Akdeniz / Mersin"
            ],
            "correctIndex": 1,
            "explanation": "Adres bilgilerinde kapı numarası/daire numarası ve ilçe/il arasında eğik çizgi (/) kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Adresler ve Kapı No' kuralı doğru uygulanmıştır?",
            "options": [
              "Fatih Mahallesi No: 15,2 Melikgazi - Kayseri",
              "Hürriyet caddesi No: 98:1 Nilüfer , Bursa",
              "Gazi Caddesi No: 34-5 Akdeniz : Mersin",
              "İnönü Sokak No: 8/3 Selçuk / İzmir"
            ],
            "correctIndex": 3,
            "explanation": "Adres bilgilerinde kapı numarası/daire numarası ve ilçe/il arasında eğik çizgi (/) kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Fatih Mahallesi No: 15,2 Melikgazi - Kayseri",
              "Hürriyet caddesi No: 98/1 Nilüfer / Bursa",
              "İnönü Sokak No: 8/3 Selçuk / İzmir",
              "Mithatpaşa Caddesi No: 45/12 Çankaya / Ankara"
            ],
            "correctIndex": 0,
            "explanation": "Adres bilgilerinde kapı numarası/daire numarası ve ilçe/il arasında eğik çizgi (/) kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Adresler ve Kapı No' kuralı doğru uygulanmıştır?",
            "options": [
              "Hürriyet caddesi No: 98/1 Nilüfer / Bursa",
              "Gazi Caddesi No: 34-5 Akdeniz : Mersin",
              "Mithatpaşa Caddesi No: 45,12 Çankaya - Ankara",
              "Fatih Mahallesi No: 15,2 Melikgazi - Kayseri"
            ],
            "correctIndex": 0,
            "explanation": "Adres bilgilerinde kapı numarası/daire numarası ve ilçe/il arasında eğik çizgi (/) kullanılır."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Gazi Caddesi No: 34-5 Akdeniz : Mersin",
              "Atatürk Bulvarı No: 120/4 Kadıköy / İstanbul",
              "Hürriyet caddesi No: 98/1 Nilüfer / Bursa",
              "Fatih Mahallesi No: 15/2 Melikgazi / Kayseri"
            ],
            "correctIndex": 0,
            "explanation": "Adres bilgilerinde kapı numarası/daire numarası ve ilçe/il arasında eğik çizgi (/) kullanılır."
          }
        ]
      },
      {
        "id": "egik_cizgi_r3",
        "title": "Tarihlerin Yazılışı (Alternatif)",
        "ruleText": "Tarihlerin yazılışında gün, ay ve yılı gösteren sayıları ayırmak için konur.",
        "examples": [
          "Atatürk 19/05/1919 tarihinde Samsun'a ayak bastı.",
          "Kardeşim 25/12/2015 tarihinde dünyaya geldi.",
          "Okullar bu yıl 12/09/2026 tarihinde açılacak.",
          "Sınav sonuçları 15/06/2026 günü açıklanacak.",
          "Cumhuriyetimiz 29/10/1923 yılında ilan edildi."
        ],
        "questions": [
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Tarihlerin Yazılışı (Alternatif)' kuralı doğru uygulanmıştır?",
            "options": [
              "Sınav sonuçları 15;06;2026 günü açıklanacak.",
              "Atatürk 19/05/1919 tarihinde Samsun'a ayak bastı.",
              "Kardeşim 25,12,2015 tarihinde dünyaya geldi.",
              "Cumhuriyetimiz 29:10:1923 yılında ilan edildi."
            ],
            "correctIndex": 1,
            "explanation": "Tarihleri yazarken gün, ay ve yıl arasına nokta yerine eğik çizgi (/) de yerleştirilebilir. İki nokta veya virgül ise kesinlikle kullanılamaz."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Cumhuriyetimiz 29/10/1923 yılında ilan edildi.",
              "Okullar bu yıl 12/09/2026 tarihinde açılacak.",
              "Sınav sonuçları 15/06/2026 günü açıklanacak.",
              "Kardeşim 25,12,2015 tarihinde dünyaya geldi."
            ],
            "correctIndex": 3,
            "explanation": "Tarihleri yazarken gün, ay ve yıl arasına nokta yerine eğik çizgi (/) de yerleştirilebilir. İki nokta veya virgül ise kesinlikle kullanılamaz."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Tarihlerin Yazılışı (Alternatif)' kuralı doğru uygulanmıştır?",
            "options": [
              "Atatürk 19:05:1919 tarihinde Samsun'a ayak bastı.",
              "Toplantıyı 05,08,2026 tarihine ertelediler.",
              "Kardeşim 25,12,2015 tarihinde dünyaya geldi.",
              "Okullar bu yıl 12/09/2026 tarihinde açılacak."
            ],
            "correctIndex": 3,
            "explanation": "Tarihleri yazarken gün, ay ve yıl arasına nokta yerine eğik çizgi (/) de yerleştirilebilir. İki nokta veya virgül ise kesinlikle kullanılamaz."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Sınav sonuçları 15;06;2026 günü açıklanacak.",
              "Cumhuriyetimiz 29/10/1923 yılında ilan edildi.",
              "Atatürk 19/05/1919 tarihinde Samsun'a ayak bastı.",
              "Toplantıyı 05/08/2026 tarihine ertelediler."
            ],
            "correctIndex": 0,
            "explanation": "Tarihleri yazarken gün, ay ve yıl arasına nokta yerine eğik çizgi (/) de yerleştirilebilir. İki nokta veya virgül ise kesinlikle kullanılamaz."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde 'Tarihlerin Yazılışı (Alternatif)' kuralı doğru uygulanmıştır?",
            "options": [
              "Cumhuriyetimiz 29/10/1923 yılında ilan edildi.",
              "Toplantıyı 05,08,2026 tarihine ertelediler.",
              "Kardeşim 25,12,2015 tarihinde dünyaya geldi.",
              "Sınav sonuçları 15;06;2026 günü açıklanacak."
            ],
            "correctIndex": 0,
            "explanation": "Tarihleri yazarken gün, ay ve yıl arasına nokta yerine eğik çizgi (/) de yerleştirilebilir. İki nokta veya virgül ise kesinlikle kullanılamaz."
          },
          {
            "type": "multiple-choice",
            "text": "Aşağıdaki cümlelerin hangisinde bir noktalama hatası yapılmıştır?",
            "options": [
              "Toplantıyı 05,08,2026 tarihine ertelediler.",
              "Sınav sonuçları 15/06/2026 günü açıklanacak.",
              "Atatürk 19/05/1919 tarihinde Samsun'a ayak bastı.",
              "Cumhuriyetimiz 29/10/1923 yılında ilan edildi."
            ],
            "correctIndex": 0,
            "explanation": "Tarihleri yazarken gün, ay ve yıl arasına nokta yerine eğik çizgi (/) de yerleştirilebilir. İki nokta veya virgül ise kesinlikle kullanılamaz."
          }
        ]
      }
    ]
  }
];

const generalActivityData = [
  {
    "id": 1,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Üç senelik kira olan beş yüz kırk lira peşin verilecekti. Hacı Niyâzi Efendi'nin evinden çıktıktan sonra Sermet Bey bekçiyi çıkardı, bahşiş diye bir yirmi beşlik kağıt verdi. Bekçi[:] [—] Paranıza yazık oldu efendi dedi, üç sene değil, üç ay oturamazsınız. Görürsün. Görürüz."
  },
  {
    "id": 2,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Çocukların hepsi bir turna dizisi gibi arkasından iniyorlardı. Eşek şaha kalkıyordu. [\"]Ne olmuş bu hayvana[?][\"] \"Bilmem efendim, uyuyordu...\" \"Gemini yanlış vurmuşsunuz.\" \"Hayır.\" \"Getirin bakayım.\" Bütün çocuklar da bakıyordu. Eşeği taş basamağa yaklaştırdım. Tam bu esnada Abdurrahman Çelebi nezleye tutulmuş bir insan gibi, \"Pişih, pişih...\" diye başını sarstı, bütün çocuklar gülmeye başladı."
  },
  {
    "id": 3,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Dregley kalesini sarıyordu. Muhâsaranın iptidâsından nihayetine kadar hazır bulunan kethüdâ, şimdi orada gördüklerini söylüyordu; bu kale gayet sarp, gayet dik, bir kayanın zirvesine yapılmıştı. Arslan Bey sordu[:] [—] Bizim kaleden daha yüksek mi[?] Daha yüksek beyim. Kumandanın ``bizim kale´´ dediği, henüz çırpınan bayrağına hasretle baktığı Şalgo burcu idi."
  },
  {
    "id": 4,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Hizmetçinin yatağın kenarına bıraktığı sabah gaze telerini karıştırmağa başladım. Maria’nm halinde tuhaf bir telâş, âdeta bir rahatsız lık vardı. Gazeteleri bir kenara bırakarak[,] yanma gidip oturdum ve elimi alnına koydum: \"Bugün nasılsın?\" \"İyiyim[...] Çok iyiyim...\" Hiçbir hareket yapmadığı halde, elimi yüzünden çek memi istemediğini anladım. Parmaklarımın onun yanak larına, alnına yapıştığını hissediyordum."
  },
  {
    "id": 5,
    "source": "Ömer Seyfettin - Diyet",
    "text": "İsmini bilmediği memleketler dolaştı. Nihayet Erzurum'da ihtiyar bir demircinin yanına girdi. Otuz yaşına kadar Anadolu[']da uğramadığı şehir kalmadı[.] Kimseye boyun eğmedi. Minnettar kalmadı."
  },
  {
    "id": 6,
    "source": "Ömer Seyfettin - Forsa",
    "text": "Bütün ümidi memleketine, Edremit'e kavuşmaktı. Otuz sene içinde hiçbir an ümidini kesmedi. \"Öldükten sonra dirileceğime nasıl inanıyorsam[,] elli yıl esirlikten sonra da memleketime kavuşacağıma öyle inanırım[!]\" derdi[.] En şanlı, en meşhur Türk gemicilerindendi. Daha yirmi yaşındayken Tarık Boğazı'nı geçmiş, poyraza doğru haftalarca, aylarca, kenar, kıyı görmeden gitmiş, rast geldiği ücra adalardan cizyeler almış, irili ufaklı donanmaları tek başına hafif gemisiyle berbat etmişti."
  },
  {
    "id": 7,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Mektep biraz daha ileride, alçak duvarlı, oldukça geniş bir avlunun ortasında idi. Tek kattı, etrafında yükselen büyük kestane ağaçlarının birbirine karışmış koyu gölgeleri, bütün çatısını kaplardı. Biz daha avlunun kapısından girmeden Hoca Efendi[']nin bulunup bulunmadığını, şöyle bir bakar, anlardık: \"Abdurrahman Çelebi gelmiş mi be?\" \"Gelmiş, gelmiş[...]\" Abdurrahman Çelebi, Hoca Efendi[']nin ihtiyar eşeğiydi. Siyah, huysuz, inatçı bir hayvan... Her sabah bizim gibi erkenden mektebe gelir, akşama kadar kalır; evlerimizden nöbetle getirdiğimiz kucak kucak otları, yazsa ağaçların, kışsa sol taraftaki abdestlik sundurması altında yavaş yavaş yerdi."
  },
  {
    "id": 8,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Belki istiyorum da onun için sordum!\" Gözleri o kadar siyah ve o kadar mânalıydı ki, dayana madım: \"Siz aslen Alman mısınız?\" dedim. \"Evet! Neden sordunuz?\" \"Saçlarınız sarı ve gözleriniz mavi değil[!]\" \"Olabilir[!]\" Yüzünde, her zamanki tebessümünü andıran, fakat biraz da mütereddit görünen bir hareket oldu. \"Babam Yahudi idi.\" dedi. \"Annem Almandır."
  },
  {
    "id": 9,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Erkenden gel beni gör!\" Bunları söylerken mektepte kendisinin de ileri gelen tembellerden olduğunu tamamen unutmuşa benziyordu. Yayut da, bunu burada yüzüne vuramıyacağımdan emin olduğu için pervasızca konuşuyordu. Yerinden kalkar gibi bir hareket yaptı[,] hemen doğruldum ve elimi uzatarak[:] [\"]Bana müsaade!\" dedim. \"Neden canım, daha erken... Ama sen bilirsin!\" Beni yemeğe çağırdığını unutmuştum."
  },
  {
    "id": 10,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Diye geri çekildi. Dizdarla yamakları dükkâna girdiler. Örsün yanından geçen yamaklardan biri haykırdı[:] [—] Ay! İşte, işte... !.."
  },
  {
    "id": 11,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bu sefer ya nılmama imkân yoktu. Sarhoş değildim İskarpinlerinin çıkardığı kuru sesler, tenha sokağın iki tarafındaki evlere çarpıp aksediyordu. Kalbim ufalıyormuş gibi ağrın[;]ıya ve müthiş bir süratle çarpmıya başladı[.] Ayak sesleri adamakıllı yaklaşmıştı. Sokağa sırtımı vererek, kapı ile oynuyordum."
  },
  {
    "id": 12,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Dün başımdan garip bir hâdise geçti ve bana onse ne evvelki başka birtakım hâdiseleri yeniden yaşattı. Unutup gittiğimi zannettiğim bu hâtıraların, bundan sonra beni hiç bırakmıyacaklarını biliyorum... Hangi hain tesadüf dün onları yolumun üstüne çıkardı ve beni[,] se nelerden beri dalmış olduğum derin uykudan[,] artık ya vaş yavaş alıştığım hissiz uyuşukluktan ayırdı[.] Deli olaca ğım, yahut öleceğim dersem yalan söylemiş olurum, însan tahammül edemiyeceğini zannettiği şeylere pek ça buk alışıyor ve katlanıyor. Ben de yaşıyacağım..."
  },
  {
    "id": 13,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "\"Babam Yahudi idi.\" dedi. \"Annem Almandır. Fakat o da sarışın değil[!]\" Merakla sordum: \"Demek siz Yahudisiniz[?]\" \"Evet[...] Yoksa siz de mi Yahudi düşmanısınız?\" \"Ne münasebet... Bizde böyle şeyler yoktur."
  },
  {
    "id": 14,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "... Sofu, sulhperver, sakin padişahın koca devletine sessiz, küçük bir dimağ olan Dîvan düşünmeye başladı. 🙝🙟 Bu elçi, yedi sene sonra takdirin [\"]Yavuz[\"] namındaki yaman sillesiyle her gururunun, her cinayetinin cezasını bir anda gören İsmail[-]i Safevî'ye gönderilecekti! Şehzadeliğini ata binmekten, cirit oynamaktan, silah kullanmaktan ziyade, kitapla geçiren Bayezid-i Veli'nin tabiatı son derece halimdi. Yalnız şiiri, hikmeti, tassavvufu sever; muharebeden, mücadeleden nefret ederdi."
  },
  {
    "id": 15,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Avucunda sıktığı kağıdı yanına koydu. Tekrar Muhsin Çelebi'ye baktı. Ortasında geniş bir kılıç yarasının izi parlayan yüksek alnı[...]al yanakları[...]yeni tıraşlı beyaz, kalın boynu[...]biraz büyücek, eğri burnu...ince sarığı...tıpkı Şehnâme sahifelerinde görülen eski kahramanların resimlerine benziyordu. Evet, bu, alnında yarası görülen kılıcın yere düşüremediği canlı bir kahramandı. İnsaflı sadrazam, vicdanının ruhuna akseden sesini, gururunun karanlığı ile boğmadı."
  },
  {
    "id": 16,
    "source": "Ömer Seyfettin - Yüksek Ökçeler",
    "text": "Gülter: — Her taraf kitli, ne yapayım? Diyordu. Mehmet, tuhaf bir şapırtı içinde Eleni[']ye de: [—] Ülen gece niçin gelmiyon[?] Sana helva yapıp saklayon! Sualini soruyor, Eleni: — Yakalanazağiz vire!"
  },
  {
    "id": 17,
    "source": "Ömer Seyfettin - Ferman",
    "text": "\"Sabah erkenden çıkar, bulurum\" diyerek geri döndü. O kadar karanlıktı ki... Dizgini boş bırakıyor, geldiği yollardan atının sevk[-]i tabiisiyle dönebiliyordu[.] Meşaleleriyle, ordugâh uzaklardan görünmeye başladı. Karanlığın, yağmurun, rüzgârın içinde at, âdi adımlarla yürüyordu."
  },
  {
    "id": 18,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Şimdiye kadar para için çalışmamıştı. ...Bütün şehir halkı, Koca Ali gibi mahir bir ustanın kolu kesileceğine acıdı. Bu kadar yakışıklı[,] mert[,] çalışkan, kuvvetli, güzel bir adamın ölünceye kadar sakat sürünmesine en duygusuz vicdanlar bile dayanamıyordu. İşte herkes onu seviyordu. Sipâhîler kendilerine pek ucuz kılıç döven bu adamı kurtarmaya sözleştiler."
  },
  {
    "id": 19,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Daha İstanbul'dan çıkmazdan evvel bir çavuş gönderilerek Semlin'e mülakat için çağrılan Zigismond'u, padişah nerde huzuruna kabul edecekti? Bir parça yağmurdan yollarını şaşıran, dağılan orduya, padişah nasıl emniyet edecekti? Tosun Bey cesur adamlara mahsus o mütecaviz pervasızlıkla ağzına geleni söylüyordu[:] [—] İki konak arasında bir otağa sahip olamayan adam, koca bir devleti nasıl idare eder[?] dedi. Bu çok ağır bir sualdi."
  },
  {
    "id": 20,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Biz Ankaraya gelmedik, Ankaradan geçiyoruz... Geçerken uğradık.\" Bir limonatacıda beş dakika oturmağa razı oldu ve hikâyesine orada devam etti: \"Kocam şimdi Bağdatta... Biliyorsunuz ya, o müs temleke tüccarıdır[!][\"] \"Ama Bağdat Alman müstemlekesi değil galiba[!]\" \"Biliyorum canım... Fakat kocamın sıcak memleket mahsulleri üzerinde ihtisası var. Bağdatta hurma üzerine iş yapıyor!\" \"Kamerun’da da hurma ticareti mi yapıyordu?\" Kadın, \"Pek münasebetsizsin!\" der gibi yüzüme baktı: \"Bilmiyorum, kendisine mektup yazın ve sorun!"
  },
  {
    "id": 21,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bana yeni ve eski üstatların tabloları hakkında izahat ve riyor, onların kıymetleri hakkında münakaşalar vapıvordu. Birkaç kere tekrar nebatat bahçesine, bir iki akşam da operaya gitmiştik. Fakat gece saat onda[,] on buçukta bu radan çıkıp işine gitmek ona güç geldiği için opera ziya retlerinden vazgeçtik[.] Sonradan bir gün bana: \"Yalnız zaman bakımından değil, başka bir sebep dolayısiyle de operaya gitmek istemiyorum. Oradan çıktıktan sonra Anlantik’te şarkı şöylemek bana dünyanın en gü lünç, en bayağı bir işi gibi geliyor.\" demişti Fabrikaya yalnız öğleden evvelleri gidiyordum."
  },
  {
    "id": 22,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Dregley kalesini sarıyordu. Muhâsaranın iptidâsından nihayetine kadar hazır bulunan kethüdâ, şimdi orada gördüklerini söylüyordu; bu kale gayet sarp, gayet dik, bir kayanın zirvesine yapılmıştı. Arslan Bey sordu[:] [—] Bizim kaleden daha yüksek mi[?] Daha yüksek beyim. Kumandanın ``bizim kale´´ dediği, henüz çırpınan bayrağına hasretle baktığı Şalgo burcu idi."
  },
  {
    "id": 23,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Çabuk yürü yelim!\" \"Sizi tekrar eve götürmek için bekliyeyim mi?\" \"Hayır, hayır... Asla... Yarın buluşuruz[!][\"] [\"]Siz bilirsiniz!\" Belki üşümemek için, bana daha çok sokuldu. Elek triklerin aydınlattığı kapının önüne yaklaşınca durdu, ko lumdan çıkarak elini uzattı. Fevkalâde ciddî bir şey dü şünüyor gibiydi."
  },
  {
    "id": 24,
    "source": "Ömer Seyfettin - Diyet",
    "text": "O, çeliğe \"çifte su\" vermesini biliyordu. Uzun kılıçlar değil, yaptığı kısacık bıçaklar bile iki kat olur, yine kırılmazdı. [\"]Çifte su vermek[\"], sanatının, yalnız ona özgü bir sırrı idi[.] Yanına çırak almaz, kimseyle çok konuşmaz, dükkânından dışarı çıkmaz, habire uğraşırdı. Bekardı."
  },
  {
    "id": 25,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Yürüdü. Başı her vakitki gibi yukarda, göğsü her vakitki gibi ileride idi. Koynundan çıkardığı nâme[-]i hümâyununu öptü[.] Başına koydu. Sonra altın tahtın üstüne -allı, yeşilli, mavili, morlu, ipek yığınlarına sarılmış, sırmalarla, tuğlarla, sancaklarla bağlanmış gibigarip bir yırtıcı kuş sükûnetiyle tüneyen Şah'a uzattı."
  },
  {
    "id": 26,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Onlar da bizim gibi memur. Bacanak İktisat Vekâletindedir, birer işe yerleştirdi. Okumadılar, ellerinde bir ortamektep şahadetnamesi bile yok!\" Sonra, birdenbire sözünü keserek sordu[:] \"Tercüme için bir şey mi getirdiniz[?]\" \"Evet[...] Yarma lâzımmış. Sabahleyin hademeyi gön derecekler!\" Kâğıtları aldı, yanma bıraktı."
  },
  {
    "id": 27,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Kadın berrak bir kahkaha attı: \"Çok acayip bir çocuksunuz!\" dedi. Bu kahkahayı da hatırladım. Sergide o resmin kar şısında dalgın dalgın otururken yanıma gelip bu resimde ne bulduğumu soran[,] \"Anneme benziyor[!]\" dediğim za man[!] \"Sizde annenizin resmi yok mu?\" diyerek kahka hayla gülen kadın buydu... Onu o zaman nasıl olup da tanıyamadığımı bir türlü anlamıyordum."
  },
  {
    "id": 28,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Saatlerce kımıldamadı. Dinlediği nağmelerin, ruhunda kalan ahenklerini işitiyor, tıpkı mescidde gibi gaşyoluyordu. Ansızın arkasından bir ses[:] [—] Kimdir o?... Diye bağırdı. ..."
  },
  {
    "id": 29,
    "source": "Ömer Seyfettin - Diyet",
    "text": "... Hacı Kasap, âdeta bu sözleri \"aferin\" tarzında diline pelesenk etmişti. Her emrinin icrasından sonra kır sakallı[,] çirkin[,] sıska suratını ekşiterek, mavi çukur gözleriyle onu tepeden tırnağa kadar süzer, \"Aklında tut, benim esirimsin!\" der gibi verdiği diyeti hatırlatırdı[.] Koca Ali susar, kalbinin yırtıldığını, göğsüne sıcak sıcak bir şeyler yayıldığını, kilitlenen çenelerinin çatırdadığını, şakaklarının attığını duyardı. Geceleri uyuyamıyor, gündüzleri uğraşırken, mandıraya gidip gelirken, salhânede koyunları yüzerken, müşterilere et keserken, \"Ne yapacağım, ne yapacağım?\" diye düşünüyor, hiçbir şeye karar veremiyordu."
  },
  {
    "id": 30,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "\"İsviçre bile, refahını ecnebi sey yahlara borçlu olduğu halde, böyle değildir. Halk her ya bancıya âdeta zorla evine girmiş biri gibi bakar... Halbuki Türkiyede herkes, bir ecnebiye bir kolaylık yapmak için sanki fırsat bekliyor[;] sonra Ankara pek hoşuma gidiyor[!]\" Yaşlı kadın boyuna konuşuyordu. Küçük kız beş on adım ileriden gidiyor, eliyle yolun kenarındaki ağaçlara do kunuyordu. İstasyona bir hayli yaklaştıktan sonra, son bir kararla, fakat mümkün olduğu kadar lâkayt görünme ğe çalışarak, söze başladım: \"Berlinde akrabanız çok mudur?\" \"Hayır, pek çok değil..."
  },
  {
    "id": 31,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Gür kaşları çatıldı. Şahin bakışlı iri ela gözleri açıldı. Nefret ve hiddetle kılıcını çekti[:] [—] Padişahımın emrini yapmayan âsilerin başını ben keserim![...] Diye kükreyerek yumuşak kalplı, zayıf ve itaatsız ihtiyarın üzerine yürüdü. Al çuhadan büyük kapı perdesinin arkasında gizli nöbet bekleyen silahlı hademeler koşuştular."
  },
  {
    "id": 32,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Dedi. Yürüdüler, bahçe hakikaten biraz vahşiydi. Bakımsızlıktan[,] ayak basmamış bir dere içine dönmüştü[.] Köşkün arkasındaki küçük çam ormanında da vahşi bir sükun vardı. Bekçi köşke girmedi."
  },
  {
    "id": 33,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Zaten Sadrazam, onun vazifesini hakkıyla îfâ edeceğinden son derece emindi. Yollara, derebeylerine, aşiretlere dair bazı şeyler sordu. Çelebi kalkıp çekileceği zaman[:] [—] Ben satın almak istiyorum, oğlum, kaftanın burada mı[?] dedi. Hayır, getirmedim."
  },
  {
    "id": 34,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Başımı kaldınnca gözlerinden şakaklarına doğru yaşlar sızdığını gördüm. Raif Efendi bunları saklamak veya silmek için hiç bir harekette bulunmuyor, gözlerini kırpmadan bana ba kıyordu. Ben de kendimi tutamamış[,] ağlamıya başlamış tım[;] bu, ancak fevkalâde büyük ve sahici kederlerde gö rülen, sessiz, hıçkırıksız ağlayışlardan biri idi[.] Ondan ay rılmanın bana güç geleceğini biliyordum. Fakat bunun bu kadar korkunç, bu kadar acı olacağını tasavvur ede memiştim."
  },
  {
    "id": 35,
    "source": "Ömer Seyfettin - Kütük",
    "text": "İki top yetmez mi? Ne duruyoruz?\" diye çadırlarında dedikodu yapıyorlardı. Buraya gelindiği günden beri askere istirahat ettiren Arslan Bey, her sabah erkenden atına biniyor, tek başına gerilerdeki ormanların içine dalıyor, saatlerce kalıyor, gülerek dönüyor[:] [—] Hava bozmayacak mı[?] Ah, biraz sis olsa... Diye gözlerini gökten, kalenin sallanan bayrağından ayıramıyordu."
  },
  {
    "id": 36,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Yüzümün bir kaç santim ilerisine kadar yaklaşan bu saadet karşısında kalbim duracak gibi oldu. Fakat o birdenbire ve o’dukça sert bir hareketle ellerini çekti ve doğruldu, \"Siz nerede oturuyorsunuz?\" \"Lützow caddesinde!\" 90 KÜRKMANTOLUMADONNA \"Uzak değilmiş!... Şu halde yarın öğleden sonra gelin beni buradan alın[!][\"] \"Hangi dairede oturuyorsunuz!\" \"Ben sizi pencerede beklerim. Yukarı çıkmanıza hacet yok!\" Kapının üzerinde duran anahtarı çevirerek içeri girdi. Bu sefer süratli adımlarla evin yolunu tuttum."
  },
  {
    "id": 37,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Baktı, baktı... Ömründe ilk defa bir falaka görüyormuş gibi dikkatle baktı. Döndü, selam vermeden çıkarken[;] \"Biraz dışarı gelir misiniz, Hoca Efendi[?]\" dedi. Hoca Efendi titreyerek dîvan duruyor gibi kollarını önüne kavuşturarak yürüdü. Hakim Efendi ile kaymakamın arkasından bahçeye çıktı."
  },
  {
    "id": 38,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "🙝🙟 ...Geçtiği yollardan gece gündüz dörtnala döndü. Üsküdar'a girdiği zaman, Muhsin Çelebi'nin cebinde tek bir akçe kalmamıştı. Süslü hademelerine dedi ki[:] [—] Evlatlarım! Bindiğiniz atları, haşa ları, takımları, üstünüzdeki esvâbları, belinizdeki murassâ hançerleri size bağışlıyorum. Bana hakkınızı helal ediyor musunuz?"
  },
  {
    "id": 39,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "\"Birşey değil... Herhalde geçecek... Ama sen pek bitkin duruyorsun[!][\"] \"Hasta olduğunu bu gece Atlantik’ten öğrendim. Eve gittim, karşı dairenin hizmetçisi buraya getirdiklerini söy ledi Gece içeri bırakmadılar, ben de sabahı bekledim!\" \"Nerede?\" \"Burada... Hastanenin etrafında!\" Gözlerini üstümde gezdirdi."
  },
  {
    "id": 40,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Buna rağmen uzun müddet elimdeki kâğıda baktım. Her kelimeyi teker teker ve bir kaç defa okudum. Sonra kalktım[,] biraz evvel hazırladığım paketi kolumun altına sıkıştırdım[,] dışarı çıktım[.] Ne olmuştu? Etrafımda hiçbir şeyin değişmediğini görüyordum."
  },
  {
    "id": 41,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Fakat ayaklarındaki nikris sızılarını duymuyor, Kurban Bayramı namazını Semlin'de kılmayı düşünüyordu. Artık eskisi gibi ata binemiyor, hatta vezirleriyle istişâre için bile gerdûnesinden çıkamıyordu. Konak yerinde otağ[-]ı hümâyunu görmeyen bütün ordu, âsumânî bir gazap karşısında donakalmış[;] günahkâr bir cemaat gibi birdenbire sustu[.] Sesler, borular, uğultular, hatta atların kişnemesi bile kesildi. Yalnız yerlere ve çalılara düşen yağmur damlalarının şıkırtışı duyuluyordu."
  },
  {
    "id": 42,
    "source": "Ömer Seyfettin - Diyet",
    "text": "\"Ne yapacağım, ne yapacağım?\" hülyasına öyle dalmıştı ki... Kasabın geldiğini duymadı. Ansızın uğursuzun boğuk sesi yüreğini ağzına getirdi: — Ne yapıyorsun be[?][...] Döndü. Efendi köşesinde oturmuş, çubuğunu tüttürüyordu: — Bıçakları biliyorum, dedi."
  },
  {
    "id": 43,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Bu kalabalığın arasında Tosun Bey'in al atıyla süzüldügü görüldü. İki konak geriden orduya yetişmişti. Yol kenarında semeri devrilmiş bir katırı kaldıran yeniçerilere sordu: [—] Otağ[-]ı hümâyun nerede, ağalar[?] Yeniçeriler onu görünce doğruldular, hürmetle selamladılar. En yaşlıları cevap verdi: — Kurulmadı."
  },
  {
    "id": 44,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Fakat ben hiç tereddüt etmeden büyük kapıya gittim ve kapıcıyı odasından çıkardım. Geceyarısından sonra gelen ve bu müthiş soğuktaken disini rahatsız eden ziyaretçiye karşı belki de hakkettiğinden biraz fazla nezaket gösteren kapıcının bana vere bilecek hiçbir bilgisi yoktu. Ne böyle bir kadının geldiğinden[,] ne hastalığından[,] ne de nereye yatırıldığından ha beri vardı[.] Her sualime, canı sıkıldığı halde gülümsemeğe çalışarak: \"Yarın dokuzda gelin, öğrenirsiniz!\" demekle mukabele ediyordu. Maria Puder’i nekadar sevdiğimi ve ona nasıl delice bağlı olduğumu, sabaha kadar yüksek taş duvarların etrafmda dolaştığım ve hep onu düşündüğüm bu gecede tam mânasiyle anladım."
  },
  {
    "id": 45,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Hiddetlendi: \"Kim aldıysa söylesin, şart olsun gebertirim.\" Hep bir ağızdan, ahenkle, \"Şart olsun, haberimiz yok!\" dedik. \"Kim aldı? Söyleyiniz.[\"] [\"]Bilmiyoruz, bilmiyoruz[!]\" \"Pekâlâ, ben size gösteririm. Şimdi hapşırınca alan meydana çıkar. Şart olsun, onu falakaya yıkacağım."
  },
  {
    "id": 46,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Sokuldum. \"Nereye gidiyorsun?\" diye sordu. \"Hiç, geziniyorum[!]\" \"Gel, bize gidelim!\" Cevabımı beklemeden bana['] yanında yer açtı. Yolda anlattığına göre, çalıştığı şirketin bazı fabrikalarını dolaş maktan geliyordu: \"Geleceğimi eve telgrafla bildirmiştim, her halde ha zırlık yapmışlardır. Yoksa seni davet etmiye cesaret ede mezdim!\" dedi.."
  },
  {
    "id": 47,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Hepimizi sıra dayağına çektiler. Bu günden sonra Hoca Efendi esneme ile hapşırmayı en büyük kabahat sayıyordu. Hele hapşırmak[...]Kazara, kendiliğinden hapşıranı, \"Benimle eğleniyor musunuz[?]\" diye yere yıkıyor, bayıltıncaya kadar dövüyordu. Aksi gibi, benim hiç durmadan esneyeceğim geliyor, hapşırmak istiyordum. Birkaç defa bunun için dayak yedim."
  },
  {
    "id": 48,
    "source": "Ömer Seyfettin - Diyet",
    "text": "O daha pek gençken, vezir amcasının lütfunu bile çekememiş, minnettar kalmamak için aile ocağından kaçmış, gurbet ellerine atılmıştı. Şimdi kör talihi, onu bak kime köle edecekti? Sipâhîler[:] \"Hacı[']nın yaşı yetmişi aşmış[...] Zaten daha ne kadar yaşar ki... O ölünce yine sen hür kalır, bize kılıç yaparsın."
  },
  {
    "id": 49,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Ana noktalarda asla değişmem... Nasıl? Benimle arkadaş olacak mısınız?[...]\" Bütün bu sözler beni serseme döndürmüştü[...] Onun hakkında son bir hüküm vermekten korkuyor ve bunda isabetli olamıyacağımı seziyordum. Kafamdan yalnız bir arzu geçiyordu: ne pahasına olursa olsun, ona yakın bu lunmak, ondan ayrılmamak..."
  },
  {
    "id": 50,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Ansızın uğursuzun boğuk sesi yüreğini ağzına getirdi: — Ne yapıyorsun be?... Döndü. Efendi köşesinde oturmuş, çubuğunu tüttürüyordu[:] [—] Bıçakları biliyorum, dedi[.] Hay tembel miskin hay!... Sabahtan beri ne yaptın?"
  },
  {
    "id": 51,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Konuşurken düşündüğü hep kendi planıydı. Yine göğe dalmıştı. Birdenbire sordu: [—] Hava kapanıyor gibi, değil mi[?] Evet... Bakalım yarın..."
  },
  {
    "id": 52,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Belki on dakika böyle kaldık. Nihayet başını bana çevirdi, göz lerini açtı, uzun zamandan beri ilk defa olarak, belli be lirsiz gülümsedi, (yahut ben böyle zannettim) ve gayet sakin bir sesle: \"Artık uyumayalım mı?\" dedi. Yerimden kalktım[;] yatacağım yeri düzelttim[;] soyundum ve elektriği söndürdüm[;] fakat geç vakte kadar uyu yamadım. Onun da uyanık olduğunu, nefesinin duyulmayışmdan anlıyordum. Yavaş yavaş gözlerime ağırlık çök tüğü halde, her akşam duymağa alıştığım bu muntazam ve yumuşak nefes hışırtısının başlamasını bekledim."
  },
  {
    "id": 53,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Büyük bir sü ratle iskarpinlerini, çoraplarını çıkardı, entarisini başın dan sıyırıp bir iskemleye attı ve yorganın içine girdi. Oturduğum yerden kalktım; hiç bir şey söylemeden ona elimi uzattım. İlk defa gördüğü bir insanı tetkik edi yormuş gibi beni süzdü[,] yüzüne bir sarhoş gülüşü yayıl dı[.] Gözlerimi indirdim. Tekrar baktığım zaman yatakta bir parça doğrulduğunu ve gözlerini, büyük bir endişe içindeymiş gibi açtığını ve arasıra v bir uykudan uyanma ğa çalışır gibi kırptığını gördüm."
  },
  {
    "id": 54,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Kolunun diyetini verecek on parası yoktu... Şimdiye kadar para için çalışmamıştı. [...]Bütün şehir halkı[,] Koca Ali gibi mahir bir ustanın kolu kesileceğine acıdı[.] Bu kadar yakışıklı, mert, çalışkan, kuvvetli, güzel bir adamın ölünceye kadar sakat sürünmesine en duygusuz vicdanlar bile dayanamıyordu. İşte herkes onu seviyordu."
  },
  {
    "id": 55,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Onun şaşıracağını, sırrını ele ^ereceğimden korkacağını sanmıştım. Hiç de böyle olmadı. Her zamanki yaoancı ve dalgın gülüşiyle kâğıdı elimden alarak[:] [\"]Senelerce evvel, bir müddet resimle meşgul olmuştum[!]...\" dedi. \"Arasıra, el alışkanlık fiyle bir şeyler karalıyo rum... Görüyorsunuz ya, mânâsız } şeyler..."
  },
  {
    "id": 56,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Mutfağın olduğu yerde beşyüz senelik bir evliya yatıyormuş... Sermet Bey, atılan taşlara, kırılan camlara rağmen hâlâ periye inanmıyordu. Bu peri daima çamlığın içine kaçıyor[,] orada sır oluyordu[.] Sermet Bey, bir gün çamlığın içine saklanıp birdenbire perinin karşısına çıkmayı, yahut arkasından yavaşça gidip elini sürüvermeyi düşündü. Evdekilerin hiçbiri buna razı olmadı: \"Seni hemen oracıkta çarpar!\" diyorlardı."
  },
  {
    "id": 57,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Burcun tepesinden bir cevap verdiler. Tercüman tekrarladı: — \"Ne gibi şartlarla?\"diyorlar, beyim. Arslan Bey, deminkinden daha sert bir sesle haykırdı[:] [—] Şartım filan yok[.] Biz teslim olanın canına kıymayız. Teslim olmazsanız, beş dakika sonra kalenin içinde bir canlı adam kalmaz."
  },
  {
    "id": 58,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "\"Çok hoş bir yerdir. Acayip insanlar göreceksiniz.\" \"Romanisehes Kaffee’ye mi?\" \"Evet, biliyor musunuz? Gittiniz mi[?][\"] \"Hayır, duydum!\" Güldü: \"Ay sonlarmda parasız kalan arkadaşlarınızdan mı[?]\" Ben de gülümsedim ve önüme baktım. Her zaman sanatkârlar tarafından ziyaret edilenta kahvenin geceleri on birden sonra yaşlı, zevk düşkünü, genç meraklısı ve paralı kadınlarla dolduğunu ve her mil letten, her yaştan birçok jigoloların bu zamanlarda oraya gidip kendilerini beğendirmiye çalıştıklarını duymuştum. Henüz vakit erken olduğu için kahvede sadece genç sanatkârlar vardı."
  },
  {
    "id": 59,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Hattâ benim bile!...\" Sözüne devam edemedi. Öksürüyordu. Nihayet göz leriyle defteri işaret ederek[:] [\"]Oku, göreceksin[!]\" dedi. Bunu bekliyormuş gibi hemen siyah kaplı defteri cebime koydum. \"Yarın sabah getirir, gözünüzün önünde yakarım!\" dedim."
  },
  {
    "id": 60,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Sonra söyliyeceği şeyler... Bunları hiç öğrenmemek daha iyi olmaz mıydı? Aradan bu kadar seneler [-]tam on sene, hat tâ biraz da fazlageçtikten sonra öğrenmenin ne faydası vardı[?][.]. Hâlâ sokak ortasında durduğumuzu farkettim ve: \"Gelin bir yerde oturalım; Birbirimize soracak şeyler vardır... Sizi Ankarada gördüğüme hâlâ hayret ediyo rum!\" dedim."
  },
  {
    "id": 61,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Bununla beraber hudutlarda yine kavganın arkası alınamıyordu. Bosna, Eflak, Karaman, Belgrad, Transilvanya, Hırvatistan, Venedik seferleri birbirini takip ediyor; Modon, Koron, Zonkiyo, Santamavro fetholunuyordu. Sanki İstanbul Fâtihi[']nin azmiyle dehası [-]tahta geçer geçmez babasının heykelini \"gölgesi yere düşüyor\" diye kırdırıp sevaba girmeye kalkanzâhit halefinin zamanında da sönmüyor[;] sönmez bir alev, ezeli bir ruh gibi yaşıyordu. Rahat istendikçe, gaile gaile üstüne çıkıyordu. Hele şark..."
  },
  {
    "id": 62,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Artık bütün tereddütlerim, bin bir türlü mânâsız tahminlerim uçup gitmişti. İçimi tekrar bir burkulma sardı. Onun burada[,] etrafına bu kadar yalandan tebessümler saçmıya[,] bu kadar istemeden şuh cilveler yapmıya mecbur kalarak çalışması bana pek hazin geldi[.] Resimde gördüğüm kadım her vaziyette, hattâ kucak tan kucağa dolaşırken tasavvur etmek mümkündü. Fakat onu böyle göreceğimi aklıma getiremezdim."
  },
  {
    "id": 63,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Cenk istemeyen padişah, Ankara'ya, Yahya Paşa kumandasında bir ordu göndermekten başka bir şey yapmadı. Bu şah, zalim olduğu kadar da kurnazdı. Osmanlı toprağına geçtiği için özür diliyor[,] birbiri arkasına elçiler gönderiyordu[.] O vakit Trabzon valisi bulunan Şehzade Yavuz, babası gibi sabredememiş, Tebriz hududunu geçmiş; Bayburd'a, Erzincan'a kadar her tarafı talan etmiş, hatta Şah'ın kardeşi İbrahim'i esir almıştı. İsmail'in elçisi şimdi bu tecavüzden de şikayet ediyor; Osmanlı toprağına son akınlarının, padişahın devletine karşı değil, sırf Alâüddevle aleyhine olduğunu tekrarlıyordu."
  },
  {
    "id": 64,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Gözlerini gözlerime dikerek, ısrarla sordu: \"Peki ama, ne lüzum var? Yetmez mi artık?...\" Bu sırada Mihriye hanım içeri girdi. Bana sokularak: \"Bugün iyice[!]\" dedi, \"Artık bunu da atlattı inşallah!\" Sonra kocasına döndü: \"Pazara çamaşır yıkanacak[...] Şu senin havluyu Beye fendi getiriverse!\" Raif Efendi peki makamında başını salladı. Kadın do lapta bir şeyler arayıp aldıktan sonra tekrar çıktı."
  },
  {
    "id": 65,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Doğruldu. Ayağa kalktı. Ferman ve kese yere düştü[:] [—] Ben kafamı kolay kolay vermem. Dedi. Pencereye yaklaştı."
  },
  {
    "id": 66,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Ama başucuna asmadı, oturduğu minderin arkasına sakladı. Ama şimdi kim kabahat işlerse eskisinden fena dövüyordu. 🙝🙟 İyice hatırlıyorum[;] kırk çocuk[,] hepimiz müttefik[.] Aramızdan müzevir çıkmıyor, Hoca Efendi'ye karşı tek bir vücut gibi hareket ediyorduk. Bir gün bahçede sözbirliği ettik."
  },
  {
    "id": 67,
    "source": "Ömer Seyfettin - Kütük",
    "text": "İki top yetmez mi? Ne duruyoruz?\" diye çadırlarında dedikodu yapıyorlardı. Buraya gelindiği günden beri askere istirahat ettiren Arslan Bey, her sabah erkenden atına biniyor, tek başına gerilerdeki ormanların içine dalıyor, saatlerce kalıyor, gülerek dönüyor: [—] Hava bozmayacak mı[?] Ah, biraz sis olsa... Diye gözlerini gökten, kalenin sallanan bayrağından ayıramıyordu."
  },
  {
    "id": 68,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Adalelerimde yorgunluk ve başımda ağrı...\" Tekrar yatağına girerek, arka üstü uzandı. Eliyle göz lerini kapadı ve devam etti: \"Demek ki insanlar birbirine ancak muayyen bir had de kadar yaklaşabiliyorlar ve ondan sonra, daha fazla so kulmak için atılan her adım daha çok uzaklaştırıyor. Se ninle aramızdaki yakınlaşmanın bir hududu[,] bir sonu ol mamasını nekadar isterdim[.] Beni asıl, bu ümidin de boşa çıkması üzüyor... Bundan sonra kendimizi aldatmıyalü zum yok..."
  },
  {
    "id": 69,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Büyük Hanım, — Niçin ümmet-i Muhammed'i korkutup deli ediyorsun a efendi?... Dedi. Sermet Bey: [—] Onun sebebini ben bilirim[!] Cevabını verdi. Sonra büyük kızına hokka kalemle, yazıhanedeki kontrat kağıdını çabucak getirmesini söyledi."
  },
  {
    "id": 70,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Demir kapılar açılmıştı. Korkudan sapsarı kesilen tuğlu kumandan, altın kılıçlı asilzâdeler, zırhlı şövalyeler, Arslan Bey'in önünde dize gelmişlerdi. Silahları alınan düşman ikişer ikişer bağlanıyor[,] takım takım ordugâhın arkasına götürülüyordu[.] Kalenin içindeki kıymetli şeylerden bir dağ ortada kabarıyor; al yeşil bayraklarla kalenin tepesine dolan askerler bağırışıyorlar, aralarındaki dervişler, bedenlerden sarkarak ezan okuyorlar, tekbir çekiyorlardı. Teslim olan kumandanla erkânına Arslan Bey: — Korkmayınız."
  },
  {
    "id": 71,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Epey zamandan beri uyanık olduğunu anladım ve içimdeki endişelerin birdenbire büyüdüğünü, göğsümü âdeta görünmez bir çemberin sarıp sıktığını hissettim. Bütün bü mânâsız hislerin, yersiz korkuların şu anda hiç lüzumu olmadığını, hayatımın en aydınlık gününü ve himler ve fena sezişlerle karartmanın sebepsizliğini dü şündükçe büsbütün canım sıkılıyordu. Başını çevirmeden sordu: [\"]Uyandınız mı?[\"] [\"]Evet!.. Siz uyanalı çok oldu mu?\" \"Biraz evvel!\" Sesi bana tekrar cesaret verdi. Uzun zamandan beri kulaklarımın en tatlı aşinası olan ve bende yalnız iyi hâ tıralar uyandıran bu ses, birdenbire çıkıp gelen güveni lecek bir dost gibi, içime ferahlık getirmişti."
  },
  {
    "id": 72,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Kadınlar biraz şaşırmıştılar. Neclâ: \"Babacığım, kolunu çıkarmasana!...\" diye söylendi. Raif Efendi[:] [\"]Biliyorum, biliyorum[!]\" demek istiyen bir hareketle çabuk çabuk başını salladı ve onlara, çıkma ları için, tekrar işaret etti. İki kadın da yüzüme sorucu gözlerle bakarak odayı terkettiler. O zaman Raif Efendi, tamamen unutmuş olduğum, elimdeki paketi gösterdi: \"Hepsini getirdin mi?\" Evvelâ anlıyamıyarak yüzüne baktım."
  },
  {
    "id": 73,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Hiç şüphesiz. Mutlaka... Kubbealtı vezirlerinin tamamıyla kendi fikrinde olduğunu anlayan sadrazam, düşündüğünü daha açık söyledi[:] [—] O halde bizden elçi gidecek adamın çok cesur olması lazım[!] Öyle bir adam ki, ölümden korkmasın. Devletin şânına dokunacak hareketlere karşı koysun."
  },
  {
    "id": 74,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Evvelce geçirdiği hastalık da vücudunu sarsmış... Doğumdan evvel birkaç kere tamamiyle kendini kaybetmiş. Doktorlar müdahale ederek çocuğu almışlar ve yaşatmışlar[;] buna rağmen Maria’ya nöbetler gelmekte devam etmiş ve bir hafta sonra, koma halinde ölmüş[.] Hiçbir şey söyliyememiş. Öleceğini asla tahmin etmiyormuş."
  },
  {
    "id": 75,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Kırmızı kadife koltuklar, alçak ceviz sigara masaları ve bir kenarda kocaman ibir radyo odayı doldu ruyordu. Her tarafta, masaların üstünde ve kanapelerin arkalığındaince işlenmiş, krem reıtgi dantel örtüler vardı. Duvarlarda başbaşa gelin güvey resimleri ve gemi şeklin de yazılmış bir [\"]Âmentü\" levhası [(]asılı idi. Küçük kız birkaç dakika sonr^ı kahve getirdi. Yüzün de nedense hep o beni küçük görmek, benimle alay etmek istiyen şımarık ifade vardı."
  },
  {
    "id": 76,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Beresini başına yerleştirirken ilâve etti: \"Ne güzel konuşuyorduk!\" Onu Atlantik barının önüne kadar getirdim. Yolda hemen hemen hiç konuşmadık. İkimiz de[,] bu akşamın in tihalarım içimize yerleştirmek ister gibi dalgın ve dolu idik[.] Yolun sonlarına doğru vücudümun ürperdiğini his settim. \"Benim yüzümden eve gidip kürkünüzü giyemediniz, üşüyeceksiniz!\" dedim."
  },
  {
    "id": 77,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Hatta evinin bahçesindeki lağım kuyusunu bile ona ayıklattı. Koca Ali sade suya bulgur çorbasıyla bu kadar zahmetlere yıllarca göğüs gerebilecekti. Fakat Hacı Kasap[']ın ikide bir: — Ulan Ali![...] Kolunun diyetini ben verdim. Yoksa çolak kalacaktın!..."
  },
  {
    "id": 78,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Sermet Bey döndü, arkasındaki bekçiye[:] [—] İşte bir boş köşk daha[...] Dedi. Küçük bir çam ormanının önünde beyaz, şık bir bina."
  },
  {
    "id": 79,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Tosun Bey durdu. Yeniçerinin yüzüne dikkatle baktı. Yeniden sordu: — Otağ[-]ı hümâyun nerede kurulmuş[?] Kurulmamış. Niçin?"
  },
  {
    "id": 80,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Tabii... Hem nasıl!\" \"O zaman da aynen böyle söylemiştiniz!\" \"Belki...\" Tekrar güldü. \"Fakat ben sizin anneniz olabilir miyim[?]\" \"O, hayır, hayır!\" \"Belki ablanız!\" \"Kaç yaşmdasmız[?]\" \"Böyle şey sorulur mu[?] Ama neyse, yirmi altı!... Siz?\" \"Yirmi dört!\" \"Gördünuüz mü?"
  },
  {
    "id": 81,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bu anda ona ait bütün işler bitmiş olacağına göre, benim yeryüzünde bulunuşum kadar gü lünç, sebepsiz birşey olamazdı... Bütün ruhum korkunç bir boşluk halindeydi. İyileşmeğe başladıktan sonra, bir gün bana[:] [\"]Doktorlarla konuş, beni artık çıkarsınlar\" dedi. Sonra, alelâde birşey söylüyormuş gibi, mırıldandı: \"Bana sen daha iyi bakarsın!\" Cevap vermeden dışarı fırladım. Mütehassıs daha bir kaç gün kalmasını istiyordu."
  },
  {
    "id": 82,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Ama bundan sonra herşey bitti. Asıl büyük ve affedilmez haksızlığı sana kar şı yaptıktan sonra, hiçbir şeyi düzeltmek istemiyorum. Senin hakkında verdiğim yanlış bir hükme dayanarak bü tün insanları suçlu tuttum[;] onlardan kaçtım[.] Bugün haki kati anlıyorum; fakat nefsimi ebedî bir yalnızlığa mah kûm etmeğe mecburum. Hayat ancak bir kere oynanan bir kumardır, ben onu kaybettim."
  },
  {
    "id": 83,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Yarım mil ötede Toygun Paşa'nın son muhasarasından çılgın kışın hiddeti sayesinde kurtulan Zigetvar Kalesi, sönmüş bir yanardağ gibi, simsiyah duruyordu. Hava bozuktu. Ufku[,] küflü demir renginde[,] ağır bulut yığınları eziyor[...] Sürü sürü geçen kargalar tam hisarın üstünden uçarken sanki gizli bir kara haber götürüyorlarmış gibi, acı acı bağırıyorlardı. Palanga kapısının sağındaki beden siperinde sahipsiz bir gölge kadar sakin duran Kuru Kadı yavaşça kımıldadı; ikindiden beri rutubetli rüzgarın altında düşünüyor, uzakta, belirsiz sisler içinde süzülen kurşuni kulelere bakıyordu."
  },
  {
    "id": 84,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "\"Ne zaman gideceksin?\" dedi. \"Bilmem? Yol parasını alınca hareket etmeli[...]\" \"Belki ben daha evvel giderim[...]\" \"Ya?!...\" Hayret edişim onu güldürdü: \"Hep çocuksun, Raif!\" dedi. \"Önüne geçmek mümkün olmıyan işlerde telâş ve heyecan göstermek çocukluktur. Hem daha vaktimiz var, birçok şeyleri düşünür kararlaş tırırız...\" Ufak tefek işlerimi yoluna koymak, pansiyonla alâka mı kesmek için tekrar dışarı çıktım."
  },
  {
    "id": 85,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Diye zavallı hayali sırtladı. Köşke doğru sürükledi. Bağırdı[:] [—] Lamba getirin, suratını görelim. ... Köşk halkı bahçe kapısına inmişti."
  },
  {
    "id": 86,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bir aralık odanın kapısı açıldı İçeri kırk yaşlarında, kesik saçları kulaklarına ve vüzüne dökülmüş, şişmanca bil* kadın girdi, Raif Efendinin kulağına eğilip bir şeyler Söyledi. Öteki ona cevap vermeden beni işaret ederek: \"Daire arkadaşlarımdan...\" diye takdim etti. [\"]Refi kam.[\"] J Sonra karısına dökerek: \"Ceketimin cebinden al[!]\" dedi. i Kadın bu sefer kuflağma filân eğilmeden söylendi: \"Ayol, para için gelmedim, kim gidip alacak... Sen de bir türlü kalkamadın!\" \"Nurteni yollayıve:'."
  },
  {
    "id": 87,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Fakat bu hep böyle değil midir? Birçok şeylere ihtiyacımızı ancak onları görüp tanıdıktan sonra keşfetmezmiyiz?... Ben de[,] o zamana kadarki hayatımın boşluğunu, gayesizliğini sırf böyle bir insandan mahrum oluşumda bulmıya başla mıştım[.] İnsanlardan kaçışım, içimden geçenlerin en küçük bir parçasını bile etrafıma sezdirmekten çekinişim bana sebepsiz ve mânâsız görünürdü. Zaman zaman benisa ran hüzünlerin, hayat bıkkınlığının bir ruhî hastalık alâ meti olmasından korkardım."
  },
  {
    "id": 88,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Koca Ali, kamaşan gözleriyle kapısının temiz eşiğine baktı. Hakikaten el kadar bir kan lekesi sürülmüştü. O, bu kırmızı lekeye dalgın dalgın bakarken, palabıyıklı dizdar[:] [—] Hem bu gece, geç vakit, ben seni köprünün üstünde gördüm[.] Orada ne arıyordun? dedi."
  },
  {
    "id": 89,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Ondan sonra, birkaç kere daha, uzun uzun çaldım. Beklediğim ayak sesi duyulmadı. Yalnız karşı taraftaki evin kapısı aralandı, uyku sersemi bir hizmetçi[:] \"Ne istiyorsunuz[?]\" diye sordu. \"Burada oturanı!\" Yüzüme dikkatle baktıktan sonra, ters bir tavırla: \"Orada kimse yok!\" dedi. Yüreğim hopladı: \"Başka yere mi taşındılar!\" Telâş ve heyecanım karşımdakini biraz yumuşatmışa benziyordu, başını sallıyarak cevap verdi: \"Hayır, annesi hâlâ Pragdan gelmedi."
  },
  {
    "id": 90,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Gülümsüyordu, uzun zamandan beri ilk defa olarak, apaçık, tertemiz gü lümsüyordu; fakat gözlerinin kenarından yanaklarına doğ ru yaşlar sızmaktaydı. Başını iki elimle birden yakaladım ve kolumun üzerine yatırdım. Şimdi daha çok[,] daha rahat gülüyordu[;] fakat gözyaşları ayni nisbette çoğalmıştı. En ufak bir ses çıkarmıyor, göğsü herhangi bir hıçkırıkla sar sılmıyordu. Dünyada bu kadar rahat, bu kadar sükûn için de ağlanabileceğini tasavvur edemezdim."
  },
  {
    "id": 91,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Ufku, küflü demir renginde, ağır bulut yığınları eziyor... Sürü sürü geçen kargalar tam hisarın üstünden uçarken sanki gizli bir kara haber götürüyorlarmış gibi, acı acı bağırıyorlardı. Palanga kapısının sağındaki beden siperinde sahipsiz bir gölge kadar sakin duran Kuru Kadı yavaşça kımıldadı[;] ikindiden beri rutubetli rüzgarın altında düşünüyor[,] uzakta, belirsiz sisler içinde süzülen kurşuni kulelere bakıyordu[.] Bunların hepsi Türklerin elindeydi. Yalnız şu Zigetvar..."
  },
  {
    "id": 92,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Ama neyse, yirmi altı!... Siz?\" \"Yirmi dört!\" \"Gördünuüz mü? Ablanız olabilirim[!]\" \"Evet[...]\" Bir müddet sustuk[...] Kafamın içinde ona söylene cek uçsuz bucaksız şeyler bulunduğunu hissediyordum, senelerce söylense bitmiyecek şeyler... Fakat hiçbiri şu anda aklıma gelmiyordu."
  },
  {
    "id": 93,
    "source": "Ömer Seyfettin - Ferman",
    "text": "🙝🙟 Tosun Bey dışarı çıkınca, aceleyle adamlarını buldurdu. Atını değiştirdi. Kimseyle konuşmadan[,] tek başına, otağ[-]ı hümâyunu aramaya çıktı[.] Hava gittikçe kararıyordu. Derin yarlardan, sel yarıklarından aştı."
  },
  {
    "id": 94,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Nasıl olur?\" \"Evet, birkaç kere baktınız... Ama nasıl?... Sanki görmemek için[!][...][\"] Sonra, hâlâ avuçlarımın içinde duran ellerini çeke rek: \"Arkadaşlarımın yanma döndüğüm zaman, benita nımadığınızı söylemedim\" dedi. \"Yoksa size çok güler lerdi!\" \"Teşekkür ederim!\" Biraz düşündü; gözlerinden bir bulut geçti; birden bire ciddileşerek: \"E, hâlâ öyle bir anneniz olmasını istiyor musunuz?\" dedi. İlk anda hatırlamıyarak durdum."
  },
  {
    "id": 95,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Kendinden geçti. 🙝🙟 Onu, daha ilk defa böyle derin bir uykuya dalmış gören yoldaşları zorla kaldırdılar. Koltuklarına girdiler[:] [—] Haydi, kapı kapanacak, dediler[;] içeri gir. Kuru Kadı'nın dili tutulmuştu. Cevap veremedi."
  },
  {
    "id": 96,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Oradan Tiergarten’deki gölcüklerden birinin kenarına gider, yo sunlu sulan ve kuğuları seyrederdik. Ve bir gün herşey bitti... O kadar basit[,] o kadar katî bir şekilde bitti ki, ilk anda işin azametini anlamak benim için mümkün olmadı[...] Yalnız biraz şaşırdım, bir hayli üzüldüm; fakat bu hâdisenin hayatım üzerinde bu kadar büyük, bu kadar değişmez bir tesiri olacağını asla düşün medim. Son günlerde pansiyona gitmekten çekiniyordum."
  },
  {
    "id": 97,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Parmağım dudaklarına götürerek: \"Sus!..\" dedi. \"Hava almak ve serinlemek istiyorum. Hadi gidelim!\" Onu hemen hemen zorla içeri soktum[;] bir iskemle bu lup oturttum[;] yukarı çıkıp hesabı gördüm ve vestiyerden paltomu ve onun kürk mantosunu getirdim. Ayaklarımız sokağın karlarına gömülerek yürümiye başladık. Kolumdan sımsıkı tutuyor ve hızlı gitmiye çalışıyor du."
  },
  {
    "id": 98,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Silahları alınan düşman ikişer ikişer bağlanıyor, takım takım ordugâhın arkasına götürülüyordu. Kalenin içindeki kıymetli şeylerden bir dağ ortada kabarıyor; al yeşil bayraklarla kalenin tepesine dolan askerler bağırışıyorlar, aralarındaki dervişler, bedenlerden sarkarak ezan okuyorlar, tekbir çekiyorlardı. Teslim olan kumandanla erkânına Arslan Bey[:] [—] Korkmayınız[.] Hayatınız bağışlanmıştır. Biz Vireyi bozmayız."
  },
  {
    "id": 99,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Beşyüzkırk liraya iki ay oturmak... Bu Sermet Bey'in işine gelecek şey değildi. Ama gece aşırı büyük büyük taşlar ev halkına uyku uyutmuyor[,] hepsini heyecan içinde bırakıyordu[.] Sermet Bey, her defasında hayalin üzerine gidiyor, bir türlü elini süremiyordu. Taşların başladığını duyan komşular: \"Daha çıkmazsanız camlarınızı da kırar\" diyorlardı."
  },
  {
    "id": 100,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Ama, görüyorum ki, benim işim bitti. O, durmasın, bütün kuvvetiyle hücum etsin. Ben mutlaka yıkılacak kalenin taşları altında kalmak isterim.\" [—] Sâhi, namuslu bir askermiş[...] Kethüdâ: — Yalnız namuslu bir asker değil, Arslan Bey, dedi, hem de gayet âlicenap bir mert... Nasıl?"
  },
  {
    "id": 101,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Bu şah, zalim olduğu kadar da kurnazdı. Osmanlı toprağına geçtiği için özür diliyor, birbiri arkasına elçiler gönderiyordu. O vakit Trabzon valisi bulunan Şehzade Yavuz, babası gibi sabredememiş, Tebriz hududunu geçmiş; Bayburd[']a, Erzincan[']a kadar her tarafı talan etmiş, hatta Şah'ın kardeşi İbrahim'i esir almıştı. İsmail'in elçisi şimdi bu tecavüzden de şikayet ediyor; Osmanlı toprağına son akınlarının, padişahın devletine karşı değil, sırf Alâüddevle aleyhine olduğunu tekrarlıyordu. İşte Dîvan'da bu kurnaz, bu zalim, gaddar türediye gönderilecek münasip bir elçi bulunamıyordu; çünkü kendini Osmanlı hakanıyla bir tutan, hatta bütün şarkta cihangirlik kuran bu serseri, karşısında devleti temsil edecek adama karşı şüphesiz birçok münasebetsizlikler edecek; münasebetsizliklerine mükâbele edeni ihtimal kazığa vuracak, derisini yüzecek, akla gelmedik kaba bir vahşetle öldürecekti."
  },
  {
    "id": 102,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Dizgini boş bırakıyor, geldiği yollardan atının sevk-i tabiisiyle dönebiliyordu. Meşaleleriyle, ordugâh uzaklardan görünmeye başladı. Karanlığın[,] yağmurun[,] rüzgârın içinde at, âdi adımlarla yürüyordu[.] Kimdir o? On adım ötede koyu bir karaltı belirdi..."
  },
  {
    "id": 103,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Hangi hastaneye kaldırdılar? Ne zaman?..\" Suallerimin hücumu karşısında şaşıran hizmetçi, bir adım geri çekildi ve: \"Bağırmayın, ev halkını uyandıracaksınız... İki gün evvel kaldırdılar[;] galiba Charite’ye götürdüler[!][\"] dedi. \"Hastalığı?\" \"Bilmiyorum!\" Arkamdan hayretle bakan hizmetçi kıza teşekkür bile etmeden merdivenleri dörder dörder atladım. İlk rasgeldiğim polisten Charite dedikleri bu hastanenin nerede ol duğunu öğrendim."
  },
  {
    "id": 104,
    "source": "Ömer Seyfettin - Kaşağı",
    "text": "Eğilirdim, uzanırdım. Lakin atın sağrısından kuyruğu görünmezdi. Her sabah ahıra gelir gelmez, [—] Dadaruh, tımarı ben yapacağım, derdim[.] Yapamazsın. Niçin?"
  },
  {
    "id": 105,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Ben iki saate kadar geleceğim. Şimdi hepiniz hazır olunuz. Nihâyetleri görünmeyen beyaz, büyük sakalının çerçevelediği yüzü sis içinde muallâkta duruyor sanılan ihtiyar topçubaşı sordu: [—] Siz gelmeden ben döğmeye başlayım mı, beyim[?] Arslan Bey güldü: — Hayır... Senin iki topunun güllelerine ihtiyacımız yok."
  },
  {
    "id": 106,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "\"Burada oturanı!\" Yüzüme dikkatle baktıktan sonra, ters bir tavırla: \"Orada kimse yok!\" dedi. Yüreğim hopladı: \"Başka yere mi taşındılar!\" Telâş ve heyecanım karşımdakini biraz yumuşatmışa benziyordu, başını sallıyarak cevap verdi: \"Hayır, annesi hâlâ Pragdan gelmedi. Kendisi de has talandı, bakacak kimsesi olmadığı için hasta kasasının dok toru hastaneye kaldırttı[!]\" Bunları söyliyen kıza doğru koştum: \"Hastalığı nedir[?] Ağır mı? Hangi hastaneye kaldırdılar?"
  },
  {
    "id": 107,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Kısa eteğinin altından fırlıyan, hakikaten biçimli olduğunu in kâr edemiyeceğim bacakları arada bir hafifçe geriliyorlar ve çorabın altında, yuvarlak dizkapaklarına kadar yayı lan, tatlı bir dalga vücuda getiriyorlardı. Onun benden bir cevap almadan gitmek niyetinde olmadığını görünce: \"Evet!\" dedim, \"Güzel bir resim...\" Sonra, neden bil mem, bir yalan söylemek, bir nevi izahat vermek lüzumunu hissederek mırıldandım: \"Anneme pek benziyor da...\" \"Ha, demek onun için böyle gelip saatlerce bakıyor sunuz!\" \"Evet!\" \"Anneniz öldü mü?\" \"Hayır!\" Sözüme devam etmemi istiyormuş gibi bekledi. Ben, başım hep önümde, ilâve ettim: \"Çok uzakta bulunuyor[!]\" \"Ya[!]... Nerede?\" \"Türkiyede!\" \"Türk müsünüz?\" \"Evet!\" \"Ecnebi olduğunuzu anlamıştım!\" Hafif bir kahkaha attı. Gayet serbest bir tavırla ya nıma oturdu."
  },
  {
    "id": 108,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Hulâsa, bütün varhklariyle: Biz frenkçe biliriz! diye haykıran insanlara benzer bir tarafı yoktu. Bilgisine dayanarak maaşının arttırılmasını is temeyişi[,] başka ve bol ücretli işler aramayışı da[,] hakkındaki bu kanaati kuvvetlendiriyordu[.] Sabahlan tam vaktinde geliyor, öğle yemeğini oda sında yiyor, akşamları, ufak tefek alış verişlerini yaptık tan sonra hemen evine gidiyordu. Birkaç kere teklif etti ğim halde kahveye gelmiye razı olmadı."
  },
  {
    "id": 109,
    "source": "Ömer Seyfettin - Forsa",
    "text": "Oraları tamamıyla başka bir cihandı. Altı ay gündüz, altı ay gece olurdu! Karısını[,] işte bu, senesi bir büyük günle bir büyük geceden ibaret olan başka cihandan almıştı[.] Gemisi altın, gümüş, inci, elmas, esir dolu vatana dönerken, kenarsız denizin ortasında evlenmiş, oğlu Turgut, Çanakkale'yi geçerken doğmuştu. Şimdi kırkbeş yaşında olmalıydı."
  },
  {
    "id": 110,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Biraz daha tenha sokaklara geldiğimiz zaman yavaşla dı. Sık ve şiddetli nefes alıyordu. Derin bir [\"]oh!\" çekti, sonra bana döndü: \"Nasıl[?] Bu geceden memnun musun? Eğlendin mi?"
  },
  {
    "id": 111,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Hararetten yanan elleri, sanki kendi iradesiyle inat eden başka bir vücudun âza imiş gibi torbayı açtı. Üçe katlanmış kâğıdı çıkardı. Tosun Bey[,] iradesine isyan eden ellerinin cinayetinden titredi[.] Bir ferman açılabilir miydi? Fakat kımıldayamıyor, ellerine hükmedemiyordu."
  },
  {
    "id": 112,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bir imkân, mevcudiyetine ihtimal vermiye bile cesaret edemediğim bir imkân, boş ve mânâsız akıp giden ömrümün yanına kadar sokulmuş ve sonra, birdenbire, geldiği kadar anî ve sebepsiz, çekilip gitmişti. Bunu an cak şimdi anlıyordum. Kendimi bildim bileli[,] bütün gün lerimi[,] haberim olmadan ve nefsime itiraf etmeden, bir insanı aramakla geçirmiş ve bu yüzden bütün diğer in sanlardan kaçmıştım[.] O resim aradığım bu insanı bulma nın mümkün olduğuna, hattâ ona pek yakın bulunduğuma, bir müddet için olsun beni inandırmış, içimde, bir da ha uyutulması kabil olmıyan bir ümit uyandırmıştı. Onun için, bu sefer düştüğüm inkisar o nisbette büyük oldu."
  },
  {
    "id": 113,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Ne aklımda tutabilirim, ne de söyliyebilirim! Sadece Raif desem olmaz mı?\" \"Daha memnun olurum!\" \"Siz de bana sadece Maria diyebilirsiniz... Söyledim ya, minnet altında kalmak istemem[!]\" Tekrar güldü[;] deminden beri birkaç defa ifade değiş tiren çehresi tekrar o tatlı, o dost halini aldı. Kolunu uza tarak elimi avucunun içinde sıktı. Bana nedense özür diliyormuş hissini veren yumuşak bir sesle ikinci defa iyi geceler temenni etti, çantasından anahtarını çıkararak ar kasını döndü."
  },
  {
    "id": 114,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Elini titreyerek fermana götürdü. Yerinde idi. Yavaşça tuttu ve gayr[-]i ihtiyâri bir hareketle çekti[.] Ocağın üzerindeki kandilin titrek ve sönük aydınlığı içinde baktı. Üstüne sardığı çevreyi çıkardı."
  },
  {
    "id": 115,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Zili çaldım. Kapıyı on iki yaşlarında bir l:ız çocuğu açtı. Babasını sorunca, yapmacık bir tavırla güzünü buruşturup dudaklarını bü kerek[:] [\"]Buyurun[!]\" dedi. Evin içi hiç de zarnettiğim gibi değildi. Yemek odası KÜRK MANTOLU M A DONNA 21 olarak kullanıldığı anlaşılan holde 1 , büyük ve açılıp kapa nır bir masa, kenarda içi kristal takımlarla dolu bir büfe vardı."
  },
  {
    "id": 116,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Sıçrata sıçrata taş merdivenin önüne doğru götürdüm. Öteki çocuk yanımdan geliyor, gülmemek için eliyle ağzını tutuyordu. Hoca Efendi cübbesini giymiş[,] vakarla yavaş yavaş merdivenlerden iniyordu[.] Çocukların hepsi bir turna dizisi gibi arkasından iniyorlardı. Eşek şaha kalkıyordu."
  },
  {
    "id": 117,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Yüzü sapsarı oldu. Uzun siyah sakalı kımıldadı. İki deliyi bile titreten, bütün gazilerin saçlarını ürperten ilahî bir mersiye ahengi kadar müessir sesiyle haykırdı[:] [—] Meydan erleri[!] Ey mertler! Padişahımız Süleyman Gazi aşkına şu sözümü dinleyiniz."
  },
  {
    "id": 118,
    "source": "Ömer Seyfettin - Falaka",
    "text": "\"Hayır, biz çekmeyeceğiz\" dedim. \"Sonra hapşırırız. Uyanır.\" \"Ya sen ne yapacaksın[?]\" \"Görürsünüz[...]\" \"Ne yapacaksın, ne yapacaksın[?]\" \"Söylemem diyorum. Çok güleceğiz.\" Öyle bir şeytanlık kurmuştum ki, daha yapmadan, gülüyor, katılıyordum. Çocuklar da bana bakarak gülüyorlardı."
  },
  {
    "id": 119,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Düşman safına karışıp kaynaşan kolun arkasında iri bir vücut yere uzanmıştı. Elli altmış adam kadar kendisinden uzaktı. Siyah[,] yüksek atlı bir şövalye[,] uzun bir kargıyı bu uzanmış vücuda saplıyordu[.] Durmadı. İlerledi."
  },
  {
    "id": 120,
    "source": "Ömer Seyfettin - Kütük",
    "text": "İşte kethüdânın getirdiği mektupta Ali Paşa da, teklifini kabul ediyordu. Onunla birleşince ordusu yedibin kişi kadar olacaktı. O vakit şüphesiz Tofeli, Pallaviçini[']yi diri diri esir tutabilecekti[.] Koyu karanlık içinden, uzaktan uzağa, Şalgo burcundaki nöbetçilerin attıkları acı nâralar, acı köpek ulumaları işitiliyordu. Gökte hiç yıldız yoktu."
  },
  {
    "id": 121,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Diye rica etti. bu ömründe ilk ricasıydı. Fakat ihtiyar hâkim çok adildi[:] [—] Hayır oğlum, dedi, sen adam öldürmedin. Eğer çobanı öldürseydin, o vakit kafan giderdi. Ceza kabahate göredir."
  },
  {
    "id": 122,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Bir ay evvel tamamlanan, üzeri en nadir pembe incilerle işlemeli bu kaftanın namını İstanbul'da duymayan yoktu. Vezirler, elçiler, padişaha hediye etmek için Toroğlu'na müracaat ettikçe, o, fiyatını artırıyordu. Muhsin Çelebi, bu meşhur kaftanı nasıl alacağını anlattı: [—] Çiftliğimle, mandıramı, evimi rehine vereceğim[;] tüccarlardan on bin altın borç toplayacağım. İki bin altın atlarla hademelere sarf edeceğim. Geriye kalan sekiz bin altına da bu kaftanı alacağım."
  },
  {
    "id": 123,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Neclâ sokuldu: \"Bir şey mi istedin babacığım?\" \"Hadi, siz biraz çıkın!\" Sesi pek hafif ve kesikti. Mihriye Hanım bize işaret etti. Fakat bunu gören hasta, elini yataktan dışarı çıkararak bileğimden yakala dı ve: [\"]Sen gitme![\"] dedi. Kadınlar biraz şaşırmıştılar. Neclâ: \"Babacığım, kolunu çıkarmasana!...\" diye söylendi."
  },
  {
    "id": 124,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Deli Mehmed'in başsız vücudu canlıymış gibi eğildi. Yerden kendi kesik başını aldı. Hemen oracığa[,] yorgun bir kahraman gibi[,] uzanıverdi[.] Bunu Kuru Kadı'dan başka kimse görmemişti! Herkes kaçan düşmanı kovalıyordu."
  },
  {
    "id": 125,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Vezirler, sevgili padişahlarının sükûnunu bozmamayı en büyük vazifeleri sanırlardı. Bununla beraber hudutlarda yine kavganın arkası alınamıyordu. Bosna, Eflak, Karaman, Belgrad, Transilvanya, Hırvatistan, Venedik seferleri birbirini takip ediyor[;] Modon, Koron, Zonkiyo, Santamavro fetholunuyordu[.] Sanki İstanbul Fâtihi'nin azmiyle dehası -tahta geçer geçmez babasının heykelini \"gölgesi yere düşüyor\" diye kırdırıp sevaba girmeye kalkanzâhit halefinin zamanında da sönmüyor; sönmez bir alev, ezeli bir ruh gibi yaşıyordu. Rahat istendikçe, gaile gaile üstüne çıkıyordu."
  },
  {
    "id": 126,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bir kadının bize her şeyini verdiğini zannettiğimiz an da onun hakikatte bize hiç bir şey vermiş olmadığını gör mek, bize en yakın olduğunu sandığımız sırada bizden, bütün mesafelerin ötesinde imiş kadar uzak bulunduğunu kabule mecbur olmak acı bir şey. Bunun böyle olmaması lâzımdı. Fakat, Maria’nın da dediği gibi, yapılacak bir şey yoktu[;] hele benim tara fımdan[...] Onun bana böyle yapmıya ne hakkı vardı? Seneler den beri, boşluğunu apaçık görmeden, şöyle böyle bir ömür sürmüş, insanlardan kaçsam bile, bunu tabiatımın aca yipliğine vermiş, sürüklenip gitmiştim, fakat beni mem nun edecek hayat hakkında da bir fikrim yoktu."
  },
  {
    "id": 127,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Şah İsmail donmuş, taş kesilmişti. Çaldıran'da kırılacak gururu, bugün, bu tek Türk'ün ateş nazarları altında erimişti. Muhsin Çelebi dışarı çıkarken, kendi gibi hayretten donan nedimlerine[:] [—] Şunun kaftanını veriniz, dedi. Muhariplerden biri koştu. Tahtın önünde serili kaftanı topladı."
  },
  {
    "id": 128,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Hâtıralar ve uzun zaman zaptedilmiş hisler, daima susturulmuş heyecanlar bir sel gibi, gitgide büyüyerek, kabararak, hızlanarak dışarı akıyordu. Onun nasıl bir dik katle beni dinlediğini, gözlerini nasıl, söz haline getire mediğim taraflarımı da anlamak ister gibi yüzümde gez dirdiğini gördükçe büsbütün açılıyordum. Bazan tasdik eder gibi ağır ağır başını sallıyor[,] bazan hayret eder gibi ağzını hafifçe açıyordu[.] Heyecanlandığım zamanlar yavaş yavaş elimi okşuyor, sözlerim şikâyet eden bir edâ alınca şefkatle gülümsüyordu. Bir aralık, meçhul bir kuvvet tarafından dürtülmüş gibi sözümü kestim ve saatime baktım."
  },
  {
    "id": 129,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Karşısında diz çökmüş kethüdâsının anlattıklarını dinliyordu. Ordugâha yarım saat evvel dört nala gelen bu adam, yaşlı, şişman bir askerdi. İşte kaç hafta oluyor, kumandanının \"Göndersdref Baronu Erasm Tofl[']u beraber vurmak\" teklifini hâvî mektubunu, tek başına, Hadım Ali Paşa[']ya götürmüştü. Ama, paşa çok meşguldü. Vakit bulup cevap verememişti."
  },
  {
    "id": 130,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Biraz sonra... Nereden geldiği belli olmayan derin bir gürültü sis içinde kaynıyor, ileri geri yaklaşıyor, uzaklaşıyor, dalgalanıyordu. Kös[,] kalkan, boru sesleri at kişnemelerine karışıyor, alınan emirler, verilen kumandalar yüzlerce ağız tarafından ayrı ayrı tekrarlanıyordu[.] Bastıkları yerleri görmeyen askerler, harp nizâmında bağırışarak, duyduklarını tekrarlayarak, dirsekleriyle, kalkanlarıyla birbirlerine dokunarak duman içinde ilerliyorlardı. Sağ taraftan topçuların ``Heya, mola´´ları işitiliyordu."
  },
  {
    "id": 131,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Çocuklariyle karısının beyaz karyolaları arasına sıkış mış duran küçük bir demir soba, odayı fazla sıcak yap mıştı. Buna rağmen karşımdaki üşür görünüyordu. Yor ganını boğazına kadar çekerek[:] \"Evet, soğuk aldım galiba[!]\" dedi. \"Dün akşam yemek ten sonra biraz dışarı çıkmıştım...\" \"Bir yere mi gittiniz?\" \"Hayır... Şöyle azıcık dolaşmak istedim..."
  },
  {
    "id": 132,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Bütün zâbitleri, çavuşları çağırttı. Hepsi hücum var sanıyordu. At dîvanı yapar gibi, bir ayağı yerde, bir ayağı özengide[:] [—] Ağalar, dedi, bugün kaleyi alacağız[.] Ben iki saate kadar geleceğim. Şimdi hepiniz hazır olunuz."
  },
  {
    "id": 133,
    "source": "Ömer Seyfettin - Forsa",
    "text": "Yalnız abdest alamadığı için üzülürdü. Daima güneşin doğduğu tarafı sol ilerisine alır, gözlerini kıbleye çevirir, beş vaktini gizli gizli, işaretle edâ ederdi. Elli yaşına gelince, korsanlar onu, [\"]Artık iyi kürek çekemez[!][\"] diye çıkarıp bir adada satmışlardı. Efendisi bir çiftçiydi. On sene kuru ekmekle onun yanında çalıştı."
  },
  {
    "id": 134,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Başka türlü olmayı senin kadar, hattâ senden çok istediğime emin ol... Ne yapayım? Ağzımda dün akşamki içkilerin burukluğundan[,] sırtımda gittikçe artan ağrılardan başka hiç bir şey[.] hissetmiyorum.\" Bir müddet sustu. Gözlerini kapadı."
  },
  {
    "id": 135,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Ama şimdi dargınız... Ben değil... Annem görüşmek istemiyor[;] bu halleri yüzünden[...] Kocası avukattı. Umumî Harpte öldü..."
  },
  {
    "id": 136,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Artık hep, evli adamlar gibi, yalan-doğru, biz de \"Şart olsun!\" yeminine başladık. \"Vallahi, billahi!\" unutuldu. Hoca Efendi de her sabah rahlesine çökerken hiç unutmuyor[:] \"Kim hapşırırsa, şart olsun, öldürürüm[!]\" diye tekrarlıyordu. 🙝🙟 Bir gün öğle paydosundan sonra içeri girdik. Her vakitki gibi derin bir uğultu..."
  },
  {
    "id": 137,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Enfiyesini kimin çaldığını sordu. Bir ağızdan ahenkle, \"Bilmiyoruz, bilmiyoruz!\" dedik. \"Hepinizi falakaya çekeceğim.\" \"Bilmiyoruz, bilmiyoruz!\" \"Kimse söylemeyecek mi[?]\" \"Bilmiyoruz ki, bilmiyoruz ki[...]\" \"Bilmiyor musunuz, pekâlâ! Necip, git camiden kalfayı çağır, çabuk.\" Beş dakika sonra kalfa geldi. Korkunç bir sahne başladı."
  },
  {
    "id": 138,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Kendime en yakın bulduğum veya bulacağımı zannettiğim insanlardan en çok korkuyordum. \"O bile böyle yaptıktan sonra!..\" diyordum... Ne yapmıştı[,] bu malûm değildi[;] ve asıl bunun için muhayyelem en iena ihtimaller üzerinde duruyor ve en ağır hükümleri veriyordu[.] Öyle ya... Bir ayrılık anında, basit bir heyecanın şevkiyle verilmiş bir sö zü tutmamak için en kolay çare, münasebeti hiç münakasasız kesivermekti."
  },
  {
    "id": 139,
    "source": "Ömer Seyfettin - Forsa",
    "text": "Yavaş yavaş gözlerini kapadı. İlkbahar bir umut tufanı gibi her tarafı parlatıyordu. Martıların[:] [—] Geliyorlar, geliyorlar, seni kurtarmaya geliyorlar[!] Gibi işittiği tatlı seslerini dinleye dinleye daldı. Duvar taşlarının arasından çıkan kertenkeleler üzerinde geziniyorlar, çuvaldan esvabının içine kaçıyorlar, gür beyaz sakalının üstünde oynaşıyorlardı."
  },
  {
    "id": 140,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Bu bir âdetti. Taarruza uğrayan bir palanga hemen \"işaret topu\" atarak etraftaki kuleleri imdadına çağırırdı. Biraz sonra düşman hisarın önünde[,] harp nizamına girmiş bulunuyordu[.] Toplar başsız, gür ejderha yavruları gibi siyah ağızlarını bedenlere çevirmişti. Türkçe bağırdılar: — Size teklifimiz var."
  },
  {
    "id": 141,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Demek bu top geliyormuş... 🙝🙟 Biraz sonra... Şalgo[']nun tepesinde, şan, namus kefeni olan meş[']um beyaz bayrak dalgalanıyordu. Demir kapılar açılmıştı. Korkudan sapsarı kesilen tuğlu kumandan, altın kılıçlı asilzâdeler, zırhlı şövalyeler, Arslan Bey'in önünde dize gelmişlerdi."
  },
  {
    "id": 142,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Aşka girmiyen şey ise tahlildir. Sonra düşünün, dünyada hepimizin hoşlandığımız birçok kimseler, meselâ benim hakikater^ sevdiğim birçok dostlarım vardır. [(]Muhterem Beyefendinin bunların en başında geldiğini söyliyebilirim.[)] Şimdi ben bütün bu insanlara âşık mıyım?\" Ben fikrimde ısrar ederek: \"Evet,\" demiştim. \"En çok sevdiğinize hakikaten ve diğerlerine birer parça âşıksınız!\" Maria hiç beklemediğim bir cevap vermişti: \"Şu halde niçin beni kıskanmadığınızı söylüyordu nuz?\" Söyliyecek bir şey bulamıyarak bir müddet düşündüm, sonra izah etmiye çalıştım: \"İçinde hakikaten sevmek kabiliyeti olan bir insan hiçbir zaman bu sevgiyi bir kişiye inhisar ettiremez ve kimseden de böyle yapmasını bekliyemez. Nekadar çok insanı seversek, asıl sevdiğimiz bir tek kişiyi de o kadar çok ve kuvvetli severiz."
  },
  {
    "id": 143,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Onun niçin daha fazla para kazanmadığına, niçin da ha lüks bir hayat temin etmediğine kızıyorlar, fakat ayni zamanda onun bir hiç, ehemmiyetsiz ve kıymetsiz bir sı fır olduğundan emin bulunuyorlardı. Oldukça aklı başın da bir insana benziyen Neclâ ile, henüz ilk mektebe devam eden Nurten bile, ihtimal eniştelerinin, teyzelerinin ve da yılarının tesirleriyle, babalarına karşı umumî havaya uy muşlardı. Ona gösterdikleri sevgide[,] bir angarya savarmış gibi bir acelelik[;] onun hastalığiyle alâkalarında, bir fıkaraya gösterilen yalancı merhamet gibi bir özentilik vardı[.] Yalnız karısı, senelerden beri bir saniye bile hafiflemiven işler ve geçim dertleriyle biraz aptallaşmışa benziyen Mih riye Hanım, kocasiyle elinden geldiği kadar meşgul oluyor, onun kendi evlâtları tarafından küçük görülmemesi, horlanmaması için gayret ediyordu. Akşam yemeğinde bir misafir bulunduğu zaman kar deşlerinin veya Nurettin Beyin: \"Eniştem gidip alıversin!\" diye yüksek sesle emretmelerine meydan vermemek için kocasını yatak odasına çekerek tatlı olmıya çalışan bir sesle: \"Hadi, şu bakkaldan sekiz yumurta ile bir şişe rakı alıver."
  },
  {
    "id": 144,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Verdikleri çotrayı nihayetine kadar içti; ağır, keskin mahmuzlarını atın karnına vurdu. Ordugâhın kalabalığı, ışıkları, uğultusu arasından beş dakikada çıktı. Karanlığın[,] yağmurun, rüzgârın içinde dörtnala uzaklaştı[.] Kayboldu... Ormanlardan, derelerden, köprülerden, tepelerden, uçurumlardan şimşek gibi geçti."
  },
  {
    "id": 145,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Buraya bakalım, buraya... Tam bize göre... Bekçi tekrar, katî bir işaretle[:] [—] Buraya oturamazsınız efendim[...] Dedi. Sermet Bey, gözünü köşkten alamıyordu."
  },
  {
    "id": 146,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Nihayet rasgele bir kapıyı araladım ve içeride Raif Efendiyi gördüm. Onu evvelden tanımıyordum. Buna rağ men[,] masasının başına eğilmiş gördüğüm bu adamın baş kası olamıyacağını derhal hissettim[.] Sonradan bu kanaa tin nereden geldiğini düşündüm. Hamdi bana: \"Bizim al manca mütercimi Raif Efendinin odasına senin için bir masa koydurdum, kendisi sessiz sadasız, allahlık bir adamdır, kimseye zararı dokunmaz.\" demişti."
  },
  {
    "id": 147,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Rahatsız etmenin doğru olmıyacağını düşüne rek pansiyona döndüm. Üç gün arka arkaya ayni şekilde onu yolda bekledim, sonra kapısının önüne gittim, karanlık pencerelerine baktim ve hiçbir şey yapmağa cesaret edemiyerek döndüm. Her gün odamda oturuyor[,] kitap okumağa çalışıyordum[.] Bir tek harfini bile farketmeden sayfaları çeviriyor, bazan, dikkat etmeğe azmederek baştan başlıyor, fakat bir kaç satır sonra gene zihnimin başka yerlerde dolaştığım görüyordum. Gündüzleri hâdiseleri olduğu gibi kşbul ediyor, onun kararının katı olduğunu, aradan biraz zaman geçmesini beklemekten başka birşey yapamıyacağımı an lıyordum."
  },
  {
    "id": 148,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Şimdiye kadar olduğu gibi... Yalnız bir şeye dayanmak artık benim için mümkün değil: Her şeyi kafamda yalnız başıma saklıyamıyacağım. Söylemek[,] bir şeyler, birçok şeyler anlatmak istiyorum[...] Kime?... Şu koskocaman dünyada benim kadar yapayal nız dolaşan bir insan daha var mı acaba?."
  },
  {
    "id": 149,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Her şeyinizi insanlardan kıskanmakta haklısınız. Bu defteri yakmak istemeniz de doğru... Fakat bunu bir müddet, hiç olmazsa bir gün geri bırakamaz mısınız[?][\"] Gözleriyle: \"Neden[?]\" diye sorarak yüzüme baktı. Başladığım şeye devam etmek ve son bir çareyi de nemek için ona daha çok sokuldum ve kendisine karşı duyduğum bütün alâka ve sevgiyi gözlerimde toplamıya çalıştım. \"Bu defteri bir gece, yalnız bu gece bende bırakmaz mısınız?"
  },
  {
    "id": 150,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Size acele işim var, gi deceğim, dedim. Hâlâ Macar şirketinden gelen mektubun tercümesini getirmediniz!\" diye bağırmıştı. ['] Öteki, iskemlesinden süratle doğrularak: [\"]Ben bitirdim efendim! Hanımlar bir türlü yaza madılar. Kendilerine başka işler verilmiş!\" dedi."
  },
  {
    "id": 151,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Ve bir gün herşey bitti... O kadar basit, o kadar katî bir şekilde bitti ki, ilk anda işin azametini anlamak benim için mümkün olmadı... Yalnız biraz şaşırdım, bir hayli üzüldüm[;] fakat bu hâdisenin hayatım üzerinde bu kadar büyük, bu kadar değişmez bir tesiri olacağını asla düşün medim[.] Son günlerde pansiyona gitmekten çekiniyordum. Odamın parasını peşin olarak vermiş olmama rağmen, ora ya hiç uğramayışım, evsahiplerinin bana karşı biraz soğuk davranmalarına sebeboluyordu."
  },
  {
    "id": 152,
    "source": "Ömer Seyfettin - Kütük",
    "text": "... Kale kumandanı, gözlerini yerden kaldırıp cevap veremedi. Asilzâdeler, şövalyeler birbirlerinin yüzlerine bakmaya cesaret edemediler[;] âni bir ölüm darbesiyle vurulmuş gibi oldukları yerde donup kaldılar[.] Bir güllesiyle kaleyi yıkacak olan bu korkunç top, siyaha boyanmış, kocaman bir kütükten başka bir şey değildi!..."
  },
  {
    "id": 153,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Vali Ahmed Bey ona \"bizim yarasa\" derdi. Zavallının \"dâûsseher\" denilen hastalığını kerametine de yoranlar vardı. Tekrar bağırdı[:] [—] Haydi, artık akşam oluyor, içeri alın onları. ... Askerler koyunları toplamaya başladılar."
  },
  {
    "id": 154,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Onun içindekini öğrenmemek su retiyle, etrafımda dolaşan bir felâketi uzaklaştırabileceğimi ümidediyordum. Hizmetçi beni hayretle süzdü, bir hareket yapmadığı mı görünce, telgrafı masanın üzerine bırakarak gitti. Ye rimden fırladım[,] bu sefer[,] ne olacaksa biran evvel olsun diye[,] süratle telgrafı açtım. Eniştemdendi. \"Baban öldü."
  },
  {
    "id": 155,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Daha fenası, çıkanlar da propagandacılara katılıyor. İki sene daha böyle giderse malımı ne satabileceğim, ne de kiracı bulabileceğim. Sermet Bey sordu[:] [—] Köşkünüz ne kadar boş kaldı[?] Vâkıâ şimdiye kadar hemen hiç... Fakat giren, komşuların lafına kapılır."
  },
  {
    "id": 156,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Aklım dan derhal bir sual geçti: \"Neden böyle yapıyor? Kendi sinin böyle bir kadın olmadığı muhakkak... Fakat neden böyle yapıyor[?][\"] Düşüncelerimi tahmin etmiş gibi: \"Ben böyleyim işte[!]\" dedi. \"Ben garip bir kadınım... benimle ahbaplık etmek isterseniz birçok şeylere taham müle mecbur kalacaksınız..."
  },
  {
    "id": 157,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Şimdi çıktım!\" diye cevap verdim ve döndüm. O, karşımda duruyor, bir karar vermeden düşünen insanlar gibi gözlerini kırpıştırıyordu. Nihayet dudaklarını hafifçe kıpırdatarak: [\"]Siz sahiden iyi bir insana benziyorsunuz[!]\" dedi. Bütün cesaretim, serbestliğim, o gelir gelmez uçup git mişti. İçimden, ona teşekkür etmek, ellerine sarılarak öp mek arzusu geçtiği halde, ancak duyulur duyulmaz bir sesle: \"Bilmem!\" diyebildim."
  },
  {
    "id": 158,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Yalnız gürültü istiyorum. Pekala beyim. Sonra diğer zâbitlere döndü[:] [—] Siz de bütün askerlerinizi muharebe nizâmıyla bunlara yaklaştırın[.] Mümkün olduğu kadar çok gürültü yaptırın. ``Heya, mola...´´ çektirin, Angarya nâraları attırın."
  },
  {
    "id": 159,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Ben orada doğdum ve büyüdüm. Orada ilk tahsilimi yaptım, sonra bir müddet, bize bir saat kadar uzaktaki Edremit idadisine gidip geldim. Umumî Harbin son senelerinde[,] on dokuz yaşlarında as kere alındım[;] fakat daha talimgâhta iken mütareke ilân edildi[.] Kasabaya döndüm. Tekrar idadiye devam edip bi tirmedim."
  },
  {
    "id": 160,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Evet ihtimal daha sakalına kır düşmeden padişahın mührüne nail olacaktı. Hem cesur, hem fâzıldı! Seferlerde sedefli curayla kahramanlık destanları söyler[;] sulh zamanında gayet çelebice hikmetlerle dolu gazeller[,] kasideler yazardı[.] Kılıç kabzasının nasırlattığı elinde, kalem yabancı durmuyordu. Halkın ağzında kendisine dair birçok efsaneler dolaşırdı."
  },
  {
    "id": 161,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Her yerde birçok fırsatlarçı kıyor, birçok insanlar, ruhumda fazlasiyle bulunduğunu bildiğim sevgiyi sarfetmek, tekrar yaşamağa başlamak için bana kısa ümitler veriyordu. Fakat bir türlü kendimi o şüpheden kurtaramıyordum: \"Ne lüzumu var? Yeni aldan malara, yeni inkisarlara düşecek olduktan sonra ne lüzu mu var[?][\"] diyordum[.] Dünyada bir tek insana inanmıştım. O kadar çok inanmıştım ki, bunda aldanmış olmak, bende artık inanmak kudreti bırakmamıştı."
  },
  {
    "id": 162,
    "source": "Ömer Seyfettin - Forsa",
    "text": "Koştu. Koştu. Karaya çıkan askerler, ak sakallı bir ihtiyarın kendilerine doğru koştuğunu görünce[:] [—] Dur[!] Diye bağırdılar. İhtiyar durmadı, bağırdı: — Ben Türk'üm, oğullar, ben Türk'üm."
  },
  {
    "id": 163,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Gören diğer hizmetçilere de kanmadılar. Çoluk, çocuk, hepsi arka odanın balkonuna çıktılar. Artemisya[']nın parmağıyla gösterdiği beyaz hayaleti gördüler[.] Ağaçların altında duruyor, sanki köşke bakıyordu. Sermet Bey gözlerini oğuşturdu: — Vay anasını!"
  },
  {
    "id": 164,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Kime, ne an latabilirim? On seneden beri hiç kimseye bir şey söyledi ğimi hatırlamıyorum. Boşuna yere herkesten kaçmış, boş yere bütün insanları kendimden uzaklaştırmışım[;] ama bundan sonra başka türlü yapabilir miyim[?] Artık hiç bir şeyin değişmesine imkân yok.. Lüzum da yok."
  },
  {
    "id": 165,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "B6n bu yirmi beş gün zarfında ne yaptığımı şimdi pek hatırlamıyorum. Galiba onu gidip gördüğüm, başucunda durarak, terleyen vüzürnü, arasıra kenara kayan gözlerini ve büyük bir güçlükle nefes alan göğsünü seyrettiğim zamanların haricinde hiç bir şey yapmadım. Hattâ yasamadım bile[;] çünkü yaşasam şimdi aklımda bu günlere ait hiç olmazsa küçücük bir hâ tıra bulunurdu[.] Yalnız onun yanındayken içimi müthiş bir korku: Onu kaybetmek korkusu sarardı. Yatağın kenarın dan dışarı fırlıyan parmakları, örtünün nihayetini kabar tan ayakları, daha şimdiden ölü bir hâl almışlardı."
  },
  {
    "id": 166,
    "source": "Ömer Seyfettin - Diyet",
    "text": "... Gölgeler yaklaştılar. Bir adım kalınca onu kıyafetinden tanıdılar[:] [—] Koca Ali[...] Koca Ali, be! ..."
  },
  {
    "id": 167,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Kim bilir, evin gürültüsü mü canımı sıkıyor nedir!...\" Sonra, fazla söylemiş olmaktan korkar gibi acele acele: \"İnsan ihtiyarladıkça böyle pluyor galiba!\" dedi. \"Ço luk çocuğun ne kabahati var!\" Dışarıda gene gürültü, hızlı konuşmalar başlamıştı. Mektepten dönen büyük kız içeri girdi, babasının yanak larını öptü: [\"]Nasıl oldun babacığım[?]\" Sonra bana dönerek elimi sıktı: \"Efendim, hep böyle oluyor[...] Arasıra akima esip: ben biraz kahveye gideceğim! diyor, sonra da, kendini orada mı üşütüyor, yolda mı üşüyor nedir, hastalanıveriyor.."
  },
  {
    "id": 168,
    "source": "Ömer Seyfettin - Falaka",
    "text": "!\" Çocuklar, hem hapşırıyor, hem gülüşüyorlardı. Kaymakam, vakarına dokunan bu arsızlığa hiddetlendi. Isıracak gibi dişlerini göstererek, [\"]Defolun bakayım oradan, terbiyesizler[!][\"] dedi. Biz korktuk, hemen sustuk. Sonra şaşkın, perişan, yere bakan Hoca Efendi'ye döndü: \"Benimle birlikte geliniz.\" Kaymakam önde, zaptiyelerle Hoca Efendi arkada, çıkıp gittiler."
  },
  {
    "id": 169,
    "source": "Ömer Seyfettin - Yüksek Ökçeler",
    "text": "Diyordu. Bir hafta içinde adamlarının on beşten fazla hırsızlığını, yolsuzluğunu tuttu. Hele Mehmet[']i[,] komşu paşanın neferleriyle koca bir lenger pirinç pilavını atıştırırken görünce, hiddetinden ne yapacağını şaşırdı. O gün her tarafı kilit kürek altına aldı. Bakalım şimdi ne çalacaklar?"
  },
  {
    "id": 170,
    "source": "Ömer Seyfettin - Kaşağı",
    "text": "Pekala, bu kaşağıyı niye kırdın? Hasan, Dadaruh'un elinde duran alete şaşkın şaşkın baktı! Sonra sarı saçlı başını sarsarak[:] [—] Ben kırmadım, dedi. Yalan söyleme, diyorum. Ben kırmadım."
  },
  {
    "id": 171,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Sınıfta arkadaşlarımın yaptığı bir kabahat daima benim üzerime atıldığı halde ber. ken dimi bir kelime ile olsun müdafaaya cesaret edemez, eve döndüğüm zaman bir kenara saklanıp ağlardım. Annemin ve bilhassa babamın bana sık sık: [\"]Yahu, sen kız olacak mışsın ama yanlış doğmuşsun[!]\" dediklerini hatırlıyorum. En büyük zevkim evin bahçesinde veya derenin kenarında yalnız başıma oturup hülyalara dalmaktı. Bu hül yalar, hareketlerimle büyük bir tezat teşkil edecek kadar cesurca ve genişti: Okuduğum sayısız tercüme romanlar daki kahramanlar gibi, her sözüme tereddütsüz itaat eden maiyetimle beraber ortalığı kasıp kavurduğum, birma halle ötede oturan ve içimde şeklini pek tayin edemedi ğim tatlı arzular uyandıran Fahriye ismindeki bir kızı, yüzümde bir maske ve belimde çifte tabancalarla, dağ lardaki muhteşem mağarama kaçırdığım olurdu."
  },
  {
    "id": 172,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Hasta gözlerini araladı, tanıyamamış gibi bana bir müddet baktı. Sonra büyük bir gayret sarfederek başını karısına ve kızına çevirdi, anlaşılmaz birkaç kelime mı rıldandı, yüzünü buruşturarak birtakım işaretler yaptı. Neclâ sokuldu: \"Bir şey mi istedin babacığım[?]\" \"Hadi, siz biraz çıkın[!]\" Sesi pek hafif ve kesikti. Mihriye Hanım bize işaret etti. Fakat bunu gören hasta, elini yataktan dışarı çıkararak bileğimden yakala dı ve: \"Sen gitme!\" dedi."
  },
  {
    "id": 173,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Canını padişah ve devlet uğrunda vermeye ahdetmiş miydi? O halde bu canı kimden, nereye, niçin kaçıracaktı? Artık[,] birdenbire kuvvetlenmiş iraddesinin hükmüne tâbi demir elleriyle tuttuğu bu kırmızı keseyi kaldırdı[.] Dudaklarına dokundurdu. Sonra başına götürdü."
  },
  {
    "id": 174,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Büyük topa doğru yürüdüler. Yaklaşınca Arslan Bey: — İşte, dedi, sizin böyle topunuz var mı? Düşman kumandanı tercümanla cevap verdi[:] [—] Hayır. Niçin yapmıyorsunuz? Bilmiyoruz."
  },
  {
    "id": 175,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Zahmet olacak ama...\" dedi. \"Yarın akşam getiririm!\" Gözlerini tavana dikerek uzun müddet sustu. Birden bire başını bana çevirdi: [\"]Orada, gözün içinde ne varsa hepsini getir[!]\" dedi. \"Ne varsa... Bizim hanım galiba benim bir daha şirkete gidemiyeceğimi sezdi..."
  },
  {
    "id": 176,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Onu yollarda beklediğim gece lerde kafama hücum eden yığın yığın kandırıcı cümleler den hiçbiri aklıma gelmiyordu ve ben bunları aramıyordum. İçimde, basit bir \"hikâye etmek ihtiyacı\" ndan baş ka hiçbir alâka yoktu. Vakaları bana olan nisbetleri ba kımından değil[,] kendi ehemmiyetleri bakımından kıymet lendiriyordum[.] Ve o, en küçük bir hareket bile yapmadığı halde, beni bütün dikkatiyle dinliyordu. Bunu gayet iyi hissediyordum."
  },
  {
    "id": 177,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "\"Çünkü artık yaşamıyor!\" \"Nasıl?\" Bu kelimenin ağzımdan bir ıslık gibi çıktığını duydum. Etrafımızdakiler dönüp baktılar ve kompartimandaki ço cuk başını pencereden uzatarak hayretle beni süzdü. Kadının gözleri dikkatle üzerimde dolaşıyordu[:] \"Niçin bu kadar şaşırdınız[?]\" dedi, \"Neden sarardınız[?] Pek az tanıdığınızı söylemiştiniz?\" \"Ne de olsa,\" dedim, \"Hiç tahmin edilmiyen bir ölüm!\" \"Evet... Ama yeni bir şey değil..."
  },
  {
    "id": 178,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Herhalde geçecek... Ama sen pek bitkin duruyorsun!\" \"Hasta olduğunu bu gece Atlantik’ten öğrendim. Eve gittim, karşı dairenin hizmetçisi buraya getirdiklerini söy ledi Gece içeri bırakmadılar, ben de sabahı bekledim[!]\" \"Nerede[?]\" \"Burada[...] Hastanenin etrafında!\" Gözlerini üstümde gezdirdi. Gayet ciddîydi."
  },
  {
    "id": 179,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Fakat keşki yapmasaydım... Sizi tamamen kaybettik... Bir daha sergiye gelmediniz[!]\" \"Benimle eğleneceklerini zannetmiştim[!]\" dedim. Fakat derhal pişman oldum. Bu sözümden alınabilirdi."
  },
  {
    "id": 180,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Gazilerin hepsi buna razı oldu. Öğleye kadar durdular. Abdest aldılar[,] namaz kıldılar[,] tekbir çektiler[,] helalleştiler. Kıraçin'in askerleri sardıkları palangadan yükselen derin uğultuyu hep teklif ettikleri \"Vire\" münakaşasının gürültüsü sanıyorlardı. 🙝🙟 Ansızın, uzaktaki Türk kulelerinden atılan \"işaret topları\" işitildi."
  },
  {
    "id": 181,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Karnı açtı. Üzengisini tutan hizmetkârlardan su istedi. Verdikleri çotrayı nihayetine kadar içti[;] ağır[,] keskin mahmuzlarını atın karnına vurdu[.] Ordugâhın kalabalığı, ışıkları, uğultusu arasından beş dakikada çıktı. Karanlığın, yağmurun, rüzgârın içinde dörtnala uzaklaştı."
  },
  {
    "id": 182,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Ama Ali Paşa, çok sabırlı... Mâşallah! Kethüdâ başını kaldırdı: [—] O da sabırsız[...] Ama, ne yapsın? Dregley, pek yalçın, pek sarp..."
  },
  {
    "id": 183,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Yeniçeriler, bir kurşunla yaralanan Zondi'yi diri diri yakalamaya çok çalıştılar. Ama mümkün olmadı. O[,] diz üstü sürünerek[,] her tarafı kılıçla, mızrakla delik deşik olup ölünceye kadar vuruştu[.] Demek paşa bu mert düşmanla konuşamadı. Evet, konuşamadı."
  },
  {
    "id": 184,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Karara rızadan başka çare yoktu... Sendeleyerek ayağa kalktı. Hâkime dik bir sesle[:] [—] Kolumu bırakın, kafamı kesin[!] Diye rica etti. bu ömründe ilk ricasıydı."
  },
  {
    "id": 185,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Artemisya'nın parmağıyla gösterdiği beyaz hayaleti gördüler. Ağaçların altında duruyor, sanki köşke bakıyordu. Sermet Bey gözlerini oğuşturdu[:] [—] Vay anasını[!] dedi, telkinin kuvvetine bak! Karısı, kızları, çocukları korkudan sapsarı kesildiler."
  },
  {
    "id": 186,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Askerler, sallanan siyahlı beyazlı bayrağı ile Şalgo'yu bir hayal gibi gördüler. Sesler kesildi. Şimalden esen bir rüzgar dumanları dağıtıyor[;] gerilere[,] ormanlara doğru sürüyordu[.] Artık herkes birbirini görüyordu. Kaleye pek yaklaşılmıştı."
  },
  {
    "id": 187,
    "source": "Ömer Seyfettin - Falaka",
    "text": "O da kalktı. Ellerimizi kaldırdık. Hoca Efendi bağırdı: \"Ne var[?]\" \"Abdurrahman Çelebi[']yi hazırlayalım mı[?]\" \"Haydi, pekâlâ, çabuk!\" Kapıdan çıktık. Her akşam Hoca Efendi'nin izin verdiği iki çocuk önden çıkar, eşeğin yularını, semerini vururdu. Taş merdiveni koşarak indik."
  },
  {
    "id": 188,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Hâlâ sokak ortasında durduğumuzu farkettim ve: \"Gelin bir yerde oturalım; Birbirimize soracak şeyler vardır... Sizi Ankarada gördüğüme hâlâ hayret ediyo rum!\" dedim. [\"]Evet, bir yerde otursak ne iyi olurdu, fakat bizim tren vakti geliyor, bir saatten az kalmış[...] Kaçırmıyalım... Ankarada olduğunuzu bilseydim muhakkak arardım."
  },
  {
    "id": 189,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Mika levhaların arkasında parlıyan kızıl gözleriyle demir sobayı gördüm. \"Sobaya mı?\" \"Evet!\" Bu anda merakım büsbütün arttı. Raif Efendinin def terini ellerimle yok etmek, benim için imkânsızdı: [\"]Ne münasebet, Raif Bey![\"] dedim. \"Yazık değil mi? Size uzun zaman arkadaş olmuş bir defteri manasız yere yakmak doğru mu?\" \"Lüzumu yok!\" dedi ve başiyle tekrar sobayı gösterdi."
  },
  {
    "id": 190,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bir kanapeye yanyana oturmuşlar, sigara içiyorlardı. Müthiş bir iç sıkmtısiyle kıvrandıkları ve evi bırakıp çıkamadıkları için kendiken dilerine içerledikleri belli idi. Nurten bir koltuğa oturmuş[,] başını koluna dayamıştı[;] ağlıyor, yahut uyuyordu[.] Biraz ötede, Raif Efendinin baldızı Ferhunde, iki çocuğunu kucağına oturtmuş, onların gürültü etmelerine mâni ol mak için bir şeyler söylüyor, fakat her halinden, çocuk avutmanın nekadar acemisi olduğu anlaşılıyordu. Hastanın kapısı açıldı ve doktor, arkasında Nurettin Beyle beraber, çıktı."
  },
  {
    "id": 191,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Kethüdâ gibi bu sessiz, bu mânasız beklemeden bütün askerler sıkılıyorlar, bir şey anlamıyorlardı. Kumandanın imdat, cephâne, top beklediği söyleniyordu. İhtiyar sipâhîler[:] [\"]Biz burasını imdat gelmeden alamazmıyız[?] İki top yetmez mi? Ne duruyoruz?\" diye çadırlarında dedikodu yapıyorlardı."
  },
  {
    "id": 192,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Beklediğim ayak sesi duyulmadı. Yalnız karşı taraftaki evin kapısı aralandı, uyku sersemi bir hizmetçi: \"Ne istiyorsunuz?\" diye sordu. [\"]Burada oturanı[!]\" Yüzüme dikkatle baktıktan sonra, ters bir tavırla: \"Orada kimse yok[!]\" dedi. Yüreğim hopladı: \"Başka yere mi taşındılar!\" Telâş ve heyecanım karşımdakini biraz yumuşatmışa benziyordu, başını sallıyarak cevap verdi: \"Hayır, annesi hâlâ Pragdan gelmedi. Kendisi de has talandı, bakacak kimsesi olmadığı için hasta kasasının dok toru hastaneye kaldırttı!\" Bunları söyliyen kıza doğru koştum: \"Hastalığı nedir?"
  },
  {
    "id": 193,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Karınız boş düşer!..\" diye bir ağızdan tekrarlıyorlardı. Çocuklara mı, eşeğe mi, neye kızdığını bilmeyen Hoca Efendi, gayr-i ihtiyâri, \"Yıkınız!\" emrini verdi. Belki yirmi çocuk Abdurrahman Çelebi[']nin başına üşüştü[.] Uzun bir uğraşıdan sonra yere yatırdık. Arka ayaklarını falakaya taktık."
  },
  {
    "id": 194,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Sonra birdenbire dura rak tekrar yanıma sokuldu; şimdiye kadar konuştukla rına hiç benzemiyen, ciddî, hattâ biraz da hazin bir eda ile: \"Sahiden böyle bir anneniz olmasını ister miydiniz?\" dedi. \"Evet... Hem nasıl isterdim[!][\"] \"Ya![...]\" Arkasını dönerek süratli ve genç adımlarla uzaklaş tı. Başımı kaldırıp baktım. Kesik saçları ensesinin üzerin de hopluyor ve ellerini ceketinin ceplerine soktuğu için dar tayyörü vücudünü sımsıkı sarıyordu."
  },
  {
    "id": 195,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Hattâ bu günleri takibeden on seneden hiç bahsetmemeyi tercih ederdim, fakat bazı hususların anlaşılması için, hiç olmazsa birkaç sahifenin, hayatımın en manasız devresi olan bu günlere tahsis edilmesi lâzım. Havranda hiç de hoş kar şılanmadım. Eniştelerim benimle alay eder gibi[,] ablalarım tamamen yabancı, anam eskisinden daha zavallı idi[.] Evi miz kapatılmış, anam büyük eniştemin yanma göçmüştü. Bana böyle bir teklifte bulunulmadığı için eski emektar lardan bir kadınla beraber kocaman evde yalnız başıma yaşamağa başladım."
  },
  {
    "id": 196,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "\"Fakat ben pek iyi bilmem...\" Sözümün ikinci kısmını duymamış gibi yaptı, yerin den fırlıyarak: \"Haydi!\" dedi. Kalabalığın içinde dönmiye başladık. Bu[,] dansetmek falan değildi[;] dört tarafımızdan sıkıştıran vücutarm key fine tâbi olarak oradan oraya sürüklenmekten ibaretti[.] Fakat ikimiz de bundan şikâyetçi değildik. Maria gözlerini bana dikmişti."
  },
  {
    "id": 197,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bizde böyle şeyler yoktur. Fakat tahmin etmemiştim!\" \"Evet, Yahudiyim, Babam Praglı idi. Daha beri doğ madan katolik olmuş[!]\" \"Şu halde din itibariyle hıristiyansmız!\" \"Hayır[...] Yani benim hiçbir dinle alâkam yok!\" Bir hayli yürümüştük. O sözüne devam etmedi."
  },
  {
    "id": 198,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Bir anda, bu kestiği baş elinde, yine siyah bir ifrit gibi şahlanan atına sıçradı. Kaçacaktı... Kuru Kadı, bütün kuvvetiyle ona yetişmek için koşarken, baktı ki, solu ilerisinde Deli Hüsrev kalkanını sallayarak, avazı çıktığı kadar bağırıyor[:] [—] Mehmed, Mehmed[!].. Canını verdin!.. Başını verme Mehmed!.."
  },
  {
    "id": 199,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Hacı Niyâzi Efendi sokakta sarı aba cübbesinin cebinden pirinç bir anahtar çıkardı. Bahçe kapısını açtı. Sermet Bey[']e[:] [—] Bu anahtar köşkü de açar. Dedi. Yürüdüler, bahçe hakikaten biraz vahşiydi."
  },
  {
    "id": 200,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Yalnız kaçırılan fır satlar asla akıldan çıkmıyor ve her hatırlayışta insanın içini sızlatıyor. Bunun sebebi herhalde, \"Bu böyle olmıyabilirdi!\" düşüncesi, yoksa insan mukadder telâkki ettiği şeyleri kabule her zaman hazır. Karımdan[,] çocuklarımdan, alelûmum ev halkından fazla bir alâka gördüğüm yoktu[;] fakat bunu beklemeğe hakkım olmadığını da biliyordum[.] Berlinde, o garip yıl başı gününde ilk defa olarak duyduğum lüzumsuzluk hissi bende tamamen yerleşmişti. Benim bu insanlara ne lüzu mum vardı?"
  },
  {
    "id": 201,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Konuşurken düşündüğü hep kendi planıydı. Yine göğe dalmıştı. Birdenbire sordu: [—] Hava kapanıyor gibi, değil mi[?] Evet... Bakalım yarın..."
  },
  {
    "id": 202,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Ceddim Hamza Bali Bey, daha ondört yaşında iken sizin ordularınızı perişan etmiş, Viyana Muhasarası'nda, Viyenberg önünde şan almıştır. Ben, hangi kaleye gittimse geri dönmemişim, daha geçen gün iki küçük topla ``Boza´´ kulesini yerle bir ettim. Mihal Terşi[,] Etiyen Soşay[,] Andrenaki gibi kahramanlarınıza canlarını bağışladım[.] Vadiye çekildim. Geçip gitmeleri için yol verdim."
  },
  {
    "id": 203,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "\"Ço luk çocuğun ne kabahati var!\" Dışarıda gene gürültü, hızlı konuşmalar başlamıştı. Mektepten dönen büyük kız içeri girdi, babasının yanak larını öptü: \"Nasıl oldun babacığım?\" Sonra bana dönerek elimi sıktı: \"Efendim, hep böyle oluyor... Arasıra akima esip[:] ben biraz kahveye gideceğim[!] diyor, sonra da, kendini orada mı üşütüyor, yolda mı üşüyor nedir, hastalanıveriyor.. Kaç defadır böyle oldu..."
  },
  {
    "id": 204,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "O hep ayni kapalı, sessiz insan olarak kal dı. Gerçi bazı akşamlar daireden beraber çıkarak evine kadar yürür, hattâ bazan içeri de birlikte girerek, kırmızı mobilyalı misafir odasında birer kahve içerdik. Fakat bu esnada ya hiç konuşmaz yahut da havadan sudan[,] Ankaranın pahalılığından[,] İsmetpaşa mahallesindeki kaldırım ların bozukluğundan bahsederdik[.] Evine, çoluk çocuğuna dair bir şey söylediği nadirdi. Arasıra: \"Bizim kız riyaziye den gene kırık numara almış!\" der, sonra hemen lâfı de ğiştirirdi."
  },
  {
    "id": 205,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Boru, trampet, hurrâ sesleri aksetmeye, tek tük tabanca, tüfek atılmaya başladı. Gözcüler kale bedenlerinin dibine kadar gidip geliyorlardı. Safların arasında[,] topçubaşının büyük bir lağım açtığı söyleniyordu[.] Askerler, zâbitlerinin emriyle, oldukları yerlerde bağdaş kurmuş bekliyorlar, gürültü ediyorlardı. Nihayet, Arslan Bey, terden sırılsıklam olmuş atı ile duman içinde harp sıralarının arasında, adım adım göründü."
  },
  {
    "id": 206,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "İkimiz de belli etmeden birbirimizi tet kik etmek istiyor ve bu sırada gözlerimiz karşılaşıverince, \"Gördüklerimden memnunum.\" demek istiyen tasvipkâr bir gülümseme ile bakışmakta devam ediyorduk. Sükûtu ilk bozan ben oldum: \"Demek bir anneniz var?.\" \"Sizin gibi!\" Mânâsız bir şey sormuş gibi sıkıldım. O bunu farkederek sözü değiştirdi: [\"]Sizi burada ilk defa görüyorum![\"] \"Evet. Böyle yerlere hiç gelmemiştim... Yalnız bu ak şam...\" \"Bu akşam?\" / Bütün cesaretimi toplayarak: \"Sizin arkanızdan geldim!\" dedim."
  },
  {
    "id": 207,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Nefesi biraz sıcak olmakla beraber, bu taşkın mu habbet tezahürü içime ağır fakat güzel bir koku gibi ya yıldı. Etrafımızdan geçen birkaç kişi gülerek saadette mennisinde bulundu. Bu sırada gözlerim[,] on adım kadar ilerideki elektrik direğinin altından bize doğru gelen bir kadına ilişti[.] Bütün vücudumun tarifi imkânsız bir heye canla titremiye başladığını hissettim. Hâlâ bana sarılmış duran kadın bunu farkedince daha çok ateşlenerek saçla rımı puselere boğuyordu."
  },
  {
    "id": 208,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Eşek debeleniyor, çocuklar bağırıyor, gülüyor, nâralar atıyorlardı. Müthiş bir gürültü... Ansızın arkadan bir çocuk[;] [\"]Kaymakam Bey![\"] diye bağırdı. Hepimiz sustuk. Yüzümüzü avlu kapısına çevirdik; siyah setre pantolonlu, kırmızı fesli, ekşi suratlı bir adam..."
  },
  {
    "id": 209,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Döndü. Köprünün öbür tarafından iki üç karaltı ilerliyordu. Gayr[-]i ihtiyarî cevap verdi[:] [—] Yabancı yok! Kimsin? Ali..."
  },
  {
    "id": 210,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bu sırada avucumun içinde sıcak bir yaş lık hissettim. Hayretle yüzüne baktım. Gülümsüyordu[,] uzun zamandan beri ilk defa olarak, apaçık, tertemiz gü lümsüyordu[;] fakat gözlerinin kenarından yanaklarına doğ ru yaşlar sızmaktaydı[.] Başını iki elimle birden yakaladım ve kolumun üzerine yatırdım. Şimdi daha çok, daha rahat gülüyordu; fakat gözyaşları ayni nisbette çoğalmıştı."
  },
  {
    "id": 211,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Bunu Kuru Kadı'dan başka kimse görmemişti! Herkes kaçan düşmanı kovalıyordu. Yalnız Deli Hüsrev[:] [—] Yüzün ak olsun, ey celâsın! diye bağırdı. Sonra Kuru Kadı'ya doğru koşarak sordu: — Nasıl, gördün mü bu civanı?"
  },
  {
    "id": 212,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "İnsanlık onun nazarında çok yüksek, çok büyüktü. İnsan, arzın üzerinde Allah'ın bir halefiydi. Allah[,] insana kendi ahlakını vermek istemişti[.] İnsan, her mevcudun fevkinde idi. Kuyruğunu sallaya sallaya efendisinin pabuçlarını yalayan köpeğe tabasbus pek yakışırdı; ama, insana..."
  },
  {
    "id": 213,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "îşin garibi, sıkıntımın arttığı ve ihtiyaçlarımın beni bugünden yarına çıkarması bile im kânsız hale geldiği nisbette, benim de çekingenliğim, mah cupluğum artıyordu. Evvelce bana iş bulamları için mü racaat ettiğim ve hiç de fena muamele görmediğim bazı tanıdıklara sokakta rasladığım zaman başımı önüme eğip hızla geçiyordum; evvelce bana yemek yedirmelerim serbestçe rica ettiğim ve sıkılmadan ödünç para aldığım arkadaşlarıma karşı bile değişmiştim. \"Vaziyetin nasıl[?]\" diye sordukları zaman, acemi bir gülümseme ile[:] \"Fena değil[...] Tektük muvakkat işler buluyorum!\" diye cevap veriyor ve hemen kaçıyordum. İnsanlara nekadar çok muh taç olursam onlardan kaçmak ihtiyacım da o kadar artıyordu."
  },
  {
    "id": 214,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Hay hay. Çok doğru... Sadrazam[,] sakalından çektiği elini dizine dayadı[.] Doğruldu. Başını kaldırdı."
  },
  {
    "id": 215,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Burcun tepesinde, beyazlı siyahlı bir bayrak, can çekişen bir kartal ıstırabıyla kıvranıyordu. İkibin kişilik muhâsara ordusunun çadırları, kaleye giren geniş yolun sağındaki büyük dişbudak ağaçlarının etrafına kurulmuştu. Yerlere kazıklanmış kır atlar[,] yabancı korkular duyuyorlar gibi[,] sık sık başlarını kaldırarak kişniyorlar, tırnaklarıyla kazmaya çalıştıkları toprakların nemli çimenlerini otluyorlardı[.] Dallarda kırmızı çullar, sırmalı eğerler asılı duruyordu. Cemâatle kılınmış akşam namazından dağılan askerler, çadırların arasından gürültü ile geçiyorlardı."
  },
  {
    "id": 216,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Onun da benden hoşlandığı, beni aradığı muhakkaktı. Fa kat arkadaşlığımızı başka sahalara götürmek için asla ve sile vermiyordu. Bir gün Berlin civarında bir orman olan Grünewald’da dolaşırken kolunu boynuma atmıştı[,] bana dayanarak yürüyordu[.] Omuzumdan aşağı sarkan eli hafif hafif sallanıyor ve başparmağı havada daireler çizer gibi kımıldıyordu. Nasıl doğduğunu anlamadığım bir arzu ile bu eli yakaladım ve avcunun içini öptüm."
  },
  {
    "id": 217,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Ama, görüyorum ki, benim işim bitti. O, durmasın, bütün kuvvetiyle hücum etsin. Ben mutlaka yıkılacak kalenin taşları altında kalmak isterim.[\"] [—] Sâhi, namuslu bir askermiş[...] Kethüdâ: — Yalnız namuslu bir asker değil, Arslan Bey, dedi, hem de gayet âlicenap bir mert... Nasıl?"
  },
  {
    "id": 218,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Serseri bir adsız gibi dağlar, tepeler, dereler aştı. İsmini bilmediği memleketler dolaştı. Nihayet Erzurum[']da ihtiyar bir demircinin yanına girdi[.] Otuz yaşına kadar Anadolu'da uğramadığı şehir kalmadı. Kimseye boyun eğmedi."
  },
  {
    "id": 219,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Kucakladı. Alnından öptü: — Safa geldin yiğidim, hayır haberler getirdin... Tosun Bey gülerek: [—] Bir ferman[-]ı hümâyun getirdim. Dedi. Ve koynundan kırmızı keseyi çıkardı."
  },
  {
    "id": 220,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Odada insanı şaşırtacak bir kargaşalık hüküm sürüyordu. Raif Efendinin başucundaki komodinir üzerinde, teneke bir tepsi içinde, öğleden kaldığı anlaşıl an kirli bir çorba tabağı, ağzı açık küçük bir sürahi ve bunların yanında, şişeler KÜRK MAntOLU MADONNA veya tüpler içinde bir sürü ilâç duruyordu. Hasta adam[:] \"Şuraya oturuverir^ canım[!]\" diyerek yatağın ayakucunu gösterdi. \\ Şöyle iliştim. Karşındakinin sırtında, dirsekleri delin miş, alacalı bulacalı, yünden örme bir kadın hırkası vardı."
  },
  {
    "id": 221,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Hepsi bir ağızdan: — Aç bize kapıyı, aç... Diye bağırmaya başladılar. Kuru Kadı[']nın iri patlak gözleri yaşardı[.] Yüzü sapsarı oldu. Uzun siyah sakalı kımıldadı."
  },
  {
    "id": 222,
    "source": "Ömer Seyfettin - Forsa",
    "text": "Evet — ... 🙝🙟 İhtiyar esir sevincinden bayılmıştı. Kendine gelince oğlu, ona[:] [—] Ben karaya cenk için çıkıyorum[.] Sen gemide rahat kal, dedi. Eski kahraman kabul etmedi: — Hayır."
  },
  {
    "id": 223,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Bu altın kaldırımlı, mîna çiçekli, cenneti andıran nuranî yolların nihayetinde daima \"kirli bir etek mihrabı\" bulunduğunu bilirdi. İnsanlık onun nazarında çok yüksek, çok büyüktü. İnsan, arzın üzerinde Allah[']ın bir halefiydi[.] Allah, insana kendi ahlakını vermek istemişti. İnsan, her mevcudun fevkinde idi."
  },
  {
    "id": 224,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bunu sadece gözlerini bir kere açıp kapamakla, fakat yanılmama im kân vermiyecek kadar sarih bir şekilde yaptı. Sonra gül dü. Bütün yüzüne yayılan[,] açık[,] temiz, yalansız bir gü lüşle güldü[.] Eski bir dosta güler gibi güldük. Bir müddet çaldıktan ve beni bir kere daha, bu sefer gözleri ve başiyle selâmladıktan sonra başka masalara gitti."
  },
  {
    "id": 225,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Hiçbir şeyi saklamıyor, buna lüzum görmüyordum. Çünkü hiçbir maksadım yoktu. İçinde yaşadığım hâdiseler bana[,] aradan uzun seneler geçmiş hâtıralar gibi yabancı geliyordu[.] Onlarla aramda bir mesafe teşekkül etmişti. Bunun için hem kendi hakkımdaki, hem onun hakkındaki hükümlerimde, hertürlü gizli düşünceden ve hesaptan uzak, âdeta insafsızdım."
  },
  {
    "id": 226,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Düşman ordugâhlarının görünmeden arkasından dolaşarak, cephânelerine ateşe vermiş... Esir olduğu vakit yüzlerce muhafızın arasından kurtularak, kendini beklerken öldürdüğü nöbetçilerin silahları ve atlarıyla dönmüştü. Herkes onu sever[,] herkes ona hürmet ederdi[.] Hatta vezirler bile... Çünkü Tosun Bey, bu cesaretiyle yakında beylerbeyi olacak, vezirlik içın çok beklemeyecek, ihtimal..."
  },
  {
    "id": 227,
    "source": "Ömer Seyfettin - Kaşağı",
    "text": "Hasan, inkârında inat etti. Babam hiddetlendi. Üzerine yürüdü, [\"]Utanmaz yalancı[\"] diye yüzüne bir tokat indirdi. Götür bunu eve; sakın bunu bir daha buraya sokma. Hep Pervin'le otursun!"
  },
  {
    "id": 228,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Arkasında keçe külâhlı, çifte hançerli genç yamakları da duruyorlardı. \"Ne var?\" gibi yüzlerine baktı. Dizdarbaşı[:] [—] Ali Usta, dükkânı arayacağız[!] dedi. Koca Ali şaşkınlıkla sordu: — Niçin?..."
  },
  {
    "id": 229,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Yegane mefkûre si: \"Allah'tan başka kimseye secde etmemek, kula kul olmamak\"tı... İlmi, kemali herkesçe malumdu. İbn[-]i Kemal ondan bahsederken \"Beni okutur[!]\" derdi. Şairdi. Lâkin ömründe daha bir kaside yazmamıştı."
  },
  {
    "id": 230,
    "source": "Ömer Seyfettin - Kaşağı",
    "text": "O hastalandığından beri Pervin'in yanında yatıyordum. O gece hiç uyuyamadım. Dalar dalmaz, Hasan[']ın hayali gözümün önüne geliyor, \"İftiracı[!] İftiracı!\" diye karşımda ağlıyordu. Pervin'i uyandırdım."
  },
  {
    "id": 231,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Ancak birkaç saniye sonra, bulunduğum yerin cad denin diğer kısımlarından daha aydınlık olduğunu farkettim. Yavaşça gözlerimi kaldırdım: Ortada kadın filân yok tu. Birkaç adım ileride[,] kapısı elektriklerle aydınlatılmış[,] oldukça meşhur bir kabare vardı[.] Sokağa doğru fırlamış kocaman bir lehvanın üzerinde mavi ampullerle yazılmış \"Atlantik\" kelimesi bir yanıp bir sönüyordu ve vazınm alt tarafında gene ampullerden yapılmış, deniz dalgalarına benziyen şekiller vardı. Kapıda duran sırmalı elbiseli, kırmızı kasketli, iki metre kadar boylu bir adam eğilerek beni içeri davet etti."
  },
  {
    "id": 232,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Hayal sökün etmişti. Eliyle dokununca gölge gibi uçup silineceğini katiyen bildiği halde yine Sermet Bey'in dizleri titremeye başladı. İçinden[:] [\"]Ben korkmuyorum, fakat vücudum korkuyor[!]\" dedi. Yavaşça aşağı atladı. Hayalin arkasından yürüdü."
  },
  {
    "id": 233,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "İnce siyah kaşlarının altında iri gözleri parlıyordu. Belindeki silahlık boştu. Bütün kullarının tekâpû suna[,] secdesine alışan sadrazam[,] bir an, eteğine kapanılmasını bekledi[.] Oturduğu mor çuha kaplı sedirin daima öpülen ağır sırma saçağındaki yumağı, altından, içi boş küçük bir kafa gibi şaşkın duruyordu. Sadrazam söyleyecek bir şey bulamadı."
  },
  {
    "id": 234,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Resimleri seyredip geçenler, vücutlariyle beni sağa, sola itiyorlar, fakat ben olduğum yerden aynlamıyordum. Bu portrede ne vardı?.. Bunu izah edemiyeceğimi biliyorum[;] yalnız[,] o zamana kadar hiçbir kadında görmediğim garip, biraz vahşi, biraz mağrur ve çok kuvvetli bir ifade vardı[.] Bu çehreyi veya benzerini hiçbir yerde, hiçbir zaman gör mediğimi ilk andan itibaren bilmeme rağmen, onunla aramızda bir tanışıklık varmış gibi bir hisse kapıldım. Bu soluk yüz, bu siyah kaşlar ve onların altındaki siyah gözler; bu koyu kumral saçlar ve asıl, masumluk ile iradeyi, sonsuz bir melâl ile kuvvetli bir şahsiyeti birleştiren bu ifade, bana asla yabancı olamazdı."
  },
  {
    "id": 235,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Onu inandırmak için bir çok şeyler yapmıya hazırdım, fakat ilk defa olarak herhan gi bir şekilde bir heyecan ifade ettiğini gördüğüm gözleri çabucak eski ifadesizliklerine ve o her zamanki bomboşte bessüme döndüler. îçimi çekerek kalktım. Birdenbire doğrulup elimi tuttu[:] [\"]Ziyaretinize teşekkür ederim oğlum[!]\" dedi. KÜRK M. A NTOLU MADONNA Sesinde bir sıcaklık vardı."
  },
  {
    "id": 236,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Yalnız gürültü istiyorum. Pekala beyim. Sonra diğer zâbitlere döndü[:] [—] Siz de bütün askerlerinizi muharebe nizâmıyla bunlara yaklaştırın[.] Mümkün olduğu kadar çok gürültü yaptırın. ``Heya, mola...´´ çektirin, Angarya nâraları attırın."
  },
  {
    "id": 237,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Oturacak bir şey yoktu. Gülümsedi. İçinden: [\"]Beni mecburen ayakta, hürmet vaziyetinde tutmak istiyorlar galiba[...]\" dedi. Bir an düşündü. Bu hakarete nasıl mukâbele etmeliydi?"
  },
  {
    "id": 238,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Gelin, size elli manda ile buraya getirdiğim topu seyrettireyim, dedi. Tercüman bunu tekrarlayınca, hepsi birbirlerine bakıştılar. Bu müthiş[,] bu korkunç[,] aleti yakından görmeyi hem merak ediyorlar, hem çekiniyorlardı[.] Arslan Bey'in arkasına takıldılar. Büyük topa doğru yürüdüler."
  },
  {
    "id": 239,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Kimbilir aleyhinde ne yalan uydurmuşlardı. Fakat... O, babası gibi celladın pis kılıcına bir koyun itaatiyle başını uzatmayacak, canını almaya gelenlerin canlarını alacak[;] kendi canı alınıncaya kadar, başkalarından can alacaktı[.]. Vakit geçirmeyeyim. Diye mırıldandı."
  },
  {
    "id": 240,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "İnsanları öğren mek, bilhassa insanların size ne yaptıklarını bilmek istiyo rum...\" dedim. Hasta başını şiddetle sallıyarak sözümü kesti. Bir şeyler mırıldanıyordu[;] eğildim, nefesini yüzümde hissedi yordum[:] \"Hayır, hayır[!]\" diyordu. \"İnsanlar bana hiç bir şey yapmadılar... Hiç bir şey..."
  },
  {
    "id": 241,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Tahtın önündeki dibâ şilteleri, ipek seccadeleri kaldırttı. Sağında vezirleri, solunda muharipleri duruyorlardı. [...]Muhsin Çelebi, geniş somaki kemerli açık kapıdan serbest adımlarla girdi[.] Yürüdü. Başı her vakitki gibi yukarda, göğsü her vakitki gibi ileride idi."
  },
  {
    "id": 242,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Bu kadar pervasız bir adam devletine, milletine yapılacak hakareti de çekemez, ölümden korkarak, göreceği hakaretlere eyvallah diyemezdi. Kavuğunu hafifçe salladı: — Seni Tebriz'e elçi göndereceğiz. Muhsin Çelebi sordu[:] [—] Katınızda bu kadar nişancılar, kâtipler, hocalar var. Niçin onlardan intihâb etmiyorsunuz? Sen, Şah İsmail denen habisin kim olduğunu biliyor musun?"
  },
  {
    "id": 243,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Beyaz örtüsüne bu sefer yarım bürünmüş olduğu halde, her gece sır olduğu tarafa gitti. Sermet Bey'in iki senedir köşkte oturabildiğine herkes hayrette kaldı. Komşuları Hacı Niyâzi Efendi[']ye: [—] Galiba senin evin ecinnileri, başka eve göç ettiler. Yeni kiracın hiç çıkacağa benzemiyor! Dedikçe, evvela sararıyor, sonra kızarıyor, şu cevabı homurdanıyordu: — Ne abdest, ne oruç, ne namaz, ne niyaz..."
  },
  {
    "id": 244,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Başını verme Mehmed!.. Bu nara o kadar müthiş, o kadar müessir, o kadar yanıktı ki... Kuru Kadı: [\"]Vah, Deli Mehmedmiş[!][\"] diye olduğu yerde dikildi kaldı. Durur durmaz, o an, kırk adım kadar yaklaştığı kesik başlı şehidin yerden fırladığını gördü. Nefesi tutuldu."
  },
  {
    "id": 245,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Arslan Bey'in arkasına takıldılar. Büyük topa doğru yürüdüler. Yaklaşınca Arslan Bey[:] [—] İşte, dedi, sizin böyle topunuz var mı[?] Düşman kumandanı tercümanla cevap verdi: — Hayır. Niçin yapmıyorsunuz?"
  },
  {
    "id": 246,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Hem memleketi ziyaret; hem de...\" yanın da oturan soluk benizli çocuğu gösterdi: \"Hem de bu çocuk için... Biraz zayıf diye kışı bizim yanımızda geçirdi. Şimdi tekrar alıp götürüyorum.\" *Dcmek sık sık Berline gidip geliyorsunuz[!]* ♦ Senede iki defa[!]\" ♦ Herr Döppke’nin işleri iyi gidiyor galiba[!]\" Güldü ve kırıttı. Hâlâ soramıyordum. Artık kendim de farkına varmış tım ki, bu tereddüt, nasıl soracağımı bilmemekten değil, öğreneceklerimden korkmaktan geliyordu."
  },
  {
    "id": 247,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "🙝🙟 Bu elçi, yedi sene sonra takdirin \"Yavuz\" namındaki yaman sillesiyle her gururunun, her cinayetinin cezasını bir anda gören İsmail-i Safevî'ye gönderilecekti! Şehzadeliğini ata binmekten, cirit oynamaktan, silah kullanmaktan ziyade, kitapla geçiren Bayezid-i Veli'nin tabiatı son derece halimdi. Yalnız şiiri[,] hikmeti, tassavvufu sever[;] muharebeden, mücadeleden nefret ederdi[.] Vezirler, sevgili padişahlarının sükûnunu bozmamayı en büyük vazifeleri sanırlardı. Bununla beraber hudutlarda yine kavganın arkası alınamıyordu."
  },
  {
    "id": 248,
    "source": "Ömer Seyfettin - Ferman",
    "text": "dedi. Bu çok ağır bir sualdi. Perviz Efendi[,] kalın halının üzerine serilmiş erguvânî şiltesine çöktü[.] Mahmud Çelebi bu sözü hıç işitmemiş gibi davrandı. Durmadan yağan yağmurun sayısız ve asabi damlaları tıpır tıpır çadırın üstüne düşüyor, orduğâhın müphem uğultusu içinde, sanki hayali bir akının uzak ve muntazam ayak seslerini duyuruyordu."
  },
  {
    "id": 249,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Gözümün önünde yepyeni bir dünya açılır gibiydi. Bu sefer okuduklarım, çocukluğu mun ve ilk gençliğimin tercüme veya telif kitapları gibi sadece kahramanlardan, fevkalâde insanlardan ve görül memiş maceralardan bahsetmiyorlardı. Hemen hemen hep sinde kendimden[,] etrafımdan[,] gördüklerim ve duydukla rımdan birer parça buluyordum[.] Evvelce içinde yaşadı ğım halde anlamadığım, görmediğim şeyleri birdenbire hatırlıyor, onlara şimdi hakikî mânalarını verdiğimi zan nediyordum. Üzerimde en çok tesir yapanlar Rus muhar rirleri idi."
  },
  {
    "id": 250,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Gebertinceye kadar döveceğim.\" Kazara hapşıracağız diye hepimizin ödü kopuyordu. \"Şart olsun... Ah bugün biriniz hapşırırsa[...]Şart olsun, geberteceğim[...]\" \"Ah şart olsun, biriniz hapşırırsa...\" Hoca Efendi[']nin öfkesi bir türlü geçmiyordu. Ben rahlenin altında, cüzümden kopardığım iki yaprağı boru gibi büküyor, enfiyeleri içine dolduruyordum. Akşam yaklaştı."
  },
  {
    "id": 251,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Seviyorum. Hakim sadrazam doğruldu. Arkasına dayandı: [—] Pekâlâ öyleyse, dedi, bu habis [\"]elçiye zeval yok[\"] kaidesini kabul etmez. Bizimle rekabet davasındadır. Er meydanında hakkımızda yapamadıklarını bizim göndereceğimiz elçiye yapmak ister."
  },
  {
    "id": 252,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Yatsı namazı için abdest suyu taşıyan angaryacılar, meş'alelerle geçmeye başladılar. Arslan Bey, Şalgo'nun, ıslanmış, hasta, ateş böcekleri gibi sönük sönük parlayan ziyâlarına bakıyor, kethüdânın sözlerini işitmeyerek, kendi planını düşünüyordu. O biliyordu[;] düşmanların hepsi Zondi gibi, Plâs Batanyus gibi, Lozonci gibi kahraman değildi[.] İçlerinde tavşan kadar korkakları da vardı. Mesela; Seçeni kalesinin muhafızları, daha Ali Paşa yaklaşırken, toplarını, tüfeklerini, cephânelerini, erzaklarını, mallarını, hatta ihtiyarlarını, çocuklarını bırakıp bir kurşun atmadan kaçmışlardı."
  },
  {
    "id": 253,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Odanın içinde kaldıkça, Raif Efendinin bir daha bu iskemleye oturmaması ve bu çekmeceyi bir daha açmaması ihtimali zihnimden çıkmıyordu. Evde gene büyük bir telaşla karşılaştım. Kapıyı Neclâ açtı ve beni görünce[:] [\"]Sormayın, sormayın[!]\" diye ba şını salladı. Âdeta aile efradından biri gibi olmuştum ve ev halkı beni yabancı telâkki etmiyordu. Genç kız: \"Babam gene fenalaştı!\" dedi."
  },
  {
    "id": 254,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Derin ve rahat bir nefes alarak paltomuçı kardım ve salona girdim. İçerisi kalabalıktı. Ortada[,] çukurda, yuvarlak bir dans yeri[;] karşıda bir orkestra, kenarlarda yüksek ve kuytu localar vardı[.] Bunların yarısından çoğunun perdeleri ka palı idi, içindeki çiftler arasıra dans etmek için meydana çıkıyor, sonra tekrar localarına girerek perdelerini çekiyordu. Henüz kimse tarafından tutulmamış olduğu an laşılan bir tanesine gidip oturdum."
  },
  {
    "id": 255,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Tam bu sırada yanımdan hızla bir otomobil geçti. Başımı çevirip baktığım zaman camın arkasındaki çehreyi tanıdığımı zan nettim. Nitekim araba beş[,] on adım gittikten sonra durdu, kapısı açıldı[;] mektep arkadaşlarımdan Hamdi, başını uzat mış, beni çağırıyordu[.] Sokuldum. \"Nereye gidiyorsun?\" diye sordu."
  },
  {
    "id": 256,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Devletine iki büyük asker yetiştirmiş olur.\" demiş. Sâhi, âlicenap bir adammış... Sonra[,] elimize diri geçen esirlerden işittik[;] kalenin avlusuna silahlarını, gümüş takımlarını, en kıymetli eşyalarını yığarak yakmış[.] Ahırındaki muharebe atlarını, ağlayarak, kendi eliyle öldürmüş. Son hücumda bizim asker kalenin kapısını zorladı."
  },
  {
    "id": 257,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Elini sıkmıya cesaret edemeden iskemleye iliştim. Şimdi onun kar şısında hakikaten âmirim, hattâ velinimetimmiş gibi bir şaşkınlık duyuyor ve bu kadar alçalan benliğime bu mua meleyi cidden lâyık görüyordum. Dün akşam beni yolda otomobiline alan mektep arkadaşımla[,] on iki saatten biraz fazla bir zaman içinde, aramızda hekadar büyük bir mesa [-] fe hâsıl olmuştu[?] İnsanlar arasındaki münasebetleri tan zim eden âmiller nekadar gülünç, nekadar dıştan, nekadar boş ve bilhassa asıl insanlıkla nekadar az alâkası olan şey lerdi.. Dün akşamdan beri ne Hamdi, ne ben hakikatle de ğişmiş değildik; neysek gene oyduk; buna rağmen onun bana dair, benim ona dair öğrendiğimiz bazı şeyler, bazı küçük ve teferruata ait şeyler bizi ayrı istikametlere alıp götürmüşlerdi..."
  },
  {
    "id": 258,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Buyur oğlum, şöyle bir otur da... Muhsin Çelebi, çekinmeden, sıkılmadan, ezilip büzülmeden, gayet tabii bir hareketle kendine gösterilen şilteye oturdu. Sadrazam hâlâ ellerinde tuttuğu kıvrık kağıtlara bakarak içinden[:] [\"]Ne biçim adam[?] Acaba deli mi?\" diyordu. Halbuki..."
  },
  {
    "id": 259,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Etrafımızdakiler dönüp baktılar ve kompartimandaki ço cuk başını pencereden uzatarak hayretle beni süzdü. Kadının gözleri dikkatle üzerimde dolaşıyordu: \"Niçin bu kadar şaşırdınız?\" dedi, \"Neden sarardınız? Pek az tanıdığınızı söylemiştiniz[?]\" \"Ne de olsa,\" dedim, \"Hiç tahmin edilmiyen bir ölüm[!]\" \"Evet[...] Ama yeni bir şey değil... Belki on sene oluyor...\" \"On sene mi?"
  },
  {
    "id": 260,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Raif Efendi, benim için tekrap mera verici birma hiyet almıştı. Kafamda onun hakkımda, biraz evvel beliren ışığa rağmen, birçok tezatların bulunduğunu seziyordum. Elimde tuttuğum resmin ç ileri[;]ıdeki isabet, bunun bir heveskâr elinden çıkmadığ gösteriyordu[.] Bunu yapan kimsenin uzun seneler resinle Ujfaşmış olması lâzımdı. Burada sadece baktığını sahiden gören bir göz değil, gör düğünü bütün incelikleriyle tesbil etmesini bilen bir hü ner de vardı."
  },
  {
    "id": 261,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Maria bir aralık: \"Nereye gidiyoruz?\" diye sordu. \"Bilmem!\" \"Hiç merak etmiyor musunuz?\" \"Ben size tâbiim... Nereye isterseniz!\" Çiy taneleriyle örtülmüş beyaz bir çiçek gibi nemli ve soluk yüzünü bana çevirerek[:] \"Pek yumuşak başlısınız[...] Sizin hiçbir fikriniz, bir arzunuz yok mu?\" Derhal dün akşamki sözlerini öne sürdüm: \"Sizden her hangi bir şey istemekten beni menetmiştiniz!\" Cevap vermedi. Bir müddet bekledikten sonra devam ettim: \"Yoksa dün akşam ciddî değil miydiniz?"
  },
  {
    "id": 262,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "\"Bilmem!\" \"Hiç merak etmiyor musunuz?\" \"Ben size tâbiim... Nereye isterseniz!\" Çiy taneleriyle örtülmüş beyaz bir çiçek gibi nemli ve soluk yüzünü bana çevirerek: \"Pek yumuşak başlısınız... Sizin hiçbir fikriniz, bir arzunuz yok mu[?][\"] Derhal dün akşamki sözlerini öne sürdüm[:] \"Sizden her hangi bir şey istemekten beni menetmiştiniz!\" Cevap vermedi. Bir müddet bekledikten sonra devam ettim: \"Yoksa dün akşam ciddî değil miydiniz? Yahut bu gün fikrinizi değiştirdiniz mi?\" Şiddetle reddetti: \"Hayır!"
  },
  {
    "id": 263,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Bize geliyorlar!.. Dedi. Çavuşa döndü[:] [—] Haydi, gazileri uyandır. Kurban bayramını bugünden yapacağız. Koş."
  },
  {
    "id": 264,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Taştı. Huruç günü gördüğü harikayı herkese anlatmaya başladı. Hatta daha ileri gitti, çok iyi okuduğu [\"]Mevlid[-]i Şerîf[\"] lisanıyla o gün gördüğünü yazdı. Yüzlerce beyitlik bir destan düzdü. Ama o zaman eski şevki kayboluverdi."
  },
  {
    "id": 265,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "İki bin altın atlarla hademelere sarf edeceğim. Geriye kalan sekiz bin altına da bu kaftanı alacağım. Sadrazam bu hareketi makul bulmadı[:] [—] Geldikten sonra bu kaftan senin işine yaramaz. Yalnız bir debdebe aletidir. Mallarını elinden çıkaracaksın."
  },
  {
    "id": 266,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Hayatımın en dolu, en mânalı zannettiğim bir devresi birdenbire boşalmış, bütün mâna sını kaybetmişti. En tatlı emellerinin tahakkukunu gör düğü bir rüyadan acı hakikate uyanan bir insan gibi içim çekiliyordu. Ona hakikaten dargın değildim[;] asla kızmı yordum[.] Sadece müteessirdim. \"Bunun böyJe olmaması lâ zımdı\" diyordum."
  },
  {
    "id": 267,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "\"Yarın sabah bana uğra\", diyordu. \"Bakalım, bir şeyler düşünürüz. Sen zeki çocuksundur[,] bilirim[;] pek çalış kan değildin ama, bunun ehemmiyeti yok[.] Hayat ve zaru retler insana birçok şeyler öğretir... Unutma..."
  },
  {
    "id": 268,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Osmanlı toprağına geçtiği için özür diliyor, birbiri arkasına elçiler gönderiyordu. O vakit Trabzon valisi bulunan Şehzade Yavuz, babası gibi sabredememiş, Tebriz hududunu geçmiş; Bayburd'a, Erzincan'a kadar her tarafı talan etmiş, hatta Şah'ın kardeşi İbrahim'i esir almıştı. İsmail[']in elçisi şimdi bu tecavüzden de şikayet ediyor[;] Osmanlı toprağına son akınlarının, padişahın devletine karşı değil, sırf Alâüddevle aleyhine olduğunu tekrarlıyordu[.] İşte Dîvan'da bu kurnaz, bu zalim, gaddar türediye gönderilecek münasip bir elçi bulunamıyordu; çünkü kendini Osmanlı hakanıyla bir tutan, hatta bütün şarkta cihangirlik kuran bu serseri, karşısında devleti temsil edecek adama karşı şüphesiz birçok münasebetsizlikler edecek; münasebetsizliklerine mükâbele edeni ihtimal kazığa vuracak, derisini yüzecek, akla gelmedik kaba bir vahşetle öldürecekti. Sadrazamın sağındaki, deminden beri, bir mezar taşı gibi hareketsiz duran, kırmızı tuğlu kavuk yerinden oynadı."
  },
  {
    "id": 269,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Ne zaman?..\" Suallerimin hücumu karşısında şaşıran hizmetçi, bir adım geri çekildi ve: \"Bağırmayın, ev halkını uyandıracaksınız... İki gün evvel kaldırdılar; galiba Charite’ye götürdüler!\" dedi. [\"]Hastalığı[?]\" \"Bilmiyorum[!]\" Arkamdan hayretle bakan hizmetçi kıza teşekkür bile etmeden merdivenleri dörder dörder atladım. İlk rasgeldiğim polisten Charite dedikleri bu hastanenin nerede ol duğunu öğrendim. Ne maksatla olduğunu bilmeden oraya gittim."
  },
  {
    "id": 270,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Rahat istendikçe, gaile gaile üstüne çıkıyordu. Hele şark... Kan içinde[,] ateş, zulüm içinde kıvranıyordu[.] Yıkılan, sönen Akkoyunlu hanedanının enkazı üstünde Şah İsmail serseri bir saltanat kurmuştu. Geçtiği yerlerde dikili ağaç bırakmayan, babasıyla büyük babası Cüneyd'in intikamını aldığı için delice bir gurura kapılan bu kudurmuş Şah, akla gelmedik canavarlarla sağına, soluna saldırıyordu."
  },
  {
    "id": 271,
    "source": "Ömer Seyfettin - Forsa",
    "text": "Sevinçten, hayretten dizlerinin bağı çözüldü. Hemen çöktü. Karaya çıkan bölükler[,] ellerinde al bayrak[,] kalenin etrafına doğru ilerliyorlardı[.] Kırk senelik bir beklemenin son azmiyle davrandı. Birden kemikleri çatırdadı."
  },
  {
    "id": 272,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bunu bekliyormuş gibi hemen siyah kaplı defteri cebime koydum. \"Yarın sabah getirir, gözünüzün önünde yakarım!\" dedim. Hasta, biraz evvelki titizliğine hiç benzemiyen bir tavırla[:] \"Ne yaparsan yap[!]\" makamında omuzlarını silkti. Hayatının en mühim kısımlarını ihtiva ettiği muhak kak olan bu defterle bile artık alâkasını kesmiş bulunduğunu anladım. Ayrılmak için elini öptüm."
  },
  {
    "id": 273,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "\"Okuma!\" dedi ve başiyle odanın karşı tarafını işaret ederek mırıldandı: \"Onu şuraya at!...\" Gösterdiği tarafa baktım. Mika levhaların arkasında parlıyan kızıl gözleriyle demir sobayı gördüm. \"Sobaya mı[?]\" \"Evet[!]\" Bu anda merakım büsbütün arttı. Raif Efendinin def terini ellerimle yok etmek, benim için imkânsızdı: \"Ne münasebet, Raif Bey!\" dedim. \"Yazık değil mi?"
  },
  {
    "id": 274,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Odada başka kimse yoktu. Yanıbaşındaki komodinin üzerinde, ilâç şişelerinin arasında duran büyük bir cep saati odayı madenî bir sesle dolduruyordu. Hasta, çukura ka çan gözlerini açarak[:] [\"]Bugün biraz iyiyim[!]\" dedi. \"Elbette... Hep böyle devam edecek değil ya...\" O zaman, âdeta müteessir bir eda ile: \"Peki ama, bu daha nekadar devam edecek...\" diye sordu."
  },
  {
    "id": 275,
    "source": "Ömer Seyfettin - Kütük",
    "text": "\"Yerin kulağı var.\" derdi. Ağzından çıkan bir sır mutlaka işitilecekti. Kethüdâ gibi bu sessiz[,] bu mânasız beklemeden bütün askerler sıkılıyorlar, bir şey anlamıyorlardı[.] Kumandanın imdat, cephâne, top beklediği söyleniyordu. İhtiyar sipâhîler: \"Biz burasını imdat gelmeden alamazmıyız?"
  },
  {
    "id": 276,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Yandan vuran elektrik ışığı kirpiklerinin gölgesini burnunun üst tarafına düşü rüyordu. Alt dudağı hafif hafif ürperiyordu. Yüzü bu an da tablodakinden de[,] Arpie Madonnasmdan da güzeldi Yorganı tutan kolumla onu kendime doğru çektim[.] Vücudunun titrediğini hissettim. Kesik kesik nefes alarak: \"Tabii..."
  },
  {
    "id": 277,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Fakat ne yüzünü görmüş, ne ismini biliyor... Çocuk dört yaşma kadar hastanelerde ve bakımevlerinde kaldı, sonra büyükannesi yanma aldı. Biraz zayıf ve durgun bir kız[;] fakat pek sevimlidir[...] Siz öyle bulmuyor musunuz?\" Olduğum yere düşüverecekmişim gibi bir dermansız lık hissettim. Başım dönüyordu."
  },
  {
    "id": 278,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Dün akşam, yatakta Maria ile karşı karşıyayken anla dım ki, benimle münasebeti olmıyan bu vücudu, bu kafayı taşımak, bundan sonra bana daha güç gelecektir. Bunları bir yabancıyı besler gibi doyuracağım, oradan oraya sürükliyeceğim ve daima merhamet ve istihfafla seyredeceğim. Gene dün akşam anladım ki, hayatımdan o kadın çıktık[-], tan sonra, herşey hakikiliğini kaybetmiş[;] ben onunla bera ber, belki de daha evvel, ölmüşüm[.] Ev halkı bugün erkenden, hep beraber gezmeğe gittiler. Ben keyifsizliğimi bahane ederek evde kaldım."
  },
  {
    "id": 279,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Şaşırdı. Hacı Kasap çubuğu yanına bıraktı. Hizmetçisinin bu ağır bakışından kurtuluvermiş gibi dırlandı: [—] Kolunun diyetini benim verdiğimi unutuyorsun galiba, dedi, ben olmasam şimdi çolak kalacaktın[...] Koca Ali yine cevap vermedi. Acı acı gülümsedi."
  },
  {
    "id": 280,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bir memur vagon ka pısını örtüyordu. Maria Puder merdiven basamağına atla dı, sonra bana eğilerek, yavaş bir sesle, fakat tane tane: \"Şimdi ben gidiyorum. Fakat ne zaman çağırırsan ge lirim[...][\"] dedi. Evvelâ ne demek istediğini anlamadım. O da bir an durdu ve ilâve etti: \"Nereye çağırırsan gelirim!\" Bu sefer anlamıştım."
  },
  {
    "id": 281,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Mektebin önüne yaklaştı. Kaşları çatılmıştı. Hiddetle tekrar sordu[:] \"Ne yapıyordunuz[?]\" \"Şey[...] Efendim...\" Hoca Efendi kekeliyordu. \"Ne?\" \"Şart etmiştim.\" \"Ne demek?\" \"Hapşıran için...\" \"Ne hapşıranı?\" \"Eşek hapşırdı.\" \"Eşek mi hapşırdı?\" \"!"
  },
  {
    "id": 282,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "İnsan, her mevcudun fevkinde idi. Kuyruğunu sallaya sallaya efendisinin pabuçlarını yalayan köpeğe tabasbus pek yakışırdı; ama, insana... Muhsin Çelebi[,] her türlü zilleti hazmederek ikbal tepelerine iki büklüm tırmanan maskara harislerden, izzetinefissiz kölelerden, zâhifeler gibi yerlerde sürünen mülevves esirlerden nefret ederdi[.] Hatta bunları görmemek için merdümgiriz olmuştu. Yalnız muharebe zamanları Guraba Bölüklerine kumandanlık için meydana çıkardı."
  },
  {
    "id": 283,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Deli değilse... Bu ne küstahlıktı. Bu derece küstahlık, [\"]nizamı âleme\" muhalif değil miydi[?] Gözlerini daha beter süzdü. İçinden, \"Şunun başını vurdursam...\" dedi."
  },
  {
    "id": 284,
    "source": "Ömer Seyfettin - Diyet",
    "text": "İşte, işte... !.. Koca Ali gayr[-]i ihtiyarî[,] dizdarın baktığı tarafa gözlerini çevirdi[.] Yeni yüzülmüş bir deri gördü. Şaşırdı."
  },
  {
    "id": 285,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Galiba salon boş da onun için... Zavallılar çalgıları nın gürültüsü ile hiç olmazsa patronu neşelendirmek istiyorlar... Ah, siz böyle yerlerin patronlarının ne demek ol duğunu bir bilseniz[!]\" \"Çok mu kabadırlar[?]\" \"Hem nasıl[!] İşte erkekleri yakından tanımak için bu da bir vesiledir. Meselâ bizim Atlantik’in sahibi gayet na zik bir adamdır."
  },
  {
    "id": 286,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Bütün zâbitleri, çavuşları çağırttı. Hepsi hücum var sanıyordu. At dîvanı yapar gibi, bir ayağı yerde, bir ayağı özengide[:] [—] Ağalar, dedi, bugün kaleyi alacağız[.] Ben iki saate kadar geleceğim. Şimdi hepiniz hazır olunuz."
  },
  {
    "id": 287,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Kol geziyorlardı. Ne cevap vereceğini şaşırdı. Geceleri afyon yutan bu serseriler[,] ehl[-]i ırzlar nazarında hırsızlardan[,] uğursuzlardan daha korkunçtu. Kendilerinden başka dışarıda bir gezeni yakaladılar mı, dayaktan canını çıkarırlardı. Ama, ona fena muamele etmediler."
  },
  {
    "id": 288,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Hiç durmadan dırdır söylenirdi. Hasisliğinden şimdiye kadar bir hizmetçi, bir çırak tutamamıştı. Koca Ali[']yi eline geçirince hemen dükkânının köşesinde bir set yerleştirdi[.] Üstüne bir şilte koydu. Geçti, oraya oturdu."
  },
  {
    "id": 289,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Dün gece geldik. Bu akşam da gidiyoruz... Kadının yanında[,] sekiz[,] dokuz yaşlarında sarı benizli, sessiz bir kız çocuğu bulunduğunu ancak şimdi görüyordum[.] Güldüm: \"Kızınız mı?\" dedim! \"Hayır,\" dedi, \"Akrabam!..."
  },
  {
    "id": 290,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Demir parmaklıklı büyük bir bahçenin önüne gelmiş tik. Adımlarını yavaşlatarak: \"Buraya girelim mi?\" dedi. \"Neresi burası[?]\" \"Nebatat bahçesi[!]\" \"Siz bilirsiniz!\" \"Öyleyse girelim[...] Ben her zaman buraya gelirim. Hele böyle yağmurlu havalarda.\" İçerde kimseler yoktu."
  },
  {
    "id": 291,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Biliyorum: Benim kafamın kesilmesini yazıyor.. ... İhtiyar bey[,] bütün memlekette kahramanlığı dillere destan olan bu al yanaklı[,] gür bıyıklı, dağ parçası, heybetli, cesur, güzel bahadıra ıslak gözleriyle uzun uzun baktı[.] Acaba niçin gazaba uğramıştı? Böyle bir arslanı, celladın eline vermek ne büyük bir insafsızlıktı."
  },
  {
    "id": 292,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Yüzüme baktı; cevap vermedi. Hattâ çehresinin ifadesi sualimi hiç duymamış intibaını bırakıyordu. Fakat birkaç dakika sonra[:] [\"]Hayır, ufak değiller[!]\" dedi. \"İkisi de işe gidiyorlar. Onlar da bizim gibi memur."
  },
  {
    "id": 293,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Ba kalım hoşunuza yıder mi... Haydi şimdilik iyi geceler.. Bir dakika: Hâlâ isminizi bilmiyorum[?]..\" \"Raif!\" \"Raif mi[?].. Bu kadarcık mi?\" \"Hatip zade Raif!\" \"A, imkânı yok... Ne aklımda tutabilirim, ne de söyliyebilirim!"
  },
  {
    "id": 294,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Mücahitlere karıştı. Cenk akşama kadar sürdü. Er meydanının kanlı yüzüne \"gece siyah saçlarını\" dağıtırken münadi nin: [—] Gaziler hisara![...] Sadâsı duyuldu. Dönen gaziler içinde kılıcından kanlar damlayan Kuru Kadı, birkaç sipahi ile dışarıda kaldı."
  },
  {
    "id": 295,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Mektepten dönen büyük kız içeri girdi, babasının yanak larını öptü: \"Nasıl oldun babacığım?\" Sonra bana dönerek elimi sıktı: \"Efendim, hep böyle oluyor... Arasıra akima esip: ben biraz kahveye gideceğim! diyor, sonra da, kendini orada mı üşütüyor, yolda mı üşüyor nedir, hastalanıveriyor[.][.] Kaç defadır böyle oldu... Kahvede ne var bilmem!\" Paltosunu sıyırıp bir iskemlenin üzerine attıktan sonra, hemen dışarı çıktı."
  },
  {
    "id": 296,
    "source": "Ömer Seyfettin - Yüksek Ökçeler",
    "text": "Konuşurken gözlerini kaldırıp insanın yüzüne bile bakamazdı. Hatice Hanım, köşkten hiçbir yere çıkmadığı için işi gücü adamlarını teftişti. Habire odaları dolaşır[,] tavan arasına çıkar[,] mutfağa inerdi[.] Derdi ki: — Benim gibi olun! Ben kimse ile görüşüyor muyum?"
  },
  {
    "id": 297,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Önünde açılan ikbal yollarından daha hiçbirine sapmamıştı. Bu altın kaldırımlı, mîna çiçekli, cenneti andıran nuranî yolların nihayetinde daima \"kirli bir etek mihrabı\" bulunduğunu bilirdi. İnsanlık onun nazarında çok yüksek[,] çok büyüktü[.] İnsan, arzın üzerinde Allah'ın bir halefiydi. Allah, insana kendi ahlakını vermek istemişti."
  },
  {
    "id": 298,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Herşeyi anlamıştım. Bu sesi nereden tanıdığımı hatırlıyordum. Kadın berrak bir kahkaha attı[:] [\"]Çok acayip bir çocuksunuz!\" dedi. Bu kahkahayı da hatırladım. Sergide o resmin kar şısında dalgın dalgın otururken yanıma gelip bu resimde ne bulduğumu soran, \"Anneme benziyor!\" dediğim za man!"
  },
  {
    "id": 299,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "\"Hayır,\" dedi, \"senenin diğer günlerinden ne farkı var sanki? Tabiat onu her hangi bir şekilde ayırmış mı? Öm rümüzden bir sene geçtiğini göstermesi bile o kadar mü him değil[;] çünkü ömrümüzü senelere ayırmak da insanla rın uydurması[...] İnsan ömrü doğumdan ölüme kadar uza nan bir tek yoldan ibarettir ve bunun üzerinde yapılan her türlü taksimat sunîdir... Ama biz felsefeyi bırakalım da, canın isterse, yılbaşı gecesi beraber bir yere gidelim."
  },
  {
    "id": 300,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "\"Hayırdır inşallah...\" dedi. Canı o kadar sıkılıyordu ki... Elleri arkasında[,] başı önüne eğik, bastığı siyah kaplama taşlarına görmez bir dikkatle bakarak yavaş yavaş yürüdü[.] Derin bir karanlık kuyusunu andıran merdivenin dar basamaklarında kayboldu. 🙝🙟 ..."
  },
  {
    "id": 301,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Halbuki mümkün olanla kanaat etseler, hayallerindekini hakikat zannetmekten vazgeçseler bu böyle olmaz. Herkes tabii olanı kabul eder, ortada ne hayal sukutu, ne inkisar kalır... Bu halimizle hepimiz acınmıya lâyıkız[;] ama kendi kendimize acımalıyız[.] Başkasına merhamet etmek, ondan daha kuvvetli olduğunu zannetmektir ki, ne kendi mizi bu kadar büyük, ne de başkalarını bizden daha zavallı görmiye hakkımız yoktur... Artık gidelim mi?\" îkimiz de doğrulduk."
  },
  {
    "id": 302,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Yalnız muharebe zamanları Guraba Bölüklerine kumandanlık için meydana çıkardı. Huzurda serbest, tabii oturuşu sadrazamı çok şaşırttı. Ama, kızdırmadı[:] [—] Tebriz[']e bir elçi göndermek istiyoruz. Tarafımızdan sen gider misin, oğlum? Ben mi?"
  },
  {
    "id": 303,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Biraz sonra düşman hisarın önünde, harp nizamına girmiş bulunuyordu. Toplar başsız, gür ejderha yavruları gibi siyah ağızlarını bedenlere çevirmişti. Türkçe bağırdılar[:] [—] Size teklifimiz var. Elçimizi içeri alır mısınız? Kuru Kadı: — Alırız."
  },
  {
    "id": 304,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Aksi gibi, benim hiç durmadan esneyeceğim geliyor, hapşırmak istiyordum. Birkaç defa bunun için dayak yedim. Hoca Efendi dayağı bitirince bütün kuvvetiyle rahlesine vuruyor[:] [\"]Kim hapşırırsa, şart olsun ki öldürünceye kadar döveceğim[!] diye haykırıyordu. \"Şart olsun, kim hapşırırsa...\" \"Şart olsun!\" Bu nasıl yemindi?"
  },
  {
    "id": 305,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Öyle kaldılar. Kollarını çaprazlayarak yere bakan kale kumandanı titreyerek mırıldandı. Arslan Bey, tercümana baktı: [—] Ne diyor[?] \"Bu mertlik değil...\" diyor. Ona sor ki: \"Henüz bir kere patlamayan bir toptan korkarak hemen teslim oluvermek mi mertlik?\" Tercüman sordu."
  },
  {
    "id": 306,
    "source": "Ömer Seyfettin - Forsa",
    "text": "Martıların: — Geliyorlar, geliyorlar, seni kurtarmaya geliyorlar! Gibi işittiği tatlı seslerini dinleye dinleye daldı. Duvar taşlarının arasından çıkan kertenkeleler üzerinde geziniyorlar[,] çuvaldan esvabının içine kaçıyorlar, gür beyaz sakalının üstünde oynaşıyorlardı[.] İhtiyar esir rüyasında, ağır bir Türk donanmasının limana girdiğini görüyordu. Kasabaya giden yola birkaç bölük asker çıkarmışlardı."
  },
  {
    "id": 307,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Çok korktuk. Eniştem doktor getirdi, şimdi yanında... iğne yapıyor[...][\"] Ve hemen hastanın odasına daldı[.] İçeri girmedim. Holdeki iskemlelerden birine oturarak kâğıda sarih paketi önüme koydum."
  },
  {
    "id": 308,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Kılıç kabzasının nasırlattığı elinde, kalem yabancı durmuyordu. Halkın ağzında kendisine dair birçok efsaneler dolaşırdı. Babasının bir emektarı onu büyütmüştü[;] haksız yere kafası kesilmiş bir beyin oğlu idi[.] Yağmur durmadan yağıyordu. Konak, çamurlu ve bozuk bir yolun sağında kurulmuştu."
  },
  {
    "id": 309,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Bu hakareti aynıyla o habise iade etsin... Devletini seversen sen bu fedakarlığı kabul edeceksin! Muhsin Çelebi hiç düşünmedi[:] [—] Ettim efendim[,] fakat bir şartla, dedi. Ne gibi? Mademki bu bir fedakarlıktır, fedakarlık ücretle olmaz."
  },
  {
    "id": 310,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Silahları alınan düşman ikişer ikişer bağlanıyor, takım takım ordugâhın arkasına götürülüyordu. Kalenin içindeki kıymetli şeylerden bir dağ ortada kabarıyor; al yeşil bayraklarla kalenin tepesine dolan askerler bağırışıyorlar, aralarındaki dervişler, bedenlerden sarkarak ezan okuyorlar, tekbir çekiyorlardı. Teslim olan kumandanla erkânına Arslan Bey[:] [—] Korkmayınız[.] Hayatınız bağışlanmıştır. Biz Vireyi bozmayız."
  },
  {
    "id": 311,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Ve ben bu anda başka hiç bir şey istemiyordum. Dünyanın en zengin adamıydım. Gözlerimle onu takibederek mırıldanıyordum[:] [\"]Sana teşekkür ederim[...] Teşekkür ederim!..\" Ve sergideki resmi seyrederken düşündükleri min doğru çıktığını görmekle memnun oluyordum. O ay nen benim tasavvur ettiğim gibi idi..."
  },
  {
    "id": 312,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Devletine iki büyük asker yetiştirmiş olur.\" demiş. Sâhi, âlicenap bir adammış... Sonra[,] elimize diri geçen esirlerden işittik[;] kalenin avlusuna silahlarını[,] gümüş takımlarını, en kıymetli eşyalarını yığarak yakmış. Ahırındaki muharebe atlarını, ağlayarak, kendi eliyle öldürmüş. Son hücumda bizim asker kalenin kapısını zorladı."
  },
  {
    "id": 313,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Bu kısa yol, üç gündür bitip tükenemiyordu. Konak yerine, yalnız sadrâzamın çadırı kurulabilmişti. Padişah gerdûnesinin penceresinden kendi otağını göremeyince, etrafındaki ıslanmış, allı yeşilli, sırmalı esvablarıyla gözleri kamaştıran iri ve çevik muhafızlarına: [—] Daha durmayacakmıyız[?] Dedi. ..."
  },
  {
    "id": 314,
    "source": "Ömer Seyfettin - Forsa",
    "text": "Bir çığlıktır koptu. \"Bey'e haber verin!... Bey[']e haber verin[!]\" diye bağrışıyorlardı. İhtiyarın kollarına girdiler. Kuş gibi deniz kenarına uçurdular."
  },
  {
    "id": 315,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bir hafta içinde hazırlandım ve Bulgaristan üzerin den trenle Berline hareket ettim. Hiç lisan bilmiyordum. Dört günlük yolculuk esnasında bir mükâleme kitabın dan ezberlediğim beş on kelime sayesinde[,] adresini daha İstanbulda iken defterime yazdığım bir pansiyona gittim[.] İlk haftalar, kendimi idare edecek kadar lisan öğ renmek ve hayran hayran etrafıma bakınarak şehri do laşmakla geçti. İlk günlerin şaşkınlığı çok sürmedi."
  },
  {
    "id": 316,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Hemen kutuya baktı. İçinde enfiye yok... Hiddetlendi: [\"]Kim aldıysa söylesin, şart olsun gebertirim.\" Hep bir ağızdan, ahenkle, \"Şart olsun, haberimiz yok[!]\" dedik. \"Kim aldı? Söyleyiniz.\" \"Bilmiyoruz, bilmiyoruz!\" \"Pekâlâ, ben size gösteririm."
  },
  {
    "id": 317,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Buna rağmen hayalimde onu daima takibedeceğim. Kafamda ona bir hayat seyri icadedip yanında yürüyece ğim. Onun nasıl büyüdüğünü, nasıl mektebe gittiğini, na[-] [']sıl güldüğünü ve nasıl düşündüğünü tasavvur ederek bun dan sonraki senelerimin yalnızlığını doldurmağa çalışa cağım. Dışarda gürültüler oluyor. Herhalde bizimkiler döndüler."
  },
  {
    "id": 318,
    "source": "Ömer Seyfettin - Forsa",
    "text": "Gözlerinden yaşlar akıyordu. Haline bakanların hepsi müteessir olmuştu. Biraz heyecanı sükun bulunca ona sordular: [—] Kaç yıldır tutsaksın[?] Kırk! Nerelisin?"
  },
  {
    "id": 319,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Hemen ayağa kalktı. Kucakladı. Alnından öptü: [—] Safa geldin yiğidim, hayır haberler getirdin[...] Tosun Bey gülerek: — Bir ferman-ı hümâyun getirdim. Dedi."
  },
  {
    "id": 320,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Ertesi günü akşam üzeri şirketten ayrılmadan evvel Raif Efendinin masasına gittim. Sağ tarafta üstüste üç göz vardı. Evvelâ alttakileri açtım[;] biri bomboştu[,] öte kinde birtakım kâğıtlar ve tercüme müsveddeleri vardı[.] Üst göze anahtarı sokarken ürperdim: Raif Efendinin senelerdenberi oturduğu iskemlede olduğumu ve onun her gün birkaç defa yaptığı hareketi tekrar ettiğimi şimdi farketmiştim. Acele ile gözü çektim."
  },
  {
    "id": 321,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Arslan Bey, tercümana baktı: — Ne diyor? \"Bu mertlik değil...\" diyor. Ona sor ki: [\"]Henüz bir kere patlamayan bir toptan korkarak hemen teslim oluvermek mi mertlik[?]\" Tercüman sordu. ... ..."
  },
  {
    "id": 322,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bağdatta hurma üzerine iş yapıyor!\" \"Kamerun’da da hurma ticareti mi yapıyordu?\" Kadın, \"Pek münasebetsizsin!\" der gibi yüzüme baktı: \"Bilmiyorum, kendisine mektup yazın ve sorun! Ka dınları ticaret işlerine karıştırmıyor!\" \"Şimdi nereye gidiyorsunuz!\" \"Berline... Hem memleketi ziyaret[;] hem de[...]\" yanın da oturan soluk benizli çocuğu gösterdi: \"Hem de bu çocuk için[...] Biraz zayıf diye kışı bizim yanımızda geçirdi. Şimdi tekrar alıp götürüyorum.\" *Dcmek sık sık Berline gidip geliyorsunuz!* ♦ Senede iki defa!\" ♦ Herr Döppke’nin işleri iyi gidiyor galiba!\" Güldü ve kırıttı."
  },
  {
    "id": 323,
    "source": "Ömer Seyfettin - Kütük",
    "text": "O biliyordu; düşmanların hepsi Zondi gibi, Plâs Batanyus gibi, Lozonci gibi kahraman değildi. İçlerinde tavşan kadar korkakları da vardı. Mesela[;] Seçeni kalesinin muhafızları, daha Ali Paşa yaklaşırken, toplarını, tüfeklerini, cephânelerini, erzaklarını, mallarını, hatta ihtiyarlarını, çocuklarını bırakıp bir kurşun atmadan kaçmışlardı[.] Birkaç güne kadar burası da alınınca Holloko, Boyak, Şağ, keparmat kaleleri kalıyordu. Ama Allah kerimdi."
  },
  {
    "id": 324,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Sermet Bey bir kahkaha attı. Kızlar, çocuklar, hizmetçiler alıklaştılar. Büyük Hanım, — Niçin ümmet[-]i Muhammed[']i korkutup deli ediyorsun a efendi?... Dedi. Sermet Bey: — Onun sebebini ben bilirim!"
  },
  {
    "id": 325,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Arslan Bey, tercümana baktı: — Ne diyor? \"Bu mertlik değil...\" diyor. Ona sor ki: [\"]Henüz bir kere patlamayan bir toptan korkarak hemen teslim oluvermek mi mertlik[?][\"] Tercüman sordu. ... ..."
  },
  {
    "id": 326,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Yatsı namazı için abdest suyu taşıyan angaryacılar, meş'alelerle geçmeye başladılar. Arslan Bey, Şalgo'nun, ıslanmış, hasta, ateş böcekleri gibi sönük sönük parlayan ziyâlarına bakıyor, kethüdânın sözlerini işitmeyerek, kendi planını düşünüyordu. O biliyordu[;] düşmanların hepsi Zondi gibi[,] Plâs Batanyus gibi[,] Lozonci gibi kahraman değildi. İçlerinde tavşan kadar korkakları da vardı. Mesela; Seçeni kalesinin muhafızları, daha Ali Paşa yaklaşırken, toplarını, tüfeklerini, cephânelerini, erzaklarını, mallarını, hatta ihtiyarlarını, çocuklarını bırakıp bir kurşun atmadan kaçmışlardı."
  },
  {
    "id": 327,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Çekici bırakan eliyle terini sildi. Kapıya döndü. Karşıki mescitte hazin hazin akşam ezanı okunuyor[;] bacasının tepesindeki yuvada leylekler nihayetsiz bir takırtı koparıyorlardı[.] İkindi abdesti daha duruyordu. Yalnız ellerini yıkadı."
  },
  {
    "id": 328,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bu soğukta, sonra kız... Hem git desem bile beni dinler mi?\" Raif Efendi düşündü, düşündü. Sonra, sanki nihayet bir çare bulmuş gibi başını sallıyarak[:] [\"]Gider, gider[!]\" dedi ve önüne baktı. Kadın çıktıktan sonra bana dönerek: \"Bizim evde de ekmek almak bir mesele... Bir hasta landık mı gönderecek adam bulamazlar!\" dedi."
  },
  {
    "id": 329,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "On iki yaşında filân... Aman Yarabbi, seneler ne çabuk geçiyor!..\" \"Evet... Fakat siz hiç değişmemişsiniz[!]\" \"Siz de[!]\" Biraz evvel daha samimî olduğunu hatırladım vese simi çıkarmadım. Aşağıya doğru yürüyorduk. Maria Puder hakkında so racağım şeylere nasıl başlıyacağımı bir türlü bilmiyor, hep lüzumsuz, beni alâkadar etmiyen mevzularda dolaşı yordum."
  },
  {
    "id": 330,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "İşin asıl garip tarafı, ikimiz de bu deği şikliği olduğu gibi kabul ediyor've tabiî buluyorduk. Be nim kızgınlığım Hamdiye değil, kendime de değil, sadece burada bulunuşuma idi. Odanın tenhalaştığı bir anda arkadaşım başını kal dırarak[:] [\"]Sana bir iş buldum[!]\" dedi. Sonra, yüzüme o cesur ve mânalı gözlerini dikerek ilâve etti: \"Yani bir iş icadettim. Yorucu bir şey değil."
  },
  {
    "id": 331,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Küçük kız birkaç dakika sonr^ı kahve getirdi. Yüzün de nedense hep o beni küçük görmek, benimle alay etmek istiyen şımarık ifade vardı. Fincanı elimden alırken[:] [\"]Babam rahatsız efendim, yalağından çıkamıyor, siz içeri buyunrun[!]\" dedi. Bunu söylemken de benim bu kibar muameleye hiç lâyık olmadığımı kaş ve gözleriyle anlatmak ister gibiydi. Raif efendinin yattığı odaya' girince büsbütün şaşır dım."
  },
  {
    "id": 332,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Ne oldun, haydi gazaya... Düşman kaçıyor. Deli Hüsrev[']in kalkması Kuru Kadı[']ya baştan can verdi. \"Allah, Allah\" diyerek ileriye atıldı. Mücahitlere karıştı."
  },
  {
    "id": 333,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Arkasından üç tuğlu vezirler de geliyordu. Kavuğundan sızan sular solgun yüzüne, sarı sakalına akıyordu. Som sırma perdenin yanına gelince[:] [—] Padişahım, merhamet ediniz, kulunuzun çadırına teşrif buyurunuz, dedi. Bizim otağımız niçin yapılmadı? Otağcılar fırtınadan yolu kaybetmişler."
  },
  {
    "id": 334,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Kuş gibi uçar, yıldırım gibi seğirtir, arslan gibi atılır, kaplan gibi parçalardı. Sadrazam en tehlikeli işlere onu saldırır, büyük ve harikulâde muvaffakiyetlerden sonra padişahın huzuruna sokar, ona iltifat ettirirdi. Kendilerinden başka yiğit olduğuna asla ihtimal vermeyen mağrur yeniçeriler bile önlerinden o geçerken kendilerini tutamazlar, galeyana gelirler[:] [—] Yaşa Tosun Bey[!] Seni hangi ana doğurdu! Diye nara atarlardı."
  },
  {
    "id": 335,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Dünyada olmasa bile ahirette mükafatını görürsün...\" Maziyi hatırlamaya devam edemedi. Ansızın bozulan bir saat gibi sanki dimağı durdu. Yalnız kulağından Salih Ağa[']nın sesi çıkmıyordu: [—] Padişahın emrinden dışarı çıkma[...] Halbuki... Halbuki..."
  },
  {
    "id": 336,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Asıl noktanın mütemadiyen etrafın da dolaştığımı bildiğim halde bu noktaya gidecek yollan bilmiyor, arıyamıyordum. Eski mahcupluğum ve sıkılgan lığım kalmamıştı. Kendi içime kapanmıyor[,] hattâ belki de biraz müfrit şekilde ruhumu meydana veriyordum[;] ama hep bu ana noktaya dokunmamak şar tiyle[...] Bütün bunları o zamanlar bu kadar vazıh ve derin düşünüp düşünmediğimi bilmiyorum. Bugün, araya on iki seneden fazla bir zaman girdikten sonra, o günkü halimi gözümün önüne getiriyor ve bu neticeleri çıkarıyorum."
  },
  {
    "id": 337,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Kestikten sonra affımı istirham et. Padişahım, kendi emri yerine geldikten sonra, ben kulunu affetsin. İhtiyar bey daha ziyâde ağlıyor, hıçkırıyordu[:] [—] Ben senin gibi bir yiğide kıyamam[.] Ben seni kesemem. Elim dilim buna varmaz."
  },
  {
    "id": 338,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Ben asıl Praglıyım, Çek Alınan larından... İlk kocam da Holandalı idi... Neden sordunuz[?]\" \"Ben oradayken, sizin akrabanız olduğunu söyliyen bir kadın görmüştüm de[...]\" \"Nerede?\" \"Berlinde[...] Bir resim sergisinde tesadüf etmiştim... Galiba ressamdı...\" Kadın birdenbire alâkalandı: \"Peki..."
  },
  {
    "id": 339,
    "source": "Ömer Seyfettin - Falaka",
    "text": "\"Yalan yere bu yemini eden çarpılır mı?\" \"Hayır.\" \"Ya ne olur?\" \"Daha fena.\" \"Nasıl?\" \"Karısı boş düşer.\" İyice anlamadım. Ama bu yeminin dehşetini mektepte çocuklara etrafıyla söyledim. Artık hep, evli adamlar gibi, yalan[-]doğru, biz de [\"]Şart olsun[!]\" yeminine başladık. \"Vallahi, billahi!\" unutuldu. Hoca Efendi de her sabah rahlesine çökerken hiç unutmuyor: \"Kim hapşırırsa, şart olsun, öldürürüm!\" diye tekrarlıyordu."
  },
  {
    "id": 340,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Muhsin Çelebi döndü. Önüne baktı. Sonra başını kaldırdı[:] [—] Hayır, dedi, hazineden bir pul almam[.] İcap eden muhteşem takımlı atları, süslü hademeleri ben kendi paramla düzeceğim. Hatta..."
  },
  {
    "id": 341,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Paranız var mı?\" Dilim tutulmuş gibi kaldım. Gözlerimi çabuk çabuk kırpıştırıyor, dudaklarımı ısırıyordum. Maria bunu farkedince kaşlarını çattı, yüzü her zamankinden daha so luk, kireç gibi bir hal alarak[:] [\"]Yok, Raif, bunu istemem. Katiyyen... En tahammül edemediğim şey merhamettir..."
  },
  {
    "id": 342,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bunu tesbit edince memnun oldum: Onun hiç sarsılmadan gittiğini görmek, beni her halde pek üzecekti. Mütemadiyen elimi tutup bırakıyor: \"Ne mânâsız şey?... Ne diye gidiyorsun sanki[?][\"] diye söyleniyordu[.] \"Asıl sen gidiyorsun, ben daha buradayım!\" dedim. Bu sözümü farketmemiş göründü."
  },
  {
    "id": 343,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Din, millet, padişah aşkını kalbinde duyanlardandı. Devletinin büyüklüğünü, kudsiliğini anlardı. Yegane mefkûre si: [\"]Allah[']tan başka kimseye secde etmemek, kula kul olmamak\"tı[...] İlmi, kemali herkesçe malumdu. İbn-i Kemal ondan bahsederken \"Beni okutur!\" derdi."
  },
  {
    "id": 344,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Geçen yıl Zülkadriye hâkimi Alâüddevle'den nikâhla kızını istemişti. Alâüddevle kızını vermedi. İsmail[,] uğradığı bu red hakaretinden hiddetlendi[;] intikam için padişahın toprağından geçti. Müdafaasız Zülkadriye arazisine girdi, Diyarbekir, Harput kalelerini aldı. Sarp bir dağa kaçan Alâüddevle'nin oğlu ile iki torunu eline esir düştü."
  },
  {
    "id": 345,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "\"Sen bilirsin!\" Yemekten sonra, mümkün olduğu kadar can sıkıcı şeyler okuyarak onu uyutmağı âdet etmiştim. Bir ante reddüt ettim: \"İstersen yılbaşından sonra geçen beş günde neler yaptığımı anlatayım, daha çabuk uyursun!\" dedim. Bu nükteme gülmedi[;] cevap da vermedi[;] yalnız \"Söyle\" der gibi başını salladı. Ağır ağır, hafızamı toplamak için arasıra duraklıyarak, başladım. Evden nasıl çıktığımı, nerelere gittiğimi, Wansee’de gördüklerimi ve düşündük lerimi."
  },
  {
    "id": 346,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bir müddet sustuk. İkimiz de belli etmeden birbirimizi tet kik etmek istiyor ve bu sırada gözlerimiz karşılaşıverince, \"Gördüklerimden memnunum.\" demek istiyen tasvipkâr bir gülümseme ile bakışmakta devam ediyorduk. Sükûtu ilk bozan ben oldum[:] \"Demek bir anneniz var[?].\" \"Sizin gibi[!]\" Mânâsız bir şey sormuş gibi sıkıldım. O bunu farkederek sözü değiştirdi: \"Sizi burada ilk defa görüyorum!\" \"Evet. Böyle yerlere hiç gelmemiştim..."
  },
  {
    "id": 347,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "O bunu farkederek sözü değiştirdi: \"Sizi burada ilk defa görüyorum!\" \"Evet. Böyle yerlere hiç gelmemiştim... Yalnız bu ak şam[...]\" \"Bu akşam[?]\" / Bütün cesaretimi toplayarak: \"Sizin arkanızdan geldim[!]\" dedim. Biraz şaşırdı: \"Kapıya kadar peşimden gelen siz miydiniz?\" \"Evet. Demek farkına vardınız!\" \"Tabii..."
  },
  {
    "id": 348,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Bacasının üstündeki leylek uyumamış, kefenli bir hayal gibi ayakta duruyordu. Kapısı aralıktı. Çıkarken sıkı sıkıya kapadığını hatırladı: [—] Tuhaf, rüzgâr açmış olacak[!][...] Dedi. Dükkanında örsü ile çekicinden başka kıymetli bir şeyi yoktu."
  },
  {
    "id": 349,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Abdurrahman Çelebi'cik düzensiz aralarla hapşırıyor, burnunu yere sürmek istiyordu. Falaka, değnek, elden ele Hoca Efendi'nin önüne kadar geldi. Çocuklar gülmekten katılıyorlar[,] [\"]Karınız boş düşer[!] Karınız boş düşer!..\" diye bir ağızdan tekrarlıyorlardı. Çocuklara mı, eşeğe mi, neye kızdığını bilmeyen Hoca Efendi, gayr-i ihtiyâri, \"Yıkınız!\" emrini verdi."
  },
  {
    "id": 350,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Böyle göğsü ileride kabarık, başı yukarı kalkık bir adamı ömründe ilk defa görüyordu. Kubbe vezirleri bile huzurunda iki büklüm dururlardı. Muhsin Çelebi, gayet tabii bir sesle sordu: [—] Beni istetmişsiniz, ne söyleyeceksiniz efendim[?] Şey... Buyrunuz efendim."
  },
  {
    "id": 351,
    "source": "Ömer Seyfettin - Yüksek Ökçeler",
    "text": "Hasbihal uzadıkça, kendi göremediği başka rezaletlerin mufassal hikâyelerini işitiyordu. Dayanamadı. Gözlerini açtı[:] [—] Sizi alçak, hırsız, namussuzlar[!] Defolun şimdi evimden! Diye haykırdı."
  },
  {
    "id": 352,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Gayet kuvvetliydi. Hayal, mukâbele olmadığını anlayınca çırpınmaktan vazgeçti. Sermet Bey[:] [—] Ben sana elâlemle alay etmesini gösteririm[!] Diye zavallı hayali sırtladı. Köşke doğru sürükledi."
  },
  {
    "id": 353,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bütün bu yükleri çeken Raif Efendi olduğu halde, ev de onun yokluğu ile varlığı müsavi gibiydi. En küçüğünden en büyüğüne kadar herkes onu farketmez görünüyordu. Kendisiyle gündelik ihtiyaçlardan ve para mesele lerinden başka bir şey konuşmazlardı[;] çok kere bunları da Mihriye Hanım vasıtasiyle halletmeği tercih ediyor lardı[.] Sanki cansız bir makine sabahleyin birtakım sipa rişlerle dışarı bırakılıyor, akşam üzeri kolları dolu bir hal de dönüyordu. Beş sene evvel, Ferhunde Hanımla evlen mek istediği sıralarda, Raif Beyin peşini bırakmıyan, ona hoş görünmek için türlü türlü roller yapan, nişandan sonra eve her gelişinde müstakbel bacanağına da gönül alacak bir şey getirmeyi unutmıyan Nurettin Bey bile, şimdi bu kadar mânâsız bir insanla ayni evde oturmaktan sıkhr gi biydi."
  },
  {
    "id": 354,
    "source": "Ömer Seyfettin - Forsa",
    "text": "Altı ay gündüz, altı ay gece olurdu! Karısını, işte bu, senesi bir büyük günle bir büyük geceden ibaret olan başka cihandan almıştı. Gemisi altın[,] gümüş, inci, elmas, esir dolu vatana dönerken, kenarsız denizin ortasında evlenmiş, oğlu Turgut, Çanakkale[']yi geçerken doğmuştu. Şimdi kırkbeş yaşında olmalıydı. Acaba yaşıyor muydu?"
  },
  {
    "id": 355,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Kethüdâ gibi bu sessiz, bu mânasız beklemeden bütün askerler sıkılıyorlar, bir şey anlamıyorlardı. Kumandanın imdat, cephâne, top beklediği söyleniyordu. İhtiyar sipâhîler[:] [\"]Biz burasını imdat gelmeden alamazmıyız[?] İki top yetmez mi? Ne duruyoruz?\" diye çadırlarında dedikodu yapıyorlardı."
  },
  {
    "id": 356,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Siz de teslim olun. Nafile yere kanınızı döktürmeyin... Kale ile beraber bütün ordunun işittiği bu teklifi[,] tercüman[,] avazı çıktığı kadar bağırarak tekrarladı[.] Derin bir sükut... Arslan Bey'in atı duramıyor, şaha kalkıyor, sağa sola tepiniyor, kethüdâ dizgininden tutmaya çalışıyordu."
  },
  {
    "id": 357,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Hepsini saklandıkları kovuklarda tuttu. Konak boylarında astırdı. Bu takiplerde Dergah[-]ı âlî mensuplarından ve padişahın gözdelerinden pek genç bir kahraman olan Tosun Bey yine kendini gösterdi[.] Tek başına dağları, ormanları, mağaraları dolaştı. Beşer, onar rastgeldiği eşkiyalarla tek başına vuruşarak hepsini yere serdi."
  },
  {
    "id": 358,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Memleketin yabancısıydı. Kılıçtan, demirden, çelikten, ateşten başka laf bilmez, pazarlığa girişmez, müşterileri ne verirse alırdı. Yalnız muharebe zamanları ocağını söndürür[,] dükkânının kapısını kilitler, kaybolur[;] muharebeden sonra meydana çıkardı[.] Şehirde ona dair birçok hikâyeler söylenirdi. Kimi \"cellat elinden kaçmış bir çelebi\", kimi \"sevgilisi öldüğü için vakitsiz dünyayı terketmiş bir garip\" derdi."
  },
  {
    "id": 359,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Ama Ali Paşa, çok sabırlı... Mâşallah! Kethüdâ başını kaldırdı: [—] O da sabırsız[...] Ama, ne yapsın? Dregley, pek yalçın, pek sarp..."
  },
  {
    "id": 360,
    "source": "Ömer Seyfettin - Ferman",
    "text": "🙝🙟 Hiç durmadan yağmur yağıyordu. ... İstanbul[']dan kırk dokuz günde Belgrad[']a gelen yorgun ordu, yollarda birtakım haydutların taarruzuna uğramıştı. Yeniçeri ağası bunların takibine çıktı. Malkara Beyi, Evren Bey'le birleşti."
  },
  {
    "id": 361,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Yalnız Deli Hüsrev: — Yüzün ak olsun, ey celâsın! diye bağırdı. Sonra Kuru Kadı[']ya doğru koşarak sordu: [—] Nasıl, gördün mü bu civanı[?] ... Görmedin mi?"
  },
  {
    "id": 362,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Adam gördüğünü kâle geçirirse kazandığı hâli kaybeder. Eğer susaydın, gördüğün keramete ölünceye kadar şahit olacaktın... Kuru Kadı yere diz çöktü, ağlamaya başladı[:] [—] Çok perişanım, diye inledi, lütfet. Gel, beni gaflet uykusundan uyandır. Benim o görmüş olduğum ahvâl ne hikmettir?"
  },
  {
    "id": 363,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Fakat üzerimde çok kuvvetli bir tesir bırak mış olacak... Tablosu çok hoşuma gitmişti...\" \"İyi bir ressamdı!\" İçimde birdenbire beliren, fakat mahiyetini anlıyamadığım bir endişeyle sordum: \"Ressamdı mı dediniz? Şimdi değil mi[?]\" Kadın, etrafına bakınarak, küçük kızı aradı, onun va gona girip oturmuş olduğunu görünce, başını bana doğru eğerek: \"Tabii değil[...]\" dedi. \"Çünkü artık yaşamıyor!\" \"Nasıl?\" Bu kelimenin ağzımdan bir ıslık gibi çıktığını duydum. Etrafımızdakiler dönüp baktılar ve kompartimandaki ço cuk başını pencereden uzatarak hayretle beni süzdü."
  },
  {
    "id": 364,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Sağındaki pencereden siyah ve dağınık bulutların geçişine baktı. Bir an öyle durdu. Derin bir nefesle göğsünü kabarttı: :[—] Ama niçin[?] Ama niçin? Dedi."
  },
  {
    "id": 365,
    "source": "Ömer Seyfettin - Forsa",
    "text": "Karaya çıkan askerler, ak sakallı bir ihtiyarın kendilerine doğru koştuğunu görünce: — Dur! Diye bağırdılar. İhtiyar durmadı, bağırdı: [—] Ben Türk[']üm, oğullar, ben Türk[']üm. ... Askerler onun yaklaşmasını beklediler."
  },
  {
    "id": 366,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Raif Efendinin def terini ellerimle yok etmek, benim için imkânsızdı: \"Ne münasebet, Raif Bey!\" dedim. \"Yazık değil mi? Size uzun zaman arkadaş olmuş bir defteri manasız yere yakmak doğru mu[?][\"] \"Lüzumu yok[!]\" dedi ve başiyle tekrar sobayı gösterdi. \"Artık lüzumu yok!\" Onu bu fikirden vazgeçirmenin mümkün olmıyacağını anladım. Herkesten sakladığı ruhunu ihtimal ki bu def tere dökmüştü ve şimdi onunla beraber gitmek istiyordu."
  },
  {
    "id": 367,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Gerçi babamı gerçek bir muhabbetle sevmem için de ortada bir sebep yoktu, onunla aramızda daima bir yabancılık mevcut kalmıştı ve bi risi bana: \"Senin baban iyi bir adam mıydı?\" diye sorsa verecek cevap bulamazdım. Çünkü iyiliği ve fenalığı hak kında bir fikir sahibi olacak kadar onu tanımıyordum. Ba bam benim için [\"]insan\" olarak hemen hemen hiç mevcut değildi[;] yalnız \"Baba\" dedikleri mücerret bir mefhumun insan şeklinde görünüşü idi. Akşamlan kaşlarını çatarak sessiz sadasız eve giren ve ne bizi ne annemizi hitaba lâyık görmiyen, saçsız başlı, değirmi ve kır sakallı adamla, Ha vuzlu kahvede göğsünü bağrım açıp gülüşerek ayran iç tiğini ve küfür savurarak tavla oynadığını gördüğüm kimse bence birbirinden tamamiyle ayrı idi... Bu İkincisinin babam olmasını ne kadar isterdim..."
  },
  {
    "id": 368,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Sonra etrafındakilere döndü. Şöyle bir göz gezdirdi. Sırtının hafif kamburu içeri çekildi[:] [—] İşittiniz ya, gaziler[!] dedi, Kıraçin haini bizim yüz on dört kişiden ibaret olduğumuzu anlamış... Üzerimize iki bin kişi ile geldi."
  },
  {
    "id": 369,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Sonra büyük kızına hokka kalemle, yazıhanedeki kontrat kağıdını çabucak getirmesini söyledi. Hacı Niyâzi Efendi donmuş gibi, sorulan şeylere hiç cevap vermiyor, hep yüzünü karanlıklara çeviriyordu. Kontrat kağıdıyla hokka kalem gelince, Sermet Bey: [—] Haydi bakalım, al eline kalemi![...] Yüreğine indirdiklerinin, düşürttüğün çocukların cezasını görmek istemiyorsan söylediğimi yaz, imzayı bas! Dedi."
  },
  {
    "id": 370,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Aklımca nükte yapmak istedim: \"İkimize de bir sessizlik çöktü... Ne oluyoruz? Sahiden evlenmiş insanlar gibi birbirimizden sıkılmıya mı baş ladık[?][\"] Ne demek istediğimi anlamıyan gözlerle yüzüme bak tı. Daha çok sıkldım ve sustum. Sonra yatağa doğru sokuldum: Onu okşamak, aramızdaki buzları, daha ziyade kuv vetlenmeden kırmak istiyordum."
  },
  {
    "id": 371,
    "source": "Ömer Seyfettin - Diyet",
    "text": "İki kuvvetli hırsız, bekçi çobanı sımsıkı bağlamışlardı. Sonra canını çıkarıncaya kadar dövmüşler, hatta işkence için bir kolunu da kırmışlardı. Ertesi gün hâkimin huzurunda bu çoban[,] hırsızın birini Koca Ali[']ye benzettiğini söyledi[.] Gece geç vakte kadar dükkânına gelmemesi, derinin dükkânda, para keselerinden birinin kapısı önünde bulunması, Koca Ali'nin ithamına kâfi geldi. Ne kadar inkâr etse hırsızlığıte'vil götürmüyordu."
  },
  {
    "id": 372,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Ya ölürüm, ya galip gelirim. Ama, görüyorum ki, benim işim bitti. O[,] durmasın[,] bütün kuvvetiyle hücum etsin[.] Ben mutlaka yıkılacak kalenin taşları altında kalmak isterim.\" — Sâhi, namuslu bir askermiş... Kethüdâ: — Yalnız namuslu bir asker değil, Arslan Bey, dedi, hem de gayet âlicenap bir mert..."
  },
  {
    "id": 373,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Arasıra olur... Gece vakti yalnız başıma dolaşmak isterim. Kim bilir, evin gürültüsü mü canımı sıkıyor nedir[!][...]\" Sonra, fazla söylemiş olmaktan korkar gibi acele acele: \"İnsan ihtiyarladıkça böyle pluyor galiba[!]\" dedi. \"Ço luk çocuğun ne kabahati var!\" Dışarıda gene gürültü, hızlı konuşmalar başlamıştı. Mektepten dönen büyük kız içeri girdi, babasının yanak larını öptü: \"Nasıl oldun babacığım?\" Sonra bana dönerek elimi sıktı: \"Efendim, hep böyle oluyor..."
  },
  {
    "id": 374,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Biz Vireyi bozmayız. Gelin, size elli manda ile buraya getirdiğim topu seyrettireyim, dedi. Tercüman bunu tekrarlayınca[,] hepsi birbirlerine bakıştılar[.] Bu müthiş, bu korkunç, aleti yakından görmeyi hem merak ediyorlar, hem çekiniyorlardı. Arslan Bey'in arkasına takıldılar."
  },
  {
    "id": 375,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Yaz ortasında bir kere garip birşeyler yazmıştı. Bana verilecek çok gü zel bir haberi olduğunu, fakat bunu ancak geldiği zaman ve bizzat söyliyeceğini bildiriyordu. [(]Sonbaharda kendisini çağıracağımı ümidettiğimi yazmıştım![)] Bundan sonra, bir çok mektuplarımda tekrar tekrar sorduğum halde, bu iyi haberin ne olduğunu yazmadı. Hep \"Bekle, geldiğim zaman öğrenirsin!\" diyordu. Evet, bekledim; hem yalnız sonbahara kadar değil, tam on sene bekledim..."
  },
  {
    "id": 376,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Götürüp vereyim bari...\" j Tekrar dışarı çıktu Gözlerimle kendisini takibettim. \"Hakkı da var, hakkı da var!\" diye söyleniyordum. Bundan sonra Raif Efendinin her hali[,] sahiden mânâ sız ve ehemmiyetsiz olan hareketleri bile, bana merak vermiye başladı[.] Onunla konuşmak, hakikî hüviyetine dair bir şeyler öğrenmek içn her fırsattan istifadeye kalktım. O benim bu fazla sokulganlığımı farketmez göründü."
  },
  {
    "id": 377,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Büyük topa doğru yürüdüler. Yaklaşınca Arslan Bey: — İşte, dedi, sizin böyle topunuz var mı? Düşman kumandanı tercümanla cevap verdi[:] [—] Hayır[.] Niçin yapmıyorsunuz? Bilmiyoruz."
  },
  {
    "id": 378,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Raif Efendinin bu neviden bir defteri olacağı aklıma bile gelmezdi. Paketi süratle açıp içindeki havlu vesaireyi kapının arkasındaki bir iskemlenin üzerine koydum. Sonra defte ri elime alarak Raif Efendiye gösterdim: [\"]Bunu mu istiyordunuz[!][\"] Başiyle \"Evet\" diye işaret etti. Yavaşça defterin yapraklarını karıştırdım. îçimde mukavemet edilmez bir merakın gitgide büyüdüğünü his sediyordum."
  },
  {
    "id": 379,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Ben iki saate kadar geleceğim. Şimdi hepiniz hazır olunuz. Nihâyetleri görünmeyen beyaz, büyük sakalının çerçevelediği yüzü sis içinde muallâkta duruyor sanılan ihtiyar topçubaşı sordu: [—] Siz gelmeden ben döğmeye başlayım mı, beyim[?] Arslan Bey güldü: — Hayır... Senin iki topunun güllelerine ihtiyacımız yok."
  },
  {
    "id": 380,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Kendine iltica eden tarafları bile çağırdığı ziyafette, yemekmiş gibi, kaynattırdığı büyük kazanlara atıp söğüş yapan, mağlup ettiği Özbek padişahının kafatasıyla şarap içen bu gaddar Şah, dünyada hakikaten eşi görülmemiş bir zalimdi. Bayezid Dîvanı'nın edib, sakin, haluk, dindar vezirleri, onun vahşetlerini hatırlamaya tahammül edemezlerdi. Bu zalim[,] bir gün mutlaka bizim hududumuza da tecavüz edecek[,] şark eyaletlerini zapta kalkacaktı[.] Bunu herkes biliyordu. Geçen yıl Zülkadriye hâkimi Alâüddevle'den nikâhla kızını istemişti."
  },
  {
    "id": 381,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Kaftanınızı unutuyorsunuz. Muhsin Çelebi durdu, güldü. Çıktığı kapıya doğru dönerek Şah[']ın işiteceği yüksek bir sesle[:] [—] Hayır, unutmuyorum. Onu size bırakıyorum. Sarayınızda büyük bir padişah elçisini oturtacak seccadeniz şilteniz yok..."
  },
  {
    "id": 382,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Komşuları Hacı Niyâzi Efendi'ye: — Galiba senin evin ecinnileri, başka eve göç ettiler. Yeni kiracın hiç çıkacağa benzemiyor! Dedikçe, evvela sararıyor, sonra kızarıyor, şu cevabı homurdanıyordu[:] [—] Ne abdest, ne oruç, ne namaz, ne niyaz[...] Karılı, erkekli, çoluklu çocuklu hepsi akşamdan sabaha kadar sarhoş! Ayol onlara ecinni değil, şeytan bile görünemez!"
  },
  {
    "id": 383,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Boynundan yanaklarına doğru bir kır mızılık yayıldı. Bu sualime cevap vermemek için çırpın dığı anlaşılıyordu. Birdenbire gözlerini kapadı, büyük bir dermansızlık hissediyormuş gibi, başı arkaya dayandı, du yulur duyulmaz bir sesle: [\"]Ah Raif[!][...]\" dedi. \"Ne var?\" Biraz kendini topladı. Çabuk çabuk nefes alarak: \"Hiç!\" dedi, \"Bugün yanımdan ayrılmanı istemiyo rum..."
  },
  {
    "id": 384,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Buna rağmen şirkette hiç kimse onun bir ecnebi dili bileceğine ihtimal vermiyordu. Belki de haklan vardı, çünkü hal ve tavrında hiç de lisan bilen bir insan kılığı yoktu. Konuşurken ağzından yabancı bir kelime çıktığı, her hangi bir zaman dil bildiğinden bahsettiği duyulmamış[;] elinde veya cebinde ecnebi gazete ve mecmuaları görülmemişti[.] Hulâsa, bütün varhklariyle: Biz frenkçe biliriz! diye haykıran insanlara benzer bir tarafı yoktu."
  },
  {
    "id": 385,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Sihirli bir el tarafından tamamen de ğiştirileceğimi, ruhumda, küçük kız çocukları gibi masum, fakat ayni zamanda bütün hayatımı kavrıyacak kadar kuv vetli heyecanlar duyacağımı, bu sabah uykudan, başka bir dünyaya doğar gibi uyanacağımı sanmıştım. Fakat hakikat nekadar başka... Hava her zamanki gibi kapalı[;] odam so ğuk[...] Yanımda, her şeye rağmen bana yabancı, bütün ya kınlığına rağmen benden ayrı, benden başka bir insan... Adalelerimde yorgunluk ve başımda ağrı...\" Tekrar yatağına girerek, arka üstü uzandı."
  },
  {
    "id": 386,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Öptü. Basına koydu. Dışarı çıkarken Sadrâzam: [—] Haydi arslanım, çabuk, yolun uğurlu olsun[!] Diyerek gülümsedi. Çadırın önünde mükemmel bir kır atın onu beklediğini gördü."
  },
  {
    "id": 387,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Fakat niçin bunları bukadarince düşündüğüm halde bir türlü kendimi hâdiselere uyduramıyordum? Niçin ha yatta önüme çıkan her yeni yola adım atmaktan bu kadar çekiniyor, her yaklaşan insanı, bana fenalık etmeğe geli yormuş gibi, endişe ile karşılıyordum? Bazan kendimi bir müddet için unuttuğum[,] bir insanda kendime yakın taraflar bulduğum oluyordu[.] Fakat kafama, çıkmaz bir şekilde yerleşmiş olan o korkunç hüküm, derhal kendini gösteriyor; \"Unutma, unutma ki, o sana daha yakındı... Buna rağ men böyle yaptı...\" diye beni hakikate davet ediyordu."
  },
  {
    "id": 388,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Tâ birbirimizi tekrar görmek ihtiya cını şiddetle duyuncıya kadar... Hadi artık git Raif. Bu an gelince ben seni ararım[;] belki tekrar dost olur ve buse fer daha akıllı davranırız[.] Birbirimizden, verebileceğimiz den fazla şeyler beklemeyiz ve istemeyiz... Hadi artık \" git..."
  },
  {
    "id": 389,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Enfiyenin etkisini duymaya başlayan Abdurrahman Çelebi, habire hapşırıyordu. Ben sanki hiçbir şeyden haberim yokmuş gibi: \"Sizinle eğleniyor efendim,\" dedim. \"Halt etmişsin[...]\" Daha ziyade küstahlaştım: \"Bunu da falakaya yıkmalısınız.\" \"O hayvan, o[...]\" Kahkahalarla katılan çocuklar: \"Falaka, falaka[...]\" diye bağırıyorlardı. Ben onlardan cesaret aldım. Dedim ki: \"Hoca Efendi, bugün mektepte, 'Kim hapşırırsa şart olsun falakaya yıkacağım,' dediniz."
  },
  {
    "id": 390,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Kahramanlık şiirlerini okuduğu Perviz Efendi, çadırın içinde ayaktaydı. Nişancı Eğri Abdizâde Mahmut Çelebi'yle Şabaç Köprüsü'nün, Semendire Beylerbeyi Bayram tarafından nasıl yapıldığını konuşuyordu. Onun girdiğini görünce[:] [—] Hayrola, Tosun Bey[!] Diye lafını kesti, Tosun Bey titriyordu. Kendine mâlik değildi: — Otağ-ı hümâyun kaybolmuş."
  },
  {
    "id": 391,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Gayet sert, gayet titiz, gayet sinirli bir adamdı. Âdeta deli gibi bir şeydi. Sabahtan akşama kadar namaz kılar[,] zikreder[,] geceleri hiç uyumazdı. Daha yatıp uyuduğunu kalede gören yoktu. Vali Ahmed Bey ona \"bizim yarasa\" derdi."
  },
  {
    "id": 392,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Başka hiçbir şey istemiyordum. Hayat bana kötü bir oyun oynamıştı. Pekâlâ[;] işte[,] ne kendime, ne başkalarına kabahat bulmuyor, hâdiseleri ol duğu gibi kabul ediyor ve sessizce katlanıyordum[.] Ama bunun sürüp gitmesine lüzum yoktu. Sıkılıyordum, sadece sıkılıyordum."
  },
  {
    "id": 393,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Sermet Bey gözlerini oğuşturdu: — Vay anasını! dedi, telkinin kuvvetine bak! Karısı[,] kızları, çocukları korkudan sapsarı kesildiler[.] Büyük kızı: — Ne telkini beybaba! İşte karşımızda, görmüyor musun?"
  },
  {
    "id": 394,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Çamlığın sonundaki alçak duvara dayalı bir tahtaya tırmanırken yakaladı. Gayet kuvvetliydi. Hayal[,] mukâbele olmadığını anlayınca çırpınmaktan vazgeçti[.] Sermet Bey: — Ben sana elâlemle alay etmesini gösteririm! Diye zavallı hayali sırtladı."
  },
  {
    "id": 395,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Eniştelerim, sırf beni müşkül vaziye timden kurtarmak ve ailenin servetinin dağılmasına mey dan vermemek için borçlarımı ödediler ve zeytinlikle rimi aldılar... On dört odalı harap evden ve bir kaç parça eşyamızdan başka bir şeyim kalmamıştı. Karımın babası henüz sağdı ve Balıkesirde memurdu[;] onun delâletiyle vi lâyet merkezinde bir şirkete memur oldum[.] Senelerce kal dım. Aile yükü arttıkça benim hayatla alâkam azalıyor, artması icabeden gayretim büsbütün yok oluyordu."
  },
  {
    "id": 396,
    "source": "Ömer Seyfettin - Ferman",
    "text": "... ... Padişah bir şey söylemedi[,] perdenin gerisine çekildi[.] Yağmur durmuyor, daha ziyâde şiddetleniyordu. Sokullu'nun işaretiyle, altın yaldızlı muhafız mızraklarının arasındaki murassâ gerdûne hareket etti."
  },
  {
    "id": 397,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Yerlere kazıklanmış kır atlar, yabancı korkular duyuyorlar gibi, sık sık başlarını kaldırarak kişniyorlar, tırnaklarıyla kazmaya çalıştıkları toprakların nemli çimenlerini otluyorlardı. Dallarda kırmızı çullar, sırmalı eğerler asılı duruyordu. Cemâatle kılınmış akşam namazından dağılan askerler[,] çadırların arasından gürültü ile geçiyorlardı[.] Kısa emirler, çağırılan isimler, bir kahkaha, bir söz... Başlayacak sükûnu bozuyor, atların yanında itişen birkaç gencin şen nâraları duyuluyordu."
  },
  {
    "id": 398,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Kılıç salladın. Bağlı koyunu yer yatırıp kesemez misin?\" diye ısrar ettiler. [\"]Kula kul olmak[\"], fâni dünyada [\"]birisine minnettar kalmak\" azapların en ağırı idi. O daha pek gençken, vezir amcasının lütfunu bile çekememiş, minnettar kalmamak için aile ocağından kaçmış, gurbet ellerine atılmıştı. Şimdi kör talihi, onu bak kime köle edecekti?"
  },
  {
    "id": 399,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "İşte Dîvan'da bu kurnaz, bu zalim, gaddar türediye gönderilecek münasip bir elçi bulunamıyordu; çünkü kendini Osmanlı hakanıyla bir tutan, hatta bütün şarkta cihangirlik kuran bu serseri, karşısında devleti temsil edecek adama karşı şüphesiz birçok münasebetsizlikler edecek; münasebetsizliklerine mükâbele edeni ihtimal kazığa vuracak, derisini yüzecek, akla gelmedik kaba bir vahşetle öldürecekti. Sadrazamın sağındaki, deminden beri, bir mezar taşı gibi hareketsiz duran, kırmızı tuğlu kavuk yerinden oynadı. Yavaş yavaş sola döndü[:] [—] Ben tam bu elçiliğe münasip bir adam biliyorum, dedi[.] Babası benim yoldaşımdı, ama devlet memuriyeti kabul etmez. Kim?"
  },
  {
    "id": 400,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Konuşmalarına dikkat ederdim. İktisat Vekâletinin en küçük iki memuru olan Vedatla Cihadın daire arkadaşlarını, Raif Efendinin bü yük kızı Neclânın da mektep arkadaşlarını çekiştirmekten, kendilerinde de aynen mevcudolan birtakım giyiniş ve hareket garabetlerini yalnız başkalarında görüp alaya ala rak fıkır fıkır gülmekten başka işleri yoktu: \"Muallânın düğünde giydiği o tuvalet neydi ayol? Kıh, kıh, kıh[!]\" \"Kız bizim Orhanı nasıl tersledi [;] bir görseydin[...] Kah, kah, kah!\" Raif Efendinin baldızı Ferhunde Hanım, üç ve dört yaşlarındaki iki çocuğu ile uğraşmaktan ve bunları abla sına bırakmak fırsatını bulur bulmaz, sırtına bir ipekli el bise geçirip alelâcele boyanarak gezmiye gitmekten başka bir şey düşünecek halde değildi. Kendisini ancak birkaç kere, büfenin üstündeki aynada, boyalı ve ondüleli saçla rını tüllü şapkasının altına yerleştirmiye uğraşırken gördüm."
  },
  {
    "id": 401,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Konak, çamurlu ve bozuk bir yolun sağında kurulmuştu. Her taraftan seller akıyor, askerler sırayla yerlerine geliyorlar, çadırlar kuruluyor, kazanlar indiriliyor, ötede beride ateşler parlıyordu. Bu kalabalığın arasında Tosun Bey[']in al atıyla süzüldügü görüldü[.] İki konak geriden orduya yetişmişti. Yol kenarında semeri devrilmiş bir katırı kaldıran yeniçerilere sordu: — Otağ-ı hümâyun nerede, ağalar?"
  },
  {
    "id": 402,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Kale kumandanı, gözlerini yerden kaldırıp cevap veremedi. Asilzâdeler, şövalyeler birbirlerinin yüzlerine bakmaya cesaret edemediler; âni bir ölüm darbesiyle vurulmuş gibi oldukları yerde donup kaldılar. Bir güllesiyle kaleyi yıkacak olan bu korkunç top, siyaha boyanmış, kocaman bir kütükten başka bir şey değildi[!][...] Gelişmiş Özel karakterler Yardım Başlık Biçim Ekle Alaca karanlık içinde sivri, siyah bir kayanın müphem hayali gibi yükselen Şalgo burcu uyanıktı. Vakit vakit inlettiği trampete, boru seslerini akşamın hafif rüzgarı, derin bir uğultu halinde, her tarafa yayıyor..."
  },
  {
    "id": 403,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Fakat kabahat bende... Ehemmiyeti yok... Çabuk yürü yelim[!]\" \"Sizi tekrar eve götürmek için bekliyeyim mi[?]\" \"Hayır, hayır[...] Asla... Yarın buluşuruz!\" \"Siz bilirsiniz!\" Belki üşümemek için, bana daha çok sokuldu."
  },
  {
    "id": 404,
    "source": "Ömer Seyfettin - Kütük",
    "text": "... Hepsi iki adım ayrılınca sisin içinde görünmez oldular. Arslan Bey, tepinen atına binince yuları tutan kethüdâsına: [—] Sen de koş, yanına bir adam al, gerideki Değirmenli Çiftliği[']nde biriktirdiğim elli mandayı hemen buraya sür. Burca giden yolun yanında hazır tut... Orada beni bekle."
  },
  {
    "id": 405,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Hoca Efendi dayağı bitirince bütün kuvvetiyle rahlesine vuruyor: \"Kim hapşırırsa, şart olsun ki öldürünceye kadar döveceğim! diye haykırıyordu. [\"]Şart olsun, kim hapşırırsa[...]\" \"Şart olsun!\" Bu nasıl yemindi[?] Evde anneme sordum. Başını salladı."
  },
  {
    "id": 406,
    "source": "Ömer Seyfettin - Kaşağı",
    "text": "yerimde duramaz: — Ben de yapacağım! diye tuttururdum. O vakit Dadaruh, beni Tosun[']un sırtına koyar, elime kaşağıyı verir, [—] Hadi yap! derdi. Bu demir aleti hayvanın üstüne sürter, fakat o uyumlu tıkırtıyı çıkaramazdım."
  },
  {
    "id": 407,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Sizin hiçbir fikriniz, bir arzunuz yok mu?\" Derhal dün akşamki sözlerini öne sürdüm: \"Sizden her hangi bir şey istemekten beni menetmiştiniz!\" Cevap vermedi. Bir müddet bekledikten sonra devam ettim: \"Yoksa dün akşam ciddî değil miydiniz? Yahut bu gün fikrinizi değiştirdiniz mi[?]\" Şiddetle reddetti[:] \"Hayır! Hayır!.. Hep ayni fikirdeyim...\" Tekrar düşüncelere daldı."
  },
  {
    "id": 408,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Burcun tepesinden bir cevap verdiler. Tercüman tekrarladı: — \"Ne gibi şartlarla?\"diyorlar, beyim. Arslan Bey[,] deminkinden daha sert bir sesle haykırdı[:] [—] Şartım filan yok. Biz teslim olanın canına kıymayız. Teslim olmazsanız, beş dakika sonra kalenin içinde bir canlı adam kalmaz."
  },
  {
    "id": 409,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Asıl büyük ve affedilmez haksızlığı sana kar şı yaptıktan sonra, hiçbir şeyi düzeltmek istemiyorum. Senin hakkında verdiğim yanlış bir hükme dayanarak bü tün insanları suçlu tuttum; onlardan kaçtım. Bugün haki kati anlıyorum[;] fakat nefsimi ebedî bir yalnızlığa mah kûm etmeğe mecburum[.] Hayat ancak bir kere oynanan bir kumardır, ben onu kaybettim. îkinci defa oynayamam..."
  },
  {
    "id": 410,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Raif Efendinin, daha kırk yaşma gelmeden ihtiyarlıyan, gevşemiş etleri, göbeğine kadar sarkan memeleriyle acayip bir şişmanlığı birleştiren karısı Mihrive Hanım, bütün gününü mutfakta yemek pişirmek, boş zamanlarında yığın yığın çocuk çorabı yamamak ve kızkardeşinin birbirinden haşarı \"yumurcaklarına\" bakmakla geçirdiği halde, birtür lü ev halkına yaranamıyordu. Hiç kimse evin nasıl döndüğünü sormuyor, sadece, kendisini çok daha yüksek bir ha yata lâyık gördüğü için, yemekleri beğenmemek, her şeye dudak büküp burun kıvırmak suretiyle, yeni bir tatsızlık çıkarıyordu. Nurettin Bey: [\"]Bu ne biçim şey canım[?]\" derken âdeta: \"Benim verdiğim yüzlerce lira nereye gidiyor Allah aşkına[?]\" demek ister gibiydi. Boyunlarına yedi lira lık eşarp takan kayınbiraderler ise: \"Ben bu yemeği sev medim, bana yumurta pişir...\" Yahut: \"Ben doymadım., ba na sucuk kızartıver!\" diye Mihriye ablalarını sofradan kal dırıp mutfağa yollamaktan hiç çekinmiyorlar, sonra da, her hangi bir akşam ekmek almak için on bir kuruş lâzım olunca, bunu ceplerinden vermiye kıyamıyarak, odasında hasta yatan Raif Efendiyi daldığı uykudan uyandırıyorlar; bu da yetmiyormuş gibi onun niçin hâlâ iyi olmadığına ve bakkala kendisi gitmediğine kızıyorlardı. Evin, misafirlerin gözüne görünmiyen kısımlarındaki perişanlığına mukabil, holdeki ve misafir odasındaki inti zam bir dereceye kadar Neclânm eseri idi."
  },
  {
    "id": 411,
    "source": "Ömer Seyfettin - Yüksek Ökçeler",
    "text": "Mehmet bile bu nasihati noktası noktasına tutmuştu. Arka bahçedeki mutfağına değil misafir, hemşeri filan, hatta yabancı bir kedi bile girmiyordu. Hatice Hanım[,] belki günde on defa iner[,] onu yapayalnız tenceresinin başında bulurdu. Hatice Hanım'ın temizlik, namus merakından başka bir de yüksek ökçe merakı vardı. Güzeldi, tombuldu, cıvıl cıvıl bir şeydi."
  },
  {
    "id": 412,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Hasta zamanlarında da işini ibmal etmezdi. Tercüme edilecek yazılar bir odacı ile evine gönderilir ve birkaç saat sonra aldırılırdı. Buna rağmen mü dürün ve bizim Hamdinin Raif Efendiye karşı muamelelerinde[:] \"Bak, seni şu mızmız, hastalıklı haline rağmen at mıyoruz[!]\" demek istiyen bir şey vardı. Bunu ikide birde yüzüne vurmaktan da çekinmezler, birkaç gün yokluktan sonra her gelişinde adamcağızı: \"Nasıl? İnşallah artık bitti ya?\" diye iğneli geçmişolsunlarla karşılarlardı."
  },
  {
    "id": 413,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Kapının yanına çöktü. Yanında alçak sesle konuşanların sözlerine istemeye istemeye kulak kabarttı. Konya[']dan iki garip derviş geldiğini, yatsı namazına kadar Mesnevî okuyacaklarını duydu[.] Akşam namazı kılınıp bittikten sonra cemaatin bir kısmı çıktı. Koca Ali yerinden oynamadı."
  },
  {
    "id": 414,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Ona kızmama, darılmama, onun aleyhinde düşünmeme imkân olmadığını hissediyordum. Ama bir kere kırılmış tım. Hayatta en güvendiğim insana karşı duyduğum bu kırgınlık[,] âdeta bütün insanlara dağılmıştı[;] çünkü o benim için bütün insanlığın timsali idi. Sonra, aradan seneler geçtiği halde, nasıl hâlâ ona bağlı olduğumu gördükçe, ru humda daha büyük bir infial duyuyordum. O beni çoktan unutmuş olacaktı."
  },
  {
    "id": 415,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Raif Efendi evvelâ hastaneye gitmeği istiyor, \"Orada hiç olmazsa kafamı dinlerim!\" diyordu. Yalnız kalmak is tediği her halinden belli idi, fakat etrafmdakilerin bunu nekadar şiddetle reddettiklerini görünce, o da sesini çıkarmaz oldu. Yüzünde ümitsiz bir tebessümle: [\"]Beni ora da da rahat bırakmazlar ki[!][\"] diye mırıldandı. Bir gün, hâlâ aklımdadır, bir cuma günü akşamı Raif Efendinin başucundaki iskemleye oturmuş, hiç konuşma dan, onun göğsü hınldıyarak nefes alışını seyrediyordum. Odada başka kimse yoktu."
  },
  {
    "id": 416,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Kendisini dinlemeyen bu eller, fermanı da açtı. Tosun Bey az ışık veren kandilin ziyâsıyla ancak gördüğü satırları okudu. Taş odanın beyaz duvarları[,] nakışlı tavan[,] halı örtülmüş döşeme etrafında dönmeye başladı[.] Deli oluyordu. Cinayetten sonra kaçan katiller gibi elleri iki tarafına düştü."
  },
  {
    "id": 417,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Bir kayığa atladı. Sadrazamın konağına gitti. Nâmeyi Şah[']a verdiğini, hiçbir hakarete uğramadığını, Şah[']ın müsaadesine tenezzül etmeden habersizce kalkıp İstanbul'a döndüğünü söyledi. Zaten Sadrazam, onun vazifesini hakkıyla îfâ edeceğinden son derece emindi. Yollara, derebeylerine, aşiretlere dair bazı şeyler sordu."
  },
  {
    "id": 418,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Hiçbir şeyden müteessir olmuyor, hiçbir şeye sevinmiyordum. insanlara kızmama imkân yoktu, çünkü insanların en kıymetlisi, en iyisi, en sevgilisi bana en büyük kötülüğü etmişti; diğerlerinden başka şey beklenebilir miydi? İn sanları sevmeme ve onlara tekrar yaklaşmama da imkân yoktu[;] çünkü en inandığım, en güvendiğim insanda aldanmıştım[.] Başkalarına emniyet edebilir miydim? Böylece herhalde seneler geçecek, beklediğim gün ge lecek ve herşey sona erecekti."
  },
  {
    "id": 419,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Kapuşvar'dan sonra Zigetvar'ı saran ordu, kışın aman vermez zoruyla, zaptı yaza bırakarak Budin'e dönünce, o da askerleriyle tekrar palangasına gelmemiş, Toygun Paşa'nın yanında kalmıştı. Bugün Grijgal'den altı mil uzaktaydı. Palangaya yalnız Kuru Kadı karışıyordu[;] esmer, zayıf yüzünü buruşturdu: \"Palanga, palanga[...]Amma topu tüfeği kaç kişi?\" dedi. Bütün genç muharipleri, Ahmed Bey, beraberinde götürmüştü. Hisardakiler zayıflardan, bekçilerden, hastalardan, ihtiyar sipahilerden ibaretti."
  },
  {
    "id": 420,
    "source": "Ömer Seyfettin - Yüksek Ökçeler",
    "text": "Mehmet, tuhaf bir şapırtı içinde Eleni'ye de: — Ülen gece niçin gelmiyon? Sana helva yapıp saklayon! Sualini soruyor, Eleni[:] [—] Yakalanazağiz vire! Sonra hanım bizi kovazak diye çırpınıyordu. Aralarında çıtır pıtır bir hasbihal başladı."
  },
  {
    "id": 421,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Traş olup, üstümü giyindikten sonra, gitmek için Maria’dan izin istedim: \"Nereye gideceksin?\" dedi. Hayret ettim: \"Bilmiyor musun?\" dedim. \"Fabrikaya!\" \"Bugün gitmesen olmaz mı[?]\" \"Olur, fakat neden[?]\" \"Bilmem[...] Bugün hep yanımda kalmanı istiyorum!\" Bunu bir hastalık kaprisi saydım; fakat cevap verme dim. Hizmetçinin yatağın kenarına bıraktığı sabah gaze telerini karıştırmağa başladım."
  },
  {
    "id": 422,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Haydi şimdilik iyi geceler.. Bir dakika: Hâlâ isminizi bilmiyorum?..\" \"Raif!\" \"Raif mi?.. Bu kadarcık mi[?]\" \"Hatip zade Raif[!]\" \"A, imkânı yok[...] Ne aklımda tutabilirim, ne de söyliyebilirim! Sadece Raif desem olmaz mı?\" \"Daha memnun olurum!\" \"Siz de bana sadece Maria diyebilirsiniz..."
  },
  {
    "id": 423,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Dün akşam ne oldu? Kurtulabildiniz mi? Nereden tanışıyorsunuz[?][\"] [\"]Ayni pansiyonda oturuyoruz. Dün akşam bir tesadüf sayesinde yakamı kurtardım, Bizim pansiyonda dayıza denizle yakından alâkadar olan bir Herr Döppke var, onunla karşılaştık.\" \"Evlenseler bari.\" Bu cümle ile bahsi kapatmak istediğini anladım. Bir müddet sustuk."
  },
  {
    "id": 424,
    "source": "Ömer Seyfettin - Kaşağı",
    "text": "Yalan söyleme, diyorum. Ben kırmadım. Babam tekrar[:] [—] Doğru söyle, darılmayacağım[.] Yalan çok fenadır, dedi. Hasan, inkârında inat etti."
  },
  {
    "id": 425,
    "source": "Ömer Seyfettin - Kütük",
    "text": "\"Yerin kulağı var.\" derdi. Ağzından çıkan bir sır mutlaka işitilecekti. Kethüdâ gibi bu sessiz[,] bu mânasız beklemeden bütün askerler sıkılıyorlar[,] bir şey anlamıyorlardı. Kumandanın imdat, cephâne, top beklediği söyleniyordu. İhtiyar sipâhîler: \"Biz burasını imdat gelmeden alamazmıyız?"
  },
  {
    "id": 426,
    "source": "Ömer Seyfettin - Forsa",
    "text": "Dediler. Kendini kadırgaya getiren askerlerle beraber büyük geminin kıçına doğru yürüdü. Kara palabıyıklı[,] sırmalı esvabının üzerine demir[,] çelik zırhlar giymiş, iri bir adamın karşısında durdu[.] Sen kaptan Kara Memiş misin? Evet!"
  },
  {
    "id": 427,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Kapı açıldı. Kaşağı elinde, kolları paçaları sıvalı, başı kabak Deli Hüsrev... Daha Kuru Kadı bir şey sormadan: — Gördün mü Deli Mehmed[']in zevkini[?] dedi. Siz de benim gibi buradan gördünüz mü?"
  },
  {
    "id": 428,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Bu peri daima çamlığın içine kaçıyor, orada sır oluyordu. Sermet Bey, bir gün çamlığın içine saklanıp birdenbire perinin karşısına çıkmayı, yahut arkasından yavaşça gidip elini sürüvermeyi düşündü. Evdekilerin hiçbiri buna razı olmadı[:] [\"]Seni hemen oracıkta çarpar[!]\" diyorlardı. Fakat Sermet Bey, bulanan gönlüne rağmen, periye, ecinniye filan bir türlü inanmıyordu. Ertesi akşam koruya gitti."
  },
  {
    "id": 429,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bütün bü mânâsız hislerin, yersiz korkuların şu anda hiç lüzumu olmadığını, hayatımın en aydınlık gününü ve himler ve fena sezişlerle karartmanın sebepsizliğini dü şündükçe büsbütün canım sıkılıyordu. Başını çevirmeden sordu: \"Uyandınız mı?\" \"Evet!.. Siz uyanalı çok oldu mu[?][\"] \"Biraz evvel[!]\" Sesi bana tekrar cesaret verdi. Uzun zamandan beri kulaklarımın en tatlı aşinası olan ve bende yalnız iyi hâ tıralar uyandıran bu ses, birdenbire çıkıp gelen güveni lecek bir dost gibi, içime ferahlık getirmişti. Fakat bute sir ancak bir an sürdü."
  },
  {
    "id": 430,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Böyle bir arslanı, celladın eline vermek ne büyük bir insafsızlıktı. Hangi vicdan buna razı olurdu? Ak sakalına yakışmayan masum bir hıçkırıkla[:] [—] Kabahatin ne[?] Diye sordu. Padişahım bilir..."
  },
  {
    "id": 431,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Başını yavaşça yastığa bıraktım: \"Yorulacaksın!\" dedim. Gözleri parladı: \"Hayır, hayır!\" diyerek koluma sarıldı. Sonra kendi kendine söyleniyormuş gibi: \"Şimdi aramızda noksan olan şeyin ne olduğunu bili yorum[!]\" dedi, \"Bu eksik sana değil, bana ait[...] Bende inan mak noksanmış... Beni bu kadar çok sevdiğine bir türlü inanamadığım için, sana âşık olmadığımı zannediyormuşum..."
  },
  {
    "id": 432,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Hayret ettim: \"Bilmiyor musun?\" dedim. \"Fabrikaya!\" \"Bugün gitmesen olmaz mı?\" \"Olur, fakat neden?\" \"Bilmem... Bugün hep yanımda kalmanı istiyorum[!][\"] Bunu bir hastalık kaprisi saydım[;] fakat cevap verme dim. Hizmetçinin yatağın kenarına bıraktığı sabah gaze telerini karıştırmağa başladım. Maria’nm halinde tuhaf bir telâş, âdeta bir rahatsız lık vardı."
  },
  {
    "id": 433,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Atını, koşan bir hizmetkâra verdi. Kahramanlık şiirlerini okuduğu Perviz Efendi, çadırın içinde ayaktaydı. Nişancı Eğri Abdizâde Mahmut Çelebi[']yle Şabaç Köprüsü[']nün, Semendire Beylerbeyi Bayram tarafından nasıl yapıldığını konuşuyordu. Onun girdiğini görünce: — Hayrola, Tosun Bey! Diye lafını kesti, Tosun Bey titriyordu."
  },
  {
    "id": 434,
    "source": "Ömer Seyfettin - Kütük",
    "text": "O biliyordu; düşmanların hepsi Zondi gibi, Plâs Batanyus gibi, Lozonci gibi kahraman değildi. İçlerinde tavşan kadar korkakları da vardı. Mesela[;] Seçeni kalesinin muhafızları[,] daha Ali Paşa yaklaşırken, toplarını, tüfeklerini, cephânelerini, erzaklarını, mallarını, hatta ihtiyarlarını, çocuklarını bırakıp bir kurşun atmadan kaçmışlardı[.] Birkaç güne kadar burası da alınınca Holloko, Boyak, Şağ, keparmat kaleleri kalıyordu. Ama Allah kerimdi."
  },
  {
    "id": 435,
    "source": "Ömer Seyfettin - Kütük",
    "text": "O, durmasın, bütün kuvvetiyle hücum etsin. Ben mutlaka yıkılacak kalenin taşları altında kalmak isterim.\" — Sâhi, namuslu bir askermiş... Kethüdâ[:] [—] Yalnız namuslu bir asker değil, Arslan Bey, dedi, hem de gayet âlicenap bir mert[...] Nasıl? Bakın anlatayım."
  },
  {
    "id": 436,
    "source": "Ömer Seyfettin - Yüksek Ökçeler",
    "text": "Benzine kan geldi. Vâkıâ yine, başı dönmeye başladı. Fakat sesi işitilmeyen ökçesiz terlik giydireceğini düşünerek doktora kendini göstermiyor[:] [—] Hiç olmazsa şimdi yüreğim rahat ya, diyordu."
  },
  {
    "id": 437,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Dedikçe, evvela sararıyor, sonra kızarıyor, şu cevabı homurdanıyordu: — Ne abdest, ne oruç, ne namaz, ne niyaz... Karılı, erkekli, çoluklu çocuklu hepsi akşamdan sabaha kadar sarhoş! Ayol onlara ecinni değil[,] şeytan bile görünemez[!]"
  },
  {
    "id": 438,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Bu günden sonra Hoca Efendi esneme ile hapşırmayı en büyük kabahat sayıyordu. Hele hapşırmak...Kazara, kendiliğinden hapşıranı, \"Benimle eğleniyor musunuz?\" diye yere yıkıyor, bayıltıncaya kadar dövüyordu. Aksi gibi[,] benim hiç durmadan esneyeceğim geliyor, hapşırmak istiyordum[.] Birkaç defa bunun için dayak yedim. Hoca Efendi dayağı bitirince bütün kuvvetiyle rahlesine vuruyor: \"Kim hapşırırsa, şart olsun ki öldürünceye kadar döveceğim!"
  },
  {
    "id": 439,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Muhsin Çelebi sordu: — Katınızda bu kadar nişancılar, kâtipler, hocalar var. Niçin onlardan intihâb etmiyorsunuz? Sen[,] Şah İsmail denen habisin kim olduğunu biliyor musun[?] Biliyorum. Devletini seviyor musun?"
  },
  {
    "id": 440,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Kethüdâ yine bir şey anlamadı. 🙝🙟 Bir sabah... Binlerce bacadan henüz tütmüş soğuk[,] nemli bir duman kadar koyu bir sis her tarafı kaplamıştı[.] Ordugâh, sancaklar, tuğlar, çadırlar, dişbudak ağaçları, atlar, hiç, hiçbir şey görünmüyordu. Evvelâ birbirlerini çağıranların sözleri duyuluyor, sonra iki hayal, ses yordamıyla bu beyaz karanlığın içinde buluşuyordu."
  },
  {
    "id": 441,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Sofu, sulhperver, sakin padişahın koca devletine sessiz, küçük bir dimağ olan Dîvan düşünmeye başladı. 🙝🙟 Bu elçi, yedi sene sonra takdirin \"Yavuz\" namındaki yaman sillesiyle her gururunun, her cinayetinin cezasını bir anda gören İsmail-i Safevî'ye gönderilecekti! Şehzadeliğini ata binmekten, cirit oynamaktan, silah kullanmaktan ziyade, kitapla geçiren Bayezid[-]i Veli[']nin tabiatı son derece halimdi. Yalnız şiiri, hikmeti, tassavvufu sever; muharebeden, mücadeleden nefret ederdi. Vezirler, sevgili padişahlarının sükûnunu bozmamayı en büyük vazifeleri sanırlardı."
  },
  {
    "id": 442,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bu kadarcık mi?\" \"Hatip zade Raif!\" \"A, imkânı yok... Ne aklımda tutabilirim, ne de söyliyebilirim! Sadece Raif desem olmaz mı[?][\"] \"Daha memnun olurum!\" \"Siz de bana sadece Maria diyebilirsiniz[...] Söyledim ya, minnet altında kalmak istemem!\" Tekrar güldü; deminden beri birkaç defa ifade değiş tiren çehresi tekrar o tatlı, o dost halini aldı. Kolunu uza tarak elimi avucunun içinde sıktı."
  },
  {
    "id": 443,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Onu taş merdivenlerden çıkardı. Bey, sabah namazını kılarak selamlığa çıkmış, rahat rahat çubuğunu çekiyor, mahmurluk keyfini yetiştiriyordu. Odasına ansızın Tosun Bey[']i girdiğini görünce şaşaladı[.] Bu Bey, onun cesaret ve kahramanlığına meftun, ihtiyar, feleğin çemberinden geçmiş eski bir askerdi. Hemen ayağa kalktı."
  },
  {
    "id": 444,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Kaleye yüz adım kadar yaklaştı. Arkasındaki kethüdâsıyla, genç tercüman koştular... Gür sesiyle haykırdı: [—] Hey bre Şalgo muhafızları![...] Ben, padişahımın dedesine sizin kralınızın memleketlerinden büyük yerler zaptetmiş, Bosna valisi Yahya Paşa'nın torunlarındanım. Ceddim Hamza Bali Bey, daha ondört yaşında iken sizin ordularınızı perişan etmiş, Viyana Muhasarası'nda, Viyenberg önünde şan almıştır."
  },
  {
    "id": 445,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Yağmur, hep ayni şekilde, devam ediyordu. Maria bir aralık: \"Nereye gidiyoruz?\" diye sordu. \"Bilmem!\" \"Hiç merak etmiyor musunuz[?]\" \"Ben size tâbiim[...] Nereye isterseniz!\" Çiy taneleriyle örtülmüş beyaz bir çiçek gibi nemli ve soluk yüzünü bana çevirerek: \"Pek yumuşak başlısınız... Sizin hiçbir fikriniz, bir arzunuz yok mu?\" Derhal dün akşamki sözlerini öne sürdüm: \"Sizden her hangi bir şey istemekten beni menetmiştiniz!\" Cevap vermedi."
  },
  {
    "id": 446,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Yarın gündüzün buluşacağız!\" \"Nerede?\" Aptal aptal yüzüne baktım. Bu hiç aklıma gelmemişti. Yalvarır gibi sordum[:] \"Beni bunun için mi çağırdınız[?]\" \"Tabii[...] Siz sahiden başka erkeklere benzemiyorsu nuz... Onların ilk işi evvelâ bu cihetleri sağlama bağla maktır."
  },
  {
    "id": 447,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "İçinden, \"Şunun başını vurdursam...\" dedi. Kapıcılara bağırmak için ağzını açacaktı. Ansızın vicdanının [-]neresi olduğu bilinmeyen bir yerinden gelenderin sesini işitti: \"İşte, sen de tabasbus, riya, tekâpu yollarından yükselenler gibi, serbest, düz, bir lafı çekemiyorsun[!] Sen de karşında mert bir insan değil, ayaklarını yalayan bir köpek, zilletinin altında iki kat olmuş bir maskara, bir rezil istiyorsun!\" Süzgün gözlerini açtı. Avucunda sıktığı kağıdı yanına koydu."
  },
  {
    "id": 448,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Sadrazam, Muhsin Çelebi'yi yemeğe de alıkoymak istedi. Muvaffak olamadı, giderken onu tâ sofaya kadar teşyi etti. 🙝🙟 [...]Altı ay içinde Muhsin Çelebi büyük çiftliğini, mandırasını, evini, dükkânını, bahçesini, bostanını rehine koydu[.] Tüccarlardan para topladı. Atlarını, hademelerini düzdü."
  },
  {
    "id": 449,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Arslan Bey'in atı duramıyor, şaha kalkıyor, sağa sola tepiniyor, kethüdâ dizgininden tutmaya çalışıyordu. Burcun tepesinden bir cevap verdiler. Tercüman tekrarladı: [—] \"Ne gibi şartlarla[?]\"diyorlar, beyim. Arslan Bey, deminkinden daha sert bir sesle haykırdı: — Şartım filan yok. Biz teslim olanın canına kıymayız."
  },
  {
    "id": 450,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Uzun boylu, iri pençeli, kalın bazulu, geniş omuzlu bir pehlivandı. On senedir bu karanlık in içinde ham demirden dövdüğü kılıç namluları bütün Anadolu'da, bütün Rumeli'de, serhat boylarında büyük bir nâm kazanmıştı. Hatta İstanbul[']da bile yeniçeriler, satın alacakları kamaların, saldırmaların, yatağanların üstünde \"Amel[-]i Ali Usta\" damgasını arıyorlardı. O, çeliğe \"çifte su\" vermesini biliyordu. Uzun kılıçlar değil, yaptığı kısacık bıçaklar bile iki kat olur, yine kırılmazdı."
  },
  {
    "id": 451,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Uzun çubuğunun dayalı durduğu yüksek sedire yıkılıverdi. Karşısında Tosun Bey, bir eli kalçasında, dinç ve levent duruyor, gülümsüyordu. Zavallı ihtiyar ağlamaya başladı[:] [—] Ne ağlıyorsun, Bey hazretleri[?] İhtiyar inledi: — bu fermanın ne yazdığını biliyor musun? Biliyorum: Benim kafamın kesilmesini yazıyor.."
  },
  {
    "id": 452,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Asıl \"ben\", otuz beş seneye yaklaşan ömrümde, ancak üç, dört ay kadar yaşamış, sonra, benimle alâkası olmıyan manasız bir hüviyetin derinliklerine gömülüp kalmıştım. Dün akşam, yatakta Maria ile karşı karşıyayken anla dım ki, benimle münasebeti olmıyan bu vücudu, bu kafayı taşımak, bundan sonra bana daha güç gelecektir. Bunları bir yabancıyı besler gibi doyuracağım[,] oradan oraya sürükliyeceğim ve daima merhamet ve istihfafla seyredeceğim[.] Gene dün akşam anladım ki, hayatımdan o kadın çıktık-, tan sonra, herşey hakikiliğini kaybetmiş; ben onunla bera ber, belki de daha evvel, ölmüşüm. Ev halkı bugün erkenden, hep beraber gezmeğe gittiler."
  },
  {
    "id": 453,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Mandaların yanında, uzun, büyük, gayet büyük, gayet kalın, gayet siyah, gayet müthiş bir topun korkunç bir ejderha gibi uzandığını gördüler. Safların arasında sevinç sadâları yükseldi. Herkes Arslan Bey[']in bir haftadır ne beklediğini şimdi anlıyordu[.] Demek bu top geliyormuş... 🙝🙟 Biraz sonra..."
  },
  {
    "id": 454,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Allah, insana kendi ahlakını vermek istemişti. İnsan, her mevcudun fevkinde idi. Kuyruğunu sallaya sallaya efendisinin pabuçlarını yalayan köpeğe tabasbus pek yakışırdı[;] ama, insana[...] Muhsin Çelebi, her türlü zilleti hazmederek ikbal tepelerine iki büklüm tırmanan maskara harislerden, izzetinefissiz kölelerden, zâhifeler gibi yerlerde sürünen mülevves esirlerden nefret ederdi. Hatta bunları görmemek için merdümgiriz olmuştu."
  },
  {
    "id": 455,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Parlak tuğları ürperen vezirlere ayrı ayrı baktı: — Haydi öyleyse... Bir cesur adam bulun, dedi. Hâcegân[']dan, Enderun[']dan, Dîvan'dan benim aklıma böyle gözü pek bir adam gelmiyor. Siz de düşünün bakalım. ..."
  },
  {
    "id": 456,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Şah İsmail, vezirleri, kumandanları aptallaşmışlar, hayretle bakıyorlardı. Sonra bu kıymettar kaftanın üzerine bağdaş kurdu. İnce dev, ejderha resimleri nakşolunmuş sivri kubbeyi, yaldızlı kemerleri çınlatan gür sadâsıyla: [—] Nâmesini verdiğim büyük padişahım, Oğuz Kara Han neslindendir[!] diye haykırdı, dünya yaratıldığından beri onun ecdadından kimse kul olmamıştır. Hepsi padişah, hepsi hakandır."
  },
  {
    "id": 457,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Nasıl?\" dedim. Kadın beni misafir odasına aldı: \"Ateşi var. Bu sefer sancıdan da bahsediyor![\"] Sonra, şikâyet eden bir sesle ilâve etti: [\"]Ah oğlum, kendine de hiç. dikkat etmiyor... Çocuk değil ki..."
  },
  {
    "id": 458,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Sonra süratlece vap verdim: \"Tabii... Tabii... Hem nasıl[!]\" \"O zaman da aynen böyle söylemiştiniz!\" \"Belki[...]\" Tekrar güldü. \"Fakat ben sizin anneniz olabilir miyim?\" \"O, hayır, hayır!\" \"Belki ablanız!\" \"Kaç yaşmdasmız?\" \"Böyle şey sorulur mu? Ama neyse, yirmi altı!..."
  },
  {
    "id": 459,
    "source": "Ömer Seyfettin - Forsa",
    "text": "Duramıyordu. Kalkan, kılıç istedi. Sonra geminin kıçında sallanan sancağı göstererek[:] [—] Şehit olursam bunu üzerime örtün[!] Vatan al bayrağın dalgalandığı yer değil midir? dedi."
  },
  {
    "id": 460,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Her emrinin icrasından sonra kır sakallı, çirkin, sıska suratını ekşiterek, mavi çukur gözleriyle onu tepeden tırnağa kadar süzer, \"Aklında tut, benim esirimsin!\" der gibi verdiği diyeti hatırlatırdı. Koca Ali susar, kalbinin yırtıldığını, göğsüne sıcak sıcak bir şeyler yayıldığını, kilitlenen çenelerinin çatırdadığını, şakaklarının attığını duyardı. Geceleri uyuyamıyor, gündüzleri uğraşırken, mandıraya gidip gelirken, salhânede koyunları yüzerken, müşterilere et keserken, [\"]Ne yapacağım, ne yapacağım[?]\" diye düşünüyor, hiçbir şeye karar veremiyordu. Dünyada kimseye eyvallah etmeyerek kanaatle, gururunun saadeti için yaşamak isterken başına gelen bu bela neydi? Kaçmayı namusuna yediremiyordu."
  },
  {
    "id": 461,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Birdenbire gözlerini kapadı, büyük bir dermansızlık hissediyormuş gibi, başı arkaya dayandı, du yulur duyulmaz bir sesle: \"Ah Raif!...\" dedi. \"Ne var?\" Biraz kendini topladı. Çabuk çabuk nefes alarak[:] \"Hiç!\" dedi, \"Bugün yanımdan ayrılmanı istemiyo rum[...] Neden biliyor musun? Dün akşam anlattığın şey lerin, sen gider gitmez, kafama hücum edeceklerini, bem bir dakika bile rahat bırakmıyacaklannı zannediyorum...\" \"Bilsem anlatmazdım!\" dedim."
  },
  {
    "id": 462,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Niçin daima biz kaçacağız ve siz kovalıyacaksınız?. Niçin daima biz\" teslim olacağız ve siz teslim ala caksınız? Niçin sizin yalvarışlarınızda bile bir tahakküm[,] bizim reddedişlerimizde bile bir aciz bulunacak[?] Çocuk luğumdan beri buna daima isyan ettim, bunu asla kabul edemedim. Niçin böyleyim, niçin diğer kadınların farkı na bile varmadıkları bir nokta bana bu kadar ehemmi yetli görünüyor?"
  },
  {
    "id": 463,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Sonra... Herşeyin bittiğini anla yınca, bu çehreyi görmekten ve tasavvur etmekten büyük bir dikkatle kaçmıştım. Buna dayanamıyacağımı biliyor lemde bile olsa[,] bana bütün sükûnumu kaybettirecek ka dar kuvvetli ve tesirliydi[.] Ancak, şimdi, bütün eski günleri ve hâtıraları, hiçbir heyecan duymıyacağımdan emin olarak, bir kere daha yâdetmek isteyince, onun çehresini aramış, fakat bulama mıştım... Ve bende bir resmi bile yoktu..."
  },
  {
    "id": 464,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "O kadar çok teşekkür ediyorsunuz ki!\" \"Biz şarklılar çok kibar insanlarızdır... Ne düşünüyordum biliyor musunuz? O adam sizi öptü ve ben hiç kıs kanmadım[?]\" \"Sahi mi[?]\" \"Ve niçin kıskanmadığımı merak ediyorum!\" Uzun uzun bakıştık. İtimatla, birbirimizi arıya arıya bakıştık. \"Bana biraz da kendinizden bahsetsenize!\" dedi."
  },
  {
    "id": 465,
    "source": "Ömer Seyfettin - Falaka",
    "text": "\"Falaka yasak olmuş...\" diyorlardı. Sözde kaymakam bey yasak etmiş!.. Dayak korkusu kalkınca[,] biz[,] kırk çocuk, öyle azdık, öyle kudurduk ki[...] Ne yaptığımızı bilmiyor, artık hocayı hiç dinlemiyor, yüzüne leblebi atıyor, minderine iğne koyuyor, pabuçlarını saklayıp onu saatlerce arattırıyor, yalvartıyorduk. Dayaksız bizi okutamayacağını anlayan Hoca Efendi, nihayet yine bir gün falakayı çıkardı."
  },
  {
    "id": 466,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Arslan Bey, daha ziyâde yaklaşıp elleriyle yoklamalarına, daha yakından görmelerine müsaade ettiğini söyledi. Mağrur kumandan, kahraman asilzâdeler, cesur şövalyeler, büyük topun etrafına toplandılar. Bir elini hançerinin elmas sapına dayayan Arslan Bey[,] öteki eliyle, gülümseyerek palabıyıklarını büküyor, arkasındaki kethüdâ, başını kaşıyarak gülmekten katılıyor, tercüman aptallaşıyordu[.] Yirmi adım uzakta duran mızraklı nöbetçiler de gülüşüyorlardı. Esirler topa ellerini sürdüler."
  },
  {
    "id": 467,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Hem cesur, hem fâzıldı! Seferlerde sedefli curayla kahramanlık destanları söyler; sulh zamanında gayet çelebice hikmetlerle dolu gazeller, kasideler yazardı. Kılıç kabzasının nasırlattığı elinde[,] kalem yabancı durmuyordu[.] Halkın ağzında kendisine dair birçok efsaneler dolaşırdı. Babasının bir emektarı onu büyütmüştü; haksız yere kafası kesilmiş bir beyin oğlu idi."
  },
  {
    "id": 468,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Tarhlarını yabanî otlar bürümüş. Bahçesinin demir kapısında büyük bir \"Kiralıktır\" levhası asılıydı. Bekçi başını salladı: [—] Geç efendim, geç![...] Orası size gelmez. Niçin canım?"
  },
  {
    "id": 469,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Hemen dışarı çıkıp kapının önünde onu bekle meli miydim?... Ne maksatla?... Onunla bir kelime bile ko nuşmadığım halde, yolunu bekleyip: \"Size evinize kadar refakat edebilir miyim[?]\" dersem hakkımda ne hüküm verirdi[?]. Bana bir parça alâka gös termesine böyle en beylik bir zampara cümlesiyle mi mu kabele edecektim? En kibar hareketin, hemen çıkıp gitmek ve yarın ak şam gene gelmek olduğuna hükmettim."
  },
  {
    "id": 470,
    "source": "Ömer Seyfettin - Yüksek Ökçeler",
    "text": "Bu yüksek ökçelerle merdivenleri takır takır bir hamlede iner, ayağı burkulmadan bir aşağı, bir yukarı koşar dururdu. Nihayet bir baş dönmesi geldi. Çağırdığı doktor ilaç filan vermedi[:] [—] Bütün rahatsızlığınıza sebep bu ökçelerdir, hanımefendi dedi, onları çıkarın. Rahat, yünden, yumuşak bir terlik giyin. Hiçbir şeyiniz kalmaz."
  },
  {
    "id": 471,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Sol elini kolumun üzerine şöylece bırakıvermişti. Biraz kalkık duran şahadet par mağı ilerideki bir noktayı işaret ediyormuş gibi mânalıydı. Tekrar yüzüne baktığım zaman kalın ve biraz dağı nık kaşlarını[,] bir şey düşünüyor gibi[,] kaldırmış olduğunu gördüm[.] Gözkapaklarmınince, mavi damarları belli oluyordu. Siyah ve gür kirpikleri hafifçe titremekte idi ve bunların üzerinde minimini birkaç yağmur damlası par lıyordu."
  },
  {
    "id": 472,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Köşkünün perili olduğunu hiç saklamazdı. Kapıyı kendi açtı. Bekçi,Sermet Bey[']in evi gezmek istediğini söyledi: [—] Pekâlâ, buyurun! Dedi. Önlerine düştü."
  },
  {
    "id": 473,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Bana teslim teklif etmesin. Bir askere bundan büyük hakaret olamaz. O nasıl harp adamı ise[,] ben de harp adamıyım[.] Ya ölürüm, ya galip gelirim. Ama, görüyorum ki, benim işim bitti."
  },
  {
    "id": 474,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bir an kadar onun yüzünün bana yaklaştığını, göz lerinin, o zamana kadar gördüklerimden çok daha sıcak bir ifadeyle, beni âdeta kucakladığını gördüm. Yüzümün bir kaç santim ilerisine kadar yaklaşan bu saadet karşısında kalbim duracak gibi oldu. Fakat o birdenbire ve o’dukça sert bir hareketle ellerini çekti ve doğruldu, \"Siz nerede oturuyorsunuz[?]\" \"Lützow caddesinde!\" 90 KÜRKMANTOLUMADONNA \"Uzak değilmiş![...] Şu halde yarın öğleden sonra gelin beni buradan alın!\" \"Hangi dairede oturuyorsunuz!\" \"Ben sizi pencerede beklerim. Yukarı çıkmanıza hacet yok!\" Kapının üzerinde duran anahtarı çevirerek içeri girdi."
  },
  {
    "id": 475,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Buraya gelindiği günden beri askere istirahat ettiren Arslan Bey, her sabah erkenden atına biniyor, tek başına gerilerdeki ormanların içine dalıyor, saatlerce kalıyor, gülerek dönüyor: — Hava bozmayacak mı? Ah, biraz sis olsa... Diye gözlerini gökten[,] kalenin sallanan bayrağından ayıramıyordu[.] İşte kethüdânın getirdiği mektupta Ali Paşa da, teklifini kabul ediyordu. Onunla birleşince ordusu yedibin kişi kadar olacaktı."
  },
  {
    "id": 476,
    "source": "Ömer Seyfettin - Kaşağı",
    "text": "Babam pek sertti. Bir bakışından ödümüz kopardı. Hasan[']a dedi ki: [—] Eğer yalan söylersen seni döverim[!] Söylemem. Pekala, bu kaşağıyı niye kırdın?"
  },
  {
    "id": 477,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Her hangi bir şekilde talepleri reddedildiği zaman düştükleri şaşkınlığı görmek, küstah ça gururlarını anlamak için kâfidir. Kendilerini daima bir avcı, bizi zavallı birer av olarak düşünmekten asla vaz geçemiyorlar. Bizim vazifemiz sadece tâbi olmak[,] itaat et mek, istenilen şeyleri vermek[...] Biz isteyemeyiz, kendili ğimizden bir şey veremeyiz... Ben bu ahmakça ve küstah ça erkek gururundan tiksiniyorum."
  },
  {
    "id": 478,
    "source": "Ömer Seyfettin - Kaşağı",
    "text": "Dadaruh şaşırdı, kırılmış kaşağı meydana çıkınca, babam bunu kimin yaptığını sordu. Dadaruh: — Bilmiyorum, dedi. Babamın gözleri bana döndü, daha bir şey sormadan[:] [—] Hasan dedim. Hasan mı? Evet, dün Dadaruh uyurken odaya girdi."
  },
  {
    "id": 479,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Arslan Bey'in arkasına takıldılar. Büyük topa doğru yürüdüler. Yaklaşınca Arslan Bey[:] [—] İşte, dedi, sizin böyle topunuz var mı[?] Düşman kumandanı tercümanla cevap verdi: — Hayır. Niçin yapmıyorsunuz?"
  },
  {
    "id": 480,
    "source": "Ömer Seyfettin - Yüksek Ökçeler",
    "text": "Hatice Hanım, bu levhanın rezaletini görmemek için hemen gözlerini kapadı. Fakat kulaklarının kapağı olmadığı için, konuştuklarını duymamazlık edemedi. Mehmet diyor ki: [—] Ülen Gülter, artık sen şeker filan getirmeyon[?] Gülter: — Her taraf kitli, ne yapayım? Diyordu."
  },
  {
    "id": 481,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Palangada hizmetinden istifade olunamaz.\" diye geriye göndermeye mecbur oldu. Aradan epey zaman geçti. Serhadde değil, hatta Grijgal hisarında bile herkes Kuru Kadı[']yı unuttu[.] Yalnız yazdığı destan okunuyor, hiç unutulmuyordu. 🙝🙟 On iki sene sonra..."
  },
  {
    "id": 482,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bunları hiç öğrenmemek daha iyi olmaz mıydı? Aradan bu kadar seneler -tam on sene, hat tâ biraz da fazlageçtikten sonra öğrenmenin ne faydası vardı?.. Hâlâ sokak ortasında durduğumuzu farkettim ve: [\"]Gelin bir yerde oturalım[;] Birbirimize soracak şeyler vardır[...] Sizi Ankarada gördüğüme hâlâ hayret ediyo rum!\" dedim. \"Evet, bir yerde otursak ne iyi olurdu, fakat bizim tren vakti geliyor, bir saatten az kalmış..."
  },
  {
    "id": 483,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Eski, fakat oldukça iyi muhafaza edilmiş mobilyalar ve güzel bir meşe karyola ilk bakışta göze çar pıyordu. Odanın ortasında kımıldamadan duruyordum. Kürk mantosunu çıkarıp bir kenara bırakırken bana bir iskemle göstererek: [\"]Otursana[!][\"] dedi. Sonra kendisi yatağın kenarına ilişti. Büyük bir sü ratle iskarpinlerini, çoraplarını çıkardı, entarisini başın dan sıyırıp bir iskemleye attı ve yorganın içine girdi."
  },
  {
    "id": 484,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Çoraplarını, mestini giydi. Cübbesini omuzuna aldı. Hep bir ağızdan[,] kerrat cetvelinin tegannî sinden sonra ilâhiye başladık[.] Ben nihayete doğru yanımdaki çocuğu dürterek kalktım. O da kalktı."
  },
  {
    "id": 485,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Adımlarının çıkardığı sesten kim olduğunuta yin etmiye çalışırım ve bu şekilde, nasıl geldiğimi anla madan yol bitiverir... Demek bu akşam sîzdiniz ha?.. Halbuki ben mütereddit adımlarınızdan yaşlı ve evli bir adam zannetmiştim.[\"] Birdenbire gözlerimin içine bakarak: \"Yolumu mu beklediniz[!]\" dedi. \"Evet.\" \"Bu akşam da ayni yerden geçeceğimi nasıl tahmin ettiniz? Burada çalıştığımı biliyor muydunuz?\" \"Hayır, fakat ne bileyim..."
  },
  {
    "id": 486,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Niçin ha yatta önüme çıkan her yeni yola adım atmaktan bu kadar çekiniyor, her yaklaşan insanı, bana fenalık etmeğe geli yormuş gibi, endişe ile karşılıyordum? Bazan kendimi bir müddet için unuttuğum, bir insanda kendime yakın taraflar bulduğum oluyordu. Fakat kafama, çıkmaz bir şekilde yerleşmiş olan o korkunç hüküm, derhal kendini gösteriyor[;] [\"]Unutma, unutma ki, o sana daha yakındı[...] Buna rağ men böyle yaptı...\" diye beni hakikate davet ediyordu. Herhangi bir kimsenin bana bir adıma kadar yaklaştığını görüp ümitlere düşsem, hemen kendimi topluyor: \"Hayır, hayır, o bana daha çok yaklaşmıştı..."
  },
  {
    "id": 487,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Onun benden bir cevap almadan gitmek niyetinde olmadığını görünce: \"Evet!\" dedim, \"Güzel bir resim...\" Sonra, neden bil mem, bir yalan söylemek, bir nevi izahat vermek lüzumunu hissederek mırıldandım: \"Anneme pek benziyor da...\" \"Ha, demek onun için böyle gelip saatlerce bakıyor sunuz!\" \"Evet!\" \"Anneniz öldü mü?\" \"Hayır!\" Sözüme devam etmemi istiyormuş gibi bekledi. Ben, başım hep önümde, ilâve ettim: \"Çok uzakta bulunuyor!\" \"Ya!... Nerede[?]\" \"Türkiyede!\" \"Türk müsünüz[?]\" \"Evet!\" \"Ecnebi olduğunuzu anlamıştım!\" Hafif bir kahkaha attı. Gayet serbest bir tavırla ya nıma oturdu. Bacaklarını birbirinin üstüne atınca eteği dizkapaklarınm gerisine kadar açıldı ve ben yüzüme her zamanki gibi ateş bastığını farkettim."
  },
  {
    "id": 488,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Fakat tahmin etmemiştim!\" \"Evet, Yahudiyim, Babam Praglı idi. Daha beri doğ madan katolik olmuş!\" \"Şu halde din itibariyle hıristiyansmız!\" \"Hayır... Yani benim hiçbir dinle alâkam yok[!][\"] Bir hayli yürümüştük. O sözüne devam etmedi. Ben de başka bir şey sormadım."
  },
  {
    "id": 489,
    "source": "Ömer Seyfettin - Kütük",
    "text": "... Hepsi iki adım ayrılınca sisin içinde görünmez oldular. Arslan Bey, tepinen atına binince yuları tutan kethüdâsına[:] [—] Sen de koş, yanına bir adam al, gerideki Değirmenli Çiftliği[']nde biriktirdiğim elli mandayı hemen buraya sür. Burca giden yolun yanında hazır tut... Orada beni bekle."
  },
  {
    "id": 490,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Hoca Efendi gürültüden uyanınca işi anladı. Enfiyesini kimin çaldığını sordu. Bir ağızdan ahenkle, [\"]Bilmiyoruz, bilmiyoruz[!][\"] dedik. \"Hepinizi falakaya çekeceğim.\" \"Bilmiyoruz, bilmiyoruz!\" \"Kimse söylemeyecek mi?\" \"Bilmiyoruz ki, bilmiyoruz ki...\" \"Bilmiyor musunuz, pekâlâ! Necip, git camiden kalfayı çağır, çabuk.\" Beş dakika sonra kalfa geldi."
  },
  {
    "id": 491,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Söy leyin bakayım, şimdi benden ayrılıp gidiyordunuz değil mi?\" \"Evet!\" \"Bir daha beni Anlantik’te aramıyacaktmız... Öyle ko nuşmuştuk!\" \"Evet! Yarın gündüzün buluşacağız[!]\" \"Nerede[?]\" Aptal aptal yüzüne baktım. Bu hiç aklıma gelmemişti. Yalvarır gibi sordum: \"Beni bunun için mi çağırdınız?\" \"Tabii..."
  },
  {
    "id": 492,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Onunla bir aşk sahnesi tasavvur etmek değil, karşı karşıya, iki dost gibi oturmayı düşünmek bile elim den gelmiyordu. Buna mukabil, gidip o tabloyu seyret mek, bana bakmadığına emin olduğum o gözlere saatlerce dalmak arzusu gitgide artmakta idi. Paltomu sırtıma geçirerek tekrar serginin yolunu tuttum[;] ve bu hal, gün lerce devam etti[.] Her gün, daima öğleden sonra oraya gidiyor, koridor lardaki resimlere bakıyormuş gibi ağır ağır, fakat büyük bir sabırsızlıkla asıl hedefine varmak istiyen adımlarımı zorla zaptederek geziniyor; rasgele gözüme çarpmış gibi dalıyor, tâ kapılar kapanmcıya kadar orada bekliyordum. Sergi bekçilerinin ve birçoğu hergün orada bulunan res samların artık beni bellemiş bulunduklarını farketmiştim."
  },
  {
    "id": 493,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Fakat bu esnada ya hiç konuşmaz yahut da havadan sudan, Ankaranın pahalılığından, İsmetpaşa mahallesindeki kaldırım ların bozukluğundan bahsederdik. Evine, çoluk çocuğuna dair bir şey söylediği nadirdi. Arasıra[:] [\"]Bizim kız riyaziye den gene kırık numara almış[!]\" der, sonra hemen lâfı de ğiştirirdi. Ben de bu hususta bir şey sormaktan çekiniyordum. Kendisini ilk ziyaret ettiğim akşam karşılaştığım aile efradı, üzerimde pek iyi bir tesir bırakmamıştı."
  },
  {
    "id": 494,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Siyah gözlerini kur naz bir tecessüsle yüzümde gezdirerek sordu: \"Sizi niçin geri çağırdığımı hâlâ anlamadınız mı?\" Anladım, anladım... İşte geliyorum, diye kollarına atı lacaktım. Fakat içimde[,] bu histen çok daha kuvvetli bir yıkılma[,] bir şaşkınlık, hattâ bir bulantı duydum[.] Kıpkır mızı kesilerek önüme baktım. Hayır, hayır!"
  },
  {
    "id": 495,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Evde anneme sordum. Başını salladı. Gözlerini açtı[:] [\"]Çok büyük yemin[!]\" dedi. \"Yalan yere bu yemini eden çarpılır mı?\" \"Hayır.\" \"Ya ne olur?\" \"Daha fena.\" \"Nasıl?\" \"Karısı boş düşer.\" İyice anlamadım. Ama bu yeminin dehşetini mektepte çocuklara etrafıyla söyledim."
  },
  {
    "id": 496,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Hiddetle tekrar sordu: \"Ne yapıyordunuz?\" \"Şey... Efendim...\" Hoca Efendi kekeliyordu. \"Ne[?]\" \"Şart etmiştim.\" \"Ne demek?\" \"Hapşıran için[...]\" \"Ne hapşıranı?\" \"Eşek hapşırdı.\" \"Eşek mi hapşırdı?\" \"! ! !\" Çocuklar, hem hapşırıyor, hem gülüşüyorlardı."
  },
  {
    "id": 497,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Küçük, uçlara doğru sivrilen ve kemiklerinin gayetince olduğu hissini veren parmakları vardı ve bunların ucu, üşümüş gibi, kır mızı idi. Biraz evvel avucumda tuttuğum ellerinin haki katen soğuk olduğunu hatırladım. Aklımca bundan istifa de etmek istiyerek[:] 80 KÜRKMANTOLUMADONNA [\"]Elleriniz nekadar soğuktu[!]\" dedim. Tereddütsüz cevap verdi: \"Isıtın!\" Ve her ikisini birden uzattı. Yüzüne baktım."
  },
  {
    "id": 498,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Kendilerinden başka dışarıda bir gezeni yakaladılar mı, dayaktan canını çıkarırlardı. Ama, ona fena muamele etmediler. Dizdarbaşı[:] [—] Ali Usta, sen deli mı oldun[?] dedi. Yok..."
  },
  {
    "id": 499,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Kaldırdığı, ağır satırı öyle bir indirdi ki... O anda kopan kolunu tuttu. Gördüğü şeyin dehşetinden gözleri dışarı fırlayan Hacı Kasap[']ın önüne: [—] Al bakalım, şu diyetini verdiğin şeyi! diye hızla fırlattı. Sonra esvabının kolsuz kalan yenini sıkı bir düğüm yaptı."
  },
  {
    "id": 500,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bu çehreyi veya benzerini hiçbir yerde, hiçbir zaman gör mediğimi ilk andan itibaren bilmeme rağmen, onunla aramızda bir tanışıklık varmış gibi bir hisse kapıldım. Bu soluk yüz, bu siyah kaşlar ve onların altındaki siyah gözler; bu koyu kumral saçlar ve asıl, masumluk ile iradeyi, sonsuz bir melâl ile kuvvetli bir şahsiyeti birleştiren bu ifade, bana asla yabancı olamazdı. Ben bu kadını yedi ya sımdan beri okuduğum kitaplardan[,] beş yaşımdan beri kurduğum hayal dünyalarından tanıyordum[.] Onda Halit Ziyanın Nihalinden, Vecihi Beyin Mehcuresinden, Şöval ye Büridan’ın sevgilisinden ve tarih kitaplarında okudu ğum Kleopatra’dan, hattâ mevlût dinlerken tasavvur etti ğim, Muhammedin annesi Âmine Hatundan birer parça vardı. O benim hayalimdeki bütün kadınların bir terkibi, bir imtizacı idi."
  },
  {
    "id": 501,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Yaşıyorlardı. Ve ben, kafamın içine ve yalnız kendi ruhuma kapanmakla onların üstünde de ğil, altında bulunduğumu anlıyordum. Şimdiye kadar zan nettiğim gibi[,] kütleden ayrılmanın bir hususiyet[,] bir faz lalık değil, bir sakatlık demek olduğunu hissediyordum[.] Bu insanlar dünyada nasıl yaşamak lâzımsa övle yasıyorlar, vazifelerini yapıyorlar, hayata birşey ilâve edi yorlardı. Ben neydim?"
  },
  {
    "id": 502,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Maria: \"Hadi kalkalım, sessiz bir yerde oturalım... Vakit da ha erken!\" dedi. Sonra dikkatle yüzüme bakarak: \"Yoksa sizi sıkıyor muyum[?].[-]. Boyuna konuşuyor ve sizi sabahtan beri oradan oraya sürüklüyorum. Kadınların bu kadar sokulgan olması iyi bir şey değil..."
  },
  {
    "id": 503,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Korkudan sapsarı kesilen tuğlu kumandan, altın kılıçlı asilzâdeler, zırhlı şövalyeler, Arslan Bey'in önünde dize gelmişlerdi. Silahları alınan düşman ikişer ikişer bağlanıyor, takım takım ordugâhın arkasına götürülüyordu. Kalenin içindeki kıymetli şeylerden bir dağ ortada kabarıyor[;] al yeşil bayraklarla kalenin tepesine dolan askerler bağırışıyorlar, aralarındaki dervişler, bedenlerden sarkarak ezan okuyorlar, tekbir çekiyorlardı[.] Teslim olan kumandanla erkânına Arslan Bey: — Korkmayınız. Hayatınız bağışlanmıştır."
  },
  {
    "id": 504,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bunu farkettiğim için bütün kuvvetimle kendime hâkim olmıya çalıştım. Gördüğümden müsterih olmuş gibi bir tavırla hafifçe başımı salladım. Sonra, sol tarafım da âdeta başbaşa vermiş duran kadınlara dönerek, zoraki bir gülümseme ile[:] \"Korkulacak bir şey yok herhalde[...] Atlatacak inşallah!\" dedim. Hasta gözlerini araladı, tanıyamamış gibi bana bir müddet baktı."
  },
  {
    "id": 505,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bunun için hem kendi hakkımdaki, hem onun hakkındaki hükümlerimde, hertürlü gizli düşünceden ve hesaptan uzak, âdeta insafsızdım. Onu yollarda beklediğim gece lerde kafama hücum eden yığın yığın kandırıcı cümleler den hiçbiri aklıma gelmiyordu ve ben bunları aramıyordum. İçimde, basit bir [\"]hikâye etmek ihtiyacı[\"] ndan baş ka hiçbir alâka yoktu[.] Vakaları bana olan nisbetleri ba kımından değil, kendi ehemmiyetleri bakımından kıymet lendiriyordum. Ve o, en küçük bir hareket bile yapmadığı halde, beni bütün dikkatiyle dinliyordu."
  },
  {
    "id": 506,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Acaba içinde ne vardı? Dehşetle rüyasına giren bu ferman ne idi? Mutlaka inzibata dair bir emr[-]i şerif[...] Çünkü harp yukarıda idi. Haydutlar, cephâne, yahut yollar ve mekkâreler için bir şey olmak ihtimali vardı."
  },
  {
    "id": 507,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Daha ıslaktı. Bir ağalarının, bir de mücrimin yüzüne bakıyorlardı. Dizdarbaşı hiddetlenerek sordu[:] [—] Çaldığın paraları nereye sakladın[?] Ben para çalmadım. İnkâr etme, işte kuzunun derisi dükkânında çıktı."
  },
  {
    "id": 508,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Karşısında Tosun Bey, bir eli kalçasında, dinç ve levent duruyor, gülümsüyordu. Zavallı ihtiyar ağlamaya başladı: — Ne ağlıyorsun, Bey hazretleri? İhtiyar inledi[:] [—] bu fermanın ne yazdığını biliyor musun[?] Biliyorum: Benim kafamın kesilmesini yazıyor.. ..."
  },
  {
    "id": 509,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Arasıra, mutat sessizliğimden ayrılarak, Herr Döppke ile yanındaki işsiz zabitlere, Almanyanm nasıl kurtarılacağına dair, Anadolu harekâtı hakkında bildiklerime dayanarak, tav siyelerde bulunuyordum... Şu halde ortada sıkılacak bir şey yoktu. Mânâsız [-] hattâ mânalı da olsa ne çıkardı [-] bir resim, muhayyel vakalara dayanan bir roman, hayatımda ne diye rol oynuyordu[...] Hayır, artık tamamen değişe cektim... Buna rağmen akşam olup da ortalık kararınca içime sebepsiz bir hüzün çöktü."
  },
  {
    "id": 510,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Sağ tarafta 20 haziran 1933 tarihi ve hemen bunun altında şu satırlar vardı: \"Dün başımdan garip bir hâdise geçti ve bana onse ne evvelki başka birtakım hâdiseleri yeniden yaşattı...\" Alt tarafını okuyamadım. Raif Efendi tekrar kolunu çıkarmış ve elimi tutmuştu. \"Okuma[!]\" dedi ve başiyle odanın karşı tarafını işaret ederek mırıldandı: \"Onu şuraya at[!][...]\" Gösterdiği tarafa baktım. Mika levhaların arkasında parlıyan kızıl gözleriyle demir sobayı gördüm. \"Sobaya mı?\" \"Evet!\" Bu anda merakım büsbütün arttı."
  },
  {
    "id": 511,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Fakat bunu gören hasta, elini yataktan dışarı çıkararak bileğimden yakala dı ve: \"Sen gitme!\" dedi. Kadınlar biraz şaşırmıştılar. Neclâ[:] \"Babacığım, kolunu çıkarmasana![...]\" diye söylendi. Raif Efendi: \"Biliyorum, biliyorum!\" demek istiyen bir hareketle çabuk çabuk başını salladı ve onlara, çıkma ları için, tekrar işaret etti. İki kadın da yüzüme sorucu gözlerle bakarak odayı terkettiler."
  },
  {
    "id": 512,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Askerler, sallanan siyahlı beyazlı bayrağı ile Şalgo'yu bir hayal gibi gördüler. Sesler kesildi. Şimalden esen bir rüzgar dumanları dağıtıyor[;] gerilere, ormanlara doğru sürüyordu[.] Artık herkes birbirini görüyordu. Kaleye pek yaklaşılmıştı."
  },
  {
    "id": 513,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Yalnız yazdığı destan okunuyor, hiç unutulmuyordu. 🙝🙟 On iki sene sonra... Zigetvar[']ın zaptı akşamı yaralılar toplanırken meşhur kahraman Deli Hüsrev[']in —bir gülleyle parçalanmış— naaşı yanında, uzun boylu, ak saçlı, ak sakallı, yeşil cübbeli bir şehit buldular. Kıbleye karşı yüzükoyun uzanmış yatan bu şehidin büyük, yeşil sarığı henüz bozulmamıştı. Üzerinde hiçbir silah yoktu."
  },
  {
    "id": 514,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Hâlâ titriyordu. Palanganın içinde Deli Hüsrev'in menzilinden geçerken durdu. Kulak verdi[;] ağlıyor mu[,] inliyor mu diye[...] Hayır, Deli, şıkır şıkır, atını kaşağılıyor, keyifli bir türkü söylüyordu. Seslendi: — Hüsrev!.."
  },
  {
    "id": 515,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "İnsanlar arasındaki münasebetleri tan zim eden âmiller nekadar gülünç, nekadar dıştan, nekadar boş ve bilhassa asıl insanlıkla nekadar az alâkası olan şey lerdi.. Dün akşamdan beri ne Hamdi, ne ben hakikatle de ğişmiş değildik; neysek gene oyduk; buna rağmen onun bana dair, benim ona dair öğrendiğimiz bazı şeyler, bazı küçük ve teferruata ait şeyler bizi ayrı istikametlere alıp götürmüşlerdi... İşin asıl garip tarafı[,] ikimiz de bu deği şikliği olduğu gibi kabul ediyor[']ve tabiî buluyorduk[.] Be nim kızgınlığım Hamdiye değil, kendime de değil, sadece burada bulunuşuma idi. Odanın tenhalaştığı bir anda arkadaşım başını kal dırarak: \"Sana bir iş buldum!\" dedi."
  },
  {
    "id": 516,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Biraz şaşırdı: \"Kapıya kadar peşimden gelen siz miydiniz?\" \"Evet. Demek farkına vardınız!\" \"Tabii... Bir kadın böyle şeylerin farkına varmaz olur mu[?]\" \"Fakat arkanıza bakmadınız!\" \"Hiçbir zaman dönüp bakmam[...]\" Bir müddet sustu. Bir şeyler düşündü, sonra çapkınca bir gülüşle: \"Bu da benim bir nevi eğlencemdir!\" dedi. \"Sokakta birisinin arkamdan geldiğini hissettim mi bütün tecessü sümü yenerek, başımı çevirmemekte ısrar ederim ve bu sırada kafamdan birçok ihtimaller geçiririm: Peşimdeki genç olabilir, ihtiyar ve çökmüş’bir kadın avcısı olabilir, zengin bir prens, fakir bir talebe, hattâ sarhoş bir serseri de olabilir."
  },
  {
    "id": 517,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Merde, namerde muhtaç olmayacak kadar bir serveti vardı. Çamlıca ormanının arkasındaki büyük mandıra ile büyük çiftliğini işletir, namusuyla yaşar, kimseye eyvallah etmezdi. Fukaraya[,] zayıflara, gariplere bakar[;] sofrasında hiç misafir eksik olmazdı[.] Dindardı. Ama mutaassıp değildi."
  },
  {
    "id": 518,
    "source": "Ömer Seyfettin - Ferman",
    "text": "O kadar karanlıktı ki... Dizgini boş bırakıyor, geldiği yollardan atının sevk-i tabiisiyle dönebiliyordu. Meşaleleriyle[,] ordugâh uzaklardan görünmeye başladı[.] Karanlığın, yağmurun, rüzgârın içinde at, âdi adımlarla yürüyordu. Kimdir o?"
  },
  {
    "id": 519,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "\"Ölsek ne olacak sanki... Onlara ne? Ben onlar için neyim[?][...]\" sonra, daha acı ve insafsız bir tavırla ilâve etmişti: \"Ben onlar için hiçbir şey değilim[...] Hiçbir şey değil dim... Senelerden beri ayni evde beraber yaşadık..."
  },
  {
    "id": 520,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Yalnız müşterilere karşı değil, kendi siyle alış verişi olmıyan her kadına karşı... Muhakkak ki, onun kabaresinde çalışmasam, bana bir baron kadarince kur yapar ve beni kibarlığına hayran ederdi. Fakatken disinden para alan insanlara karşı birdenbire değişiyor ve buna galiba [\"]Meslek ahlâkı[\"] diyor[.] \"Kazanç ahlâkı\" dese daha doğru olacak. Çünkü insafsızlığa ve bazan ter biyesizliğe kadar varan kabalığı, müessesenin ciddiyetini korumak arzusundan ziyade, aldatılmak korkusundan ile ri geliyor."
  },
  {
    "id": 521,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Çocuklar gülmekten katılıyorlar, \"Karınız boş düşer! Karınız boş düşer!..\" diye bir ağızdan tekrarlıyorlardı. Çocuklara mı, eşeğe mi, neye kızdığını bilmeyen Hoca Efendi, gayr[-]i ihtiyâri, [\"]Yıkınız[!]\" emrini verdi. Belki yirmi çocuk Abdurrahman Çelebi'nin başına üşüştü. Uzun bir uğraşıdan sonra yere yatırdık."
  },
  {
    "id": 522,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "\"Maria’yı pek az tanıdığınızı söylüyordunuz!\" \"Evet... Fakat üzerimde çok kuvvetli bir tesir bırak mış olacak... Tablosu çok hoşuma gitmişti[...]\" \"İyi bir ressamdı!\" İçimde birdenbire beliren, fakat mahiyetini anlıyamadığım bir endişeyle sordum: \"Ressamdı mı dediniz[?] Şimdi değil mi?\" Kadın, etrafına bakınarak, küçük kızı aradı, onun va gona girip oturmuş olduğunu görünce, başını bana doğru eğerek: \"Tabii değil...\" dedi. \"Çünkü artık yaşamıyor!\" \"Nasıl?\" Bu kelimenin ağzımdan bir ıslık gibi çıktığını duydum."
  },
  {
    "id": 523,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "\"Tam bizim aradığımız adam işte...\" dedi. Bu kadar pervasız bir adam devletine, milletine yapılacak hakareti de çekemez, ölümden korkarak, göreceği hakaretlere eyvallah diyemezdi. Kavuğunu hafifçe salladı[:] [—] Seni Tebriz[']e elçi göndereceğiz. Muhsin Çelebi sordu: — Katınızda bu kadar nişancılar, kâtipler, hocalar var. Niçin onlardan intihâb etmiyorsunuz?"
  },
  {
    "id": 524,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Kadının eli yanaklarımda dolaştı: \" Ne oluyorsunuz? Neredeyse ağlıyacaksınızL Siz ha kikaten bir ablaya değil, bir anneye muhtaçsınız... Söy leyin bakayım, şimdi benden ayrılıp gidiyordunuz değil mi[?]\" \"Evet[!]\" \"Bir daha beni Anlantik’te aramıyacaktmız[...] Öyle ko nuşmuştuk!\" \"Evet! Yarın gündüzün buluşacağız!\" \"Nerede?\" Aptal aptal yüzüne baktım."
  },
  {
    "id": 525,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Neden korkuyordum? Maria da kendisine göre bir başka Herr Döppke bulmuş olabilirdi. Belki de hâlâ bekâr dı ve erkekten erkeğe koşarak, [\"]inanacak adam[\"] arıyordu[.] Herhalde benim çehremin hatlarını bile unutmuş olacaktı. Düşündüğüm zaman ben de onun çehresini hatırlıyamadım ve on seneden beri ilk defa olarak, ne benim onda, ne de onun bende resmimiz bulunmadığını farkettim..."
  },
  {
    "id": 526,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Ben onlardan cesaret aldım. Dedim ki: \"Hoca Efendi, bugün mektepte, 'Kim hapşırırsa şart olsun falakaya yıkacağım,' dediniz. Eğer Abdurrahman Çelebi[']yi affederseniz karınız boş düşer.\" Çocuklar ders gibi bir ağızdan ve ahenkle[:] \"Karınız boş düşer[!] Karınız boş düşer!..\" diye haykırışıyorlardı. Hoca Efendi bir an şaşırdı."
  },
  {
    "id": 527,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Gökte hiç yıldız yoktu. Arslan Bey, hademesinin tuttuğu billûr bardaktaki yakut suyu içti. Yeniden doldurulan çubuğunu çekiyor[,] kethüdâsıyla öteden beriden konuşuyordu[.] Konuşurken düşündüğü hep kendi planıydı. Yine göğe dalmıştı."
  },
  {
    "id": 528,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Öyle kaldılar. Kollarını çaprazlayarak yere bakan kale kumandanı titreyerek mırıldandı. Arslan Bey, tercümana baktı: [—] Ne diyor[?] \"Bu mertlik değil...\" diyor. Ona sor ki: \"Henüz bir kere patlamayan bir toptan korkarak hemen teslim oluvermek mi mertlik?\" Tercüman sordu."
  },
  {
    "id": 529,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Gözcüler kale bedenlerinin dibine kadar gidip geliyorlardı. Safların arasında, topçubaşının büyük bir lağım açtığı söyleniyordu. Askerler[,] zâbitlerinin emriyle[,] oldukları yerlerde bağdaş kurmuş bekliyorlar, gürültü ediyorlardı[.] Nihayet, Arslan Bey, terden sırılsıklam olmuş atı ile duman içinde harp sıralarının arasında, adım adım göründü. Her adımda: — Yiğitlerim!..."
  },
  {
    "id": 530,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Razı olduk. Nihayet, yirmi beşinci günü, onu kürküne sardım, koluna girerek merdi venlerden indirdim. Bir taksiyle evine getirdim, yukarı çıkarırken, şoför de bir kolundan tutarak yardım etti[;] bu na rağmen, kendisini soyup yatağına yatırdığım zaman bitkin bir haldeydi[.] Bu andan itibaren ona hakikaten yalnız ben baktım. İhtiyarca bir kadın öğleye kadar gelip evi temizliyor, bü yük çini sobayı yakıyor, bir kap hasta yemeği pişiriyordu."
  },
  {
    "id": 531,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Arslan Bey'in atı duramıyor, şaha kalkıyor, sağa sola tepiniyor, kethüdâ dizgininden tutmaya çalışıyordu. Burcun tepesinden bir cevap verdiler. Tercüman tekrarladı: [—] \"Ne gibi şartlarla[?]\"diyorlar, beyim. Arslan Bey, deminkinden daha sert bir sesle haykırdı: — Şartım filan yok. Biz teslim olanın canına kıymayız."
  },
  {
    "id": 532,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Vakit bulup cevap verememişti. Dregley kalesini sarıyordu. Muhâsaranın iptidâsından nihayetine kadar hazır bulunan kethüdâ, şimdi orada gördüklerini söylüyordu[;] bu kale gayet sarp, gayet dik, bir kayanın zirvesine yapılmıştı[.] Arslan Bey sordu: — Bizim kaleden daha yüksek mi? Daha yüksek beyim."
  },
  {
    "id": 533,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Canlı bir yıldırım gibi, dar ve bozuk sokaklardan geçti. Beyin konağı önünde atından atladı. Kendisini tanıyan kapıcılar, sipâhîler, askerler[:] [—] Tosun Bey! Tosun Bey! Diye koşuştular."
  },
  {
    "id": 534,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Biraz sükûnet bulunca: \"Ne oldun? Gördün mü, kendini üşüttün!\" dedim. Bütün yüziyle gülerek[:] \"Ah, o kadar eğlendim ki[!][...]\" dedi. Nerdeyse ağlıyacak diye korkuyor, onu bir an evvel evine götürüp bırakmayı bu sefer ben istiyordum. Yolun sonlarına doğru adımları dolaşmıya başladı."
  },
  {
    "id": 535,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Tam kapıdan çıkacağım sı rada, karşı evin bir odasında kira ile oturan bekârm rad yosu, Weber’in Oberon operası uvertürünü çalmağa baş ladı. Az daha elimdeki paketleri yere düşürecektim. Maria ile beraber gittiğimiz birkaç operadan biri de buydu ve onun Weber*e hususî bir muhabbeti olduğunu biliyordum[;] yolda, hep onun uvertürünü ıslıkla çalardı[.] Kendi sinden daha dün ayrılmış gibi taze bir hasret duydum. Kaybedilen en kıymetli eşyanın, servetin, her türlü dünya saadetinin acısı zamanla unutuluyor."
  },
  {
    "id": 536,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Daha çok sıkldım ve sustum. Sonra yatağa doğru sokuldum: Onu okşamak, aramızdaki buzları, daha ziyade kuv vetlenmeden kırmak istiyordum. O da doğruldu[,] ayaklarını aşağıya salladı ve sırtınaince bir hırka aldı[.] Hâlâ yü züme bakmakta devam ediyordu. Halinde daha ziyade yaklaşmama mâni olan bir şey vardı."
  },
  {
    "id": 537,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Zaten bu işi annemin yüzünden yapıyorum. Ona bakmıya mecburum ve bir sene zarfında yaptığım birkaçre simle geçinmek imkânı yok... Siz resimle uğraştınız mı[?]\" \"Bir parça!\" \"Neden devam etmediniz?\" \"İstidadım olmadığını anladım!\" \"İmkânı yok[...] Sizin resme nekadar istidadınız olduğu, sergide tabloları seyrederken yüzünüzün aldığı ifa deden belli idi... Cesaretim olmadığını anladım!"
  },
  {
    "id": 538,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Fakat kocamın sıcak memleket mahsulleri üzerinde ihtisası var. Bağdatta hurma üzerine iş yapıyor!\" \"Kamerun’da da hurma ticareti mi yapıyordu?\" Kadın, \"Pek münasebetsizsin!\" der gibi yüzüme baktı: \"Bilmiyorum, kendisine mektup yazın ve sorun! Ka dınları ticaret işlerine karıştırmıyor[!]\" \"Şimdi nereye gidiyorsunuz!\" \"Berline[...] Hem memleketi ziyaret; hem de...\" yanın da oturan soluk benizli çocuğu gösterdi: \"Hem de bu çocuk için... Biraz zayıf diye kışı bizim yanımızda geçirdi."
  },
  {
    "id": 539,
    "source": "Ömer Seyfettin - Kütük",
    "text": "... Kale kumandanı, gözlerini yerden kaldırıp cevap veremedi. Asilzâdeler[,] şövalyeler birbirlerinin yüzlerine bakmaya cesaret edemediler[;] âni bir ölüm darbesiyle vurulmuş gibi oldukları yerde donup kaldılar[.] Bir güllesiyle kaleyi yıkacak olan bu korkunç top, siyaha boyanmış, kocaman bir kütükten başka bir şey değildi!... Gelişmiş Özel karakterler Yardım Başlık Biçim Ekle Alaca karanlık içinde sivri, siyah bir kayanın müphem hayali gibi yükselen Şalgo burcu uyanıktı."
  },
  {
    "id": 540,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Korkudan sapsarı kesilen tuğlu kumandan, altın kılıçlı asilzâdeler, zırhlı şövalyeler, Arslan Bey'in önünde dize gelmişlerdi. Silahları alınan düşman ikişer ikişer bağlanıyor, takım takım ordugâhın arkasına götürülüyordu. Kalenin içindeki kıymetli şeylerden bir dağ ortada kabarıyor[;] al yeşil bayraklarla kalenin tepesine dolan askerler bağırışıyorlar, aralarındaki dervişler, bedenlerden sarkarak ezan okuyorlar, tekbir çekiyorlardı[.] Teslim olan kumandanla erkânına Arslan Bey: — Korkmayınız. Hayatınız bağışlanmıştır."
  },
  {
    "id": 541,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Hürriyette tazminat olarak daireden çekilmiş, ev alıp satmakla geçinmeye başlamıştı. Fakat çok doğru bir adamdı. Senede belki yüz ev sattığı halde kendi perili köşkünü hariçten gelip Hanya[']dan Konya[']dan haberi olmayan enayi bir müşteriye sokmuyor: \"Allah[']tan korkarım neme lazım!\" diyordu. Köşkünün perili olduğunu hiç saklamazdı. Kapıyı kendi açtı."
  },
  {
    "id": 542,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Maria herhalde pencerede beni bekliyordu. Buna rağmen artık yarım saat evvelki \"ben\" değildim. Binlerce kilometre uzakta[,] bir insan yaşamaz oluvermişti[;] bu vaka günlerce belki de haftalarca evvel olduğu halde[,] ne ben, ne Maria herhangi bir şey sezmemiştik. Günlerin birbirinden farkı yoktu. Fakat birdenbire, avuç içi kadar bir kâğıt, herşeyi altüst ediyor, beni bu dünyadan alıp oraya götürüyor, be nim buraya değil, telgrafın geldiği uzak yerlere ait oldu ğumu hatırlatıyordu."
  },
  {
    "id": 543,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Ne zamandan beri?\" de di. \"Bir saatten beri!\" Sesim heyecandan titriyordu. O bunu şikâyet zanne derek, yan şaka bir sitem ile[:] [\"]Kendi kabahatiniz, beyim[\"], dedi. \"Ben sizi bir bu çuk saatten beri bekliyorum. Evin önüne gelmiyerek bu şairane manzarayı tercih ettiğinizi biraz evvel, tesadüfen farkettim!\" Demek beni beklemişti."
  },
  {
    "id": 544,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Bu onun vazifesiydi. Fakat hangi otağ-ı hümâyun?.. Yağmurun loş gölgeleri içinde, koca kavuğu ve uzun boyuyla Sokullu[']nun, elleri önünde bağlı, gözleri yerde, yavaş yavaş gerdûneye yaklaştığı görüldü[.] Ulaklar açılarak yol veriyordu. Arkasından üç tuğlu vezirler de geliyordu."
  },
  {
    "id": 545,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Tablosu çok hoşuma gitmişti...\" \"İyi bir ressamdı!\" İçimde birdenbire beliren, fakat mahiyetini anlıyamadığım bir endişeyle sordum: \"Ressamdı mı dediniz? Şimdi değil mi?\" Kadın, etrafına bakınarak, küçük kızı aradı, onun va gona girip oturmuş olduğunu görünce, başını bana doğru eğerek: \"Tabii değil...\" dedi. [\"]Çünkü artık yaşamıyor[!]\" \"Nasıl[?]\" Bu kelimenin ağzımdan bir ıslık gibi çıktığını duydum. Etrafımızdakiler dönüp baktılar ve kompartimandaki ço cuk başını pencereden uzatarak hayretle beni süzdü. Kadının gözleri dikkatle üzerimde dolaşıyordu: \"Niçin bu kadar şaşırdınız?\" dedi, \"Neden sarardınız?"
  },
  {
    "id": 546,
    "source": "Ömer Seyfettin - Kütük",
    "text": "O, durmasın, bütün kuvvetiyle hücum etsin. Ben mutlaka yıkılacak kalenin taşları altında kalmak isterim.\" — Sâhi, namuslu bir askermiş... Kethüdâ[:] [—] Yalnız namuslu bir asker değil, Arslan Bey, dedi, hem de gayet âlicenap bir mert[...] Nasıl? Bakın anlatayım."
  },
  {
    "id": 547,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Yalnız yerlere ve çalılara düşen yağmur damlalarının şıkırtışı duyuluyordu. Sadrazam ne yapmıştı? Tâ İstanbul[']dan beri padişahtan bir konak ileri gidiyor, yolları düzeltiyor, otağ[-]ı hümâyunu kurduruyordu[.] Bu onun vazifesiydi. Fakat hangi otağ-ı hümâyun?.."
  },
  {
    "id": 548,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Maria’nın keman çalması ve şarkı söylemesi zannetti ğimden de kısa sürdü ve gürültüye geldi. Bu akşam herkes şendi kendinin numarası olmağı tercih ediyordu. Maria istünü değiştirince hemen çıktık, Anhalter istasyonu kar asında, [\"]Avrupa[\"] dedikleri büyük bir yere gittik. Burası rüçük ve mahrem Atlantik’ten büsbütün başka idi. Göz ılabildiğine büyük salonlarda yüzlerce çift habire danseliyordu."
  },
  {
    "id": 549,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Fakat el... Fakat lâmise, hiç dolma yutmazdı. Bütün hurafeler[,] bâtıl itikatlar dimağımıza hücum için gözle kulağa koşardı[.] Güldü. Perinin bize zararı dokunmaz!"
  },
  {
    "id": 550,
    "source": "Ömer Seyfettin - Diyet",
    "text": "Daha efendisi gelmemişti. Satırları bitirince, büyük bıçakları bilemeye başladı. \"Ne yapacağım, ne yapacağım[?]\" hülyasına öyle dalmıştı ki[...] Kasabın geldiğini duymadı. Ansızın uğursuzun boğuk sesi yüreğini ağzına getirdi: — Ne yapıyorsun be?..."
  },
  {
    "id": 551,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "\"Teşekkür ederim!\" Sesinde hafif bir kısıklık vardı. Öksürdüğü zaman göğsü adamakıllı sarsılıyor ve hırıldıyordu. Merakımı çabucak gidermek için sordum[:] [\"]Kendinizi nasıl üşüttünüz[?] Her halde soğukalgmlığı olacak!...\" Uzun müddet yatağının beyaz örtüsüne bakarakdur du. Çocuklariyle karısının beyaz karyolaları arasına sıkış mış duran küçük bir demir soba, odayı fazla sıcak yap mıştı."
  },
  {
    "id": 552,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bundan şikâyetçi değilim. Çalışmak hiç de fena bir şey değil.. Bana dokunan[,] ruhlarımızı alçaltmadan çalışmak isteyişimizin hoş görülmemesi[.]. Sonra bir de hep sarhoş ve insan etine acıkmış kimselerle karşı karşıya bulunmak mecburiyeti beni sıkıyor. Bazan öyle bir ba kışları var ki..."
  },
  {
    "id": 553,
    "source": "Ömer Seyfettin - Kaşağı",
    "text": "İçimde bir tımar etmek hırsı uyandı. Kaşağıyı aradım, bulamadım. Ahırın köşesinde Dadaruh[']un penceresiz küçük bir odası vardı[.] Buraya girdim. Rafları aradım."
  },
  {
    "id": 554,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Ansızın arkadan bir çocuk; \"Kaymakam Bey!\" diye bağırdı. Hepimiz sustuk. Yüzümüzü avlu kapısına çevirdik[;] siyah setre pantolonlu[,] kırmızı fesli, ekşi suratlı bir adam[...] Sağında solunda birer zaptiye dimdik duruyordu. \"Ne oluyor, Hoca Efendi?\" diye sordu."
  },
  {
    "id": 555,
    "source": "Ömer Seyfettin - Kaşağı",
    "text": "Babam hiddetlendi. Üzerine yürüdü, \"Utanmaz yalancı\" diye yüzüne bir tokat indirdi. Götür bunu eve[;] sakın bunu bir daha buraya sokma[.] Hep Pervin'le otursun! diye haykırdı."
  },
  {
    "id": 556,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Ben baktım, Hoca Efendi dalmış uyuyor! Hemen ayağa kalktım. Çocuklara, işaret parmağımı dudaklarıma götürerek, [\"]Susunuz[!]\" işaretini verdim. Ses seda kesildi. Hepsi ne yapacağıma bakıyordu."
  },
  {
    "id": 557,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Yanında iki bine yakın muharibi vardı. Grijgal'in \"Vire\" ile verilmesini istiyordu. Ateşe, nura, haça, İncil[']e, Zebur[']a yemin ediyor[;] çıkıp giderken muhafızlara hiçbir ziyanı dokunmayacağına dair söz veriyordu. Kuru Kadı: — Pekâlâ!... Haydi git."
  },
  {
    "id": 558,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Cesur bir adam lazım; paşalar... dedi. Biz onun sırmalara[,] altınlara, elmaslara garkederek gönderdiği elçisine, padişahımızın elini öptürmedik[;] ancak diz öpmesine müsaade ettik. Şüphesiz o da mukâbele etmeye kalkacak. Şüphesiz."
  },
  {
    "id": 559,
    "source": "Ömer Seyfettin - Yüksek Ökçeler",
    "text": "On üç yaşında iken altmış yaşında bir kocaya vardığı için \"izdivaç\" denen şeyden nefret etmişti. İşte hemen hemen on sene vardı ki, erkeğin hayali zihnine, romatizma, balgam, pamuk, vandoz, tentürdiyot yığınlarından yapılmış pis, abus, lanet bir heyulâ şeklinde gelirdi. \"Gençler başkadır[!]\" diyenlere: [—] Aman, aman[!] Onlar da bir gün olup ihtiyarlamazlar mı? Sonra dertlerini kim çeker?"
  },
  {
    "id": 560,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Kale kumandanı, gözlerini yerden kaldırıp cevap veremedi. Asilzâdeler, şövalyeler birbirlerinin yüzlerine bakmaya cesaret edemediler; âni bir ölüm darbesiyle vurulmuş gibi oldukları yerde donup kaldılar. Bir güllesiyle kaleyi yıkacak olan bu korkunç top, siyaha boyanmış, kocaman bir kütükten başka bir şey değildi[!][...]"
  },
  {
    "id": 561,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Karınız boş düşer!..\" diye haykırışıyorlardı. Hoca Efendi bir an şaşırdı. Bineceği zamanlar, [\"]Oh benim Abdurrahman Çelebi, oh benim Abdurrahman Çelebi[!][\"] diye diye sevgiyle okşadığı eşeğine dehşetle baktı. Kapının yanından bir çocuk içeri koşmuş, falakayı, değneği çıkarmıştı. Abdurrahman Çelebi'cik düzensiz aralarla hapşırıyor, burnunu yere sürmek istiyordu."
  },
  {
    "id": 562,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Onun girdiğini görünce: — Hayrola, Tosun Bey! Diye lafını kesti, Tosun Bey titriyordu. Kendine mâlik değildi: [—] Otağ[-]ı hümâyun kaybolmuş. Evet oğlum. Bu nasıl olur, efendi hazretleri?"
  },
  {
    "id": 563,
    "source": "Ömer Seyfettin - Kütük",
    "text": "... ... Kale kumandanı[,] gözlerini yerden kaldırıp cevap veremedi[.] Asilzâdeler, şövalyeler birbirlerinin yüzlerine bakmaya cesaret edemediler; âni bir ölüm darbesiyle vurulmuş gibi oldukları yerde donup kaldılar. Bir güllesiyle kaleyi yıkacak olan bu korkunç top, siyaha boyanmış, kocaman bir kütükten başka bir şey değildi!..."
  },
  {
    "id": 564,
    "source": "Ömer Seyfettin - Diyet",
    "text": "İşte herkes onu seviyordu. Sipâhîler kendilerine pek ucuz kılıç döven bu adamı kurtarmaya sözleştiler. Şehrin en büyük zengini Hacı Mehmed[']e müracaat ettiler[;] bu adam Karun kadar mal sahibi olduğu halde son derece hasisti[.] Hâlâ şehrin pazar yerinde küçük bir dükkânda kasaplık yapıyordu. Düşündü, taşındı; nazlandı."
  },
  {
    "id": 565,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Niçin? Bakınız beyim, niçin: Düşmanlarım, köşk kiracısız kalsın diye peri lafı çıkarmışlar. Birisi girdi mi[,] herkes fi[-]sebîlillâh peri propagandasına başlar[.] Nihayet kiracılar işittikleri yalanı, gördük sanıyorlar. Mesela kış ortası köşkü başıma bırakıp savuşuyorlar."
  },
  {
    "id": 566,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Şöyle bir göz gezdirdi. Sırtının hafif kamburu içeri çekildi: — İşittiniz ya, gaziler! dedi[,] Kıraçin haini bizim yüz on dört kişiden ibaret olduğumuzu anlamış[...] Üzerimize iki bin kişi ile geldi. Teklif ettiği \"Vire\"yi kabul etmek isteyenler varsa ellerini kaldırsın!"
  },
  {
    "id": 567,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Kuluçka yatan beyaz bir Nemse tavuğu gibi yayvandı. Yirmi senedir, çoluğa çocuğa kavuşalıdan beri, hep böyle bir yuva tahayyül ederdi. Asabî bir isticâl ile[:] [—] Niçin oturamayız[?] diye sordu. Efendim, bu köşkte peri vardır."
  },
  {
    "id": 568,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bir vals çalmağa başladı. Yavaşça kulağına eğildim: \"Haydi...\" dedim. \"Fakat ben pek iyi bilmem[...]\" Sözümün ikinci kısmını duymamış gibi yaptı, yerin den fırlıyarak[:] \"Haydi!\" dedi. Kalabalığın içinde dönmiye başladık. Bu, dansetmek falan değildi; dört tarafımızdan sıkıştıran vücutarm key fine tâbi olarak oradan oraya sürüklenmekten ibaretti."
  },
  {
    "id": 569,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Onunla konuşmak, hakikî hüviyetine dair bir şeyler öğrenmek içn her fırsattan istifadeye kalktım. O benim bu fazla sokulganlığımı farketmez göründü. Ba na karşı[,] nazik[,] fakat daima arada bir boşluk bırakan tav rını muhafaza etti. Dostluğumuz dıştan ne kadar ilerlerse ilerlesin, içi bana daima kapalı kaldı. Hattâ ailesini, bu aile arasındaki vaziyetini yakindan görünce hakkındaki mera kım büsbütün arttı."
  },
  {
    "id": 570,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Beni de hayrete düşüren birce saretle: \"İstemiyor musunuz?\" dedim. \"Hayır, ondan değil, sordum işte... Belki istiyorum da onun için sordum!\" Gözleri o kadar siyah ve o kadar mânalıydı ki, dayana madım[:] \"Siz aslen Alman mısınız[?]\" dedim. \"Evet! Neden sordunuz?\" \"Saçlarınız sarı ve gözleriniz mavi değil!\" \"Olabilir!\" Yüzünde, her zamanki tebessümünü andıran, fakat biraz da mütereddit görünen bir hareket oldu."
  },
  {
    "id": 571,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "(Sonbaharda kendisini çağıracağımı ümidettiğimi yazmıştım!) Bundan sonra, bir çok mektuplarımda tekrar tekrar sorduğum halde, bu iyi haberin ne olduğunu yazmadı. Hep \"Bekle, geldiğim zaman öğrenirsin!\" diyordu. Evet[,] bekledim[;] hem yalnız sonbahara kadar değil, tam on sene bekledim[...] Ve bu \"güzel\" haberi tam on sene sonra öğrendim... Daha dün akşam öğrendim..."
  },
  {
    "id": 572,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Sonra kendisi yatağın kenarına ilişti. Büyük bir sü ratle iskarpinlerini, çoraplarını çıkardı, entarisini başın dan sıyırıp bir iskemleye attı ve yorganın içine girdi. Oturduğum yerden kalktım[;] hiç bir şey söylemeden ona elimi uzattım[.] İlk defa gördüğü bir insanı tetkik edi yormuş gibi beni süzdü, yüzüne bir sarhoş gülüşü yayıl dı. Gözlerimi indirdim."
  },
  {
    "id": 573,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Evde çalışmayan yalnız yetmiş beşlik annesiydi. O da mutfağa, hizmetçilere, filan bakardı. Yemeği gece yarısına yakın yerler[,] yemekten sonra hiç oturmazlar, hemen yatarlardı[.] Aradan on beş gün geçmedi. Bir gece aşağı kattan bir çığlık koptu."
  },
  {
    "id": 574,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Açık ferman dizlerinin üstünde kaldı. \"... İşbu emr[-]i şerifimizin hâmili devletimize vücudu muzır olan Tosun Bey kulumun da hemen, vücudundan başın kesesin ve şöyle bilesin ki[...]\" Gözünü bu cümleden ayıramıyordu. Aşağısını okuyamadı. Demek, gece gündüz, hıç durmadan koşarak getirdiği, rüyasında vücudunu yakan bu kırmızı kese, kendi idam fermanıydı."
  },
  {
    "id": 575,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Ka dın hesabı kendisi vermekte ısrar etti. Dışarı çıktığımız zaman onun benden daha az sallanmadığını farkettim. Bir birimizin kolunda[,] gelip geçenlere çarparak ilerliyorduk Vakit geceyarısma yaklaştığı için sokaklar fazla kalaba lık değildi[.] Bir yerde, sokağın öbür tarafına geçerken garip bir hâdise oldu: Karşı kaldırıma geldiğ imiz sırada Frau Tiedemann’ın ayağı kenara takıldı; biraz tombulca olan kadm, düşmemek için bana tutunmak isterken, gali ba boyu benden daha uzun olduğu için, boynuma sarılıverdi. Fakat bu sefer, müvazenesi yerine geldiği halde, beni bırakmıyor, kollarının arasında daha çok sıkıyordu."
  },
  {
    "id": 576,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Koynundan çıkardığı nâme-i hümâyununu öptü. Başına koydu. Sonra altın tahtın üstüne [-]allı, yeşilli, mavili, morlu, ipek yığınlarına sarılmış, sırmalarla, tuğlarla, sancaklarla bağlanmış gibigarip bir yırtıcı kuş sükûnetiyle tüneyen Şah[']a uzattı. Ayağı öpülmeyen Şah gazabından sapsarı kesildi. Gözlerinin beyazları kayboldu."
  },
  {
    "id": 577,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "İnsanın içinde ne müthiş kuvvetlerin saklı olması lâzım!\" Gözlerinden tekrar o parıltı geçti. Fakat bana bir müddet daha dikkatle baktıktan sonra dudağını ısırdı. Ba kışları dumanlı ve manasızdı[:] \"Haydi oturalım[!]\" dedi, \"Ne kalabalık[!] Galiba sıkılmıya başlıyacağım!\" Tekrar ve üstüste şarap içti. Bir aralık yerinden kal karak: \"Şimdi geliyorum!\" dedi ve sallana sallana uzaklaştı."
  },
  {
    "id": 578,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Kadın trene doğru yürüdü. Ben, sözü değiştirirsek bir daha ayni mevzua dönemiyeceğimden ve asıl istediklerimi öğrenemiyeceğimden korkuyordum. Onun için[,] sözüne devam etmesini büyük bir alâka ile bekliyerek gözlerinin içine baktım[.] Kadın, eşyasını vagona yerleştirmiş olan otel garso nunu savdıktan sonra, bana döndü: \"Neden soruyorsunuz?\" dedi. \"Maria’yı pek az tanıdığınızı söylüyordunuz!\" \"Evet..."
  },
  {
    "id": 579,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Kısa emirler, çağırılan isimler, bir kahkaha, bir söz... Başlayacak sükûnu bozuyor, atların yanında itişen birkaç gencin şen nâraları duyuluyordu. Çifte direkli yeşil çadırın kapısı önüne serilmiş büyük bir kaplan postu üzerinde kehribar çubuğunu fosur fosur çeken koca bıyıklı[,] iri vücutlu[,] ateş nazarlı şâir kumandan, gözlerini, alacağı kalenin sallanan bayrağına dikmişti[.] Karşısında diz çökmüş kethüdâsının anlattıklarını dinliyordu. Ordugâha yarım saat evvel dört nala gelen bu adam, yaşlı, şişman bir askerdi."
  },
  {
    "id": 580,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Bir duaya başlayacaktı. Deli Mehmed yalın kılıç karşısına dikildi. Palabıyıklı, gök gözlü, geniş beyaz çehresi, yeni doğmuş bir ay gibi parlıyordu[:] [—] Duayı bırak efendi, dedi, gaza duadan efdaldir[.] Gel... Lütfet."
  },
  {
    "id": 581,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Borçlarım, borçlarımın faizi ve evlenme masrafları elimde avucumda kalan bir kaç parça malı aldı, götürdü. Zeytinlikler para etmiyordu. Parası olanlar[,] emvali metrûkeden yok paha sına mal almıya alışmışlardı[.] Senede yedi, sekiz liralık mahsul verebilecek olan bir ağaç, kökü yarım lirayamüş- KÜRK MANTOLU MABONNA teri bulamıyordu. Eniştelerim, sırf beni müşkül vaziye timden kurtarmak ve ailenin servetinin dağılmasına mey dan vermemek için borçlarımı ödediler ve zeytinlikle rimi aldılar..."
  },
  {
    "id": 582,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Hamdi de bana ayni hislerle hitabeder gibiydi: \"Yazı filân yazıyor musun?\" dedi. \"Araşıra... Şiir, hikâye[!][\"] \"Bir faydası oluyor mu bari[?]\" Gene güldüm. O, \"Bırak böyle şeyleri canım!\" diyerek pratik hayatın muvaffakiyetlerinden, edebiyat gibi boş şeylerin mektep sıralarından sonra ancak zararlı olabileceğinden bahsetti. Kendisine cevap verilebileceğini, münaka şa edilebileceğini asla aklına getirmeden, küçük bir ço cuğa nasihat verir gibi konuşuyor ve bu cesareti hayattaki 10 KÜRK MANTOLU MADONNa\" muvaffakiyetinden aldığım tavırlariyle göstermekten de hiç çekinmiyordu."
  },
  {
    "id": 583,
    "source": "Ömer Seyfettin - Başını Vermeyen Şehit",
    "text": "Bütün gaziler bu iki delinin arkasına üşüştü. Sanki hepsi bir anda deli oldular... Hepsi bir ağızdan[:] [—] Aç bize kapıyı, aç[...] Diye bağırmaya başladılar. Kuru Kadı'nın iri patlak gözleri yaşardı."
  },
  {
    "id": 584,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Diye koşuştular. İki kanadı açık geniş kapının, ortasında bir fener sarkan beyaz badanalı kemeri altından, temiz ve zemini kara taş kaplı iç avluya ilerledi. Bağırdı: [—] Çabuk Bey[']e haber verin, ferman var[...] Hizmetkârların arasından ayrılan uzun boylu kapıcıbaşı öne düştü. Onu taş merdivenlerden çıkardı."
  },
  {
    "id": 585,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bu sefer ağır ağır ve düşüncelere dalarak gidiyordum. Şehre yaklaştıkça ümitsizliğim artıyordu. Bundan sonraki günlerimin ondan ayrı olarak ge çeceğini bir türlü kabul edemiyor[,] bu ihtimali ciddilikten uzak, gülünç, imkânsız buluyordum[...] Hiçbir zaman başı mı eğip yalvarmağa gidemezdim. Böyle bir şey hem elim den gelmez, hem de bir faydası olmazdı..."
  },
  {
    "id": 586,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Biz daha avlunun kapısından girmeden Hoca Efendi'nin bulunup bulunmadığını, şöyle bir bakar, anlardık: \"Abdurrahman Çelebi gelmiş mi be?\" \"Gelmiş, gelmiş...\" Abdurrahman Çelebi, Hoca Efendi'nin ihtiyar eşeğiydi. Siyah, huysuz, inatçı bir hayvan... Her sabah bizim gibi erkenden mektebe gelir, akşama kadar kalır[;] evlerimizden nöbetle getirdiğimiz kucak kucak otları, yazsa ağaçların, kışsa sol taraftaki abdestlik sundurması altında yavaş yavaş yerdi[.] Ona su vermek, onu tımar etmek mektepte bir imtiyazdı. Hoca Efendi'ye kim yaranırsa bu mükafatı kazanırdı."
  },
  {
    "id": 587,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Buna rağmen karşımdaki üşür görünüyordu. Yor ganını boğazına kadar çekerek: \"Evet, soğuk aldım galiba!\" dedi. \"Dün akşam yemek ten sonra biraz dışarı çıkmıştım[...]\" \"Bir yere mi gittiniz[?]\" \"Hayır... Şöyle azıcık dolaşmak istedim... Ne bileyim.."
  },
  {
    "id": 588,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Vakit bulup cevap verememişti. Dregley kalesini sarıyordu. Muhâsaranın iptidâsından nihayetine kadar hazır bulunan kethüdâ, şimdi orada gördüklerini söylüyordu[;] bu kale gayet sarp, gayet dik, bir kayanın zirvesine yapılmıştı[.] Arslan Bey sordu: — Bizim kaleden daha yüksek mi? Daha yüksek beyim."
  },
  {
    "id": 589,
    "source": "Ömer Seyfettin - Forsa",
    "text": "\"Bir gemim olsa gözümü kapar, Kabataş'ın önüne demir atarım\" diye düşünürdü. Altmış yaşını geçtikten sonra efendisi, onu sözde âzâd etti. Bu âzâdetmek değil[;] sokağa, açlığa, perişanlığa atmaktı[.] İhtiyar esir, bu viran bağın içndeki harap kulübeyi buldu. İçine girdi."
  },
  {
    "id": 590,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Bu hareketim onu gül dürdü: \"Acele etmeyin, dostum.* dedi. \"Daha gidip elbisemi değiştireceğim. Siz beş dakika sonra kapının önünde beni bekleyin[!][\"] Çabucak kalktı. Sağ eliyle eteğini toplıyarak hızlı adımlarla orkestranın arkasında kayboldu. Giderken ge ne yüzüme bakmış, o harikulade gözlerini kırk yıllık bir dost gibi kırparak beni selâmlamıştı."
  },
  {
    "id": 591,
    "source": "Ömer Seyfettin - Perili Köşk",
    "text": "Hacı Niyâzi Efendi donmuş gibi, sorulan şeylere hiç cevap vermiyor, hep yüzünü karanlıklara çeviriyordu. Kontrat kağıdıyla hokka kalem gelince, Sermet Bey: — Haydi bakalım, al eline kalemi!... Yüreğine indirdiklerinin[,] düşürttüğün çocukların cezasını görmek istemiyorsan söylediğimi yaz[,] imzayı bas[!] Dedi. Hacı Niyâzi Efendi mihânîkî bir hareketle kaleme kaptı."
  },
  {
    "id": 592,
    "source": "Ömer Seyfettin - Falaka",
    "text": "Başını salladı. Gözlerini açtı: \"Çok büyük yemin!\" dedi. \"Yalan yere bu yemini eden çarpılır mı[?]\" \"Hayır.\" \"Ya ne olur[?]\" \"Daha fena.\" \"Nasıl[?]\" \"Karısı boş düşer.\" İyice anlamadım. Ama bu yeminin dehşetini mektepte çocuklara etrafıyla söyledim. Artık hep, evli adamlar gibi, yalan-doğru, biz de \"Şart olsun!\" yeminine başladık."
  },
  {
    "id": 593,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Cesur Arslan Bey, kır atını ileriye sürdü. Kaleye yüz adım kadar yaklaştı. Arkasındaki kethüdâsıyla[,] genç tercüman koştular[...] Gür sesiyle haykırdı: — Hey bre Şalgo muhafızları!... Ben, padişahımın dedesine sizin kralınızın memleketlerinden büyük yerler zaptetmiş, Bosna valisi Yahya Paşa'nın torunlarındanım."
  },
  {
    "id": 594,
    "source": "Ömer Seyfettin - Pembe İncili Kaftan",
    "text": "Sırmakeş Toroğlu'ndaki, dîbâsı Hind'den, harcı Venedik'ten gelme \"Pembe İncili Kaftan\"ı alacağım. Ne... O kadar parayı nerede bulacaksın[,] oğlum[?] Sadrazamın şaşmaya hakkı vardı. Bir ay evvel tamamlanan, üzeri en nadir pembe incilerle işlemeli bu kaftanın namını İstanbul'da duymayan yoktu."
  },
  {
    "id": 595,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Yavaş yavaş hisle rini kütleşmişti. Hiçbir şeyden müteessir olmuyor, hiçbir şeye sevinmiyordum. insanlara kızmama imkân yoktu[,] çünkü insanların en kıymetlisi, en iyisi, en sevgilisi bana en büyük kötülüğü etmişti[;] diğerlerinden başka şey beklenebilir miydi[?] İn sanları sevmeme ve onlara tekrar yaklaşmama da imkân yoktu; çünkü en inandığım, en güvendiğim insanda aldanmıştım. Başkalarına emniyet edebilir miydim?"
  },
  {
    "id": 596,
    "source": "Ömer Seyfettin - Ferman",
    "text": "Bütün ordu yolunu temizledi. Hiçbir yasakçı onun arkasından at süremiyor, kimse ona yetişemiyordu. İleri[,] geri, üç konağı birden gidiyor[;] uykusuzluk, yorgunluk nedir bilmiyordu[.] Dört sene evvel padişah, onu sipâhîler arasında görmüş, güzelliğine, şeci tavırlarına meftun olarak maiyetine almış, kendisine birçok hizmetler vermiş, hatta bir sene içinde çavuşbaşlığa kadar çıkarmıştı. Henüz yirmi beş yaşındaydı."
  },
  {
    "id": 597,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Kaleye yüz adım kadar yaklaştı. Arkasındaki kethüdâsıyla, genç tercüman koştular... Gür sesiyle haykırdı[:] [—] Hey bre Şalgo muhafızları![...] Ben, padişahımın dedesine sizin kralınızın memleketlerinden büyük yerler zaptetmiş, Bosna valisi Yahya Paşa'nın torunlarındanım. Ceddim Hamza Bali Bey, daha ondört yaşında iken sizin ordularınızı perişan etmiş, Viyana Muhasarası'nda, Viyenberg önünde şan almıştır."
  },
  {
    "id": 598,
    "source": "Sabahattin Ali - Kürk Mantolu Madonna",
    "text": "Fakat o tamamen unutmuş görünüyordu. Kapıya kadar geldim. Şapkamı alırken[:] \"Hanımefendiye hürmetler[!]\" dedim. \"Olur, olur, sen yarın bana uğra! Üzülme canım!\" di yerek sırtımı okşadı."
  },
  {
    "id": 599,
    "source": "Ömer Seyfettin - Kütük",
    "text": "Arkasındaki kethüdâsıyla, genç tercüman koştular... Gür sesiyle haykırdı: — Hey bre Şalgo muhafızları!... Ben, padişahımın dedesine sizin kralınızın memleketlerinden büyük yerler zaptetmiş, Bosna valisi Yahya Paşa[']nın torunlarındanım[.] Ceddim Hamza Bali Bey, daha ondört yaşında iken sizin ordularınızı perişan etmiş, Viyana Muhasarası'nda, Viyenberg önünde şan almıştır. Ben, hangi kaleye gittimse geri dönmemişim, daha geçen gün iki küçük topla ``Boza´´ kulesini yerle bir ettim."
  },
  {
    "id": 600,
    "source": "Ömer Seyfettin - Kaşağı",
    "text": "Ben o gün gene ahırda yalnızdım. Hasan evde hizmetçimiz Pervin'le kalmıştı. Babam çeşmeye bakarken, yalağın içinde kırılmış kaşağıyı gördü[;] Dadaruh[']a haykırdı: [—] Gel buraya! . ."
  }
];
