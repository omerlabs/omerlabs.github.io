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
    "source": "Michael Ende - Momo",
    "text": "Gigi ne demek istediğini anlamıştı. Üzüntüyle önüne baktı. Bu işler için ondan para alan hanımlar[,] onu kollarından çekerek uçağa doğru götürdüler[;] neler anlatmayı düşlemişti[.] Onu asıl şimdi, bulduğu şu anda kaybettiğini anladı. Yavaşça dönüp yolcu salonundan çıktı."
  },
  {
    "id": 2,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "İhtiyar atıldı: \"Patron neredeyse çıkagelir. Bu sabah sizi görmeyince, fena küplere binmişti. Dosdoğru kahvaltı ettiğimiz yere düştü[,] açtı ağzını[,] yumdu gözünü; nereye cehennem oldu bu herifler[?] dedi. Üstelik seyisi de payladı.\" George, yatağının bir kırışıklığını düzelterek oturdu."
  },
  {
    "id": 3,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Fakat Hüseyin’le aramızda sıkı bir mukavele vardı. Oyunda canım yanarsa ağlamayacak, onu kimseye şikâyet etmeyecektim. Bu[,] benim doğruluğumdan ziyade[;] onun bir daha benimle oynamamasından korktuğum için büyük bir adam gibi sır saklamaya alışmış olmamdandır[.] Çocukluğumda bana hoyrat derlerdi. Galiba hakları da vardı."
  },
  {
    "id": 4,
    "source": "Stefan Zweig - Satranç",
    "text": "Sonra ekmeğimden kopardığım küçük parçaları birleştirip gülünç ve yamuk yumuk satranç taşları yapmaya başladım, şah, vezir falan; bitmek bilmeyen bir uğraştan sonra, en sonunda satranç kitabında gösterilen konumların aynısını kareli yatak örtüsünün üzerinde oluşturabilmeyi başardım. Ama bütün oyunu yeniden oynamaya çalışınca, ötekilerden ayırmak için yarısının rengini tozla koyulaştırdığım gülünç ekmek-taşlarımla hiçbir şey beceremedim önce. İlk günlerde sürekli şaşırdım[;] bu bir tek oyuna beş kere[,] on kere, yirmi kere tekrar baştan başlamam gerekti[.] Ama yeryüzünde kimin, hiçliğin kölesi olan benim kadar yararsız ve kullanılmayan zamanı vardı ki, kim bu kadar hırs ve sabırla doluydu? Altı gün sonra oyunu hiç şaşırmadan sonuna kadar oynadım, ondan sekiz gün sonra satranç kitabındaki konumları gözümün önüne getirmek için yatak çarşafındaki ekmek parçalarına bile gerek duymadım ve bir sekiz gün daha sonra kareli yatak çarşafı da gereksiz oldu; başlangıçta soyut gelen a1, a2, c7, c8 gibi işaretler, beynimin içinde görsel, plastik konumlara dönüştü kendiliğinden."
  },
  {
    "id": 5,
    "source": "George Orwell - 1984",
    "text": "Sert bir sesle, \"Kaldırın şunları yerden,\" dedi. Adamlardan biri fırladığı gibi buyruğu yerine getir­ di. Bay Charrington[']ın LondraWara özgü şivesi kaybol­ muştu; Winston biraz önce tele[-]ekrandan gelen sesi bir­ den tanıdı. Bay Charrington'ın sırtında yine o eski kadife ceket vardı, ama nerdeyse ağarmış olan saçları siyahtı. Sonra, gözlüğü de yoktu."
  },
  {
    "id": 6,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "İşte şimdi yetişkin oldum, tılsım artık etkili olmuyor.” “Burada ne kadar kaldın?” diye sordu Arkadiy. “Arka arkaya iki yıl kadar; sonra arada bir geldik. Gezgin bir yaşam sürdük[;] daha çok şehirlerde sürttük durduk.” “Bu ev yapılalı çok olmuş mu[?]” “Çok. Evi önce dedem yaptırmış, annemin babası.” “Deden kimmiş?” “Kim bilir kim? Binbaşıymış."
  },
  {
    "id": 7,
    "source": "George Orwell - 1984",
    "text": "İşin ilginci, bu söylenenleri doğrulamanın da, çürütmenin de mümkün olmamasıy­ dı. Örneğin, Parti, bugün yetişkin proleterlerin yüzde kırkının okuma yazma bildiğini ileri sürüyordu; söyle­ nenlere bakılırsa, bu oran Devrim'den önce yüzde on beşi geçmiyordu. Parti, çocuk ölümlerinin Devrim[']den önce binde üç yüz iken, bu oranın artık binde yüz altmı­ şa düştüğünü öne sürüyordu[;] istatistikler böyle sürüp gidiyordu işte[.] İki bilinmeyenli bir denklem gibiydi hep­ si. Tarih kitaplarındaki her sözcük, dahası tartışmasız ka­ bul edilen şeyler bile tümüyle hayal ürünü olabilirdi."
  },
  {
    "id": 8,
    "source": "Michael Ende - Momo",
    "text": "miyim?\" \"Hayır\" dedi o. \"Şimdilik bu olmaz.\" \"Seninle ne zamana kadar kalacağım?\" \"Yeniden arkadaşlarını özleyinceye kadar, yavrum.\" \"Ama, onlara yıldızların söylediklerini anlatabilir miyim?\" \"Anlatabilirsin. Ama yapamayacaksın[!][\"] [\"]Niçin?\" \"Bunu yapabilmen için, önce sözlerin içine doğması gerekir.\" \"Ama ben onlara her şeyi anlatmak istiyorum, hepsine! Duyduğum melodinin şarkısını söylemek isterdim. Sanırım o zaman her şey düzelirdi.\" \"Beklemekten sıkılmam.\" \"Beklemeli yavrum, tıpkı bir tohumun toprak altında uyuması gibi."
  },
  {
    "id": 9,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Sizse... siz beni ağlar görmekten zevk alıyorsunuz. Peki görün işte[;] rahat edin[;] gözleriniz doysun[!] Olga tekrar ağlamaya başladı... Olga, ben yine de uyumadım; bütün gece acı çektim."
  },
  {
    "id": 10,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Burada kalmak zorunda değiliz. Bir evimiz var, tavuklarımız var, yemiş ağaçlarımız, bundan yüz kat güzel bir çiftliğimiz var. Dostlarımız da var; ya[,] dostlarımız var[.] Belki bir zamanlar kapıdışarı edilmekten korktuğumuz olmuştur ama, geçti o günler. Kendi toprağımız var, özbeöz kendi malımız, işte oraya gideriz, bir sıkışırsak.\" Curley'in karısı alay ederek güldü: \"Martaval,\" dedi, \"sizin gibilerini çok gördüm ben."
  },
  {
    "id": 11,
    "source": "Albert Camus - Yabancı",
    "text": "O zaman Celeste, sanki bütün bildikleriyle birlikte iyi niyeti de tükenmiş gibi bana döndü. Bana öyle geldi ki, gözleri çakmak çakmaktı, dudakları titriyordu. [\"]Daha başka ne yapabilirdim ki[!]\" der gibi bir hali vardı. Bense, bir şeycikler söyleyemedim, hiçbir hareket yapamadım, ama içimden, ömrümde ilk kez olarak bir erkeği kucaklamak geldi. Başkan ona tanık parmaklığını terk etmesini emretti."
  },
  {
    "id": 12,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "beyhude: Boşuna. beyit: Anlam bakımından birbirine bağlı iki dizeden oluşmuş şiir parçası. Bibliotheque Rose[:] [(]Fr.[)] Pembe kitaplık. Metnide \"çocuk kitapları\" anlamında kullanılmış. biçare: Çaresiz, zavallı kimse."
  },
  {
    "id": 13,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Hava mükemmeldi; aslında uzaklardan kolera tekrar tehdit etmeye başlamıştı ama ... vilayetinin sakinleri, koleranın ziyaretlerine de artık alışmışlardı. Bazarov çok erken kalkıyor ve iki üç verst yürüyordu, gezmek için değil [(]amaçsız gezilere hiç tahammül edemezdi[)], ot ve böcek toplamaya gidiyordu. Bazen yanına Arkadiy’i de alıyordu. Dönüş yolunda genellikle aralarında tartışma çıkıyor ve Arkadiy, arkadaşından daha çok laf ettiği halde her zamanki gibi tartışmayı kaybediyordu."
  },
  {
    "id": 14,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Hiç bu kadar büyüğünü görmemiştim. “Vay canına!..” dedim. “Kocaman, değil mi[?]” “Değiş[-]tokuş eder misin[?]” “Neyle?” “Resim istersen…” “Kaç tane?” “İki.” “Pışııık. Böyle bir böceğe iki resim, ha!..” “Edmundo Dayımın evinin arkası bunun gibi büyük böceklerle dolu.” “Üç resme değişirim.” “Üç resim veririm, ama seçemezsin.” “Öyleyse olmaz. Hiç değilse ikisini seçmeliyim.” “Kabul.” Bende iki tane olan Laura La Planta’nın resmini verdim ona."
  },
  {
    "id": 15,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Başımın dönmemesi için koltukta hafif hafif sallanıyordu. “Her şey bitti, yavrum. Bir gün sen de baba olacaksın[;] bir erkeğin hayatındaki bazı anların ne kadar acı olduğunu sen de keşfedeceksin[.] Sanki her tuttuğu elinde kalıyor insanın, bu da büyük bir umutsuzluğa yol açıyor. Ama bitti artık Baban, Santo Aleixo Fabrikası idare amirliğine atandı."
  },
  {
    "id": 16,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Birçok şahsi eşyalar yerlere serilmişti; tek başına yaşadığı için Crooks, eşyasını derleyip toplamaya gerek görmüyordu, görevi, öteki çiftlik adamlarından daha devamlıydı, sırtında taşıyamayacağı kadar çok öteberi de birikmişti. Birkaç çift ayakkabısı, bir çift lastik çizmesi, kocaman bir çalar saati ve tek ateşli bir tüfeği vardı. Kitapları da vardı; fersude bir cilt, 1905 Kaliforniya Medeni Kanunu[']nun köhnemiş bir nüshası, beş[-]on kirli kitap, yatağın üstünde özel bir rafa dizilmişti. Yatağın üstünde, çiviye asılmış bir gözlük sallanıyordu. Oda süpürülmüştü ve oldukça temizdi, çünkü Crooks, onurlu ve mağrur bir adamdı."
  },
  {
    "id": 17,
    "source": "Michael Ende - Momo",
    "text": "Çığlığı da gittikçe hafifleyip uzaklaşıyordu. Elleriyle yüzünü örtmüş orada dururken, birden hiç görünmez olup kayboluverdi. Durduğu yerde rüzgârla sağa sola biraz kül savruldu[;] sonra bunlar da yok oldu[.] Mahkemeyi yapan ve seyredenler sessiz sedasız uzaklaştılar. Karanlık onları yuttu."
  },
  {
    "id": 18,
    "source": "George Orwell - 1984",
    "text": "Böylesi olaylardan hiçbir zaman 0bir sonuç çıkmazdı. Yalnızca kendisinin değil, başkaları­ nın da Parti'ye düşman oldukları inancı ya da umudunu canlı tutmasını sağlarlardı, o kadar. Kim bilir[,] gizliceyü­ rütülen bozgunculuk eylemlerine ilişkin söylentiler doğ­ ruydu belki de[;] Kardeşlik örgütü belki de gerçekten var­ dı[!] Ardı arası kesilmeyen tutuklamalara, itiraflara ve idamlara karşın, Kardeşlik örgütünün yalnızca bir söylen­ ce olmadığından kuşku duymamak olanaksızdı. Win­ ston, böyle bir örgütün varlığına bazen inanıyor, bazen de inanmıyordu."
  },
  {
    "id": 19,
    "source": "Michael Ende - Momo",
    "text": "\"Bilim bunu araştıracak fırsatı henüz bulamadı.\" Kaptan konuşmasını sürdürdü: \"Pekâlâ, öyleyse biz de ona ateş açarız. Bakalım ne olacak?\" Profesör, \"Ne yazık\" diye söylendi. [\"]Bir Hop[-]Hopus-Topulastikus'un tek örneğine ateş açmak!\" Fakat döner top çoktan topacın üzerine çevrilmişti. Kaptan, \"Ateş!\" diye emir verdi. Çifte namludan bir kilometreye ulaşan mavi bir alev parladı."
  },
  {
    "id": 20,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Evi görmeye gittiğin zaman, İvan Matveyeviç bu işini de görür. Çok yaman bir adamdır, senin sonradan görme Almanına benzemez. Otuz yıl aynı sandalyede hizmet görmüş; daireyi tek başına idare ediyor; zengin adam da; ama öyle arabaya falan binmez[,] giyinişi de benimkinden farklı değildir[.] Ne etliye karışır, ne sütlüye; fısıldar gibi konuşur; öyle yabancı ülkelere gidip senin Alman... Tarantiyev, aklının ermediği şeylere karışmasan daha iyi edersin, dedi."
  },
  {
    "id": 21,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "özellikle kadınlarla ilişkiler konusunda.” “Ya! Kendisinin sütten ağzı yanınca başkasının yoğurdunu üflüyor demek. Biliriz bunları[!]” “Neyse, kısacası,” diye devam etti Arkadiy, “çok mutsuz bir insan, inan bana; onu hor görmek günahtır.” “Kim onu hor görüyor ki[?]” diye itiraz etti Bazarov. “Ben yine de derim ki, bütün yaşamını bir kadının aşkı uğruna bir karta dayandıran ve bu kart elinden alındığı zaman da gevşeyip hiçbir şey yapamayacak hale gelen bir erkek, erkek değildir. Onun mutsuz olduğunu söylüyorsun; sen daha iyi bilirsin ama saçmalıklar aklından tamamen çıkmamış bence."
  },
  {
    "id": 22,
    "source": "Michael Ende - Momo",
    "text": "İnsanın, işini isteyerek, severek yapmasının önemi yoktu. Aksine önemli olan şey, ne kadar kısa sürede ne kadar çok işin yapıldığıydı. Bütün çalışma yerlerinde, büyük fabrikalarda, bürolarda, üzerinde şöyle yazılar bulunan levhalar asılıydı[:] Zaman Değerlidir[-]Onu Yitirme! veya: Vakit Nakittir-Boşa Harcama! Buna benzer yazılar şeflerin masalarının arkasında, müdürlerin koltuklarının üstünde, doktorların muayene odalarında, mağazalarda, lokantalarda, marketlerde, hatta okullarda ve çocuk bahçelerinde bile görülüyordu."
  },
  {
    "id": 23,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Vanya, kaç defa gittiniz? Vanya duraksadı. Agafya gözlerinin içine bakarak[:] [—] Yalan söyleme Vanya[,] dedi; bak sana söyleyeyim; pazara bir yere gidemezsin. Hayır anne, sahi yürüdük... on iki defa."
  },
  {
    "id": 24,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Uzun ve gür, koyu sarı saçları geniş kafatasının iri kıvrımlarını gizlemiyordu. “Ne dersin Arkadiy,” diye tekrar konuşmaya başladı Nikolay Petroviç oğluna dönerek, “atları hemen koşalım mı? Yoksa dinlenmek mi istersiniz[?]” “Evde dinleniriz, babacığım; atları koşmalarını söyleyin[.]” “Hemen, şimdi,” diye atıldı babası[.] “Hey, Pyotr, duyuyor musun? Emret, birader, daha çabuk olsunlar.” Mükemmel yetiştirilmiş bir uşak olarak küçükbeyin elini öpmek için yanına gelmeyip sadece uzaktan onu selamlamış olan Pyotr, tekrar kapının arkasında kayboldu."
  },
  {
    "id": 25,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Uzağa gitmek istediğimde, çalışmaya çıkıyormuşum gibi davranmalıyım.” Mantığım onu güldürdü. “Çalışmaya çıktığımda evdekiler yaramazlık yapmadığımı bilirler. Böylesi daha iyi[;] en azından dayak yememiş olurum[.]” “Söylediğin kadar yaramaz olduğuna inanmıyorum.” Çok ciddileştim[:] “Beş para etmem. Çok kötüyümdür. Noel günü, benim için bir İsa değil, bir şeytan doğar ve hiçbir armağan alamam."
  },
  {
    "id": 26,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Aslında Moskova da artık... her neyse, bilmiyorum işte, o da artık eskisi gibi değil. Yurtdışına gitmeyi düşünüyorum; geçen yıl iyice hazırlanmıştım.” “Paris’e pek tabii ki[,] değil mi[?]” diye sordu Bazarov. “Paris’e ve Heidelberg’e.” “Neden Heidelberg?” “Rica ederim, Bunsen orada!” Bazarov, buna diyecek bir şey bulamadı. “Pierre Sapojnikov..."
  },
  {
    "id": 27,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Bu arada jiletler de uçurtmaların iplerini keser ve bir uçurtma, dengesiz kuyruğunu ipine sararak döne döne yere inerdi. Güzeldi bütün bunlar. Yeryüzü sokak çocuklarınındı[;] Bangu’nun bütün sokaklarındaki çocukların[!] Sonra elektrik tellerine takılı bir ölü kalırdı geriye. Ve koşturdu hemen Elektrik İdaresi’nin kamyonu."
  },
  {
    "id": 28,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Sessizlik yeniden odayı sardı. Gecenin karanlığından gelip odayı kaplıyordu. George dedi ki[:] [\"]Benimle euchre[5] oynamak isteyen var mı?[\"] Whit: \"Bir iki el oynarım,\" dedi. Lambanın altında karşı karşıya oturdular. Fakat George, kağıtları tarıyordu, bu çıtırtı oradaki bütün adamların dikkatini üzerine çektiği için, vazgeçti."
  },
  {
    "id": 29,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Evet, evet, dedi; hatırlıyorum. Evet, söyledim sanıyorum bunları... Öyle ya, Andrey, seninle bütün Avrupa[']yı dolaşmayı kararlaştırmıştık; İsviçre[']yi yaya gezecektik; Vezüv[']de ayaklarımız yanacaktı, Herkulaneum'a inecektik. Amma deli şeylermişiz o zaman! Ne budalaca şeyler düşünmüşüz!"
  },
  {
    "id": 30,
    "source": "Michael Ende - Momo",
    "text": "Örneğin şimdi, bu anda ben konuşurken an geçip gidiyor. Geçmiş oluyor! Ah[,] şimdi anlıyorum ne demek istediğini; sen tam onu görüyorum derken[,] bakarsın ki[,] kardeşi görünmüştür. Artık ötekileri de iyice anladım. Üç kardeşten daima yalnız birisinin var olmasını..."
  },
  {
    "id": 31,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "“İleri, ileri, küçük at! Dörtnal, dörtnal! İşte tozu dumana katarak gelen Kızılderili dostlarım…” Lak[-]lak[-]lak[!] Kızılderililerin nal sesleri büyük bir gürültü çıkarıyordu. “Dörtnal, dörtnal, küçük at!"
  },
  {
    "id": 32,
    "source": "Stefan Zweig - Satranç",
    "text": "Eh, dört ay, yazması kolay: altı üstü birkaç harf! Söylemesi de kolay: dört ay, iki hece! Çeyrek saniye içinde dudaklar böyle bir sesi çabucak uyduruvermiş[:] dört ay[!] Ama boşlukta, zamansızlıkta geçen bir dört ayın ne kadar sürdüğünü hiç kimse bir başkasına da kendine de anlatamaz, ölçemez, gözünde canlandıramaz; insanın çevresindeki bu hep aynı hiçliğin, bu hep aynı masa, yatak, leğen ve duvar kâğıdının ve hep aynı suskunluğun, insana bakmadan yemeğini içeri iten hep aynı gardiyanın, insanı çıldırtana kadar boşlukta dönüp duran hep aynı düşüncelerin insanı nasıl yiyip bitirdiğini ve yıktığını kimse kimseye anlatamaz. Küçük ipuçlarından beynimin dengesinin bozulduğunu anladım kaygıyla."
  },
  {
    "id": 33,
    "source": "Michael Ende - Momo",
    "text": "Sen onu tanımıyor musun?\" \"Burada turist rehberi filan yok!\" diyerek arkasını döndü yelekli adam. Bahçeye girdi ve kapıyı kapamak üzereyken, birden bir şey hatırlamış gibi durdu. [\"]Sakın sen ünlü hikâyeci Girolamo[']dan söz etmeyesin?\" Evinin nerede olduğunu biliyor musun?\" Adam, \"Gerçekten seni bekliyor mu?\" diye sordu. ne yersem o ödüyor.\" Yelekli adam kaşlarını kaldırdı, kafasını salladı; \"Şu sanatçılar!\" diye yüz buruşturdu. \"Ne garip kaprisleri oluyor bazen!"
  },
  {
    "id": 34,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "E, boşuna nihilist değildi ya! Ertesi gün Bazarov’la birlikte ...’ya gitti. Maryino’daki gençler onların gidişine üzüldüler[;] hatta Dunyaşa birazcık ağladı bile[...] ama ihtiyarlar rahat bir soluk aldılar. 15."
  },
  {
    "id": 35,
    "source": "Stefan Zweig - Satranç",
    "text": "Başlangıçta sakin ve düşünüp taşınarak oynamıştım, kendimi fazla zorlamamak için bir oyundan ötekine geçerken ara vermiştim; ama gerilmiş sinirlerim yüzünden yavaş yavaş sabrım tükendi. Beyaz ben bir hamle yapar yapmaz, siyah ben hırsla saldırıyordu; bir oyun biter bitmez, hemen ötekine koyuluyordum, çünkü her seferinde iki ben’den biri ötekine yeniliyor ve rövanş istiyordu. O aylar boyunca hücremde bu çılgınca enerjiyle kendime karşı kaç tane oyun oynadığımı yaklaşık olarak bile söyleyemem[;] belki bin tane[,] belki de daha fazla[.] Kendimi kurtaramadığım bir düşkünlüktü bu; gece gündüz fil, piyon, kale ve şahtan, a, b ve c’den, mat ve çifte hamleden başka bir şey düşünmüyordum, bütün benliğim ve duygularımla o kareli alana çakılıp kaldım. Oyun sevinci oyun hevesine dönüşmüştü, oyun hevesi oyun dürtüsüne, çılgınlığa, yalnızca uyanık olduğum saatleri ele geçirmekle kalmayıp yavaş yavaş uykuma da sızan tutkulu bir öfkeye."
  },
  {
    "id": 36,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Saat dokuz buçuğu çalıyordu. İlya İlyiç telaşlandı. Yüksek sesle, sinirli sinirli, [\"]Nedir bu yaptığım,[\"] dedi; [\"]bu kadar da olmaz; kalkıp işe başlamalı. Kendimi bırakırsam sonra bir daha...\" — Zahar! diye bağırdı."
  },
  {
    "id": 37,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Ho​şuma gitsin gitmesin, bir zencinin de haklarına uyulması gerek.\" Candy dedi ki: \"Şu orospu sana o lafı söylememeliydi.\" Crooks, yüzünü ekşiterek: \"Zararı yok,\" dedi. \"Siz buraya gelip oturunca bana zenciliğimi unutturdunuz. Onun dediği doğrudur.[\"] Ahırda atlar soludu, zincirler şıngırdadı, bir ses bağırdı[:] \"Lennie, hey Lennie[!] Ahırda mısın?\" Lennie: \"George geldi!\" diye haykırdı. Cevap verdi: \"Buradayım George, buradayım.\" Bir saniye sonra George, kapı boşluğunda belirmiş, etrafına hoşnutsuz bir tavırla bakınıyordu."
  },
  {
    "id": 38,
    "source": "Michael Ende - Momo",
    "text": "Bir küçük berber. Ola ola bunu oldum. Doğru dürüst bir yaşamım olsaydı, bambaşka bir insan olurdum[!]\" Bu doğru dürüst hayatın nasıl olacağına gelince; bunu Bay Fusi[']nin kendisi de bilmiyordu. Yalnız, resimli dergilerde görülen, biraz lüks, biraz görkemli bir şeyler hayal ediyordu. \"Fakat\" diyordu, \"böyle şeylere işimden vakit kalmaz ki..."
  },
  {
    "id": 39,
    "source": "George Orwell - 1984",
    "text": "\"Varlık Bakanlığı belli ki bu yıl büyük iş başarmış,\" dedi başını bilgiççe sallayarak. \"Bana bak, Srnith oğlum, bana verebileceğin bir jiletin var mı?\" \"Hiç yok,\" dedi Winston. [\"]Ben de altı haftadır aynı jileti kullanıyorum.[\"] \"İyi, ne yapalım; bir soralım dedik, oğlum.\" \"Kusura kalma,\" dedi Winston. Bakanlığın açıklaması okunurken kesilmiş olan, yan masadaki vaklama yeniden yükseliverdi. Nedendir bilin­ mez, Winston'ın aklına birden, Çalı süpürgesini andıran saçları ve yüzündeki tozlu kırışıklarıyla Bayan Parsons gel­ di."
  },
  {
    "id": 40,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Gün içinde her şey belli bir zamanda yapılıyordu. Sabahleyin, saat tam sekizde herkes çay içmek için toplanıyordu; çay saatinden kahvaltıya kadar herkes istediğini yapıyordu. Ev sahibesi, idare müdürüyle [(]çiftlik ondalık usule göre işletiliyordu[)], başuşakla ve başkâhyayla ilgileniyordu. Öğle yemeğinden önce ev ahalisi sohbet etmek veya kitap okumak için tekrar bir araya geliyordu; akşamları gezinti yapılıyor, iskambil oynanıyor, müzik dinleniyordu; saat on bir buçukta Anna Sergeyevna odasına çekiliyor, ertesi gün için talimatlarını veriyor ve uykuya yatıyordu. Bu düzenli, biraz da resmî günlük yaşam kuralları Bazarov’un hoşuna gitmemişti; “Rayların üzerinde gider gibi,” diyordu Bazarov: Redingotlu uşaklar, ağırbaşlı kâhyalar, ondaki demokratik duyguyu incitiyordu."
  },
  {
    "id": 41,
    "source": "George Orwell - 1984",
    "text": "O'Brien'ın yüzü silindi, Büyük Birader' in yüzü geldi gözlerinin önü­ ne. Birkaç gün önce yaptığı gibi, cebinden bir bozuk para çıkarıp baktı. Büyük Birader kaba[,] dingin, koruyucu ba­ kışlarla ona dikmişti gözlerini; bu siyah bıyığın altında nasıl bir gülümseyiş gizliydi acaba[?] O kurşun gibi ağır sözler yeniden düştü aklına: SAVAŞ BARIŞTIR ÖZGÜRLÜK KÖLELİKTİR CAHİLLİK GÜÇTOR. 1 7 İkinci bölüm Henüz öğle olmamıştı; Winston odacığından çıkmış, tuvalete gidiyordu."
  },
  {
    "id": 42,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Ayaklanma ve hayvancılığın temel ilkeleri konusunda kendilerine söylenen her şeyi hiç tartışmadan kabul ediyorlardı; özellikle de derin bir saygı duydukları Clover'ın ağzından çıkmışsa... Ama bu söylenenlerden pek bir şey anladıkları söylenemezdi. Çiftlik artık daha zenginleşmiş, daha iyi örgütlenmişti[;] Bay Pilkington[']dan satın alınmış olan iki tarlayla daha da büyümüştü[.] Yel değirmeni en sonunda başarıyla tamamlanmış, çiftlik bir harman makinesine, saman ve ot ambarına kavuşmuş, yeni binalar yapılmıştı. Whymper, kendine tek atlı ufak bir araba almıştı."
  },
  {
    "id": 43,
    "source": "Michael Ende - Momo",
    "text": "Ama arada sırada, geceleri, ipek işlemeli örtülerinin altında, yatağında duyduğu oluyordu. O günlerdeki hikâyeleri candan, yürekten geliyordu. Şimdi üç becerikli bayan sekreteri vardı[;] onun anlaşmalarını imzalıyorlar, hikâyelerini not ediyorlar, reklam işlerini yürütüyorlar ve randevularını ayrılamıyordu[.] Eski Gigi'den ortada pek bir şey kalmamıştı. Ama o gene de günün birinde ne kaldıysa topladı ve kendi kendisiyle bir hesaplaşma yapmaya karar verdi."
  },
  {
    "id": 44,
    "source": "Albert Camus - Yabancı",
    "text": "Kendisi son tanıktı. Bana başıyla şöyle bir işaret yaptı, hemen ardından suçsuz olduğumu söyledi. Ama başkan, [\"]Bize kendi düşüncenizi değil, olayı anlatın, hem bir şey sorulmadan da karşılık vermeyin[!]\" dedi. Öldürülen adamla olan ilişkim hakkında Raymond'a inceden inceye sorular sordular. Raymond bunu fırsat bilip, \"Kız kardeşini tokatlayalı beri bu adam bana düşman kesilmişti,\" dedi."
  },
  {
    "id": 45,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Başını birazcık çevirdi ve onu dalgınlığa iten yükün altından kurtulmaya çabalayarak, “Ne var, babacığım?” dedi. “Yevgeniy,” diye devam etti Vasiliy İvanoviç ve Bazarov gözlerini açmadığı ve onu göremediği halde önünde diz çöktü. “Yevgeniy[,] şimdi daha iyisin; inşallah iyileşeceksin ama bu zamanı kullan[,] annenle beni memnun et, Hıristiyanlık görevini yerine getir[!] Bunu sana söylemek benim için ne kadar korkunç bir şey ama daha da korkuncu... ölümün de ötesi..."
  },
  {
    "id": 46,
    "source": "Michael Ende - Momo",
    "text": "Evlerin duvarlarında, reklam sütunlarında mutluluk sergileyen resimlerin altında şöyle yazılar görülüyordu: Zaman Tasarrufu İyiye Doğru Gidiyor! veya: Gelecek, Zaman Tasarrufuna Bağlıdır! ya da[:] Yaşamını Çoğalt[-]Zamandan Tasarruf Et[!] Ama gerçek başka türlüydü. Gerçi zaman tasarrufu yapanlar, eski tiyatronun oralarda oturanlardan daha iyi giyiniyorlardı."
  },
  {
    "id": 47,
    "source": "Albert Camus - Yabancı",
    "text": "Vermezlerse halim nice olur?\" dedi. 'Bulunmuş Hayvanlarevi'nde, köpeklerin, sahipleri gelinceye kadar üç gün alıkonduğunu, sonra da gereğine bakıldığını söyledim. Sessiz sessiz yüzüme baktı, sonra, [\"]İyi akşamlar[!][\"] dedi. Kapısını kapattı. Odasında bir aşağı bir yukarı gidip geldiğini duydum."
  },
  {
    "id": 48,
    "source": "Albert Camus - Yabancı",
    "text": "Etki olanaklarımı hesaplıyor, düşüncelerimden en iyi verimi elde ediyordum. Hep, en kötü olasılıkları, affımın kabul edilmemesi olasılığını düşünüyordum. \"Ne yapalım,\" diyordum, \"ölmem kaçınılmazmış[!]\" Başkalarından önce ölecektim, su götürür yanı yoktu bunun[.] Ama herkes bilir ki, hayat yaşamaya değmez. Aslına bakarsanız, ihsan ha otuzunda ölmüş ha yetmişinde, pek önemli değildi."
  },
  {
    "id": 49,
    "source": "Michael Ende - Momo",
    "text": "Oyunları onlara bakıcıları öğretiyor ve bu oyunlar hep yararlı bir hizmet şeklinde oluyordu. Ancak, böylece bazı şeyleri unutmaları gerekti. Neleri derseniz[;] sevinmeyi[,] hayal kurmayı ve heyecanlanmayı unuttular[...] Çocukların yüzleri yavaş yavaş küçük birer zaman tasarrufçusuna benzemeye başladı. Kendilerinden beklenen şeyleri asık yüzle, can sıkıntısıyla ve düşmanca tavırlarla yapıyorlardı."
  },
  {
    "id": 50,
    "source": "Albert Camus - Yabancı",
    "text": "Topu topu on kişi kadar vardılar. Bu göz kamaştıran ışık içinde içeriye süzülüyorlardı. Onları gayet iyi görüyordum[;] yüzlerinin ve giysilerinin hiçbir ayrıntısı gözümden kaçmıyordu[.] Bununla birlikte seslerini duymuyor ve gerçekten var olduklarına pek inanamıyordum. Hemen bütün kadınlar önlüklü idiler."
  },
  {
    "id": 51,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "(Fr.) Tercih. (Ç.N.) 46. [(]Fr.[)] İnsanın kafatasına bakarak karakter ve yeteneğini belirtme bilgisi. (Ç.N.) 47. İşte hepsi bu anlamında voila tout demek istiyor."
  },
  {
    "id": 52,
    "source": "Stefan Zweig - Satranç",
    "text": "Kendinizi fazla zorlamayın.” “Zorlamak mı! Ha!” diye kahkahalarla ve kötü kötü güldü. “Böyle tembellik yapacağıma[,] on yedi oyun oynayabilirdim bu arada[!] Bu tempoda ancak uyuyakalmamak için zorlanırım! Evet!"
  },
  {
    "id": 53,
    "source": "George Orwell - 1984",
    "text": "Haftalar­ dır, belki aylardır ilk kez dağıtılıyordu. O ufacık ama çok değerli çikolata parçasını çok iyi anımsıyordu. İki onsluk parçanın [(]o günlerde hala ons diyorlardı[)] üçü arasında paylaşılması gerekiyordu[.] Belli ki, üç eşit dilime bölüne­ cekti. Winston birden çikolatanın tümünün kendisine verilmesi gerektiğini söyleyerek bas bas bağırmaya başla­ mıştı; sanki kendisi değil de, başka biriydi kıyameti ko­ paran."
  },
  {
    "id": 54,
    "source": "Albert Camus - Yabancı",
    "text": "\"Elbette,\" dedim, \"ama bu, zengin olmayı dilemekten, çabuk yüzmeyi, güzel ağızlı olmayı dilemekten daha önemli değildir. Hepsi aynı kapıya çıkar.\" Ama papaz sözümü kesti ve bu başka hayattan ne anladığımı öğrenmek istedi. [\"]Bana bugünkünü anımsatacak bir hayat[!][\"] diye bağırdım. Ve hemen ardından, \"Artık bu şeylerden bıktım,\" dedim. Bana hâlâ Tanrıdan söz etmek istiyordu."
  },
  {
    "id": 55,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Aisopos ya da Ezop: MÖ 7.-6. yüzyıllarda yaşamış Yunan masalcı. [(]Ç[.]N.[)] VI Bazarov geri geldi, masaya oturdu ve acele acele çay içmeye başladı. İki kardeş sessizce ona bakıyorlardı, Arkadiy ise gizlice bir babasına, bir amcasına bakıyordu. “Uzağa mı gittiniz?” diye sordu nihayet Nikolay Petroviç."
  },
  {
    "id": 56,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Kapıdan Slim'in sesi duyuldu: \"Merhaba, dilber kız.\" \"Curley'i arıyorum, Slim.\" \"Pek de aradığın yok galiba. Şimdi gördüm onu, sızın eve gidiyordu.\" Kadın birden ürktü. Odaya doğru[:] [\"]Hoşça kalın çocuklar[!]\" diye haykırdı ve hızla uzaklaştı. George, Lennie'ye baktı. \"Ulan, amma şıllık şey be!\" dedi."
  },
  {
    "id": 57,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Babam, Jandira’ya söylediğim sözü yinelersem dayaktan canımı çıkaracağını açıklamıştı. Öyle ki, soluk alacak cesaretim bile yoktu. En iyisi, şekerportakalı fidanımın küçücük gölgesine sığınmaktı[;] Portuga’nın bana verdiği yığınla resme bakmak ve Luís’e sabırla bilye oynamayı öğretmekti[.] Kardeşim beceriksizdi ama, günün birinde öğrenecekti. Bu süre boyunca duyduğum özlem çok büyük oldu."
  },
  {
    "id": 58,
    "source": "Michael Ende - Momo",
    "text": "Bütün bunları daha arkasından rüyadaymış gibi yürüyordu. İkisi de kimseye çarpmadan, kimseyle toslaşmadan geniş meydanlar, sokak başları geçiyorlardı. Arabalar önlerinden[,] arkalarından akıp gidiyor[;] yayalar ediyordu. Onların yüzünden ne tek bir araba fren yaptı, ne de bir yaya yolunu değiştirdi. Kaplumbağa nerede araba bulunmadığını, nerede yayalara rastlamayacağını önceden sezerek yürüyordu sanki."
  },
  {
    "id": 59,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Boxer, üstüne geldiklerini görür görmez, kocaman ön ayağını kaldırıp köpeklerden birini havada yakaladı ve yere çarptı. Yere yapışan köpek çığlık çığlığa merhamet dilenirken, öteki iki köpek kuyruklarını bacaklarının arasına kıstırıp tabanları yağladı. Boxer[']ın gözü Napoléon[']daydı; köpeği ezip gebertmeli miydi, yoksa salıp koyvermeli miydi[?] Napoléon'un suratı allak bullak olmuştu; Boxer'a, sert bir sesle, köpeği salıvermesini emretti. Bunun üzerine Boxer ayağını köpeğin üstünden çekti, köpek de acı iniltiler çıkararak sıvıştı oradan."
  },
  {
    "id": 60,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Neden oturup da konuşmayalım? Kimseyle konuştuğum yok. Yalnızlıktan imanım gevriyor[.]\" Lennie dedi ki[:] \"Yok, ben konuşmaya monuşmaya gelemem.\" Kadın[:] \"Yalnızlık canıma tak dedi,\" diye devam etti. \"Sen arkadaşlarınla konuşabilirsin. Benimse Curley'den başka konuşacak kimsem yok."
  },
  {
    "id": 61,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Weed'de böyle olduydu ya.\" Bir kağıdı yarı çevirirken durdu. Ürker gibi oklu ve Slim'e bir göz altı: \"Kimseye açmazsın ya?\" \"Ne yaptı Weed'de?\" \"Kimseye söylemezsin, değil mi?.. Söylemezsin, eminim.\" Slim yine sordu[:] \"Ne yaptı Weed[']de[?]\" \"Ne yapacak, al fistanlı bir yosma gördü. Dedim ya, herif kafadan kontak, hoşuna gitti mi bir şey, mutlaka elini sürmek ister. Sadece elini sürmek ister, o kadar."
  },
  {
    "id": 62,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Snowball, bir domuzun koşabileceği kadar hızlı koşuyor, çayırı geçip anayola kavuşmaya çabalıyordu. Ama köpekler de ensesindeydi. Birden kayıp düştü[;] herkes artık kesin yakalandı derken[,] yeniden ayağa kalktı ve daha da hızlı koşmaya başladı[.] Köpekler de fırtına gibiydiler, avlarına eriştiler erişeceklerdi. Bir tanesi tam kuyruğunu kapacaktı ki, Snowball tam zamanında kaçırdı kuyruğunu."
  },
  {
    "id": 63,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Adı ne?” “Çingene.” Canı konuşmak istemiyordu. “Bugün benim için büyük bir gün,” dedim. “İlk olarak arabaya biniyorum[;] yolda Portekizli’nin otomobiline rastladım ve Mangaratiba‘nın düdük sesini işittim[.]” Sessizlik[.] “Bay Aristides! Mangaratiba, Brezilya’nın en önemli treni mi?” “Hayır."
  },
  {
    "id": 64,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Ben de içerim, kanaryaları dinlerim. Derken Marfa semaveri getirir. Ştoltz, omuzlarını silkti[:] [—] Tarantiyev'ler, İvan Gerasimoviç'ler: Peki, peki; çabuk giyin. Zahar'a dönerek: Tarantiyev geldiği zaman yemeği dışarıda yiyeceğimizi söyle. İlya İlyiç bütün yaz hep dışarıda yiyecek; sonbaharda da çok işi olacak, kendisini görmeye vakti olmayacak dersin."
  },
  {
    "id": 65,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Hiç değilse Volga'ya, köylülerin yanına. Orada yapılacak daha iyi şeyler var. Hayatının bir anlamı olurdu; bir amacın, bir işin olurdu; Sibirya[']ya, Şitka[']ya bile giderdim ben olsam[...] Sen de insana her zaman öyle çetin yollar teklif edersin ki. Hem sonra yalnız ben mi böyleyim?"
  },
  {
    "id": 66,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Cevaplarını ihtiyar verdi. Fakat o da besbelli benim gibi lakırdı bulmakta güçlük çektiği için kim olduğumu sordu. Bir an durakladıktan sonra[:] “Ben Marika diye bir kızım; tüccar amcama İstanbul’dan misafir getirdim[,]” dedim ve yürüdüm. Müjgân beni kolumdan tutarak, sürükler gibi koştururken: “Allah cezanı versin. Niçin böyle yaptın?” diyordu."
  },
  {
    "id": 67,
    "source": "İvan Gonçarov - Oblomov",
    "text": "diye haykırdı. Seven bir kalp bilir: Ne istediğini, neler olabileceğini önceden kestirir. Ben dün buraya gelecek durumda değildim[;] konuklarım vardı[;] ama beni beklemek sizi üzer diye[,] uykunuzu kaçırırım diye geldim; size acı vermek istemedim. Sizse... siz beni ağlar görmekten zevk alıyorsunuz."
  },
  {
    "id": 68,
    "source": "George Orwell - 1984",
    "text": "Yenisöylem, Okyanusya'nın resmi diliydi. Yapısı ve kökenine ilişkin açıkla­ malar için Ek'e bakınız. [(]Yazarın notu[)] şındaki bu barikatlara açılan sokaklarda bile siyah üni­ formalı[,] goril suratlı muhafızlar ellerinde coplarıyla kol geziyorlardı. Winston birden geri döndü. Yüzüne dingin, iyimser bir ifade oturtmuştu; tele-ekrana bakarken böylesi daha uygundu."
  },
  {
    "id": 69,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Ama daha önce halledilecek bir işimiz var.\" Sonunda anlaşıldı ki iki domuz, çöpler arasında Bay Jones'un çocuklarının bir okuma kitabını bulmuş, son üç ay boyunca bu kitaptan okuma yazma öğrenmişlerdi. Napoléon, siyah ve beyaz boya kutularını getirtti, hayvanların başına geçerek onları anayola açılan çiftlik kapısının oraya götürdü. Snowball da [(]en iyi yazı yazan oydu[)] fırçayı iki toynağının arasına geçirip kapının en üstteki kol demirine yazılı BEYLİK ÇİFTLİK adını karaladı, yerine HAYVAN ÇİFTLİĞİ yazdı[.] Çiftlik artık bu adla anılacaktı. Daha sonra, çiftlik binalarına geri dönüldü; Snowball ile Napoléon bir merdiven getirtip büyük samanlığın duvarına dayadılar."
  },
  {
    "id": 70,
    "source": "George Orwell - 1984",
    "text": "O, Yehova'yı5 ve Yehova'nın emirlerini bilirdi: dolayısıyla da, başka ad­ lan ya da sıfatları olantüm tanrıların sahte olduğunu. Parti üyesi de, doğru davranışın ne olduğunu bildiği gibi, doğru tutumdan ayrılmanın hangi yollardan mümkün olduğunu da çok genel olarak, belli belirsiz biliyordu. Örneğin, tüm cinsel yaşamı iki Yenisöylem sözcüğüyle, sekssuç [(]cinsel ahlaksızlık[)] ve iyiseks (iffet) ile düzenle- 1. İlkçağ'da birçok Ortadoğu toplumunda tapınılan tanrı. Kenanlılar arasında bereket tanrısı olarak büyük önem taşırdı."
  },
  {
    "id": 71,
    "source": "George Orwell - 1984",
    "text": "Winston'ı unutmuş gibiydiler. Pencerenin önünde, Winston'ın yaşlı adamla kimse duy­ madan konuşabileceği bir oyun masası vardı. Gerçi ihti­ yarla oturup sohbet etmek yine de çok tehlikeliydi[,] ama neyse ki meyhaneye tele[-]ekran yerleştirilmemişti[;] Win­ ston içeri girer girmez saptamıştı bunu. Yaşlı adam, bardağının başına çökerken, \"Bir paynt­ lık doldursaydı eli mi kırılırdı?\" diye homurdandı. \"Ya­ rım litre kesmiyor."
  },
  {
    "id": 72,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Sütlerin nereye gittiği çok geçmeden anlaşıldı. Sütler her gün domuzların lapasına karıştırılıyordu. Elmalar artık olgunlaşmaya yüz tutmuşlardı[;] meyve bahçesinin çimenleri rüzgârla dökülen elmalarla kaplıydı[.] Hayvanlar, doğal olarak, elmaların eşit bir biçimde paylaşılacağını umuyorlardı; oysa bir gün ağaçlardan dökülentüm elmaların toplanması ve koşum takımlarının durduğu odaya getirilerek domuzlara teslim edilmesi buyuruldu. Bazı hayvanlar homurdandıysa da bir yararı olmadı."
  },
  {
    "id": 73,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "ama bütün bunlar hiçbir işe yaramıyordu. Kadının yüzü, bu anlaşılmaz, hemen hemen anlamsız ama büyüleyici yüz ruhunda çok derin kökler salmıştı. Baden’de bir şekilde onunla tekrar eskisi gibi bir araya geldi[;] kadın onu daha önce hiç bu kadar büyük tutkuyla sevmemiş gibi geldi[...] ama bir ay sonra artık her şey bitmişti: Ateş son kez parlamış ve ebediyen sönmüştü. Kaçınılmaz ayrılığın geldiğini sezerek kadınla hiç olmazsa dost kalmak istedi, sanki böyle bir kadınla dostluk mümkünmüş gibi..."
  },
  {
    "id": 74,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Hiç kimse çalıp çırpmıyor, hiç kimse kendisine ayrılan tayın konusunda homurdanıp söylenmiyordu; bir zamanlar çiftlikteki hayatın olağan özelliklerinden sayılan kavgalar, ısırmalar, kıskançlıklar neredeyse tümüyle ortadan kalkmıştı. Kimse işten kaçmıyordu, bir kişi dışında. Evet[,] Mollie[']nin sabahları erken kalkamamak gibi bir sorunu vardı; üstelik[,] ikide bir, toynağına giren bir taşı bahane ederek işi erken bıraktığı da oluyordu. Doğrusu, kedi de bir tuhaftı. Bir süre sonra, yapılacak bir iş çıktığında hiçbir zaman ortalıkta görünmediği anlaşılmıştı."
  },
  {
    "id": 75,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"Tavşanlara ben bakacağım.\" \"Tavşanlara sen bakacaksın.\" Lennie, sevincinden fıkırdadı. \"Mal sahipleri gibi yaşayacağız.\" \"Evet.\" \"Hayır, Lennie. Oraya, derenin öbür yakasına bak; çiftliğimizi görür gibi olmuyor musun[?][\"] Lennie ses çıkarmadı. George yerdeki tabancaya baktı. Şimdi çalılar arasından ayak sesleri geliyordu."
  },
  {
    "id": 76,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Fakat eğlencemiz uzun sürmedi. Pek günahına girmeyeyim ama, galiba aşçı kadın tarafından babama gammazlandık ve zavallı Hüseyin, ondan iki tokat yedikten sonra bir daha ata yanaşmaya cesaret edemedi. Hâlis muhabbet[;] kavgasız, gürültüsüz olmaz, derler[.] Biz de Hüseyin’le günde en aşağı beş nöbet kavga ederdik. Bir tuhaf surat asma tarzım vardı."
  },
  {
    "id": 77,
    "source": "Michael Ende - Momo",
    "text": "Ve sonra da bu insanların çocukları geldiler ve yemeklerinden artırabildikleri ne varsa; biri bir parça peynir, öteki bir parça ekmek, diğeri biraz meyve ve öbürleri de başka şeyler getirdiler. Bu çocukların sayısı çok fazla olduğundan o akşam ortaya öyle çok şey birikti ki, amfiteatrın ortasında çevre halkı arasındaki dostluk böyle başladı. İKİNCİ BÖLÜM [-]OLAĞANÜSTÜ BİR ÖZELLİK VE SIRADAN BİR TARTIŞMA insanların ayırabildiği kadar[,] yiyecek bir şeyler buluyordu; kimi zaman çok, kimi zaman az[...] Başının üzerinde bir damı, yatacak bir yeri, hava soğuduğunda yakacağı bir ocağı vardı. Ve..."
  },
  {
    "id": 78,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Fakat sonra Müjgân’ın söz ve bakışlarındaki manayı anladı. Kabahatli bir çocuk gibi mahcup ve korkak, başını önüne indirdi, yavaşça; -Evet, fazla yorgunum, belki hasta olurum, dedi. Haline bir hasta kadın yorgunluğu çökmüş, gözlerinin biraz evvelki neşesi sönmüştü[:] Hâlâ Kâmran’a bakan Müjgân yavaşça[:] [-]Sen, zannettiğimden ziyade kalpsizsin Kâmran! dedi. O, işitilmemek için aynı yavaş sesle: -Niçin?"
  },
  {
    "id": 79,
    "source": "George Orwell - 1984",
    "text": "Nerdeyse yumruk yumruğa geleceklerdi. \"Bi dakka sus da dinle, be adam! Ne diyorum ben sana, sonu yediyle biten hiçbir numara on dört aydır ka­ zanmadı[!]\" \"Bal gibi de kazandı[!]\" \"Hayır, kazanmadı işte[!] İki yıldan fazla oldu, evde hepsini bir kağıda döküyorum, bir bir kaydını tutuyo­ rum, kaz kafalı! Anlasana, sonu yediyle biten hiçbir numara ..."
  },
  {
    "id": 80,
    "source": "Stefan Zweig - Satranç",
    "text": "“Neden olmasın? C’est son métier.5 Dişim ağrısaydı ve gemide tesadüfen bir diş doktoru olsaydı, dişimi bedavaya çekmesini isteyemezdim ya. Adam ücretini yüksek tutmakta çok haklı[;] her meslekte gerçek profesyoneller aynı zamanda en iyi işadamlarıdır[.] Bana gelince; bence iş ne kadar açık olursa, o kadar iyidir. Bir Herr Czentovic’in bana iyilik yapmasına izin vermektense ve sonunda bir de ona teşekkür etmek durumunda kalmaktansa, para öderim daha iyi."
  },
  {
    "id": 81,
    "source": "Michael Ende - Momo",
    "text": "Sonunda Paolo, \"Ama herhalde bir şey yapmak zorundayız\" dedi. \"Hem de çok çabuk. Zaman hırsızları bizim kararımızı öğrenmeye kalmadan![\"] Turist rehberi Gigi yine ayağa kalktı[:] \"Sevgili arkadaşlar! Durumu bütünüyle düşündüm. Yüzlerce plan yapıp, hepsini bir kenara attım."
  },
  {
    "id": 82,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Hemen gidip ilacı süreyim.\" \"İsterseniz ben yapayım, bay Slim.\" \"Yok, kendim yaparım.\" Kalktı. Crooks durdu. [\"]Söyle.[\"] [\"]Hani şu iri yarı adam var ya, yeni gelen; ahırda köpeklerinizi elliyor.\" \"Zararı dokunmaz. Yavrulardan birini ona verdim.\" \"Haberiniz olsun dedim de. Yavruları sandıklarından çıkarıp mıncıklıyor."
  },
  {
    "id": 83,
    "source": "Albert Camus - Yabancı",
    "text": "Ama, daha önce bana birkaç soru daha sormak istiyormuş. Damdan düşercesine, \"Ananı sever miydin?\" diye sordu. [\"]Evet, herkes gibi[!]\" diye karşılık verdim. O zamana kadar tıkır tıkır daktilo yazan zabıt kâtibi, harfleri şaşırmış olacak ki, bocaladı, geri dönmek zorunda kaldı. Yine belli bir neden yokken, \"Beş kurşunu birbiri ardınca mı attın?\" diye sordu."
  },
  {
    "id": 84,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Ne yapalım, Doktor Bey, üzülmeyiniz. Allah öyle istedi, öyle oldu, dedim. Mahzun mahzun yüzüme baktı[:] [-]Zavallı küçük; ben sana asıl niçin acıyorum, biliyor musun[?] Bir derde uğradığın vakit, asıl teselli edilecek kendin olduğunu unutuyor, başkalarını teselliye başlıyorsun. Senin bu mazlum hallerin beni ağlatacak gibi oluyor küçük."
  },
  {
    "id": 85,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Hayvanlar bir kez daha böyle bir davranışı yasaklayan bir karar alınmış olduğunu anımsar gibi oldularsa da, Squealer onları bir kez daha durumun hiç de böyle olmadığına inandırmayı başardı. Çiftliğin beyinleri olan domuzların sessiz ve sakin bir yerde çalışmalarının kesinlikle gerekli olduğunu söyledi. Kaldı ki, Önderin [(]son zamanlarda Napoléon[']dan hep \"Önder\" diye söz eder olmuştu[)] saygınlığı açısından, basit bir ağıl yerine bir evde yaşaması daha uygundu. Gene de, bazı hayvanlar, domuzların yemeklerini mutfakta yemekle ve oturma odasını eğlence salonu olarak kullanmakla kalmadıklarını, aynı zamanda yataklarda yattıklarını işittiklerinde epeyce rahatsız oldular. Boxer, bu durumu her zamanki gibi, \"Napoléon her zaman haklıdır!\" diyerek geçiştirdi; ama yatakta yatmayı yasaklayan kesin bir yasa olduğunu anımsar gibi olan Clover, büyük samanlığın duvarının önüne gitti ve orada yazılı olan Yedi Emir'i okumaya çalıştı."
  },
  {
    "id": 86,
    "source": "Michael Ende - Momo",
    "text": "İyi ki, böyle gidiyorlardı. Kaplumbağa, nasıl trafik durumunu önceden sezerek yayalardan ve arabalardan etkilenmeden geçmeyi başarıyorsa, duman adamların da ne zaman, hangi köşede karşılarına çıkacağını önceden seziyordu sanki... Zira ara sıra onlar bir köşeden geçitikten az sonra duman adamlar orada beliriyor[;] fakat onlar uzaklaşmış oluyorlardı[.] Böylece hiçbirisi ile karşılaşmadılar. \"İyi ki okumayı önceden öğrenmişim, değil mi?\" diye farkında olmadan Kaplumbağanın sırtında bir alarm işareti gibi tek kelime belirdi: \"Sus!\" karanlık gölge geçti."
  },
  {
    "id": 87,
    "source": "Stefan Zweig - Satranç",
    "text": "“Bizi ölçüp tarttı ve çok hafif buldu,” diye düşündüm, bu soğuk, küçümseyici bakış beni biraz kızdırmıştı ve öfkemi McConnor’dan çıkarmak için ona bakıp “Hamleniz ustayı pek etkilemişe benzemiyor,” dedim. “Hangi ustayı?” Az önce yanımızdan geçen ve oyunumuza burun kıvırarak bakan o beyin, satranç ustası Czentovic olduğunu açıkladım ona. Şimdi de buna katlanmamız ve bizi küçümsemesine yüreğimiz sızlamadan alışmamız gerektiğini ekledim[;] biz zavallılar kaderimize razı olmalıydık[.] Ama laf olsun diye söylediklerimin, McConnor’ın üzerinde hiç beklenmedik bir etki yapması beni şaşırttı. Birden heyecanlandı, oyunumuzu unuttu, hırstan yerinde duramıyordu."
  },
  {
    "id": 88,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Ekim başlarıydı; ekinler biçilip istiflenmiş, harman büyük ölçüde kaldırılmıştı. Bir gün birden posta güvercinleri hızla dolanarak geldiler, telaşla Jones ile adamları, Foxwood ve Pinchfield çiftliklerinden yarım düzine adamla birlikte, parmaklıklı kapıdan içeri girmişler, araba yolundan çiftliğe geliyorlardı. Jones[,] elinde bir tüfek[,] en önde yürüyor; eli sopalı adamlar da onu izliyorlardı. Besbelli, çiftliği geri almayı kafalarına koymuşlardı. Aslında, böyle bir girişim uzun zamandır beklendiği için bütün önlemler alınmış, gerekli bütün hazırlıklar yapılmıştı."
  },
  {
    "id": 89,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"Neden okutuyorsun bunu bana?\" Whit dedi ki: \"Devam et. Altındaki imzayı oku.\" Slim okudu: \"Size hayırlı işler dilerim. William Tenner.\" Tekrar Whit'e baktı: \"Okuduk, ne olacak[?]\" \"Bill Tenner'i hatırlıyor musun[?] Üç ay kadar önce burada çalışıyordu.\" \"Mektubu o mu yazdı diyorsun?\" Whit: \"Ta kendisi,\" diye haykırdı. \"Odur.\" Slim: \"Doğru diyorsun herhalde."
  },
  {
    "id": 90,
    "source": "George Orwell - 1984",
    "text": "Bazı ayrıksı örnekler dışında, tüm çekimler aynı kurallara bağlıydı. Örnekse, tüm ey­ lemlerde, geçmiş zaman çekimi aynıydı ve -di (-dı) ile sonlanıyordu. Çalmak[']m geçmiş zaman çekimi çaldı, düşünmek'in ise düşündü idi; l;[?]u kurala uymayantüm çekimler kaldırılmıştı. Tüm ç©ğul sözcükler, sonlarına -ler ya da -lar eki getirilerek oluşturuluyordu. Sözgelimi, asar sözcüğü yalnızca eserler olarak kullanılıyordu."
  },
  {
    "id": 91,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Bulutun parmağına kondu.” “Gördüm.” Başımı Minguinho’nun göğsüne dayadım ve bulutun uzaklaşışını seyrettim. “Ona hiçbir zaman kötü davranmadım.” Başımı dala doğru çevirdim. “Xururuca[!]” “Ne var[?]” “Ağlamak kötü bir şey mi[?]” “Ağlamak hiçbir zaman kötü değildir, budala. Neden sordun?” “Bilmiyorum. Bir türlü alışamadım."
  },
  {
    "id": 92,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Ülkemiz, topraklarında yaşayanlara düzgün bir hayat sunamayacak kadar yoksul mudur? Hayır, yoldaşlar, asla! İngiltere toprakları bereketlidir[;] havası suyu iyidir yurdumuzun; bugün bu ülkede yaşayan hayvanlardan çok daha fazlasına bol bol yiyecek sağlayabilir[.] Yalnızca şu bizim çiftlik bile bir düzine atı, yirmi ineği, yüzlerce koyunu besleyebilir; besleyebilir ne demek, onlara bugün bizim hayal bile edemeyeceğimiz kadar rahat ve onurlu bir hayat yaşatabilir. Öyleyse, bu sefilliğe neden boyun eğelim?"
  },
  {
    "id": 93,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "(Ç.N.) 28. İngiltere’nin en eski tımarhanesi. [(]Ç[.]N.[)] XIV Birkaç gün sonra valinin balosu oldu. Matvey İlyiç “şölenin gerçek kahramanıydı”, kent asillerinin başkanı, herkese sırf Matvey İlyiç’e olan saygısı yüzünden geldiğini söyleyip durdu, vali ise baloda da kımıldamadan durduğu anlarda bile “emirler yağdırmaya” devam etti. Matvey İlyiç’in hareketlerindeki yumuşaklık, ancak onun azametiyle ölçülebilirdi."
  },
  {
    "id": 94,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "George, kağıtları gürültülü bir şekilde karıştırarak verdi. Whit bir sayı tahtasını önüne çekerek, fişleri düzeltti. Whit dedi ki: \"Galiba sahiden çalışmaya geldiniz, siz ikiniz[?]\" George: \"Ne demek istiyorsun[?]\" diye sordu. Whit güldü: \"Cuma günü geldiniz de! Pazardan önce iki gün çalışmak zorundasınız.\" George: \"Bu hesaba aklım ermedi,\" dedi."
  },
  {
    "id": 95,
    "source": "George Orwell - 1984",
    "text": "Winston bir an O'Brien'la göz göze geldi. O'Brien, hep yaptığı gibi, gözlüğünü çıkarmış, yeniden burnunun üstüne yerleştiriyordu. Saniyenin onda biri kadar göz göze geldiler, ama bu kadarcık bir süre bile Winston[']ın, O[']Brien'ın kendisi gibi düşündüğünü anlamasına yetti; evet, anlamıştı! En küçük bir yanılgıya yer yoktu. Sanki kafalarının içindekiler gözlerinden geçerek birbirine akı­ yordu."
  },
  {
    "id": 96,
    "source": "Stefan Zweig - Satranç",
    "text": "Bir satranç ustasına, hem de dünyanın bir numarası olan bir ustaya kafa tutabileceğimi iddia etmemi ciddi ciddi beklemiyorsunuz umarım. Beni ilgilendiren ve kafamı kurcalayan tek şey, o zaman hücrede yaşadığım satranç oyunu muydu yoksa delilik mi, o tehlikeli kayalığın hemen önünde miydim yoksa çoktan ötesine geçmiş miydim, bunları açığa çıkarmak için duyduğum gecikmiş merak, yalnızca bu, yalnızca bu.” O anda geminin kıç tarafından, akşam yemeğini haber veren gong duyuldu. Neredeyse iki saat laflamış olmalıydık[;] Dr[.] B. her şeyi burada özetlediğimden çok daha ayrıntılı anlatmıştı bana."
  },
  {
    "id": 97,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Herkesi sevdikleri için iyi insan sayılırlar; oysa kimseyi sevmezler ve kötü olmadıkları için iyidirler. Böyle bir adamın önünde bir fakire sadaka verirseniz o da verir; ama küfredin, alay edin, o da aynı şeyi yapar. Ona zengin denemez; çünkü zengin değil[,] fakirdir; ama tam fakir de denemez[,] çünkü ondan daha fakirleri çoktur[.] Yıllık küçük bir geliri vardır; üç yüz ruble kadar. Bir küçük memurluktan da beş on ruble alır."
  },
  {
    "id": 98,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Öbür sınıflara baktım: Her masanın üstündeki bardakta çiçek vardı. Bir tek bizim sınıftaki bardak boş duruyordu. * * * Ama en büyük serüvenim şu oldu[:] “Biliyor musun, Minguinho; bugün yarasa oldum.” “Şu bana sözünü ettiğin, gelip sizinle oturması gereken Luciano gibi mi[?]” “Hayır, aptal. Bir arabanın arkasında yarasalık yaptım. Okulun önünden bir otomobilin geçmesini beklersin, sonra koşup arkasındaki yedek tekerleğe yapışırsın."
  },
  {
    "id": 99,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Ardından, yanıt vermek üzere Napoléon kalktı ayağa. Çok sakin bir sesle, yel değirmeninin saçmalıktan başka bir şey olmadığını, yel değirmenine oy vermeyi kimseye öğütleyemeyeceğini söyledi ve hemen yerine oturdu. Konuşması yarım dakika bile sürmemişti[;] sözlerinin etkisinin farkında değilmiş gibi görünüyordu[.] Bunun üzerine, yerinden fırlayan Snowball, yeniden melemeye başlayan koyunları susturarak, yel değirmeninin nimetlerini anlatan ateşli bir söylev çekti. O ana kadar, yel değirmenini isteyen hayvanlarla yel değirmenine karşı çıkan hayvanların sayısı aşağı yukarı eşit görünüyordu, ama Snowball'un söz ustalığı eşitliği bir anda bozuverdi."
  },
  {
    "id": 100,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Vakadan sonra ilk defa sen diyordum. Kâmran, pantolonuna dikkat etmeden oradaki bir kayanın üstüne oturuverdi. Onu[,] hemen kolundan tutup kaldırdım[:] [-]Sen, naziksin; kuru yere oturma, dedim ve arkamdaki lacivert pardösüyü çıkararak oturacağı yere serdim. Ne yapıyorsun, Feride? dedi."
  },
  {
    "id": 101,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "* * * O akşam babam dışarı çıkmamıştı. Uyuyan Luís’den başka evde kimse yoktu. Annemin kentten dönmüş olması gerekiyordu ama[,] bazı haftalar İngiliz Değirmeni’nde gece çalışmasına kalıyordu[;] onu ancak pazar günleri görüyorduk[.] Babamın yanında kalmaya karar vermiştim, böylece azgınlık yapmayacaktım. Salıncaklı koltuğa oturmuştu, dalgın gözlerle duvara bakıyordu."
  },
  {
    "id": 102,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Hava karardığında hâlâ aç olan hayvanlar sonunda dayanamadılar. İneklerden biri boynuzuyla ambarın kapısını kırdı; içeri dalan hayvanlar yem kovalarından karınlarını doyurmaya koyuldular. Tam o sırada uyanıveren Bay Jones[,] dört işçisini de yanına alıp ambara koştu[;] hep birlikte hayvanları kırbaçlamaya başladılar[.] Bu da, hayvanların sabrını taşıran son damla oldu. Önceden hiçbir şey tasarlamamalarına karşın, topluca zorbaların üstüne atıldılar."
  },
  {
    "id": 103,
    "source": "Stefan Zweig - Satranç",
    "text": "Dün ne söyledim, gelecek sefer ne söylemeliyim? Sözcüklerle anlatılamayacak bu durum dört ay sürdü. Eh[,] dört ay, yazması kolay[:] altı üstü birkaç harf[!] Söylemesi de kolay: dört ay, iki hece! Çeyrek saniye içinde dudaklar böyle bir sesi çabucak uyduruvermiş: dört ay!"
  },
  {
    "id": 104,
    "source": "Stefan Zweig - Satranç",
    "text": "Son hamleler sırasında yüzü solgunlaştı gibi gelmişti bana. Ama kendini denetlemeyi iyi biliyordu. Sakin görünümünü korudu ve taşları ağır devinimlerle tahtadan iterken kayıtsızca sordu[:] “Beyler üçüncü bir oyun isterler mi[?]” Tam bir tüccar ağzıyla sordu bu soruyu[.] Ama işin tuhaf yanı, bunu sorarken McConnor’a bakmayıp keskin gözlerini dosdoğru kurtarıcımıza dikmiş olmasıydı. Atın yeni, daha iyi bir biniciyi eyerde oturmasından anlaması gibi, o da son hamleler sırasında asıl gerçek, rakibini ayrımsamış olmalıydı."
  },
  {
    "id": 105,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Ama beni öyle kötü dövdü ki, Portuga; öyle kötü dövdü ki. Önemi yok artık.” Uzun uzun burnumu çektim. “Önemi yok[,] onu öldüreceğim[!]” “Ne diyorsun sen, küçük; babamı mı öldüreceksin[?]” “Evet, yapacağım bunu. Başladım bile. Öldürmek, Buck Jones’un tabancasını alıp güm diye patlatmak değil!"
  },
  {
    "id": 106,
    "source": "Stefan Zweig - Satranç",
    "text": "Ama ben yalnızca sesine kulak kabarttım; bu konuşan, bir insan değil miydi? Yeryüzünde beni sorgulamayan, bana işkence yapmayan bir insan var mıydı gerçekten? Üstelik –akıl almaz bir mucize[!]– yumuşak[,] sıcak, neredeyse sevecen bir kadın sesi. Aç gözlerle ağzına bakıyordum, çünkü sanki cehennemde geçen bu bir yıl içinde, bir insanın başka biriyle iyilikle konuşabileceğine inanmaz olmuştum. Bana gülümsedi –evet, gülümsedi, demek iyilikle gülümseyebilen insanlar vardı hâlâ–, sonra uyarır gibi parmağını dudaklarına götürdü ve usulca uzaklaştı."
  },
  {
    "id": 107,
    "source": "Stefan Zweig - Satranç",
    "text": "Onun oyuna karışması sayesinde bir dünya şampiyonuyla berabere kalmamız beklenmedik bir şanstı ve sihirli bir değnek etkisi yaptı. Tahtayı daha iyi görmesini sağlamak için hep birden kenara çekildik. McConnor bir kez daha sordu[:] “Şah g8’den h7’ye, öyle mi[?]” “Aynen öyle[!] Öncelikle geri çekilin.” McConnor adamın dediğini yaptı ve bardağa vurduk. Czentovic o alışılmış sakin adımlarıyla masamıza geldi ve bir bakışta karşıt hamleyi ölçüp tarttı."
  },
  {
    "id": 108,
    "source": "Michael Ende - Momo",
    "text": "sarhoş olduğum için bir duvarı bile düzgün öremezmişim. Hatta büyükbabam da öyleymiş. Piza[']daki eğri kuleyi o yapmış![\"] \"Fakat Nikola\" diye karıştı Nino, \"Bu şakaydı, canım!\" \"Aman ne güzel şaka!\" diye homurdandı Nikola. \"Ben böyle şakaya gülemem.\" Bunun da sebebi anlaşıldı. Meğer Nino bunu, Nikola'nın başka bir şakasına karşılık olarak yapmış."
  },
  {
    "id": 109,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Zaman zaman analarından emdikleri süt burunlarından geldi; aletler hayvanlara göre değil, insanlara göre yapılmıştı; arka ayaklarının üzerine kalkmalarını gerektiren aletleri kullanamamaları çok büyük bir zorluk çıkarıyordu. Ama domuzlar o kadar akıllıydılar ki, her güçlüğün üstesinden gelmenin bir yolunu buluyorlardı. Atlara gelince[;] onlar tarlayı karış karış biliyorlar[,] ekinlerin biçilip toplanması işinden Jones ile adamlarından çok daha iyi anlıyorlardı[.] Domuzlar, doğrudan çalışmıyorlar, öbürlerini yönetiyor ve denetliyorlardı. Üstün bilgileriyle, önderliği üstlenmeleri doğaldı."
  },
  {
    "id": 110,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Dışarda bir koşum hışırtısı ve ağır yüklü dingillerin gıcırtısı duyuldu. Uzaktan bir haykırış işitildi: \"Seyis!.. Hey, Seyis!\" Sonra[:] \"Dinine yandığım, nereye cehennem oldu şu cenabet zenci be!\" George açtığı kağıtları seyrediyordu, sonra kağıtları karıştırdı ve Lennie[']ye döndü. Uzandığı yerden Lennie onu gözetliyordu. \"Bana bak, Lennie!"
  },
  {
    "id": 111,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "ahenk: Uyum. âhir: Son. âhiret: [(]Ahret[)] Dinî inanışa göre, insanın öldükten sonra dirilip sonsuza dek kalacağı ve Tanrı'ya hesap vereceği yer. Öbür dünya. ahz: Alma."
  },
  {
    "id": 112,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Artık bütün emirler Squealer ya da öteki domuzlardan biri tarafından iletiliyordu. Napoléon ancak on beş günde bir halkın arasına çıkıyor, çıktığı zaman da yanında yalnızca köpeklerden oluşan maiyeti değil, siyah bir horoz da bulunuyordu. Horoz önden yürüyor ve Napoléon konuşmasına başlayacağı zaman bir borazancı gibi, avazı çıktığı kadar, \"Ü[-]ürü[-]üüü!\" diye ötüyordu. Napoléon'un, çiftlik evinde bile ötekilerden ayrı odalarda kaldığı söyleniyordu. Yemeklerini yalnız başına yerken, yanı başında iki köpek bekliyor; bir zamanlar oturma odasındaki cam dolapta duran Crown Derby yemek takımını kullanıyordu yalnızca."
  },
  {
    "id": 113,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "“Bu, alaycı huyunuzun sizde bıraktığı eski izler yüzünden... (“Eski izler!” diye geçirdi içinden Arkadiy. “Bazarov bunu işitseydi keşke[!]”[)] Bekleyin siz, değiştireceğiz sizi.” “Beni kim değiştirecek[?] Siz mi?” “Kim mi? Ablam; artık kavga etmediğiniz Porfiriy Platonoviç; üç gün önce kiliseye götürdüğünüz teyzem.” “Reddedemezdim ki!"
  },
  {
    "id": 114,
    "source": "George Orwell - 1984",
    "text": "Ancak bir keresinde, yan yana oturan iki kadının telaşla fısıldaşmaları içerideki gürültü patırtı arasında Winston'ın kulağına çalınmıştı; \"yüz bir numaralı oda\"dan söz edildiğini duymuş, ama bir şey anlamamıştı. Oraya getirileli herhalde iki üç saat olmuştu. Kar­ nındaki ağrı dinmek bilmiyordu[;] bazen hafifliyor[;] bazen şiddetleniyor, zihni de buna uygun olarak bir açılıyor, bir bulanıyordu[.] Şiddetlendiğinde, ağrının kendisinden ve yemek yeme isteğinden başka bir şey düşünemiyordu. Hafiflediğinde ise, ürküye kapılıyordu."
  },
  {
    "id": 115,
    "source": "İvan Gonçarov - Oblomov",
    "text": "İlya İlyiç: — Gir! dedi. Kapı kolayca açılabilirdi; ama Zahar içeriye giremiyormuş gibi haller çağırdı[:] [—] Buraya gel[!] Zahar güçlükle ilerledi; arkasından kapıyı hemen kapadı, sırtını dayayıp durdu. İlya İlyiç yanında bir yer göstererek: — Buraya!"
  },
  {
    "id": 116,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Tutmuş, bir tanecik kızını belindeki kılıçtan başka malı, mülkü olmayan bir mülazıma vermiş, hürriyete kadar şöyle böyle geçinmişler. Komşum 31 Mart’ta, Hareket Ordusu’yla. İstanbul’dan dönen bir ahbaptan[,] kocasının [(]B.[)] de bulunduğunu ve bura yerlilerinden bir kadınla evlendiğini haber almış. Eh, olur ya; şeriatımız dörde kadar izin veriyor. Zavallı komşum biraz ağlayıp sızladıktan sonra üç çocuğunu almış ve buraya gelmiş."
  },
  {
    "id": 117,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Bende mutluluk korkuyu bastırıyor. Ben sizin gözlerinizin parlamasına, beni aramak için tepeleri tırmanmanıza, uyuşukluktan kurtulup bana bir kitap ya da bir çiçek getirmek için şehre koşmanıza, benim için gülmenize ve hayata bağlanmanıza değer veriyorum. Bir hata işliyorsam, sonradan buna vahlanacaksam [(]elini kalbine koyarak[)] hiç olmazsa şuramda duyuyorum ki, gelecek günler benim yüzümden fena olmayacak. Demek kader bana engel oldu, Tanrının isteği bu değilmiş diyeceğim. Gelecekte gözyaşı dökmekten korkmuyorum..."
  },
  {
    "id": 118,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "George!.. George!..\" George, çalılar arasından sessizce çıktı, tavşan da Lennie'nin kafasına girip saklandı. \"Ne bağırıp duruyorsun öyle[?]\" Lennie, dizleri üstünde doğruldu[:] \"Beni yalnız bırakmayacaksın, değil mi, George[?] Beni bırakmayacaksın sen, bilirim.\" George hızlı adımlarla yaklaşarak yanına oturdu. \"Hayır.\" Lennie: \"Biliyordum ben,\" diye haykırdı."
  },
  {
    "id": 119,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Ötekileri eğitme ve örgütleme işi, doğal olarak, genellikle hayvanların en zekileri diye bilinen domuzlara verildi. Domuzların en yeteneklileri, Bay Jones'un satmak için yetiştirdiği, Snowball ve Napoléon adlı iki genç erkek domuzdu. Napoléon, irikıyım, sert bakışlı bir Berkshire domuzuydu[;] daha doğrusu, çiftlikteki tek Berkshire[']dı[.] Pek konuşkan sayılmazdı, ama istediğini söke söke almayı bilen biri olarak tanınırdı. Snowball, Napoléon'dan daha canlı, daha hayat dolu bir domuzdu; hem ağzı daha iyi laf yapardı, hem de daha yaratıcıydı; ama kişiliğinin Napoléon kadar sağlam olmadığı söylenirdi."
  },
  {
    "id": 120,
    "source": "Albert Camus - Yabancı",
    "text": "Hayretten donakalmıştım. Jandarmalardan birinin kulağına eğildim ve nedenini sordum. Bana, [\"]Sus![\"] dedi ve biraz sonra, [\"]Bütün avukatlar böyle yapar,\" diye ekledi. Düşündüm: bu, beni konudan uzak tutmak, hiçe saymak, bir bakıma da benim yerimi almak demekti. Ama ben, sanırım, bu mahkeme salonunun çok uzaklarındaydım."
  },
  {
    "id": 121,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Kadın ona yaklaştı: \"Ne yapacağımı bilirsin, değil mi?\" Crooks, gitgide ufalıyordu adeta, duvara büzüldükçe büzülüyordu. \"Evet, efendim.\" \"O halde haddini bil, zenci parçası. Seni bir ağaç dalında sallandırırım[;] hem o kadar kolaylıkla ki, tadı bile çıkmaz.[\"] Crooks büzüle büzüle adeta yok olmuştu. Artık ne kişiliği kalmıştı, ne benliği; sempati veya antipati uyandırabilecek hiçbir şeyi kalmamıştı. Korkudan titreyen bir sesle: \"Evet, efendim,\" dedi."
  },
  {
    "id": 122,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "5. (Fr.) Ama ben sana para verebilirim. [(]Ç[.]N.[)] IX Bazarov da aynı gün Feneçka’yla tanıştı. Arkadiy’le birlikte bahçede dolaşıyor ve ona başka ağaçların, özellikle de meşe fidanlarının neden tutmadığını anlatıyordu. “Buraya daha fazla gümüşkavak, çam, belki de ıhlamur dikmeli, altlarına da kara toprak koymalı."
  },
  {
    "id": 123,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "* * * Glória beni hazırlarken kuşkuluydu. Lastik pabuçlarımı giymeme yardım ediyordu. “Yürüyebilecek misin[?]” “Tamam, tamam.” “Rio[-]Sáo Paulo yolunda yaramazlık yapmayacaksın, değil mi[?]” “Hayır yapmayacağım.” “Söylediğin doğru muydu? Hani… Arabanın altına…” “Hayır. Kimsenin beni sevmediğini düşündükçe çok mutsuz olmuştum da.” Sarı saçlarımı okşadı ve beni gönderdi."
  },
  {
    "id": 124,
    "source": "Albert Camus - Yabancı",
    "text": "Biz istifimizi bozmadık, ama Raymond, \"Çıngar çıkarsa, Masson, sen ikinciyi üzerine alırsın. Ben benim belalının icabına bakarım. Bir üçüncüsü gelirse[,] o da senin Meursault[!][\"] dedi. \"Olur,\" diye yanıtladım. Masson ellerini ceplerine soktu."
  },
  {
    "id": 125,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"İkiniz buradan gitseniz daha iyi olur herhalde,\" dedi. \"Burada kalmanızı canım istiyor mu, onu pek bilemem. Ho​şuma gitsin gitmesin, bir zencinin de haklarına uyulması gerek.[\"] Candy dedi ki[:] \"Şu orospu sana o lafı söylememeliydi.\" Crooks, yüzünü ekşiterek[:] \"Zararı yok,\" dedi. \"Siz buraya gelip oturunca bana zenciliğimi unutturdunuz. Onun dediği doğrudur.\" Ahırda atlar soludu, zincirler şıngırdadı, bir ses bağırdı: \"Lennie, hey Lennie!"
  },
  {
    "id": 126,
    "source": "İvan Gonçarov - Oblomov",
    "text": "\"Ben de pekâlâ mektup yazabilirim; mektuptan çok daha zor şeyler yazdım. Ne oldu bana? Taşınmak da ne imiş[;] esnedi[)] uyumak nedir bilmezler[...] Hayatın tadını çıkarır, her yere gider, görülecek her şeyi görürler, her şeyi merak ederler. Ya ben?"
  },
  {
    "id": 127,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "El, ayak çekilmiş, fenerler sönmüş, biraz evvel sahil fenerleriyle oynaşan deniz bile, şimdi kumsalın bir kısmını boş bırakarak daha uzaklara çekilmiş, yavaş yavaş uyuyan bir çocuk gibi başını kayaların beyaz yastığına koymuş... Ben buraya bugün gelirken... [(]Fakat bunu yazmaya cesaret edemeyeceğim[,] dursun.[)] Karşıyaka, 7 Ekim Reşit Bey’in köşkünde hayat fena geçmiyor. Talebelerim, biri ben yaşta, biri daha küçük iki kız. Büyüğünün ismi Ferhunde, güzellikte beybabasının bir eşi."
  },
  {
    "id": 128,
    "source": "Michael Ende - Momo",
    "text": "Anlaşıldı mı? Şimdi arkadaşlar, haydi iş başına!\" O gün ve sonraki günlerde, yıkık tiyatroda ateşli çalışmalar yapıldı. Kâğıtlar, kartonlar, boya kutulan, fırçalar, zamklar, çıtalar ve daha ne gerekiyorsa, çocuklar taşıyıp getirmişlerdi [(]nerden ve nasıl olduğunu hiç karıştırmayalım daha iyi[)][.] Bazı çocuklar kartonları, levhaları çıtalara tutturup çakarken, diğerleri de en etkili sözleri bulup düzgün yazısı olanlara yazdırıyorlardı. Şutür sloganlar vardı: Zaman Tasarrufu?"
  },
  {
    "id": 129,
    "source": "Stefan Zweig - Satranç",
    "text": "Ama bu onun işine yaramayacak! Boştaki piyona aldırmadan atınızı c3’ten d5’e getirerek saldırırsınız ve eşitlik yeniden sağlanır. Savunmak yerine bütün gücünüzle saldırın[!]” Ne demek istediğini anlamadık[.] Söyledikleri Çinceydi sanki. Ama bir kere kendini kaptıran McConnor hiç düşünmeden söyleneni yaptı."
  },
  {
    "id": 130,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Boncuklu lamba seyredip belsoğukluğuna yakalanmak isteyen varsa, gidecekleri yer malum.' Sonra da dedi ki: 'Boncuklu lamba seyretme sevdası yüzünden badi badi yürüyen ne adamlar bilirim ben.'\" George: \"Demek Clara, öteki evi işletiyor ha?\" \"Evet,\" dedi Whit. \"Oraya hiç gitmeyiz. Clara[']da üç dolara fişek atılır[,] bir kadeh parlatmak istersen otuz beş sent verirsin; üstelik hoş laf etmesini de bilmez. Ama Suzy'nin evi temizdir, güzel koltukları da vardır. Üstelik, rengi bozukları da almaz içeri.\" George: \"Lennie ile ben, biraz metelik tutmaya bakıyoruz,\" dedi."
  },
  {
    "id": 131,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Çünkü hemen bana hak verdi. Yalnız, başka bir yerde bana göre ders bulmak müşküldü. Daha az maaşlı daha küçük bir mektep olursa da kabul edeceğimi söyledim[;] elverir ki uzakta bir yer olsun iki gün evvel emri geldi [-]Ç[...] Rüştiyesine tayin etmişler. ÜÇÜNCÜ KISIM Ç...23 Nisan BUGÜN Hıdrellez."
  },
  {
    "id": 132,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Ben yapacak başka şey bulamadığım için hâlâ gülmeye devam ediyordum. O, meşhur “karga ile tilki” masalındaki tilki gibi ağacın altında sinsi sinsi dolaşmaya başladı. Nihayet utanıp sıkılmayı bırakarak bana[:] [-]Feride, çocuğum; azıcık aşağı iner misin? dedi. Ben, gülmeyi kestim; ciddi bir sesle: -Ne münasebet?"
  },
  {
    "id": 133,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Çabuk in! Ben konuşmaya sıkılırım. Acele acele çarşafımı giyerken kendi kendime gülüyordum[;] odasında elini kolunu hareket ettirmeye üşenen bir tembeller şahı buraya kadar zahmet etsin[,] inanılır şey değil[!] Aşağıda, dershane kapısı önünde, biri gayet uzun, öteki gayet kısa boylu iki adamla karşılaştım. Ben, gözlerimle etrafta onu ararken kısa boylu adam, bana doğru yürüdü."
  },
  {
    "id": 134,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Kadın yine alık alık baktı. Fakat birden yüzünde bir anlayış, hatta bir telaş ifadesi belirdi. Rehine verdiği incileri, gümüşleri, kürkü hatırladı; Ştoltz[']un bu borçtan söz ettiğini sandı; ama bundan kimin haberi olabilirdi[?] Sırrı değil Ştoltz sabırsızlıkla sorusunu tekrarladı: — Size ne kadar borcu var? Hiç borcu yok bana."
  },
  {
    "id": 135,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Curley, bu sefer gözlerine vurdu. Lennie'nin geniş yüzü kana hoyandı. George bir daha haykırdı[:] [\"]Vur, korkma[!]\" Curley yumruğunu sallarken Lennie elini yakaladı. Bir an sonra, Curley, olta ucunda sallanan bir balık gibi, yere yıkılıyordu. kapalı yumruğu Lennie'nin kocaman avuçları içinde kaybolmuştu."
  },
  {
    "id": 136,
    "source": "Michael Ende - Momo",
    "text": "Bu anlayamadığı itişe karşı direnmek için evlerin çıkıntılarına sığınıyor, bazen de dört ayak olup emekliyordu. Sonunda sokağın öbür ucunda durduğunu gördüğü kaplumbağaya doğru bağırdı: \"İlerleyemiyorum! Yardım et bana[!][\"] yazılar belirmişti[:] \"Geri geri yürü!\" Ama kendisine de bir haller olduğunu fark etti. Böyle geriye doğru yürürken, düşünceleri de geriye doğru kayıyordu, nefes alışı terstendi, kendini geriye gidiyor sanıyordu. Kısacası geriye doğru yaşıyordu!"
  },
  {
    "id": 137,
    "source": "Albert Camus - Yabancı",
    "text": "Oturuma ara verildi ve avukatım bitkin bir halde yerine çöktü. Meslektaşları yanına gelip elini sıktılar. [\"]Harikulade azizim[!][\"] dediklerini duydum. Hatta içlerinden birisi beni tanık tutup, \"Değil mi?\" dedi. Evet anlamında başımı salladım."
  },
  {
    "id": 138,
    "source": "George Orwell - 1984",
    "text": "ele­ ment Kilisesi'ydi adı.\" Saçma bir şey söyleyeceğinin far­ kındaymışçasına, özür dilercesine gülümseyerek ekledi: '\"Portakal var, limon var' diye çalar çanları St. element' in!\" \"O da ne?\" dedi Winston. [\"]Küçükken söylediğimiz çocuk şarkılarından biri iş­ te; [']Portakal var, limon var, diye çalar çanları St[.] element' in.' Devamı nasıldı hatırlamıyorum, ama sonu aklımda: 'Al şu mumu, doğru yatağına, yoksa yersin baltayı kafa­ na.' Birtür dans da denebilir. Altından geçmen için kol­ larını kaldırular, tam 'Yoksa yersin baltayı kafana' derken de kollarını indirip seni yakalarlardı."
  },
  {
    "id": 139,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Amma da aceleci adam! Rehin işi için gerekli bütün vesikaları göndereceğini vaat ediyor. Ona bir vekâletname gönderecekmişim[;] noterde tasdik ettirmeliymişim; daha da neler[!] Noterin nerede olduğunu bile bilmiyorum. Kime başvuracağım?\" kendisine notere gidip gitmediğini sordu."
  },
  {
    "id": 140,
    "source": "Michael Ende - Momo",
    "text": "\"Farzedelim ki, biri oraya geldi. her şeyi alt üst edip aramazlardı.\" \"Ya onu buldularsa?\" diye bağırdı Beppo. \"Ne olur o zaman[?]\" İki eliyle genç arkadaşının yakasına yapışıp, sarsmaya başladı[:] \"Gigi, deli olma[!] Duman adamlar gerçekten var! Bir şeyler yapmalıyız, hem de çok çabuk!\" \"Sakin ol Beppo, dur\" diye korkuyla kekeledi Gigi."
  },
  {
    "id": 141,
    "source": "Stefan Zweig - Satranç",
    "text": "Birden heyecanlandı, oyunumuzu unuttu, hırstan yerinde duramıyordu. Czentovic’in gemide olduğundan haberi yokmuş, Czentovic kesinlikle onunla oynamalıymış. Bir keresinde kırk kişiyle birlikte oynadığı bir eşzamanlı oyun dışında[,] hayatında bir dünya şampiyonuna karşı hiç oynamamış; o oyun bile korkunç derecede heyecanlı muymuşum[?] Hayır, dedim. Onunla konuşmak ve yanımıza çağırmak istemez miymişim?"
  },
  {
    "id": 142,
    "source": "Stefan Zweig - Satranç",
    "text": "Dört aydır elime kitap almamıştım ve içinde insanın art arda sıralanmış sözcükler, satırlar, sayfalar ve yapraklar görebileceği, başka, yeni, şaşırtıcı düşünceleri okuyabileceği, tanıyabileceği, beynine alabileceği bir kitabın hayali bile insanı hem coşturuyor hem de uyuşturuyordu. Gözlerim bu kitabın cepte oluşturduğu kabarıklığa hiç kıpırdamadan bakıyordu, sanki paltonun orasını yakıp bir delik açmak istercesine ışıldıyorlardı o içi görünmeyen yere doğru. Kendimi daha fazla tutamadım[;] elimde olmadan yaklaştım[.] En azından kumaşın üzerinden ellerimle bir kitaba dokunabilmek düşüncesi bile, parmaklarımdaki sinirleri tırnaklarıma kadar uyuşturdu. Neredeyse farkında olmadan giderek yaklaşıyordum."
  },
  {
    "id": 143,
    "source": "Stefan Zweig - Satranç",
    "text": "Kumaşa dokundum ve gerçekten de kumaşın arkasında dikdörtgen bir şey, bükülebilen ve hafifçe hışırdayan bir şey hissettim; bir kitap! Bir kitap! Ve ansızın çılgınca bir düşünceye kapıldım[:] Kitabı çal[!] Belki becerirsin bunu, onu hücrene gizleyebilir ve sonra okuyabilirsin, okuyabilirsin, en sonunda yeniden bir şey okuyabilirsin! Bu düşünce aklıma gelir gelmez, güçlü bir zehir etkisi yaptı; bir anda kulaklarım uğuldamaya ve kalbim küt küt atmaya başladı, ellerim buz kesti, titremelerini engelleyemiyordum."
  },
  {
    "id": 144,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Yalan! Orada tanıdık bir kadın oturuyor: Kendi evi var, büyük bir sebzebahçesi içinde. Namuslu bir kadındır[;] dul; iki çocuğu var; bekâr kardeşi ile beraber oturuyor[.] Çok akıllı bir adam. Aleksiyev'i gösterdi: — Şu köşede oturan gibi değil."
  },
  {
    "id": 145,
    "source": "Michael Ende - Momo",
    "text": "Sizin gibiler yüzünden öteki insanlara zaman kalmıyormuş. Size benzemeyeyim diye bana buraya gelmeyi yasakladılar.\" Aynı sözleri işitmiş olan diğer çocuklar da başlarını salladılar. Gigi[,] sırayla çocukların yüzüne baktı; [\"]Siz bizim gerçekten böyle olduğumuza inanıyor musunuz[?] İnanıyorsanız, niye geliyorsunuz?\" dedi. Kısa bir susuştan sonra Franko, \"Benim için fark etmez\" dedi."
  },
  {
    "id": 146,
    "source": "İvan Gonçarov - Oblomov",
    "text": "E peki, bugün de yarına kalamaz mıydı? Kalamaz. Adamlar fazla sıkıştırıyor[;] peşin para istiyorlar artık; bugün ayın biri[.] Aman, bu ıvır zıvır işler. Peki, peki, ne duruyorsun orada?"
  },
  {
    "id": 147,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Siz mi?” “Kim mi? Ablam; artık kavga etmediğiniz Porfiriy Platonoviç; üç gün önce kiliseye götürdüğünüz teyzem.” “Reddedemezdim ki! Anna Sergeyevna’ya gelince; hatırlarsanız[,] birçok bakımdan Yevgeniy’le daha iyi anlaşıyordu[.]” “Ablam o zaman aynen sizin gibi onun etkisi altındaydı.” “Benim gibi mi[!] Artık onun etkisinden kurtulduğumun farkında değil misiniz?” Katya sesini çıkarmadı. “Biliyorum,” diye devam etti Arkadiy, “Yevgeniy’den hiçbir zaman hoşlanmadınız.” “Onun hakkında fikir yürütemem.” “Biliyor musunuz, Katerina Sergeyevna?"
  },
  {
    "id": 148,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Utancım geçti; söylediğim sözden utanmıyorum artık... Hem bana öyle geliyor ki bu söz... Tekrar kalbinde bir ürperme duydu[;] tekrar boğazı tıkandı; tekrar Olga[']nın meraklı ve okşayıcı bakışıyla heyecanlandı. Birdenbire Olga ne tatlı bir eda ile ona dönmüş, cevabını ne derin bir endişe ile beklemeye başlamıştı. Sabırsızlıkla sordu: — Evet, bu söz?"
  },
  {
    "id": 149,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Onları sever. İlya İlyiç, çarşıya kendim gittim, iyi sığır eti bulamadım. [(]Aleksiyev'e dönerek[)] Ama sizin için biraz vişne şurubu ile pelte yaptım, seversiniz, biliyorum. Pelte İlya İlyiç'e dokunmuyordu. Onun için Aleksiyev ondan yemeye mecburdu ve yedi."
  },
  {
    "id": 150,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Tren, otomobili paramparça etmiş. Orası insandan geçilmiyor. Realengo itfaiyecilerini bile çağırmışlar[.]” Soğuk terler dökmeye başlamıştım[;] gözlerim buğulanmıştı[.] Jeronimo yanındakinin sorularına karşılık vermeye devam ediyordu: “Ölüp ölmediğini bilmiyorum. Çocukların yaklaşmasına izin vermiyorlardı.” Farkına varmadan ayağa kalktım."
  },
  {
    "id": 151,
    "source": "Michael Ende - Momo",
    "text": "Harika olacak!\" \"Hayır\" dedi Gigi, \"Bunu istemiyorum\". gazetelere geçmek istersin, değil mi?\" Gigi, \"Çocuğu rahat bırakın!\" diye bağırdı. İkinci hanım kol saatine bir göz attı; [\"]Eğer ayağımızı çabuk tutmazsak, uçağı göz göre göre kaçırırız[\"] dedi. \"Bunun ne demek olduğunu hepiniz biliyorsunuz.\" rahatça birkaç kelime konuşamayacak mıyım? Ama görüyorsun işte yavrum, beni rahat bırakmıyorlar!"
  },
  {
    "id": 152,
    "source": "Stefan Zweig - Satranç",
    "text": "En azından kumaşın üzerinden ellerimle bir kitaba dokunabilmek düşüncesi bile, parmaklarımdaki sinirleri tırnaklarıma kadar uyuşturdu. Neredeyse farkında olmadan giderek yaklaşıyordum. Neyse ki gardiyan bu tuhaf davranışımı ayrımsamadı[;] iki saat dimdik ayakta duran bir insanın biraz duvara dayanmak istemesi ona doğal göründü belki de[.] En sonunda paltoya iyice yaklaşmıştım ve fark ettirmeden ona dokunabilmek için ellerimi bilerek arkama saklamıştım. Kumaşa dokundum ve gerçekten de kumaşın arkasında dikdörtgen bir şey, bükülebilen ve hafifçe hışırdayan bir şey hissettim; bir kitap!"
  },
  {
    "id": 153,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Ben, yani şu karşınızda gördüğünüz adam, evet ben, Prens Wittgenstein’ın ve Jukovskiy’in nabzını saymış adamım! Onları, On Dört’te Güney Ordusu’ndaki herkesi, anlıyorsunuz ya (burada Vasiliy İvanoviç dudaklarını iyice sıktı) tek tek tanırdım. Zaten benim işim bir kenarda durmaktı[;] bir neşterimi bilirdim[,] o kadar[!] Dedeniz ise çok saygıdeğer bir adamdı, gerçek bir asker.” “İtiraf et, kalın kafalının biriydi,” dedi Bazarov tembel tembel. “Ah Yevgeniy, ne biçim konuşuyorsun!"
  },
  {
    "id": 154,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Sırtlarında heybelerini, kafalarında da hep aynı saçmaları taşırlardı. Yüzlercesini gördüm ben. Gelirler[,] sonra iş bitince başlarını alıp giderler[;] herbirinin kafasında bir çiftlik vardı[.] Ama bir tanesi bile bu çiftliğe kavuşamamıştır. Tıpkı cennet hayali gibi."
  },
  {
    "id": 155,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Şarkı söylemek de istemiyordum. İçimde şarkı söyleyen kuşum havalanmıştı. Durmuştuk[;] Totoca bana bir ev gösteriyordu[.] “Bak! Hoşuna gitti mi?” dedi."
  },
  {
    "id": 156,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Mitya’yı da masaya oturtmuşlardı; Mitya’nın artık işlemeli başlık giyen bir dadısı vardı. Pavel Petroviç, Katya ile Feneçka’nın arasında oturuyordu; “kocalar” da karılarının yanında yerlerini almışlardı. Dostlarımız son zamanlarda değişmişlerdi[:] Hepsi de sanki güzelleşmişler ve olgunlaşmışlardı[;] bir tek Pavel Petroviç zayıflamıştı[.] Bununla birlikte bu durum onun etkileyici hatlarına daha fazla zarafet ve beyefendilik veriyordu... Feneçka da bambaşka olmuştu."
  },
  {
    "id": 157,
    "source": "Albert Camus - Yabancı",
    "text": "Ama, olamaz! Üstündeki o kabuklarla herkesi tiksindirir. Polislerin elin düşecek, muhakkak[!][\"] dedi. Ona, 'Bulunmuş Hayvanlarevi'ne başvurmasını, ufak bir ücret karşılığında köpeğini kendisine geri vereceklerini söyledim. Bana, \"Çok mu para isterler?\" diye sordu."
  },
  {
    "id": 158,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Fırtınaların ardından, önce sulusepken, sonra kar geldi, daha sonra da her yer şubat ayına kadar buzla kaplandı. Hayvanlar, tüm dış tamamlanmayacak olursa kıskanç insanların sevinçten bayram edeceklerini bildiklerinden var güçleriyle çalışıyorlardı. İnsanlar[,] sırf inat olsun diye[,] yel değirmenini Snowball[']un yıktığına inanmamış görünüyorlar; yel değirmeninin, duvarları çokince örüldüğü için çöktüğünü söylüyorlardı. Gerçi hayvanlar bunun doğru olmadığını bilmiyor değildiler, ama daha önce kırk beş santim kalınlığında olan duvarların bu kez doksan santim kalınlığında örülmesi kararlaştırılmıştı; bu da, çok daha fazla taş taşımayı gerektiriyordu. Taşocağı uzun bir süre kar altında kaldığından hiçbir şey yapılamadı."
  },
  {
    "id": 159,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "“Şu pahalı sigaralardan var mı?” diye sordum. Parayı avcumda gören adam iki paket çıkardı. “Sen içmeyeceksin, değil mi Zezé[?]” Ardından bir ses geldi[:] “Söylediğine bak[!] Bu yaşta bir çocuk sigara içebilir mi?” “Tanımazsın onu. Her şeyi yapabilecek bir afacandır o.” “Babama alıyorum,” dedim."
  },
  {
    "id": 160,
    "source": "Michael Ende - Momo",
    "text": "Ama dediğimiz gibi, rehberlik onun mesleği değil, fırsat düştükçe yaptığı bir sürü işten biriydi. Bu işi yaparken kasketini mutlaka giyerdi. Nasılsa o çevreye yolu düşmüş birkaç turist görmesin; hemen kasketini giyer[,] gayet ciddi bir yüzle yanlarına artık çenesi açılır[,] sayar dökerdi[...] Kendi uydurduğu olayları, isimleri, tarihleri sıralar, zavallı dinleyicilerin kafasını karmakarışık ederdi. Bazıları bunu fark edip kızarak, çeker giderler, bazıları da maden bulmuş gibi sevinir ve sonunda Gigi'nin uzattığı kasketin içine bozuk paraları doldururlardı."
  },
  {
    "id": 161,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "George'u bilirim ben. Biz ikimiz hep beraber dolaştık.\" Ama tavşan usulca hep aynı sözü tekrarlıyordu: \"Seni bırakıp gidecek, koca dangalak. Seni bırakıp gidecek, koca dangalak.[\"] Lennie, iki eliyle kulaklarını tıkadı[:] [\"]Yok, yok!\" diye bağırdı. \"Ah, George!.. George!.."
  },
  {
    "id": 162,
    "source": "Albert Camus - Yabancı",
    "text": "Yemek pişirmekten kurtulurum, diye düşündüm, kabul ettim. Onun da bir göz odası, bir de penceresiz mutfağı var. Karyolasının üst tarafında alçıdan beyazlı[-]pembeli bir melek heykelciği[,] şampiyon fotoğrafları, bir iki de çıplak kadın resmi vardı. Oda kir pas içindeydi; yatak da darmadağınıktı. Önce gazocağını yaktı, sonra cebinden kirli bir sargı bezi çıkardı, sağ elini sardı."
  },
  {
    "id": 163,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Bunun üzerine olduğum yerde iyice büzüldüm. İpin ucunu sıkıca tutup çitin gölgesinde kayboldum. Tahta pabuçlar yaklaşıyor[,] yaklaşıyordu; biraz daha ve hop[!] Yılanın ipini çekmeye koyuldum. Yolun ortasında yavaşça kaydı."
  },
  {
    "id": 164,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Olga tek başına lambanın yanında, çay masasından uzakta, bir koltuğa gömülmüş, çevresinde olup bitenlere ilgisiz görünüyordu. Ştoltz'u gördüğüne pek memnundu: Onu gördüğü zaman gözleri parlamamış, yanakları kızarmamıştı ama yüzü tatlı bir gülümsemeyle aydınlanmıştı. Olga Ştoltz[']a, dostum diyordu; kendisini her zaman eğlendirdiği için ona pek bağlıydı; ama yanında kendisini pek çocuk hissettiği için ondan biraz çekiniyordu[.] Aklından geçenleri hemen sormaya cesaret edemiyordu: Ştoltz ondan çok uzakta, çok yükseklerde idi. Aralarındaki yaş ve zekâ farkı genç kızın gururunu eziyordu."
  },
  {
    "id": 165,
    "source": "Stefan Zweig - Satranç",
    "text": "Bir kitapçıda kötü bir dedektif romanını, kapağını bile açmadan yerine koyarken yaptığımız doğal devinimle masamızdan uzaklaştı ve sigara salonundan çıktı. “Bizi ölçüp tarttı ve çok hafif buldu,” diye düşündüm, bu soğuk, küçümseyici bakış beni biraz kızdırmıştı ve öfkemi McConnor’dan çıkarmak için ona bakıp “Hamleniz ustayı pek etkilemişe benzemiyor,” dedim. “Hangi ustayı[?]” Az önce yanımızdan geçen ve oyunumuza burun kıvırarak bakan o beyin[,] satranç ustası Czentovic olduğunu açıkladım ona[.] Şimdi de buna katlanmamız ve bizi küçümsemesine yüreğimiz sızlamadan alışmamız gerektiğini ekledim; biz zavallılar kaderimize razı olmalıydık. Ama laf olsun diye söylediklerimin, McConnor’ın üzerinde hiç beklenmedik bir etki yapması beni şaşırttı."
  },
  {
    "id": 166,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Alevler, şeyinin altında belirince…” Duraladım ve ciddi ciddi sordum: “Portuga, ‘kıç’ diyebilir miyim?” “Hımmm, pek hoş değil, bunu sık sık söylememek gerekir.” “O zaman, insan ‘kıç’ demek istediğinde ne söyleyebilir?” “Kaide.” “Nasıl? Bu zor sözcüğü mü öğrenmem gerekiyor?” “Kaide. Ka[-]i[-]de.” “Peki, kıçının kaidesinin altında kâğıtlar yanmaya başlayınca koşarak kaçtım, bahçe kapısından dışarı fırladım ve çitteki küçük bir delikten olup bitenlere baktım. Derken büyük bir haykırış işittim. İhtiyar havaya fırladı ve hamağı kaldırdı."
  },
  {
    "id": 167,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Kendindeki bu değerlerin değerini bilir, o kadar cimrilikle kullanırdı ki, onu herkes duygusuz ve bencil sanırdı. Kendine hâkim olmasına, düşünme özgürlüğüne kızarlar, kendilerinin ve başkalarının hayatlarını ateşe atan insanları beğenir ve kıskanırlardı. Çevresindekiler[:] İhtiras her şeyi affettirir[;] siz ise, bu bencilliğinizle hep kendinizi düşünüyorsunuz; bakalım kendinizi hangi güzele saklıyorsunuz, derlerdi. Ştoltz, düşünceli düşünceli, sanki uzakta bir yere bakıyormuş gibi, \"Birisini buluruz elbette,\" derdi, gene de ihtirasların şiirli güzelliğine inanmaz, gürültülü, tehlikeli sonuçlarını hoş görmezdi. İdeali her zamanki gibi ciddi bir hayat ve ona bağlı işlerdi."
  },
  {
    "id": 168,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "nizam: Düzen. numune: Örnek. Pparloir[:] [(]Fr.[)] Dışarıdan gelenlerle konuşma odası. payzen: Ayağına pranga vurulmuş. pederane: Baba gibi."
  },
  {
    "id": 169,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "6. (Lat.) İyi (Ç.N.) 7. [(]Lat.) Aile babası [(]Ç.N.) X Aradan iki hafta kadar geçmişti. Maryino’da yaşam her zamanki düzeninde akıp gidiyordu: Arkadiy etrafa naz yapıyor, Bazarov çalışıyordu. Evdeki herkes ona, onun savruk ve özensiz hareketlerine, biraz karmaşık, kesik kesik konuşmalarına alışmıştı."
  },
  {
    "id": 170,
    "source": "George Orwell - 1984",
    "text": "Üstelik koşması da, birine vur­ ması da olanaksızdı. Kaldı ki, kız hem genç hem de güç­ lü kuvvetliydi, kendini savunması işten bile değildi. Bu arada[,] kendini hemen Demek Merkezi[']ne atmayı ve ka­ panıncaya kadar orada kalmayı geçirdi aklından; böylece akşam boyunca orada olduğunu kanıtlayabilirdi. Ne ki, bu da olanaksızdı. Kendini çok bitkin hissediyordu."
  },
  {
    "id": 171,
    "source": "Stefan Zweig - Satranç",
    "text": "O andan başlayarak heyecandan yerimizde duramaz olduk. O âna kadar ciddi bir umut beslemeden oynamıştık, ama Czentovic’in soğuk kibrini kırma düşüncesi yürek atışlarımızı hızlandırdı. Ama yeni dostumuz bir sonraki hamleyi belirlemişti bile[,] Czentovic’i geri çağırabilirdik[;] kaşığı bardağa vururken parmaklarım titriyordu[.] Derken ilk zaferimizi kazandık. O âna dek hep ayakta oynayan Czentovic, duraksadı, duraksadı ve sonunda ağır ağır oturdu; böylece o âna dek bize tepeden bakan Czentovic, bizimle aynı düzeye inmiş oldu."
  },
  {
    "id": 172,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Yara büyük değilmiş. Acıyor mu?” “Daha kuvvetli bastır, acımıyor.” Vasiliy İvanoviç durdu. “Ne dersin Yevgeniy, demirle dağlasak daha iyi olmaz mı[?]” “Bunu daha önce yapmak gerekirdi[;] artık cehennem taşına bile gerek yok ya. Eğer mikrop kaptıysam, artık çok geç.” “Nasıl... çok geç...” diyebildi Vasiliy İvanoviç güçlükle."
  },
  {
    "id": 173,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Söz açılmışken, şehirdeki pazar okulları nasıl gidiyor? Ona âşık değil misin? Yoksa sır saklama dönemine mi girdin[?]” “Yevgeniy, bilirsin, sana karşı her zaman açık olmuşumdur; inan bana, sana yemin ederim, yanılıyorsun[.]” “Hmm[!] Yeni bir laf,” dedi Bazarov alçak sesle. “Ama kendini bunun için üzme, bana vız gelir."
  },
  {
    "id": 174,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Her biri, Jones'un uğradığı talihsizlikten nasıl iki çiftliğin sahipleri birbirleriyle hiç geçinemezlerdi. Foxwood, büyük, bakımsız, köhne bir çiftlikti; dört bir yanını çalılar bürümüş, otlakları sararıp solmuş, çitleri paramparça olmuştu. Foxwood[']un sahibi Bay Pilkington[,] zamanının büyük bölümünü balık mevsiminde balık tutarak, av mevsiminde ava çıkarak geçirirdi; rahatına düşkün, efendi bir adamdı. Pinchfield Çiftliği ise daha küçük, ama daha bakımlıydı. Pinchfield'ın sahibi Bay Frederick, kabadayı ve kurnaz bir adamdı; ikide bir mahkemelik olurdu; dini imanı paraydı, elini veren kolunu alamazdı."
  },
  {
    "id": 175,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "İlkokula kadar uzunca bir yol olduğunu biliyordum. Arkadaşlarıma karşı kazandığım zaferin tadı şimdiden damağımdaydı “Ay!..” Öyle güçlü, öyle tiz bir haykırış koyvermiştim ki, insanlar bir kaza olup olmadığını anlamak için dükkânın kapısına koştular. Arabanın üstünde yerden elli santim yükseklikte asılı kalmıştım[;] sallanıyor, sallanıyordum[.] Kulaklarım ateş gibiydi. Planımda bir yanlışlık olmuştu herhalde."
  },
  {
    "id": 176,
    "source": "Michael Ende - Momo",
    "text": "Kahvatı hazır! Uzun bir yoldan geldin, umarım beğenirsin.\" onları izliyordu. Dolaplı saatlerin arasından döne kıvrıla ilerlediler[;] sonunda bu dolapların arka duvarları ile çevrili bir odacığa geldiler[.] Bir köşede süslü ayaklı bir masa, bir divan ve buna uygun minderli koltuklar vardı. Burası da hareketsiz mum ışıklarıyla aydınlanmıştı."
  },
  {
    "id": 177,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Ona sonsuz bir sevgiyle bakıyordum, çünkü onun kadar küçükken ben de bu oyunu çok severdim. Suskunluğum Glória’yı meraka düşürüyordu. Artist resimlerini[,] bilye torbamı yanıma koyuyordu[;] çoğu kez bunlara elimi bile sürmüyordum. Ne sinemaya gitmek istediğim vardı, ne de boyacı sandığımla yola koyulmak. Gerçek olan, acımasız bir bibimde nedenini bilmeden dayak yiyen küçücük bir hayvan olarak iç yaramı bir türlü geçirmeyi başaramadığımdı."
  },
  {
    "id": 178,
    "source": "Albert Camus - Yabancı",
    "text": "Kimseye kötülüğü dokunmayan bu şeyden beni niye yoksun bıraktıklarına aklım ermiyordu. Daha sonraları, bunun da cezaya bağlı olduğunu anladım. Ama[,] o zamanlar sigara içmemeye alışmıştım; bu da[,] benim için bir ceza olmaktan çıkmıştı artık[.] Bu sıkıntılar dışında pek de mutsuz sayılmazdım. Yine bütün sorun vakit öldürmekti."
  },
  {
    "id": 179,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Gelişim Sokağı’na kadar yürüdüm. Çarşının yakınında gezindim. Bay Rozemberg’e ait fırının karşısındaki kaldırıma oturdum[;] ama hiç iş yoktu[.] Saatler birbiri ardından geçip gidiyor, ben bir kuruş bile kazanamıyordum. Oysa kazanmam gerekiyordu."
  },
  {
    "id": 180,
    "source": "Stefan Zweig - Satranç",
    "text": "Düş görüyorsun, görmeye devam et!’ Ama merak ağır bastı. Yavaşça ve dikkatle gözlerimi açtım. Ve mucize[:] Başka bir odadaydım[,] otel hücremden daha geniş[,] daha ferah bir odada. Parmaklığı olmayan bir pencereden içeriye özgürce ışık giriyordu ve donuk yüzlü yangın duvarımın yerine ağaçlar, rüzgârda salınan yeşil ağaçlar görünüyordu; beyaz ve pürüzsüz duvarlar parlıyordu, üstümde beyaz ve yüksek bir tavan vardı; gerçekti bunlar, yeni, yabancı bir yatakta yatıyordum, düş değildi bu, arkamda insanlar alçak sesle fısıldıyordu. Şaşkınlıkla elimde olmadan ani bir devinim yapmış olmalıyım, çünkü arkamdan yaklaşan adımları duydum."
  },
  {
    "id": 181,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Tanrı kuru iftiradan saklasın, dedi. Ne ayıp şey değil mi, İlya İlyiç? Tarantiyev[:] [—] Evet, evet, bu masalları biliriz, dedi; herhalde içki için sattın; bir de bana[...] Ben efendimin hiçbir şeyini içki için satmış değilim. Siz..."
  },
  {
    "id": 182,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Belki bundan önceki gelişinde olurdu. Şimdi... [(]Gözlerini yere dikip bir an durdu.) çok geç[...] Git ve beni bırak. Senin dostluğuna layığım; ama benim için üzülmene değmez."
  },
  {
    "id": 183,
    "source": "Albert Camus - Yabancı",
    "text": "\"Gördüğün gibi işte!\" diye karşılık verdim. \"İyi misin? Bir istediğin var mı[?][\"] \"Hayır, her şeyim tamam!\" Sustuk. Marie hep gülüyordu. Şişman kadın yanımdaki adama doğru var gücüyle bağırıyordu."
  },
  {
    "id": 184,
    "source": "George Orwell - 1984",
    "text": "Ka­ ranlık eşiklerin ardı önü, sokağın iki yanındaki dar aralık­ lar mahşer gibiydi: serilip serpilmiş, sürüp sürüştürmüş kızlar, onların peşinden ayrılmayan delikanlılar, kızların on yıl sonra neye benzeyeceklerinin kanıtı, göbek salmış, paytak kadınlar, kocaman ayaklarını sürüyerek yürüyen iki büklüm ihtiyarlar, kirli su birikintilerinin içinde oy­ narken analarının öfkeli bağırtılarıyla çil yavrusu gibi da­ ğılan, yalınayak başı kabak çocuklar. Sokağa bakan cam­ ların pek çoğu kırıktı, tahtalarla kapatılmıştı. İnsanların çoğunun Winston[']a aldırış ettiği yoktu[;] bazıları ise ürkek bir merakla, göz ucuyla bakıyorlardı[.] Bir kapının ağzında, kadana gibi iki kadın, ıstakoz gibi olmuş kollarını önlüğü­ nün üstünde kavuşturmuş, gevezelik ediyordu. Winston yanlarından geçerken, kulağına birkaç laf çalındı."
  },
  {
    "id": 185,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Yarım saat kadar bu niyetle savaşarak yatağında kaldı; sonra da kahvaltısını her günkü gibi yatağında yapmaya, hemen ardından işlerini uzun uzun düşünmeye karar verdi: İnsan yatakta da pekâlâ düşünebilirdi. Dediği gibi yaptı. Çayını içtikten sonra yatağında doğruldu[;] kalkacak gibi oldu[;] terliklerine baktı; hatta bir ayağını yataktan aşağıya sarkıtmaya yeltendi ve hemen geri çekti. Saat dokuz buçuğu çalıyordu. İlya İlyiç telaşlandı."
  },
  {
    "id": 186,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Bu arada ben gerçekten de toprak sahibi bir kadınım. Mülkümü kendim yönetiyorum ve düşünün, Yerofey adında bir kâhyam var, şaşılacak bir tip, tıpkı Cooper’ın Pathfinder’ı gibi biri: Doğal bir şey var bu adamda! Buraya temelli yerleştim; dayanılmaz bir kent[,] öyle değil mi[?] Ama ne yapacaksınız!” “Diğer kentler gibi bir kent işte,” dedi Bazarov soğukkanlılıkla. “Hep küçük çıkarlar, ne korkunç!"
  },
  {
    "id": 187,
    "source": "Stefan Zweig - Satranç",
    "text": "Belki de benim yokluğum sırasında habercilerden biri, kararlaştırıldığı gibi “Baron Bern” diyeceği yerde, dikkatsizlikle “Majesteleri” dedi ya da pis herif açması yasak olan mektupları açtı; öyle ya da böyle, ben kuşkulanmayı aklıma bile getiremeden, bizi gözetlemek için Münih’ten ya da Berlin’den emir aldı. İlk başlardaki kayıtsızlığının son aylarda ani bir gayrete dönüştüğünü ve mektuplarımı postalamak için birçok kez ısrar ettiğini, tutuklandıktan çok sonra anımsadım. Dikkatsizlik yapıp konuşmamışımdır diyemem[,] ama sonuçta Hitler yönetimi en büyük diplomatların ve askerlerin bile sinsice ağzından laf almamış mıdır[?] Gestapo’nun ne kadar dikkatle ve istekle gözünü üzerime dikmiş olduğu sonradan elle tutulur biçimde ortaya çıktı: Daha Schuschnigg’in yönetimden çekildiği akşam ve Hitler’in Viyana’ya girmesinden bir gün önce, SS’ler tarafından tutuklanmıştım. Neyse ki Schuschnigg’ in veda konuşmasını duyar duymaz en önemli kâğıtları yakmıştım; manastırlarla ve iki arşidükün yurtdışında saklanan mülkleriyle ilgili belgeleri de bir çamaşır sepetine saklayıp yaşlı, güvenilir hizmetçimle amcama gönderdim; gerçekten de adamlar kapımı yumruklamadan önce, son anda yapmayı başardım bunu.” Dr."
  },
  {
    "id": 188,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Yeni arkadaşımın yavaşça eteğinden çektim: -Aman, buradan kaçalım, dedim. Fakat buna vakit kalmadı. Müdür, bizi görmüştü; [-]Hayrola Naime Hocanım[?] Dedi. Öfkeli bir insanın bu kadar çabuk yatıştığını ömrümde ilk defa görüyordum."
  },
  {
    "id": 189,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Feride çok gayretli, inanılmayacak kadar gayretli bir mahluk. Fakat ne de olsa kadın. Hayatını kırdığın bu biçareye karşı senin bir borcun var[,] bu ayrılık günlerinde kuvvetli ve sakin olmak[;] mümkün olduğu kadar ona gayret vermek[...] Kâmran, bu sözleri dinlerken gözlerinin yeşiline kadar sararmıştı: -Yalnız Feride’nin kırılan hayatından bahsediyorsun, ya benimki? dedi."
  },
  {
    "id": 190,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Taşınmak da ne oluyor?.. \" \"Umarım, belki, herhalde\" gibi yumuşak, ferahlatıcı kelimelerle türlü türlü avuntular, umutlar buldu; atalarının yadigârı olan bu sözler başındaki iki belayı birden defetti. Üstüne hafif, tatlı bir rehavet çöktü[;] uyku bütün duygularını bir bulut gibi sardı; tıpkı sabah kırağısının sulan hafifçe kaplaması gibi[...] Az sonra düşüncesi kim bilir nerede yüzecekti? Ama birdenbire İlya İlyiç kendine geldi, gözlerini açtı."
  },
  {
    "id": 191,
    "source": "Albert Camus - Yabancı",
    "text": "O, beni şaşırtan bir zafer tavrıyla, \"İnanıyorsun, inanıyorsun! Ona terk edeceksin kendini, değil mi?\" dedi. Tabii bir kere daha [\"]Hayır[!][\"] diye karşılık verdim. Kendini koltuğuna bırakıverdi. Pek yorulmuşa benziyordu."
  },
  {
    "id": 192,
    "source": "George Orwell - 1984",
    "text": "\"İyi de oldu,\" dedi Julia, \"konuştursalar­ dı adımı verebilirdi.\" Sonradan başkaları da olmuştuta­ bii. Hayat, onun gözünde, çok basitti. Sen gününü gün etmek istiyordun; [\"]onlar[\"], yani Parti bunu engellemek istiyordu; sen de bir yolunu bulup kuralları çiğniyordun. Görünen o ki, \"onlar\"ın seni her türlü zevkten yoksun kılmak istemelerini, senin yakayı ele vermemek istemen kadar doğal buluyordu. Parti'den nefret ettiği gibi, bunu en yakası açılmadık sözlerle dile getiriyor, ama hiçbir za­ man Parti'nin genel bir eleştirisini yapmıyordu."
  },
  {
    "id": 193,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Biz paraları ne yaptık? Hiçbir şey kalmamış. Zahar ceplerini karıştırmaya koyuldu, bir ruble ile on kapik çıkardı; masanın üstüne koydu[:] [—] İşte, size bunları vermeyi unutmuştum; taşınma parasından artmıştı, dedi. Ufak paraları kim soruyor sana? Sekiz yüz rubleyi ne yaptık diyorum?"
  },
  {
    "id": 194,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "“Perdeyi indirip oturun,” dedi Odintsova. “Gitmeden önce sizinle biraz gevezelik etmek istiyorum. Bana biraz kendinizden bahsedin; hiç kendinizden söz etmiyorsunuz[.]” “Sizinle faydalı konularda konuşmaya çalışıyorum, Anna Sergeyevna[.]” “Çok alçakgönüllüsünüz[...] Fakat ben sizin hakkınızda, aileniz hakkında, uğruna bizi terk edip gideceğiniz babanız hakkında bir şeyler öğrenmek isterdim.” “Neden böyle sözler söylüyor?” diye düşündü Bazarov. “Bunların hiçbiri de ilginç değil,” dedi yüksek sesle, “özellikle de sizin için; bizler cahil insanlarız...” “Ya ben, sizce ben bir aristokrat mıyım?” Bazarov gözlerini Odintsova’ya doğru kaldırdı."
  },
  {
    "id": 195,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "(Yevdoksiya, “adam” yerine hep “bay” sözcüğünü kullanıyordu.) Bazarov, şöyle divana, yanıma oturun. Siz belki de bilmiyorsunuzdur, ben sizden müthiş korkuyorum.” “Neden? İzninizle öğrenebilir miyim[?]” “Siz tehlikeli bir baysınız[;] siz öyle bir eleştirmensiniz ki[.] Ah aman Tanrım! Bana bile gülünç geliyor, tıpkı bozkırda yaşayan toprak sahibi kadınlar gibi konuşuyorum."
  },
  {
    "id": 196,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Sonra pabucu ıslatıp sildim. Ardından da özenle boyamaya koyuldum. “Rica ederim[,] bayım; pantolonunuzu biraz kaldırır mısınız[?]” Söylediğimi yaptı[.] “Bugün pabuç boyamaya mı çıktın, Zezé?” “Hiç bugünkü kadar pabuç boyamaya gereksinme duymamıştım.” “Ya Noel, iyi geçti mi?” “Her zamanki gibi…” Fırçamı sandığa vurdum, ayak değiştirdi. Aynı şeyleri yineledim."
  },
  {
    "id": 197,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Bugün perşembe değil mi?” “İnsan senin karşında son sözü söyleyemez. Her şeye bir karşılığın var.” Bunun üzerine iyice yanına sokuldum ve başımı koluna dayadım. “Portuga[!]” “Hımm…” “Hep senin yanında olmak isterdim, biliyor musun[?]” “Neden[?]” “Çünkü dünyanın en iyi insanısın. Senin yanındayken beni kimse azarlamıyor ve ‘günışığının yüreğimi mutlulukla doldurduğunu’ hissediyorum.” İki unutulmaz dayak “Böyle kıvırırsın. Sonra kâğıdı bir bıçakla kesersin, tam kıvrımından.” Ve kâğıdı kesen bıçağın hafif sesi… “Şimdi şu açıklığı bırakıp dikkatle yapıştırırsın."
  },
  {
    "id": 198,
    "source": "George Orwell - 1984",
    "text": "Saldırıyı anımsanuyordu, ama babasının elinden sımsıkı tuttuğunu, ayaklarının altında çın çın öten sarmal bir merdivenden döne döneta aşağılara, yerin altına indik­ lerini hiç unutmamıştı; bir ara bacakları o kadar yorul­ muştu ki yanıp yakılmaya başlamış, sonunda durup din­ lenmek zorunda kalmışlardı. Annesi, her zamanki ağır aksak, dalgın haliyle, epeyce arkalarında kalmıştı. Kuca­ ğında Winston[']ın minik kız kardeşi vardı; belki de kat­ lanmış birkaç battaniyeydi kucağındaki[:] O sırada kız kardeşinin doğup doğmadığından bile emin değildi. En sonunda, bir metro istasyonu olduğu anlaşılan kalabalık, gürültülü bir yere inmişlerdi. Bazıları taş zeminde oturuyorlardı, bazıları da bir­ birlerine sokulup demir ranzaların üstüne yığılmışlardı."
  },
  {
    "id": 199,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Yaklaşmakta olan kışın zorlu geçeceğini kestirmek için de kâhin olmak gerekmiyordu. Yel değirmeni beklenmedik güçlükler çıkarıyordu. Çiftlikte büyük bir kireçtaşı ocağı vardı[;] küçük binalardan birinde kum ve çimento bulunmuştu[;] dolayısıyla, her türlü inşaat malzemesi ellerinin altındaydı[.] Ama hayvanların ilk başta çözemedikleri sorun, taşların uygun boyutta parçalara nasıl ayrılacağıydı. Keski ve balyoz gerekiyordu, oysa hayvanlar arka ayaklarının üzerinde duramadıkları için bu aletleri kullanamıyorlardı."
  },
  {
    "id": 200,
    "source": "İvan Gonçarov - Oblomov",
    "text": "diye sordu. Hayır, çok sert kokar; onları da sevmem, gülleri de. Zaten ben çiçekleri sevmem[;] kurlardaki yabani çiçeklere diyeceğim yok[;] odada insanın başına iş çıkarırlar[...] Dökülürler, saçılırlar... Olga ona kurnazca baktı: — Odanızın temiz olmasını istersiniz değil mi?"
  },
  {
    "id": 201,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Darılmayınız. Ben burada, ilk gençliğimin birkaç kırık hatırasını aramaya geldim, o kadar. Madem ki münasebetsizlik etmiştin[;] bunu tamire imkân yok muydu[?] Yanlış hareket ettim enişte, çok yanlış hareket ettim. Feride, öyle derin bir infial içinde bizden ayrılmıştı ki, izini keşfettiğim vakit, birdenbire üstüne düşmekten korktum."
  },
  {
    "id": 202,
    "source": "Albert Camus - Yabancı",
    "text": "Az sonra, ihtiyarın ayak seslerini duydum. Kapımı vurdu. Açtığım zaman bir süre eşikte durdu, sonra, [\"]Affedersiniz, affedersiniz[!]\" dedi. içeriye buyur ettim, girmek istemedi. Gözlerini ayakkabılarının ucuna dikmişti."
  },
  {
    "id": 203,
    "source": "Albert Camus - Yabancı",
    "text": "Lafı uzatmadı. Sıkıldım, çünkü bunu söylememeliydim, diye düşündüm. Az sonra bana baktı, sanki öğrenmek istiyormuş gibi, başıma kakmadan[:] [\"]Niçin[?]\" diye sordu. \"Bilmiyorum,\" diye karşılık verdim. O zaman beyaz bıyığını bükerek, yüzüme bakmadan: \"Anlıyorum,\" dedi."
  },
  {
    "id": 204,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Pavel Petroviç, oturma odasına savaşa hazır, öfkeli ve kararlı bir biçimde girdi. Düşmana saldırmak için sadece bir bahane bekliyordu; fakat uzun süre bir bahane ortaya çıkmadı. Bazarov[,] “ihtiyar Kirsanovların” [(]iki kardeşi böyle adlandırıyordu[)] yanında genellikle az konuşuyordu. Ayrıca bu akşam kendini iyi hissetmiyordu ve hiç konuşmadan çay üstüne çay içiyordu. Pavel Petroviç, sabırsızlıkla yanıp tutuşuyordu; sonunda istediği oldu."
  },
  {
    "id": 205,
    "source": "Stefan Zweig - Satranç",
    "text": "B., Czentovic’in ata uzandığını görünce, sıçramak üzere olan bir kedi gibi büzüldü. Bütün bedeni titremeye başladı ve Czentovic atı oynar oynamaz, veziri sertçe ileri sürdü, zafer kazanmış gibi, “İşte! Tamamdır[!]” diye bağırdı[,] geriye yaslandı, kollarını göğsünün üzerinde kavuşturdu ve meydan okuyan bakışlarını Czentovic’e dikti[.] Ansızın gözbebeğinde bir ışık parladı. Zafer kazanmış gibi bildirdiği bu hamleyi anlamak için, elimizde olmadan tahtanın üzerine eğildik."
  },
  {
    "id": 206,
    "source": "Albert Camus - Yabancı",
    "text": "Onları, ağır ağır, birbirine sürttü. Sonra başı hep önüne eğik öylesine uzun bir zaman o durumda kaldı ki, bir an onu unutmuşum gibi geldi bana. Ama sonra birden başını kaldırdı, dimdik yüzüme baktı[:] [\"]Niçin sizi görmemi istemiyorsunuz[?]\" diye sordu. \"Tanrıya inanmıyorum da ondan,\" diye karşılık verdim. İnanmadığıma emin olmadığımı öğrenmek istedi."
  },
  {
    "id": 207,
    "source": "Stefan Zweig - Satranç",
    "text": "Dokuz hamle öncesinden matı hesaplayabilen birisi, birinci sınıf bir profesyonel olmalıydı, hatta belki de aynı turnuvaya giden bir yarışmacıydı ve bu kadar can alıcı bir anda aniden çıkagelip oyuna karışmasında neredeyse doğaüstü bir şey vardı. Kendini ilk toplayan McConnor oldu. “Ne önerirdiniz[?]” diye fısıldadı heyecanla[.] “Hemen ilerlemeyin, geri çekilin! Öncelikle şahı g8’ den h7’ye alarak tehlikeli çizgiden kurtarın."
  },
  {
    "id": 208,
    "source": "George Orwell - 1984",
    "text": "Batmakta olan bir geminin salonundaydılar, gittikçe kararan suların arasından ona bakıyorlardı. Salonda hala hava vardı, hala onlar Winston'ı, Winston da anlan göre­ biliyordu, ama gittikçe dibe, birazdan anlan yutup yok edecek olan yeşil sulara batıyorlardı. Winston[']ın bulundu­ ğu yerde ışık da vardı[,] hava da[,] onlar ise ölümün içine çekiliyorlardı; Winston burada, yukarıda olduğu için on­ lar orada, aşağıdaydılar. Bunu Winston da biliyordu, on­ lar da; bildiklerini yüzlerinden okuyabiliyordu. Ama yüzlerinde de, yüreklerinde de en küçük bir gücenme yoktu; yalnızca onun yaşayabilmesi için kendilerinin öl­ mesi gerektiğini, bunun yaşamın doğası gereği kaçınıl­ maz olduğunu bildikleri anlaşılıyordu."
  },
  {
    "id": 209,
    "source": "Michael Ende - Momo",
    "text": "Akıllarına hiçbir şey gelmiyordu. Bütün olanlardan sonra, yapabildikleri tek şey gürültü etmekti. Bu da öyle şen şakrak sesler çıkararak değil[;] vahşi[,] kaba bir biçimde oluyordu[.] Fakat duman adamların kendileri, çocuklardan hiçbirine görünmediler. Kentin üzerine ördükleri ağ, sık, sağlam ve parçalanmaz görünüyordu."
  },
  {
    "id": 210,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Başlar kumar oynamaya. Ama öyle ufak paralarla değil! [(]İvan Matveyeviç'in sarhoşluğu gittikçe artıyordu.[)] Sonra yemekler! Ah o yemekler! Tuzlu balığın adını ağza almaya utanırlar."
  },
  {
    "id": 211,
    "source": "Stefan Zweig - Satranç",
    "text": "Tuhaf bir gülümseme yayıldı yüzüne. ‘Ciddi bir şey değil. Bir sinir krizi[,]’ dedi ve dikkatle çevresine bakındıktan sonra, alçak sesle ekledi[:] ‘Haksız sayılmazsınız[.] Mart’tan beri, değil mi?’ Başımı salladım. ‘Bu yöntemde şaşılacak bir şey değil,’ diye mırıldandı."
  },
  {
    "id": 212,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Usulca: \"Zavallı oğlan!\" dedi. Adamların sesi kayboldu. Ahır[,] gitgide kararıyordu[;] hayvanlar bölmelerinde eşiniyor, zincirlerini şıngırdatıyorlardı[.] İhtiyar Candy otlara yattı, gözlerini kollarıyla kapadı. VI O ikindi sonu, Salinas deresinin suyu, derin, sakin, yemyeşil uyuyordu."
  },
  {
    "id": 213,
    "source": "Michael Ende - Momo",
    "text": "Her girişiminizin cezasını o çekiyor. Bundan sonra sözlerinize ve yaptıklarınıza çok dikkat edin.\" Duman adam, sigarasından duman halkaları salıverdi ve memnun bir şekilde söylediklerinin Beppo üzerindeki etkisini ölçtü. Yeterli olduğu belliydi[;] Beppo hepsine inanmıştı[.] \"Zamanım kıymetli olduğu için kısa keseceğim\" diye sürdürdü sözü. \"Mesaj şu: Size çocuğu bir şartla geri vereceğiz; Bir daha bizden ve işimizden tek söz etmeyeceksiniz."
  },
  {
    "id": 214,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Gözlerimle gördüm. Savaş biter bitmez, ona 'Birinci Dereceden Kahraman Hayvan' nişanı vermedik mi?\" Squealer, \"Yanılmışız, yoldaş,\" diye karşılık verdi. [\"]Aslında bizi yıkıma sürüklemeye çalışıyormuş meğer; ele geçirdiğimiz gizli belgeler her şeyi açıklıyor.[\"] \"Ama yaralanmıştı,\" dedi Boxer. \"Kanlar içinde oradan oraya koştuğunu hepimiz gördük.\" \"Danışıklı dövüşmüş!\" diye bağırdı Squealer hoplaya zıplaya. \"Saçmalar sıyırıp geçmiş aslında."
  },
  {
    "id": 215,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Onun görmesini istemiyordum. “Önümde soyunmaktan utandığını söyleyecek değilsin herhalde.” “Hayır. Bu değil de…” “Eee[?]” Başka çarem yoktu[,] arkamı döndüm ve giysilerimi çıkarmaya başladım; önce gömleğimi, sonra bez askılarla tutturulmuş pantolonumu[.] Her şeyi yere attım ve yalvarırcasına döndüm ona. Hiçbir şey söylemedi, ama gözleri dehşet ve isyanla doluydu."
  },
  {
    "id": 216,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "çiy: Havada buğu durumundayken akşamın ve gecenin serinliğiyle yerde veya bitkilerde toplanan küçük su damlaları. çuha: Tüysüz, ince dokunmuş yün kumaş. Ddandy: [(]İng.[)] (Metinde[)] Züppe, çıtkırıldım. darbımesel: Atasözü. darülmuallimat: Kız öğretmen okulu."
  },
  {
    "id": 217,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Küçük bir çiftliğimiz olacak.\" \"Küçük bir çiftliğimiz olacak,\" dedi George. \"Belki bir domuzumuz, tavuklarımız da olacak... Bir de yonca tarlamız[...]\" Lennie[:] \"Tavşanlar için[!]\" diye haykırdı. George: \"Tavşanlar için,\" diye tekrarladı. \"Tavşanlara ben bakacağım.\" \"Tavşanlara sen bakacaksın.\" Lennie, sevincinden fıkırdadı."
  },
  {
    "id": 218,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Yediği naneye bak. Ulan kaç paralık adamsın sen? Tanrı bilir o[,] George seni dereden kurtarmak için elinden geleni yaptı[;] ama neye yaradı sanki[?] George tavşanlara bakmana izin verir mi sanırsın, aklına şaşayım senin. Dünyada bırakmaz."
  },
  {
    "id": 219,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Fakat, o kadar korkmuştum ki, ben de gayri ihtiyari onunla beraber bağırıyordum: “Vallahi ben, gelin hanımım, aşçıbaşı!” Ben, bu aşçı kadar çılgın ve aksi insan görmedim. Kalfa ve matmazelin teminatlarına bir zaman inanmadı. “Yok, böyle hırsız gelin hanım olmaz[!]” diye söylendi; neden sonra, aklı yatınca da[:] “Öyleyse aferin gelin hanım sana!” dedi. “Alırsın öyleyse yeni pantolonu, bak, pantolonun dizkapağını da patlattırdın bana!” Adamcağız, düştüğü zaman burnunu da çarpıp sıyırmıştı ama, bereket versin, onu tazminat hesabına katmıyordu. Gizli kalması için, yaptığım işarlara rağmen, bu komedi duyuldu ve her yemekte bana bakıp bakıp gülmek âdet sırasına girdi."
  },
  {
    "id": 220,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Prokovyiç, kendince Pavel Petroviç’ten geri kalmayan bir aristokrattı. Yılın en güzel günleri, yani haziranın ilk günleri gelmişti. Hava mükemmeldi[;] aslında uzaklardan kolera tekrar tehdit etmeye başlamıştı ama [...] vilayetinin sakinleri, koleranın ziyaretlerine de artık alışmışlardı. Bazarov çok erken kalkıyor ve iki üç verst yürüyordu, gezmek için değil (amaçsız gezilere hiç tahammül edemezdi), ot ve böcek toplamaya gidiyordu."
  },
  {
    "id": 221,
    "source": "Albert Camus - Yabancı",
    "text": "O zaman ikisi de kaldırımlar üzerinde dururlar; köpek dehşet, adam da kin ve nefret içinde birbirlerine bakışırlardı. Her gün bu böyledir. Köpek işemek istese[,] ihtiyar vakit bırakmaz[,] ipinden çeker; o da ardı sıra bir dizi damlacıklar bırakır dururdu[.] Kazara, odanın içinde kabahat ediverse, yine dayak yer. Bu, sekiz yıldır hep böyle sürüp gelmektedir."
  },
  {
    "id": 222,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Çok kalabalıktı, dans edenler de az değildi; siviller daha çok duvar boyunca sıkışmışlardı ama askerler, içlerinden özellikle de Paris’te altı hafta kadar kalmış ve orada “Zut”31, “Ah fichtrre”32, “Pst, pst, mon bibi”33 gibi külhanbeyi ağızları öğrenmiş biri canla başla dans ediyordu. Adam bu lafları mükemmel bir şekilde, gerçek bir Paris şıklığıyla telaffuz ediyor ve bu arada “si j’avais”34 yerine “si jaurais”35, “muhakkak” anlamında “absolument”36 diyordu, kısacası, Fransızların bizim onların dilinde melekler gibi, comme des ange konuştuğumuza bu kardeşimizi inandırmaya gerek duymadıklarında alay edecekleri bir eski Rusça-Fransızca lehçesiyle konuşuyordu. Arkadiy daha önceden bildiğimiz gibi, iyi dans edemiyordu, Bazarov ise hiç dans etmiyordu[:] Bir köşeciğe sığışmışlardı; Sitnikov da onlara katıldı[.] Yüzüne aşağılayıcı bir alay ifadesi verip iğneleyici laflar savurarak meydan okur gibi etrafa bakıyordu ve galiba bundan gerçekten büyük zevk alıyordu. Birdenbire yüzünün ifadesi değişti ve Arkadiy’e dönüp şaşırmış gibi, “Odintsova geldi,” dedi."
  },
  {
    "id": 223,
    "source": "Albert Camus - Yabancı",
    "text": "Perez, \"Hayır,\" dedi. O zaman savcı, \"Jüri üyeleri değerlendirirler,\" dedi. Ama, avukatım öfkelendi, bana biraz aşırı gelen bir sesle, Perez[']e[:] \"Peki, ağlamadığını da gördünüz mü?\" diye sordu. Perez, \"Hayır,\" diye karşılık verdi. Dinleyiciler güldüler."
  },
  {
    "id": 224,
    "source": "George Orwell - 1984",
    "text": "Julia, kolunu belini dola­ masına en küçük bir tepki göstermemiş, kolundan sıyrıl­ maya bile çalışmamıştı. Winston onda neyin değiştiğini artık anlamıştı. Yüzü daha bir solgundu[;] yüzünde, alnın­ dan şakağına kadar uzanan, saçlarının gizleyemediği bir yara izi göze çarpıyordu[;] ama asıl değişiklik bu değildi[.] Beli kalınlaşmış, tuhaf bir biçimde sertleşmişti. Winston, tam o sırada, tepkili bomba atıldıktan sonra yıkıntıların altından çekip çıkarmaya çalıştığı cesedi anımsamış, cese­ din yalnızca korkunç ağırlığı karşısında değil, kaskatı ke­ silmiş olması karşısında da şaşkınlığa kapılmıştı."
  },
  {
    "id": 225,
    "source": "Stefan Zweig - Satranç",
    "text": "Bana elini bile uzatmadı. Bize karşı bir eşzamanlı oyun oynamak isterse hepimizin ne kadar onur duyacağını ona anlatmaya çalıştım. Ama hiç yüz vermedi; özür diledi[,] menajeriyle yaptığı anlaşmaya göre[,] bütün turnesi boyunca ücretsiz oynamaması gerekiyormuş[.] Oyun başına en düşük ücreti iki yüz elli dolarmış.” Güldüm. “Taşları siyah kareden beyaza sürmenin böylesine kârlı bir iş olabileceği hiç aklıma gelmezdi."
  },
  {
    "id": 226,
    "source": "Albert Camus - Yabancı",
    "text": "Hareketleri kesik kesikti. Elma gibi ufacık yüzünde gözleri ışıl ışıldı. Ceketini çıkardı[;] oturdu, telaşlı telaşlı listeye batı[.] Celeste'i çağırdı, aceleci bir sesle, ama teker teker, yiyeceği bütün yemekleri hemen ısmarladı. Çerezleri beklerken, çantasını açtı, ufak bir kâğıtla bir kurşunkalem çıkardı, önceden yemeklerin hesabını yaptı, sonra da yemek parasını bahşişle birlikte önüne koydu."
  },
  {
    "id": 227,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "“Ama denemek isteğiyle yanıp tutuşuyorsun, değil mi?” “Orası öyle. Sanırım…” “Ne sanıyorsun?” Bu kez gülen bendim. “Çabuk söyle[!]” “Çok meraklısın[.]” “Nasıl olsa her zaman anlatırsın bana; eninde sonunda anlatırsın, kendini tutamazsın.” “Şunu biliyor musun, Minguinho[?] Evden saat yedide çıkıyorum, değil mi? Kavşağa vardığımda saat yediyi beş geçiyor."
  },
  {
    "id": 228,
    "source": "George Orwell - 1984",
    "text": "Zekilik kadar aptallık da gerekliydi, ama aptalca davranmak da zekice davranmak kadar zordu. Bu arada, bir yandan da, kendisini ne zaman kurşuna dizeceklerini merak ediyordu. O[']Brien, [\"]Her şey sana bağ­ lı,\" demişti; ama kendisini kurşuna dizmelerini bilinçli ola­ rak hızlandıramayacağını biliyordu. On dakika sonra da olabilirdi, on yıl sonra da. Onu yıllarca hücre hapsinde tu­ tabilirler, bir çalışma kampına gönderebilirler ya da bazen yaptıkları gibi, bir süreliğine salıverebilirlerdi."
  },
  {
    "id": 229,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Feride’yi elinden tutup Kâmran’ın önüne getirdi. Ağır manalarla dolu bir sesle: -Teyze çocukları hemen hemen kardeş demektir. Feride’nin erkek kardeşi olmadığı için sen, doğrudan doğruya onun ağabeyi sayılırsın Kâmran; kardeşine “Hoş geldin,” desene[!][...] Kâmran hâlâ bir şey söyleyemiyordu. Hafifçe eğildi, Feride’nin saçlarına dudaklarını dokundurdu."
  },
  {
    "id": 230,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"Ben sana dersini vereyim de gör.\" George elini uzatarak Slim'i durdurdu. \"Bir saniye!\" diye haykırdı. Ellerini ağzının etrafına siper ederek, var gücüyle bağırdı[:] \"Vur, Lennie[!]\" Lennie ellerini yüzünden ayırdı ve George[']u görmeye çalıştı. Curley, bu sefer gözlerine vurdu. Lennie'nin geniş yüzü kana hoyandı."
  },
  {
    "id": 231,
    "source": "George Orwell - 1984",
    "text": "Formülün yanlışlıkla \"2 + 2 = \" diye, yani \"5\" raka­ mından yoksun olarak basılması ise, ister istemez okuru yanlış yönlendinnekte, okurun Winston'ın hala bir duraksama içinde olduğunu, dahası belki de kendisine uygulanan baskılara hala direnebildiğini düşünmesine yol açmaktadır. Bu can alıcı baskı yanlışına değinmeden edemeyişimin bir 1. Nineteen fighty[-]Four, George Oıwell, Penguin Books, 1990, \"A Note on the Text\" [(]\"Metne İlişkin Bir Not\"), Peter Davison, s. vii. nedeni de, Can Yayınlan'ndaki eski çeviride, o yanlış basımlar­ dan biri temel alındığı için olsa gerek, aynı hatanın tam yirmi dokuz basım boyunca sürdürülmüş olmasıdır."
  },
  {
    "id": 232,
    "source": "Stefan Zweig - Satranç",
    "text": "Onun arkasından bakmak, iyilikçi olan bu mucizevi insanın arkasından bakmak için, yatakta zorla doğrulmaya çalıştım. Ama yatağın kenarına dayanmayı başaramadım. Normalde sağ elimin[,] parmaklarımın ve bileğimin olduğu yerde yabancı bir şey hissettim[;] kalın, büyük, beyaz bir kabartı, belli ki geniş bir sargı. Elimdeki bu beyaz, kalın, yabancı şeyin ne olduğunu anlamayarak şaşırdım önce, sonra nerede olduğumu yavaş yavaş kavramaya ve başıma ne gelmiş olabileceğini düşünmeye başladım. Birisi beni yaralamış olmalıydı ya da kendi kendime elimi yaralamıştım."
  },
  {
    "id": 233,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "“Minguinho, artık hep birbirimizin yakınında yaşayacağız,” diye söyleniyordum. “Seni öyle güzelleştireceğim ki, hiçbir ağaç seninle boy ölçüşemeyecek. Biliyor musun[,] Minguinho; bugün çok rahat ve büyük bir arabada yolculuk ettim[.] Filmlerde görülen posta arabaları gibiydi. Bak, bundan böyle bütün öğrendiklerimi gelip sana anlatacağım, tamam mı?” Irmağın yüksek otlarına yaklaşmıştım, kirli suyun akışını seyrettim."
  },
  {
    "id": 234,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "“Düşüncem şöyle,” dedi, “teorik açıdan düello saçmadır; pratik açıdan ise, farklı bir meseledir.” “Yani, eğer sizi doğru anladıysam demek istiyorsunuz ki, düello konusundaki teorik düşünceniz ne olursa olsun, pratikte karşılığını istemeden kendinize hakaret edilmesine izin vermezsiniz.” “Düşüncemi tam olarak anladınız.” “Çok iyi, efendim. Bunu sizden işitmek çok hoşuma gitti. Sözleriniz beni belirsizlikten kurtarıyor[...]” “Kararsızlıktan demek istiyorsunuz[.]” “Hepsi de bir, efendim; beni anlamanız için öyle söyledim; ben[...] süslü laflara meraklı değilim. Sözleriniz beni üzücü bir gereklilikten kurtarıyor."
  },
  {
    "id": 235,
    "source": "Michael Ende - Momo",
    "text": "Yeterli olduğu belliydi; Beppo hepsine inanmıştı. \"Zamanım kıymetli olduğu için kısa keseceğim\" diye sürdürdü sözü. [\"]Mesaj şu[:] Size çocuğu bir şartla geri vereceğiz[;] Bir daha bizden ve işimizden tek söz etmeyeceksiniz. Bundan başka, sizden fidye olarak yüz bin saatlik bir zaman tasarrufu istiyoruz. Bu tasarrufu bizim nasıl ele geçireceğimizle siz ilgilenmeyin."
  },
  {
    "id": 236,
    "source": "Albert Camus - Yabancı",
    "text": "Hem nasıl dedim, Bay Meursault, bir bilseniz! Anlamıyor musun ki, dedim, dünya âlem sana verdiğim mutluluğu kıskanıyor. Elindeki mutluluğun değerini sonra anlarsın[!][\"] Kadını, her yanını kanatıncaya kadar dövmüş. Önceleri onu dövmezmiş. \"Pataklardım, ama sanki okşarcasına."
  },
  {
    "id": 237,
    "source": "Michael Ende - Momo",
    "text": "BİRİNCİ KISIM - MOMO VE ARKADAŞLARI zaman hırsızlarının ve çalınmış zamanı insanlara geri getiren çocuğun tuhaf öyküsü BİRİNCİ BÖLÜM -BÜYÜK BİR KENT VE KÜÇÜK BİR KIZ İnsanların bugünkünden bambaşka dillerde konuştuğu çok çok eski zamanlarda sıcak ülkelerde kocaman, görkemli kentler vardı. Bu kentlerde kralların[,] imparatorların sarayları yükselir[;] geniş caddelere daracık sokaklar açılır[,] altın yaldızlı mermer heykellerle süslü tapınaklar göz kamaştırırdı. Buralara başka yerlerden gelmiş çeşitli eşyaların alınıp satıldığı rengârenk pazar yerleri kurulur ve insanlar büyük, geniş alanlarda öbek öbek toplanarak günün önemli olaylarını aralarında görüşüp, tartışırlar ya da birileri konuşur, öbürleri dinlerdi. En önemlisi de oralarda büyük tiyatrolar vardı."
  },
  {
    "id": 238,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Yükseleceğim, ama Bangu’dan hiç çıktığım yok.” Minguinho’ya sevgiyle bakıyordum. Sevginin ne olduğunu gerçekten keşfedeli beri, bütün sevdiklerimi sevgiye boğuyordum. “Biliyor musun, Minguinho[;] on iki çocuğum ve ardından bir on iki çocuğum daha olsun istiyorum, anladın mı[?] İlk on ikisi hep çocuk kalacak; kimse de onları dövmeyecek. Ötekiler büyük insanlar olacaklar."
  },
  {
    "id": 239,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Biri bağırdı: \"Seyis! Hey! Seyis[!]\" George[:] \"Unutmamak için, tekrarla içinden,\" dedi. Kapının boşluğunda bir vücut belirdiği için, iki adam gözlerini kaldırdılar. Kapıda bir genç kadın duruyordu."
  },
  {
    "id": 240,
    "source": "George Orwell - 1984",
    "text": "En ufakbir şey sizi ele verebilirdi. Sürekli gözünüzün seğirmesi, farkında olmadan yüzünüzün kaygılı bir anla­ tıma bürünmesi, kendi kendinize söylenip durmanız, ola­ ğandışılık belirtisi gösteren ya da bir şeyler gizlediğiniz izlenimi uyandıran herhangi bir şey. Kaldı ki, yüzünüzde belirecek uygunsuz bir anlatım bile [(]örneğin, bir zafer açıklanırken inanmamış görünmek[)] cezayı gerektiren bir suçtu[.] Yenisöylem'de bu suç için bir sözcük bile var­ dı: Yılzsuçu diyorlardı. Kız, Winston' a yeniden arkasını dönmüştü."
  },
  {
    "id": 241,
    "source": "Michael Ende - Momo",
    "text": "\"Çocukların böyle hep yalnız, kendi başlarına bırakılması hoş olmuyor. Modem yaşamda, ana babaların çocuklarıyla ilgilenememesi doğal, onları kınayamayız. Ama devlet idaresi bu işi ele almalı[.][\"] Bazıları ise, [\"]Ortalıkta başıboş dolaşan çocuklar trafiğin akışını da engelliyor; bu hiç hoş değil. Onların caddelerde sebep oldukları trafik kazaları yüzünden kaybedilen paralar daha iyi bir yere sarf edilebilir\" dediler. Bir kısmı da, \"Çocukların denetimsiz kalması onların ahlaksız ve ilerde suça eğilimli olmalarına sebep olabilir."
  },
  {
    "id": 242,
    "source": "Stefan Zweig - Satranç",
    "text": "Öncelikle şahı g8’ den h7’ye alarak tehlikeli çizgiden kurtarın. Czentovic büyük olasılıkla öbür yandan saldıracaktır. Ama kaleyi c8’den c4’e getirip bunu savuşturursunuz[;] bu onun iki kalesine[,] bir piyonuna mal olur ve böylece üstünlüğünü yitirir[.] Boştaki piyonlar karşı karşıya kalır ve doğru savunma yaparsanız, oyun berabere biter. Daha fazlasını elde edemezsiniz.” Bir kez daha şaşırıp kaldık."
  },
  {
    "id": 243,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "George, Lennie'ye mahsustan sert sert baktı. Lennie de bir baş işaretiyle anladığını ifade etti. Patron kalemini tükrükledi[:] \"Adın ne?\" \"George Milton.\" \"Ya senin?\" George atıldı: \"Lennie Small[']dur onun adı.\" İsimler deftere yazıldı. \"Bugün neydi, ha ayın yirmisi, öğle zamanı.\" Defteri kapadı. \"Nerede çalıştınız ikiniz?\" \"Kuzeyde, Weed'de,\" dedi George."
  },
  {
    "id": 244,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Arabanın gürültüsü uzaklaştı. Bir an sonra, Slim tekrar odaya döndü. Hâlâ korku ile bir köşeye büzülmüş olan Lennie[']ye baktı[:] \"Göster bakayım ellerini!\" Lennie ellerini uzattı. \"Vay anasını! Gözüm korktu senden benim,\" dedi Slim."
  },
  {
    "id": 245,
    "source": "Albert Camus - Yabancı",
    "text": "Köpeğinin üzerine eğilmiş, tasmasında bir şeyler düzeltiyor gibi geldi bana. Sesimi daha da yükselttim. O zaman, yüzünü dönmeksizin, tutmaya çalıştığı bir öfkeyle[:] \"Hâlâ burada[!]\" diye söylendi. Sonra, dört ayağı üzerinde direnip inildeyen hayvancağızı sürükleye sürükleye alıp götürdü. Tam bu sırada, ikinci kapı komşum çıkageldi."
  },
  {
    "id": 246,
    "source": "Albert Camus - Yabancı",
    "text": "Herhalde Marie de bunu anlatmak istiyordu, çünkü durmadan gülümsüyordu. Artık dişlerinin parıltısından, gözlerinin hafif kırışıklarından başka bir şey göremiyordum. Tekrar bağırdı, [\"]Çıkarsın, evleniriz.[\"] Ben de, \"Olur mu dersin[?]\" diye yanıtladım. Bunu bir şeyler demiş olmak için söyledim. O zaman Marie, çabuk çabuk, \"Tabii,\" dedi, ardından da aklanacağımı, yine denize gideceğimizi ekledi."
  },
  {
    "id": 247,
    "source": "George Orwell - 1984",
    "text": "Yenisöylem dilbilgisinin ikinci önemli özelliği, ola­ ğanüstü kuralcı olmasıydı. Bazı ayrıksı örnekler dışında, tüm çekimler aynı kurallara bağlıydı. Örnekse, tüm ey­ lemlerde, geçmiş zaman çekimi aynıydı ve [-]di ([-]dı[)] ile sonlanıyordu. Çalmak'm geçmiş zaman çekimi çaldı, düşünmek'in ise düşündü idi; l;?u kurala uymayantüm çekimler kaldırılmıştı. Tüm ç©ğul sözcükler, sonlarına -ler ya da -lar eki getirilerek oluşturuluyordu."
  },
  {
    "id": 248,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "yani kendisine yakın bulduğu insanlara karşı tamamen açık kalpli olmaktır... çünkü benim... benim niyetim[...]” Fakat güzel sözler söyleme isteği Arkadiy’e ihanet etti[;] şaşırdı, konuşmakta zorlandı ve bir süre susmak zorunda kaldı; Katya hâlâ gözlerini kaldırmıyordu. Galiba Arkadiy’in lafın sonunu nereye getireceğini anlamıyordu ve bunu bekliyordu. “Öyle seziyorum ki, sizi şaşırtacağım,” diye gücünü toplayarak tekrar konuşmaya başladı Arkadiy, “bu duygu biraz..."
  },
  {
    "id": 249,
    "source": "George Orwell - 1984",
    "text": "Yenisöylem, düşünce ufkunu geniş­ letecek biçimde değil, daraltacak biçimde düzenlenmişti; kaldı ki, sözcük seçiminin en aza indirilmesi de dolaylı olarak bu amaca hizmet ediyordu. Yenisöylem bugün bildiğimiz İngiliz diline dayan­ makla birlikte, günümüzde İngilizce konuşan biri yeni icat edilmiş sözcükler içermeyen pek çok Yenisöylem tümcesini bile anlamakta güçlük çekiyordu. Yenisöylem[,] sözcükleri,A sözdağarcığı, B sözdağarcığı [(]bileşik sözcük­ ler de deniyordu[)] ve C sözdağarcığı diye üç sınıflamaya ayrılıyordu. Her sınıflamayı ayrı olarak incelemek daha kolay olacaktır, ama üç sınıflama için de aynı kurallar geçerli olduğundan; Yenisöylem'in dilbilgisel özellikleri A sözdağarcığına ayrılan bölümde ele alınacaktır. A sözdağarcığı: A sözdağarcığı, yemek, içmek, çalış­ mak, giyinmek, merdiveni çıkmak ve merdivenden in­ mek, araba sürmek, bahçeyi düzenlemek, yemek pişir­ mek gibi, günlük yaşamda gerekli olan sözcüklerden oluşuyordu."
  },
  {
    "id": 250,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Artık hiçbir hayvan hırsızlığa yeltenmediği için de, otlağı tarlalardan çitlerle ayırmaya gerek kalmamıştı; bu da, çitlerin ve parmaklıkların bakımı ve onarımına harcanan emekten kazanılmasını sağlıyordu. Gene de, yaz ilerledikçe, önceden kestirilemeyen bazı eksiklikler kendini duyurmaya başladı. Gazyağı[,] çivi[,] ip ve köpek bisküvisine; atnalı için demire gereksinim vardı; üstelik, bunların hiçbiri çiftlikte üretilebilecek şeyler değildi[.] Sonradan, tohum ve suni gübreye, çeşitli aletlere ve yel değirmeni için birtakım makine parçalarına da gereksinim duyulacaktı. Bunların nasıl sağlanacağını kimse bilemiyordu."
  },
  {
    "id": 251,
    "source": "George Orwell - 1984",
    "text": "Anlaşılan, o zamanlar her şey farklıydı. Ülkelerin adları ve haritadaki biçimleri bile farklıydı. Örneğin, o günlerde Havaşeridi Bir['] e Havaşeri­ di Bir denmiyordu[;] İngiltere ya da Britanya deniyordu, ama Londra[']ya o zaman da Londra dendiğinden nerdey­ se emindi. Winston, ülkesinin savaşta olmadığı bir dönemi anımsamıyordu, ama çocukluğunda uzunca bir barış dö- nemi yaşadıkları açıktı, çünkü ilk anılan arasında bir hava saldırısının herkesi şaşkınlığa uğratması yer alıyor­ du. Belki de Colchester'a atom bombası atıldığındaydı."
  },
  {
    "id": 252,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Şimdiye kadar korkmadım... ama sonra kendimi kaybedeceğim ve ‘füüiit’! [(]Güçsüz bir hareketle elini salladı.[)] Şimdi size ne diyebilirim[...] sizi sevmiştim! Bu eskiden de hiçbir anlam ifade etmiyordu, şimdi ise haydi haydi önemsiz."
  },
  {
    "id": 253,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Birisi gelince hemen cevap vermeyeceksiniz: İlkin biraz homurdanacaksınız, sonra, adamına göre ya içeri, ya kapı dışarı. Kibar misafirler geldi mi, tabii bastonunuzu kaldırıp şöyle selamlayacaksınız. [(]Zahar kapıcı selamını taklit etti.[)] İş güzeldi doğrusu, inkâr etmem; fakat Tanrı selamet versin, hanımefendiye bir şey beğendirmek çok zordu. Bir gün odama girdi, bir tahtakurusu gördü; sanki tahtakurularını ben icat etmişim gibi kıyameti kopardı. Tahtakurusuz ev olur mu hiç."
  },
  {
    "id": 254,
    "source": "İvan Gonçarov - Oblomov",
    "text": "İçinizdeki bilinçsiz aşk ihtiyacı asıl gıdasını bulamayınca, hararetsiz ve sahte bir alevle yandı; bu çeşit ateşler kadınlarda bir çocuğa veya bir kadına gösterdikleri sevgide ya da nedensiz döktükleri gözyaşlarında, histeri bunalımlarında görülür... Ben baştan size bunu açıkça söylemeliydim: Siz yanlış bir yoldasınız; karşınızdaki erkek, rüyalarınızda gördüğünüz adam değildir. Göreceksiniz, bir gün o adam karşınıza çıkacak[;] o zaman kendinize geleceksiniz[;] yaptığınız hatadan utanacak, bana kızacaksınız; ben de bunun azabını duyacağım[.] Daha keskin bir zekâm, daha iyi bir kalbim olsaydı, daha samimi olsaydım size bunları daha önce söylerdim... Söylememiş de değilim, ama nasıl söylediğimi hatırlarsınız: Bana inanmamanızdan korkarak, beni ciddiye almamanızdan korkarak; başkalarının sonradan söyleyeceği şeyleri ben size önceden söyledim, sizi erkekleri dinlememeye, onlara inanmamaya hazırlamak istedim."
  },
  {
    "id": 255,
    "source": "Albert Camus - Yabancı",
    "text": "Buradaysa vakit yokmuş ve ha demeden cenaze arabasının arkasına düşmek düşüncesine bir türlü alışamıyormuş insan. O zaman karısı, \"Sus! Bunlar baya anlatılacak şeyler değil[!][\"] demişti. Ben araya girmiş: \"Yok canım, yok,\" demiştim. Anlattıklarını doğru ve ilgi çekici buluyordum."
  },
  {
    "id": 256,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Gözlerimi açamadan yerde yatıyor ve güçlükle soluk alıyordum. Beni odama taşıdı. Ağlamıyordum; ama[,] annemin odasına gizlenen Kral Luís, dehşete düşmüştü, hırpalandığımı gördüğü için korkunç çığlıklar atıyordu[.] Glória köpürmüştü: “Bir gün bu çocuğu öldüreceksiniz, olacak şey değil! Kalpsiz canavarlarsınız!” Beni yatağıma yatırmıştı ve sık sık kullandığımız tuzlu su dolu leğeni getirmeye koşuyordu."
  },
  {
    "id": 257,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Şimdilerde yoksul ve çetin bir hayat yaşadıklarını, çoğu zaman aç kalıp soğuktan donduklarını, uyku uyumak dışında her dakikalarını çalışmakla geçirdiklerini biliyorlardı. Ama eski günlerin daha da beter olduğuna inanıyorlar ve bundan mutluluk duyuyorlardı. Kaldı ki, Squealer[']ın da durmadan vurguladığı gibi, eskiden köle olmalarına karşılık şimdi özgürdüler; bütün fark da buradaydı[.] Beslenecek boğazlar da artmıştı. Sonbaharda dört dişi domuz da aşağı yukarı aynı sıralar toplam otuz bir yavru doğurmuştu."
  },
  {
    "id": 258,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Söylemesini istediğim şarkı Fanny’ydı. O her zaman söyler, ben de ezberlemek isterdim. ‘Öldüğünü Görmek İstiyorum Bir Zindanda’ bölümüne geldiğinde ürperirdim[;] o kadar güzeldi[.] Sesini ayarladı ve Claudionor’a başladı: Morro da Mangueria’da samba yapmaya gittim Bir kız çağırdı beni; şöyle, şöyle… Hayır, hayır, gitmeyeceğim; kocası irikıyım. Bıçağından korkarım… Hayır, gitmeyeceğim; kocası kocaman biri… Ailesini doyurmak için limanda çalışan biri Susuyor ve açıklıyordu: “Her keseye uygun şarkı sözü."
  },
  {
    "id": 259,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "duhul olmak: İçeri girmek. dülger: Yapıların kaba ağaç işlerini yapan kimse. düzgün[:] [(]Metinde[)] Kadınların yüzlerine sürdükleri birtür krem, fondöten. Eebedî: Sonsuz, ölümsüz. ecir: Ücret."
  },
  {
    "id": 260,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Hem bir ayım kalmıştı. Doğrusu, emekliliğimi dört gözle bekliyordum. Benjamin de yaşlandı artık; belki de onu da emekliye ayırırlar da bana arkadaşlık eder.[\"] Clover, [\"]Hemen yardım istemeliyiz,\" dedi. \"Koşun, Squealer'a haber verin.\" Hayvanlar, olup biteni Squealer'a anlatmak üzere hep birlikte çiftlik evine koştular. Yalnızca Clover'la Benjamin kalmıştı; Benjamin, Boxer'ın yanına uzanmış, uzun kuyruğuyla sinekleri kovuyordu."
  },
  {
    "id": 261,
    "source": "Michael Ende - Momo",
    "text": "Beni arasalardı kolayca yakalarlardı. Hem de, kaplumbağa ile çok yavaş yürüyorduk.\" Hora Usta, ayakları dibinde duran kaplumbağayı kucağına alarak, çenesinin altını okşadı; \"Sen ne dersin Kassiopeia?\" diye gülerek sordu. \"Sizi yakalayabilirler miydi[?]\" Kaplumbağanın sırtında şu harfler belirdi[:] \"Asla[!]\" Öyle bir neşeyle titreşiyorlardı ki, gülüp kıkırdıyor gibiydiler. Hora Usta, bir açıklama yaptı: \"Kassiopeia geleceği bilir biraz. Öyle pek uzak bir geleceği değil ama, yarım saat kadar sonra olacakları önceden sezebilir.\" Sırtta, \"Tam olarak!\" yazısı belirdi."
  },
  {
    "id": 262,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Onun için portakal fidanı, bir insan. Çok garip, çok duyarlı ve erken gelişmiş bir çocuk.” Her şeyi işitiyor ve yaşamak istememeye devam ediyordum. Göklere uçmak istiyordum[;] oysa hiçbir canlı oraya gitmiyordu[.] İlaçlar satın alındı, kusmalarım kesilmiyordu. O sıra çok güzel bir şey oldu."
  },
  {
    "id": 263,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "grandiose: (Fr.) Ulu, yüce. güzide: Seçkin. Hhacer[-]i esved: [(]Kara taş[)] Kabe kapısı yanında bulunan ve hacıların öpmeleri hac şartlarından olan taş. hacet kalmamak: Gereği olmamak. had: Sınır, derece."
  },
  {
    "id": 264,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Mutfağa koşup semaveri yakmalarını söylerim. Her şey olacak, her şey. Ne yapayım[,] üç yıldır onu görmedim, yedirmedim, içirmedim, kolay mı[?]” “Eh, bana bak hanım, elini çabuk tut, bizi rezil etme; size gelince beyler, buyrun, arkamdan gelin. Bak işte Timofey de sana saygılarını sunmaya geldi Yevgeniy. O da sevindi, yaşlı çomar."
  },
  {
    "id": 265,
    "source": "İvan Gonçarov - Oblomov",
    "text": "İnsan susayacak olur; sürahiyi bulur, bardak bulamaz... Zahar sakin sakin: — Sürahiden de pekâlâ içilebilir, dedi. Evet[,] sana göre hava hoş[:] Ortalığı süpürmesen de olur[;] her şeyi toz içinde bıraksan da olur; halıları silkmesen de olur. Taşınacağımız evde en aşağı üç gün perişanlık devam edecek; hiçbir şey yerinde olmayacak; resimler yerde sürünecek; lastikler yatağın üstünde; ayakkabılar, çay kutusu, krem kutusu bir arada. Koltuğun biri parçalanmış, bir tablonun camı kırılmış, kanepe lekeler içinde..."
  },
  {
    "id": 266,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Necmiye, bir hamam kubbesi ahmaklığıyla: -Ya, ya! Bu sefer bari mesut olsun zavallı, diye misafirin kelimelerini aynen tekrar edip lakırdıyı kapatmaz mı? Artık çaresiz, iş başa düşmüştü; alaycı bir tavırla[:] [-]Hanımefendi, tekrar evlendiler mi[?] dedim. Kim hanımefendi?"
  },
  {
    "id": 267,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Yere yapışan köpek çığlık çığlığa merhamet dilenirken, öteki iki köpek kuyruklarını bacaklarının arasına kıstırıp tabanları yağladı. Boxer'ın gözü Napoléon'daydı; köpeği ezip gebertmeli miydi, yoksa salıp koyvermeli miydi? Napoléon[']un suratı allak bullak olmuştu; Boxer[']a[,] sert bir sesle, köpeği salıvermesini emretti. Bunun üzerine Boxer ayağını köpeğin üstünden çekti, köpek de acı iniltiler çıkararak sıvıştı oradan. Az sonra ortalık sakinleşmişti."
  },
  {
    "id": 268,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Bizimle gelmektense Dindinha’yla kalmayı ve her ay bir müshil almayı yeğliyorsun, öyle mi?” “Evet, ama nedenini hiçbir zaman öğrenemeyeceksin… Peki, İkincisi?” “Burada söyleyemem. Duymaması gereken ‘biri’ var.” Onunla ‘kulübe’nin yanına kadar gittim. Bu önleme karşın alçak sesle konuştu[:] “Seni uyarmam gerek[,] Zezé; alışman için… Belediye, yolları genişletecek[.] Lağım akıtan bütün hendekler kapatılacak, bahçenin bu ucu da gidecek.” “Ne önemi var?” “Sen ki çok zekisin, anlamadın mı?.. Yolu genişletmek için burada ne varsa ortadan kaldıracaklar.” Bana şekerportakalı fidanımın yerini gösterdi."
  },
  {
    "id": 269,
    "source": "Stefan Zweig - Satranç",
    "text": "Sakın gözlerini açma! Bırak bu düş devam etsin, yoksa çevrende yine o lanet hücreyi, sandalyeyi, leğeni, masayı ve o hep aynı desenli duvar kâğıdını görürsün. Düş görüyorsun[,] görmeye devam et[!]’ Ama merak ağır bastı[.] Yavaşça ve dikkatle gözlerimi açtım. Ve mucize: Başka bir odadaydım, otel hücremden daha geniş, daha ferah bir odada."
  },
  {
    "id": 270,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Altındaki imzayı oku.\" Slim okudu: \"Size hayırlı işler dilerim. William Tenner.\" Tekrar Whit'e baktı: \"Okuduk, ne olacak?\" \"Bill Tenner'i hatırlıyor musun? Üç ay kadar önce burada çalışıyordu.\" \"Mektubu o mu yazdı diyorsun[?]\" Whit[:] \"Ta kendisi,\" diye haykırdı. \"Odur.\" Slim: \"Doğru diyorsun herhalde. Gerçekten basmışlar yazıyı.\" \"Eminim."
  },
  {
    "id": 271,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Gene de, tüm hayvanların efendisidir. Hayvanları çalıştırır, karşılığında onlara açlıktan ölmeyecekleri kadar yiyecek verir, geri kalanını kendine ayırır. Bizse emeğimizle tarlayı sürer, gübremizle toprağı besleriz[;] oysa hiçbirimizin postundan başka bir şeyi yoktur[.] Siz, şu karşımda oturan inekler; bu yıl kaç bin litre süt verdiniz? Güçlü kuvvetli danalar yetiştirmek için gerekli olan sütleriniz nereye gitti?"
  },
  {
    "id": 272,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Hele bir davada para kaptırınca umudunu iyiden iyiye yitirmiş, sağlığını bozacak ölçüde içkiye vermişti kendini. Bazen günlerce mutfaktaki koltuğunda aylak aylak oturuyor, gazete okuyup içkisini içiyor, arada sırada biraya batırdığı ekmek parçalarıyla Moses'ı besliyordu. Yanında çalışanlar tembel ve sahtekârdı[;] tarlaları ayrıkotları bürümüştü[;] binaların damlarının onarılması gerekiyordu[;] çitler bakımsızdı; hayvanlar doğru dürüst beslenmiyordu. Haziran gelmişti, otlar biçilmeye neredeyse hazırdı. Bay Jones, bir cumartesi gününe denk düşen yaz gündönümünden hemen önce Willingdon'a gidip Kırmızı Aslan meyhanesinde körkütük sarhoş olunca, çiftliğe ancak pazar günü öğle saatlerinde dönebildi."
  },
  {
    "id": 273,
    "source": "George Orwell - 1984",
    "text": "(Ç.N.) 2. Ajitasyon ve propaganda. [(]Ç.N.[)] bir sözcüğün çağrıştırdıkları da, Gerçek Bakanlığı'nın çağrıştırdıklarından hem daha az hem de daha denetlene­ bilirdir. Bu da, yalnızca her fırsatta kısaltmaya gidilmesi­ ni değil, her sözcüğün kolayca söylenebilmesine nerdey­ se aşın bir özen gösterilmesini de açıklamaktadır. Yenisöylem'de, anlam şaşmazlığı dışında en çok söy­ leniş kolaylığına önem veriliyordu."
  },
  {
    "id": 274,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Ne topluluklar içinde bulundum, kimlerle ilişkim oldu! Ben, yani şu karşınızda gördüğünüz adam, evet ben, Prens Wittgenstein’ın ve Jukovskiy’in nabzını saymış adamım! Onları[,] On Dört’te Güney Ordusu’ndaki herkesi, anlıyorsunuz ya [(]burada Vasiliy İvanoviç dudaklarını iyice sıktı[)] tek tek tanırdım. Zaten benim işim bir kenarda durmaktı; bir neşterimi bilirdim, o kadar! Dedeniz ise çok saygıdeğer bir adamdı, gerçek bir asker.” “İtiraf et, kalın kafalının biriydi,” dedi Bazarov tembel tembel."
  },
  {
    "id": 275,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "O güne kadar Mollie ve Snowball dışında hiçbir hayvan çiftlikten ayrılmamıştı; hasta yoldaşlarının insanların eline bırakılacak olmasından hiç hoşlanmamışlardı. Ama Squealer, onları kolayca yatıştırmakta gecikmedi: Willingdon'daki baytar, Boxer'ı çok daha iyi tedavi edebilirdi. Yarım saat kadar sonra Boxer biraz toparlanıp güçlükle ayağa kalktı; topallayarak ahırına gidip Clover[']la Benjamin[']in hazırladıkları saman döşeğe uzandı. Boxer, iki gün ahırında kaldı. Domuzlar, banyodaki ilaç dolabında buldukları büyük bir ilaç şişesi göndermişlerdi."
  },
  {
    "id": 276,
    "source": "George Orwell - 1984",
    "text": "Tele-ekranlarsa­ bahtan akşama kadar sayıp döktükleri iç bayıltıcı istatis­ tiklerle, insanların artık daha çok yiyecek, daha çok giysi, daha iyi evler, daha çok eğlence olanağı bulabildiklerini, elli yıl önceye oranla daha uzun yaşayıp daha az çalış­ tıklarını, daha yapılı, daha sağlıklı, daha güçlü, daha mutlu, daha zeki olduklarını, daha iyi eğitim gördükleri­ ni kanıtlamaya çabalıyordu. İşin ilginci, bu söylenenleri doğrulamanın da, çürütmenin de mümkün olmamasıy­ dı. Örneğin, Parti, bugün yetişkin proleterlerin yüzde kırkının okuma yazma bildiğini ileri sürüyordu; söyle­ nenlere bakılırsa, bu oran Devrim[']den önce yüzde on beşi geçmiyordu[.] Parti, çocuk ölümlerinin Devrim'den önce binde üç yüz iken, bu oranın artık binde yüz altmı­ şa düştüğünü öne sürüyordu; istatistikler böyle sürüp gidiyordu işte. İki bilinmeyenli bir denklem gibiydi hep­ si."
  },
  {
    "id": 277,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"Demek şu herifin konuşmasına izin vermeyeceksin, öyle mi?\" \"Canı bir şey söylemek istiyorsa, söyler.\" Lennie'ye hafifçe işaret etti. Lennie usulca: \"Daha şimdi geldik,\" dedi. Curley ona dik dik baktı[:] \"Bir daha sefere, sana bir şey sorulunca cevap ver, anladın mı[?]\" George onun arkasından baktı, sonra ihtiyara döndü: \"Ne kaşınıyor bu herif be[?] Lennie ona bir şey yapmadı ki.\" İhtiyar, dinleyen olmasın diye ihtiyatla kapıya baktıktan sonra usulca: \"Bak ne diyeceğim,\" dedi. \"Patronun oğludur o."
  },
  {
    "id": 278,
    "source": "Albert Camus - Yabancı",
    "text": "Dört bir yanına bakmıyor, olduğu yerde dönüyor, koridorun karanlıklarını delmeye çalışıyor, anlaşılmaz birtakım sözler geveliyor, o ufacık kanlı gözleriyle, yeniden sokağı tarayıp duruyordu. Raymond ona, \"Neyiniz var?\" diye sorunca hemen karşılık vermedi. [\"]Pis, mundar hayvan[!][\"] diye mırıldandığını işitir gibi oldum. Durmadan çırpınıyordu. Köpeğinin nerede olduğunu sordum."
  },
  {
    "id": 279,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Snowball'a bakılırsa, bu özdeyiş, hayvancılığın temel ilkesini içeriyordu. Bu temel ilkeyi iyice kavramış olan herkes insanoğlunun zararlı etkilerinden korunabilirdi. Kuşlar[,] ilk başta[,] kendilerinin de iki ayaklı oldukları gerekçesiyle bu özdeyişe karşı çıkacak oldular; ama Snowball yanıldıklarını kanıtlamakta gecikmedi[.] \"Yoldaşlar,\" dedi. \"Kuşun kanadı, iş görmek için değil, devinmek için kullanılan bir organdır."
  },
  {
    "id": 280,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "neredeyse sana söylemeyi unutuyordum... Söyle de bizim atları posta istasyonuna, Fedotov’a göndersinler.” Vasiliy İvanoviç şaşırdı. “Bay Kirsanov gidiyor mu yoksa[?]” “Evet[;] ben de onunla birlikte gideceğim.” Vasiliy İvanoviç, olduğu yerde döndü. “Sen de mi gidiyorsun?” “Evet... gitmem gerekiyor."
  },
  {
    "id": 281,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Aldığımız parayı hak etmek gerek. Yazın dinleneceğim. Foma Fomiç söz verdi[;] beni işle bir yere gönderecek, saat ve verst üzerinden yolluk alacağım; üç ruble gündelik; tabii ikramiye de verecekler[.] Sokağa atacak paraları var, dedi; sonra içini çekerek düşünceye daldı. Sahi mi?"
  },
  {
    "id": 282,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "İnsanlar sokaklarda dolaştığı halde hiç iş çıkmıyordu. Kimse, pabuçlarının tozunu aldırmak için bile bir kuruş harcamak niyetinde değildi. Rio[-]Sáo Paulo yolu üzerindeki direklerden birinin yanında durdum ve incecik sesimle arada bir bağırmaya koyuldum: “Boyacı[!] Baylar bayanlar!” “Boyacı, bayım! Boyacı!"
  },
  {
    "id": 283,
    "source": "İvan Gonçarov - Oblomov",
    "text": "\"İşte gidiyor, işte o!\" diye fısıldaşırlar. Her gün bir sürü adam gelip ona bir sürü saçma sapan şey sorar, budalaca suratlar takınırlar tıpkı senin gibi. [(]Zahar hemen başını tekrar avludan yana çevirdi.[)] İşte havadis böyle karşılanır. Daha sonraki günlerde ilk iş nişanlının evine gitmektir; durup dinlenme yoktur; hep yeni eldiven, yeni elbise giymek, hep neşeli görünmek zorundasın. Doğru dürüst yemek yiyemezsin."
  },
  {
    "id": 284,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "“Hayır, bana sizin paranız lazım değil.” “Peki ne o zaman?” dedi Feneçka. “Ne?” diye tekrarladı Bazarov. “Bilin bakalım[.]” “Bilmece çözmeyi bilmem ben[!]” “Öyleyse ben size söyleyeyim; bana lazım olan[...] şu güllerden biri.” Feneçka tekrar gülmeye başladı, Bazarov’un isteği ona o kadar gülünç gelmişti ki, hatta bu arada ellerini bile çırpıyordu. Gülüyordu, aynı zamanda da gururlanıyordu."
  },
  {
    "id": 285,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Domuzların okuma yazması kusursuzdu. Köpekler, okumayı çok iyi öğrenmişlerdi, gel gör ki Yedi Emir den başka bir şey okudukları yoktu. Keçi Muriel[']in okuması köpeklerden de iyiydi[;] bazı akşamlar[,] çöplükte bulduğu gazete parçalarını getirip öbür hayvanlara okuyordu. Domuzlar kadar iyi okuyabilen Benjamin'in ise, bu yeteneğini kullandığı pek görülmemişti. \"Ben okumaya değer bir şey göremiyorum,\" diyordu."
  },
  {
    "id": 286,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Etrafımdaki insanları ne kadar çabuk seviyorum. Aziz Eniştem’in tuhaf bir sözü vardı. Ara sıra beni ellerimden tutarak: [-]Ah, benim yapışkan kızım, evvela insanı yadırgarsın, kaçarsın; sonra çamsakızı gibi öyle bir yapışırsın ki[...] derdi. Adamcağızın hakkı varmış."
  },
  {
    "id": 287,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Birkaç denemeden sonra, hep bir ağızdan söyledikleri İngiltere'nin Hayvanları ile inledi çiftlik. İnekler böğürüyor, köpekler havlıyor, koyunlar meliyor, atlar kişniyor, ördekler vaklıyordu. O kadar hoşlarına gitmişti ki[,] şarkıyı baştan sona tam beş kez söylediler; Bay Jones uyanmasa[,] belki de sabaha kadar söyleyeceklerdi. Ama ne yazık ki, Bay Jones gürültüden uyandı; avluya tilki girdiğini sanarak yatağından fırladı. Her zaman yatak odasının köşesinde duran tüfeğini kaptığı gibi karanlığa saçma yağdırdı."
  },
  {
    "id": 288,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Ben kendi adıma sizin doğa bilimleriyle uğraşmanıza çok sevindim. Duyduğuma göre, Liebig, tarlaların gübrelenmesi konusunda şaşırtıcı buluşlar yapmış. Tarım işlerimde bana yardım edebilirsiniz; bana faydalı nasihatler verebilirsiniz[.]” “Emrinize amadeyim Nikolay Petroviç ama biz nerede, Liebig nerede[!] Önce alfabeyi öğrenmek, sonra kitabı eline almak gerekir ama biz daha elifi görsek mertek sanıyoruz.” “Görüyorum ki, tam bir nihilistsin sen,” diye düşündü Nikolay Petroviç. “Yine de gerekirse size başvurmama izin veriniz,” diye yüksek sesle ekledi."
  },
  {
    "id": 289,
    "source": "Stefan Zweig - Satranç",
    "text": "Bir kadın usulca yanıma sokuldu, başında beyaz başlık olan bir kadın, bir hemşire. Çok heyecanlandım: Bir yıldan beri kadın yüzü görmemiştim. Bu hoş görüntüye baktım[;] yabanıl, kendinden geçmiş bir bakış olsa gerekti bu, çünkü kadın, ‘Sakin olun[!] Sakin olun!’ diye yatıştırmaya çalıştı beni. Ama ben yalnızca sesine kulak kabarttım; bu konuşan, bir insan değil miydi?"
  },
  {
    "id": 290,
    "source": "Michael Ende - Momo",
    "text": "\"Sen yürü, peşinden geliyorum\" dedi. Ve... Böylece yavaş yavaş[,] kaplumbağanın adımlarına uyarak[,] koca taş çemberinin dışına çıktılar; büyük kente doğru yol almaya başladılar[.] ONUNCU BÖLÜM -VAHŞİ BİR KOVALAMA VE RAHAT BİR KAÇIŞ İhtiyar Beppo'nun gıcırtılı bisikletinin sesi geceyi yırtıyor gibiydi. Olanca gücüyle pedal çeviriyordu."
  },
  {
    "id": 291,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "George: \"Eee, söyle bakalım, Lennie,\" dedi, \"senin yavruyu sevdin mi?\" Lennie, üzüntülü bir tavırla: \"Beyazlı kahverenkli,\" dedi, \"tam istediğim gibi.\" George kesin bir hareketle kağıtları bıraktı. Soğuk bir sesle: \"Lennie!\" dedi. \"Ne var[?]\" \"Köpeğini buraya getirme demedim mi sana[?]\" \"Ne köpeği[?] Köpek möpek yok bende.\" George, hemen ona doğru koştu, omuzundan tutup arkaüstü yatırdı. Elini uzatıp köpek yavrusunu Lennie'nin göbeği üstünde sakladığı yerden çıkardı."
  },
  {
    "id": 292,
    "source": "Albert Camus - Yabancı",
    "text": "Dikkat ettim: o ufacık ihtiyar kadının karşısındaydı. İkisi de birbirlerine derin derin bakıyorlardı. Ama uzun zaman onları incelemeye vakit bulamadım, çünkü Marie o sırada, [\"]İnsan umudunu kesmemeli[!][\"] diye bağırdı. \"Evet,\" diye karşılık verdim. Aynı zamanda, ona bakıyordum."
  },
  {
    "id": 293,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Bu gece burada arkaüstü yatacağım. Canım öyle istiyor.\" Lennie, dizleri üstünde doğrularak, George'a baktı. [\"]Yemek yemeyecekmiyiz[?]\" \"Yiyeceğiz elbet, git biraz kuru çalı[-]çırpı topla. Dengimde üç kutu fasulye var. Yak ateşi."
  },
  {
    "id": 294,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "“Benim suçum değil… Benim suçum değil… Benim suçum değil… Benim suçum değil…” Evin bütün ışıkları yanmıştı, yarı uykulu yüzler odama daldı. “Bir karabasandı.” Annem beni kollarına almıştı. “Bir düşten başka şey değildi, yavrum[;] bir karabasan…” Glória, Lalá’ya anlatırken yeniden kusmaya başladım[:] “Katil, diye bağırmasına uyandım. Öldürmekten, ezmekten, parça parça etmekten söz ediyordu… Tanrım, ne zaman bitecek bütün bunlar?” * * * Birkaç gün sonra her şey bitti. Yaşamaya hükümlüydüm."
  },
  {
    "id": 295,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "(Yevdoksiya bu arada ellerini iki yana açmıştı.) Ah, Yeliseviç bu konuda ne harika bir makale yazmıştı! Bu bay bir deha! [(]Yevdoksiya, “adam” yerine hep “bay” sözcüğünü kullanıyordu[.][)] Bazarov, şöyle divana, yanıma oturun. Siz belki de bilmiyorsunuzdur, ben sizden müthiş korkuyorum.” “Neden? İzninizle öğrenebilir miyim?” “Siz tehlikeli bir baysınız; siz öyle bir eleştirmensiniz ki."
  },
  {
    "id": 296,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Bir gün, makas istedim; onları ensemin hizasından kestim. Nekahet ne tatlı şey. İnsan, yeniden dünyaya gelmiş gibi oluyor; en ehemmiyetsiz yerlere [-]renkli oyuncaklara bakan küçük çocuk gibi[-]sevinçle, saadetle bakıyor. Cama kanatlarını çarpan bir kelebek, aynanın kenarında renkli akisler uyandıran bir güneş aydınlığı, uzak bir sürünün hafif çıngırak sesleri, kalbimi lezzetli titremelerle çırpındırıyordu. Hastalık, son üç senemin bütün zehirlerini alıp götürmüştü."
  },
  {
    "id": 297,
    "source": "George Orwell - 1984",
    "text": "Winston eli yolun kıyısına doğru tekmeledi, sonra ka­ labalığın içine düşmemek için sağdaki bir ara sokağa girdi. Üç dört dakika sonra, bombanın etkilediği bölgenin dışın­ daydı artık; sokaklardaki kitlelerin mahşer yerine çevirdi­ ği yaşam hiçbir şey olmamışçasına süriiyordu. Nerdeyse akşamın sekiziydi ve proleterlerin gittikleri içkili lokanta­ lar [(]onlar [\"]meyhane\" diyorlardı[)] adam almıyordu. Dur­ madan açılıp kapanan kirli kapılardan hela, talaş ve ekşi bira kokuları geliyordu. Bir evin çıkıntı yaptığı köşede üç adam birbirine sokulmuş dikiliyor, ortadakinin elinde tut­ tuğu katlanmış gazeteyi öbür ikisi onun omuzlarının üze­ rinden okuyordu."
  },
  {
    "id": 298,
    "source": "Albert Camus - Yabancı",
    "text": "Bu, benim bileceğim bir iş değildi. Kendisine söyledim bunu. O masanın üzerinden haçı gözüme sokarcasına uzatmış[,] çılgınlar gibi, [\"]Ben Hıristıyanım, ben[!] Senin günahlarını bağışlasın diye yalvarıyorum buna. Senin için acılara katlandığına nasıl inanmazsın?\" diye bağırıyordu."
  },
  {
    "id": 299,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Bu öğretici gösteriyle vali beyin balosu sona erdi. 29. [(]Fr[.][)] Gerçek bir Fransız şövalyesi gibi. (Ç.N.) 30. (Fr.) Hayran kaldım."
  },
  {
    "id": 300,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Bütün ömrümüzce arpa taşıyacakmışız gibi davranırız, sonra günün birinde, alacağımızı alır, çekeriz arabayı.\" Lennie ile Candy, sevinçten yüzlerini buruşturarak başlarıyla onayladılar. Lennie kendi kendine: \"Kimseye söylememeli,\" diye tekrarladı. Candy atıldı[:] \"George!\" \"Ne var[?]\" \"Köpeğimi kendim öldürmeliydim, George. Bir yabancının köpeğimi öldürmesine izin vermemeliydim.\" Kapı açıldı. Slim girdi, arkasından da Curley, Carlson, Whit girdiler."
  },
  {
    "id": 301,
    "source": "George Orwell - 1984",
    "text": "\" \"Kitapta yazanlar doğru mu peki?\" \"Tanımlamalar doğru. Ortaya koyduğu program ise tam bir saçmalık. Bilginin gizliden gizliye birikmesi [-]bi­ linçlenmenin giderek yaygınlaşması[-][;] en sonunda da proleteryanın ayaklanması. .. Parti'nin alaşağı edilmesi."
  },
  {
    "id": 302,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Bir dakika bile rahatım yok senin yüzünden.\" Lennie, hâlâ çökmüş vaziyette duruyordu. Derenin arkasında karanlıklara bakıyordu. \"George, istersen gideyim ben, seni yalnız bırakayım[?]\" \"Nereye gidebilirsin ki[?]\" \"Giderim işte. Nah şu dağlara çıkarım. Bir mağara bulurum elbette.\" \"Ya, öyle mi?"
  },
  {
    "id": 303,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Pavel Petroviç, kırmızı şarap dolu kadehinden arada sırada bir yudum alarak ve düşüncesini ya da “Ya! Ha! Hım[!]” cinsinden ünlemleri daha da az söyleyerek yemek odasında ağır ağır bir aşağı bir yukarı dolaşıyordu [(]Pavel Petroviç hiç akşam yemeği yemezdi[)]. Arkadiy birkaç Petersburg haberi verdi ama genç bir insanın çocukluktan yeni çıktığında ve çocuk olarak görülmeye ve sayılmaya alıştığı bir yere geri döndüğünde çoklukla hissettiği o büyük sıkılganlığı duyuyordu. Hiç gerek yokken konuşmasını uzatıyor, “babacığım” demekten kaçınıyordu ve hatta birkaç kez bunun yerine dişlerinin arasından telaffuz ettiği “baba” sözcüğünü kullandı; aşırı bir rahatlıkla kadehine canının istediğinden çok daha fazla şarap koydu ve hepsini içti."
  },
  {
    "id": 304,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Bütün hayvanlar yoldaştır!\" Tam o sırada müthiş bir gürültü koptu. Koca Reis konuşurken, deliklerinden dışarı süzülen dört iri sıçan, arka ayaklarının üzerine oturmuş, onu dinlemeye koyulmuşlardı. Köpekler[,] onları görür görmez saldırıya geçmişler[;] sıçanlar çarçabuk deliklerine kaçarak canlarını zor kurtarmışlardı[.] Reis, ön ayağını kaldırarak herkesi susturdu: \"Yoldaşlar. Çözmemiz gereken bir sorun var."
  },
  {
    "id": 305,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Görüyorum ki, odanızda değişiklik olmuş,” diye ekledi. Kızın anlamadığını görerek, “Perdeleri kastediyorum,” diye mırıldandı. “Evet, efendim, perdeler[;] onları bize Nikolay Petroviç bağışladılar[;] perdeleri asalı çok oldu.” “Evet, ben de epeydir gelmemiştim. Şu anda odanız çok güzel olmuş.” “Nikolay Petroviç’in sayesinde,” diye fısıldadı Feneçka. “Şimdi burada, önceki daireden daha rahatsınız değil mi?” diye sordu Pavel Petroviç nezaketle ama yüzünde en ufak bir gülümseme olmadan."
  },
  {
    "id": 306,
    "source": "Michael Ende - Momo",
    "text": "Günün birinde, devamlı artan istekleri karşılayabilmek için, aslında hiç Bu da hemen yenilip yutuldu ve kısa sürede unutuldu. Ondan durmadan başka hikâyeler isteniyordu. Gigi[,] bu sıkışıklığın verdiği bunalım içinde[,] vaktiyle Sonuncuyu da anlatıp bitirdiği gün, kendisini boşalmış ve tükenmiş hissetti; artık yeni bir şey bulması olanaksızdı[.] Eriştiği başarıyı kaybetmek korkusuyla eski hikâyelerini biraz değiştirip, yeni isimlerle anlatmaya başladı. Şaşılacak şeydir, kimse bunu fark etmiş görünmedi."
  },
  {
    "id": 307,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Nihayet tarihin bir döneminde insanlık rahata kavuşacak gibi oluyor; artık tarihin kendisi de rahat edecek, diyorsunuz. Nerede? Tekrar işler bozuluyor[;] her şeyin altı üstüne geliyor; insanoğlu yeniden çalışıp çabalamaya başlıyordu[...] Güzel günler bir türlü sürmüyor; hayat değişiyor, her şey durmadan bitip yeniden başlıyordu. sevgisini bir türlü vermemişlerdi; ama şairler bütün gençler gibi onu da sarmıştı."
  },
  {
    "id": 308,
    "source": "Michael Ende - Momo",
    "text": "Çiçeklerle gizleyemedi; \"Ooo, bunlar ne güzel kuşlar!\" deyiverdi. Ve onları yakından görebilmek için içeri girmeye yeltendi. Fakat yelekli adam onu yakasından geri çekti[;] [\"]Dur bakalım[!] Nereye gidiyorsun, pis maskara?\" dedi. Sonra onu bırakıp, mendiline elini sildi, sanki pislik bulaşmış gibi."
  },
  {
    "id": 309,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "(Ç.N.) 22. (Fr.) Serbest düşünceli. [(]Ç.N.[)] XIII Avdotya Nikitişna (ya da Yevdoksiya) Kukşina’nın oturduğu, Moskova tarzında yapılmış, pek büyük olmayan aristokrat evi, [...] kentinin yangından sonra yeni yapılmış sokaklarından birinde bulunuyordu; bilirsiniz, bizim kentler her beş yılda bir yangın geçirir. Kapının yanında, çarpık şekilde çakılmış kartvizitin üzerinde bir çıngırak kolu görünüyordu ve gelenleri sofada ev sahibesinin ilerici heveslerinin açık bir işareti olan ve ne hizmetçiye ne de başındaki başlıkla nedimeye benzeyen biri karşıladı."
  },
  {
    "id": 310,
    "source": "George Orwell - 1984",
    "text": "kaçış yoktu. Kafatasınızın içindeki birkaç santimetreküp dışında, hiçbir şey sizin değildi. Güneş yer değiştirmişti; Gerçek Bakanlığı[']nın artık ışık almayan sayısız penceresi, bir kalenin mazgalları ka­ dar korkunç görünüyordu[.] Piramit biçimindeki bu dev yapı, Winston'ın yüreğine yılgı saldı. Kaya gibiydi, ele ge­ çirmek olanaksızdı."
  },
  {
    "id": 311,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"Bugün neydi, ha ayın yirmisi, öğle zamanı.\" Defteri kapadı. \"Nerede çalıştınız ikiniz?\" \"Kuzeyde, Weed'de,\" dedi George. Lennie[']ye döndü[:] \"Sen de mi?\" George atıldı: \"Evet, o da.\" Patron, şakacı bir tavırla, Lennie[']yi parmağıyla işaret etti. \"Pek konuşkan bir adam değil galiba?\" \"Değildir ama, çalışmaya gelince üstüne yoktur. Boğa gibi kuwetlidir.\" Lennie kendi kendine güldü: \"Boğa gibi kuvvetli,\" diye yineledi."
  },
  {
    "id": 312,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Yemliklerin öbür tarafından atlar tepişti, zincirler şıkırdadı. Dışardan adamların sesleri daha yüksek, daha açık duyulmaya başladı. Sonuncu bölmenin köşesinden ihtiyar Candy[']nin sesi geldi[:] \"Lennie[!]\" diye bağırdı. \"Lennie be! Orada mısın?"
  },
  {
    "id": 313,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Karı yüzünden,\" dedi. Lennie, masanın üstünde parmaklarını tıkırdattı. \"George!\" \"Ne var[?]\" \"George, içinde mal sahipleri gibi oturacağımız o küçük evi[...] sonra tavşanları almak için daha ne kadar zaman lazım?\" George: \"Bilmem,\" dedi. \"Önce metelik tutmamız lazım..."
  },
  {
    "id": 314,
    "source": "Michael Ende - Momo",
    "text": "Yeni gelen çocuklardan bir kısmı, \"Bize bir şeyler anlatsana Gigi!\" diye rica ettiler. Ötekiler de, \"Haydi, lütfen\" diye bağrıştılar. \"Neşeli bir öykü olsun[!]\" \"Hayır, heyecanlı!\" \"Hayır, masal, masal!\" \"Serüven!\" Gigi[']nin canı anlatmak istemiyordu ve bu ilk defa başına geliyordu. \"En iyisi bugün sizler bana bir şeyler anlatın. Evlerinizden, kendinizden, buraya niçin geldiğinizden ve neden böyle yaptığınızdan bahsedin\" dedi."
  },
  {
    "id": 315,
    "source": "George Orwell - 1984",
    "text": "Kimi akşamlar buluşma yerine geldiklerinde, köşe başında bir devriye belirdiği ya da tepelerinde bir heli­ kopter dolandığı için hiç belli etmeden geçip gittikleri oluyordu. Bazen de, büyük bir tehlike olmasa bile, bu­ luşmak için vakit bulmakta zorlanıyorlardı. Winston haf[-] tada altmış saat[,] Julia daha da fazla çalışıyordu; izin gün­ leri işin yoğunluğuna göre değişiyor ve çoğu kez çakış­ mıyordu[.] Kaldı ki, Julia'nın tümüyle serbest olduğu bir akşam yok gibiydi. Zamanının çok büyük bir bölümünü konferanslar ve gösterilere ayırıyordu; Seks Karşıtı Genç­ lik Birliği'nin broşürlerini dağıtıyor, Nefret Haftası için flamalar hazırlıyor, tutumluluk kampanyası için para topluyor, daha pek çok etkinliğe katılıyordu."
  },
  {
    "id": 316,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Sevdiğim göl içinde, büyük yapraklar arasında çırılçıplak çabalayışım kadar eski değil... Deniz kadar uçsuz bucaksız bir göl... içinde büyük büyük yapraklar[,] dört bir tarafında ağaçlar varsa; bu göl nasıl deniz kadar büyük olur, diyeceksiniz[...] Vallahi yalan söylemiyorum ve ona sizin kadar ben de şaşıyorum.. Fakat bu böyle; ne yapalım?"
  },
  {
    "id": 317,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Gişenin önüne varınca göğsümü şişirdim, iyice soluklanabilmek için öksürdüm. Elimi cebime soktum ve gişedeki kadına sordum: “Kaç yaşına kadar olan çocuklardan para alınıyor?” “Beş yaşını geçenlerin hepsinden.” “Öyleyse bir bilet, lütfen.” Bilet niyetine iki portakal yaprağı aldım ve içeri girdik. “Bak yavrum[;] önce kuşları göreceksin, birer harikadırlar[.] Şu rengârenk papağanlara, dudukuşlarına, aras’lara3 bak. Binbir renkli tüyle kaplı olanları, ebemkuşağı rengindeki araslardır,” diye anlatmaya başladım."
  },
  {
    "id": 318,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Kollarımın arasında nice gözler kapandı. Karşımda ölmek mecburiyetinden bu kadar sükûnla bahseden bu güzel çocuk yüzünden, gülmek için vesile arıyor gibi titreyen yaramaz dudaklarından daha büyük facia görmedim. Hayrullah Bey, dizlerinden örtüsünü atarak odanın içinde epeyce dolaştı; sonra önümde durarak[:] [-]O halde, son çareye başvuracağız. Seni şeriatlerine uyacak bir sıfatla evimde alıkoyacağım, müdafaa edeceğim. Hazır ol Feride."
  },
  {
    "id": 319,
    "source": "Albert Camus - Yabancı",
    "text": "Ama, yemeği hazırlarken, hiç yoktan öyle bir güldü ki, sarılıp öptüm. Tam o sırada, Raymond'un odasında bir kavga gürültüdür başladı. Önce keskin bir kadın sesi, sonra, Raymond[']un şu sözleri duyuldu[:] \"Kazığı attın bana, kazığı! Bana oyun etmek neymiş, göstereceğim sana!\" Boğuk boğuk seslerden sonra, kadın öyle müthiş bir çığlık kopardı ki, merdiven sahanlığı bir anda, hıncahınç doldu. Marie ile biz de çıktık."
  },
  {
    "id": 320,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Onlar da iyi... Ama burada kalacağın ciddi değil İlya, değil mi? Seni alıp bakarak[:] [—] Yok, yok, dedi; aman sakın bir şey söyleme, söz açma bundan[!] Niçin? Ne var Tanrı aşkına?"
  },
  {
    "id": 321,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Bu yüzden de haklı.” “O haklı olmasına haklı da,” dedi Arkadiy, “ya babam...” “O da haklı,” diye onun sözünü kesti Bazarov. “Yo hayır, ben haklı bulmuyorum.” “Anlaşılan yeni bir mirasçı işine gelmedi ha, ne dersin?” “Bana böyle düşünceler yakıştırmaya utanmıyor musun?” diye öfkeyle atıldı Arkadiy. “Bu açıdan haksız saymıyorum babamı; babamın o kızla evlenmek zorunda olduğunu düşünüyorum[.]” “Vay, vay[!]” dedi sakin bir şekilde Bazarov. “Ne kadar da yüce gönüllüyüz! Sen hâlâ nikâha önem veriyorsun demek; bunu senden beklemezdim.” İki arkadaş hiç konuşmadan birkaç adım daha attılar."
  },
  {
    "id": 322,
    "source": "Stefan Zweig - Satranç",
    "text": "İlk bakışta doğrudan bir gözdağı görülmüyordu. Demek ki dostumuz bu hamlenin gelişiminden söz ediyordu, biz iyi düşünemeyen acemiler de bunun ne olduğunu kestiremedik. Aramızda o meydan okuma karşısında kılı bile kıpırdamamış tek kişi Czentovic’ti[;] o kadar kayıtsız oturuyordu ki[,] sanki o gücendirici “Tamamdır” sözünü duymamıştı. Hiçbir şey olmadı. Hamle süresini tutmak için masaya bir saat konmuştu, elimizde olmadan soluğumuzu tuttuğumuz için, bir an saatin tik taklarını duyduk."
  },
  {
    "id": 323,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "mütemadiyen: Ara vermeden, sürekli olarak. müyesser: Kolaylıkla ortaya çıkan, kolaylıkla elde edilen. müzahrafat: [(]Müzahrefat[)] Parlak boyalar ve süsler. müzakere etmek: (Metinde) Öğrencilerin ders hazırlamaları için çalışmaları. müzakere etmek: Öğrencilerin ders hazırlamaları için çalışmaları."
  },
  {
    "id": 324,
    "source": "Albert Camus - Yabancı",
    "text": "\"Ben de onların durumundayım, bu işlemi de haksızca buluyorum,\" dedim. \"Ama, dedi, zaten sizi de bunun için hapse tıkıyorlar ya!\" \"Nasıl? Bunun için mi[?][\"] \"Elbette, özgürlük dediğin budur işte! Özgürlükten yoksun bırakıyorlar.\" Bense bunu hiç düşünmemiştim. Ona hak verdim, \"Doğru, yoksa ceza nerde kalırdı!\" dedim."
  },
  {
    "id": 325,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Hesabı ödemek için geri döndü. Bay Ladislau ve öbür adamlarla konuştuğunu işittim: “Evinde bu küçüğü hiç kimse anlamıyor. Böylesine duyarlı bir çocuk görmedim ben[.]” “Doğru söyle, Portuga; bu küçük şeytanı çok seviyorsun, değil mi[?]” “Sandığından da çok. Zeki ve harika bir sivrisinek bu.” Arabaya dönüp oturdu. “Nereye gitmek istiyorsun?” “Yalnızca buradan uzaklaşmak istiyorum."
  },
  {
    "id": 326,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Şu anda herkesten çok yaşamıyor muyum? Kalk gidelim buradan artık, duramam buralarda! [(]Etrafına gerçekten iğrenerek baktı.[)] Beni uyuşturdu burası. Nefret ediyorum. Bırak bütün gün bu duygularla yaşayayım."
  },
  {
    "id": 327,
    "source": "Michael Ende - Momo",
    "text": "Çünkü hayallerinin gerçekleşmesini biz sağladık.\" \"Bu doğru değil! Yalan bu!\" diye bağırdı Gigi. [\"]Hey gidi zaman, hey[!]\" diye tatsız, tatsız güldü ses; \"Bize doğrudan, yalandan söz edene bakın hele! Eskiden doğru ve yalan hakkında ne cevherler yumurtlamıştın sen! Hayır, zavallı Gigi, sakın doğruculuk taslamaya kalkma."
  },
  {
    "id": 328,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "“Hayır, ya sen?” “Ben de gitmem. Boş yere elli verst yolu ne diye gideyim. Matvey bize bütün şanıyla görünmek istiyor[;] canı cehenneme[!] Vilayettekiler nasıl olsa övgüler düzerler ona, biz olmadan da olur. Aman ne önemli, ne önemli, gizli danışmanmış!"
  },
  {
    "id": 329,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Sen sebep oldun vallahi, sen sebep oldun, diye hırçınlaşıyordu. Yanlarındaki ağacın dalında bir çalıkuşu ötüyordu. SON[-] SÖZLÜKÇE [-]A- âb ü hava: Su ve hava, iklim. âbide: ibadete düşkün kadın. âcizane: Söz söyleyen bir kimsenin kendi yaptıklarını abartmamak için kullandığı bir nezaket sözü."
  },
  {
    "id": 330,
    "source": "İvan Gonçarov - Oblomov",
    "text": "\"Gel, şu halıyı döv... Şunları bir köşeye yerleştiriver; gerek olmayan şeyleri mutfağa götür.\" Bu mutlu günler, bir ay kadar sürdü. Odalar tertemizdi; beyefendi memnundu; gönül kıracak sözler söylemiyordu; Zahar[']a yapacak iş kalmıyordu[.] bakmaya başlayınca, Zahar'ın yaptığı işlerin saçmalığı ortaya çıktı. Her attığı adım yanlıştı."
  },
  {
    "id": 331,
    "source": "Albert Camus - Yabancı",
    "text": "Elindeki haçı hemen hemen tepemin üstünde sallıyordu. Doğrusu, dediklerini pek iyi izleyemedim. Bir kere sıcaktan bunalıyordum[,] sonra da odasında koca koca sinekler vardı[,] yüzüme gözüme konuyorlardı[;] hem yargıç da beni biraz ürkütüyordu. Aynı zamanda bunun gülünç olduğunu da kabul ediyordum. Çünkü, alt tarafı, adam öldüren bendim."
  },
  {
    "id": 332,
    "source": "Albert Camus - Yabancı",
    "text": "Gitmeyi düşünmek bile önceleri onu hasta ediyormuş. Ama, yine de gitmiş, dönüşünde de, o gün uzun uzun kusmuş durmuş. O zaman babama karşı biraz tiksindi duymuştum[;] şimdiyse, anlıyorum, meğer çok olağan bir şeymiş bu[.] Nasıl olmuştu da anlayamamıştım: hiçbir şey ölüm cezası kadar önemli değildi ve bir bakıma da, bir insan için bundan daha ilginç bir şey olamazdı. Kazara bu cezaevinden çıkarsam eğer, gidip bütün idam edilenleri seyredeceğim."
  },
  {
    "id": 333,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "sair. Başka, öteki, diğer. saliha: [(]Metinde[)] Din buyruklarına uygun davranan. salisen: Üçüncü olarak. sallapati: Düşünmeden, saygısızca, kaba saba, patavatsızca."
  },
  {
    "id": 334,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Bizim mimar, aklı başında, işini bilir, namuslu bir adamdır. Kulübeler için makul bir masraf gösterdi. Seninki bunu fazla bulmuş[,] sormuş soruşturmuş[;] bir müteahhide fiyatı kırdırmış; bula bula otuz kapik fark bulmuş ve oturup bir rapor döşenmiş[.] Kapının çıngırağı çaldı. Sudbinskiy: — hoşça kalın, dedi; gevezeliğe dalıp saati unuttum."
  },
  {
    "id": 335,
    "source": "Stefan Zweig - Satranç",
    "text": "Boştaki piyonlar karşı karşıya kalır ve doğru savunma yaparsanız, oyun berabere biter. Daha fazlasını elde edemezsiniz.” Bir kez daha şaşırıp kaldık. Hesaplamasının hem hızlı hem de kesin olması bizi afallattı[;] hamleleri bir kitaptan okuyup söylüyordu sanki[.] Onun oyuna karışması sayesinde bir dünya şampiyonuyla berabere kalmamız beklenmedik bir şanstı ve sihirli bir değnek etkisi yaptı. Tahtayı daha iyi görmesini sağlamak için hep birden kenara çekildik."
  },
  {
    "id": 336,
    "source": "Stefan Zweig - Satranç",
    "text": "Sakin olun!’ diye yatıştırmaya çalıştı beni. Ama ben yalnızca sesine kulak kabarttım; bu konuşan, bir insan değil miydi? Yeryüzünde beni sorgulamayan[,] bana işkence yapmayan bir insan var mıydı gerçekten[?] Üstelik –akıl almaz bir mucize!– yumuşak, sıcak, neredeyse sevecen bir kadın sesi. Aç gözlerle ağzına bakıyordum, çünkü sanki cehennemde geçen bu bir yıl içinde, bir insanın başka biriyle iyilikle konuşabileceğine inanmaz olmuştum."
  },
  {
    "id": 337,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Bana göstersenize onu.” Feneçka utançtan ve sevinçten kıpkırmızı oldu. Pavel Petroviç’ten çekiniyordu, çünkü Pavel Petroviç onunla hemen hemen hiç konuşmazdı. “Dunyaşa,” diye seslendi, “Mitya’yı getiriniz [(]Feneçka, evdeki herkese “siz” diye hitap ederdi[)]. Ama durun, bekleyin; elbisesini giydirmemiz gerek.” Feneçka kapıya yöneldi. “Fark etmez,” dedi Pavel Petroviç."
  },
  {
    "id": 338,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Sonra öksürdü: \"Ne olacak... Curley elini makineye kaptırdı, efendim. Eli ezildi.[\"] Kadın bir an onu seyretti, sonra bir kahkaha kopardı[:] \"Martaval! Bana yutturmaya kalkmayın. Curley herhalde başından büyük bir işe kalkmış olacak."
  },
  {
    "id": 339,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Tavuklar, beş gün kadar direndilerse de, sonunda teslim olarak folluklarına döndüler. Bu arada ölen dokuz tavuk meyve bahçesine gömülmüş, tavukların kanlı ishalden öldükleri söylenmişti. Whymper[']ın olup bitenlerden haberi bile olmamıştı; yumurtalar vaktinde teslim ediliyor[,] haftada bir çiftliğe kadar gelen bir yük arabası yumurtaları alıp götürüyordu. Bu arada, Snowball hiç ortalıkta görünmemiş; komşu çiftliklerden birinde, ya Foxwood'da ya da Pinchfield'da saklandığı söylentileri yayılmıştı. Artık Napoléon'un öteki çiftçilerle arası biraz düzelmişti."
  },
  {
    "id": 340,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Petersburg'a da bu amaçla gelmişti. Niyetleri arasında salon hayatına girmek bile vardı; daha sonraları için de –olgunluk çağına girerken– mutlu bir aile hayatı tasarlıyordu. Fakat günler geçti[,] yıllar geçti[;] yüzündeki tüyler sertleşti; gözlerinin parlaklığı gitti; vücudu irileşti; saçları dökülmeye başladı[.] Yaş otuza varmış, hâlâ on yıl önce düşündüğü mesleğin eşiğinde duruyordu; hiçbir yönde tek adım atmamıştı. Hep hayata başlamaya hazırlanıyor, kafasında geleceğin planını çiziyor; fakat her yıl bu plandan bir şeyler atıyordu."
  },
  {
    "id": 341,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Sizi başka türlü davranamayacak durumda bıraktığını bana kendisi söyledi. Bu düellodan, bir dereceye kadar sadece karşılıklı görüşlerinizdeki sürekli anlaşmazlıkla açıklanabilecek bu düellodan kaçınmanızın mümkün olmadığına inanıyorum. [(]Nikolay Petroviç konuşurken lafları karıştırıyordu.) Ağabeyim eski kafalı bir adamdır, asabi ve inatçıdır[...] Tanrı’ya şükür bu kadarla kaldı. Bu durumun ortaya çıkmaması için gereken her türlü önlemi aldım...” “Herhangi bir şey çıkacak olursa her ihtimale karşı size adresimi bırakayım,” dedi Bazarov ilgisiz bir tavırla."
  },
  {
    "id": 342,
    "source": "Albert Camus - Yabancı",
    "text": "Celeste daima \"Rezillik,\" der, ama aslında kimse bilmez. Merdivenlerde rastladığım zaman, Salamano köpeğine sövüp saymaktaydı. Ona, [\"]Pis, mundar köpek[!][\"] diyor, hayvancağız da sızlanıp inildiyordu. \"İyi akşamlar,\" dedim. Aldırmadı, durmadan küfürler savurmaya devam etti."
  },
  {
    "id": 343,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Beni başından savıyorsun ha? Hem de onun, o kadının yüzünden... [(]Birden derin bir acıyla haykırdı.[)] Ah yarabbi!.. İlya!.. Yoksa demin gördüğüm çocuk..."
  },
  {
    "id": 344,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Sütleri yirmi dört saattir sağılmamış olduğundan memeleri patladı patlayacaktı. Domuzlar, biraz düşündükten sonra kovaları getirttiler, ön ayakları bu işe yatkın olduğu için ustalıkla sağdılar inekleri. Çok geçmeden kovalar köpüklü kaymaklı sütle dolmuştu[;] hayvanların birçoğu sütlere ağızları sulanarak bakıyorlardı[.] İçlerinden biri, \"Bu kadar süt ne olacak?\" diye soracak oldu. \"Jones bazen yemimize süt katardı,\" dedi tavuklardan biri."
  },
  {
    "id": 345,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Yazın, günler, hava kararana dek bitmek bilmiyordu. Akşam yemeğinin vakti bile bu yüzden bir türlü gelmiyordu. Kapıda durup çevremde görünen her şeye bakıyordum[;] o sırada ne yılanı düşünüyordum[,] ne de başka bir şeyi[.] Oturmuş annemi bekliyordum yalnızca. Jandira, sonunda bu işe şaştı ve ham meyve yiyip karnımı mı ağrıttığımı sordu."
  },
  {
    "id": 346,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Küçük İsa’nın doğum günü değil de ölüm gecesiydi sanki. Babam sonunda şapkasını alıp çıktı. Ne veda etti[,] ne Noel’imizi kutladı; ansızın terlikleriyle dışarı fırladı[.] Dindinha bunun üzerine mendilini çıkarıp gözlerini sildi ve Edmundo Dayı’yla birlikte gideceklerini söyledi. Edmundo Dayı benim elime beş yüz reis5 sıkıştırdı."
  },
  {
    "id": 347,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Değil, kardeşim, değil. Nedir, öyleyse? Ştoltz bir düşündü, bu hayata bir isim aradı: İlya İlyiç bu garip kelimeyi heceleyerek: [—] Ob-lo-mov-luk[...] Ob-lo-mov-luk, dedi ve Ştoltz'a acayip bir bakışla dik dik baktı, ürkek bir sesle sordu: herkes bu benim hayalimdeki hayat için uğraşmıyor mu? Sizin bütün koşmalarınız, tutkularınız, ticaretleriniz, siyasetleriniz hep sonunda rahat etmek için, kaybolmuş bir cenneti bulmak için değil mi?"
  },
  {
    "id": 348,
    "source": "George Orwell - 1984",
    "text": "Buna müzik de­ mek zordu, tamtam seslerini andıran yabanıl, kaba bir ritmi vardı. Yürüyüşe geçenlerin raprapları eşliğinde yüz­ lerce kişi tarafından haykırıldığında, insan yüreğine kor­ ku salıyordu. Proleterler bu şarkıya bayılmışlardı[;] gece yarılan sokaklarda, hala çok sevilen [\"]Beyhude bir hayal­ di[\"] şarkısıyla yarıştığı söylenebilirdi. Parsonslann çocuk­ ları, sabahtan akşama kadar bir tarak ve tuvalet kağıdıyla bu şarkıyı çalarak kafa şişiriyorlardı. Artık akşamlan Winston'ın başını kaşımaya vakti olmuyordu."
  },
  {
    "id": 349,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Sevginin ne olduğunu gerçekten keşfedeli beri, bütün sevdiklerimi sevgiye boğuyordum. “Biliyor musun, Minguinho; on iki çocuğum ve ardından bir on iki çocuğum daha olsun istiyorum, anladın mı? İlk on ikisi hep çocuk kalacak[;] kimse de onları dövmeyecek[.] Ötekiler büyük insanlar olacaklar. Onlara soracağım: Ne iş tutmak istiyorsun, yavrum?"
  },
  {
    "id": 350,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "İşte üç sene evvel bir sonbahar akşamıyla beraber ölen genç kızlık rüyalarım, kendi küçüklerim, sonra Munise, onun arkasından belki kalbimin öksüzlüğünü avuturlar diye ümit ettiğim talebelerim. Yavrularını tehlikede gören bir ana kuş hırçınlığıyla üstlerine titrediğim bu şeyler, sonbahar yaprakları gibi birer birer sararıyor, dökülüyor. Daha yirmi üç yaşıma girmedim; yüzümden[,] vücudumdan çocukluğun izleri silinmedi; halbuki gönlüm[,] baştan başa bütün sevdiklerimin ölüleriyle dolu. Hayrullah Bey, beni üç gün yalnız bırakmadı. Bu kadar felaket karşısında gösterdiğim sükûn ve tahammüle inanamıyor, geceleri ben yattıktan sonra odamın kapısına gelerek: -Feride, bir şeye ihtiyacın var mı?"
  },
  {
    "id": 351,
    "source": "Stefan Zweig - Satranç",
    "text": "Şimdiyse en basit tümceleri bile ancak kekeleyerek bir araya getirebiliyordum, çünkü ifade verirken, kâğıdın üzerine bilgileri sıralayan kalemden ayıramıyordum gözümü, sanki kendi sözcüklerimin peşinden koşmak istiyordum. Gücümün tükendiğini hissediyordum, kendimi kurtarmak için bildiğim her şeyi, belki de daha fazlasını söyleyeceğim, bu hiçliğin beni boğmasından kurtulmak için on iki insanı sırlarıyla birlikte ele vereceğim anın giderek yaklaştığını hissediyordum, oysa bunu yapmak bana bir anlık huzurdan fazlasını sağlamayacaktı. Bir akşam gerçekten de bu duruma geldim[:] Gardiyan tesadüfen bu boğulma ânı sırasında bana yemeğimi getirince, birden arkasından bağırdım[:] “Beni sorgulamaya götürün[!] Her şeyi söyleyeceğim! Her şeyi itiraf edeceğim!"
  },
  {
    "id": 352,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "“Ama çalışmam gerek, yavrum,” dedi. “Bu saatte hiçbir yerde, hiç kimse olmaz. Oturup gevezelik edeceğine ya da otomobilinde uyuklayacağına gel[;] Tarzan’ın leoparlarla[,] timsahlarla, gorillerle nasıl boğuştuğunu gör[.] Kim oynuyor, biliyor musun? Frank Merrill.” Hâlâ kararını verememişti."
  },
  {
    "id": 353,
    "source": "Michael Ende - Momo",
    "text": "Bir süre daha yaşadıkları serüveni ve kendi açılarından önemli olan ayrıntılarını anlatıp konuştular. Sonra evlerine gidip kurunmak üzere ayrıldılar. yakındı: \"Hop[-]Hopus[-]Topulastikus[']u batırmamız yazık oldu! Türünün son örneğiydi! Doğrusu onu biraz daha incelemek isterdim.\" oyunlar başka hiçbir yerde oynanamazdı..."
  },
  {
    "id": 354,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Birkaç gün sonra domuzlar, çiftlik evinin kilerinde bir kasa viski buldular. Anlaşılan, eve ilk girdiklerinde gözlerine çarpmamıştı. O gece çiftlik evinden şarkılar yükseldi; üstelik, araya zaman zaman İngiltere[']nin Hayvanları[']ndan ezgilerin de karışması herkesi çok şaşırttı. Dokuz buçuk sularında Napoléon, başında Bay Jones'un melon şapkasıyla arka kapıdan çıktı, avlunun çevresinde fırdolayı dönüp içeri girdi. Sabah olduğunda, çiftlik evinde derin bir sessizlik hüküm sürüyordu."
  },
  {
    "id": 355,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Koca Reis'e (yarışmaya Willingdon Güzeli adıyla katılmıştı, ama herkes ona Koca Reis diyordu) çiftlikte o kadar büyük bir saygı duyuluyordu ki, onun ne diyeceğini öğrenmek için herkes uykusundan olmaya razıydı. Reis, büyük samanlığın bir köşesinde, tavandaki kirişlerden birinden sarkan bir fenerin aydınlattığı bir yükseltinin üzerine serili saman döşeğine kurulmuştu bile. On iki yaşındaydı[,] son zamanlarda gövdesi biraz yağ bağlamıştı[;] uzun sivri köpekdişleri hiç kesilmemiş olmasına karşın, bilge ve babacan görünen heybetli bir domuzdu[.] Çok geçmeden öteki hayvanlar da birbiri ardı sıra sökün ettiler; yolu yordamınca yerlerini almaya başladılar. Önce Bluebell, Jessie ve Pincher adlı üç köpek göründü; ardından domuzlar geldiler, yükseltinin hemen önündeki samanların üzerine yerleştiler."
  },
  {
    "id": 356,
    "source": "George Orwell - 1984",
    "text": "Tam gününü söyleyemem ama, elli yıl olmuştur herhalde. Cenaze için kiralamıştım tabii, bilir­ sin işte.\" Winston, dişini sıkarak, \"Boş verin şimdi silindir şap­ kaları,\" dedi. [\"]Asıl sorun, şu kapitalistler ve onlardan na­ siplenen avukatlar ve rahipler; bu dünyanın efendileri kapitalistlermiş[.] Her şey onların çıkan içinmiş. Sizler -sı­ radan insanlar, emekçileronların kölesiyrnişsiniz."
  },
  {
    "id": 357,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "nafile: Yararsız, boşa giden. nalça: 1) Ayakkabılar çabuk eskimesin diye altına çakılan demir. 2[)] Katır[,] eşek, sığır gibi hayvanların tırnakları altına çakılan demir parçası. namünasip: Uygun olmayan. nan: Ekmek."
  },
  {
    "id": 358,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Sonra ölür, mölür de başımız derde girer he!” dedi. Kapı aralığında Hacı Kalfa’nın yüzünü görünce beni tekrar bir gülme aldı: “Geçmiş olsun!” demek istiyordum, fakat bir türlü kelimeler ağzımdan çıkmıyordu. Hacı Kalfa, dargın dargın yüzüme baktı[;] yarı mahcup bir eda ile başını sallayarak[:] “Gülürsün[!] Salt kıkır kıkır gülürsün. Ha çapkın seni!"
  },
  {
    "id": 359,
    "source": "George Orwell - 1984",
    "text": "Burada söz konusu olan, cinsel içgüdünün, Parti'nin denetleyemediği, kendine özgü bir dünya ya­ rattığı için elden geldiğince yok edilmesi gerektiği değil­ di yalnızca. Daha da önemlisi, cinselliğin bastınlrnası is­ teriyi tetikliyordu; bu da Parti'nin istediği bir şeydi, çün­ kü savaş coşkusuna ve öndere tapınmaya dönüştürülebi­ liyordu. Julia bunu şöyle yorumluyordu[:] [\"]Seviştiğin zaman içindeki enerjiyi boşaltırsın; sonra da kendini mutlu hisseder ve hiçbir şeyi iplemezsin[.] Ama senin bu halin onların hiç hoşuna gitmez. Her za­ man enerji yüklü olmanı isterler."
  },
  {
    "id": 360,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Ne büyük rahatlıktı! Kuşkusuz çok uzaklara gitmişti, belki de tatile. Daha rahat bir yürekle okulun yolunu tuttum[;] bu adamı ilerde öldürme zahmetine değip değmediğini bile düşünmeye başlamıştım[.] Ama kesin olan bir şey de vardı: Daha gösterişsiz bir otomobilin arkasına atladığımda aynı heyecanı hiç duymuyordum; kulaklarım da başlıyordu yanmaya. İnsanlarla sokağın günlük hayatı olağan akışını izliyordu."
  },
  {
    "id": 361,
    "source": "Stefan Zweig - Satranç",
    "text": "her şeyi burada özetlediğimden çok daha ayrıntılı anlatmıştı bana. Ona candan teşekkür ettim ve yanından ayrıldım. Ama daha güvertenin öbür ucuna varmamıştım ki, arkamdan geldi ve gözle görülür bir sinirle, hatta biraz da kekeleyerek ekledi[:] “Bir şey daha[!] Beylere önceden bildirin ki, sonra terbiyesizlik ediyor gibi görünmeyeyim; yalnızca tek bir oyun oynarım... eski bir hesabın altına konan bitiş çizgisinden başka bir şey olmayacak bu, kesin bir bitiriş; yeni bir başlangıç değil..."
  },
  {
    "id": 362,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "“Hayır; siz doldurun, ben de adımlamaya başlayayım. Benim adımlarım daha uzun,” diye ekledi Bazarov gülümseyerek. “Bir, iki, üç[...]” “Yevgeniy Vasilyeviç,” diye kekeledi Pyotr güçlükle [(]hummaya tutulmuş gibi titriyordu), “izin verirseniz, ben buradan uzaklaşacağım.” “Dört[...] beş... Git, birader, git; hatta ağacın arkasında durabilirsin, kulaklarını da tıkayabilirsin, sadece gözlerini kapama; düşen olursa hemen kaldırmaya koş."
  },
  {
    "id": 363,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Artık hırka giymiyordu. Tarantiyev onu diğer eşyalarla birlikte, bahsettiği kadına götürmüştü. da yazıyordu[;] kravatının altında gömleğinin yakası kar gibi beyazdı; sokağa çıkarken güzel bir elbise[,] zarif bir şapka giyiyordu[...] Neşesi yerinde idi, kendi kendine şarkı söylüyordu... Neden acaba?"
  },
  {
    "id": 364,
    "source": "Albert Camus - Yabancı",
    "text": "Masson'la birlikte çıktılar. Ben de, kalıp kadınlara olup bitenleri anlattım. Madam Masson ağlıyordu[;] Marie de sapsarı kesilmişti[.] Bunları anlatmak canımı sıkıyordu. Sonunda sustum, denize baka baka bir sigara tellendirdim."
  },
  {
    "id": 365,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Mektuplarımda sık sık sana ondan bahsetmiştim. Öyle nazik ki, konuğumuz olmayı kabul etti.” Nikolay Petroviç hemen döndü ve sırtında püsküllü uzun pardösüsüyle arabadan henüz inmiş olan uzun boylu adama yaklaşarak onun hemen uzatmadığı kırmızı çıplak elini kuvvetlice sıktı. “Çok memnun oldum[,]” diye başladı söze, “ve bizi ziyaret etmekle gösterdiğiniz iyi niyet için teşekkür ederim; umarım ki[...] Adınızı ve baba adınızı öğrenebilir miyim?” “Yevgeniy Vasilyev,” diye yanıtladı Bazarov, tembel ama erkekçe bir sesle ve pardösüsünün yakasını açıp bütün yüzünü Nikolay Petroviç’e gösterdi. Geniş bir alna, yukarıya doğru yassı, aşağıya doğru sivrilen bir burna, yeşilimsi iri gözlere ve kum renginde sarkık favorilere sahip bu uzun ve zayıf yüz, sakin bir gülümsemeyle hareketlendi ve kendine güvenini ve zekâsını ortaya koydu."
  },
  {
    "id": 366,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Senin annen yok mu? Abam var hocanım. [(]Munise, ablaya aba diyordu.[)] [-]Annene ne oldu? Küçük kız, gözlerini önüne indirdi, sustu. Bana öyle geldi ki, bu çocuğun kalbinde, bilmeden bir gizli yaraya dokundum."
  },
  {
    "id": 367,
    "source": "Stefan Zweig - Satranç",
    "text": "Neyse ki gardiyan bu tuhaf davranışımı ayrımsamadı; iki saat dimdik ayakta duran bir insanın biraz duvara dayanmak istemesi ona doğal göründü belki de. En sonunda paltoya iyice yaklaşmıştım ve fark ettirmeden ona dokunabilmek için ellerimi bilerek arkama saklamıştım. Kumaşa dokundum ve gerçekten de kumaşın arkasında dikdörtgen bir şey[,] bükülebilen ve hafifçe hışırdayan bir şey hissettim[;] bir kitap[!] Bir kitap! Ve ansızın çılgınca bir düşünceye kapıldım: Kitabı çal!"
  },
  {
    "id": 368,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "(Ç.N.) 69. Çavdardan yapılan bir Rus birası. [(]Y.N.[)] XXVI Merhum Odintsov, yenilikleri sevmezdi ama “bazı asil zevk oyunlarını” da hoş görürdü. Bunun sonucu olarak bahçesinde limonlukla göletin arasında Rus tuğlasından Grek revakı şeklinde bir yapı diktirtmişti. Bu revakın ya da galerinin arkadaki düz duvarı boyunca Yalnızlığı, Suskunluğu, Düşünmeyi, İçe Kapanıklığı, Utanmayı ve Duygululuğu betimlemesi gereken heykellerin konacağı altı tane niş yapılmıştı."
  },
  {
    "id": 369,
    "source": "Stefan Zweig - Satranç",
    "text": "“Ama bu olanaksız!” diye haykırdı ateşli McConnor yumruğunu masaya vurarak. “Bu adam yirmi beş yıldır satranç oynamamış olamaz, kesinlikle olamaz! Her hamleyi, her karşı hücumu beş[-]altı hamle önceden hesapladı[.] Böyle bir şeyi kimse rastgele yapamaz. Bu kesinlikle olamaz, öyle değil mi?” Son soruda McConnor elinde olmadan Czentovic’e dönmüştü."
  },
  {
    "id": 370,
    "source": "Michael Ende - Momo",
    "text": "Gel, yatıp uyuyalım.\" Kaplumbağayı kucağına aldı ve duvardaki delikten geçip yattığı yere indi. Alacakaranlıkta her şeyin bıraktığı gün olduğu gibi durduğunu gördü. [(]Beppo o zaman odayı derleyip toplamıştı[.][)] Ama her yer toz içindeydi ve örümcek ağları ortalığı sarmıştı. Tahta masanın üzerindeki maşrapaya bir mektup dayalı çarpmaya başladı. Ömründe hiç mektup almamıştı."
  },
  {
    "id": 371,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Aslında, böyle bir girişim uzun zamandır beklendiği için bütün önlemler alınmış, gerekli bütün hazırlıklar yapılmıştı. Çiftlik evinde bulduğu eski bir kitabı okuyarak Julius Caesar'ın seferleriyle ilgili kapsamlı bilgiler edinmiş olan Snowball, savunma harekâtının komutanlığına getirilmişti. Hemen buyruklarını verdi[;] bütün hayvanlar birkaç dakikada yerlerini aldılar[.] İnsanlar çiftlik binalarına yaklaştıkları sırada, Snowball ilk saldırıyı başlattı. Tam otuz beş güvercin, adamların başlarının üzerinde uçuşarak tepelerine pisledi."
  },
  {
    "id": 372,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Birkaç dakika içeri girmeleri için ısrar ettim. Bunlardan birine şaka olsun diye: “Bari gülbeşeker bulabildiniz mi? Sokaktan geçen zabitler bulamadıklarından şikâyet ediyorlardı!” Arkadaşım gülerek cevap verdi: [-]Pekâlâ biliyorsunuz ki, biz de ondan mahrum kaldık![...] Niçin? Çünkü gelmediniz!"
  },
  {
    "id": 373,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Oradan salıverdikleri kayalar aşağıda paramparça oluyordu. Taşları taşımak daha kolaydı. Atların çektiği yük arabaları çok işe yaradı[;] koyunlar taşları teker teker sürüklediler[;] Muriel ile Benjamin bile kendilerini eski bir arabaya koşarak katkıda bulundular. Yaz sonuna kadar yeterince taş yığılınca, domuzların gözetimi altında inşaat başladı. Ne var ki çok vakit alan zorlu bir uğraş vermişlerdi."
  },
  {
    "id": 374,
    "source": "Stefan Zweig - Satranç",
    "text": "Ama yeni dostumuz bir sonraki hamleyi belirlemişti bile, Czentovic’i geri çağırabilirdik; kaşığı bardağa vururken parmaklarım titriyordu. Derken ilk zaferimizi kazandık. O âna dek hep ayakta oynayan Czentovic[,] duraksadı[,] duraksadı ve sonunda ağır ağır oturdu; böylece o âna dek bize tepeden bakan Czentovic[,] bizimle aynı düzeye inmiş oldu. En azından somut olarak bizimle aynı düzlemde bulunmaya zorunlu kılmıştık onu. Uzun uzun düşündü, gözlerini hiç kaldırmadan tahtaya dikti, öyle ki siyah kirpiklerinin altından gözbebeklerini görmek neredeyse olanaksızdı ve böyle derin düşünürken yavaş yavaş ağzı açıldı, yuvarlak yüzüne biraz bön bir ifade verdi bu."
  },
  {
    "id": 375,
    "source": "George Orwell - 1984",
    "text": "Oturma odasındaki tele-ekran, nedense, alışılmadık bir konumdaydı. Odanın tümüne egemen olabileceği dipteki duvar yerine, pencerenin karşısına düşen uzun duvara yerleştirilmişti. Tele[-]ekranın bir yanında[,] Win­ sÓın oturmakta olduğu küçük bir girinti vardı; daire­ ler yapılırken, belli ki, buraya kitap raflarının konulması 1 7 tasarlanmıştı[.] Winston, girintide iyice arkasına yaslana­ rak oturduğunda, tele-ekranın görüş alanı dışında kalabi­ liyordu. Hiç kuşkusuz, sesi duyulabiliyordu; ama böyle kaldığı sürece görülmesi olanaksızdı."
  },
  {
    "id": 376,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Peki, fakat şu kutuyu içeri bırakayım. Bir dakikacık. Kâmran, ilk defa ona dokunmaya cesaret etti; bileğinden tutarak[:] [-]Hayır, Feride, dedi[.] Sana emniyetim yok. Bekle, bir dakikacık, şimdi geliyorum, diyecek gelmeyeceksin, yahut gelsen de kim bilir ne vakit ve nasıl geleceksin?"
  },
  {
    "id": 377,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Fakat ben, nedense hiçbir şey sezememiştim. Bulunduğumuz ev kalabalıktı. Birçok günler büyük bir bahçede çocuklarla boğuştuğumu[;] Hüseyin’le beraber sokaklarda[,] deniz kenarlarında[,] cami avlusu gibi kubbeli yerlerde dolaştığımı biliyorum. Annemi yabancı bir toprakta bıraktıktan sonra, İstanbul’a dönmek babamın içine sinmemiş... Galiba biraz da büyükannem ve teyzelerimle karşılaşmaktan çekinmiş..."
  },
  {
    "id": 378,
    "source": "Albert Camus - Yabancı",
    "text": "Eve kadar onunla birlikte gittim. O, tahta merdivenleri çıkarken, ben ilk basamağın önünde durdum. Güneş hâlâ kafamın içinde uğulduyordu[;] merdivenleri tırmanmak[,] kadınların yanına gitmek için çaba sarf etmeyi göze alamadım[.] Ama, hava da öylesine sıcaktı ki, gökkubbeden düşen kör edici ışık yağmuru altında put gibi durmak da güçtü. Buracıkta kalmak ya da gitmek, bence birdi."
  },
  {
    "id": 379,
    "source": "George Orwell - 1984",
    "text": "Tozlu, çalı çırpı kaplı yere oturupsa­ atlerce konuştular; arada sırada ikisinden biri kalkıyor ve gelen var mı diye dar yarıklardan aşağıya bakıyordu. Julia yirmi altı yaşındaydı. Otuz kızla birlikte bir yurtta kalıyor [(][\"]Bıktım şu kan kokusundan[!] Nefret edi­ yorum kan milletinden!\" diyordu ikide bir) ve Winston'ın tahmin ettiği gibi, Kurmaca Dairesi'ndeki roman yazma makinelerinden birinde çalışıyordu. İşinden memnundu; güçlü ve becerikli bir elektrik motorunu çalıştırıyor ve bakımını sağlıyordu."
  },
  {
    "id": 380,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Timsaha benzemiyor mu? O, şimdilik dudağında acı bir tebessümle yalnız bana bakıyordu. Köpeği bırakarak eteklerimi silkeledim; mendilimle ellerimi de sildikten sonra birini kuzenime uzattım: [-]Bonjur, Kâmran, teyzem nasıl[?] Ehemmiyetli bir şey değil inşallah... O, biraz hayretle: -Annem mi?"
  },
  {
    "id": 381,
    "source": "Stefan Zweig - Satranç",
    "text": "Czentovic o alışılmış sakin adımlarıyla masamıza geldi ve bir bakışta karşıt hamleyi ölçüp tarttı. Sonra, tıpkı tanımadığımız yardımcımızın önceden söylediği gibi, şah kanadındaki piyonu h2’den h4’e getirdi. Ve yardımcımız heyecanla fısıldadı[:] “Kale ileri, kale ileri, c8’den c4’e, o zaman önce piyonun önünü kapatması gerekir[.] Ama bu onun işine yaramayacak! Boştaki piyona aldırmadan atınızı c3’ten d5’e getirerek saldırırsınız ve eşitlik yeniden sağlanır."
  },
  {
    "id": 382,
    "source": "Albert Camus - Yabancı",
    "text": "Ama onu bastırmak için, yirmi yıl sonra yine o gün gelip çattığı zaman, düşüncelerimin ne olacağını hayal etmek yetiyordu. Değil mi ki insan ölecekti, öyleyse bunun ne zaman ve nasıl olacağı pek önemli değildi. O halde [(]işin asıl güç yanı bu 'o halde' sözcüğünün ifade ettiği anlamı gözden kaçırmamaktı[)], evet o halde af dilekçemin kabul edilmemesine boyun eğmeliydim. Bu anda, ama yalnız bu anda, kendimde ikinci bir olanağı, af olanağını düşünmek hakkını buluyor, kendime sanki böyle bir fırsat veriyordum. İşin can sıkıcı yanı, gözlerime çılgın bir sevinç halinde batan kanımın ve vücudumun atılımına gem vurmam gerekmeseydi."
  },
  {
    "id": 383,
    "source": "Albert Camus - Yabancı",
    "text": "Başımı şakacıktan geriye salıverdim, karnının üzerine koydum. Sesini çıkarmadı, ben de öylece kalıverdim. Bütün gökyüzü gözlerimin içindeydi[;] mavi ve altın sarısı[.] Ensemde, Marie'nin hafif hafif atan karnını hissediyordum. Şamandıranın üzerinde, yarı uyuklar halde, uzun zaman kaldık."
  },
  {
    "id": 384,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "(Lat.) Artık ölüyorum. (Ç.N.) 74. [(]Alm[.][)] Beyefendi galiba Almanca biliyor. (Ç.N.) 75. Yunan mitolojisinde tıbbın ve sağlığın tanrısı."
  },
  {
    "id": 385,
    "source": "Stefan Zweig - Satranç",
    "text": "Ansızın dalgaların sesi ve salonu cazla dolduran radyo duyuldu, gezinti güvertesinde atılan her adım ve aralık pencerelerden giren rüzgârın hafif, belli belirsiz uğultusu geldi kulaklarımıza. Hepimiz soluğumuzu tuttuk, bu inanılmaz şey çok ani olmuştu ve bu tanınmamış adamın yarı yarıya kaybedilmiş bir oyunda dünya şampiyonunu dize getirmesi bizi şaşkına çevirmişti. McConnor arkasına yaslandı[,] tuttuğu soluğu mutlu bir, “Ah[!]” sesiyle döküldü dudaklarından. Öte yandan, ben Czentovic’i izliyordum. Son hamleler sırasında yüzü solgunlaştı gibi gelmişti bana."
  },
  {
    "id": 386,
    "source": "Albert Camus - Yabancı",
    "text": "Onun da bir göz odası, bir de penceresiz mutfağı var. Karyolasının üst tarafında alçıdan beyazlı-pembeli bir melek heykelciği, şampiyon fotoğrafları, bir iki de çıplak kadın resmi vardı. Oda kir pas içindeydi[;] yatak da darmadağınıktı[.] Önce gazocağını yaktı, sonra cebinden kirli bir sargı bezi çıkardı, sağ elini sardı. \"Neniz var?\" diye sordum."
  },
  {
    "id": 387,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Beni iki çocuğumla kim alır ki? Agafya Matveyevna bu cevaptan sonra zihninde hesaplar yaparak düşünmeye koyuldu. Dalgın dalgın bir şeyler söylüyordu[:] [—] Yirmi kadar olacak; sakın hepsini içine atmasın bu kız[!] dönüp kitabını okumaya devam etti. İçinden, \"Ne taze, ne sağlam kadın, ne mükemmel bir ev kadını!"
  },
  {
    "id": 388,
    "source": "George Orwell - 1984",
    "text": "\"Çok gürültü yapıyorlar,\" dedi kadın. \"İdamları sey­ retmeye gidemedikleri için çok üzüldüler de ondan. Hiç vaktim yoktu, götüremedim; Tom da geç dönecek iş­ ten.[\"] Oğlan, korkunç bir sesle, [\"]Neden gidemiyormuşuz idamları görmeye[?]\" diye haykırdı. Küçük kız da, hoplaya zıplaya, \"Ben idamları görmek istiyorum! Ben idamları görmek istiyorum!\" diye çığırıyordu."
  },
  {
    "id": 389,
    "source": "Albert Camus - Yabancı",
    "text": "Ama polis, \"Tut çeneni be!\" diye bağırdı. O zaman, Raymond kadına döndü, \"Heledur sen, yine görüşürüz küçük hanım!\" dedi. Polis, Raymond[']a, [\"]Sana tut çeneni, dedik be herif[!] O gidecek, sen karakoldan çağırılıncaya kadar odanda kalacaksın,\" dedi ve \"böyle titreyecek kadar sarhoş olmaktan utanmıyor musun?\" diye ekledi. O zaman Raymond, \"Sarhoş değilim ben polis efendi."
  },
  {
    "id": 390,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Ama kardeşim şimdi evde yok. Daha gelmedi. [(]Yola doğru bakarak[)] Gelse şuradan gelir[.] Daha görünürlerde yok. O halde ben gidiyorum."
  },
  {
    "id": 391,
    "source": "İvan Gonçarov - Oblomov",
    "text": "diye başladı ama cümlesini bitiremedi. Olga'nın sözü onu şaşırtmıştı; çünkü doğru olduğunu birden anlayıvermişti. Olga[:] [—] Evet, dedi; dün size benim seviyorum demem gerekiyordu; bugün ağlamamı istediniz; yarın da belki ölümümü görmek istersiniz. Olga, bana nasıl bu kadar ağır sözler söyleyebiliyorsunuz? Sizin ağlamanızı değil, gülmenizi görmek için hayatımın yarısını verebileceğimden emin değil misiniz?"
  },
  {
    "id": 392,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Şimdi kızım, Zeyni Baba’dan isteyeceğini iste, dedi. Dizlerim kesiliyor, artık ayakta durmaya tâkatim kalmıyordu. Ateşler içinde yanan alnımı Zeyni Baba’nın serin örtüsüne dayadım[;] dudaklarımdan ziyade yaralı kalbimle söyler gibi yavaş yavaş[:] “Zeyni Babacığım[,] dedim. Ben, küçük, geldiğini bilmiyorum. Kusuruma bakma."
  },
  {
    "id": 393,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Üstü kapalı bir yük arabası Boxer'ı götürmeye geldiğinde, öğle saatleriydi. Bir domuzun gözetiminde, şalgam tarlasındaki ayrıkotlarını ayıklamakta olan hayvanlar, Benjamin'in çiftlik binalarının oradan avazı çıktığı kadar anırarak dörtnala geldiğini görünce çok şaşırdılar. Benjamin[']i hayatlarında ilk kez telaşlı görüyorlardı[;] aslına bakılırsa[,] o güne değin dörtnala koştuğunu da gören olmamıştı. \"Çabuk! Çabuk!\" diye bağırdı Benjamin."
  },
  {
    "id": 394,
    "source": "Albert Camus - Yabancı",
    "text": "Merdivenlerden inerken ıslık çalıyordu. Pek sevinçli hali vardı. Bana, [\"]Merhaba, ahbap[!]\" Marie[']ye de, \"Günaydın Matmazel,\" dedi. Bir gün önce tanık olarak komiserliğe gitmiş, kadının Raymond'a kazık attığını söylemiştim. Raymond uyarı cezasıyla paçayı kurtarmıştı."
  },
  {
    "id": 395,
    "source": "George Orwell - 1984",
    "text": "Yapılacak çok iş vardı, ama işlemlerin gerçek adlarıyla anılamaması işin yükünü daha da artırıyordu. Kayıt Dairesi'nde herkes günde on sekiz saat çalışıyor, ancak üçer saatlik iki molada uyku uyuyabiliyordu. Aşağıdan şilteler getirilip koridorlarase­ rilmişti[;] yemek saatlerinde kantin görevlileri servis ara[-] balarıyla sandviç ve Zafer Kahvesi dağıtıyorlardı[.] Win­ ston her uyku molasından önce masasındakitüm işleri bitirmeye özen gösteriyor, ama çapaklı gözler ve ağrılar içinde sürünerek geri dönclüğünde, masayı, çığ gibi yük­ selen ve söyleyaz'ın üstünden yerlere taşan kağıt rulola­ rıyla kaplı buluyor, ilk işi, çalışabileceği bir yer açmak için onları toplayıp düzene sokmak oluyordu. En kötüsü de, yaptığı işin tümüyle mekanik çalışmadan oluşmama­ sıydı."
  },
  {
    "id": 396,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Cevap verdi: \"Buradayım George, buradayım.\" Bir saniye sonra George, kapı boşluğunda belirmiş, etrafına hoşnutsuz bir tavırla bakınıyordu. \"Crooks'un odasında ne halt ediyorsun? Ne işin var orada senin[?]\" Crooks onayladı[:] \"Dedim ama dinlemediler, geldiler.\" \"Neden kapı dışarı etmedin onları[?]\" Bu sefer Candy telaşlanmıştı: \"Hey George! Uzun uzun hesap ettim. Hepsini düşündüm, hatta tavşanlarla nasıl para kazanacağımızı bile.\" George azarladı: \"Bu meseleyi açma dememiş miydim sana?\" Candy fena halde bozuldu."
  },
  {
    "id": 397,
    "source": "George Orwell - 1984",
    "text": "Geç­ miş silinmekle kalmıyor, silindiği de unutuluyor, sonun­ da yalan gerçek olup çıkıyordu. Winston, yalanın somut, şaşmaz kanıtını, olup bittikten sonra da olsa, hayatında yalnızca bir kez ele geçirebilmiş, onu da ancak otuzsa­ niye kadar tutabilmişti elinde. yılı olmalıydı[;] Katha­ rine['] den ayrıldığı sıralar olsa gerekti. Ama olayın gerçek tarihi o günlerin de yedi sekiz yıl öncesine uzaniyordu. Olayın başlangıcı, altmışların ortalarına, Devrim'in ilk önderlerinin ortadan kaldırıldığı büyük temizlikler dönemine gidiyordu."
  },
  {
    "id": 398,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Soğuk rüzgâr yüzünü kamçılar, kırağı kulaklarını dişler, soğuk hava ağzına, boğazına dolar, yüreğini bir sevinçtir kaplardı. Alabildiğine koşar, bağırır, gülerdi. İşte çocuklar[;] bir kartopu atar[,] vuramaz; alışmamış ki[...] Bir kartopu daha yapayım derken suratına müthiş bir tane yer, yuvarlanır. Hiç böyle bir acı tattığı olmamıştır."
  },
  {
    "id": 399,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "George, oturduğu yerde kendi hayallerinin büyüsüne kapılmış bir haldeydi. Candy, söze başladığı zaman, ikisi de suçüstü yakalanmış gibi, yerlerinden hopladılar. Candy dedi ki: \"Böyle bir yer biliyor musun[?]\" George, hemen toparlandı: \"Bilirsem ne olacak[?]\" dedi. \"Sana ne?\" \"Yerini söyle demedim, canım. Nerede olursa olsun.\" \"Tabii,\" dedi George."
  },
  {
    "id": 400,
    "source": "Stefan Zweig - Satranç",
    "text": "Hiçbir şey üzerinde kafamı toplayamıyordum. Hep aynı düşünce çakıyordu beynimde: Ne biliyorlar? Dün ne söyledim[,] gelecek sefer ne söylemeliyim[?] Sözcüklerle anlatılamayacak bu durum dört ay sürdü. Eh, dört ay, yazması kolay: altı üstü birkaç harf!"
  },
  {
    "id": 401,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Candarma. Candarma ne yapar? Vehbi, düşüne düşüne başını kaşıdı; sonra[:] [-]Canavarları çeser, dedi. Vehbi’nin, hoşuma giden bir hali de, kibir ve inadıdır. O, kocaman bir erkek kadar kafa tutmasını bilir."
  },
  {
    "id": 402,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Perşembe günü bayram. Üç gün için gidip gelmeye değmez. Bazen de[:] [—] Bugün ders mers yok, derdi; kabristana gideceğiz; börek var. Böyle şeyler olmadı mı annesi pazartesi sabahı ona dikkatli dikkatli bakar ve başını sallayarak şöyle derdi: — Bu sabah gözlerinde bir ağırlık var senin. Bir şeyin mi var?"
  },
  {
    "id": 403,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "“Merhaba, Yevgeniy Vasilyeviç, beyzadem,” diye söze başladı ihtiyarcık ve sevinçle güldü, gülünce bütün yüzü bir anda kırışıklarla kaplandı. “Niye geldin? Benim için mi gönderdiler yoksa[?]” “Hiç olur mu beyzadem!” diye kekelemeye başladı Timofeyiç [(]gelirken beyinden aldığı sert emri hatırlamıştı[)]. “Beyin işleri için şehre gidiyorduk da burada olduğunuzu işittik, yolumuzun üstü, bir uğrayalım dedik, yani, sizi görmek için... yoksa sizi rahatsız etmek ne haddimize!” “Hadi, hadi yalan söyleme,” diye onun sözünü kesti Bazarov."
  },
  {
    "id": 404,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "7. Bütün hayvanlar eşittir. Emirler büyük bir özenle yazılmıştı; [\"]dost\"un \"tost\" diye, s[']lerden birinin de ters yazılmış olması dışında, hiçbir yazım yanlışı yoktu. Snowball, herkes anlasın diye, emirleri baştan sona yüksek sesle okudu. Hayvanların hepsi de kafalarını sallayarak emirler karşısında boyunlarının kıldanince olduğunu belirttiler."
  },
  {
    "id": 405,
    "source": "Stefan Zweig - Satranç",
    "text": "Ama bütün oyunu yeniden oynamaya çalışınca, ötekilerden ayırmak için yarısının rengini tozla koyulaştırdığım gülünç ekmek-taşlarımla hiçbir şey beceremedim önce. İlk günlerde sürekli şaşırdım; bu bir tek oyuna beş kere, on kere, yirmi kere tekrar baştan başlamam gerekti. Ama yeryüzünde kimin[,] hiçliğin kölesi olan benim kadar yararsız ve kullanılmayan zamanı vardı ki[,] kim bu kadar hırs ve sabırla doluydu[?] Altı gün sonra oyunu hiç şaşırmadan sonuna kadar oynadım, ondan sekiz gün sonra satranç kitabındaki konumları gözümün önüne getirmek için yatak çarşafındaki ekmek parçalarına bile gerek duymadım ve bir sekiz gün daha sonra kareli yatak çarşafı da gereksiz oldu; başlangıçta soyut gelen a1, a2, c7, c8 gibi işaretler, beynimin içinde görsel, plastik konumlara dönüştü kendiliğinden. Değişiklik başarıyla uygulanmıştı: formülleri kullanarak o anki konumu bir bakışta anlıyordum, tıpkı bütün sesleri ve uyumlarını duymak için notalara şöyle bir bakmanın deneyimli bir müzisyene yetmesi gibi."
  },
  {
    "id": 406,
    "source": "Albert Camus - Yabancı",
    "text": "Onların dostluğu mostluğu da beş para etmezmiş. Bunu yüzlerine karşı da söylemiş. O zaman onlar da, [\"]Damgalarız karıyı be[!]\" demişler. Ama Raymond'un istediği bu değilmiş. Düşünüp taşınmak gerekmiş."
  },
  {
    "id": 407,
    "source": "İvan Gonçarov - Oblomov",
    "text": "diye sordu. Bu da nereden çıktı? Evet, bir gün soğuk alırım, ateşim yükselir[;] buralara gelir beni bulamazsın; eve gelirsin, hasta derler; ertesi gün gene öyle[.] Odamın panjurları kapanır; doktor başını sallar; Katya ayaklarının ucuna basarak gözyaşları içinde dışarı çıkar, senin yanına gelir: Olga ağır hasta, Olga ölüyor, der... Tanrı göstermesin, diye bağırdı..."
  },
  {
    "id": 408,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Sever de görünüyordu beni. Ama zamanla ya bıktı, ya da şarkıda sözü edilen kişi gibi uzun pantolonlu, kısa ceketli kıl bir herif olan sevgilisi bütün zamanını doldurdu. Pazarları garın orada, footing1 [(]sevgilisi böyle derdi[)] yapmaya gittiğimizde bana çok sevdiğim şekerlerden alırdı[.] Sus payıydı bu şekerler. Edmundo Dayıma bile bir şey soramazdım, o zaman her şey anlaşılırdı çünkü… İki küçük kardeşim, daha bebekken ölmüştü ve onların yalnızca sözünün edildiğini işitmiştik."
  },
  {
    "id": 409,
    "source": "Stefan Zweig - Satranç",
    "text": "Sonra yabancının bize önceden bildirdiği hamleyi aynen yaptı ve gitmek üzere döndü. Ama uzaklaşmadan önce, yeni ve beklenmedik bir şey yaptı. Başını kaldırdı ve bakışlarını üzerimizde gezdirdi[;] kendisine karşı birdenbire böyle canlı bir direnç gösterenin kim olduğunu anlamak istiyordu besbelli[.] O andan başlayarak heyecandan yerimizde duramaz olduk. O âna kadar ciddi bir umut beslemeden oynamıştık, ama Czentovic’in soğuk kibrini kırma düşüncesi yürek atışlarımızı hızlandırdı."
  },
  {
    "id": 410,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Yolun dönemecinde Pavel Petroviç’le karşılaştı. “Neyin var?” diye sordu Pavel Petroviç kardeşine. “Hayalet gibi bembeyaz olmuşsun; iyi değilsin sen[,] neden gidip yatmıyorsun[?]” Nikolay Petroviç[,] kısa kısa sözcüklerle ona içinde bulunduğu ruhsal durumu açıkladı ve uzaklaştı. Pavel Petroviç bahçenin sonuna kadar gitti, o da düşüncelere daldı ve gözlerini gökyüzüne kaldırdı. Fakat onun güzel gözlerinde yıldızların ışığından başka bir şey yansımadı."
  },
  {
    "id": 411,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "“Bir, iki, üç...” “Yevgeniy Vasilyeviç,” diye kekeledi Pyotr güçlükle (hummaya tutulmuş gibi titriyordu), “izin verirseniz, ben buradan uzaklaşacağım.” “Dört... beş... Git, birader, git[;] hatta ağacın arkasında durabilirsin, kulaklarını da tıkayabilirsin, sadece gözlerini kapama[;] düşen olursa hemen kaldırmaya koş[.] Altı... yedi..."
  },
  {
    "id": 412,
    "source": "Albert Camus - Yabancı",
    "text": "İyi anlayabildimse, savcının ana düşüncesi şuydu: Sözde ben bu cinayeti önceden tasarlamışım. Hiç değilse kanıtlamaya çalıştığı buydu. Kendisi de söylüyordu zaten[:] [\"]Bunu kanıtlayacağım; baylar, hem iki katlı kanıtlayacağım[.] Önce olayların göz kamaştırıcı ışığı, sonra da bu caninin ruh durumunun bana vereceği donuk ışık altında...\" Olayları, anamın ölümünden başlayarak, kısaca anlattı. Duygusuzluğumu, anamın yaşını bile bilmeyişimi, ertesi gün bir kadınla denize gidişimi, sinemayı, Fernandel'i ve sonra Marie ile odama dönüşümü bir bir anlattı."
  },
  {
    "id": 413,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Kocaman bir ekin yığının yanında çalışan ihtiyar bir kadınla konuştuk. Hayrullah Bey, birkaç sene evvel bu kadının torununu tedavi etmiş. Büyükanne çok dualar etti; sonra temmuz güneşinin altında harman döğen gürbüz bir genci çağırdı[:] [-]Gel buraya. Hüseyin, velinimetinin elini öp. O olmasaydı, sen şimdi bir avuç toprak olmuştun, dedi."
  },
  {
    "id": 414,
    "source": "Albert Camus - Yabancı",
    "text": "Adamın yüzü gözü kan içinde kalmıştı. Raymond bana dönüp, \"Gör bakalım, şimdi ne yapacağım,\" dedi. [\"]Dikkat, bıçağı var[!]\" diye bağırdım, ama Raymond[']un kolu deşilmiş, dudağı yarılmıştı bile. Masson ileriye doğru atıldı. Ama, öteki fellah ayağa kalkmış, bıçaklının arkasına geçmişti bile."
  },
  {
    "id": 415,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Toplumumuzun bütün katlarını ayıklayın ve her birinin üzerinde iyice bir düşünün, biz de bu arada Arkadiy’le beraber...” “Her şeyle alay edersiniz,” diye atıldı Pavel Petroviç. “Hayır, kurbağa keseceğiz. Gidelim Arkadiy[;] hoşça kalın baylar[!]” İki arkadaş çıktılar[.] İki kardeş yalnız kaldılar ve önce yalnızca bakıştılar. “İşte,” diye sonunda Pavel Petroviç konuşmaya başladı, “işte size zamane gençliği!"
  },
  {
    "id": 416,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "İnekler böğürüyor, köpekler havlıyor, koyunlar meliyor, atlar kişniyor, ördekler vaklıyordu. O kadar hoşlarına gitmişti ki, şarkıyı baştan sona tam beş kez söylediler; Bay Jones uyanmasa, belki de sabaha kadar söyleyeceklerdi. Ama ne yazık ki[,] Bay Jones gürültüden uyandı[;] avluya tilki girdiğini sanarak yatağından fırladı[.] Her zaman yatak odasının köşesinde duran tüfeğini kaptığı gibi karanlığa saçma yağdırdı. İri saçmalar samanlığın duvarına saplanır saplanmaz, toplantıdaki hayvanlar çil yavrusu gibi dağıldılar."
  },
  {
    "id": 417,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "kendi çiftliklerindeki hayvanların ayaklanma konusunda ayrıntılı bilgi edinmelerini önlemek için ellerinden geleni yapıyorlardı. Aslına bakılırsa, başlangıçta, hayvanların bir çiftliği kendi başlarına yönetebileceğine çok gülmüşler; çok değil, on on beş güne kadar bu iş nasıl olsa yatar, diye düşünmüşlerdi. Beylik Çiftlik[']teki [(]çiftlikten Beylik Çiftlik diye söz etmekte durmadan dalaştıkları, pek yakında açlıktan ölecekleri söylentisini yaymışlardı. Ama bir süre sonra hayvanların açlıktan ölmedikleri ortaya çıkınca, ağız almış yürümüştü; hayvanlar kızgın nallarla birbirlerine işkence yapıyorlar, dişilerini de ortaklaşa kullanıyorlardı. Frederick ile Pilkington, bütün bunların, Doğa yasalarına başkaldırmanın doğal sonucu olduğunu söylüyorlardı."
  },
  {
    "id": 418,
    "source": "Albert Camus - Yabancı",
    "text": "Ben de, \"Ne zaman istersen evleniriz,\" dedim. O zaman Marie'ye patronumun önerisinden söz açtım. Marie, \"Paris[']i öyle görmek istiyorum ki[!]\" dedi. Bir zamanlar Paris'te yaşadığımı söyleyince, oranın nasıl bir yer olduğunu sordu. \"Pis bir yer."
  },
  {
    "id": 419,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "George parmaklarını şıklattı, bu gürültü üzerine Lennie, fareyi onun eline verdi. \"Fena bir şey yapmıyordum ki, George. Okşuyordum sade.\" Gcorge kalktı, fareyi karanlık fundalıklarda kabil olduğu kadar uzağa fırlattı, sonra suya yaklaşarak ellerini kaldırdı[:] \"Koca dangalak[!] Fareyi almak için dereyi geçerken ayaklarını ıslattığını görmeyecekmiyiz sandın?\" Lennie'nin mırıldandığını işitti, sert bir tavırla döndü: \"Şuna bak be, aygır kadar herif, oturmuş çocuk gibi viyaklıyor!\" Lennie ağacın arkasına geçti, bir kucak dal ve kuru yaprak getirdi. Bunları eski kül yığınının üstüne attı, daha toplamaya gitti."
  },
  {
    "id": 420,
    "source": "Michael Ende - Momo",
    "text": "Ölüm cezası ile korkutularak o çağın bütün insanları bunun yapımında çalıştırıldılar. Tabii bu dünyayı üzerine oturtacak bir destek gerekiyordu. İşte bu gördüğünüz yıkıntı[;] o destekten başka bir şey değildir[.] Önce destek yapıldı, sonra dünya büyüklüğünde kocaman küre... Kürenin yapımı bittiğinde eski dünyanın üstünde ne varsa özenle taklit edildi."
  },
  {
    "id": 421,
    "source": "Stefan Zweig - Satranç",
    "text": "Temmuz sonuydu, karanlık, bulutlu, yağmurlu bir gündü: Bu ayrıntıyı çok iyi anımsıyorum, çünkü sorgulamaya götürülürken geçtiğim koridordaki camlara vuruyordu yağmur damlaları. Dış odada sorgu yargıcını beklemem gerekiyordu. Her sorgulamadan önce her zaman beklemek gerekiyordu[:] Bu bekletme de yöntemlerinin bir parçasıydı[.] Önce gece yarısı apar topar hücreden alıp götürerek insanın sinirlerini bozuyorlardı, sonra da, insan kendini sorgulamaya hazırladığında, direnmek için bütün bilincini ve isteğini topladığında, bedenini yormak ve ruhunun direncini kırmak için sorgulamadan önce bir saat, iki saat, üç saat bekletiyorlardı insanı. Ve o perşembe günü, 27 Temmuz’da, beni her zamankinden çok beklettiler, tam iki saat dış odada ayakta bekledim; bu tarihi bu kadar kesin anımsamamın özel bir nedeni var: İki saat boyunca ayaklarıma kara suların indiği – oturmama izin yoktu elbette– o dış odada bir takvim asılıydı; basılmış, yazılı bir şeylere duyduğum açlıkla duvardaki bu tek bir sayıya, “27 Temmuz”a nasıl da bakıp durduğumu size anlatamam; hemen beynimin içine kazıdım onu."
  },
  {
    "id": 422,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Sabaha kadar bitiremez. Zaten bütün anahtarlar bende durur. Birdenbire[:] [—] Ne güzel kollarınız var, dedi; insanın resmini yapacağı geliyor! Kadın biraz kızarıp gülümseyerek: — Kolları sıyırmadan olmuyor, dedi. Entariler şimdi öyle fena ki."
  },
  {
    "id": 423,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "kâtip: Sekreter, yazıcı. kavil: Söz, sözleşme, anlaşma. kelime[-]i teyyibe: (Kelime[-]i tayyibe[)] Yatıştırıcı hoş söz. kepazelik: Rezalet. kerliferli (kelli felli): Kılığı kıyafeti düzgün, olgun ve gösterişli."
  },
  {
    "id": 424,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Sandviçten bir parça kesip bana verdi. Sonra küçük bir bardak içki yuvarladı ve yemeğimizle birlikte içmemiz için iki limonata ısmarladı. Sandviçi ağzına götürürken dikkatle beni inceliyordu[;] gözlerinde[,] hoşnut olduğunu gösteren bir anlam vardı[.] “Biliyor musun, ufaklık, bana uğur getiriyorsun. Yığınla çocuğum var ama, bana yardım etmesi için birini bile yanıma almayı hiç düşünmedim.” Limonatasından koca bir yudum aldı."
  },
  {
    "id": 425,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "römark: (Fr. Remarque) Dikkate alma. [(]Metinde: Tespit, dikkat çekme anlamında kullanılmış.[)] ruhani: Ruhla ilgili. rüştiye: Ortaokul. Ssadakar: Düz dokunmuş açık saman renginde birtür ipek kumaş."
  },
  {
    "id": 426,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"Hayır.\" Lennie: \"Biliyordum ben,\" diye haykırdı. \"Öyle şey yapacak adam değilsin sen.\" George sesini çıkarmadı. \"Ne var[?]\" \"Beni paylamayacak mısın[?]\" \"Paylamak mı[?]\" \"Evet, her zamanki gibi, canım. Hani ne dersin: Sen yanımda olmasan, elli kağıdımı aldım mı...\" \"Ulan ne herifsin be, Lennie! Olup bitenlerin hiçbirini hatırlamazsın da, ağzımdan çıkan her sözü hatırlarsın.\" \"Söylemeyecek misin o lafları?\" George silkindi, sonra isteksiz bir edayla başladı: Tatsız monoton bir sesle söylüyordu: \"Kendime iş bulurdum, hiçbir zaman başım derde girmezdi.\" Durdu."
  },
  {
    "id": 427,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Gözlerini ondan Lennie'ye çevirdi. Lennie hâlâ kavuşacağı çiftliğin hayaliyle mest bir halde, gülümsüyordu. Curley, bir köpek gibi Lennie[']ye sokuldu: \"Ne gülüyorsun ulan[?]\" Lennie şaşkın şaşkın ona baktı: \"Ha!\" Curley kudurmuşcasına boşandı: \"Gel buraya ulan, hergele. Kalk ayağa.Senin gibi bir orospu çocuğunu güldürür müyüm sandın kendime. Korkak kimmiş şimdi gösteririm sana ben.\" Lennie, sıkılmış bir halde George'a bakıyordu."
  },
  {
    "id": 428,
    "source": "Michael Ende - Momo",
    "text": "Öyle gamsız gülerdi ki, insan ister istemez onunla beraber gülmek zorunda kalırdı. İsmi Girolamo idi, ama onu sadece Gigi diye çağırırlardı. Madem ki[,] Beppo[']yu mesleği ile beraber anıyoruz, Gigi için de aynı şeyi yapalım; her ne kadar onun tek bir mesleği yoksa da[...] Ona \"Turist Rehberi Gigi\" diyelim. Ama dediğimiz gibi, rehberlik onun mesleği değil, fırsat düştükçe yaptığı bir sürü işten biriydi."
  },
  {
    "id": 429,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"Farzet ki George geri dönmedi. Farzet ki çekti, gitti, geri dönmedi. Ne yaparsın[?]\" Lennie, yavaş yavaş ötekinin söylediklerine dikkat etmeye başlamıştı: \"Ne[?]\" dedi. \"Diyorum ki, farzet, George bu akşam kasabaya gitti, bir daha ondan hiçbir haber alamadın.\" Crooks adeta bir intikam arzusuyla devam ediyordu: \"Farzet ki böyle oldu?\" Lennie: \"Öyle şey yapmaz o,\" dedi. \"George yapmaz öyle şey."
  },
  {
    "id": 430,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"Siz buraya gelip oturunca bana zenciliğimi unutturdunuz. Onun dediği doğrudur.\" Ahırda atlar soludu, zincirler şıngırdadı, bir ses bağırdı: \"Lennie, hey Lennie! Ahırda mısın[?][\"] Lennie[:] \"George geldi!\" diye haykırdı. Cevap verdi: \"Buradayım George, buradayım.\" Bir saniye sonra George, kapı boşluğunda belirmiş, etrafına hoşnutsuz bir tavırla bakınıyordu. \"Crooks'un odasında ne halt ediyorsun?"
  },
  {
    "id": 431,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Bu da nereden çıktı? Evet, bir gün soğuk alırım, ateşim yükselir; buralara gelir beni bulamazsın; eve gelirsin, hasta derler; ertesi gün gene öyle. Odamın panjurları kapanır; doktor başını sallar; Katya ayaklarının ucuna basarak gözyaşları içinde dışarı çıkar, senin yanına gelir[:] Olga ağır hasta, Olga ölüyor, der[...] Tanrı göstermesin, diye bağırdı... Olga güldü."
  },
  {
    "id": 432,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Foxwood'un sahibi Bay Pilkington, zamanının büyük bölümünü balık mevsiminde balık tutarak, av mevsiminde ava çıkarak geçirirdi; rahatına düşkün, efendi bir adamdı. Pinchfield Çiftliği ise daha küçük, ama daha bakımlıydı. Pinchfield[']ın sahibi Bay Frederick[,] kabadayı ve kurnaz bir adamdı; ikide bir mahkemelik olurdu; dini imanı paraydı, elini veren kolunu alamazdı. Bu ikisi birbirlerinden öylesine nefret ederlerdi ki, kendi çıkarlarına olan bir konuda bile anlaşamazlardı. kendi çiftliklerindeki hayvanların ayaklanma konusunda ayrıntılı bilgi edinmelerini önlemek için ellerinden geleni yapıyorlardı."
  },
  {
    "id": 433,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Ara sıra sesinin titremesinden korkuyor gibi susuyor, birkaç saniye tereddüt ediyordu, dedi ki: -Feride Hanım, size ölünceye kadar minnettarım. Bana eski bahtiyar zamanlarımda da nasip olmamış emsalsiz bir gece geçirttiniz. Size demin hakikati söylemedim[;] ben bu gece sabaha kadar uyumadım[...] “Ben sizinle evlenmeyi rica ediyorum” diyen sesiniz kulağımdan gitmedi. Uyuyamadım, çünkü sizin nişanlınız olarak geçirdiğim tek saadet gecesinin bir dakikasını ziyan etmemek lâzımdı."
  },
  {
    "id": 434,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "“Jandira, beni havaya kaldır, şu duayı okumak istiyorum,” dedim. “Bu kadar palavracı olma, Zezé. Çok işim var.” “Hadi[,] kaldır; göreceksin okuma bilip bilmediğimi.” “Dikkat et[,] Zezé[!] Bu yaptığın oyunsa görürsün gününü.” Beni kollarına aldı ve kapı çizgisinin üstüne kaldırdı. “Hadi, oku!"
  },
  {
    "id": 435,
    "source": "Michael Ende - Momo",
    "text": "Ne diye başkalarını koruyayım? Beni kimse korumuyor!\" Şişman Liliana elindeki tavayı hırsla ocağın üzerine indirince \"güm\" diye bir ses çıktı. Kadın, iki elini geniş kalçalarına dayayarak bağırdı[:] [\"]Bak sana ne diyeceğim; senin deyiminle, bu ihtiyar tiritlerin arasında galiba benim amcam Ettore de var[!] Ben aileme küfür ettirmem! O şerefli, dürüst bir insandır, senin zengin müşterilerin gibi çok parası olmayabilir!\" Nino büyük bir jest yapar pozda, \"Ettore isterse yine gelebilir!\" dedi."
  },
  {
    "id": 436,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Elini kalbine götürdü. Ağır ağır güçlükle yerinden kalktığı zaman yüzü tahta gibi kaskatı kesilmişti, gözleri de sert sert gibi kaskatı kesilmişti, gözleri de sert sert bakıyordu. Candy sordu[:] \"Kim yaptı bu işi acaba[?]\" George soğuk bir bakışla ona baktı: \"Anlamadın mı[?]\" Candy sesini çıkarmadı. Ne yapacağını şaşıran George: \"Bunu tahmin etmeliydim,\" dedi. \"Kimbilir belki de içimden etmişimdir.\" Candy sordu: \"Ne yapacağız şimdi, George?"
  },
  {
    "id": 437,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Clover da Muriel'i buldu. Muriel, Altıncı Emir'i şöyle okudu: \"Hiçbir hayvan başka bir hayvanı sebepsiz yere öldürmeyecek.\" Anlaşılan, sebepsiz yere sözcükleri her nasılsa hayvanların belleğinden silinmişti. Demek, Altıncı Emir çiğnenmiş değildi; çünkü Snowball[']la birlik olan hainler sebepsiz yere öldürülmemişlerdi[.] O yıl hayvanlar bir önceki yıldan çok daha fazla çalıştılar. Bir yandan yel değirmeninin, hem de duvarlarının kalınlığı iki katına çıkartılarak yeniden inşa edilmesi ve inşaatın önceden belirlenen tarihte tamamlanması; öte yandan çiftliğin gündelik işlerinin yürütülmesi, olağanüstü bir çaba gerektirmişti."
  },
  {
    "id": 438,
    "source": "Albert Camus - Yabancı",
    "text": "Yerine oturdu, saçlarını karıştırdı, dirseklerini masaya dayadı, tuhaf bir tavırla bana doğru biraz eğildi, \"Yerde yatan bir cesede niçin ateş ettiniz, niçin?\" diye sordu. Buna da karşılık vermedim. Yargıç ellerini alnından geçirdi, titrek bir sesle sorusunu yineledi: [\"]Niçin[?] Bunu bana söylemeniz gerek! Niçin?\" Ben hep susuyordum."
  },
  {
    "id": 439,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Aynanın içinde gülüyor, birbirimize dilimizi çıkarıyorduk. Munise, lacivert gözleri, duru beyaz teni, ince şirin yüzüyle bir melek gibi güzeldi. Fakat memnun görünmedi; eliyle burnumu, yanaklarımı okşayarak[:] [-]Nafile abacığım, sana benzemiyorum ki, dedi. Daha iyi ya çocuğum. Nemelâzım abacığım, ben senin gibi güzel değilim ki..."
  },
  {
    "id": 440,
    "source": "George Orwell - 1984",
    "text": "Bir, iki, üç, dört! ... [\"] Öksürük nöbetinin sancısı[,] rüyanın Winston[']da uyan­ dırdığı duygulan tümden silememişti; üstelik cimnasti­ ğin ritmik hareketleri nedense o duygulan diriltiyordu. Yüzünde Beden Alıştırmaları için uygun görülen o sert ama hoşnut bakış, kollarını kaldırıp indirirken, çocuklu­ ğunun belli belirsiz günlerini kafasında yeniden canlan­ dırmaya çalışıyordu. Ama hiç de kolay değildi."
  },
  {
    "id": 441,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "“O burada... onu görmek istiyorum.” “Onu göreceksin Yevgeniy ama önce doktor beyle konuşmak lazım. Sidor Sidoriç [(]kasaba hekiminin adı buydu[)] gittiğine göre hastalığın öyküsünü ben anlatacağım ve küçük bir konsültasyon yapacağız.” Bazarov Alman’a baktı. “Hadi çabuk konuşun ama Latince olmasın; jam moritur’un73 ne demek olduğunu biliyorum.” “Der Herr scheint des Deutschen machtig zu sein,”74 diye söze başladı Asklepios’un75 bu yeni öğrencisi, Vasiliy İvanoviç’e dönerek. “Ih..."
  },
  {
    "id": 442,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Fakat âşık olmak için de bir şey, belki çok az bir şey, anlatılamayan, adı olmayan bir şey gerektir ki ediyorum. Bakın bana Olga, böyle yaparsak hiçbir şeyi çözemeyiz, birbirimizi anlayamayız. Ayrıntılara girmekten utanmayın[;] yarım saat için kendinizi esirgemeyin[;] bana her şeyi anlatın; ben de size ne olduğunu ve daha neler olabileceğini söyleyeyim. Ben hâlâ öyle sanıyorum ki... bu işte bir yanlışlık var..."
  },
  {
    "id": 443,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Halbuki siz, cuma günü öğleyin geldiniz çalışmaya. Demek ki hesabınız ne olursa olsun, en az bir buçuk gün çalışmak zorundasınız.\" George, onun gözlerinin içine bakarak: \"Bir süre kalacağız,\" dedi. [\"]Biraz metelik tutmak niyetindeyiz.[\"] Kapı usulca açıldı, seyis başını uzattı; dar bir zenci kafası, acıların üzerine izlerini nakşeltiği bir yüz ve sabırlı gözler. \"Bay Slim!\" Hala ihtiyar Candy'ye bakan Slim, gözlerini çevirdi: \"Ha! Ha!"
  },
  {
    "id": 444,
    "source": "Michael Ende - Momo",
    "text": "\"İşte öyle... Akşama kadar ortalıkta dolaşır dururuz. Çoğu zaman da buraya geliriz[.][\"] Bütün çocuklar evet der gibi baş salladılar; aşağı yukarı hepsinin durumu aynıydı. Yüzünden hiç de memnun olmadığı anlaşılan Franko, \"Bizim ihtiyarların benimle uğraşacak vakit bulamamalarına ben seviniyorum. Yoksa hemen kavga, arkadan da dayak gelirdi” dedi."
  },
  {
    "id": 445,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Çok rica ederim.” “Nedenini size açıklayabilirdim,” diye lafa girdi Pavel Petroviç. “Ama bu konuda susmayı tercih ederim. Bana göre siz burada fazlasınız; size tahammül edemiyorum, sizden nefret ediyorum, eğer sizin için bu kadarı yeterli değilse[...]” Pavel Petroviç’in gözleri parladı[...] Bazarov’un da gözleri alev alev yanmaya başladı. “Çok iyi, efendim,” dedi Bazarov."
  },
  {
    "id": 446,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"Evet, efendim.\" \"O halde haddini bil, zenci parçası. Seni bir ağaç dalında sallandırırım; hem o kadar kolaylıkla ki, tadı bile çıkmaz.\" Crooks büzüle büzüle adeta yok olmuştu. Artık ne kişiliği kalmıştı[,] ne benliği[;] sempati veya antipati uyandırabilecek hiçbir şeyi kalmamıştı[.] Korkudan titreyen bir sesle: \"Evet, efendim,\" dedi. Kadın yeniden paylamak için kımıldamasını bekleyerek başucunda durdu."
  },
  {
    "id": 447,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Babam; o zaman Musul’daymış. Ben, iki buçuk yaşında kadarmışım. Yaz o kadar şiddetli olmuş ki[,] şehirde barınmak kabil olmamış; babam[,] annemle beni bu köye getirmeye mecbur kalmış[.] Kendisi her sabah atla Musul’a iner, akşamları güneş battıktan sonra dönermiş. Annem hastaymış."
  },
  {
    "id": 448,
    "source": "Stefan Zweig - Satranç",
    "text": "sizi daha fazla rahatsız etmeyeceğim.” Ve biz şaşkınlığımızı üzerimizden atamadan, salondan çıkmıştı bile. “Ama bu olanaksız!” diye haykırdı ateşli McConnor yumruğunu masaya vurarak. “Bu adam yirmi beş yıldır satranç oynamamış olamaz[,] kesinlikle olamaz[!] Her hamleyi, her karşı hücumu beş-altı hamle önceden hesapladı. Böyle bir şeyi kimse rastgele yapamaz."
  },
  {
    "id": 449,
    "source": "Albert Camus - Yabancı",
    "text": "Benim avukatın sabrı tükenmişti. Kollarını havaya kaldırdı, cüppesinin yenleri dirseklerine doğru düştü, kolalı gömleğinin kıvrımları meydana çıktı. [\"]Bu adamı anasını gömdü diye mi, yoksa birini öldürdü diye mi suçlandırıyoruz, anlayalım[!][\"] diye bağırdı. Dinleyiciler güldüler. Ama, savcı yine ayağa kalktı, cüppesini kavuşturdu ve bu iki olay arasında derin, etkin ve esaslı bir ilişki bulunduğunu anlamamak için sayın avukat kadar saf olmak gerektiğini söyledi, sonra, sesini yükselterek, \"Evet, bu adamı anasını bir cani yüreğiyle gömmüş olmakla suçlandırıyorum!\" diye bağırdı."
  },
  {
    "id": 450,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "“Biz iki dostuz, değil mi? Erkek erkeğe konuşacağız şimdi: Seninle bazı şeyleri görüşmek ara sıra tüylerimi ürpertse bile yapacağım bunu. Kabul, haklısın[;] ama sanırım ablana sövmemen gerekirdi[.] Hem biliyor musun, ne olursa olsun sövmemelisin!” “Ama ben küçüğüm. Öcümü almak için tek yolum bu.” “Söylediğinin ne anlama geldiğini biliyor musun?” Başımla evetledim."
  },
  {
    "id": 451,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Terlikleri yerden ayağına geçirip, havaya atıyor, ayağıyla yakalamaya çalışıyordu. Zahar girdi, kapının — Ne var? Zahar bir şey söylemedi[;] sadece ona baktı; ama yan yan değil, hemen hemen [—] Söylesene[!] Börek mi hazır, ne var? Ev buldunuz mu?"
  },
  {
    "id": 452,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Casta Diva... hatırladıkça fena oluyorum, dedi. Parçalanan bir kadın kalbi[;] bu müzikte ne derin bir acı vardır[;] hiç kimse derdini bilmez[...] Yapayalnızdır... Sırrı omuzlarını çökertir..."
  },
  {
    "id": 453,
    "source": "Stefan Zweig - Satranç",
    "text": "Bu hoş görüntüye baktım; yabanıl, kendinden geçmiş bir bakış olsa gerekti bu, çünkü kadın, ‘Sakin olun! Sakin olun!’ diye yatıştırmaya çalıştı beni. Ama ben yalnızca sesine kulak kabarttım[;] bu konuşan[,] bir insan değil miydi[?] Yeryüzünde beni sorgulamayan, bana işkence yapmayan bir insan var mıydı gerçekten? Üstelik –akıl almaz bir mucize!– yumuşak, sıcak, neredeyse sevecen bir kadın sesi."
  },
  {
    "id": 454,
    "source": "İvan Gonçarov - Oblomov",
    "text": "\"Şimdiye kadar çiçek toplamakla, bir çocuk gibi aşkın konusu ile sarhoş olmakla, ay ışığında gezinmekle, buluşma saatlerini beklemekle, onun genç yüreğini dinlemekle, hülyalarının peşine düşmekle uğraşmış olmak ne ayıp... Tanrım!\" Yüzü kızardı. [\"]Bu akşamdan tezi yok Olga aşkın gerektirdiği görevleri öğrenecek; bu akşam onunla son yalnız buluşmamız olacak; bugün[...] \" Elini göğsüne koydu. Yüreği, kuvvetli fakat şerefli bir insanın yüreği gibi düzenli çarpıyor; heyecan içinde düşünüyordu: Olga'ya, \"Bir daha telaşını zevkle seyredecek, sonra sıkıla sıkıla niyetini söyleyecekti."
  },
  {
    "id": 455,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Slim de, George'un iltifatını bir bakışla onayladı. Masaya eğildi ve kullanılmış bir kağıdın kenarını çıtlattı: \"Birlikte mi dolaşıyorsunuz?\" Dostça bir edayla konuşuyor, gözleri bir şey sormadan adamı açılmaya davet ediyordu. George[:] \"Evet,\" dedi, \"birbirini tamamlayan iki insan gibiyiz.\" Başparmağıyla Lennie[']yi gösterdi: \"Pek akıllı değildir ama, işe gelince gözü yılmaz. Yaman oğlandır, yalnız pek akıllı değildir. Çok eskiden beri tanırım onu.\" Slim'in gözleri George'u delerek geçti."
  },
  {
    "id": 456,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Ama hiçbir hayvan sonunda o gaddar bıçaktan kaçamaz. Siz, karşımda oturan genç domuzlar; bir yıla kalmaz, bıçağın altında ciyaklaya ciyaklaya can verirsiniz. İnekler[,] domuzlar, tavuklar, koyunlar; bu korkunç son hepimizi bekliyor, hepimizi[.] Atların ve köpeklerin yazgısı da bizimkinden farklı sayılmaz. Sen, Boxer, şu koca kasların gücünü yitirmeyegörsün, Jones o saat, sakat ve kocamış atları alan kasaba satar seni."
  },
  {
    "id": 457,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Böyle anlatılmaz. Önce emekli maaşınızı ne zaman alacağınızı bilmeliyim.” “Öbür gün.” Sevgiyle gülümsedi. “Öbür gün ne[?]” “Cuma.” “Öyleyse öbür gün, bana kentten bir ‘Ayışığı’ getirir misiniz[?]” “Yavaş ol, Zezé! ‘Ayışığı’ da neymiş?” “Sinemada gördüğüm küçük at. Terbiyecisi, Fred Thompson."
  },
  {
    "id": 458,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Reis, büyük samanlığın bir köşesinde, tavandaki kirişlerden birinden sarkan bir fenerin aydınlattığı bir yükseltinin üzerine serili saman döşeğine kurulmuştu bile. On iki yaşındaydı, son zamanlarda gövdesi biraz yağ bağlamıştı; uzun sivri köpekdişleri hiç kesilmemiş olmasına karşın, bilge ve babacan görünen heybetli bir domuzdu. Çok geçmeden öteki hayvanlar da birbiri ardı sıra sökün ettiler[;] yolu yordamınca yerlerini almaya başladılar[.] Önce Bluebell, Jessie ve Pincher adlı üç köpek göründü; ardından domuzlar geldiler, yükseltinin hemen önündeki samanların üzerine yerleştiler. Tavuklar pencere eşiklerine tünediler, güvercinler çatı kirişlerine kondular, koyunlarla inekler domuzların arkasına uzanıp geviş getirmeye koyuldular."
  },
  {
    "id": 459,
    "source": "Michael Ende - Momo",
    "text": "İnsanların artık ona gereksinimi kalmayıncaya kadar sürecek. Duman adamlar benden tek bir an bile alamazlar.\" \"Ama seni buna zorlayabilirlermiş, öyle dediler.\" \"Bu konuyu konuşmadan önce, onları kendi gözlerinle görmeni istiyorum\" alıp taktı. Eskiden olduğu gibi[,] yine renkler ve şekiller karmakarışık olup başını döndürdüler önce; sonra alıştı[.] Her şeyi gören gözlükle artık rahat görebiliyordu. Şimdi kuşatma ordusunu görüyordu."
  },
  {
    "id": 460,
    "source": "Stefan Zweig - Satranç",
    "text": "Uzun uzun düşündü, gözlerini hiç kaldırmadan tahtaya dikti, öyle ki siyah kirpiklerinin altından gözbebeklerini görmek neredeyse olanaksızdı ve böyle derin düşünürken yavaş yavaş ağzı açıldı, yuvarlak yüzüne biraz bön bir ifade verdi bu. Czentovic birkaç dakika düşünüp taşındı, sonra bir hamle yaptı ve ayağa kalktı. Dostumuz şöyle fısıldadı[:] “Zaman kazanmaya çalışıyor[!] İyi akıl! Ama pes etmeyin!"
  },
  {
    "id": 461,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"Arabalar nerdeyse gelirler. Gidip yıkanma kovalarını çıkarayım. Siz de arpa mı yükleyeceksiniz[?]\" \"Evet.\" \"Dediklerimi Curley[']e söylemezsin, değil mi[?]\" \"Ne münasebet?\" George, kağıtları özenerek diziyor, üçlü gruplar yapıyordu. Birlilerin üstüne dört sinek koydu. Güneş ışınları şimdi yerde dörtköşe bir ışık parçası meydana getirmişti, sinekler bu ışık demeti içinden geçerken birer kıvılcım gibi parlıyorlardı."
  },
  {
    "id": 462,
    "source": "George Orwell - 1984",
    "text": "Julia yirmi altı yaşındaydı. Otuz kızla birlikte bir yurtta kalıyor (\"Bıktım şu kan kokusundan! Nefret edi­ yorum kan milletinden!\" diyordu ikide bir[)] ve Winston[']ın tahmin ettiği gibi, Kurmaca Dairesi[']ndeki roman yazma makinelerinden birinde çalışıyordu. İşinden memnundu; güçlü ve becerikli bir elektrik motorunu çalıştırıyor ve bakımını sağlıyordu. \"Zeki\" sayılmazdı, ama ellerini kul­ lanmayı seviyor, makinelerle uğraşmaktan hoşlanıyordu."
  },
  {
    "id": 463,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "İki büklüm olsun namussuz.\" White pek heyecanlı bir halde: \"Benim tüfeğim yok,\" dedi. Curley atıldı: \"Şerifin yardımcısı Al Wist'i getir. Hadi yürüyün.\" Kuşkulu bir tavırla George[']a döndü[:] \"Sen de geliyor musun bizimle, yavrum?\" George[:] \"Evet,\" dedi. \"Geleceğim. Ama beni dinle, Curley."
  },
  {
    "id": 464,
    "source": "George Orwell - 1984",
    "text": "Winston gibi değildi, Parti'nin cinsellik konusundaki softalığının ardında yatanı çok iyi kavramıştı. Burada söz konusu olan, cinsel içgüdünün, Parti'nin denetleyemediği, kendine özgü bir dünya ya­ rattığı için elden geldiğince yok edilmesi gerektiği değil­ di yalnızca. Daha da önemlisi[,] cinselliğin bastınlrnası is­ teriyi tetikliyordu; bu da Parti[']nin istediği bir şeydi, çün­ kü savaş coşkusuna ve öndere tapınmaya dönüştürülebi­ liyordu[.] Julia bunu şöyle yorumluyordu: \"Seviştiğin zaman içindeki enerjiyi boşaltırsın; sonra da kendini mutlu hisseder ve hiçbir şeyi iplemezsin. Ama senin bu halin onların hiç hoşuna gitmez."
  },
  {
    "id": 465,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Tam otuz beş güvercin, adamların başlarının üzerinde uçuşarak tepelerine pisledi. Adamlar güvercinleri kovalamaya çabalarken, çitin arkasına gizlenmiş olan kazlar birden ileri atılarak baldırlarını vahşice gagalamaya başladılar. Ne var ki[,] bu yalnızca ortalığı biraz karıştırmaya yönelik göstermelik bir saldırıydı[;] nitekim adamlar kazları sopalarıyla kolayca geri püskürttüler[.] Bu kez Snowball ikinci saldırıyı başlattı. Muriel, Benjamin ve bütün koyunlar, başlarında Snowball, ileri atılıp adamlara dört bir yandan tos vurmaya, boynuz atmaya koyuldular; bu arada Benjamin, dönüp dönüp çifte atıyordu."
  },
  {
    "id": 466,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Tam bir prenses.” “İyi bir prenses,” diye itiraz etti Arkadiy, “senin benim gibi koyu aristokratları daha ilk görüşmeden sonra evine çağırdı.” “Özellikle de ben, müstakbel bir hekim, üstelik de bir hekim oğlu, bir diyakoz torunu... Sahi, sen benim bir diyakoz torunu olduğumu biliyor muydun?..” “Speranskiy gibi,” diye de ekledi Bazarov kısa bir süre sustuktan ve dudaklarını çarpıttıktan sonra. “Bu hanım kendini çok şımartmış yine de[;] ah[,] ah bu hanım kendini ne kadar da şımartmış[!] Frak mı giysek, ne dersin?” Arkadiy sadece omzunu kaldırmakla yetindi... fakat pek fazla olmasa bile o da şaşırmıştı."
  },
  {
    "id": 467,
    "source": "Albert Camus - Yabancı",
    "text": "Ama köpek insandan daha az yaşadığı için bir arada kocamışlar. \"Kötü huyluydu. Arada bir hırlaşırdık, ama yine de iyi köpekti[!][\"] dedi. Ben de, \"Cins köpekti,\" dedim. Sevindi."
  },
  {
    "id": 468,
    "source": "Michael Ende - Momo",
    "text": "Zira gerçek zamanı ne bir saat, ne de bir takvim ölçebilir. Böyle bir yalnızlığı anlatacak söz bulmak aslında çok güç. Belki şunu deniyordu[)], ona gidecek ve kendisine artık zamandan bir pay ayırmamasını rica edecekti[.] Ya da kendisinin de sonsuza kadar, Hiçbir Yerde Evinde, onun yanında kalmasına izin vermesini isteyecekti. Fakat Kassiopeia olmadan yolu bulamıyordu."
  },
  {
    "id": 469,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Ertesi sabah saldırı başladı. Hayvanlar tam kahvaltıya oturmuşlardı ki, tozu dumana katarak gelen gözcüler Frederick ve adamlarının ana kapıdan girdiklerini bildirdiler. Hayvanlar[,] saldırganları karşılamak üzere cesaretle ileri atıldılar; ama bu kez zafere ulaşmak Ağıl Savaşı[']nda olduğu kadar kolay görünmüyordu[.] Gelenler on beş kişiydi, altısının tüfeği vardı; yaklaşık elli metre kala ateş açtılar. Korkunç patlamalara ve canlarını yakan saçmalara karşı duramayan hayvanlar çok geçmeden geri çekilmek zorunda kaldılar."
  },
  {
    "id": 470,
    "source": "İvan Gonçarov - Oblomov",
    "text": "hizmet etmek istedi: \"Benim efendim doğuştan soyludur, bu konuklar hiçbir şey değil,\" dedi. Masanın dibinde oturan Tarantiyev'e hiç yemek vermedi ya da canı ne kadar vermek istediyse o kadar verdi. İvan Matveyeviç[']in bütün daire arkadaşları [(]otuza yakın[)] oradaydılar. Kocaman bir alabalık, tavuklar, keklikler, kaymaklı dondurma ve nefis bir şarap ziyafet listesinin başında geliyordu. Yemek bitince herkes birbirini kucakladı, ev sahibinin zevki göklere çıkarıldı ve kâğıt oyunları başladı."
  },
  {
    "id": 471,
    "source": "Stefan Zweig - Satranç",
    "text": "Yoksa ünlü bir usta anlaşılmaz bir nedenden dolayı bizden adını mı gizliyordu? Bütün bu olasılıkları büyük bir heyecanla tartıştık, en çılgın savlar bile, yabancının akıl almaz utangaçlığı ve şaşırtıcı açıklamasını unutulmaz oyun yeteneğiyle bağdaştırmaya yetecek kadar çılgın gelmiyordu bize. Ama bir konuda düşünce birliğine vardık[:] Yeni bir savaşı izleme zevkini kendimizden kesinlikle esirgemeyecektik[.] Yardımcımızın ertesi gün Czentovic’e karşı bir oyun oynaması için her şeyi yapmaya karar verdik, oyunun parasal tehlikesini göğüsleme işini McConnor üstlendi. Bu arada kamarotun ağzını arayıp da yabancının Avusturyalı olduğunu öğrenince, yurttaşı olarak ricamızı ona iletmek görevi bana kaldı."
  },
  {
    "id": 472,
    "source": "Albert Camus - Yabancı",
    "text": "Raymond kendini savunmak istedi, benim avukat da itiraz etti. Ama ona, \"Bırakın, savcı sözünü bitirsin,\" diye ihtar ettiler. Savcı, [\"]Ekleyecek pek az şeyim var,\" dedi ve Raymond[']a, \"Bu adam arkadaşınız mıydı sizin[?]\" diye sordu. Raymond, \"Evet, arkadaşımdı,\" diye karşılık verdi. Bunun üzerine, savcı bana da aynı şeyi sordu."
  },
  {
    "id": 473,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "(Alm.) Hasta nerede? (Ç.N.) 72. [(]Alm.[)] Sayın meslektaşım [(]wertester Herr Collega). (Ç.N.) 73. (Lat.) Artık ölüyorum."
  },
  {
    "id": 474,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"Hadi, yürü.\" Yaşlı köpek bin zahmetle kalktı, ayaklarını sürükleyerek, kendisini çeken kayışı izledi. Slim: \"Carlson!\" dedi. \"Yapacağın işi biliyorsun değil mi[?]\" \"Ne demek istiyorsun, Slim[?]\" Slim kısaca[:] \"Bir kürek al yanına,\" dedi. \"Ha, tabii, anlıyorum.\" Köpeği karanlıkta dışarı çıkardı. George, kapıya kadar peşlerinden gitti, kapıyı kapayıp mandalı yerine koydu."
  },
  {
    "id": 475,
    "source": "Albert Camus - Yabancı",
    "text": "Fellah hep kamışını üflüyordu. İkisi de Raymond'un bütün davranışlarını kolluyorlardı. Raymond[']a, \"Hayır, herifle karşı karşıya erkekçe dövüş[!] Tabancayı bana ver. Eğer ötekisi işe karışırsa, ya da bıçağını çekerse, o zaman ben de sererim herifi yere,\" dedim."
  },
  {
    "id": 476,
    "source": "Michael Ende - Momo",
    "text": "On yıl sonunda, ilk sayısının dört katı, on beş yıl sonra sekiz katı oluyor. Siz eğer yirmi yıl önce zaman tasarrufuna başlamış olsaydınız, altmış iki yaşında iken, yani kırk yıl sonra birikiminiz, iki yüz elli altı kere o kadar zaman edecekti. Günde iki saatten hesaplarsak; yirmi altı milyar dokuz yüz on milyon yedi yüz yirmi bin saniye eder.[\"] Tekrar kalemini çıkarıp bu sayıyı aynaya yazdı[:] 26 910 720 000 saniye. \"Siz de gördünüz işte Bay Fusi\" dedi ilk defa hafifçe gülümseyerek. \"Sizin önceki bütün yaşam sürenizin on katı."
  },
  {
    "id": 477,
    "source": "Michael Ende - Momo",
    "text": "\"Çocuk da bizim gibi sıraya girsin! Öne geçmek olmaz! Ne terbiyesiz yumurcak[!]\" Nino ellerini yukarı kaldırıp halkı yatıştırmaya çalıştı[:] \"Bir dakika[!] Biraz sabırlı olalım, lütfen!\" Bekleyenlerin arasından biri, \"Bunu herkes yapar! Haydi, devam!"
  },
  {
    "id": 478,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "taksim: (Mat.) Bölme. talika: Dört tekerlekli, üstü kapalı, birtür yaylı at arabası. talkın: [(]Telkin[)] Ölü gömüldükten sonra imamın mezar başında söylediği dinî sözler. tamim: Genelge. tasavvur etmek: Düşünmek, gözönüne getirmek, hayal etmek."
  },
  {
    "id": 479,
    "source": "Michael Ende - Momo",
    "text": "Zamanımızı yararsız şeylerle ziyan edemeyiz.\" \"Evet, güzel günlerdi\" dedi Maria, \"Ama mesele bu değil.\" Üçü de aceleyle yürüdüler. \"Oyun dersine\" diye karşılık verdi Franko, \"Oynamayı öğreniyoruz.\" \"Bugün 'delikli kart' oyunu oynayacağız\" diye açıkladı Paolo, \"Çok yararlı, ama çok dikkat isteyen bir oyun.\" \"Nasıl oynanıyor?\" \"Her birimiz delikli bir kart oluyoruz. Her kartın belli özellikleri var: Uzunkısa, şişman[-]zayıf, ağır[-]hafif gibi. Ama tabii, gerçekte sahip olduğu özellik değil. Yoksa çok kolay olurdu."
  },
  {
    "id": 480,
    "source": "Michael Ende - Momo",
    "text": "Fırsat buldukça yaptığı işler arasında park bekçiliği, nikâh şahitliği, köpek gezdiriciliği, aşk mektubu taşıyıcılığı, cenaze taşıyıcılığı, hatıra eşya satılıcılığı, kedi maması dağıtıcılığı ve daha bir sürü iş sayılabilirdi. Gigi günün birinde zengin ve ünlü biri olmanın hayali içindeydi. Bir parkın ortasında masallardaki kadar güzel bir evde oturacaktı[;] altın yaldızlı tabaklarda yemek yiyecek ve kuştüyü yastıklarda yatacaktı[.] Ve şimdiden kendini, gelecekteki şöhretin güneşi gibi görüyor, uzaktan vuran ışıklarının bu fakir halinde bile onu ısıttığını hissediyordu. Başkaları onun hayallerine gülerken o: \"Yapacağım işte, başaracağım!"
  },
  {
    "id": 481,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Hemen her konuda takışan Snowball ile Napoléon arasında ikide bir hırgür çıkmasa, bu düzen pek güzel işleyecekti. Biri arpa ekilen alanın daha da genişletilmesini önerecek olsa, öbürü yulaf ekilen alanın genişletilmesi gerektiğini savunmaya kalkıyor; biri bir tarlanın lahana yetiştirmeye elverişli olduğunu söyleyecek olsa, öbürü o tarlada kökbitkilerden başka hiçbir şey yetişmeyeceğini ileri sürüyordu. İkisinin de yandaşları vardı[;] bazen şiddetli tartışmalar patlak veriyordu[.] Snowball, parlak söylevleriyle, toplantılarda çoğu zaman oyların çoğunluğunu elde etmeyi başarıyordu; ama Napoléon da, kulis çalışmalarında kendine destek bulma konusunda az becerikli değildi. Özellikle de koyunları etkilemeyi çok iyi biliyordu."
  },
  {
    "id": 482,
    "source": "George Orwell - 1984",
    "text": "\"Eşyaları yavaş yavaş satıyorum. Mesela, şu maun karyola harikulade bir par- ça; bir de tahtakurulanndan temizlenirse. Ama biraz ka­ ba bulabilirsiniz tabii.[\"] Odanın tümünü aydınlatsın diye lambayı havaya kaldırmıştı; belki şaşırtıcıydı ama[,] loş ışıkta içerisi son derece çekici görünüyordu. Winston'ın aklından bir dü­ şünce geçti: Tehlikeyi göze alırsa, odayı haftada birkaç dolara rahatlıkla kiralayabilirdi. Akla düşer düşmez ko­ vulması gereken, çılgınca, umutsuz bir düşünceydi bu; ama oda onu birtür nostaljiye, eski zaman anılarına sü­ rüklemişti."
  },
  {
    "id": 483,
    "source": "Stefan Zweig - Satranç",
    "text": "Zorunlu açılış hamleleri oldukça hızlı geçti. Ancak yedinci ya da sekizinci hamlede belirli bir plan gelişmeye başlar gibi oldu. Czentovic düşünme sürelerini uzattı[;] oyunu almak için asıl savaşın daha yeni başladığını hissettik bunu görünce[.] Ama doğrusunu söylemek gerekirse, her gerçek turnuva oyununda olduğu gibi durumun yavaş yavaş gelişmesi biz acemileri epey hayal kırıklığına uğrattı. Çünkü taşlar iç içe girip tuhaf bir desen oluşturdukça, oyunun durumu bizim için giderek içinden çıkılmaz oluyordu."
  },
  {
    "id": 484,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Sahiden herkesten uzak mı duruyorum?” Arkadiy, Katya’ya minnettarlıkla baktı. “Bütün bunlar çok güzel,” diye devam etti Arkadiy, “ama sizin durumunuzdaki insanlar, yani sizinki gibi malı mülkü olan demek istiyorum, bu yeteneğe pek ender olarak sahip olurlar; gerçek onlara, tıpkı çarlara olduğu gibi çok zor ulaşır.” “Ben zengin değilim ki zaten.” Arkadiy şaşırmıştı ve Katya’yı birden anlayamadı. “Gerçekten de çiftlik ablasının[!]” diye geçirdi aklından Arkadiy; bu düşünce hoşuna gitmişti[,] “Bunu ne kadar güzel söylediniz[!]” dedi. “Neyi?” “Güzel söylediniz; basit, utanmadan ve büyütmeden. Sözü açılmışken, ben yoksul olduğunu bilen ve söyleyen bir insanın duygularında özel bir şey, kendine özgü bir böbürlenme olması gerektiğini düşünüyorum.” “Ablamın sayesinde ben bunu hiç hissetmedim; bu durumumu yalnızca lafın gelişi söyledim.” “Demek öyle ama kabul edin, demin bahsettiğim böbürlenme bir parça da olsa var sizde.” “Örneğin ne?” “Örneğin, siz, sorumu bağışlayın, zengin bir adamla evlenmezdiniz, değil mi?” “Eğer onu çok seversem..."
  },
  {
    "id": 485,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Daha sonra, iki salıda bir garın öbür yanındaki sokaklara gittiğini, ertesi hafta da bizim oralara geldiğini keşfettim. Bu nedenle, o salı okulu astım. Totoca’nın durumu öğrenmesini istemiyordum[;] yoksa[,] evdekilere bir şey söylemesin diye ona bilye almak zorunda kalacaktım[.] Vakit daha erken olduğundan ve ancak kilisenin saati dokuzu çaldığı zaman görüneceği için sokaklarda amaçsız dolaştım. Önce kilisede mola verdim ve heykellere göz attım."
  },
  {
    "id": 486,
    "source": "George Orwell - 1984",
    "text": "\"Sol\"da konuşlanan yayımcısı Victor Gollancz tarafından değil, \"Sağ\"da yer alan T.S. Eliot'ın yayın yönetmenliğindeki Faber&Faber, dahası Jonathan Cape tarafından da geri çevri­ lecekti. the Text[\"] [(]Metne lliųkln Bir Not[)], Peter Davison, s. v. Bin Dokuz Yüz Seksen Dört'ün, Alfred A."
  },
  {
    "id": 487,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Şimdiye kadar... istediğinizi bulamamanıza şaşıyorum.” “Peki siz, ne olursa olsun kendini teslim etmenin kolay olduğunu mu sanıyorsunuz?” “İnsan şayet derin derin düşünmeye, üstelik de beklemeye, kendi kendisine bir paha biçmeye, yani kendisini çok kıymetli saymaya başlarsa kolay değil; oysa düşünmeden kendini vermek çok kolaydır.” “İnsan nasıl olur da kendisine değer vermez? Eğer benim hiçbir değerim yoksa benim sadakatimin başkası için ne gereği olabilir ki[?]” “İşin bu yönüne karışmam[;] benim değerimi anlamak başkasının işidir. Asıl önemli olan, kendini verebilmektir.” Odintsova koltuğun arkalığından öne doğru geldi. “Sanki,” diye tekrar söze başladı, “bütün bunlar başınızdan geçmiş gibi konuşuyorsunuz.” “Lafın gelişi söyledim, Anna Sergeyevna, biliyorsunuz, bütün bunlar bana göre şeyler değil.” “Peki siz kendinizi verebilir miydiniz?” “Bilmiyorum, kendimi övmek istemem.” Odintsova hiçbir şey söylemedi, Bazarov da sustu."
  },
  {
    "id": 488,
    "source": "Stefan Zweig - Satranç",
    "text": "‘Ciddi bir şey değil. Bir sinir krizi,’ dedi ve dikkatle çevresine bakındıktan sonra, alçak sesle ekledi: ‘Haksız sayılmazsınız. Mart’tan beri[,] değil mi[?]’ Başımı salladım. ‘Bu yöntemde şaşılacak bir şey değil,’ diye mırıldandı. ‘Siz ilk değilsiniz."
  },
  {
    "id": 489,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Fırsattan istifade ederek bazı nasihatlar vermek istediğini anladım. Usul-i cedidin aleyhinde bulunmuyor, fakat yeni mekteplerin din derslerini ihmal ettiklerinden şikâyet ediyordu. Şimdiye kadar buradan birkaç hocanım geçmiş[;] fakat nafile[,] hiçbirisinin Kur’an[-]ı Kerim’e, ilmihale, kâfi derecede vukufu yokmuş. Bu Muhtar Efendi, Hatice Hanım’dan hoşnutluk getiriyordu. Ben bu dersleri yine bu saliha, akil, abide hatuncağıza bırakarak kendim başka dersler okutursam köyü daha ziyade memnun edermişim."
  },
  {
    "id": 490,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Bununla birlikte Anna Sergeyevna kısa zamanda içlerini rahatlattı; bu onun için zor olmadı, çünkü kendisi de rahatlamıştı. 70. Fransızca et voila tout [(]İşte hepsi bu[)] ifadesinin bozulmuş şekli[.] (Ç.N.) XXVII İhtiyar Bazarovlar, oğlullarının ani gelişine, onu hiç beklemedikleri için çok sevindiler. Arina Vlasyevna öyle bir telaşa kapıldı ve evde koşuşturmaya başladı ki, Vasiliy İvanoviç, onu “kekliğe” benzetti: Bluzunun kuyruğa benzeyen kısa eteği, ona sahiden de kuş görünümü veriyordu."
  },
  {
    "id": 491,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "O zaman içimdeki kötülük prensi uyanıyordu. Dilediğimi yapabileceğim için Totoca’nın bırakıp gitmesinden hoşnuttum. Beni asıl büyüleyen, Rio[-]Sáo Paulo yoluydu… Çünkü Yarasa olmak[!] Evet, yarasa olmak. Arabaların arkasına asılmak ve yolun rüzgârını, lastiklerin ıslık çalışında hızı hissetmek."
  },
  {
    "id": 492,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"Kimseye söylemedim, Crooks'tan başka.\" George dedi ki: \"Haydi çekin arabanızı buradan ikiniz de. Ulan bir dakika ayrılamayacak mıyım başınızdan be!\" Candy ile Lennie kalkıp kapıya doğru yürüdüler. Crooks seslendi[:] \"Candy!\" \"Ha[?]\" \"Bahçe çapalar, ufak tefek işlerinizi görürüm demiştim sana, hatırlıyor musun?\" Candy: \"Evet,\" dedi. \"Hatırlıyorum.\" \"Öyleyse unut o lafları,\" dedi Crooks. \"Aklımdan bile geçmez böyle şey."
  },
  {
    "id": 493,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Banknotlar sahte çıkmıştı! Frederick keresteleri anafordan almıştı! Napoléon[,] hayvanları hemen bir araya topladı[;] ürkütücü bir sesle, Frederick[']i idam cezasına çarptırdığını, yakalar yakalamaz diri diri kazana attıracağını bildirdi. Öte yandan, hayvanları da, Frederick'in bu alçaklığından sonra en korkulu durumlara karşı hazırlıklı olmaları konusunda uyardı. Frederick ve adamları, ne zamandır beklenen saldırılarını her an başlatabilirlerdi."
  },
  {
    "id": 494,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Senin eline ne geçiyor? Fazla bir şey değil. Bin iki yüz ruble maaş[,] yedi yüz elli ruble tayin bedeli; beş yüz ruble ödenek; beş yüz ruble konut parası; bin ruble kadar da ikramiye[.] Vay canına, güzel sesin mi var, nedir? Hiç de fazla değil, vallahi, Peresevetlov'un maaşını artırdılar; oysa benden daha az çalışıyor."
  },
  {
    "id": 495,
    "source": "Albert Camus - Yabancı",
    "text": "Gözüme çok güzel göründü, ama bunu bir türlü söyleyemedim ona. Bağıra bağıra, \"Ne var ne yok?\" diye sordu. [\"]Gördüğün gibi işte[!][\"] diye karşılık verdim. \"İyi misin? Bir istediğin var mı?\" \"Hayır, her şeyim tamam!\" Sustuk."
  },
  {
    "id": 496,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"Öyle şey yapacak adam değilsin sen.\" George sesini çıkarmadı. \"Ne var?\" \"Beni paylamayacak mısın?\" \"Paylamak mı?\" \"Evet, her zamanki gibi, canım. Hani ne dersin[:] Sen yanımda olmasan, elli kağıdımı aldım mı[...]\" \"Ulan ne herifsin be, Lennie! Olup bitenlerin hiçbirini hatırlamazsın da, ağzımdan çıkan her sözü hatırlarsın.\" \"Söylemeyecek misin o lafları?\" George silkindi, sonra isteksiz bir edayla başladı: Tatsız monoton bir sesle söylüyordu: \"Kendime iş bulurdum, hiçbir zaman başım derde girmezdi.\" Durdu. \"Devam et,\" dedi Lennie."
  },
  {
    "id": 497,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Başka ne var? Ha, \"kumru gibi sevdalı\" yanını unuttum! Olga güldü[;] örgüsünü hemen yere bırakarak Andrey[']e koştu[;] kollarını boynuna doladı. Bir an gözlerinin içine baktı, sonra başını omzuna dayayarak utangaç ve zavallı gülümsemesi, perişanlığı gözünün önüne geldi, yüreği burkuldu; derin bir acıma duygusu sardı içini. Kollarını kocasının boynundan ayırmadan: — Onu bırakmayacaksın değil mi?"
  },
  {
    "id": 498,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Aynı gece Bazarov, Arkadiy’e şöyle diyordu: “Biliyor musun? Aklıma şahane bir fikir geldi. Baban bugün soylu bir akrabanızdan davet aldığını söylüyordu; seninle atlayıp [...]’ya gidelim[.] Bu beyefendi zaten seni de çağırıyormuş. Baksana burada hava nasıl oldu; dolaşır, şehri gezeriz."
  },
  {
    "id": 499,
    "source": "George Orwell - 1984",
    "text": "Winston kansı Katha­ rine'den kurtulacak olsa bile, evlenmelerini onaylayacak bir kurul çıkmazdı. Rüyasında görse inanmazdı. [\"]Karın nasıl bir kadındı[?]\" dedi Julia; \"Nasıl anlatayım [...] Yenisöylem'de iyiniyetküpü diye bir sözcük vardır, bilir misin? Doğuştan eski kafalı, aklın­ dan kötülük geçmeyen biri işte.\" \"Hayır, o sözcüğü bilmiyorum, ama otür insanları bilirim.\" Winston evlilik hikayesini anlatmaya başladıysa da, Julia hikayenin özünü biliyordu sanki."
  },
  {
    "id": 500,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "“Yoksa bu sizi kızdırıyor mu? Ne düşünüyorsunuz?” “Sizde gerçekten de var olan bu dikkatliliğin nereden geldiğini düşünüyorum. O kadar ürkek[,] o kadar güvensiz bir insansınız ki; herkesten uzak duruyorsunuz[...]” “Ben uzun süre yalnız yaşadım; ister istemez düşünmeye başlıyorsunuz. Sahiden herkesten uzak mı duruyorum?” Arkadiy, Katya’ya minnettarlıkla baktı. “Bütün bunlar çok güzel,” diye devam etti Arkadiy, “ama sizin durumunuzdaki insanlar, yani sizinki gibi malı mülkü olan demek istiyorum, bu yeteneğe pek ender olarak sahip olurlar; gerçek onlara, tıpkı çarlara olduğu gibi çok zor ulaşır.” “Ben zengin değilim ki zaten.” Arkadiy şaşırmıştı ve Katya’yı birden anlayamadı."
  },
  {
    "id": 501,
    "source": "Stefan Zweig - Satranç",
    "text": "Besbelli ruhumuz için yorucu ve tehlikeli olabilecek şeyleri kendiliğinden yok eden gizemli güçler var beynimizde, çünkü ne zaman geriye dönüp hücre günlerimi düşünmek istesem, sanki beynimde ışık sönüyordu; bana neler olduğunu düşünme yürekliliğini ancak haftalar sonra, işte tam burada, gemide buldum. Dostlarınıza neden öyle yakışıksız ve büyük olasılıkla anlaşılmaz davrandığımı şimdi anlayacaksınız. Dostlarınızı satranç tahtasının başında otururken gördüğümde[,] sigara salonunda tümüyle tesadüfen geziniyordum[;] elimde olmadan şaşkınlıktan ve korkudan çakıldım kaldım[.] Çünkü insanın gerçek bir satranç tahtasında, gerçek taşlarla satranç oynayabileceğini tümüyle unutmuştum, bu oyunda iki tane tümüyle farklı insanın capcanlı birbirlerinin karşısında oturduğunu unutmuştum. Bu oyuncuların orada oynadıkları şeyin, çaresizlik içinde aylarca kendime karşı oynamaya çalıştığım oyunun aynısı olduğunu anlamam için gerçekten de birkaç dakika geçmesi gerekti."
  },
  {
    "id": 502,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Salı günleri, her zamanki gibi okulu asıp dostum Ariovaldo’yu getirecek treni bekliyordum. Elinde, az sonra satacağımız şarkı sözleri destesiyle, merdivenden inişini görüyordum. İki torba dolusu şarkı sözü vardı yanında[;] yedekti bunlar[.] Aşağı yukarı her seferinde bütün şarkı sözlerini satardı, ikimizi de sevince boğardı bu… Okul bahçesinde, zaman buldukça bilye oynardık. Ben bu işin şampiyonu olarak tanınırdım."
  },
  {
    "id": 503,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Bakkal tütüncü o gün bile açıktı. Boşuna değildi ona bu adı vermeleri. İnsanlar oraya tulumlarıyla[,] eski terlikleri ve galoşlarıyla gelirdi[;] hiçbir zaman gerçek pabuçlarla değil[.] Kahve içmemiştim, yine de hiç aç değildim. Acım her türlü açlığın ötesindeydi."
  },
  {
    "id": 504,
    "source": "George Orwell - 1984",
    "text": "Julia, \"Tahtaku­ rusundan geçilmiyordur herhalde, ama kimin umurun­ da,\" dedi. Çift kişilik karyolalara, proleterlerin evleri dı­ şında, artık pek rastlanmıyordu. Winston[']ın[,] çocukluğun­ da böyle karyolalarda yattığı olmuştu; Julia ise anımsadı­ ğı kadarıyla böyle bir karyolada hiç yatmamıştı[.] Çok geçmeden uykuya daldılar. Winston uyandığın­ da saat dokuza geliyordu."
  },
  {
    "id": 505,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Bütün işler bitmedikçe teyzeme bir şey söylemeyelim; o zamana kadar da daha seyrek görüşelim. Peki, peki; haklısın. Bize pazarları gel[;] yani kabul günleri[;] bir de çarşamba diyelim[;] o gün başka konuk gelmez. Tiyatroda da görüşebiliriz. Bizim ne zaman gittiğimizi öğrenir, sen de gelirsin."
  },
  {
    "id": 506,
    "source": "George Orwell - 1984",
    "text": "Bu da hiçbir za­ man açıkça dile getirilmiyor, çocukluklarından başlaya­ rak dolaylı bir biçimde Parti üyelerinin beyinlerine işle- niyordu. Dahası, her iki cins için de sonuna kadar bakir kalmayı savunan Seks Karşıtı Gençlik Birliği gibi örgüt­ ler bile kurulmuştu. Bir gün tüın çocukların yapay döl­ lenme [(]Yenisöylem[']de yapdöl deniyordu[)] yoluyla dün­ yaya getirileceği ve kamu kurumlarında yetiştirileceği söyleniyordu. Winston, bunun, çok ciddiye bindirilmese de, Parti'nin genel ideolojisine uygun düştüğünün ayır­ dındaydı. Parti, cinsel içgüdüyü yok etmeye, yok edeme­ diğinde de çarpıtmaya ve karalamaya çalışıyordu."
  },
  {
    "id": 507,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "İşimi aksatıyorsunuz. Şimdi siz benden ayrılıp gidin, hiçbir tehlike yok.\" Mektup ve kağıt destelerini koltuğunun altına sıkıştırıp aceleyle uzaklaştı. Bir çeşit isyanla düşündüm[:] \"Ödlek!\" Gloria[']ya, bize gözkulak olacağına söz verdikten sonra, iki küçük çocuğu yol ortasına böylece bırakmak olacak şey miydi[?] Luis'in minik elini avucumda iyice sıkıp yürümeye devam ettim. Luis yorgunluk belirtileri göstermeye başlıyordu."
  },
  {
    "id": 508,
    "source": "Albert Camus - Yabancı",
    "text": "Az sonra mahallenin pırıl pırıl saçlı, kırmızı boyunbağlı delikanlıları geçti. Ceketlerinin belleri ipinceydi. Küçük ceplerine markalar işlenmişti[;] ayakkabılarının burnu dört köşeydi[.] Kentin göbeğindeki sinemaya gidiyorlardır, diye düşündüm. Onun için böyle erkenden yola düşmüşler, kahkahalar ata ata tramvaya doğru koşuyorlardı."
  },
  {
    "id": 509,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Vasiliy İvanoviç, ihtiyar karısına kıyamadı; gece vakti onu nasıl bir acının beklediğini söylemek istemedi. Bazarov ve Arkadiy, ertesi gün gittiler. Sabahtan itibaren evdeki herkes kederlenmişti[;] Anfisuşka’nın elinden tabaklar düşüyordu[;] Fedka bile şaşırmış ve sonunda çizmelerini çıkartmıştı[.] Vasiliy İvanoviç her zamankinden daha fazla koşuşturuyordu: Belli ki, kendi kendisine cesaret vermeye çalışıyor, yüksek sesle konuşuyor ve yürürken ayaklarını yere vuruyordu ama avurtları çökmüştü ve bakışları sürekli olarak oğlunun yakınlarında dolaşıyordu. Arina Vlasyevna sessizce ağlıyordu; eğer kocası sabah erkenden iki saat boyunca onu kandırmaya çalışmamış olsaydı tamamen şaşırır ve kendini kaybederdi."
  },
  {
    "id": 510,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Düşüncesizce laflar ettiğimi mi düşünüyorsunuz? Ama son günleri hatırlayın! Daha geçen gün başka her şeyin [(]anlayın beni[)], her şeyin, evet her şeyin iz bırakmadan çoktan yok olup gittiğine inanmayan siz değil miydiniz? Bana bakın, bir tek söz söyleyin... Seviyorum..."
  },
  {
    "id": 511,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "müzakere etmek: (Metinde) Öğrencilerin ders hazırlamaları için çalışmaları. müzakere etmek: Öğrencilerin ders hazırlamaları için çalışmaları. müzakkere[:] [(]Müzekkere[)] Bir iş hakkında üst makama sunulan yazı. müzmin: Uzun süreli. Nnadide: Az görülür, değerli."
  },
  {
    "id": 512,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Hiç de fazla değil, vallahi, Peresevetlov'un maaşını artırdılar; oysa benden daha az çalışıyor. Ama tabii benim kadar itibarı yok. [(]Alçakgönüllülükle gözlerini indirerek[)] Bakan geçen gün dairenin gözbebeği olduğumu söyledi. Yaşa be! Ama sekizden öğleye, öğleden beşe kadar mesai, akşam da evde çalışmak."
  },
  {
    "id": 513,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Onu telaşa düşürmekten korkuyor, daha doğrusu hiçbir ciddi meselenin, yaşadıkları rahat ve bulutsuz hayatı bozmasını istemiyordu. Çoktan beri artık Olga'nın onu sevmekle hata edip etmediği meselesi ortadan kalkmıştı. dehşet içinde düşünüyordu[:] [\"]Onu öpmeye niyetlendim; bu bir suç; hem de öyle ufak tefek bir suç değil[.] Öpmeye gelinceye kadar nice aşamalardan geçmek gerek: El sıkmalar, iltifatlar, mektuplar... Bütün bunlar da olmadı değil."
  },
  {
    "id": 514,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "“Pek güzel bir oğlun var,” dedi ve saate baktı, “aslında ben buraya çay için uğramıştım...” Pavel Petroviç kayıtsız bir ifade takınarak hemen odadan çıktı. “Kendiliğinden mi geldi?” diye sordu Nikolay Petroviç Feneçka’ya. “Kendiliklerinden[,] efendim; kapıyı vurdular ve girdiler.” “Peki[,] ya Arkaşa, bir daha sana uğramadı mı[?]” “Uğramadı. Müştemilata taşınsam mı acaba, Nikolay Petroviç?” “Neden taşınacakmışsın?” “İlk günlerde daha iyi olur sanıyorum.” “Ha... yır,” dedi Nikolay Petroviç duraklayarak ve alnını sildi."
  },
  {
    "id": 515,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Snowball, yel değirmeninin yapımının çok zor olacağını yadsımıyordu. Taşocağından taş taşınacak, duvarlar örülecek, yel değirmeninin kanatları yapılacak, sonra da dinamolar ve kablolar bulmak gerekecekti. [(]Snowball, bütün bu işlerin üstesinden nasıl gelineceğinden hiç söz etmiyordu[)] Yalnızca, bütün işlerin bir yıl içinde biteceğini ileri sürmekle yetiniyordu. Ona kalırsa, yel değirmeni tamamlandığında işler o kadar kolaylaşacaktı ki, hayvanların haftada yalnızca üç gün çalışmaları gerekecekti. Buna karşılık Napoléon, en büyük gereksinimlerinin besin üretimini artırmak olduğunu, yel değirmeniyle zaman yitirilirse herkesin açlıktan öleceğini öne sürüyordu."
  },
  {
    "id": 516,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Yemeklerini yalnız başına yerken, yanı başında iki köpek bekliyor; bir zamanlar oturma odasındaki cam dolapta duran Crown Derby yemek takımını kullanıyordu yalnızca. Bu arada öteki iki yıldönümünün yanı sıra, Napoléon'un doğumgününün de tören atışıyla kutlanacağı açıklanmıştı. Artık kimse Napoléon[']dan yalnızca [\"]Napoléon[\"] diye söz edemiyordu; resmî bir ağızla \"Önderimiz Napoléon Yoldaş\" denmesi gerekiyordu. Domuzlar ise ona Tüm Hayvanların Babası, İnsanların Korkulu Rüyası, Koyunların Koruyucu Meleği, Yavru Ördeklerin Can Dostu gibi unvanlar bulmakta birbirleriyle yarışıyorlardı. Squealer, gözlerinden yaşlar akarak yaptığı konuşmalarda, Napoléon'un ne kadar bilge, ne kadar iyi yürekli bir hayvan olduğundan, yeryüzündekitüm hayvanlara, özellikle de öteki çiftliklerde hâlâ cehaletin karanlığında köle gibi yaşayan mutsuz hayvanlara ne kadar derin bir sevgi beslediğinden dem vuruyordu."
  },
  {
    "id": 517,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Yevgeniy’le birlikte bir de konuğu gelmiş. Affedersiniz,” diye ekledi Arkadiy’e dönerek ve topuğunu hafifçe ötekine vurdu. “Anlıyorsunuz ya, kadınca bir zayıflık; ne yaparsınız, ana yüreği[...]” Oysa kendisi de dudaklarını ve kaşlarını oynamasınlar diye zor tutuyordu ve sakalı titriyordu[...] ama görünüşe bakılırsa kendisine hâkim olmak ve neredeyse kayıtsızmış gibi görünmek istiyordu. Arkadiy eğilerek selam verdi."
  },
  {
    "id": 518,
    "source": "George Orwell - 1984",
    "text": "\"Bugün­ lerde bunu anlayacak pek fazla insan kalmadı.\" Öksürdü. \"Ola ki almak isterseniz, size dört dolara veririm. Böyle bir parçanın sekiz sterlin ettiği günleri hatırlıyorum; se[-] kiz sterlin de ne ederdi şimdi çıkaramıyorum ama[,] çok paraydı. Bugün pek nadir bulundukları halde gerçek an­ tika parçalar kimin umurunda ki?\" Winston hemen dört doları verdi, gözünü alamadığı parçayı cebine attı. Ona çekici gelen, güzelliğinden çok, şimdikinden çok farklı bir çağa ait olduğu izlenimini uyandırmasıydı."
  },
  {
    "id": 519,
    "source": "İvan Gonçarov - Oblomov",
    "text": "II çekilmiş, işe girişmiş, gerçekten bir ev, bir de sermaye sahibi olmuştu... Dışarıya mal gönderen bir ticaret şirketinde hissedardı. Hep yolculuktaydı[;] şirket Belçika ve İngiltere[']ye birisini gönderecek olsa o giderdi; yeni bir plan hazırlamak ve uygulamak gerekse ona başvurulurdu[.] Ama Ştoltz gene de salonlara devam etmeye, bir de okumaya vakit bulurdu; nasıl bulurdu Tanrı bilir... Safkan bir İngiliz atı gibi baştan ayağa kemik, adale ve sinirdi."
  },
  {
    "id": 520,
    "source": "Albert Camus - Yabancı",
    "text": "Tabutun yanındaki hastabakıcı kalktı, kapıya doğru yürüdü. O sırada kapıcı: \"Frengisi var,\" dedi. Pek kavrayamadım[,] hastabakıcı kadına baktım[;] gözlerinin altından doğru başına dolanmış bir sargı vardı[.] Sargı burnunun hizasına doğru düzdü. Yüzünde sargının beyazlığından başka bir şey görünmüyordu."
  },
  {
    "id": 521,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Sonra, içimi çekerek ilave ettim: -Zannettiğinizden ziyade kuvvetliyim. Münasebetsiz bir şey yapmamdan korkmayın. Hayrullah Bey, bir parça düşündü; sonra başını sallayarak razı oldu: [-]Peki kızım, fakat şunu unutma ki, beyhude ah[-]û vahlar hastayı ürkütür. İnsan, ne kadar acı olursa olsun, bir mecburiyeti kabul ettikten sonra içine sükûn ve tevekkül geliyor. Hayrullah Bey’in omzuna başımı dayayarak odaya girerken, ne gönlümde heyecan, ne gözümde bir damla yaş vardı!"
  },
  {
    "id": 522,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "münasebetsizlik: Uygun olmayan, yakışıksız davranışlarda bulunma, saygısızlık yapma. münasip: Uygun, yerinde. münhal vukuunda[:] [(]Metinde[)] Boş kadro olduğunda. münhal: Boş olan, açık bulunan. münhasıran: Yalnız, özellikle."
  },
  {
    "id": 523,
    "source": "Stefan Zweig - Satranç",
    "text": "Gözümüzün önünde mat olmamak için teslim olmuştu. Olanaksız olan gerçekleşmişti, dünya şampiyonu, sayısız turnuvanın birincisi, yirmi yirmi beş yıldır satranç tahtasına elini sürmemiş, tanınmamış bir adamın karşısında havlu atmıştı. Adı sanı duyulmamış[,] kim olduğu bilinmeyen dostumuz yeryüzünün en güçlü satranç oyuncusunu herkesin ortasında yenmişti[!] O heyecanla farkında olmadan art arda ayağa kalkmışız. Sevincimizdeki ürkek havayı dağıtmak için bir şeyler söylememiz ya da yapmamız gerektiğini hissediyorduk hepimiz."
  },
  {
    "id": 524,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "(Ç.N.) 14. (Fr.) İyi akşamlar. [(]Ç[.]N.[)] XI Yarım saat sonra Nikolay Petroviç bahçeye, çok sevdiği kameriyeye gitti. Kederli düşüncelere kapıldı. Oğluyla ne kadar farklı olduklarını ilk kez açıkça anlamıştı; bu farklılığın her gün daha da artacağını seziyordu."
  },
  {
    "id": 525,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Herhalde kalbini kıracak bir şey. Böyle konuşmaya başladı mı insanın ağlayacağı geliyor! \" diye düşünerek en alçak sesiyle: [—] Vallahi, İlya İlyiç, dedi; ben bir şey söylemedim; sadece[...] Dur, dedi. Yaptığını gerçekten anlamıyor musun?"
  },
  {
    "id": 526,
    "source": "Albert Camus - Yabancı",
    "text": "Bugüne kadar kimse, benimle pek öyle ilgilenmiş değildi. Bütün bu telaşa benim neden olduğumu anlamak için kendimi zorlamam gerekti. Jandarmaya, [\"]Amma da kalabalık ha[!][\"] dedim. \"Gazeteler yüzünden,\" dedi ve bana jüri üyelerinin oturdukları yerin alt kısmındaki masanın yanı başında duran bir sürü insanı göstererek: \"İşte onlar!\" diye ekledi. \"Kimler?\" diye sordum."
  },
  {
    "id": 527,
    "source": "Stefan Zweig - Satranç",
    "text": "‘Elbette,’ diye alçak sesle ekledi, ‘bunu efendilere bildirmeyeceğim, yoksa sizi eninde sonunda yine oraya götürürler. Bana güvenin, elimden geleni yapacağım.’ Bu yardımsever doktorun bana işkence yapanlara benimle ilgili ne anlattığını bilmiyorum. Her ne olursa olsun[,] ulaşmak istediği şeye ulaştı[:] Serbest bırakıldım. Kafamın iyi çalışmadığını söylemiş olabilirdi ya da belki de bu arada Gestapo için önemsiz olmuştum, çünkü Hitler o süre içinde Böhmen’i ele geçirmişti ve böylece Avusturya’nın işgali tamamlanmıştı. Yurdumuzu on dört gün içinde terk edeceğime ilişkin belgeyi imzalamam gerekiyordu yalnızca ve bu on dört gün binlerce formaliteyle dolu geçti, günümüzde eski bir dünya yurttaşının yurtdışına çıkarken uğraşması gereken formaliteler gibi –askerlik belgeleri, polis, vergi, pasaport, vize, sağlık karnesi–, geçmiş hakkında fazla kafa yoracak zamanım olmadı."
  },
  {
    "id": 528,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "“Bunu garanti ederim.” “Nasıl?” “Kellemi koyarım.” “Bundan iyisi can sağlığı. Hadi, gidelim.” 16. [(]Fr.[)] Enerji, bir devlet adamının en birinci niteliğidir. (Ç.N.) 17. (İng.) En beğenilen."
  },
  {
    "id": 529,
    "source": "Albert Camus - Yabancı",
    "text": "Çünkü salon sessizleşmişti. Gelip sağımdaki hükümlüyü de götürdüler. Karısı, sanki artık bağıra bağıra konuşmaya gerek kalmadığını fark etmiyormuş gibi, sesini alçaltmadan, [\"]Kendine iyi bak, dikkatli ol[!]\" dedi. Sonra, sıra bana geldi. Marie, eliyle öpücük yolladı."
  },
  {
    "id": 530,
    "source": "Stefan Zweig - Satranç",
    "text": "Ona candan teşekkür ettim ve yanından ayrıldım. Ama daha güvertenin öbür ucuna varmamıştım ki, arkamdan geldi ve gözle görülür bir sinirle, hatta biraz da kekeleyerek ekledi: “Bir şey daha! Beylere önceden bildirin ki[,] sonra terbiyesizlik ediyor gibi görünmeyeyim; yalnızca tek bir oyun oynarım[...] eski bir hesabın altına konan bitiş çizgisinden başka bir şey olmayacak bu, kesin bir bitiriş; yeni bir başlangıç değil... Geriye dönüp baktığımda yalnızca dehşetle anımsadığım bu tutkulu, ateşli oyuna ikinci kez kapılmak istemiyorum..."
  },
  {
    "id": 531,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Ben de seviyorum. Şüphesiz, karşılığı da var: Grande gourde. Biraz evvel onun bana söylediği gourde kelimesini ben bir de başına “kocaman” sıfatını takarak ona iade ettiğim halde[:] “Sensin; o senin adındır[!]” demek bile aklına gelmiyordu[.] Demek ki yalana başlar başlamaz ona kendimi tanıtmaya muvaffak olmuştum, ne saadet! Mişel, şimdi beni daha büyük bir muhabbetle kollarında tutuyordu: -Anlat Feride..."
  },
  {
    "id": 532,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Para aynı yerde duruyordu. “Şunu düşünüyordum Zezé,” diye ekledi: “Bugünden sonra bozukluklar sende kalabilir. Hem biz düettocu’luk yapmıyor muyuz[?]” “Düettocu ne demek[?]” “İki kişinin birlikte şarkı söylemesi.” “Öyleyse bir maria[-]mole6 isteyebilirim?” “Ne istersen yap arkadaş. Para senin.” “Teşekkür ederim, ‘arkadaş!’” Taklidime güldü. Pastamı yerken ona bakıyordum."
  },
  {
    "id": 533,
    "source": "Michael Ende - Momo",
    "text": "yeniden başını salladı. Yılan ıslığı gibi bir sesle fısıldadı birisi: \"Zamanın ne olduğunu öğrenmiş bu!\" \"Demek ki, sözünü ettiğimiz kişiyi görmüş\" dedi ilk konuşan adam. Sonra yüksek sesle sordu: \"Hora Usta[']yı tanıyor musun[?]\" \"Gerçekten yanına gittin mi?\" \"Öyleyse saat çiçeklerini biliyorsun?\" Uzunca bir sessizlik oldu. Yeniden konuşmaya başladığında, ses bambaşka bir yönden geldi: \"Arkadaşlarını seversin, değil mi?\" \"Onları bizim elimizden kurtarmak istersin herhalde?\" \"İstesen bunu yapabilirsin.\" \"Arkadaşlarını kurtarman ufak bir gayretine bağlı. Sen bize yardım et, biz de sana yardım edelim."
  },
  {
    "id": 534,
    "source": "Michael Ende - Momo",
    "text": "Sizlere de ayıracak zamanları yok. Bir şey fark ediyor musunuz? Çok garip, b[-]ü[-]t-ü-n b-u-n-l-a-r i-ç- i-n artık zamanları yok!\" Gigi gözlerini kıstı, sonra devam etti: \"Geçenlerde, eski bir tanıdığıma rastladım kentte. Berber Fusi'ye. Uzun zamandır görmemiştim onu."
  },
  {
    "id": 535,
    "source": "Albert Camus - Yabancı",
    "text": "Raymond'un suratı allak bullak oldu, ama o an ağzını açmadı. Sonra, yitik bir sesle, \"İzmaritimi yerden alabilir miyim?\" diye sordu. Polis, \"Al[!]\" dedi ve ekledi: \"Ama polisin oyuncak olmadığını bir daha unutayım deme[!]\" Bu sırada kadın ağlıyor, \"Beni patakladı, pezevenk herif, ne olacak!\" diye tekrarlıyordu. Raymond da, \"Polis efendi, bir adama pezevenk demenin yasada yeri var mı?\" diye sordu. Ama polis, \"Tut çeneni be!\" diye bağırdı."
  },
  {
    "id": 536,
    "source": "Stefan Zweig - Satranç",
    "text": "Çok fazla şeyi yadsırsam da kendime zarar verirdim. Ama en kötüsü, sorgulama değildi. En kötüsü[,] sorgulamadan sonra hiçliğime geri dönmekti; aynı masanın[,] aynı yatağın, aynı leğenin, aynı duvar kâğıdının olduğu aynı odaya. Çünkü yalnız kalır kalmaz, hangi yanıtı verseydim en akıllıca olurdu diye ve belki düşüncesizce bir sözle uyandırmış olabileceğim kuşkuyu gidermek için gelecek sefere ne söylemeliyim diye uzun uzun düşünüyordum. Soruşturma yargıcına söylemiş olduğum her sözcüğü düşünüyor, gözden geçiriyor, ölçüp tartıyordum, onların sorduğu her soruyu, benim verdiğim her yanıtı kafamda tekrarlıyordum, anlattıklarım hakkında tutanağa neler yazmış olabileceklerini kestirmeye çalışıyordum, ama bunu hiçbir zaman öğrenemeyeceğimi biliyordum."
  },
  {
    "id": 537,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Fanny’ye başlamıştık ki, bir felaket oldu: Şemsiyesinin altında kaskatı ve yüzü pudradan bembeyaz, Bayan Maria de Penha tam karşıdan geliyordu. Fanny’yi işitince durdu. Bay Ariovaldo felaketi sezmişti[;] şarkıya devam ederken yürümem için dirseğiyle beni dürttü[.] Ama boşuna! Fanny’ye öyle dalmıştım ki hiçbir şey fark etmedim."
  },
  {
    "id": 538,
    "source": "İvan Gonçarov - Oblomov",
    "text": "diye sorar; babası soğukkanlılıkla: — Yine Andrey'i getiriyorlar herhalde, diye cevap verirdi. Derken kapılar iki yana açılır; kadın, çoluk çocuk, bir köylü kalabalığı bahçeye dolardı. Gerçekten Andrey[']i getirirlerdi; ama ne halde; yalınayak, elbiseler yırtılmış, kendinin veya başka bir çocuğun ağzı burnu kan içinde[...] Andryuşa yarım gün için dışarı gitti mi annesinin ödü kopar, kocasının açık emri olmadıkça oğlunu hiç yanından ayırmazdı. Oğlunu yıkar, üstünü başını değiştirir, Andryuşa yarım gün için tertemiz bir küçük bey oluverirdi."
  },
  {
    "id": 539,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Tokalaşalım.” Dostluğumuzu ölünceye kadar mühürlemek için elimi avuçlarına aldı. * * * Glória’yı inandırmak pek güç olmadı. “Ama Zezé, haftada bir gün derslerin ne olacak[?]” Ona defterimi gösterdim; ödevlerimin hepsi temiz yapılmış, iyi yazılmıştı[.] Notlar çok iyiydi. Aritmetik defterim de öyleydi."
  },
  {
    "id": 540,
    "source": "Stefan Zweig - Satranç",
    "text": "Ama daha güvertenin öbür ucuna varmamıştım ki, arkamdan geldi ve gözle görülür bir sinirle, hatta biraz da kekeleyerek ekledi: “Bir şey daha! Beylere önceden bildirin ki, sonra terbiyesizlik ediyor gibi görünmeyeyim; yalnızca tek bir oyun oynarım... eski bir hesabın altına konan bitiş çizgisinden başka bir şey olmayacak bu[,] kesin bir bitiriş; yeni bir başlangıç değil[...] Geriye dönüp baktığımda yalnızca dehşetle anımsadığım bu tutkulu, ateşli oyuna ikinci kez kapılmak istemiyorum... üstelik..."
  },
  {
    "id": 541,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Aman, karım görmesin. Tanrı saklasın! Artık çayır ıslaktır[;] hava kararmıştır[;] tarlalar üstüne sis bir deniz gibi çökmüştür; atlar tepinmeye başlar; dönme vakti gelmiştir. Evin pencerelerinde ışıklar yanmış; beş uşak mutfakta çalışıyor: Mantar kızartması dolu bir tava, köfteler, çilekler... O sırada müzik de başlar..."
  },
  {
    "id": 542,
    "source": "George Orwell - 1984",
    "text": "Birini seviyorsan gerçekten severdin, verecek başka hiçbir şeyin yoksa bile sevgin yeterdi. Verecekçi­ kolata kalmadığında, annesi çocuğu sımsıkı göğsüne bas­ tırmıştı. Bunun hiçbir yaran yoktu, hiçbir şeyi değiştir[-] 1 82 miyordu, çikolatayı geri getirmiyordu, çocuğun ya da kendisinin ölümünü önlemiyordu; ama böylesi ona do­ ğal geliyordu[.] Mültecilerle dolu gemideki kadın da, mer­ milerden korumayacağını bile bile, küçük çocuğu kolla­ rının arasına alınıştı. Parti'nin yaptığı en korkunç şeyler­ den biri de, sizi içgüdülerin, duyguların hiçbir işe yara­ mayacağına inandırmak, ama aynı zamanda sizi maddi dünya karşısında tümden güçsüz kılmaktı."
  },
  {
    "id": 543,
    "source": "Albert Camus - Yabancı",
    "text": "Avukatım, duruşmaların iki üç günden fazla sürmeyeceğini bana kesin olarak söylemiş ve \"Zaten mahkeme nasıl olsa acele edecek, çünkü, sizin dava dönemin en önemlisi değil. Sizinkinin hemen ardından, babasını öldüren birini yargılayacaklar,\" diye eklemişti. Sabahın yedi buçuğunda gelip beni aldılar[;] cezaevinin arabasıyla Adliye Sarayına götürdüler[,] iki jandarma beni loş kokulu bir odaya soktu[.] Bir kapının yanına oturup bekledik. Kapının ardından sesler, çağrışmalar, sandalye takırtıları işitiliyordu."
  },
  {
    "id": 544,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Nikolay Petroviç’e yavaş yavaş alışmaya başlamıştı ama hâlâ onun yanındayken ürkek davranıyordu ki, birden annesi Arina koleradan ölüverdi. Zavallı Feneçka nereye gidecekti? Annesinden düzen sevgisini[,] sağduyuyu ve ağırbaşlılığı miras almıştı; fakat öyle genç[,] öyle yalnızdı ki; Nikolay Petroviç de öyle iyi yürekli ve alçakgönüllü bir insandı[...] Sonrasını anlatmaya ne gerek var... “Demek ağabeyim yanına geldi?” diye soruyordu Nikolay Petroviç."
  },
  {
    "id": 545,
    "source": "Albert Camus - Yabancı",
    "text": "Hem hanımefendi çalışmazdı da. Ama verdiğim paranın yetişmediğini, onunla geçinemediğini söylerdi. Ben de derdim[:] [']Yarım gün olsun niçin çalışmıyorsun[?] Ivır zıvır şeylerin yükünü üzerimden almış olursun. Sana bu ay üst-baş aldım."
  },
  {
    "id": 546,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Gidecek başka yeri olmadığı için, bir meyhanede oturup bütün parasını harcayanlar gibi değiliz biz. Ötekiler kodese girecek olsalar, geberip gitseler de kimsenin umurunda olmaz. Ama biz öyle değiliz.[\"] Lennie atıldı[:] \"Biz öyle değiliz[!] Niçin öyle değiliz? Çünkü..."
  },
  {
    "id": 547,
    "source": "George Orwell - 1984",
    "text": "(Yazarın notu) şındaki bu barikatlara açılan sokaklarda bile siyah üni­ formalı, goril suratlı muhafızlar ellerinde coplarıyla kol geziyorlardı. Winston birden geri döndü. Yüzüne dingin, iyimser bir ifade oturtmuştu[;] tele[-]ekrana bakarken böylesi daha uygundu[.] Odayı geçip küçük mutfağa girdi. Bakanlıktan günün bu saatinde ayrılmakla kantindeki öğle yemeğini feda etmişti, üstelik mutfakta ertesi günün kahvaltısına saklanması gereken bir parça esmer ekmekten başka bir şey olmadığını biliyordu."
  },
  {
    "id": 548,
    "source": "Albert Camus - Yabancı",
    "text": "Bana, \"Çok mu para isterler?\" diye sordu. \"Bilmem,\" dedim. Bunun üzerine köpürdü[:] \"Bu mundar hayvan için bir de para mı vereceğim[?] Gebersin kâfir!\" Köpeğe küfürler savurmaya başladı. Raymond gülerek eve girdi."
  },
  {
    "id": 549,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Din-dinha içeri girdiğimi görmedi. Gazetelerdeki ilanları okumak için gözlüğünü takmış olmalıydı. Evin çevresini dolandım ve hintarmutlarına baktım[;] bir şey bulamadım[.] Derken hamağında horlayan Edmundo Dayı’yı fark ettim. Hamağı, çitle bir portakal ağacının arasına asmıştı."
  },
  {
    "id": 550,
    "source": "Stefan Zweig - Satranç",
    "text": "Dr. B., Czentovic’in ata uzandığını görünce, sıçramak üzere olan bir kedi gibi büzüldü. Bütün bedeni titremeye başladı ve Czentovic atı oynar oynamaz[,] veziri sertçe ileri sürdü, zafer kazanmış gibi, “İşte[!] Tamamdır!” diye bağırdı, geriye yaslandı, kollarını göğsünün üzerinde kavuşturdu ve meydan okuyan bakışlarını Czentovic’e dikti. Ansızın gözbebeğinde bir ışık parladı."
  },
  {
    "id": 551,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Bizim evde herkes, konuşma kendisini ilgilendirmediğinde onun böyle davrandığını söylerdi. Ama bana karşı davranışında böyle bir şey söz konusu değildi. Hem [(]bu deyimi ne kadar da çok seviyordum ayrıca[)] bana karşı hiçbir zaman tam ‘sağır’ olmazdı[.] Gömleğinin kolunu çektim ve bir kez daha, siyah-beyaz kareli pantolon askısının gerçekten güzel olduğunu düşündüm. “Ha!"
  },
  {
    "id": 552,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "“Heine’yi sevmem,” diye konuşmaya başladı Katya, gözleriyle Arkadiy’in elinde tuttuğu kitabı işaret ederek, “ne güldüğü ne de ağladığı zaman: Ancak düşünceli ve mahzun olduğu zaman severim.” “Bense güldüğü zamanlar severim,” dedi Arkadiy. “Bu, alaycı huyunuzun sizde bıraktığı eski izler yüzünden... [(]“Eski izler[!]” diye geçirdi içinden Arkadiy[.] “Bazarov bunu işitseydi keşke!”) Bekleyin siz, değiştireceğiz sizi.” “Beni kim değiştirecek? Siz mi?” “Kim mi?"
  },
  {
    "id": 553,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Yani her şeyi inkâr ediyorsunuz, öyle mi? Diyelim ki, öyle olsun. Şu halde siz bir tek bilime inanıyorsunuz[,] öyle değil mi[?]” “Hiçbir şeye inanmadığımı size daha önce söylemiştim; hem bilim nedir ki, genel anlamda bilim nasıl bir şey ki[?] Birtakım zanaatlar, sıfatlar gibi bilim dalları var ama genel anlamda bilim asla yoktur.” “Çok iyi, efendim. Peki, insanların günlük yaşamında kabul edilmiş olan başka kuralları da aynı şekilde olumsuz mu karşılıyorsunuz?” “Nedir bu, sorgu mu?” Pavel Petroviç hafifçe sarardı..."
  },
  {
    "id": 554,
    "source": "Michael Ende - Momo",
    "text": "\"Bu böyle olmaz canım! Size yardımcı olmak istiyorum, ama böyle ifade alamayız. Önce siz bana kendi adınızı söyleyin.[\"] \"Beppo.\" \"Devamı ne[?]\" \"Beppo Çöpçü.\" \"İşinizi değil, soyadınızı soruyorum[!]\" \"İkisi de aynı\" dedi Beppo sabırla. Polis kalemi elinden atıp elleriyle yüzünü kapadı. \"Hey Allah'ım!\" diye umutsuzca söylendi."
  },
  {
    "id": 555,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Tavuklar pencere eşiklerine tünediler, güvercinler çatı kirişlerine kondular, koyunlarla inekler domuzların arkasına uzanıp geviş getirmeye koyuldular. Boxer ve Clover adlı iki araba atı içeri birlikte girdiler; samanların arasında göremeyecekleri kadar küçük bir hayvan bulunabileceği kaygısıyla ağır ağır yürüyor, kıllı, kocaman ayaklarını yere usulca basıyorlardı. Clover[,] orta yaşlı sayılabilecek, iriyarı, anaç bir kısraktı[;] dördüncü tayını doğurduktan sonra eski endamını bir türlü bulamamıştı. Boxer ise neredeyse iki metre yüksekliğinde, iki beygir gücünde, çok iri bir hayvandı. Alnından burnunun üstüne doğru inen akıtma onu biraz ahmak gösteriyordu; gerçekten de çiftlikteki hayvanların en zekisi sayılmazdı, ama sağlam kişiliği ve akıllara durgunluk veren çalışkanlığıyla herkesin saygısını kazanmıştı."
  },
  {
    "id": 556,
    "source": "Albert Camus - Yabancı",
    "text": "Şunu da belirtmek zorundaydım: o zamana kadar bu sorunlar üzerinde vardığım düşünceler doğru değildi. Uzun zaman –neden olduğunu bilmeden– sanırdım ki, giyotine gitmek için, bir idam tahtasına çıkmak, merdivenleri tırmanmak yeterliydi. Sanırım bunun nedeni 1789 devrimiydi[;] yani bu sorunlar üzerinde bana öğrettikleri ya da gösterdikleri şeylerdi[.] Ama bir sabah, gürültülü bir idam dolayısıyla gazetelerin bastığı bir fotoğrafı anımsayıverdim. Aslında, idam makinesini düpedüz yere koymuşlardı."
  },
  {
    "id": 557,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Bazen ne kadar sevinçli, canlı ve taze uyanırdı. İçinde bir şeyler oynuyor, kaynıyor, bir şeytan dürtüyor gibi olurdu. Şeytan derdi ki ona: [—] Çık şu dama; bin arabaya da sür şu çayır biçilen yerlere, atla şu çitin üzerinden; köyün köpeklerini kızıştır[...] Bazen de durup dururken köyün yolundan aşağı koşmak, kırlara gitmek, kayın ormanından geçmek, üç sıçrayışta hendeğin dibine varmak ya da köy çocuklarıyla kartopunda boy ölçüşmek isterdi. Şeytan onu böyle dürter durur, İlya İlyiç karşı koyabildiği kadar koyar; sonunda dayanamayarak kış ortasında paltosunu bile giymeden avluya atılır; iki elinde kartopu, büyük kapıdan çıkar, çocuklara doğru koşardı."
  },
  {
    "id": 558,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Postacı soyan birkaç serseri ile jandarma arasında bir çarpışma olmuş. Jandarmalardan biri ölmüş, öteki ağır yaralı olarak Zeyniler’in misafir odasına getirilmiş. Öğleye doğruydu, küçük Vehbi, soluk soluğa mektebe geldi, beni elimden yakalayarak: [-]Kız hocanım, çabuk zarfını [(]çarşaf olacak[)] giyin, gel be. Seni misafir odasına çağırıyorlar, dedi. Kim çağırıyor?"
  },
  {
    "id": 559,
    "source": "George Orwell - 1984",
    "text": ".. Bir gün kalabalık bir caddede yürürken, biraz ileride­ ki bir sokaktan yüzlerce kişinin haykırışları -kadın bağır­ tılangelmişti kulağına. Öfke ve umarşızlık dolu kor­ kunç bir bağırtı kopuyordu; bir çan sesiÕin yankılanışının uzayıp gitmesi gibi, [\"]Uuuu[!][\"] diye derinden yükselen bir uğultu. Winston'ın yüreği yerinden oynamıştı. Başladı!"
  },
  {
    "id": 560,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Çiy düşmüş çimenlerin üzerinde yuvarlanıyor, tatlı yaz otlarını koparıp yutuyor, kara toprağı eşeleyip havaya savuruyor, toprağın güzelim kokusunu içlerine çekiyorlardı. Sonra, çiftliği baştan başa dolaşıp denetimden geçirdiler; tarlayı, otlağı, meyve bahçesini, gölcüğü, koruyu dilleri tutulmuşçasına, hayran hayran izlemekten alamadılar kendilerini. Sanki buraları daha önce hiç görmemişlerdi[;] bütün bunların artık kendilerinin olduğuna hâlâ inanamıyorlardı[.] Daha sonra, sıra olup çiftlik binalarına döndüler; çiftlik evinin kapısının önüne geldiklerinde, soluklarını tutup durdular. Bu ev de onlarındı artık, ama içeri girmeye korkuyorlardı."
  },
  {
    "id": 561,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "* * * Öğleden sonra Bay Ariovaldo ‘paraları’ sayıyordu. “Elimdekilerin hepsini sattım, Zezé. Haklısın[;] bana uğur getiriyorsun[.]” Bayan Maria de Penha’yı düşündüm yine. “Bir şey yapar mı?” “Hiçbir şey yapamaz, Zezé. Çok çok, papazla konuşur."
  },
  {
    "id": 562,
    "source": "Stefan Zweig - Satranç",
    "text": "En sonunda, izin verilen düşünme süresi tam bitmek üzereyken hamleyi yapmaya karar verdik. McConnor piyonu son kareye sürmek için elini uzatmıştı ki, birisi kolundan yakaladı, alçak sesle ve heyecanla fısıldadı: “Tanrı aşkına! Sakın ha[!]” Elimizde olmadan hepimiz dönüp baktık[.] Kırk beş yaşlarında bir beydi konuşan, neredeyse tebeşir kadar beyaz olanince uzun, sert yüzü daha önce güvertede gözüme çarpmıştı, bütün dikkatimizi hamleye yönelttiğimiz son dakikalarda yanımıza gelmiş olmalıydı. Ona baktığımızı ayrımsayarak aceleyle ekledi: “Şimdi veziri alırsanız, fili c1’e sürüp piyonunuzu kırar, siz de atınızı geri çekersiniz."
  },
  {
    "id": 563,
    "source": "George Orwell - 1984",
    "text": "Bir­ liğiyle Berkhamsted yolunda yürüyüşe çıktıklarında, iki kızı daha yanına alıp yürüyüş kolundan ayrılmış, akşama kadar tuhaf bir adamı izlemiş. Herifin ardına düşmüşler, ormanda iki saat peşinden gitmişler, Arnersham'a var­ dıklarında da devriyelere teslim etmişler.\" Winston, şaşkınlık içinde, \"Ama neden böyle yap­ mışlar ki?\" dedi. Parsons böbürlenerek devam etti[:] [\"]Benim kız[,] adamın düşman ajanı olduğunu düşün­ müş; ne bileyim, paraşütle indirilmiş olabilir demiştir belki de kendi kendine. Ama işin asıl ilginç yariı başka, oğlum. Kızı kuşkulandıran ne olmuş, biliyor musun?"
  },
  {
    "id": 564,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Bu defa, kahkahalar Müdür Efendi’ye sirayet etti. Fakat, onun gülüşü de herkesten başka türlü idi. “Ha[,] ha, ha” diye gülerken [(]h[)] harflerini, yine mektebe gelmiş çocuklara alfabe talim eder gibi tane tane döküyordu. Amma tuhaf iş ha, Allah’tan ha, Allah’tan ha? Allah da verdi mi verir."
  },
  {
    "id": 565,
    "source": "Michael Ende - Momo",
    "text": "Dayanmıştı. Şimdi kendinden emindi, korkmuyordu. Dünyadaki herhangi bir gücün ona bir şey yapmasından ürkmüyordu[;] daha doğrusu kendisine ne yapacakları umurunda bile değildi[.] Şimdi duman adamlarla karşılaşmayı o istiyordu. Ne pahasına olursa olsun, istiyordu bunu."
  },
  {
    "id": 566,
    "source": "Stefan Zweig - Satranç",
    "text": "Her hamleyi, her karşı hücumu beş-altı hamle önceden hesapladı. Böyle bir şeyi kimse rastgele yapamaz. Bu kesinlikle olamaz[,] öyle değil mi[?]” Son soruda McConnor elinde olmadan Czentovic’e dönmüştü. Ama dünya şampiyonu hiç istifini bozmadı. “Bu konuda yorum yapamam."
  },
  {
    "id": 567,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Yapma öyle şeyler.\" Kadın, gözleri dehşetten dönmüş bir halde debelenmeye devam ediyordu. O zaman Lennie onu sarstı, fena halde kızmıştı. Tartaklayarak[:] [\"]Bağırmasana öyle[!]\" dedi. Kadının vücudu bir balık gibi uzandı. sonra hiç kımıldamadı."
  },
  {
    "id": 568,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "\"Muriel,\" dedi, \"Dördüncü Emir'i oku bakayım bana. Yatakta asla yatılmaması konusunda bir şey diyor mu?\" Yazıyı güçbela okuyabilen Muriel, \"Hiçbir hayvan çarşaf serili yatakta yatmayacak yazıyor,\" dedi. Biraz tuhaftı[;] Clover Dördüncü Emir[']de çarşaftan söz edildiğini hiç anımsamıyordu[;] ama madem ki duvarda yazıyordu, o zaman elden bir şey gelmezdi. O sırada yanında iki üç köpekle oradan geçmekte olan Squealer, konuyu yerli yerine oturtmakta gecikmedi. \"Yoldaşlar,\" dedi."
  },
  {
    "id": 569,
    "source": "İvan Gonçarov - Oblomov",
    "text": "İlya İlyiç bazen kendini, değil Napolyon'un, Yeruslan Lazareviç'in bile eline su dökemeyeceği yenilmez bir cihangir olarak görmekten hoşlanırdı. Bir savaş tasarlar; bir neden icat ederek Afrikalılara Avrupa'yı istila ettirir; yeni bir Haçlı Seferi kurar, kendisi de savaşa katılır; ulusların kaderini değiştirir; şehirleri yağma eder; canlar bağışlar, öç alır, iyilik, mertlik mucizeleri yaratırdı. Bazen de bir fikir adamı ya da büyük bir sanatçı olurdu[:] Herkes ona tapar; göründüğü yerde alkışlar kopar; geçiyor[!]\" diye bağrışırdı. İçine kasvet çöktüğü, acılar içinde kıvrandığı zamanlar da olurdu; sağa sola döner, yüzükoyun yatardı. Bazen bu acılar büsbütün artar, içini fenalık basardı."
  },
  {
    "id": 570,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Whymper, Napoléon'a bunları satmasını salık vermişti; Bay Pilkington da, Bay Frederick de keresteleri almaya can atıyorlardı, ama Napoléon hangisine satacağına bir türlü karar veremiyordu. Frederick'le anlaşır gibi olduğunda Snowball'un Foxwood Çiftliği'nde saklandığı haberi geliyor, Pilkington'a yönelir gibi olduğunda Snowball'un Pinchfield Çiftliğinde gizlendiği söylentisi yayılıyordu. İlkbaharın ilk günleriydi[;] ansızın duyulan bir haber ortalığı birbirine kattı[:] Snowball hava karardıktan sonra gizlice çiftliğe geliyordu[!] Hayvanlar öylesine tedirgin olmuşlardı ki, geceleri gözlerine uyku girmiyordu. Söylenenlere bakılırsa, Snowball her gece karanlıktan yararlanarak çiftliğe giriyor, yapmadığı uğursuzluk kalmıyordu."
  },
  {
    "id": 571,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Boxer'a herkes hayrandı. Jones'un zamanında da yorulmak nedir bilmeyen bir hayvan olan Boxer, şimdi neredeyse üç beygir gücünde çalışıyordu; öyle günler oluyordu ki, çiftliğin işleri tümden onun güçlü omuzlarına yıkılıyordu. İşin en ağır olduğu yerde her zaman o vardı[;] sabahtan akşama kadardur durak bilmeden uğraş veriyordu[.] Kendisini sabahları ötekilerden yarım saat önce uyandırması için genç horozlardan biriyle anlaşmıştı; gündelik işler başlayana kadar, en çok gerek duyulan yere koşuyor, orada gönüllü olarak çalışıyordu. Çalışmayı kendisine yasa edinmişti sanki: Bir sorun, bir terslik çıkmayagörsün, o saat, \"Daha da sıkı çalışacağım!\" deyip işe koyuluyordu."
  },
  {
    "id": 572,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Şarkı, hayvanların yüreğine yabanıl bir coşku salmıştı. Reis daha sonuna gelmeden, hep birlikte söylemeye başlamışlardı. En aptalları bile şarkının ezgisini ve birkaç sözünü kapmıştı[;] domuzlar ve köpekler gibi akıllı olanlarıysa şarkının tümünü birkaç dakikada ezberlemişti[.] Birkaç denemeden sonra, hep bir ağızdan söyledikleri İngiltere'nin Hayvanları ile inledi çiftlik. İnekler böğürüyor, köpekler havlıyor, koyunlar meliyor, atlar kişniyor, ördekler vaklıyordu."
  },
  {
    "id": 573,
    "source": "Stefan Zweig - Satranç",
    "text": "Her şeyi söyleyeceğim! Her şeyi itiraf edeceğim! Belgelerin nerede olduğunu[,] paranın nerede saklandığını söyleyeceğim[!] Her şeyi söyleyeceğim, her şeyi!” Neyse ki beni duymadı. Belki de beni duymak istemiyordu."
  },
  {
    "id": 574,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Bir bakıma senin pederin sayılırız, dedi. Arkasında mor çizgili sarı atlastan bir yelek yahut gömlek vardı. [(]Yakasına bakarsan gömlek, ceplerine bakarsan yelek[)]. Sobanın yanına bir iskemle çekerek oturdu. Kocaman meşin kunduralarının at nalı şeklinde çivilerle süslü tabanlarını ateşe vererek benimle konuşmaya başladı."
  },
  {
    "id": 575,
    "source": "Albert Camus - Yabancı",
    "text": "Gürültüye karşın, hafif hafif konuşup anlaşabiliyorlardı. Ta dipten yükselen mırıltıları, başlarının üzerinde birbiriyle çarpışan konuşmalarla sanki bir koro oluşturuyordu. Bunları bir anda fark ettim; sonra[,] Marie[']ye doğru ilerledim. O, parmaklığa yapışmış, bütün varlığıyla gülüyordu. Gözüme çok güzel göründü, ama bunu bir türlü söyleyemedim ona."
  },
  {
    "id": 576,
    "source": "Albert Camus - Yabancı",
    "text": "O zaman köpeği çekiştirmek işi ihtiyara düşerdi. Köpek bütün bunları unutuverip sahibini tekrar çekiştirmeye başlar, yeniden dayaklar yer, hakaretlere uğrardı. O zaman ikisi de kaldırımlar üzerinde dururlar[;] köpek dehşet[,] adam da kin ve nefret içinde birbirlerine bakışırlardı[.] Her gün bu böyledir. Köpek işemek istese, ihtiyar vakit bırakmaz, ipinden çeker; o da ardı sıra bir dizi damlacıklar bırakır dururdu."
  },
  {
    "id": 577,
    "source": "Stefan Zweig - Satranç",
    "text": "Ve birden bakışlarım bir şeye takılıp kaldı. Paltolardan birinin yan cebinin biraz şişmiş olduğunu ayrımsadım. Yaklaştım ve kabarıklığın dikdörtgen biçiminden, bu biraz şişmiş cebin içinde ne olduğunu anladım[:] bir kitap[!] Dizlerim titremeye başladı: BİR KİTAP! Dört aydır elime kitap almamıştım ve içinde insanın art arda sıralanmış sözcükler, satırlar, sayfalar ve yapraklar görebileceği, başka, yeni, şaşırtıcı düşünceleri okuyabileceği, tanıyabileceği, beynine alabileceği bir kitabın hayali bile insanı hem coşturuyor hem de uyuşturuyordu."
  },
  {
    "id": 578,
    "source": "Albert Camus - Yabancı",
    "text": "\"Ötekilerin sızlandıkları ilk şey budur,\" dedi. \"Ben de onların durumundayım, bu işlemi de haksızca buluyorum,\" dedim. [\"]Ama, dedi, zaten sizi de bunun için hapse tıkıyorlar ya![\"] \"Nasıl[?] Bunun için mi?\" \"Elbette, özgürlük dediğin budur işte! Özgürlükten yoksun bırakıyorlar.\" Bense bunu hiç düşünmemiştim."
  },
  {
    "id": 579,
    "source": "Albert Camus - Yabancı",
    "text": "Onu sımsıkı kavramıştım. Bir otobüs bulup dönmeye, bir koşu evime gidip kendimizi yatağa atmaya baktık. Penceremi açık bırakmıştım; yaz gecesinin[,] esmer bedenlerimizin üzerinden akmasını duymak ne güzeldi[!] Bu sabah Marie gitmedi, kaldı. \"Öğle yemeğini birlikte yiyelim,\" dedim."
  },
  {
    "id": 580,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Fikrimi değiştirdim. İşleri çok başka bir şekilde tertipleyeceğim. (Sesini alçaktı, durdu, Olga'nın gözlerinde, dudaklarında, anlamlı kaşlarında beliren bu yeni ifadeyi kavramaya çalıştı.[)] Köye vekilimle birlikte gitmeye karar verdim[...] Böylece... hüküm giyeceğini biraz keşfeder gibi olmuştu, şapkasını aldı."
  },
  {
    "id": 581,
    "source": "Stefan Zweig - Satranç",
    "text": "Czentovic siyahı seçti; daha ayaktayken ilk karşıt hamlesini yaptı ve sonra hemen kendi önerdiği bekleme yerine giderek kayıtsız bir tavırla arkasına yaslanıp resimli bir dergiyi karıştırmaya başladı. Oyundan söz etmenin pek anlamı yok. Bitmesi gerektiği gibi bitti elbette[:] Bir güzel yenildik[,] üstelik daha yirmi dördüncü hamlede. Bir dünya şampiyonunun yarım düzine orta ya da ortanın altı düzeydeki oyuncuyu hiç zorlanmadan yenmesi pek şaşırtıcı değildi; hepimizin canını sıkan şey, Czentovic’in bizi zorlanmadan yendiğini kafamıza kakan kibirli tarzıydı yalnızca. Her defasında tahtaya yalnızca şöyle bir göz atıyordu, ölü, tahta yontularmışız gibi kayıtsız gözlerle bakıyordu bize ve bu küstah tavır hasta bir köpeğe şöyle bir bakıp bir lokma yiyecek fırlatmayı andırıyordu ister istemez."
  },
  {
    "id": 582,
    "source": "George Orwell - 1984",
    "text": "Afrika cephesinden gelen son haberler hiç de iç açıcı değildi. Sabahtan akşama ka­ dar, orada neler olduğunu merak edip durmuştu. Bir Av­ rasya ordusu [(]Okyanusya, Avrasya'yla savaştaydı: Okya­ nusya, Avrasya'yla her zaman savaşta olmuştu[)] güneye doğru yıldırım hızıyla ilerliyordu. Öğle haberlerinde be­ lirli bir bölgeden söz edilmemişti, ama Kongo Irmağı'nın ağzı daha şimdiden savaş yerine dönmüş olsa gerekti. Brazzaville ve Leopoldville tehlikedeydi."
  },
  {
    "id": 583,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Munise geliyor. Yaramaz kızı dört saatte dört ay görmemiş gibi göreceğim geldi. Nisan [(]iki saat sonra[)] Gülbeşekerin ne olduğunu öğrendim[.] Munise, Söğütlük’te tesadüf ettiği birkaç muallimeye benim hasta olduğumu söylemiş, merak etmişler, dönüşte kapıdan uğrayarak hatırımı sormak istemişler. Birkaç dakika içeri girmeleri için ısrar ettim."
  },
  {
    "id": 584,
    "source": "İvan Gonçarov - Oblomov",
    "text": "(Ellerini kaldırıp başını sallayarak) Bu adam bir... bir... [(]Övmek için aradığı parlak kelimeyi bulamadı.[)] Onunla Saksonya[']dan beraber geldik. Şimdi dört katlı bir evi var. Sana adresini veririm."
  },
  {
    "id": 585,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Ama gelgelelim bu çeşit bir kapana kıstırdın mı kuyruğunu, kodesi boyladığın gündür.\" Lennie, bu sözleri hayranlıkla dinliyordu, ucunu kaçırmamak için de hafifçe dudaklarını kımıldatıyordu. George, devam etti: \"Andy Cuschman'ı hatırlıyor musun, Lennie? Hani ilkokula gidiyordu[?]\" Lennie sordu: \"Annesi çocuklara tatlılar yapardı, o mu[?]\" \"Evet, o. Gülünç bir şey oldu mu şıp diye hatırlarsın.\" George açtığı pasiyansı dikkatle kontrol ediyordu. En üst sıraya bir birli koydu ve yanına bir karo ikilisi, üçlüsü ve dörtlüsü koydu."
  },
  {
    "id": 586,
    "source": "Michael Ende - Momo",
    "text": "Herhalde ev sahiplerinin buna zamanı olmuyordu. bileceğim?\" diye sordu. Kassiopeia[']nın sırtında yazılar belirdi[:] \"Çabuk bulacaksın.\" \"Öyle mi dersin[?]\" O sırada arkasında bir ses duydu: \"Hey, pis maskara, burada ne işin var?\" yelek vardı. kalktı ve dedi ki: \"Günaydın, ben Gigi'nin evini arıyorum. Nino, burada oturduğunu söyledi.\" \"Kimin evini arıyorum, dedin?\" \"Turist rehberi Gigi'nin."
  },
  {
    "id": 587,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "“Bu nedenle, küçük İsa’nın, yalnızca iş olsun diye yoksul doğmak istediğini düşünüyorum. Sonra da, yalnızca zenginlerin zahmete değdiğini görmüştü… Neyse, bırakalım bunları. Belki söylediklerim çok günah[.]” Gerçekten çok yılgındı[;] konuşmak ve yontmakta olduğu sopadan başını kaldırmak bile istemedi[.] * * * Öyle iç karartıcı bir akşam yemeği oldu ki, en iyisi onu hiç düşünmemek. Herkes yemeğini konuşmadan yedi."
  },
  {
    "id": 588,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Öteki çiftçiler onu anlayışla karşılamışlar, ama başlangıçta yardım etmeye de pek yanaşmamışlardı. Her biri, Jones'un uğradığı talihsizlikten nasıl iki çiftliğin sahipleri birbirleriyle hiç geçinemezlerdi. Foxwood[,] büyük[,] bakımsız[,] köhne bir çiftlikti; dört bir yanını çalılar bürümüş, otlakları sararıp solmuş, çitleri paramparça olmuştu. Foxwood'un sahibi Bay Pilkington, zamanının büyük bölümünü balık mevsiminde balık tutarak, av mevsiminde ava çıkarak geçirirdi; rahatına düşkün, efendi bir adamdı. Pinchfield Çiftliği ise daha küçük, ama daha bakımlıydı."
  },
  {
    "id": 589,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Ama bırakalım, sen devam et. İşte bu kadar, daha ne söyleyeyim. Konuklar odalarına, dairelerine çekilirler[;] ertesi gün bir kısmı ava ya da balığa gider[;] bir kısmı da evde oturur[...] Sadece otururlar mı, ellerine bir şey almazlar mı? Ne alsınlar ellerine?"
  },
  {
    "id": 590,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Bitti, değil mi? Dediğimi hatırlıyorum, sonra yine yavaş yavaş o Zeyniler gecesinin karanlığına daldım. Gözlerimi[,] tekrar açtığım vakit[,] bulunduğum yeri tanıyamadım; başka oda, başka pencereler[...] Dirseklerime dayanarak kalkmaya çalıştım, başım benim değilmiş gibi, tekrar yastığın üstüne düştü. Şaşkın şaşkın, etrafıma bakınıyordum."
  },
  {
    "id": 591,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "“Çok iyi. Başka bir saat alıp madalyonu ona takacağım. Bir gün saat senin olacak…” “Portuga, carborundum nedir, biliyor musun[?]” Ve babam konuşuyor, konuşuyordu[;] hiç durmadan[.]"
  },
  {
    "id": 592,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Birkaç gün sonra evin ve bahçenin planları masanın üstünde duruyordu. Evin odaları boldu; iki de balkonu vardı. Gülümseyerek düşünüyordu[:] \"Burası benim odam, burası Olga[']nın odası; burası çocukların odası; burası yatak odası. Fakat köylüler, ah şu köylüler...\" Dudaklarındaki gülümseme kayboldu. \"Komşum mektubunda bin türlü işten söz ediyor."
  },
  {
    "id": 593,
    "source": "Michael Ende - Momo",
    "text": "İçimizden biri, tekrar ediyorum, içimizden b-i-r-i, bir çocukla konuşmuş ve ona bizim gerçek yüzümüzü açıklamış. Sanık! Bu, içimizden b[-]i[-]r[-]i nin kim olduğunu biliyor musun?\" \"Bendim\" diye perişan cevap verdi, ajan BLW/553/c. Hakim sordu, \"Neden en önemli yasamıza bu şekilde karşı çıktınız?\" Sanık, kendini savunmaya çalıştı: \"Bu çocuk diğer insanları etkileyerek bizim işimize engel oluyor. Bu yüzden Zaman Tasarruf Şirketi için en iyisinin bu olacağını düşündüm.\" Hakim buz gibi bir sesle, \"Sizin düşünceleriniz bizi ilgilendirmez."
  },
  {
    "id": 594,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Kuşkusuz çok uzaklara gitmişti, belki de tatile. Daha rahat bir yürekle okulun yolunu tuttum; bu adamı ilerde öldürme zahmetine değip değmediğini bile düşünmeye başlamıştım. Ama kesin olan bir şey de vardı[:] Daha gösterişsiz bir otomobilin arkasına atladığımda aynı heyecanı hiç duymuyordum; kulaklarım da başlıyordu yanmaya[.] İnsanlarla sokağın günlük hayatı olağan akışını izliyordu. Uçurtma ve sokaktaki ‘çılgın oyunlar çağı’ gelmişti."
  },
  {
    "id": 595,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Bunların beşine yorgan serilmişti, öteki üçünde şiltelerin çuval bezinden kılıfları meydandaydı. Her kerevetin üstüne açık tarafları öne doğru olmak üzere elma sandıkları mıhlanmıştı, bunlar yatak sahiplerinin özel eşyalarını koydukları ikişer raf meydana getiriyordu. Bu raflarda bir sürü ufak tefek eşya doluydu[;] sabunlar[,] talk pudraları, usturalar, çiftlik işçilerinin bayıldıkları, o Wild West dergileri vardı[.] Bu dergilerle, sözde alay ederler ama, bakmayın, pek ciddiye alırlar. Raflarda ilaçlar vardı, küçük küçük şişeler, taraklar."
  },
  {
    "id": 596,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "İki kuş kafesi var; birinde kanarya besliyor, öbüründe muhabbetkuşu. Bir gün erkenden, hiçbir şeyin farkında değilmişim gibi, boyacı sandığımla gittim oraya. Gitmeyi o kadar çok istiyordum ki[,] Minguinho; bu kez sandığımın ağırlığını hissetmedim bile[.] Eve dışardan iyice baktım, tek başına yaşayan biri için çok büyük buldum. Arkada, musluğun başındaydı, tıraş oluyordu.” Ellerimi birbirine vurdum."
  },
  {
    "id": 597,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Yok, dedi. Bunun üzerine, Curley'le evlendim. Ona o gece Riverside Dance Palace[']de rastlamıştım.\" Kadın sordu: \"Dediklerimi dinliyor musun[?]\" \"Ben mi[?] Tabii!\" \"Bunu kimseye anlatmadım bugüne kadar. Belki de hiç anlatmamalıydım."
  },
  {
    "id": 598,
    "source": "George Orwell - 1984",
    "text": "Ortadan kayboluverirsiniz. Adınız kayıtlardan silinir, yaptığınız her şe­ yin kaydı yok edilir, bir zamanlar var olduğunuz bile yadsınır, sonra da tümden unutulur. Kökünüz kazınır, külünüz havaya savrulur[;] onların deyişiyle [\"]buharlaşırsınız[\"] . . ."
  },
  {
    "id": 599,
    "source": "Albert Camus - Yabancı",
    "text": "Bunun M. Perez olduğunu anladım. Başında geniş kenarlı, yuvarlak tepeli, ütüsüz bir fötr şapka vardı [(]cenaze kapıdan geçerken, onu çıkarttı[)], pantolonunun paçası kat kat ayakkabısının üstüne düşüyordu[.] Geniş beyaz yakalı gömleği üzerinde siyah kumaştan fiyongu düpedüz sırıtıyordu. Kara kara et benleriyle kaplı burnunun altında dudakları titriyordu."
  },
  {
    "id": 600,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "George sordu: \"Ne olmuş ona?\" dedi. Yaklaştı. Sonra Candy[']nin sözünü tekrarladı[:] \"Vay anasını!\" Kadının yanına yere çömeldi. Elini kalbine götürdü. Ağır ağır güçlükle yerinden kalktığı zaman yüzü tahta gibi kaskatı kesilmişti, gözleri de sert sert gibi kaskatı kesilmişti, gözleri de sert sert bakıyordu."
  },
  {
    "id": 601,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Ömrümde yemediğim bir haltı yedirteceksin. Beni çocuk gibi hüngür hüngür ağlatacaksın. Yaprakları dökülmüş kuru dalların arasında parlayan sonbahar güneşine elini uzattı[:] [-]Ben hayli ihtiyarım[;] sefaletin, acının türlü şeklini gördüm. Kollarımın arasında nice gözler kapandı. Karşımda ölmek mecburiyetinden bu kadar sükûnla bahseden bu güzel çocuk yüzünden, gülmek için vesile arıyor gibi titreyen yaramaz dudaklarından daha büyük facia görmedim."
  },
  {
    "id": 602,
    "source": "George Orwell - 1984",
    "text": "Ama bu başka bir şey; aslında tam tersi.\" Sonra da, sesinin tonunu değiştirerek 1. Tekbencilik ya da solipsizm: Felsefede, insan zihninin kendisi dışında başka varlıklann da olabileceğini kabul etmesi için hiçbir geçerli neden bulunmadığı­ nı savunan yaklaşım. [(]Ç.N.[)] ekledi: \"Her neyse, bütün bunların konumuzla bir ilgisi yok. Gerçek güç, uğruna gece gündüz savaşmamız gere­ ken güç, nesnelere değil, insanlara hükmeden güçtür.\" Bir an durdu, bir kez daha parlak bir öğrenciye soru so­ ran bir öğretmen havasına büründü: \"İnsan insana nasıl hükmeder, Winston?\" Winston, biraz düşünüp, ''.Acı çektirerek,\" dedi. \"Tamam işte."
  },
  {
    "id": 603,
    "source": "George Orwell - 1984",
    "text": "Bilim alanında çalışan biri ya da bir teknisyen, kendi uzmanlık alanıyla ilgili listede gereksindiğitüm sözcük­ leri bulabiliyor, ama öteki listelerde yer alan sözcüklerle ilgili ancak yüzeysel bir bilgi edinebiliyordu. Listelerin hepsinde birden yer alan sözcüklerin sayısı pek azdı; bi­ limin belirli dallan şöyle dursun, zihinsel bir çalışma ya da düşünme yöntemi olarak bilimin işlevini dile getiren bir sözdağarcığı bile yoktu. Aslında, [\"]bilim[\"]i karşılayan tek bir sözcük yoktu; bilimin taşıyabileceği her türlü an­ lam, İngsos sözcüğüyle yeterince karşılanıyordu. Buraya kadar anlatılanlardan, Yenisöylem'de, öğretiye bağnazca bağlı olmayan düşüncelerin doğru dürüst dile getirilmesinin hemen hemen olanaksız olduğu anlaşılmış­ tır. Hiç kuşku yok ki, sapkın düşünceleri çok kaba bir bi­ çimde, bir küfür gibi dile getirmek mümkündü."
  },
  {
    "id": 604,
    "source": "Stefan Zweig - Satranç",
    "text": "Ama adam kafasını toplayıp yanıtlayamadan, McConnor zafer sarhoşluğuyla bağırdı ona: “Elbette! Ama şimdi onunla tek başınıza oynamalısınız! Czentovic’e karşı siz[!]” Ama o anda hiç umulmadık bir şey oldu[.] Tuhaf bir biçimde hâlâ satranç tahtasına bakıp duran yabancı, bütün bakışların kendisine yöneldiğini ve bu coşkulu sözlerin kendisine söylendiğini anlayınca ürktü. Yüzü allak bullak oldu."
  },
  {
    "id": 605,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Yurtdışından döndükten sonra iki ay kadar Nikolay Petroviç’in konuğu olmak, onun saadetini görmek niyetiyle yanına gitmişti ama orada topu topu bir hafta kalabildi. İki kardeşin durumları birbirinden çok farklıydı. yılında bu fark azalmıştı[:] Nikolay Petroviç karısını[,] Pavel Petroviç ise anılarını yitirmişti[;] Prenses’in ölümünden sonra onu düşünmemeye gayret ediyordu. Fakat Nikolay’da doğru geçirilmiş bir yaşam duygusu kalmıştı, oğlu gözlerinin önünde büyüyordu; tek başına bekâr bir adam olan Pavel ise tersine gençliğin geçtiği, yaşlılığın ise henüz başlamadığı, umuda benzer üzüntülerin, üzüntüye benzer umutların söz konusu olduğu belirsiz, bulanık bir döneme girmişti. Bu, Pavel Petroviç için başka herhangi bir dönemden daha zor olmuştu: Geçmişini kaybederek her şeyini kaybetmişti."
  },
  {
    "id": 606,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Andrey'in kılı kıpırdamadı. Yok, eğer aklın az gelirse, kendi yolunu birdenbire bulamazsan, birisine akıl danışmak istersen, Reinhold'a başvur, o sana yol gösterir. [(]Ellerini kaldırıp başını sallayarak[)] Bu adam bir[...] bir... (Övmek için aradığı parlak kelimeyi bulamadı.) Onunla Saksonya'dan beraber geldik."
  },
  {
    "id": 607,
    "source": "Albert Camus - Yabancı",
    "text": "Çünkü beni ilgilendirmeyecek bir şeyle ilgilenecek kadar vaktim yok.\" Bu sırada papazın elleri sinirli sinirli kımıldadı. Oturduğu yerden doğruldu ve cüppesinin kıvrımlarını düzeltti, sonra, \"Dostum,\" diye seslendi. Böyle demesi ölüme hükümlü olduğum için değilmiş; ona göre[,] bizler[,] yani hepimiz ölüme hükümlüymüşüz. Burada sözünü keserek bunun aynı şey olmadığını, hem olsa da bunun hiçbir biçimde bir avunma yerine geçemeyeceğini söyledim. \"Orası öyle,\" dedi, \"ama yakında ölmeseniz bile daha sonra öleceksiniz."
  },
  {
    "id": 608,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "içinden nasıl gelirse. Artık sakin sakin konuşabiliyorlardı. Feride, birkaç kelime ile seyahatini anlattı[:] [-]İstanbul’da bazı işlerim vardı; sonra dediğim gibi, hepinizi çok göreceğim gelmişti. Doktor enişten iki ay izin verdi. Teyzelerimi, hepinizi sıhhatte bulduğuma ne kadar memnun oldum."
  },
  {
    "id": 609,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Bir su kenarından bahsederken Kâmran, gözlerini kapadı: “Sakın bu, başını sevdiğinin dizlerine koyarak gözlerine baka baka tambur çaldırdığın çağlayan kenarı olmasın,” diye kendine sordu. sonra birdenbire aklına gelmiş gibi: -Kâmran, daha sana eniştenin fotoğrafını göstermedim, dedi. Kâmran’a, ince bir altın kordonla boynuna bağlı bir altın madalyon uzattı[:] Genç adam, sarardığını[;] titrediğini belli etmemeye çalışarak fotoğrafı aldı[.] Feride, onunla beraber fotoğrafı görmek için başını uzatıyor, yüzünü yüzüne yaklaştırıyordu: -Şu çehreye bak, Kâmran, ne necip, ne güzel bir yüz, değil mi? Genç adam, belli etmeden gözucuyla Feride’ye bakıyordu."
  },
  {
    "id": 610,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "En sadık tilmizleri, iki araba atı, Boxer ile Clover'dı. Kendi başlarına düşünmekte epeyce zorlanan bu iki at, domuzları öğretmen belledikten sonra onların her dediğini tartışmasız benimsemiş ve olduğu gibi öteki hayvanlara aktarmışlardı. Samanlıktaki gizli toplantıları hiç kaçırmıyor[;] her toplantının bitiminde söylenen İngiltere[']nin Hayvanları şarkısında başı çekiyorlardı[.] Derken, Ayaklanma, umulandan çok daha erken, herkesin beklediğinden çok daha kolay gerçekleşti. Bay Jones, hayvanlara çok sert davranmasına karşın becerikli bir çiftçiydi, ama son zamanlarda işleri bozulmuştu."
  },
  {
    "id": 611,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Ama valeleri pek sevmiyordum. Nedendir bilmem, kralın uşağı gibi bir görünüşleri vardı! “Biliyor musunuz[,] Dayıcığım; sizinle bir iş konuşmaya geldim[.]” “Dur da şu elimdekini bitireyim[.] Sonra konuşuruz,” dedi. Yine de kâğıtları çabucak karıştırdı!"
  },
  {
    "id": 612,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Napoléon, neredeyse yüz elli kiloluk bir domuz azmanı olup çıkmıştı. Squealer, yağ tulumuna dönmüştü; gözleri yumuk yumuktu, güçlükle görebiliyordu. Bir tek yaşlı Benjamin pek değişmemişti[;] yalnızca yelesine hafif kır düşmüştü; bir de, Boxer[']ın ölümünden sonra daha da somurtkanlaşmış, ağzı dili bağlanmıştı. Gerçi nüfus artışı ilk başta beklendiği kadar yüksek olmamıştı, ama gene de çiftlikteki hayvanların sayısı artmıştı. Yakın yıllarda doğmuş olan birçok hayvan için Ayaklanma, ağızdan ağıza aktarılan bir masaldan başka bir şey değildi; dışarıdan satın alınan hayvanların çiftliğe gelinceye kadar Ayaklanma'dan haberleri bile olmamıştı."
  },
  {
    "id": 613,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "On iki yaşındaydı, son zamanlarda gövdesi biraz yağ bağlamıştı; uzun sivri köpekdişleri hiç kesilmemiş olmasına karşın, bilge ve babacan görünen heybetli bir domuzdu. Çok geçmeden öteki hayvanlar da birbiri ardı sıra sökün ettiler; yolu yordamınca yerlerini almaya başladılar. Önce Bluebell[,] Jessie ve Pincher adlı üç köpek göründü; ardından domuzlar geldiler[,] yükseltinin hemen önündeki samanların üzerine yerleştiler. Tavuklar pencere eşiklerine tünediler, güvercinler çatı kirişlerine kondular, koyunlarla inekler domuzların arkasına uzanıp geviş getirmeye koyuldular. Boxer ve Clover adlı iki araba atı içeri birlikte girdiler; samanların arasında göremeyecekleri kadar küçük bir hayvan bulunabileceği kaygısıyla ağır ağır yürüyor, kıllı, kocaman ayaklarını yere usulca basıyorlardı."
  },
  {
    "id": 614,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Zorla beni kocasına döndürerek: Piyor For, uzun boylu, güzel çehreli, kumral bir adamdı. Fakat, biraz delişmendi, yahut da, ben hep lakırdılarını tarta tarta söyleyen ağırbaşlı insanlar arasında yaşaya yaşaya adamcağızı öyle görecek hale gelmiştim. Gazeteci, elimi öptü ve eski bir bildikle konuşur gibi[;] [-]Matmazel, çok bahtiyarım, dedi[.] Bilir misiniz, biz hiç yabancı değiliz. Kristiyan, sizden o kadar çok bahsetti ki..."
  },
  {
    "id": 615,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"Demek hepsi kasabaya gitti, ha?\" \"Hepsi, yalnız Candy kaldı. Orada koğuşta oturmuş, kalemini yontuyor, bir yandan da hesap yapıyor.\" Crooks, gözlüklerini düzeltti: \"Hesap mı yapıyor? Ne hesabı yapıyor, Candy[?][\"] Lennie adeta haykırdı: \"Tavşanlar için[!]\" \"Sen kaçıksın,\" dedi Crooks. \"Zırdelisin. Ne tavşanı sayıklıyorsun?\" \"Alacağımız tavşanlar yahu."
  },
  {
    "id": 616,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Yutturmaya kalkma.\" Lennie duraksadı, geriledi, kaçıp kurtulmak ister gibi çalılıklara doğru bir göz attı. George hiç istifini bozmadı. \"Veriyor musun o fareyi, yoksa dağıtayım mı suratını[?]\" \"Neyi vereyim, George[?]\" \"Biliyorsun domuz gibi. O fareyi istiyorum.\" Lennie, istemeye istemeye cebini karıştırdı. Sesi hafifçe titrekti."
  },
  {
    "id": 617,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Bu Hacı Kalfa’nın efendisi, otelin sahibiydi. İhtiyar adam, her defasında türkü söyler gibi, makamla yavaş yavaş: -Elinin körü, elinin körü. Hacı Kalfalar kaldırsın seni, diye söyleniyor; sonra bağırıyordu[:] [-]Geldik, geldik, az işimiz var da[...] Otelde, Hacı Kalfa ile beraber, bir ahbabım daha olmuştu: Otuzbeş kırk yaşlarında Manastırlı bir kadıncağız. Onunla ahbaplığımızın nasıl başladığını anlatayım: Otele ilk geldiğim akşam, odamda eşyamı yerleştiriyordum."
  },
  {
    "id": 618,
    "source": "Stefan Zweig - Satranç",
    "text": "Papaz hiç duraksamadan onu izledi. Birasını daha bitirmemiş olan jandarma çavuşu, onları uğurlarken yeni bir pipo yaktı ve uzun konçlu, ağır çizmelerini giymeye hazırlanırken, Mirko’nun bakışlarının oyuna başlanmış satranç tahtasına nasıl dikildiğini ayrımsadı. “Ne o[,] oyunu tamamlamak mı istiyorsun[?]” dedi alaycı bir sesle[,] uykulu çocuğun tahtadaki tek bir taşı bile doğru oynamayı beceremeyeceğinden son derece emindi. Oğlan çekinerek ona baktı, sonra başını salladı ve papazın yerine oturdu. On dört hamleden sonra jandarma çavuşu mat olmuştu ve yenilgisinin yanlışlıkla yaptığı dikkatsiz bir hamleden kaynaklanmadığını itiraf etmek zorunda kaldı."
  },
  {
    "id": 619,
    "source": "George Orwell - 1984",
    "text": "Ama doğ­ ru yolu gösteriyorlar çocuklara, değil mi?\" Tam o sırada tele-ekrandan kulak tırmalayıcı bir dü­ dük sesi geldi. İşbaşı yapma vaktinin geldiğini gösteriyor­ du. Üçü birden yerinden fırlayıp asansörlerin önünde itişip kakışan kalabalığa katıldı[;] bu arada, Winston[']ın si­ garasında kalan tütün. yere döküldü. VI Winston güncesini yazıyordu: Üç yıl oluyor."
  },
  {
    "id": 620,
    "source": "George Orwell - 1984",
    "text": "Ruhu daralmasına karşın, bu akşam belki de ilk kez Merkez'den kaçıp gitmek gel­ miyordu içinden. Seni seviyorum sözünü görünce, yüre­ ğinde hayatta kalmak için müthiş bir istek uyanmış, bir­ den gereksiz tehlikelere atılmayı aptalca bulmaya başla­ mıştı. Eve dönüp yatağa yattıktan sonra düşünceye daldı­ ğında gecenin on biriydi; karanlıkta sesini çıkarmadan uzandığında tele[-]ekrana yakalanması bile olanaksızdı[.] Kızla bağlantıya geçip randevulaşmak gibi çözülme­ si gereken ciddi bir sorun vardı. Artık kızın kendisine tuzak kuruyor olabileceği aklının ucundan bile geçmi­ yordu."
  },
  {
    "id": 621,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Rahat bir soluk aldım. Ama arkamdan doğru bir elin çantama yapıştığını hissedince bu rahatlık kalmadı. “Bu işi sen yaptın, değil mi Zezé?” Bay Orlando[-]Cabelo[-]de[-]Fogo. Uzun zamandır komşumuz olan adam. Dilim tutuldu."
  },
  {
    "id": 622,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Mama Suzy de herkesi gülmekten kırar geçirir... Öyle hoş şeyler anlatır ki. Geçen cumartesi taraçanın altına geldiğimizde, Suzy kapıyı açtı, sonra başını çevirip bağırdı: [\"]Kızlar, giyin mantolarınızı, komiser geldi[!][\"] Hiç kabalık da etmez. Evinde beş kız var.\" George sordu: \"Kaça oturuyor bu iş?\" \"İki buçuk kağıda. Yirmi beş sente bir kadeh viski içiliyor."
  },
  {
    "id": 623,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Ötekine gelince o, inadına uzun, kuru, esmer veince bıyıklı bir adamdı. O kadar uzun ki, adeta kamburu çıkmıştı. Maarif Müdürü, tekrar bana döndü: [-]Efendim, arkadaşımı takdim edeyim: “Vilayet Nâfıa Mühendisi Mümtaz Bey.” Ben lakırdı olsun diye: [-]Öyle mi efendim? Pek güzel, dedim. Maarif Müdürü, sınıfın mukavemetini muayene eder gibi topuklarını vurarak dolaşıyor, sıralara, levhalara bastonunun ucuyla dokunuyordu: -Azizim, büyük projelerim var."
  },
  {
    "id": 624,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Fena bir şey yapmadım, George.\" \"Bunu ben sana söylemeliydim,\" dedi George. \"Namussuzum kötü bir şey yapmadım onlara. Benim yavruyu dizimin üstüne koymuş, okşuyordum, işte o kadar.\" George sordu: \"Ahırda Slim[']i gördün mü[?]\" \"Tabii gördüm. 'Senin yavruyu o kadar okşamasan iyi edersin,' dedi.\" \"O karıyı gördün mü?\" \"Curley'in karısını mı?\" \"Evet. Ahıra geldi mi?\" \"Gelmedi."
  },
  {
    "id": 625,
    "source": "Albert Camus - Yabancı",
    "text": "Az sonra Marie geldi. Gelişini seyredeyim diye döndüm. Bütün bedeni tuzlu sudan yapış yapıştı[;] saçlarını arkaya atmıştı[.] Gövdesinin ve güneşin sıcaklığından biraz uyuklamışım. Marie beni sarstı, \"Masson evine gitti, yemek yiyeceğiz artık,\" dedi."
  },
  {
    "id": 626,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Başarısız bir nükte yaptığını Pavel Petroviç de hissetmişti ve çiftlikten, bir gün önce kendisine işçi Foma’nın “serserilik ettiğinden” ve ele avuca sığmaz biri olduğundan şikâyete gelen yeni yöneticiden söz etmeye başladı. “Ezop4 gibi biri işte,” dedi bu arada, “her tarafta kendisini kötü bir insan olarak tanıtmış; bir budala olarak yaşayacak ve öyle de gidecek.” 3. [(]Fr.[)] Siz bunların hepsini değiştirdiniz. (Ç.N.) 4. Aisopos ya da Ezop: MÖ 7.-6."
  },
  {
    "id": 627,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "İki at henüz yere uzanmışlardı ki, annelerini yitirmiş yavru ördekler ciyak ciyak bağırarak birerlekol halinde samanlığa girdiler; paytak paytak koşturuyor, ayaklar altında ezilmeyecekleri bir yer aranıyorlardı. Clover, kocaman ön ayağıyla ördek yavrularının çevresine bir duvar ördü; onlar da oraya sığınıp birbirlerine sokuldular ve o saat uykuya daldılar. Son anda[,] Bay Jones[']un iki tekerlekli arabasını çeken saçı uzun aklı kısa, beyaz kısrak Mollie çıkageldi; ağzında kesmeşekeri, süzüm süzüm süzülerek içeri girdi. Kendine önlerde bir yer seçti; bakışları üzerinde toplamak umuduyla kırmızı kurdelelerle örülü beyaz yelesini iki yana sallamaya başladı. Son olarak da kedi göründü; huyu kurusun, hemen en sıcak yeri aranmaya başladı, sonunda Boxer ile Clover'ın arasına sığıştı; Koca Reis'in söylevinin sonuna kadar –söylediklerinin bir tekine bile kulak vermeden– keyifli keyifli mırlayıp durdu."
  },
  {
    "id": 628,
    "source": "Michael Ende - Momo",
    "text": "İyi bir yaşam sürmeye vaktiniz olsaydı, bambaşka bir insan olacaktınız. Demek ki, bütün aradığınız zaman. Doğru mu[?][\"] Bay Fusi, [\"]Az önce bütün bunları aklımdan geçirmiştim\" diye mırıldandı ve tüylerinin ürperdiğini hissetti; kapı kapalı olduğu halde üşüyordu. \"İşte gördünüz mü?\" dedi duman adam ve sigarasından keyifle bir nefes daha çekti. \"Zaman nereden bulunur?"
  },
  {
    "id": 629,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Hepsi dost.” “Yine de korkuyorum. Çok Kızılderili var.” Fetih İlk günler, sigara almak için durduğunda Portekizliye rastlamamak için erken çıkıyor, üstelik yolun öbür yanında yürümeye ve evleri birbirinden ayıran sütleğen çitlerinin gölgesinde gizlenmeye dikkat ediyordum. Rio[-]Sáo Paulo yoluna vanr varmaz karşıya geçiyor[;] lastik pabuçlarım elimde, neredeyse fabrikanın duvanna yapışarak yola devam ediyordum. Bütün bu önlemler birkaç gün sonra gereksizleşti. Sokağın belleği zayıftır çünkü."
  },
  {
    "id": 630,
    "source": "Michael Ende - Momo",
    "text": "Fakat o köşeye geldiklerinde garip bir şeyle karşılaştılar. Arabalar oldukları yerde çakılıp kaldı. Şoförler gaza basıyorlar[,] tekerlekler dönüyor; fakat arabalar sanki geriye doğru kayan bir bant üzerindelermiş gibi, ilerlemeden duruyorlardı[.] Ne yaptılarsa olmadı. Bunun üzerine duman adamlar arabalardan indiler."
  },
  {
    "id": 631,
    "source": "Albert Camus - Yabancı",
    "text": "Biraz sonra, \"Anneniz, değil mi?\" diye sordu. Yine, \"Evet,\" diye karşılık verdim. [\"]Yaşlı mıydı[?][\"] Yaşını tam olarak bilmediğim için, \"Eh oldukça,\" dedim. Sonra sustu. Başımı çevirdim, ihtiyar Perez'in elli metre kadar gerimizde olduğunu gördüm."
  },
  {
    "id": 632,
    "source": "George Orwell - 1984",
    "text": "Yemek kabını yana itti, zarif ellerini uzatıp ekmeğini ve peyniri­ ni aldı, bağırmadan konuşabilmek için masanın üzerine eğildi. \"On Birinci Baskı, nihai baskı,\" dedi. [\"]Dile son biçi­ mini veriyoruz[;] başka bir dil konuşan hiç kimse kalmadı­ ğında alacağı biçimi. Sözlüğü tamamladığımızda, senin gibilerin dili yeni baştan öğrenmeleri gerekecek. Bana öyle geliyor ki, sizler asıl işimizin yeni sözcükler icat et­ mek olduğunu sanıyorsunuz."
  },
  {
    "id": 633,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Böylece yemek veya satmak için bir sürü tavşan üreteceğiz. Sonra birkaç güvercin besleriz, değirmenin etrafında uçuşurlar.\" Büyülenmiş gibi Lennie'nin başı üstündeki duvara baktı: \"Bütün bunlar bizim malımız olacak, kimse bizi kapıdışarı edemeyecek. Biri hoşumuza gitmedi mi[,] ona çek arabanı[,] diyeceğiz; haddine düşmüşse gitmesin[.] Bir dost çıkagelse, onun için yedek bir yatağımız bulunacak. O da kalacak tabii."
  },
  {
    "id": 634,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Üşümek mi? İnsanın içinde güneş yanarken üşümek mi? Bu akşam, gökyüzü bana, batıdan doğuya kadar dallarını uzatmış bir ağaç gibi göründü[;] yavaş yavaş sallandıkça, üstümüze beyaz çiçeklerini döken kocaman bir yasemin ağacı[!] Zeyniler, 30 Aralık Munise ile öyle canciğer olduk ki... Bu küçük kız, derslerimden artakalan bütün saatlerimi alıyor."
  },
  {
    "id": 635,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Benden sana nasihat; kâmil ol, uslu ol. Öyle çarşıda pazarda yüzü açık gezme. İmdi: [(]Aman Yarabbî, bu imdi kelimesini ne tuhaf bir eda ile söylüyordu![)] Sana bir kısmet de çıkar inşallah. Burada bir hocanım vardı. Arife Hocanım."
  },
  {
    "id": 636,
    "source": "Michael Ende - Momo",
    "text": "Diğerlerinden farkı, yüzünün kül renginin beyaza dönmüş olmasıydı. Kürsünün önünde durdu. Ortada oturan sordu[:] \"Ajan BLW/553/c siz misiniz?\" \"Evet.\" \"Ne zamandan beri Zaman Tasarruf Şirketi[']ne çalışıyorsunuz?” \"Var oluşumdan beri.\" \"Ona şüphe yok. Gereksiz konuşmayı bırakın! Ne zaman var oldunuz?\" \"On bir yıl, üç ay, altı gün, sekiz saat, otuz iki dakika ve şu anla beraber, on sekiz saniye önce var oldum.\" Bu konuşmalar oldukça uzakta ve yavaş geçtiği halde, ne acayiptir, Beppo hepsini duyabiliyordu."
  },
  {
    "id": 637,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Üstelik de leş gibi kokuyor. Ne zaman odaya girse iki üç gün kokusu burnumdan gitmiyor. Neden Candy[']ye köpeğini öldürmesini söylemiyorsun; seninkilerden birini büyütür[.] O köpek yaklaşmıyor mu bir mil uzaktan burnumun direği kırılıyor. Ağzında diş namına bir şey kalmamış, gözü görmez, yiyeceğini öğütemez Candy onu sütle besliyor."
  },
  {
    "id": 638,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "“Bütün bunlar çok güzel,” diye devam etti Arkadiy, “ama sizin durumunuzdaki insanlar, yani sizinki gibi malı mülkü olan demek istiyorum, bu yeteneğe pek ender olarak sahip olurlar; gerçek onlara, tıpkı çarlara olduğu gibi çok zor ulaşır.” “Ben zengin değilim ki zaten.” Arkadiy şaşırmıştı ve Katya’yı birden anlayamadı. “Gerçekten de çiftlik ablasının!” diye geçirdi aklından Arkadiy; bu düşünce hoşuna gitmişti, “Bunu ne kadar güzel söylediniz!” dedi. “Neyi[?]” “Güzel söylediniz[;] basit, utanmadan ve büyütmeden[.] Sözü açılmışken, ben yoksul olduğunu bilen ve söyleyen bir insanın duygularında özel bir şey, kendine özgü bir böbürlenme olması gerektiğini düşünüyorum.” “Ablamın sayesinde ben bunu hiç hissetmedim; bu durumumu yalnızca lafın gelişi söyledim.” “Demek öyle ama kabul edin, demin bahsettiğim böbürlenme bir parça da olsa var sizde.” “Örneğin ne?” “Örneğin, siz, sorumu bağışlayın, zengin bir adamla evlenmezdiniz, değil mi?” “Eğer onu çok seversem... Yo hayır, galiba o zaman da evlenmezdim.” “Ya!"
  },
  {
    "id": 639,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Tatilin son günlerinde başımdan geçen bir kazayı da söylemeden geçemeyeceğim. Köşk halkı bir gün sağ elimin bir parmağının kocaman bir sargı beziyle bağlı olduğunu gördüler. Soranlara[:] [-]Bir şey değil, bir parçacık kestim; ziyanı yok, kendi kendine geçer, diyordum. Teyzem yarayı inatla sakladığımı fark edince: -Mutlaka bir yaramazlık ettin. Ehemmiyetli bir şey ki, saklıyorsun."
  },
  {
    "id": 640,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "“Otur.” Ne sevdiğimi çok iyi bilen garsonu çağırmak için parmaklarını şaklattı. Ama garson limonatayla pastayı önüme koyduğunda elimi bile sürmedim. Başımı kollarıma dayadım ve öyle kalakaldım[;] bezgindim[,] üzüntülüydüm[.] “İstemiyor musun?” Karşılık vermeyince, Portuga yüzümü kaldırdı. Dudaklarımı bütün gücümle ısırıyordum ve gözlerim ıslaktı."
  },
  {
    "id": 641,
    "source": "George Orwell - 1984",
    "text": "'İyideğil' dersin, olur bi­ ter; hatta daha da iyi olur, çünkü 'iyideğil' 'iyi'nin tam karşıtı, 'kötü' ise tam karşıtı değil. Ya da 'iyi'nin yerine daha güçlü bir sözcük istiyorsan, 'mükemmel' ve 'fevkala­ de' gibi belirsiz ve yararsız sözcük kullanmanın ne anlamı var? [']Artıiyi['] aynı anlamı karşılıyor; ya da, daha da güçlü bir sözcük istiyorsan, [']çifteartıiyi' diyebilirsin. Kuşkusuz, bu sözcükleri daha şimdiden kullanıyoruz; ama Yenisöy­ lem son biçimini aldığında bunlardan başka hiçbir sözcük kullanılmayacak. Sonunda, iyilik ve kötülük kavramlan yalnızca altı sözcükle karşılanıyor olacak; aslına bakarsan, tek bir sözcükle."
  },
  {
    "id": 642,
    "source": "İvan Gonçarov - Oblomov",
    "text": "O mu? Canım bilmez misin? [(]Eliyle masaya vurarak[)] Nah, vurdumduymazın biridir. İşini bilmiyor ki. İnekten farkı yok."
  },
  {
    "id": 643,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Bu süre içinde nasıl konuşulduğunu unutmayacaksın, değil mi?” “Bir daha hiç unutmayacağım. Yani yalnızca seninle. Ne kadar iyi bir yastık olduğumu görmek ister misin[?]” “Nasıl olduğunu[?]..” “Çık dalıma[!]” Dediğini yaptım. “Şimdi sallan ve gözlerini kapa.” Söylediklerini yerine getirdim. “Rahat mısın?"
  },
  {
    "id": 644,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"Namussuzum kötü bir şey yapmadım onlara. Benim yavruyu dizimin üstüne koymuş, okşuyordum, işte o kadar.\" George sordu: \"Ahırda Slim'i gördün mü?\" \"Tabii gördüm. [']Senin yavruyu o kadar okşamasan iyi edersin,['] dedi.\" \"O karıyı gördün mü?\" \"Curley[']in karısını mı?\" \"Evet. Ahıra geldi mi?\" \"Gelmedi. Geldiyse de, ben görmedim.\" \"Slim'in onunla konuştuğunu gördün mü?\" \"Görmedim."
  },
  {
    "id": 645,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "George, ayağa kalkmış, bağırıyordu: \"Durma, Lennie, vur sen de.\" Lennie kocaman elleriyle yüzünü kapadı. Korkudan inildiyordu. Haykırdı[:] [\"]Söyle bıraksın, George[!]\" Curley o zaman mide boşluğuna vurdu ve nefesini kesti. Slim yerinden kalktı: \"Kalleş kerata,\" diye bağırdı. \"Ben sana dersini vereyim de gör.\" George elini uzatarak Slim'i durdurdu."
  },
  {
    "id": 646,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Nihayet utanıp sıkılmayı bırakarak bana: -Feride, çocuğum; azıcık aşağı iner misin? dedi. Ben, gülmeyi kestim; ciddi bir sesle[:] [-]Ne münasebet? dedim. Hiç..."
  },
  {
    "id": 647,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Salaklar!\" diye bağırıyordu. \"Kör müsünüz? Arabanın üstünde ne yazıyor, görmüyor musunuz[?]\" Benjamin[']i duyan hayvanlar durakladılar; ortalığı bir suskunluk kapladı. Muriel, yazıyı sökmeye çalışıyordu. Benjamin, onu kenara itti ve ölüm sessizliğinin ortasında yazıyı okudu: \"Alfred Simmonds, At Kasabı ve Tutkal İmalatçısı, Willingdon."
  },
  {
    "id": 648,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Andriyuşa'nın terbiyesiyle, yaşayışıyla, geleceğiyle Vanya ve Maşa'nın hayatları arasında dünya kadar fark vardı. Hiçbir üzüntü duymadan, \"Bu ikisi kibar filan değil,\" derdi; \"benim gibi, onlar da zoru zoruna yaşamak için doğmuşlar. [(]Andriyuşa[']yı çekinerek değilse bile dikkat ve özenle okşayarak, adeta saygıyla[)] Halbuki bu küçük bir soylu! Bakın derisi ne kadarince, şeftaliye benziyor. Elleri, ayakları küçücük."
  },
  {
    "id": 649,
    "source": "Michael Ende - Momo",
    "text": "Aksine, yazın bir ormanda kuşların, böceklerin, ağaçların yapraklarının rüzgârın tatlı sallantısı ile çıkardığı vızıltılı ve hışırtılı bir sesi andırıyordu. çalgılı saat vardı. Üzerinde küçük bir erkek ve bir kadın dans eder gibi el ele parmağını uzattı; o sırada çok tatlı bir ses duydu[:] [\"]Ah, döndün mü Kassiopeia[?] Çocuk döndü, dolaplı saatlerin oluşturduğu bir koridorda gümüş gibi beyaz saçlı, ufak tefek, yaşlı bir adam gördü. Yerde duran kaplumbağanın üzerine doğru eğilmişti."
  },
  {
    "id": 650,
    "source": "Albert Camus - Yabancı",
    "text": "Geniş bir pencereyle aydınlanan koskoca bir salona girdim. Salon, boydan boya, iki büyük demir parmaklıkla üçe bölünmüştü. İki parmaklık arasında[,] ziyaretçilerle hükümlüleri birbirinden ayıran sekiz[-]on metrelik bir aralık vardı. Ta karşımda, çizgili elbisesi ve yanık yüzüyle Marie'yi buldum. Benim tarafta, on, on iki kadar hükümlü vardı."
  },
  {
    "id": 651,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Et toc, et toc, et tin-tin-tin!..”27 “Victor, siz haylazın birisiniz.” Yemek uzun süre devam etti. İlk şampanya şişesini ikinci, üçüncü ve hatta dördüncü şişe izledi. Yevdoksiya durmadan gevezelik ediyordu[;] Sitnikov da ondan geri kalmıyordu[...] Evliliğin ne olduğu, bir önyargı mı, yoksa bir cinayet mi olduğu konusunda ve insanların nasıl doğdukları, yani eşit olarak mı doğdukları, yoksa bunun tam tersi mi olduğu, aslında kişiliğin ne olduğu konusunda epeyce konuştular. Sonunda iş o raddeye geldi ki, Yevdoksiya, içtiği şaraptan kıpkırmızı olmuş bir halde ve düz tırnaklarıyla akordu bozuk piyanonun tuşlarına vura vura kısık sesiyle önce Çingene şarkıları, arkasından da Seymour- Schiff’in “Mahmur Granada Uyukluyor” romansını söylemeye girişti, Sitnikov ise başına atkısını bağladı ve romansın, Ve dudakların benimkilerle Birleşsin bir yakıcı öpüşte..."
  },
  {
    "id": 652,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "İtiraz etti: \"İyi ama, ahıra gelip de ne yapacaksın? Arabacı değilsin sen. Atlarla ne işin var senin[?][\"] Lennie[:] \"Köpek,\" dedi, \"köpeğimi görmeye geldim.\" \"Kim tutuyor seni, git gör köpeğini. Seni istemedikleri yere gelme.\" Lennie, sırıtamaz oldu. İçeri doğru bir adım attı, hatırlayarak kapıya doğru çekildi: \"Biraz baktım onlara."
  },
  {
    "id": 653,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Beyrut’ta denize kavuşmak, annemi biraz canlandırır gibi olmuştu. Misafir olduğumuz evde beni yatağına oturtarak saçlarımı tarıyor, ellerimin kirli, düğmelerimin kopuk olmasına aldırmadan başını göğsüme kapayarak ağlıyordu. Bir gün büsbütün ayağa da kalktı[;] sandığından yeni elbiseler çıkararak süslendi[.] Akşamüstü babamı karşılamak için aşağı indik. Babam, bende biraz vahşi tabiatlı, sert bir asker hatırası bırakmıştır."
  },
  {
    "id": 654,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Şarkıyı söylerken yakalanan hayvanlar oracıkta kırbaçlanıyor, gene de şarkının yayılması engellenemiyordu. Karatavuklar çalılıkların arasında ıslık çalarken, güvercinler ağaçlarda ötüşürken hep bu şarkıyı söylüyorlar; şarkının ezgileri, demircilerin çekiç vuruşlarına, kiliselerin çan seslerine karışıyordu. Ekim başlarıydı[;] ekinler biçilip istiflenmiş[,] harman büyük ölçüde kaldırılmıştı[.] Bir gün birden posta güvercinleri hızla dolanarak geldiler, telaşla Jones ile adamları, Foxwood ve Pinchfield çiftliklerinden yarım düzine adamla birlikte, parmaklıklı kapıdan içeri girmişler, araba yolundan çiftliğe geliyorlardı. Jones, elinde bir tüfek, en önde yürüyor; eli sopalı adamlar da onu izliyorlardı."
  },
  {
    "id": 655,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Yattığım sürece bana hep etrafımda kızıl köpekler koşuyormuş gibi geliyordu, sen de tepeme dikilmiş çulluğa bakar gibi bakıyordun. Sanki sarhoş gibiyim. Beni anlıyor musun[?]” “Rica ederim Yevgeniy[,] son derece düzgün konuşuyorsun.” “Daha iyi ya; doktor için adam yolladığını söylemiştin[...] Bununla kendini avutmuş olacaksın... beni de avut: Bir adam gönder..."
  },
  {
    "id": 656,
    "source": "Stefan Zweig - Satranç",
    "text": "Bunu izleyen on dört günün sonunda, kitaptaki her oyunu kolayca ezbere –ya da profesyonellerin dediği gibi gözü kapalı– oynayabiliyordum; küstah hırsızlığımın bana ne kadar büyük bir iyilik yaptığını ancak anlamaya başlıyordum. Çünkü birdenbire bir uğraşım olmuştu; isterseniz mantıksız, amaçsız olduğunu söyleyin, ama çevremdeki hiçliği yok eden bir uğraştı bu, yüz elli turnuva oyunuyla odanın ve zamanın boğucu tekdüzeliğine karşı kusursuz bir silah geçmişti elime. Yeni uğraşımın çekiciliğini koruması için[,] o andan başlayarak her günü bir güzel böldüm[:] sabahları iki oyun, öğleden sonraları iki oyun, akşamları da hızlı bir tekrar[.] Daha önce jelatin gibi biçimsizce uzayan günlerim böylece doldu, kendimi yormadan bir şeyle uğraşmış oluyordum, çünkü satrancın eşsiz bir yararı vardı, tinsel enerjinin daracık bir alana yönlendirilmesiyle en ağır düşünce eyleminde bile beyni gevşetmiyor, tersine kıvraklığını ve esnekliğini artırıyordu. Önceleri usta oyunlarını makine gibi oynarken, zamanla içimde sanatsal, heves dolu bir anlayış uyanmaya başladı."
  },
  {
    "id": 657,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Bak, gördün mü? Sen de bilmiyorsun; her ne ise, düşün taşın: Orada benim ahbabım olan namuslu bir kadınla rahat rahat yaşayacaksın. Kimse seni tedirgin etmeyecek[;] gürültü patırtı yok[;] her şey tertemiz. Baksana, nedir bu hal? Bir handa yaşıyor gibisin."
  },
  {
    "id": 658,
    "source": "George Orwell - 1984",
    "text": "B sözdağarcığında, ideolojik bakımdan yansız olan tek bir sözcük bulunmuyordu. Pek çoğu örtrneceli 1 söz­ cüklerdi. Örneğin, keyifkamp (zorunlu çalışma kampı[)] ya da Barbak (Barış Bakanlığı, yani Savaş Bakanlığı[)] gibi sözcükler, görünürdeki anlamının nerdeyse tam karşıtı bir anlam taşıyordu. Buna karşılık, kimi sözcükler de Okyanusya toplumunun gerçek yüzünü su götürmez bir biçimde, apaçık ortaya koyuyordu. Örneğin, Parti'nin proleter kitlelere dağıttığı süprüntü yayınlara ve sundu­ ğu asılsız haberlere prolbesi deniyordu."
  },
  {
    "id": 659,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Düşmeye o kadar alışığım ki... Mesela yakın olsak şakağımda bir yara izi görürdünüz. Bir iz ki[;] bütün öteki güzellikleri tamamlar[...] Aman kızım... Düşeceksiniz..."
  },
  {
    "id": 660,
    "source": "Albert Camus - Yabancı",
    "text": "Polis, \"Adın ne?\" diye sordu. Raymond adını söyledi. Polis, [\"]Benimle konuşurken sigaranı at ağzından[!][\"] dedi. Raymond duraladı. Bana baktı, ama sigarasını atmadı."
  },
  {
    "id": 661,
    "source": "Michael Ende - Momo",
    "text": "Gümüş gibi yusyuvarlak bir ay ve pırıl pırıl yıldızlar gökyüzünü aydınlatıyor, çevredeki çamların siluetlerini daha da belirginleştiriyordu. \"Peki\" dedi Gigi. \"Kimi anlatsın masal?\" Gigi biraz düşündükten sonra sordu[:] \"Adı ne olsun?\" \"Belki Sihirli Aynanın Masalı?\" Gigi başı ile olur dedi[:] \"Kulağa hoş geliyor. Bakalım nasıl bir şey?\" İpekler, kadifeler giyinir ve karlarla kaplı bir dağın tepesinde rengârenk yapılmış bir sarayda yaşarmış. En güzel yemekleri yer, en tatlı şaraplardan içermiş."
  },
  {
    "id": 662,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "dedi. Aman Yarabbî, bu parmak kadar köylü çocuğu neler biliyordu! Aynı fütursuzlukla devam etti; [-]Sana İstanbullu yence derim[,] cestane çetiveririm, ağam senin boynuna altınlar tacar[.] Senin yengen yok mu? Var amma, o cara cız, onu da çoban Hasan’a veririz."
  },
  {
    "id": 663,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Kimileri, \"Biz öldükten sonra olacakların bize ne yararı dokunur ki?\" ya da \"Madem bu Ayaklanma nasıl olsa gerçekleşecek, bu uğurda çalışmışız çalışmamışız ne fark eder?\" gibi sorular soruyorlardı. Domuzlar, butür konuşmaların Hayvancılığın ruhuna aykırı olduğunu kavratana kadar akla karayı seçiyorlardı. Soruların en ahmakçası ak kısrak Mollie[']den gelmişti; Mollie[']nin Snowball[']a sorduğu ilk soru, \"Ayaklanma'dan sonra da şeker bulabilecekmiyiz?\" olmuştu. Snowball, \"Hayır,\" diye kesip atmıştı. \"Bu çiftlikte şeker meker üretemeyiz."
  },
  {
    "id": 664,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "“O, bir nihilisttir,” diye tekrarladı Arkadiy. “Bir nihilist,” dedi Nikolay Petroviç. “Anladığım kadarıyla Latince nihil[,] yani hiçbir şey sözcüğünden geliyor; öyleyse bu sözcük[...] hiçbir şeyi kabul etmeyen adam anlamına mı geliyor?” “Hiçbir şeye saygı göstermeyen de,” diye atıldı Pavel Petroviç ve tekrar yağa uzandı. “Her şeye eleştirel bakış açısından bakan,” diye belirtti Arkadiy."
  },
  {
    "id": 665,
    "source": "Michael Ende - Momo",
    "text": "Başka bir yönden yeni bir ses duyuldu: \"Gerçeği söylediğimizi biliyorsun. Verdiğimiz sözü tutarız. Şimdi bizi Hora[']ya götür!\" yutkunduktan sonra konuşabildi: \"Bunu istesem de yapamam.\" Sinirli bir ses bir yerlerden seslendi: \"Ne demek, [']istesem de?' Elbette yaparsın! Sen Hora'ya gitmişsin, yolu biliyorsun!\" Kassiopeia biliyor.\" \"O da kim?\" \"Hora Usta'nın kaplumbağası.” \"Nerede şimdi?\" beraber — dönmüştü — fakat — sonra — onu — kaybettim.\" Çevresinde, çok uzaklardan gelir gibi karmakarışık sesler duyuyordu. Birinin, \"Derhal büyük alarm!\" dediğini duydu, \"Bu kaplumbağa bulunmalı!"
  },
  {
    "id": 666,
    "source": "Michael Ende - Momo",
    "text": "ne yersem o ödüyor.\" Yelekli adam kaşlarını kaldırdı, kafasını salladı; \"Şu sanatçılar!\" diye yüz buruşturdu. \"Ne garip kaprisleri oluyor bazen! Ama gerçekten seni beklediğine eminsen; evi caddenin üst başındaki son evdir[.][\"] Ve kapıyı çarpıp kapadı[.] Kassiopeia'nın sırtında bir yazı belirip silindi: \"Maymun suratlı!\" Caddenin üst başındaki ev, adam boyunu geçen bir duvarla çevriliydi. Kapısı da yelekli adamın evindeki gibi tamamen kapalı, parmaklıksız demirdendi."
  },
  {
    "id": 667,
    "source": "Albert Camus - Yabancı",
    "text": "Raymond da, \"Polis efendi, bir adama pezevenk demenin yasada yeri var mı?\" diye sordu. Ama polis, \"Tut çeneni be!\" diye bağırdı. O zaman, Raymond kadına döndü, [\"]Heledur sen, yine görüşürüz küçük hanım[!]\" dedi. Polis, Raymond'a, \"Sana tut çeneni, dedik be herif! O gidecek, sen karakoldan çağırılıncaya kadar odanda kalacaksın,\" dedi ve \"böyle titreyecek kadar sarhoş olmaktan utanmıyor musun?\" diye ekledi."
  },
  {
    "id": 668,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Gene bir masal uydurmuştu: Sözümona, Balbadem Diyarı denen gizemli bir ülke vardı, bütün hayvanlar öldükleri zaman oraya gidiyorlardı. Moses'a bakılırsa bu ülke gökyüzünde bir yerde, bulutların az ötesindeydi. Balbadem Diyarı[']nda her gün pazardı[;] dört mevsim yonca biter, ağaçlar ve çalılar, kesmeşeker ve keten tohumu küspesinden geçilmezdi. Gerçi hayvanlar, gününü masal anlatmakla geçirdiği ve hiç çalışmadığı için Moses'dan nefret ediyorlardı; ama gene de, Balbadem Diyarı masalına inananlar çıkmadı değil. Domuzlar, onları böyle bir yer olmadığına inandırabilmek için az dil dökmediler."
  },
  {
    "id": 669,
    "source": "Stefan Zweig - Satranç",
    "text": "Dr. B. okuma gözlüğünü çıkardı[,] kenara koydu ve anlatmaya başladı[:] “Bir Viyanalı olarak ailemin adını anımsadığınızı söylemeniz çok hoştu[.] Ama önceleri babamla birlikte, sonra da tek başıma çalıştırdığım avukatlık bürosunu duymamışsınızdır sanırım, çünkü gazetelerde boy boy yayınlanan davalarımız yoktu ve ilke olarak yeni müvekkiller almıyorduk. Gerçeği söylemek gerekirse, doğru düzgün bir avukatlık işi yapmaz olmuştuk, aşırı sağ partinin eski bir üyesi olan babamın ilişkisi olduğu büyük manastırların hukuk danışmanlığını ve öncelikle mali yönetimini yürütüyorduk yalnızca."
  },
  {
    "id": 670,
    "source": "George Orwell - 1984",
    "text": "Ses, sağ­ daki duvarın bir bölümünü kaplayan ve donuk bir ayna­ yı andıran dikdörtgen bir madeni levhadan geliyordu. Winston düğmelerden birini çevirince ses kısılır gibi oldu, ama sözcükler hala seçilebiliyordu. Aygıt [(]tele­ ekran deniyordu[)] hafifçe karartılabiliyorsa da[,] tümüyle kapatılamıyordu. Winston pencereye ilerledi; ufak tefek, kavruk bir adamdı, ama Parti üniforması mavi tulumun içinde çelimsizliği pek o kadar belli olmuyordu. Saçının rengi çok açık, yüzü pespembeydi, teni kötü sabun kul­ lanmaktan, kör jiletlerle tıraş olmaktan ve kısa bir süre önce sona eren kışın soğuğundan hışır hışır olmuştu."
  },
  {
    "id": 671,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"Bu sabah hâlâ gelmediğinizi görünce, fena halde küplere bindi.\" Sağ kolunu uzattı, yeninden ensiz, odun parçası gibi yusyuvarlak bir bilek çıktı: Sobanın yanındaki iki yatağı göstererek: \"Şu iki yatakta yatabilirsiniz,\" dedi. George yaklaştı ve şilte vazifesini gören saman çuvalının üstüne battaniyesini attı. Raflık sandığına baktı ve içinden sarı bir teneke kutu aldı[:] \"Hey, bu da nesi[?]\" İhtiyar: \"Bilmem,\" dedi. \"Bit, karafatma ve her türlü böcekleri toptan yok eder, yazılı burada. Ne biçim yataklar veriyorsunuz bize?"
  },
  {
    "id": 672,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Ama yakında, çok yakında iyileşecektim. Çocukların yaraları çabuk kabuk bağlar. Bana sık sık yineledikleri[;] ‘evlendiğinde geçecek’ cümlesinde olduğu gibi[.] Hatta çok daha çabuk. * * * O akşam babam dışarı çıkmamıştı."
  },
  {
    "id": 673,
    "source": "George Orwell - 1984",
    "text": "Fırçayı yedi ben­ den. Bir daha yaparsa sapanını alacağımı söyledim.'' \"İdamı seyretmeye gidemediği için biraz öfkeliydi sanırım,\" dedi Winston. [\"]Ya, evet; ruh var çocukta, öyle değil mi[?] Benim ufaklıklar biraz yaramaz, ama ikisi de hayat dolu piç ku­ rularının. Varsa yoksa Casuslar ve savaş tabii."
  },
  {
    "id": 674,
    "source": "Stefan Zweig - Satranç",
    "text": "İlk açılışı yapar yapmaz, gerisi kendiliğinden aklımda beliriyordu, artık sürpriz, gerilim, sorun kalmamıştı. Kendimi oyalamak için, artık onsuz olamadığım düşünsel zorlanmayı yaratmak için, başka oyunlar içeren başka bir kitap gerekliydi bana aslında. Ama bu kesinlikle olanaksız olduğundan[,] bu tuhaf çılgınlıktan kurtulmanın tek bir yolu kalıyordu[:] Eski oyunların yerine yenilerini bulmalıydım. Kendimle, daha doğrusu kendime karşı oynamaya çalışmalıydım. Bu oyunlar oyununun yarattığı tinsel durum üzerine ne dereceye kadar kafa yorduğunuzu bilmiyorum."
  },
  {
    "id": 675,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Yok, yok, benimle kalacaksın. Clara teyzen ölmüş olsa da, senin böyle tek başına dolaşmandan hiç de hoşlanmazdı.\" Lennie, kurnazca: \"Anlatsana... hani, her zamanki gibi.[\"] \"Neyi anlatayım[?]\" \"Tavşanları.\" George kesip attı[:] \"Yağma yok, boşuna yorulma.\" Lennie yalvardı. \"Hadi George, anlat bana. Ne olursun, George."
  },
  {
    "id": 676,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Yoksa beni bir kadın olarak güveninize layık biri saymıyor musunuz? Aslında siz hepimizi küçümsüyorsunuz.” “Sizi küçümsemiyorum, Anna Sergeyevna, bunu siz de biliyorsunuz.” “Hayır, hiçbir şey bilmiyorum... ama diyelim ki, gelecekteki hayatınızdan bahsetmek istemediğinizi anlıyorum[;] ya şimdi içinizde olup bitenler[...]” “Olup bitenler[!]” diye tekrarladı Bazarov. “Sanki ben bir devletim ya da bir şirketim de! Neyse, bunlar hiç de merak edilecek şeyler değil; hem bir insan içinde ‘olup bitenleri’ her zaman yüksek sesle söyleyebilir mi?” “Bir insanın ruhundaki şeyleri söylemesi neden olanaksızmış anlayamıyorum.” “‘Siz’ yapabilir misiniz?” diye sordu Bazarov."
  },
  {
    "id": 677,
    "source": "George Orwell - 1984",
    "text": "Ger­ çek Bakanlığı'nın beyaz cephesindeki üç slogan, bir yanıt gibi karşısında duruyordu: SAVAŞ BARIŞTIR ÖZGÜRLÜK KÖLELİKTİR CAHİLLİK GÜÇTÜR. Winston cebinden bir yirmi beş sent çıkardı. Made­ ni paranın üstünde de küçük, okunaklı harflerle aynı slo­ ganlar yazılıydı; öbür yanında ise Büyük Birader['] in yüzü görülüyordu[.] Büyük Birader' in gözleri paranın üstünden bile sizi izliyordu. Paraların, pulların, kitap kapaklarının, bayrakların, posterlerin, sigara paketlerinin üstünden ."
  },
  {
    "id": 678,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "\"Yiğitlik yeterli değildir,\" diye karşılık verdi Squealer. \"Sadakat ve itaat daha önemlidir. Ağıl Savaşına gelince[;] Snowrball[']un bu savaştaki rolünün çok fazla abartıldığını bir gün anlayacağınıza inanıyorum[.] Disiplin, yoldaşlar, demir disiplin! Bugün parolamız bu olmalı."
  },
  {
    "id": 679,
    "source": "Stefan Zweig - Satranç",
    "text": "C’est son métier.5 Dişim ağrısaydı ve gemide tesadüfen bir diş doktoru olsaydı, dişimi bedavaya çekmesini isteyemezdim ya. Adam ücretini yüksek tutmakta çok haklı; her meslekte gerçek profesyoneller aynı zamanda en iyi işadamlarıdır. Bana gelince[;] bence iş ne kadar açık olursa[,] o kadar iyidir. Bir Herr Czentovic’in bana iyilik yapmasına izin vermektense ve sonunda bir de ona teşekkür etmek durumunda kalmaktansa, para öderim daha iyi. Sonuçta kulübümüzde bir akşamda iki yüz elli dolardan fazlasını kaybettiğim oldu ve bir dünya şampiyonuyla da oynamamıştım."
  },
  {
    "id": 680,
    "source": "Michael Ende - Momo",
    "text": "Bir önerim var: Hemen üçümüz gidip, kimi görürsek haber verelim. Onlar da başkalarına haber versin. Her gün öğleden sonra üçte burada toplanalım[!][\"] İki adam biraz gittikten sonra, o zamana kadar hiç konuşmamış olan Beppo birdenbire durdu; [\"]Bana bak Gigi\" dedi. \"İçim rahat değil.\" Gigi ona döndü, \"Neden?\" galiba doğruydu diyorum\" dedi. \"Eee, yani ne olmuş?\" diye sordu Gigi."
  },
  {
    "id": 681,
    "source": "Albert Camus - Yabancı",
    "text": "Hiç değilse bu hal, savcının bir an sustuktan sonra, pek hafif ve etkili bir sesle, \"Baylar, bu mahkeme, yarın, cinayetlerin en iğrencini işleyen bir başka adamı, bir baba katilini yargılayacaktır,\" dediği zamana kadar sürdü. Ona göre bu vahşi cinayet karşısında insanın aklı dururmuş. [\"]Umarım ki, insanların adaleti, zaafa düşmeden onun cezasını verir[!][\"] dedi. Şunu da söylemekten çekinmiyormuş: Bu cinayetin kendinde uyandırdığı dehşet, benim duygusuzluğum karşısındaki dehşetinden daha çok değilmiş. Yine hep ona göre, anasını manen öldüren bir adam, kendini dünyaya getirenlerin canına kıyan kimse kadar insanlıktan çıkarmış."
  },
  {
    "id": 682,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "O hâlâ arkamdan parmağını sallıyor: “Gülürsün he çapkın, gülürsün!” diyordu. Yol, şimdiden uzamaya başlamış olmayıp da gözlerimi görebilseydin, bu sözleri söylemeyecektin Hacı Kalfacığım. Araba; inişli yokuşlu dağ yollarına girmişti; kâh kurumuş sel çukurlarından geçiyor[,] kâh boş tarlaların[,] bozulmuş bağların kenarlarını takip ediyordu. Seyrek fâsılalarla tek tük köylülere, yorgunluktan inler gibi sesler çıkaran kağnılara tesadüf ediyorduk. İnce bir bağ yolundan, eşkıya gibi korkunç kıyafetli, uzun bıyıklı iki jandarma geliyordu."
  },
  {
    "id": 683,
    "source": "Albert Camus - Yabancı",
    "text": "Pek yorulmuşa benziyordu. Soruşturmayı durmadan izleyen daktilo, son cümlelerini yazarken, yargıç bir an sustu. Sonra, bana dikkatli dikkatli, biraz da üzgün bir tavırla baktı baktı da[:] [\"]Böyle katı yürekli insan görmedim ömrümde[!] Karşıma çıkan suçlular, bu 'acı simgesi'nin önünde daima gözyaşı dökmüşlerdi,\" diye mırıldandı. Neredeyse, onlar katil de ondan diye karşılık verecektim."
  },
  {
    "id": 684,
    "source": "Stefan Zweig - Satranç",
    "text": "Bu tempoda ancak uyuyakalmamak için zorlanırım! Evet! Başlayın artık[!]” Son sözleri kızgın, neredeyse kaba bir ses tonuyla söylemişti Czentovic’e[.] O ise Dr. B.ye hiç istifini bozmadan baktı, ama taş gibi sert bakışları sıkılmış bir yumruk gibiydi."
  },
  {
    "id": 685,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "müyesser: Kolaylıkla ortaya çıkan, kolaylıkla elde edilen. müzahrafat: (Müzahrefat) Parlak boyalar ve süsler. müzakere etmek[:] [(]Metinde[)] Öğrencilerin ders hazırlamaları için çalışmaları. müzakere etmek: Öğrencilerin ders hazırlamaları için çalışmaları. müzakkere: (Müzekkere) Bir iş hakkında üst makama sunulan yazı."
  },
  {
    "id": 686,
    "source": "Michael Ende - Momo",
    "text": "her şey yoluna girer, biz üçümüz bu halimize güleriz.\" \"Öyle mi dersin?\" diye mırıldandı Beppo, üzerine bir yorgunluk çökmüştü. Bugünkü olaylar bu yaşlı adama çok fazla gelmişti. Gigi, [\"]Elbette\" diyerek Beppo[']nun ayakkabılarını çıkardı; onu yavaşça yatağa yatırdı; ayaklarına ıslak bez sararak, \"Hepsi geçecek, her şey düzelecek\" diye onu yatıştırdı. Beppo'nun uykuya daldığını anlayınca kendisi de yere uzanıp ceketini başının altına koydu. Fakat uyuyamıyordu."
  },
  {
    "id": 687,
    "source": "Stefan Zweig - Satranç",
    "text": "Ama her türlü normallikten zorla kopartılmış olduğumu unutmayın; suçsuz olmasına karşın hapsedilmiş, aylardır tek başına bırakılarak kurnazca işkence yapılmış bir tutukluydum ben, birikmiş öfkesini uzun zamandan beri herhangi bir şeye boşaltmak isteyen bir insandım. Ve kendime karşı oynadığım bu mantıksız oyundan başka bir şeyim olmadığı için, öfkem, intikam hevesim fanatik bir biçimde bu oyuna yöneldi. İçimdeki bir şey haklı çıkmak istiyordu ve savaşabildiğim tek şey içimdeki bu öteki ben’di[;] böylece oyun sırasında neredeyse delice bir heyecana kapılmaya başladım[.] Başlangıçta sakin ve düşünüp taşınarak oynamıştım, kendimi fazla zorlamamak için bir oyundan ötekine geçerken ara vermiştim; ama gerilmiş sinirlerim yüzünden yavaş yavaş sabrım tükendi. Beyaz ben bir hamle yapar yapmaz, siyah ben hırsla saldırıyordu; bir oyun biter bitmez, hemen ötekine koyuluyordum, çünkü her seferinde iki ben’den biri ötekine yeniliyor ve rövanş istiyordu."
  },
  {
    "id": 688,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Başına bir şey mi gelmişti yoksa? Adamlar Mollie'yi kaçırmış olmasınlardı? Uzun aramalardan sonra Mollie[']yi ahırda buldular[;] ahırdaki bölmesine saklanmış[,] kafasını yemlikteki samanlara gömmüştü. Silahlar patlar patlamaz ürküp kaçmıştı. Mollie'yi aramaya çıkanlar avluya döndüklerinde bir de baktılar, seyis ortalarda yok."
  },
  {
    "id": 689,
    "source": "Albert Camus - Yabancı",
    "text": "Beyaz duvarlara vuran ışığın parıltısı gözlerimi yoruyordu. Kapıcı, olamayacağını söyledi. Ya hep yanarmış[,] ya da hiç; tesisat böyle yapılmış[.] Artık ona pek dikkat etmedim. Dışarı çıktı, içeri girdi, iskemleleri sıraladı."
  },
  {
    "id": 690,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Mihailov, Petrov, Semyonov, Stepanov... Saymakla bitmez; bir alay insan, hepsi böyle. biraz sonra[:] [—] Evet, dedi[;] zaman insanları değiştiriyor; ben seni bu durumda bırakmam artık, alıp götüreceğim seni. İlkin Avrupa'ya, sonra da köye. Bu göbeği eriteceksin, kendine geleceksin, sonra da bir iş bulacağız sana."
  },
  {
    "id": 691,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "2. (Fr.) Aşırı serbest olmuş. [(]Ç.N.[)] V Ertesi gün Bazarov herkesten önce uyandı ve evden çıktı. “Vay canına!” diye düşündü etrafına bakıp. “Burası da pek gösterişsiz bir yermiş.” Nikolay Petroviç köylülerle araziyi paylaştığında yeni çiftliği için dört dönüm kadar dümdüz ve kupkuru tarla ayırmak zorunda kalmıştı."
  },
  {
    "id": 692,
    "source": "George Orwell - 1984",
    "text": "Ama her nasılsa onun sesiydi işte. Karanlıkta onunla konuşan, O'Brieı'l'dı. Winston, O[']Brien[']ın dost mu, düşman mı olduğunu hiçbir zaman çıkaramamıştı; sabahleyin gözlerinde ya­ nıp sönen parıltıdan sonra bile emin olamamıştı bundan. Kaldı ki, o kadar önemli de değildi. Aralarında, sevgiden ya da partizanlıktan da önemli bir karşılıklı anlayış oluş­ muştu."
  },
  {
    "id": 693,
    "source": "Albert Camus - Yabancı",
    "text": "Ufak tefek, yusyuvarlak, oldukça da genç bir adamdı. Saçları iyiden iyiye kafasına yapışmıştı. Sıcağa karşın [(]ben kolları sıvalı gömlekliydim), koyu renkli bir elbise giymiş, dik bir yaka ve aklı[-]karalı, kalın çizgili, tuhaf bir boyunbağı takmıştı. Koltuğunun altındaki çantasını yatağımın üzerine koydu, kendini tanıttı ve dosyamı incelediğini söyledi. Benim sorunum nazik bir sorunmuş, kendisine güvenirsem başarıdan kuşkuya yer yokmuş."
  },
  {
    "id": 694,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Sokağın en sonunda. Otomobili evinin yanına çekiyor. İki kuş kafesi var[;] birinde kanarya besliyor[,] öbüründe muhabbetkuşu[.] Bir gün erkenden, hiçbir şeyin farkında değilmişim gibi, boyacı sandığımla gittim oraya. Gitmeyi o kadar çok istiyordum ki, Minguinho; bu kez sandığımın ağırlığını hissetmedim bile."
  },
  {
    "id": 695,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Benden nefret ettiğini sanıyordum.” Glória beni yerden kaldırdığında bayılmıştım. Kendime geldiğimde ateşten tirtir titriyordum. Annem[,] Glória başucumdaydılar[;] bana tatlı sözler söylüyorlardı[.] Odaya bir sürü insan girip çıkıyordu. Dindinha’yı bile getirmişlerdi."
  },
  {
    "id": 696,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Ama Bangu’dan ayrılmak istemiyorum. Dindinha’yla kalırım. Buradan ancak Trâs[-]os[-]Montes’e gitmek için ayrılırım…” “Anlıyorum. Bizimle gelmektense Dindinha’yla kalmayı ve her ay bir müshil almayı yeğliyorsun, öyle mi?” “Evet, ama nedenini hiçbir zaman öğrenemeyeceksin… Peki, İkincisi?” “Burada söyleyemem. Duymaması gereken ‘biri’ var.” Onunla ‘kulübe’nin yanına kadar gittim."
  },
  {
    "id": 697,
    "source": "George Orwell - 1984",
    "text": "O yüzden hoşuma gidiyor ya. Tarihin, değiştirmeyi unuttukları küçücük bir parçası. Yüz yıl ön­ ceden bir bildiri, okumasını bilene kuşkusuz.\" \"Ya şuradaki resim\" [-]karşı duvardaki gravürü göster­ di[-] \"o da yüz yıllık var mıdır[?]\" \"Daha fazla. İki yüz yıllık falan olabilir. Kim bilir."
  },
  {
    "id": 698,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Üstelik babamın çiftliği de oradan pek uzak değil. Zaten Nikolskoye ... yolunun üzerinde değil mi[?]” “Evet[.]” “Optime[.]37 İşi uzatacak bir şey yok; yalnız aptallar işi uzatırlar, ha bir de sivri akıllılar. Sana dedim ya, o ne müthiş vücut!” Üç gün sonra iki arkadaş Nikolskoye yolunda ilerliyorlardı. Pırıl pırıl, çok sıcak olmayan bir gündü ve arabanın besili atları, sarılmış ve örülmüş kuyruklarını hafifçe sallayarak uyumlu bir şekilde koşuyorlardı."
  },
  {
    "id": 699,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "İşte bakın gençlik neyle uğraşıyor, genç insanların deneyimsiz yürekleri neyin esiri oluyor! İşte bakın, biri yanınızda oturuyor, nerdeyse size tapacak, doya doya seyredin. [(]Arkadiy başını çevirdi ve kaşlarını çattı.[)] Üstelik bu hastalık pek uzaklara yayılmış. Bana anlattıklarına göre, bizim Roma’daki ressamlar, Vatikan’a ayaklarını bile basmıyorlarmış. Raffaello’yu12 neredeyse budala sayıyorlarmış, çünkü efendim o bir otoriteymiş; kendileri ise çirkeflik derecesinde güçsüz ve verimsiz insanlar, hayal güçleri ise Çeşme Başındaki Kız’dan ötesine yetmez!"
  },
  {
    "id": 700,
    "source": "Michael Ende - Momo",
    "text": "Gittikçe daha çabuk... Her seferinde önüne baktığında yol kısalır gibi olmuyor. Daha hızlı[,] daha gayretli[,] daha korkulu çalışıyorsun; sonunda nefesin kesilip güçsüz kalıyorsun. Ve cadde önünde upuzun duruyor. İnsan böyle yapmalı.\" Susup, biraz daha düşündükten sonra sürdürdü konuşmasını: \"Caddeyi bütünüyle görüp düşünmemeli."
  },
  {
    "id": 701,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Ama o zaman da insanda başka şeyler olmalı... Mesela kuvvetli bir zekâ. Herkesin hayran olduğu bir kafanın karşısında o da Halbuki Ştoltz mesela, öyle mi ya[:] Zekâsı var[;] kendini, başkalarını idare edebiliyor; hayatına düzen verebiliyor. Nereye gitse, rastladığı insanları kazanıyor, onlara her istediğini yaptırabiliyor... Halbuki..."
  },
  {
    "id": 702,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "“Senin her türlü önyargıdan uzak olduğunu bunu sormadan da biliyordum,” diye mırıldandı. “Bana gelince; benim gibi altmış ikinci yaşını yaşayan bir ihtiyarın bile böyle önyargıları yok. [(]Vasiliy İvanoviç ayini kendisinin istediğini itiraf edecek cesareti gösterememişti[...] Kendisi de en az karısı kadar dindardı.) Peder Aleksey de seninle tanışmayı çok istiyordu. Göreceksin, ondan hoşlanacaksın."
  },
  {
    "id": 703,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Her şeyi öğrendiğim gibi bu şarkıyı da öğrenmiştim, müziği de güzeldi. Ne demek istediğini düşünmeden söyledim. Ama beni öyle kötü dövdü ki, Portuga[;] öyle kötü dövdü ki[.] Önemi yok artık.” Uzun uzun burnumu çektim. “Önemi yok, onu öldüreceğim!” “Ne diyorsun sen, küçük; babamı mı öldüreceksin?” “Evet, yapacağım bunu."
  },
  {
    "id": 704,
    "source": "Stefan Zweig - Satranç",
    "text": "Sonra hesap yapmayı denedim, rastgele sayıları toplamayı, bölmeyi, ama belleğim boşlukta pek iyi çalışmıyordu. Hiçbir şey üzerinde kafamı toplayamıyordum. Hep aynı düşünce çakıyordu beynimde[:] Ne biliyorlar[?] Dün ne söyledim, gelecek sefer ne söylemeliyim? Sözcüklerle anlatılamayacak bu durum dört ay sürdü."
  },
  {
    "id": 705,
    "source": "George Orwell - 1984",
    "text": "Yıllarca beyni­ ni yıkarlar. Çoğu zaman işe yaradığını söylemeliyim. Ama yine de bilemezsin tabii[;] insanlar o kadar ikiyüzlüdür ki[.][\"] Giderek konunun ayrıntılarına girdi. Önünde so­ nunda her şeyi kendi cinselliğine getiriyordu. Bu konuda kafası çok iyi çalışıyordu."
  },
  {
    "id": 706,
    "source": "Albert Camus - Yabancı",
    "text": "Tam o sırada, Raymond'un odasında bir kavga gürültüdür başladı. Önce keskin bir kadın sesi, sonra, Raymond'un şu sözleri duyuldu: \"Kazığı attın bana, kazığı! Bana oyun etmek neymiş, göstereceğim sana[!][\"] Boğuk boğuk seslerden sonra, kadın öyle müthiş bir çığlık kopardı ki, merdiven sahanlığı bir anda, hıncahınç doldu. Marie ile biz de çıktık. Kadın durmadan bağırıyor, Raymond da veryansın ediyordu."
  },
  {
    "id": 707,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Nikolay Petroviç o sıralarda yeni çiftliğine henüz taşınmıştı ve toprağında oturan köylüleri yanında tutmak istemediğinden parayla çalıştırabileceği insanlar arıyordu; kadın kentten gelip geçenlerin sayısının çok az olduğundan, zor günler geçirdiğinden yakınıyordu; Nikolay Petroviç, kadına evine gelip kâhya olarak çalışmasını teklif etti; o da kabul etti. Kocası, geride bir tek kız çocuğu, Feneçka’yı bırakıp yıllar önce ölmüştü. İki hafta kadar sonra Arina Savişna [(]yeni kâhyanın adı buydu[)] kızıyla birlikte Maryino’ya geldi ve müştemilata yerleşti[.] Nikolay Petroviç’in seçimi doğru bir seçimdi. Arina, eve düzen getirdi."
  },
  {
    "id": 708,
    "source": "Michael Ende - Momo",
    "text": "Aralarında minicik kıymetli taşlarla süslü kol ve cep saatleri, çıngıraklı saatler, kum saatleri, üzerlerinde oyuncakların döndüğü kurgulu saatler, güneş saatleri, tahtadan, taştan, camdan yapılmış çeşitli saatler ve akan bir suyun pırıltısı ile çalışan saatler göze çarpıyordu. Duvarlarda guguklu saatlerin her türlüsü asılıydı. Duvarlara dayalı duran dolaplı ve sarkaçlı saatlerin kimisi ağır bir tempo ile dan[-]dan[-]dan diye, kimisi daha hızlı din-dan, din-dan diye işliyordu. Döner merdivenle çıkılan ve salonun bütün etrafını kaplayan bir asma kat vardı, bunun da üzerinde aynı şekilde balkon gibi asma katlar birbirlerine döner merdivenlerle bağlanmış olarak sıralanmıştı, göz alabildiğince. Buralar da hep saatlerle doluydu."
  },
  {
    "id": 709,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Ama her seferinde öyle güzel bahaneler uyduruyor, öylesine sevecen mırlıyordu ki, herkesi iyi niyetine inandırmayı başarıyordu. Yaşlı eşek Benjamin, Ayaklanma'dan bu yana hiç değişmemiş gibiydi. Tıpkı Bay Jones[']un zamanında olduğu gibi[,] gene uyuşuk ve dik kafalıydı; ne işten kaytarıyordu[,] ne de fazla çalışmaya gönül veriyordu. Ayaklanma ve sonuçları konusunda en küçük bir görüş belirtmiyordu. Jones çiftlikten gittikten sonra daha mutlu olup olmadığı sorulduğunda, \"Eşekler uzun yaşar."
  },
  {
    "id": 710,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "O yalnızca mükemmel bir kadın değil, aynı zamanda çok akıllı bir kadın doğrusu. Bugün sabahleyin benimle yarım saat konuştu, öyle dikkate değer, ilginç bir konuşmaydı ki.” “Mutlaka hakkımdaki her şeyi anlatmıştır. Öyle değil mi[?]” “Sadece senden söz etmedik.” “Belki de öyledir[;] sen dışarıdan daha doğru görürsün. Eğer bir kadın bir konuşmayı yarım saat sürdürebiliyorsa bu iyiye işarettir. Ama ben yine de gideceğim.” “Onlara bu haberi vermek senin için zor olacak."
  },
  {
    "id": 711,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "İri adam: \"Hoş geldiler,\" dedi. \"Benim adım Carlson'dur.\" \"Benim George Milton. Bunun da Lennie Small.\"[3] Carison[:] \"Küçük[!] ha,\" dedi. \"Pek de küçüğe benzemiyor.\" \"Hiç de küçük değil,\" diye tekrarladı."
  },
  {
    "id": 712,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Dediklerini George'a haber vereceğim. George, Lennie'ye sataşmana izin vermez.\" \"George da kim?\" diye sordu. \"Seninle gelen şu ufak tefek oğlan mı[?]\" Lennie[']nin yüzü güldü: \"O ya,\" dedi. \"Odur işte, tavşanlara bakmama izin verecek.\" \"Adam sen de, istediğin bundan ibaretse ben de sana tavşan alırım.\" Crooks, yatağından kalkarak kadının önüne dikildi. Soğuk bir tavırla: \"Yeter artık be,\" dedi."
  },
  {
    "id": 713,
    "source": "Albert Camus - Yabancı",
    "text": "Bütün bu telaşa benim neden olduğumu anlamak için kendimi zorlamam gerekti. Jandarmaya, \"Amma da kalabalık ha!\" dedim. [\"]Gazeteler yüzünden,\" dedi ve bana jüri üyelerinin oturdukları yerin alt kısmındaki masanın yanı başında duran bir sürü insanı göstererek[:] \"İşte onlar[!]\" diye ekledi. \"Kimler?\" diye sordum. \"Gazeteciler,\" diye karşılık verdi."
  },
  {
    "id": 714,
    "source": "Michael Ende - Momo",
    "text": "Basit tiyatrolarda ise aynı işi saz ve samandan örülmüş hasırlar görürdü. Sözün kısası tiyatrolar insanların gücüne göre yapılmıştı. Ancak bütün insanlar tiyatro istiyorlardı[;] çünkü hepsi tutkulu birer seyirci ve dinleyiciydi[.] Seyirciler, heyecanlı olsun, komik olsun, sahnedekileri kendi günlük hayatlarından gizemli bir biçimde daha gerçekmiş gibi görüyorlardı. Başka gerçeği izlemeyi seviyorlardı."
  },
  {
    "id": 715,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Yüzüme bak. O adamın senin burnunu okşamadığına namusun üstüne yemin eder misin?\" Mollie, \"Yalan! Öyle bir şey olmadı[!]\" diye yinelediyse de, gözlerini Clover[']ın gözlerinden kaçırdı; tarlaya doğru dörtnala tabanları yağladı. Birden, Clover'ın kafası bir şeye takıldı. Kimseye bir şey söylemeden Mollie'nin ahırdaki bölmesine girdi, ayağıyla biraz eşeleyince samanların arasına bir avuç kesmeşeker ile çeşitli renklerde kurdeleler gizlenmiş olduğunu gördü."
  },
  {
    "id": 716,
    "source": "Michael Ende - Momo",
    "text": "Sağda solda sıralanan binalar, kulelerle, balkonlarla süslenmiş camdan birer saraydılar. Sanki yıllarca deniz dibinde kalmış da, üzerleri yosunlar, mercanlar, çeşit çeşit deniz kabuklarıyla bezenmiş ve birden su yüzüne çıkmış gibi, bir sedef parıltısı içinde idiler. Bu sokağın sonunda tek bir ev vardı[;] sokak o evin önüne çıkıyordu[.] Evin başının üzerinde, mermer bir sokak levhası gördü. Üstünde altın harflerle şu yazı okunuyordu: Hiçbir Zaman Sokağı kaplumbağa uzaklaşmış, sokağın dibindeki evin kapısına varmıştı bile."
  },
  {
    "id": 717,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Defolun gidin, hemen. Kötü bir insan değilim, ama başkalarının hayatına karışan cadalozların dilini kesmek gibi bir huyum vardır.” Kocakarı kaskatı kesilip uzaklaştı. Biraz ötede döndü, öfkeli bir hareketle şemsiyesini salladı[:] “Göreceksiniz[!]..” “Defolun, seni zardalozun cadalozu[!]..” Kadın şemsiyesini açtı ve uzaklaştı. * * * Öğleden sonra Bay Ariovaldo ‘paraları’ sayıyordu. “Elimdekilerin hepsini sattım, Zezé."
  },
  {
    "id": 718,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Snowball da (en iyi yazı yazan oydu) fırçayı iki toynağının arasına geçirip kapının en üstteki kol demirine yazılı BEYLİK ÇİFTLİK adını karaladı, yerine HAYVAN ÇİFTLİĞİ yazdı. Çiftlik artık bu adla anılacaktı. Daha sonra[,] çiftlik binalarına geri dönüldü[;] Snowball ile Napoléon bir merdiven getirtip büyük samanlığın duvarına dayadılar. Domuzlar, üç aydır sürdürdükleri çalışmalar sonucunda, Hayvancılığın temel ilkelerini yedi emirde toplamayı başarmışlardı. Şimdi bu hayatlarının sonuna dek bu değişmez yasalara uyacaklardı."
  },
  {
    "id": 719,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Moses'a bakılırsa bu ülke gökyüzünde bir yerde, bulutların az ötesindeydi. Balbadem Diyarı'nda her gün pazardı; dört mevsim yonca biter, ağaçlar ve çalılar, kesmeşeker ve keten tohumu küspesinden geçilmezdi. Gerçi hayvanlar[,] gününü masal anlatmakla geçirdiği ve hiç çalışmadığı için Moses[']dan nefret ediyorlardı; ama gene de, Balbadem Diyarı masalına inananlar çıkmadı değil. Domuzlar, onları böyle bir yer olmadığına inandırabilmek için az dil dökmediler. En sadık tilmizleri, iki araba atı, Boxer ile Clover'dı."
  },
  {
    "id": 720,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Ama bana madik atmaya kalkışayım deme, Milton. Gözüm sende olacak. Weed[']den neden ayrıldmız?\" George hemen atıldı: \"İş bitmişti de.\" \"Neydi yaptığmız iş?\" \"Şey[...] Lağım kazıyorduk.\" \"Tamam... Yalnız bana madik atmaya kalkma, çünkü yutturamazsın."
  },
  {
    "id": 721,
    "source": "Michael Ende - Momo",
    "text": "Siz polisi böyle umacı masallarına kanacak kadar aptal mı sanıyorsunuz?\" Beppo'nun ağzından farkında olmadan \"Evet\" sözü çıktı. Polis de çileden çıktı. Sandalyesinden fırlayıp önünde yığılı formları yumruklamaya başladı; bir yandan da bağırıyordu[:] [\"]Yetti artık be[.] Yetti! Hemen çıkıp gitmezsen, seni memura hakaretten içeri tıkarım!\" \"Affedersiniz\" diye mahçup mahçup mırıldandı Beppo."
  },
  {
    "id": 722,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Ama kekelediği için işinden atmışlar. Vekâletnamemi ve planları ona vereceğim. Ev için yapı malzemesini alır[;] paraları toplar[;] buğdayı satar[;] parayı getirir. O zaman... Senden ayrılmayacağıma çok memnunum Olga."
  },
  {
    "id": 723,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Feride evvela, “Ehemmiyeti yok, ne çıkar?” diyordu. Fakat sonra Müjgân’ın söz ve bakışlarındaki manayı anladı. Kabahatli bir çocuk gibi mahcup ve korkak[,] başını önüne indirdi, yavaşça; [-]Evet, fazla yorgunum, belki hasta olurum, dedi. Haline bir hasta kadın yorgunluğu çökmüş, gözlerinin biraz evvelki neşesi sönmüştü: Hâlâ Kâmran’a bakan Müjgân yavaşça: -Sen, zannettiğimden ziyade kalpsizsin Kâmran! dedi."
  },
  {
    "id": 724,
    "source": "George Orwell - 1984",
    "text": "Winston'ın yüreği öylesine hızlı atıyordu ki, konuşa­ mayacağından korkuyordu. Tek düşünebildiği, sonunda başarmış olduklarıydı. Aslında buraya gelmekle aceleci davranmışlardı; hem[,] ayn yollardan gelip O[']Brien[']ın ka­ pısının önünde buluşmuş olsalar da, birlikte gelmeleri tam bir çılgınlıktı. Ama böyle bir yere gelmek başlı başı­ na bir cesaret işiydi. Birinin İç Parti üyelerinin oturdukla­ rı evlerin içini görmesi, hele yaşadıkları mahalleye adım atması işitilmiş şey değildi."
  },
  {
    "id": 725,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Hem, o senin gibi yalnız değildi, inşallah yine seni böyle kucağıma alırım.” dedi, hıçkıra hıçkıra ağlamaya başladı. Şahap Efendi’nin yanımızda olmasına rağmen, ben de galiba kendimi tutamayacaktım. Fakat o esnada bir kargaşalık oldu; “Haydi hanım, merdiven kalkıyor[!]” diye kalfacığımı omuzlarından yakaladılar, tartaklaya tartaklaya merdivenden indirmeye başladılar[.] Küçük kâtip hâlâ yanımda duruyordu. Teşekkür için elimi uzattığım vakit, benzini sapsarı, gözlerini dolmuş gördüm, ilk defa dikkatle yüzüme bakmaya, adımı söylemeye cesaret etti: -Feride Hanım, büsbütün gidiyorsunuz demek, dedi."
  },
  {
    "id": 726,
    "source": "George Orwell - 1984",
    "text": "O'Brien dişi kökünden söküp alıvermişti. Hücrenin bir köşesine fırlatıp attı. [\"]Çürüyorsun,[\"] dedi; [\"]parça parça dağılıyorsun. Sen nesin, biliyor musun? Bir pislik torbası."
  },
  {
    "id": 727,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Ah, ne güzel bir kareli bir gömlekti o. Koca bir adam olunca ben de böyle bir gömlek alacaktım kendime. Üstelik[,] boynuna kırmızı bir atkı dolamış; şapkasını da biraz geriye doğru itmişti[.] Derken, sokağı neşeye boğan kalın sesiyle başladı: “Yaklaşın, baylar, bayanlar! Günün yenilikleri!” Bahialı şivesi de güzeldi."
  },
  {
    "id": 728,
    "source": "Michael Ende - Momo",
    "text": "Elde edeceğimiz kârı düşünün, baylar!\" Konuşmacı yerine oturdu, herkes kârı düşünüyordu. Sonunda altıncı konuşmacı, \"Gene de bu iş olmaz!\" dedi. [\"]Neden[?]\" \"Nedeni basit; bu kızın zaten istediği kadar zamanı var. Onu, fazlasıyla sahip olduğu bir şeyle kandırmaya kalkmak anlamsız.\" Dokuzuncu konuşmacı, \"Öyleyse önce ondan zamanını alırız\" dedi. Başkan, yorgun bir sesle, \"Ah, dostlarım\" dedi."
  },
  {
    "id": 729,
    "source": "George Orwell - 1984",
    "text": "K.ırnıldaya­ bilse, elini uzatıp O'Brien'ın koluna koyacaktı. Onu hiç o andaki kadar sevmemişti, ama bunun nedeni yalnızca çektiği acıya son vermiş olması değildi. O eski[,] derinler­ de yatan duygu geri gelmişti; O[']Brien[']ın dost mu, yoksa düşman mı olduğu önemli değildi. Konuşulabilecek bi­ riydi O'Brien. İnsan sevilmekten çok anlaşılmayı istiyor­ du belki de."
  },
  {
    "id": 730,
    "source": "George Orwell - 1984",
    "text": "Yenisöylem dilbilgisinin iki önemli özelliği vardı. Bunlardan birincisi, söylenen sözün farklı bölümlerinin birbirinin yerini alabilmesiydi. Dildeki her sözcük (bu, illce olarak, eğer ya da [-]iken gibi çok soyut sözcükler için bile geçerliydi[)] eylem, ad, sıfat ya da belirteç1 olarak kul­ lanılabiliyordu. Aynı kökten geldikleri sürece, eylem ile arasında hiçbir değişkenlik yoktu; bu kural, kendiliğin­ den, pek çok eski oluşum biçiminin ortadan kalkmasını sağlıyordu. Örneğin, Yenisöylem'de düşünce sözcüğü 1."
  },
  {
    "id": 731,
    "source": "Stefan Zweig - Satranç",
    "text": "Karadakiler arkadaşlarını geçirmek için itişip kakışıyor, eğik kasketli telgrafçı çocuklar birtakım adlar bağırarak yolcu salonlarında oradan oraya koşturuyor, bavullar ve çiçekler sürüklenerek vapura yükleniyor, orkestra güvertede durup dinlenmeden çalarken çocuklar merdivenlerde merakla bir aşağı bir yukarı koşuşuyorlardı. Bu kargaşanın biraz ötesinde, gezinti güvertesinde bir tanıdıkla laflıyordum ki, yanı başımızda iki ya da üç kez keskin bir flaş patladı; tam kalkıştan önce gazeteciler ünlü birini soru yağmuruna tutuyor ve fotoğraflarını çekiyordu anlaşılan. Arkadaşım o Czentovic[.]” Bu açıklamanın üzerine ona anlamaz gözlerle bakmış olmalıyım ki, ekledi[:] “Mirko Czentovic, dünya satranç şampiyonu. Turnuva oyunlarıyla doğudan batıya bütün Amerika’yı bucak bucak dolaştı, şimdi de yeni zaferler kazanmak için Arjantin’e gidiyor.” Bu genç dünya şampiyonunu ve hatta ışık hızıyla yükselmesiyle ilgili bazı ayrıntıları bile anımsadım o an; benden daha dikkatli bir gazete okuyucusu olan arkadaşım, bu ayrıntıları tamamlayan bir sürü gülünç hikâye biliyordu adamla ilgili. Bir yıl kadar önce beklenmedik bir çıkış yapan Czentovic’in adı Alehin, Capablanca, Tartakower, Lasker, Bogolyabov gibi en saygın ustalarla birlikte anılır olmuştu."
  },
  {
    "id": 732,
    "source": "Michael Ende - Momo",
    "text": "Duman adam başını başkana doğru eğerek selam verdi ve konuştu: \"Bu kız arkadaşlarına çok bağlı. Zamanını başkalarına ayırmayı seviyor. Ama düşünün bir kere[;] zamanını paylaşacağı kimse bulamazsa ne yapar[?] Planımızı gönül rızasıyla uygulamak istemezse, biz de arkadaşlarına yöneliriz.\" Evrak çantasından bir liste çıkardı, açtı: \"Öncelikle bir Çöpçü Beppo ve turist rehberi Gigi var. Sonra da, isimleri uzun bir liste tutan çocuklar."
  },
  {
    "id": 733,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Bu arada ölen dokuz tavuk meyve bahçesine gömülmüş, tavukların kanlı ishalden öldükleri söylenmişti. Whymper'ın olup bitenlerden haberi bile olmamıştı; yumurtalar vaktinde teslim ediliyor, haftada bir çiftliğe kadar gelen bir yük arabası yumurtaları alıp götürüyordu. Bu arada[,] Snowball hiç ortalıkta görünmemiş; komşu çiftliklerden birinde, ya Foxwood[']da ya da Pinchfield[']da saklandığı söylentileri yayılmıştı. Artık Napoléon'un öteki çiftçilerle arası biraz düzelmişti. Avluda, on yıl kadar önce bir akgürgen korusu açılırken kesildikleri için artık iyice kurumuş olan koca bir kereste yığını duruyordu."
  },
  {
    "id": 734,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Bak şuraya dokun, tam şuraya.\" Lennie'nin elini alıp başına koydu. \"Şuraya, etrafına dokun, bak ne yumuşak.\" Lennie, iri parmaklarıyla kadının saçlarını okşamaya başladı. \"Saçımı bozma ama.\" Lennie[:] \"Aman, ne güzel[!]\" dedi. Daha kuwetle okşadı. \"Aman, ne güzel!\" \"Dikkat et, tuvaletimi bozacaksın.\" Sonra kızarak bağırdı: \"Yeter be, saçımı dağıtacaksın!\" Sert bir hareketle başını çevirdi."
  },
  {
    "id": 735,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Ve o güzel düşüm sona erdi. Yarım kalmış balonum, yırtık kâğıt parçalarından başka bir şey değildi artık. Bununla da yetinmeyip [(]şaşkınlığım o kadar büyüktü ki kendimi savunmak için hiçbir şey yapamadım[)] kollarımla bacaklarıma yapıştı ve beni odanın ortasına fırlattı[.] “Konuştuğum zaman sözümün dinlenmesini isterim!” diye de bağırıyordu. Şeytan dürttü beni de."
  },
  {
    "id": 736,
    "source": "George Orwell - 1984",
    "text": ". Dolaysız biçimde söylenmesi uygun görülmeyen bir olguyu örterek dolaylı yoldan, hafıfleterek ya da ka1\"1ıt anlam vererek anlatmak. [(]Ç[.]N.[)] Anlaşıldığı kadarıyla, herhangi bir siyasal anlamı olan ya da olabilecek her şey B sözdağarcığına alınmıştı. Her örgüt ya da topluluk, öğreti, ülke, kurum ya da kamu yapısının adı, türetildiği kök korunarak, en az he­ ceyle kolayca söylenebilecek tek bir sözcüğe indirgen­ mişti. Örneğin, Gerçek Bakanlığı'nda Winston Smith'in çalıştığı Arşiv Dairesi' ne Arda, Kurgu Dairesi' ne Kurda, Televizyon Programlan Dairesi'ne de Telda deniyordu."
  },
  {
    "id": 737,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Kel kafalı mı? Şeytan mı? Zahar ağır ağır başını çevirdi ve çocuğa dik dik baktı[;] sert bir sesle[:] [—] Bana baksana, oğlum, dedi; bu yaşta bu kadar akıl sana çok fazla. General yanında çalışabilirsin; ama yolarım senin saçlarını sonra. Haydi git işine."
  },
  {
    "id": 738,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "nafîa: Bayındırlık. nafile: Yararsız, boşa giden. nalça[:] 1[)] Ayakkabılar çabuk eskimesin diye altına çakılan demir. 2) Katır, eşek, sığır gibi hayvanların tırnakları altına çakılan demir parçası. namünasip: Uygun olmayan."
  },
  {
    "id": 739,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Haftanın birkaç gecesi, Bay Jones uyuduktan sonra, samanlıkta gizli toplantılar düzenliyor, Hayvancılığın temel ilkelerini öbür hayvanlara anlatıyorlardı. İlk başlarda, büyük bir ahmaklık ve vurdumduymazlıkla karşılaşmışlardı. Bazı hayvanlar, [\"]Efendimiz[\"] dedikleri Bay Jones[']a bağlılığın bir görev olduğundan dem vuruyorlar; bazıları da, \"Bay Jones bizi besliyor. O olmasa, açlıktan ölürüz,\" gibisinden salakça laflar ediyorlardı. Kimileri, \"Biz öldükten sonra olacakların bize ne yararı dokunur ki?\" ya da \"Madem bu Ayaklanma nasıl olsa gerçekleşecek, bu uğurda çalışmışız çalışmamışız ne fark eder?\" gibi sorular soruyorlardı."
  },
  {
    "id": 740,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Snowball, bir an duraksamadan, yüz kiloluk gövdesiyle Jones'un bacaklarına dalıverdi. Jones bir gübre yığınının üstüne yuvarlanırken, tüfeği elinden fırladı gitti. Ama en korkunçları Boxer[']dı; arka ayakları üzerinde şaha kalkmış[,] demir nallı koca ayaklarını savurarak bir aygır gibi dövüşüyordu. İlk darbe Foxwood Çiftliği'nden bir seyisin kafasına indi, çamurların içine yıkılan delikanlı ruhunu oracıkta teslim etti. Bunu gören adamların birçoğu sopalarını bırakıp kaçmaya yeltendi."
  },
  {
    "id": 741,
    "source": "Albert Camus - Yabancı",
    "text": "Gövdesinin ve güneşin sıcaklığından biraz uyuklamışım. Marie beni sarstı, \"Masson evine gitti, yemek yiyeceğiz artık,\" dedi. Hemen kalktım[;] karnım zil çalıyordu çünkü[.] Ama Marie sabahtan beri kendisini öpmediğimi söyledi. Doğruydu."
  },
  {
    "id": 742,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Sonunda tanıdık bir evin yüksek çatısı görünmüştü... “Ben ne yapıyorum?” diye düşündü birden Arkadiy. “Geri dönecek değilim ya[!]” Troykaya koşulu atlar uyum içinde hızla koşuyordu; arabacı tiz çığlıklar atıyor[,] ıslık çalıyordu. İşte küçük köprü atların nallarının ve tekerleklerin altında gümbür gümbür sesler çıkarıyordu, işte artık iki yanında dalları budanmış çamların sıralandığı yol gittikçe yaklaşıyordu... Koyu yeşillerin içinde pembe bir kadın elbisesi görünür gibi oldu, genç bir yüz bir şemsiyeninince saçaklarının altından bakıyordu..."
  },
  {
    "id": 743,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Demek ki hesabınız ne olursa olsun, en az bir buçuk gün çalışmak zorundasınız.\" George, onun gözlerinin içine bakarak: \"Bir süre kalacağız,\" dedi. \"Biraz metelik tutmak niyetindeyiz.\" Kapı usulca açıldı, seyis başını uzattı; dar bir zenci kafası, acıların üzerine izlerini nakşeltiği bir yüz ve sabırlı gözler. \"Bay Slim[!]\" Hala ihtiyar Candy[']ye bakan Slim, gözlerini çevirdi: \"Ha! Ha! Merhaba, Crooks."
  },
  {
    "id": 744,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Sen zeki bir insansın, insanları tanırsın, kadınları da tanırsın, onun için kusura bakmazsın... Annen senin gelişin münasebetiyle bir ayin yaptırmak istedi. Seni bu ayine katılmaya çağıracağımı zannetme sakın: Ayin çoktan bitti ama Peder Aleksey[...]” “Papaz mı[?]” “Evet, papaz; bizim evde[...] yemek yiyecek... Bunu beklemiyordum ve hatta böyle bir şey de söylememiştim..."
  },
  {
    "id": 745,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "diye sordum. Cevap vermedi, başını daha ziyade eğdi. O zaman dikkat ettim; küçüğüm ağlıyor, hem de bir büyük insan gibi gözyaşlarını karanlıkta gizlemeye çalışarak: Ellerini tuttum: [-]Ne var, kızım[?] dedim. Benden daha çok yaşamış, daha çok anlaşmış büyük bir insan ıstırabıyla başımı kollarının içine aldı, kulağıma eğilerek: -Abacığım, ben bu gece ne kadar ağladım."
  },
  {
    "id": 746,
    "source": "Stefan Zweig - Satranç",
    "text": "Burada, sigara salonunda. Umarım kolay havlu atmayız.” “Nasıl? Ona iki yüz elli doları verdiniz mi[?]” diye bağırdım şaşkınlıkla[.] “Neden olmasın? C’est son métier.5 Dişim ağrısaydı ve gemide tesadüfen bir diş doktoru olsaydı, dişimi bedavaya çekmesini isteyemezdim ya."
  },
  {
    "id": 747,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Yüzünü yüzüme yapıştırdı. Gözlerinde şimşekler çakıyordu. “Bir daha söyle, cesaretin varsa[!]” Heceledim[:] “O[!]..” Komodinin üzerinden kayışı kaptı ve acımadan vurmaya başladı. Döndüm, yüzümü avuçlarıma gizledim. Acım öfkemden daha hafif kalıyordu."
  },
  {
    "id": 748,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Fakat öyle de olsa, onun karşımda bu sesle, bu kelimelerle konuşması hoşuma gidiyordu. Cevap vermeye mecbur olmamak için ellerimi bir dua vaziyetinde birbirine kavuşturarak dalgın bir hayranlık rolü oynuyordum. O, sözünü bitirince yüzüne baktım; gözlerime düşen saçları bir baş işaretiyle silkeleyerek[:] [-]Ne söylediğinizi dinleyemedim, efendim, fondanlar o kadar güzel ki[...] Mamafih, bunları görünce barıştık. Mesele yok."
  },
  {
    "id": 749,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Sen benden üstün olmalısın. Senden bunu bekliyorum. [(]Olga içini çekerek devam etti.[)] Ben mutlu insanları bilirim. Nasıl sevdiklerini gördüm. Ruhlarından hayat ve hareket taşar."
  },
  {
    "id": 750,
    "source": "Michael Ende - Momo",
    "text": "Başına bir kötülük geldi diye çok korktu. Şimdi hatırlamıyorum ama, duman adamlar falan diye bir şeyler anlattı durdu. Bilirsin ya, biraz kafadan acayipti zaten.\" \"Hey, siz ikiniz, oradakiler[!]\" diye sesler yükselmeye başladı kuyruktan: \"Uyuyor musunuz ne[?]\" \"Hemen bayım[!] Şimdi\" dedi Nino adama. \"Sonra polislere karşı geldi\" diye cevap verirken, Nino elini sinirli bir şekilde yüzünde dolaştırıyordu."
  },
  {
    "id": 751,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Sabah olduğunda, çiftlik evinde derin bir sessizlik hüküm sürüyordu. Anlaşılan, domuzların hepsi uyuyordu daha. Dokuza doğru kapıda Squealer göründü[;] ağır ağır ilerledi[;] bitkin görünüyordu[,] bakışları donuktu, kuyruğu aşağı sarkmıştı; sanki onulmaz bir hastalığa yakalanmış gibiydi. Hemen hayvanları topladı. Haber kötüydü: Napoléon Yoldaş, ölüm döşeğindeydi!"
  },
  {
    "id": 752,
    "source": "Michael Ende - Momo",
    "text": "İskemleleri fildişinden, yastıkları ipektenmiş. Her şeyi varmış ama, yapayalnızmış. [\"]Çevresindekiler; uşakları[,] hizmetçileri, köpekleri, kedileri, hatta kuşları ve çiçekleri bile birer hayalmiş; tıpkı aynanın içindeki gibi. varmış. Onu her gün, her gece dünyanın üzerinde gezmeye gönderirmiş."
  },
  {
    "id": 753,
    "source": "Stefan Zweig - Satranç",
    "text": "Atın yeni, daha iyi bir biniciyi eyerde oturmasından anlaması gibi, o da son hamleler sırasında asıl gerçek, rakibini ayrımsamış olmalıydı. Elimizde olmadan bakışlarını izledik ve heyecanla yabancıya baktık. Ama adam kafasını toplayıp yanıtlayamadan, McConnor zafer sarhoşluğuyla bağırdı ona[:] “Elbette[!] Ama şimdi onunla tek başınıza oynamalısınız! Czentovic’e karşı siz!” Ama o anda hiç umulmadık bir şey oldu."
  },
  {
    "id": 754,
    "source": "Michael Ende - Momo",
    "text": "\"Buraya gelmekle iyi niyetimi gösterdim. Ama, bak işte Nino hemen, \"Evet, kaç bakalım sen!\" diye bağırdı peşinden. \"Gelmene gerek yoktu zaten, ben bir dolandırıcıyla barışamam.\" Nikola döndü, \"Kimmiş dolandırıcı[?]\" diye yürüdü: \"Bir daha söyle bakayım[!]\" Yüzü öfkeden kıpkırmızı olmuştu. Nino, \"Kaç kere istersen!\" diye bağırdı. \"Kaba gücüne güvenip, kimsenin senin yüzüne karşı gerçeği söylemeye cesaret edemeyeceğini mi sanıyorsun?"
  },
  {
    "id": 755,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Sebep meydanda. Müdür Efendi gülüyor, eliyle yüzümü göstererek Naime hocanıma işaretler yapıyor, fakat meydanda olan bu sebebi bir türlü söylemiyordu. Nihayet[,] mavi gözlü hanıma göz kırparak; [-]Ben daha çok söyleyemem[.] Sen kadınca daha iyi anlatırsın Naime Hanım, dedi. Sonra, sakalını iki yana sallayarak kendi kendine konuşur gibi ilave etti: -Ah, sen bilsen dışarılarda ne yaman oğlu yamanlar vardır!"
  },
  {
    "id": 756,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Adamı Anna Sergeyevna Odintsova’ya göndereceksin, orada bu isimde bir toprak sahibi kadın var... Tanıyor musun? [(]Vasiliy İvanoviç başını salladı.[)] Yevgeniy Bazarov selam gönderdi, ölüyor diyecek. Bunu yapar mısın?” “Yaparım... Yalnız şu ölüm işi..."
  },
  {
    "id": 757,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Onu görmezden geliyorum. Benden korkmaya başlıyor. Yakında altı yaşımı dolduracağım[;] kısa süre sonra da büyüyüp kocaman olacağım[.]” “Senden korktuğu için dost olmaya kalkmasın[?]” “Hiç kuşkum yok. Bekle, sandığı getireyim.” Minguinho biraz büyümüştü. Eyerime tırmanmak için yere bir sandık koymam gerekiyordu."
  },
  {
    "id": 758,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"Seninle geliyorum.\" George gözlerini kaldırdı: \"O koca aygır, işi azalırsa, defet dışarı onu, Slim.\" Slim, seyisle birlikte çıktı. George kağıt verdi, Whit, verilen kağıtları alarak gözden geçirdi: \"Küçüğü gördün mü?\" diye sordu. \"Ne küçüğü[?]\" \"Curley[']in yeni karısı, canım.\" \"Ha, gördüm.\" \"Pek fingirdiyor, değil mi?\" \"Öyle uzun boylu görmedim,\" dedi George. Whit, fiyakalı bir hareketle elindeki kağıtları masaya koyarak: \"Hele biraz kal ve gözünü aç. Bak neler göreceksin."
  },
  {
    "id": 759,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Allah senden razı olsun, o, paparadan sonra birkaç gün sakinler, kendinin de kafası dinlenir, bizim de... Ses kesilmişti: Kâtipler, hemen masalarına koştular. Hafız Efendi, kendi kendine[:] [-]Bu, meseldir; dinsizin hakkından imansız gelir, diye bir şeyler mırıldanıyordu. Başkâtip, ayaklarıyla beraber sakalı da titreyerek içeri girdi. Başını çevirmeden yanlarına bakan kazlar gibi, gözlerinden birinin yan bakışıyla kâtipleri süzdü."
  },
  {
    "id": 760,
    "source": "Albert Camus - Yabancı",
    "text": "Polis, \"Al!\" dedi ve ekledi: \"Ama polisin oyuncak olmadığını bir daha unutayım deme!\" Bu sırada kadın ağlıyor, \"Beni patakladı, pezevenk herif, ne olacak!\" diye tekrarlıyordu. Raymond da, \"Polis efendi, bir adama pezevenk demenin yasada yeri var mı?\" diye sordu. Ama polis, [\"]Tut çeneni be[!]\" diye bağırdı. O zaman, Raymond kadına döndü, \"Heledur sen, yine görüşürüz küçük hanım!\" dedi. Polis, Raymond'a, \"Sana tut çeneni, dedik be herif!"
  },
  {
    "id": 761,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "George atıldı: \"Ya konuşmak istemiyorsa canı?\" Curley bir sıçrayışta ona döndü: \"Söz söylendi mi, cevap verir adam. Hem ne halt etmeye karışıyorsun söze sen?\" George kayıtsız bir tavırla: \"Biz hep beraber dolaşırız,\" dedi. \"Ya, demek ondan[!]\" \"Evet ondan, ne olacak?\" Şaşkına dönen Lennie ne yapmak gerektiğini anlamak için George[']a bakıyordu. \"Demek şu herifin konuşmasına izin vermeyeceksin, öyle mi?\" \"Canı bir şey söylemek istiyorsa, söyler.\" Lennie'ye hafifçe işaret etti. Lennie usulca: \"Daha şimdi geldik,\" dedi."
  },
  {
    "id": 762,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "O zaman Arina Vlasyevna ona yaklaştı ve ağarmış başını, onun ağarmış başına dayayıp “Ne yapalım Vasya! Evlat, kesilmiş bir dilimdir. O kartal gibidir[:] Uçup geldi[,] gitmek istedi[,] uçup gitti; seninle ben ise bir ağaç kovuğundaki mantarlar gibiyiz, yan yana oturuyoruz ve yerimizden kımıldayamıyoruz. Senin için sadece ben hiç değişmeden kalacağım, sen de benim için öyle kalacaksın,” dedi. Vasiliy İvanoviç ellerini yüzünden çekti ve karısına, hayat arkadaşına öyle sıkı sarıldı ki, gençliğinde bile ona böyle sarılmazdı: Derdini bir o avuturdu onun."
  },
  {
    "id": 763,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Dostumsun, bunun için yakında yalnız sana kalacak olan otomobilimizde dolaşmamızı istedim. Sana veda etmeye geldim.” “Veda mı?” “Öyle. Görüyorsun[,] beş para etmeyen biriyim[;] dayak yemekten ve kulaklarımın çekilmesinden bıktım[.] Bir fazla boğazdan kurtaracağım onları…” Gırtlağımda acılı bir düğüm hissetmeye başlıyordum. Geri kalanı söylemek için büyük cesarete ihtiyacım vardı."
  },
  {
    "id": 764,
    "source": "Albert Camus - Yabancı",
    "text": "\"Ben de bu ruhun üzerine eğildim,\" dedi. \"Ama sayın savcının tersine, orada bir şeyler buldum; içini açık bir kitap gibi okudum.\" Avukatım, orada, namuslu bir adam, dürüst bir memur, çalıştığım kuruma bağlı, herkesin sevdiği, başkalarının yıkımı karşısında yüreği sızlayan bir insan olduğumu okumuş. Ona göre[,] ben örnek bir oğulmuşum[;] anama gücüm yettiği sürece bakmış ve sonunda, bir bakım yurdunun yaşlı bir kadına benim sağlayamadığım rahatı sağlayacağını ummuşum[.] \"Bu yurt olayı çevresinde bunca gürültü koparılmasına şaşıyorum baylar,\" diye ekledi, \"çünkü, bu kurumların yararına ve büyüklüğüne bir kanıt göstermek gerekirse, bunlara bizzat devletin para yardımında bulunduğunu söyleyebiliriz.\" Yalnız avukatım cenaze töreninden hiç söz etmedi ve bunun, yaptığı savunmada eksik kaldığını fark ettim. Ama bu uzun cümleler, ruhumdan söz ettikleri o bitmez tükenmez günler ve saatler yüzünden her şeyin rengini kaybetmiş bir su halini aldığını ve orada başımın döndüğünü hissettim."
  },
  {
    "id": 765,
    "source": "Albert Camus - Yabancı",
    "text": "Bir gün, pencere demirlerine tutunup yüzümü ışığa doğru uzatmıştım, içeriye bir gardiyan girdi, bana ziyaretçi geldiğini söyledi, içimden, Marie'dir dedim. Gerçekten de oydu. Konuşma salonuna gitmek için upuzun bir koridordan geçtim[;] sonra merdivenleri tırmanıp bir başka koridora daldım[.] Geniş bir pencereyle aydınlanan koskoca bir salona girdim. Salon, boydan boya, iki büyük demir parmaklıkla üçe bölünmüştü."
  },
  {
    "id": 766,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Elinde yalnız küçük bir söğüt parçası vardı. George doğruldu. Birdenbire[:] \"Hadi,\" dedi, \"ver bana o fareyi.\" Lennie çapraşık bir saflık pandomiması oynamaya koyuldu[:] \"Ne faresi, George[?] Fare mare yok hende.\" George elini uzattı: \"Hadi ver onu bana. Yutturmaya kalkma.\" Lennie duraksadı, geriledi, kaçıp kurtulmak ister gibi çalılıklara doğru bir göz attı."
  },
  {
    "id": 767,
    "source": "George Orwell - 1984",
    "text": "Kimi sarhoşlar o kadar azgın oluyor­ du ki, öteki mahkumlar anlan ancak elbirliğiyle durdu­ rabiliyorlardı. Altmış yaşlarında, koca memeleri kanuna sarkmış, ak saçları darmadağınık, harabeye dönmüş bir kadın getirmişler, güçbela içeri sokmuşlardı; tekmelersa­ vuran, bağırıp çağıran kadını dört muhafız zor zapt edi­ yordu. Tekmeler savurmaya çalıştığı botlarını güçlükle çıkardıktan sonra, kadını tuttukları gibi Winston[']ın ku­ cağına fırlatmışlardı; az daha uyluk kemikleri kırılacaktı Winston[']ın. Kadın yerinden doğrulup muhafızların ar­ kasından, \"O. .."
  },
  {
    "id": 768,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Kadehlerimizi tokuşturalım! Et toc, et toc, et tin-tin-tin! Et toc, et toc, et tin[-]tin[-]tin!..”27 “Victor, siz haylazın birisiniz.” Yemek uzun süre devam etti. İlk şampanya şişesini ikinci, üçüncü ve hatta dördüncü şişe izledi. Yevdoksiya durmadan gevezelik ediyordu; Sitnikov da ondan geri kalmıyordu..."
  },
  {
    "id": 769,
    "source": "Michael Ende - Momo",
    "text": "Yasamız kesindir, ayrıcalık tanımaz. Ancak, şu garip çocuk hakkında biraz bilgi edinelim. Adı nedir[?]\" \"Oğlan mı, kız mı[?]\" \"Küçük bir kız.\" \"Yeri belli mi[?]\" \"Tiyatro harabelerinde oturuyor.\" Not defterine her şeyi yazan hakim, \"iyi\" diye konuştu. \"Siz sanık, bu kızın bize artık bir daha zarar veremeyeceğinden emin olabilirsiniz. Bunun için bütün olanaklarımızı kullanacağız."
  },
  {
    "id": 770,
    "source": "George Orwell - 1984",
    "text": "İşin ilginç yanı, iki duruşmada da üçünün de o tarih­ te Avrasya topraklarında olduğunu itiraf etmiş olmasıy­ dı. Kanada'daki gizli bir havaalanından Sibirya'ya uç­ muşlar, orada bir yerde Avrasya Genelkurmayı'ndan bi­ rileriyle buluşarak önemli askeri sırlan onlara vermişler­ di. Yazdönürnüne, 24 Haziran['] a denk geldiği için Win­ ston tarihi asla unutmamıştı[;] kaldı ki, tüm olup biten daha pek çok yerde kayıtlara geçmiş olmalıydı[.] Bundan tek bir sonuç çıkıyordu: İtiraflar yalandı. Bu, hiç kuşkusuz, yepyeni bir keşif sayılmazdı."
  },
  {
    "id": 771,
    "source": "Stefan Zweig - Satranç",
    "text": "Hiçbir şey olmadı. Hamle süresini tutmak için masaya bir saat konmuştu, elimizde olmadan soluğumuzu tuttuğumuz için, bir an saatin tik taklarını duyduk. Üç dakika oldu[,] yedi dakika[,] sekiz dakika; Czentovic kıpırdamıyordu, ama içsel bir zorlanma yüzünden kabarık burun delikleri daha da genişlemiş gibi geldi bana. Bu suskun bekleme bize olduğu kadar dostumuza da dayanılmaz gelmişti anlaşılan. Şöyle bir silkinip aniden ayağa kalktı ve sigara salonunda bir aşağı bir yukarı gidip gelmeye başladı, önce ağır ağır, sonra daha hızlı, giderek daha hızlı."
  },
  {
    "id": 772,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Zaten kimse inanmıyor. Müjgân, senelerden beri bana dargın. Feride sözünü ağzıma aldırmıyor[;] kaşlarını çatarak[:] “Yok, Kâmran, ondan bahsetmeye hakkın yok[!]” diyor. Annem öyle, teyzem öyle, herkes öyle. Burada Feride’den bahsedebileceğim yalnız Nermin var."
  },
  {
    "id": 773,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Mollie, Bayan Jones'un tuvalet masasından aldığı anlaşılan mavi bir kurdeleyi omzuna tutmuş, ahmakça bir hayranlıkla aynada kendini seyretmiyor mu! Mollie'yi fena halde azarlayıp evden çıktılar. Mutfakta asılı duran jambonlar götürülüp gömüldü, bir de kilerdeki bira fıçısı Boxer[']ın bir çiftesiyle parçalandı, o kadar[;] evde başka hiçbir şeye dokunulmadı[.] Hemen oracıkta, oybirliğiyle bir karar alındı: Çiftlik evi, müze olarak korunacaktı. Aralarında en küçük bir düşünce ayrılığı yoktu: Bu evde hiçbir hayvan yaşamamalıydı."
  },
  {
    "id": 774,
    "source": "George Orwell - 1984",
    "text": "Yap­ mak zorunda kalmışımdır, diyelim istersen.\" \"Peki -tarih kitaplarında okuduklarımdan aktarıyo­ rum-, o insanlar ve uşakları sizleri kaldırımdan çamurla­ rın içine mi iterlerdi hep?\" \"Bir keresinde biri itmişti beni,\" dedi ihtiyar. \"Dün­ müş gibi hatırımda. İçki Yarışı gecesiydi [-]İçki Yarışı gecesi korkunç kabalaşırlardı[-], Shaftesbury Caddesi'nde genç­ ten bir herife toslamayayırn mı! Efendiden birine benzi­ yordu; smokin, silindir şapka, siyah palto. Kaldırımda yal­ palaya yalpalaya gidiyordu, ben de bindiriverdim herifçi­ oğluna, bir kazadır oldu işte."
  },
  {
    "id": 775,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Kısa bir süre sonra hayvanlar, kendilerine Bay Jones'u anımsatan ne varsa yok etmiş bulunuyorlardı. Napoléon, hepsini yeniden ambara götürdü, herkese ikişer tayın mısır, köpeklere de ikişer peksimet dağıttı. Ardından[,] İngiltere[']nin Hayvanları şarkısını baştan sona tam yedi kez söylediler; gece inerken herkes kendi köşesine çekilip uykuya daldı[.] Dünyaya geleli beri hiç bu kadar rahat bir uyku çekmemişlerdi. Ama her zamanki gibi şafak vakti uyanıp da bir gün önce gerçekleştirdikleri görkemli başkaldırıyı anımsar anımsamaz, hep birlikte çayıra koştular."
  },
  {
    "id": 776,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Kırk profesörü olan yakın bir üniversitede bu kırk bilginden şöyle böyle edindiği bilgileri öğretmek hevesini kazanmıştı. Bu kadar yeter diye çiftliğine dönmüş ve iş hayatına girmeye karar vermişti. Babası ona yüz thaler [(]Almanya da kullanılan gümüş para[)] ve yeni bir yol çantası vermiş, istediği yere gitmekte serbest bırakmıştı[.] O gün bugün İvan Bogdanoviç ne babasını, ne de doğduğu yeri bir daha görmüştü. Altı yıl İsviçre'de ve Avusturya'da dolaşmıştı; yirmi yıldan beri de talihine şükrederek Rusya'da yaşıyordu."
  },
  {
    "id": 777,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Hayır, biraz rahatsızım, dedi. Rutubet dokunuyor, güneş henüz etrafı iyice kızdırmadı. Ama sen bana yemeğe gel[;] konuşuruz[;] öyle iki dert var ki başımda[...] Hayır, bizim yazar arkadaşlarla Sen-George Lokantası'nda toplanıyoruz; oradan Ekaterinenhov'a gideceğiz. Bütün gece de çalışacağım; gün doğarken makalem matbaada olmalı."
  },
  {
    "id": 778,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "âbide: ibadete düşkün kadın. âcizane: Söz söyleyen bir kimsenin kendi yaptıklarını abartmamak için kullandığı bir nezaket sözü. addetmek[:] Saymak [(]Bunu olmamış addetmeli[)]. âdeta: Sanki, hemen hemen. ah ü zara kapılmak: Âh çekip inlemek."
  },
  {
    "id": 779,
    "source": "George Orwell - 1984",
    "text": "Ayru zamanda öğretide ya da politik çizgide en küçük bir değişikliğe izin verilme­ melidir. Çünkü fikir ya da politik çizgi değiştirmek, zayıf­ lık belirtisidir. Örneğin[,] Avrasya ya da Doğuasya [(]hangisi olursa olsun[)] bugün düşmarunsa, o ülkenin eskiden beri hep düşmanın olmuş olması gerekir. Gerçekler bunun tersini mi söylüyor, o zaman gerçekler değiştirilmelidir. Böylece tarih sürekli olarak yeniden yazılır."
  },
  {
    "id": 780,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"Şimdi gözetleyecek bizi herif. Artık pot kırmamaya bakmalı. Çeneni tutacak mısın sen[?]\" Mahzun mahzun düşünceye dalmıştı: \"George[!]\" \"Ne var gene?\" \"Kafamı beygir tepmedi benim, değil mi George?\" George kızdı: \"Keşke tepmiş olsaydı[!] Başını dinlerdi millet biraz.\" \"Akraban olduğumu söyledin, George.\" \"Yalan söyledim, ne olacak. Çok şükür ki, yalandı söylediğim."
  },
  {
    "id": 781,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Vakit geçiyor, kalkıp yazınızı yazmanız gerek. Hakkın var; haydi sen git de ben biraz düşüneyim, diye mırıldandı. Zahar sobasının üstüne çıkarken içinden söyleniyordu: [—] Ne çabuk da gitmiş yatmış; olur şey değil; bu ne çeviklik[?] kapadı, esnedi, sonra \"iki büyük derdini\" düşünmeye daldı. Ayaklarını kâh uzatıp, kâh altına alarak: — Aman ne sıkıntı, diye mırıldandı."
  },
  {
    "id": 782,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "“Artık yolu tut, Zezé.” Totoca ve ben çantalarımızı omzumuza asıyorduk. İçinde kitaplarımız, defterlerimiz, bir de kalemlerimiz vardı yalnızca. Kahvaltılık bir şey söz konusu değildi[;] öbür çocuklar içindi bu[!] Glória çantamın dibini yokladı, bilyelerin ağırlığını hissetti ve güldü. Okula varmadan, çarşının orada giyeceğimiz lastik pabuçlarımız ellerimizdeydi."
  },
  {
    "id": 783,
    "source": "George Orwell - 1984",
    "text": "Söyleyaz gibi bileşik sözcükler hiç ku,kusuz A sözdağarcığında da bulu­ nuyordu, ama bunlar yalnızca kullanışlı kısaltmalardı, özellikle ideolojik bir yanları yoktu. (Yazann notu.) du. Örneğin, düşün, suçdüşün [(]düşüncesuçu[)] sözcüğün­ de sona, düşünpol [(]Düşünce Polisi) sözcüğünde ise başa geliyordu; ikinci sözcük polisi'nin de yalnızca ilk hecesi kalıyordu. Akışmayı, ses uyumunu sağlamak daha güç olduğundan, B sözdağarcığındaki kuralsız oluşumlar A sözdağarcığındakindan daha yaygındı. Örneğin, Gerbak, Barbak ve Sevbak, Gerçek Bakanlığı, Barış Bakanlığı ve Sevgi Bakanlığı'nın söylenişlerini kolaylaştıran kısaltıl­ mış biçimleriydi."
  },
  {
    "id": 784,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Lennie'ye daha uzun uzun baktı. Lennie sıkılarak gözlerini önüne indirdi. Birdenbire kadın atıldı: [\"]Şu suratındaki çürükleri kim yaptı[?]\" Lennie, suçlu gibi baktı kadının yüzüne: \"Kim[...] Ben mi?\" \"Evet, sen.\" Lennie, yan gözle bakarak Candy'yi imdadına çağırdı, sonra tekrar dizlerini seyretmeye koyuldu. \"Curley elini makineye kaptırdı,\" dedi."
  },
  {
    "id": 785,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Ama şimdi Curley'in kolu sargıda. Curley sana kafa tutacak olursa öteki elini de benzetirsin. Senin o makine mavalını yuttum mu sanıyorsun[?][\"] Lennie bir türlü yanaşmıyordu: \"Yok, yok[!] Seninle konuşmak monuşmak istemiyorum.\" Kadın onun yanına otların üstüne çömeldi. \"Dinle beni,\" dedi."
  },
  {
    "id": 786,
    "source": "Albert Camus - Yabancı",
    "text": "Bana, \"Görmüş geçirmiş bir adam olduğunu biliyordum,\" dedi. Önce, bana 'sen' dediğinin farkına varmadım. Ancak, [\"]Şimdi artık sahici arkadaşsın sen[!]\" dediği zaman fark ettim. Cümlesini tekrarladı, ben de, \"Evet,\" diye yanıtladım. Arkadaşı olmuşum, olmamışım bence birdi, ama o, bunu candan ister görünüyordu."
  },
  {
    "id": 787,
    "source": "Michael Ende - Momo",
    "text": "Biz burada tek vücut olup birleşmeliyiz! Dikkatli olmamız gerekli, ama korkuya asla yer vermeyeceğiz! Ve işte bunun için sizlere tekrar soruyorum[:] Kim katılmak istiyor[?]\" \"Ben[!]\" diye ayağa kalktı Klaudio. Rengi biraz sararmıştı. Diğer çocukların hepsi, önce çekinerek, sonra daha kararlı, birer birer, katılacaklarını bildirdiler."
  },
  {
    "id": 788,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Çok yaman bir adamdır, senin sonradan görme Almanına benzemez. Otuz yıl aynı sandalyede hizmet görmüş; daireyi tek başına idare ediyor; zengin adam da; ama öyle arabaya falan binmez, giyinişi de benimkinden farklı değildir. Ne etliye karışır[,] ne sütlüye; fısıldar gibi konuşur; öyle yabancı ülkelere gidip senin Alman[...] Tarantiyev, aklının ermediği şeylere karışmasan daha iyi edersin, dedi. umulmadık öfke ona Ştoltz'dan aşağı görülmek hakaretini unutturmuştu."
  },
  {
    "id": 789,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "kibir: Büyüklük, kendini büyük görme. koket: (Fr. Coquette[)] Güzel görünmeye özen gösteren[.] Zarif görünmeye, süslenmeye düşkün. kolcubaşı: Bir şeyi korumak için bekleyen görevlilerin başı."
  },
  {
    "id": 790,
    "source": "Stefan Zweig - Satranç",
    "text": "Czentovic yerinden kımıldamadı. “Buyurun,” diye yanıtladı kibarca. “Beyler şimdi siyahla oynuyor[.]” İkinci oyun da farklı bir tablo çizmedi, bir şey dışında[:] Birkaç meraklı sayesinde topluluğumuz yalnız büyümekle kalmadı, hareketlendi de. McConnor tahtaya öyle sabit bakıyordu ki, sanki taşları iradesiyle kazanmak, mıknatıslamak istiyordu; soğuk bakışlı rakibinin yüzüne büyük bir zevkle, “Mat!” diye bağırmak için bin doları da seve seve feda ederdi, adım gibi emindim bundan. İnatçı heyecanının birazı, farkında olmadan tuhaf bir biçimde bize bulaştı."
  },
  {
    "id": 791,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Ben de umulmaz ve affedilmez bir vefasızlıkla onun sevgisine mukabele edivermiştim. Gerçi Fatma ile olduğu gibi beraber yatmıyorduk, fakat sabahleyin horozlarla beraber gözlerimi açtığım dakikada soluğu onun odasında alır, ata biner gibi göğsüne oturarak parmağımla gözkapaklarını açardım. Fatma’nın bahçesine[,] kırlarına bedel[;] Hüseyin[,] beni kışlaya asker içine alıştırmıştı. Bu uzun bıyıklı kocaman adamın oyun icat etmekteki maharetini ben, başka kimsede görmedim. Asıl güzeli, bunların çoğunun kazalı, heyecanlı şeyler olmasıydı."
  },
  {
    "id": 792,
    "source": "Michael Ende - Momo",
    "text": "Böyle bir şey olur mu?\" Profesör Eisenstein, \"Önyargılı olmayalım\" diye konuştu. \"Genellikle yerlilerin inançlarında bir gerçek payı vardır. Belki de Hop[-]Hopus[-] Topulastikus[']u yatıştıracak belli bir ses tonu vardır. Onun yaşam koşulları hakkında pek az şey biliyoruz.\" Kaptan, \"Zararı olmaz ya\" dedi. \"Bir kere deneyelim."
  },
  {
    "id": 793,
    "source": "Stefan Zweig - Satranç",
    "text": "“Olanaksız bu... benim oynamam söz konusu bile olamaz... yirmi[,] hayır, yirmi beş yıldır satranç tahtasının başına oturmadım ben[...] ve sizden izin almadan oyununuza burnumu sokmakla ne kadar terbiyesizlik ettiğimi ancak şimdi anlıyorum... Lütfen, karıştığım için beni bağışlayın..."
  },
  {
    "id": 794,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Ne yaramaz çocuk bu Vanya! Daha geçen hafta ceketini tamir ettim; gene yırtmış. [(]Masanın başında gömlekle ve bir tek askılı pantolonuyla oturan Vanya'ya bakarak[)] Ne gülüyorsun? Bu tamir işi yarın sabaha kadar bitmeyecek, sen de kapının önüne çıkıp oynayamayacaksın. Çocuklar yırttı bunu değil mi?"
  },
  {
    "id": 795,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Yüksek sütleğen kümeleri geniş gölgeler oluşturuyordu. Fabrikada fazla mesai yapan birileri olmalıydı. Ama mesai[,] genellikle saat sekizi pek geçmezdi[;] hele dokuzu hiç[.] Bir süre bu işyerini düşündüm. Orayı sevmiyordum."
  },
  {
    "id": 796,
    "source": "Albert Camus - Yabancı",
    "text": "Hep söylerim ona, sağlık için daha iyidir diye. Hem aslında kendi bileceği bir iş,\" diye ekledi. Marie evde kalıp Madam Masson[']la bulaşık yıkayacağını[;] Parisli bayancık da bu nedenle erkekleri dışarı salmak gerektiğini söyledi[.] Biz üç erkek kıyıya indik. Güneş kumlara tam tepeden vuruyordu, deniz üzerindeki parıltısı dayanılır gibi değildi."
  },
  {
    "id": 797,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Durmadan dolaşmaya ve Japon aşçıların elinden yemek yemeye hiç ihtiyacımız kalmayacak. Yok, yok, kendi malımız olan bir eve sahip olacağız, koğuşta yatmayacağız artık.\" Lennie yalvardı: \"Bana evi anlat, ne olursun, George.\" \"Böyle işte, küçük bir evimiz, her birimiz için ayrı bir odamız olacak. Yusyuvarlak bir de küçük dökme sobamız[;] kışın onu yakacağız[.] Toprağımız çok olmayacağından, öyle fazla yorulmak zorunda kalmayacağız. Günde belki altı, yedi saat."
  },
  {
    "id": 798,
    "source": "Albert Camus - Yabancı",
    "text": "Bunun için mi?\" \"Elbette, özgürlük dediğin budur işte! Özgürlükten yoksun bırakıyorlar.\" Bense bunu hiç düşünmemiştim. Ona hak verdim, [\"]Doğru, yoksa ceza nerde kalırdı[!][\"] dedim. \"Evet, siz durumu anlıyorsunuz, ama ötekiler anlamıyorlar. Ama, eninde sonunda onlar da kendilerini avutmanın yolunu buluyorlar,\" dedi, sonra çekip gitti."
  },
  {
    "id": 799,
    "source": "Michael Ende - Momo",
    "text": "Vuruşlara bakılırsa geceyarısı olmalıydı. Eğer duman adam şimdi onu tiyatroda bekliyorsa, yetişmesi olanaksızdı. O da çekip giderse[,] arkadaşlarına yardım etme şansı suya düşecekti[;] bir daha da bu fırsatı hiç bulamayacaktı belki[.] Karanlığın içine doğru bütün gücüyle bağırdı: \"Buradayım!\" Duman adamın onu duyacağını sanmıyordu, ama yanılmıştı. Son çan sesi sustuğu anda, alana açılan sokakların hepsinden birden gelen, her taraftan üzerine doğru gelen arabaların farları ortasında kalmıştı."
  },
  {
    "id": 800,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Ama aptallığı yüzünden her zaman başını derde sokar. Weed'de böyle olduydu ya.\" Bir kağıdı yarı çevirirken durdu. Ürker gibi oklu ve Slim[']e bir göz altı: \"Kimseye açmazsın ya?\" \"Ne yaptı Weed[']de?\" \"Kimseye söylemezsin, değil mi?.. Söylemezsin, eminim.\" Slim yine sordu: \"Ne yaptı Weed'de?\" \"Ne yapacak, al fistanlı bir yosma gördü. Dedim ya, herif kafadan kontak, hoşuna gitti mi bir şey, mutlaka elini sürmek ister."
  },
  {
    "id": 801,
    "source": "Stefan Zweig - Satranç",
    "text": "Oyun uzadıkça Dr. B.nin giderek daha huzursuzca koltuğunda kıpırdanışını kaygıyla izledim, bazen sinirden art arda sigara yakıyordu, bazen de bazı notlar almak için kurşunkaleme uzanıyordu. Sonra yine bir soda ısmarladı ve bardakları birbiri ardına yuvarladı[;] değişik bileşimler düşünmede Czentovic’ten yüz kat daha hızlı olduğu belliydi[.] Her seferinde Czentovic sonu gelmez bir düşünmeden sonra karar verip ağır eliyle bir taşı ileri sürdüğünde, dostumuz uzun zamandır beklediği bir şeyin olduğunu gören biri gibi gülümseyip hemen karşılık veriyordu. Hızlı çalışan zekâsıyla rakibinin bütün olasılıklarını kafasında önceden hesaplamış olsa gerekti; bu nedenle Czentovic’in karar vermesi uzadıkça, Dr."
  },
  {
    "id": 802,
    "source": "Michael Ende - Momo",
    "text": "Nino ile karısı gerçekten geldiler. Bebekleri ve bir sepet dolusu yiyecek şeylerle... ve öteki ihtiyarlara gidip özür diledi, onları tekrar çağırdı.[\"] [\"]Evet[\"] diye kulağının arkasını kaşıyarak ekledi Nino; \"Hepsi yine geldiler. Benim lokalin gelişme işi suya düştü elbet. Ama umurumda bile değil.\" Karısı konuştu: \"Yaşamaya devam edeceğiz Nino.\" Güzel bir öğleden sonra geçirdiler."
  },
  {
    "id": 803,
    "source": "Michael Ende - Momo",
    "text": "Koca salona göz gezdirdi. Binlerce ve binlerce saat hep birden ona bakıyordu sanki. Gözleri parladı ve bağırdı[:] \"Zaman[!]\" Sevinçle el çırptı: \"Evet, bu da zaman[!] Zaman!\" Birkaç kere olduğu yerde sıçradı neşesinden. Hora Usta, onun sevincini paylaşarak, \"Şunu da söyle öyleyse artık: Üç kardeşin oturdukları ev neresi?\" diye sordu."
  },
  {
    "id": 804,
    "source": "George Orwell - 1984",
    "text": "Zihni, her seferinde aynı deliklere düşen bir top gibi, hep aynı hatta sürükle­ niyordu. Yalnızca altı şey geçiyordu kafasından. Karnın­ daki ağrı; bir parça ekmek; kan ve çığlıklar; O[']Brien; Ju­ lia; jilet[.] Yine içi çekildi; postal sesleri yaklaşıyordu. Ka­ pının açılmasıyla birlikte içeriye ağır bir ter kokusu ya­ yıldı."
  },
  {
    "id": 805,
    "source": "Stefan Zweig - Satranç",
    "text": "Yaşamda önüne çıkanı devirerek yol almaya alışmış ve somut başarıdan şımarmış, kendi kendinin mimarı bu iriyarı adam, üstün olduğu düşüncesine kendini öyle kaptırmıştı ki, ona karşı koyulmasını kendisine karşı haksız bir ayaklanma ve neredeyse hakaret olarak algılıyordu. İlk eli kaybedince öfkelendi, uzun uzadıya ve sert bir tavırla, bunun yalnızca bir anlık bir dikkatsizlik yüzünden olduğunu açıklamaya başladı; üçüncü elde başarılı olamamasını yan salondaki gürültüye bağladı; bir eli kaybeder kaybetmez hemen rövanş istiyordu. Başlangıçta bu hırs dolu öfke beni eğlendirdi[;] sonuçta[,] dünya şampiyonunu masamıza çekmek olan gerçek amacıma ulaşmak için bu[,] yapmam gereken ufak bir şeydi yalnızca. Üçüncü gün amacıma ulaştım, daha doğrusu yarı yarıya ulaştım. Gezinti güvertesinde dolaşan Czentovic pencereden bizi mi gözetledi, yoksa yalnızca rastlantısal olarak mı sigara salonunu varlığıyla şereflendirdi bilmiyorum, öyle ya da böyle, biz acemilerin onun sanatını icra ettiğimizi görür görmez bir adım daha yaklaştı ve bu ölçülü uzaklıktan tahtamızı şöyle bir gözden geçirdi."
  },
  {
    "id": 806,
    "source": "Albert Camus - Yabancı",
    "text": "Birçokları bana el işaretleri yaptılar. Hatta birisi, \"Haklarından geldik,\" diye bağırdı bile. Ben de başımı sallayarak, [\"]Evet[!][\"] dedim. Sonra, otomobiller sökün etmeye başladı. Gün biraz daha ilerledi."
  },
  {
    "id": 807,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "“Bana gelince; benim gibi altmış ikinci yaşını yaşayan bir ihtiyarın bile böyle önyargıları yok. (Vasiliy İvanoviç ayini kendisinin istediğini itiraf edecek cesareti gösterememişti... Kendisi de en az karısı kadar dindardı[.][)] Peder Aleksey de seninle tanışmayı çok istiyordu[.] Göreceksin, ondan hoşlanacaksın. İskambil oynamaktan da geri kalmaz ve hatta..."
  },
  {
    "id": 808,
    "source": "Stefan Zweig - Satranç",
    "text": "Sonra yine bir soda ısmarladı ve bardakları birbiri ardına yuvarladı; değişik bileşimler düşünmede Czentovic’ten yüz kat daha hızlı olduğu belliydi. Her seferinde Czentovic sonu gelmez bir düşünmeden sonra karar verip ağır eliyle bir taşı ileri sürdüğünde, dostumuz uzun zamandır beklediği bir şeyin olduğunu gören biri gibi gülümseyip hemen karşılık veriyordu. Hızlı çalışan zekâsıyla rakibinin bütün olasılıklarını kafasında önceden hesaplamış olsa gerekti[;] bu nedenle Czentovic’in karar vermesi uzadıkça[,] Dr. B.nin sabırsızlığı artıyordu ve beklerken dudaklarının çevresinde sinirli ve neredeyse düşmanca bir çizgi beliriyordu. Ama Czentovic kesinlikle elini çabuk tutmuyordu."
  },
  {
    "id": 809,
    "source": "Stefan Zweig - Satranç",
    "text": "Kararını görmek için hepimiz heyecanla baktık. Ama Czentovic hamle yapmadı, elinin tersiyle kararlı bir biçimde bütün taşları yavaşça tahtadan itti. Neden sonra anladık[:] Czentovic oyundan çekilmişti[.] Gözümüzün önünde mat olmamak için teslim olmuştu. Olanaksız olan gerçekleşmişti, dünya şampiyonu, sayısız turnuvanın birincisi, yirmi yirmi beş yıldır satranç tahtasına elini sürmemiş, tanınmamış bir adamın karşısında havlu atmıştı."
  },
  {
    "id": 810,
    "source": "Stefan Zweig - Satranç",
    "text": "Bir kitap! Ve ansızın çılgınca bir düşünceye kapıldım: Kitabı çal! Belki becerirsin bunu[,] onu hücrene gizleyebilir ve sonra okuyabilirsin[,] okuyabilirsin, en sonunda yeniden bir şey okuyabilirsin[!] Bu düşünce aklıma gelir gelmez, güçlü bir zehir etkisi yaptı; bir anda kulaklarım uğuldamaya ve kalbim küt küt atmaya başladı, ellerim buz kesti, titremelerini engelleyemiyordum. Ama ilk sersemliği atlattıktan sonra, sessiz ve sinsice, gözlerimi gardiyandan ayırmadan daha da yaklaştım paltoya, arkama gizlediğim ellerimle kitabı ite ite cepten yukarı çıkarmaya başladım."
  },
  {
    "id": 811,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Sinema yıldızlarının resimlerini toplama çağı. Uçurtma çağı, çağların en güzeliydi. Gökyüzünün her köşesi renk renk uçurtmalarla kaplı olurdu[;] her biçimde güzel uçurtmalarla[.] Gökyüzünde bir savaştır giderdi. Uçurtmaların başlan tokuşur, savaşlar çıkar, kementler atılır, kılıçlar savrulurdu."
  },
  {
    "id": 812,
    "source": "Michael Ende - Momo",
    "text": "Sonra Beppo’nun sesini tanıdı, kapıyı açtı. \"Ne oluyor yahu?\" diye çıkıştı. \"Böyle gürültüyle uyandırılmaktan hiç hoşlanmam ben[!]\" geldi!\" mu[?] Ne oldu ona?\" Beppo soluyarak, \"Ben de daha bilmiyorum. Kötü bir şey\" dedi."
  },
  {
    "id": 813,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Bir gün yine bu vaziyette balıkları seyretmekle meşguldüm. Tablo, bugünkü gibi gözümün önündedir. Büyükannem[,] biraz arkada, omuzlarından hiç eksik etmediği siyah atkısıyla, bir bahçe iskemlesine oturmuş[;] Hüseyin’se namaz kılar gibi yanında diz çökmüştü. Yavaş yavaş bir şey konuşuyorlardı. Herhalde Türkçe konuşuyor olmalıydılar ki ne söylediklerini anlayamıyordum."
  },
  {
    "id": 814,
    "source": "Michael Ende - Momo",
    "text": "Buna katılan ajanlarımız, asıl görevleri olan zaman kazanma işlerini bu arada yapamadılar. Bu kayba bir de kovalamak için sarf ettikleri zamanı ekleyin. Sonuçta, kaybımız olan zaman tam tamına[;] üç milyar yedi yüz otuz sekiz milyon iki yüz elli dokuz bin yüz on dört saniyedir[.] \"Baylar, bu bir insanın ömründen daha fazladır! Artık bunun bizim için ne anlama geldiğini açıklamaya gerek duymuyorum.\" Bir süre sustu."
  },
  {
    "id": 815,
    "source": "Stefan Zweig - Satranç",
    "text": "Ama hep birlikte iyice aramamıza ve tartışmamıza karşın, hilenin nerede olduğunu anlayamadık. En sonunda, izin verilen düşünme süresi tam bitmek üzereyken hamleyi yapmaya karar verdik. McConnor piyonu son kareye sürmek için elini uzatmıştı ki[,] birisi kolundan yakaladı, alçak sesle ve heyecanla fısıldadı[:] “Tanrı aşkına[!] Sakın ha!” Elimizde olmadan hepimiz dönüp baktık. Kırk beş yaşlarında bir beydi konuşan, neredeyse tebeşir kadar beyaz olanince uzun, sert yüzü daha önce güvertede gözüme çarpmıştı, bütün dikkatimizi hamleye yönelttiğimiz son dakikalarda yanımıza gelmiş olmalıydı."
  },
  {
    "id": 816,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Mağara adamı, dünyanın ilk çağlarında yaşayan, mağaralarda oturan, şey mağaralarında, Nem… Nem… Nem bilmem ne işte. Adım ezberleyemedim, çünkü yabancı ve çok karışık bir addı.” “Edmundo Dayı’nın, kafana bu kadar saçmalık sokmaması gerekir. Hadi, veriyor musun parayı[?]” “Bilmem bu kadar param var mı[?]” “Pışşşşık!.. Pabuç boyamaya çıktığımızda sen bir şey kazanamadığın zaman, ben kazancımı ikiye bölmüyor muyum, Zezé? Yorulduğun zaman sandığını taşımıyor muyum?” Doğruydu."
  },
  {
    "id": 817,
    "source": "Albert Camus - Yabancı",
    "text": "Pencerede bir sigara daha tellendirmek istedim, ama hava serinlemişti. Biraz üşüdüm. Camları kapadım, geri dönerken, aynada gözüme bir masa kenarı ilişti[;] üzerinde ekmek parçaları, yanında ispirto ocağı vardı[.] Yine bir pazar daha geçip gitti, anacığım şimdi topraklar altında yatıyor, yine işimin başına döneceğim ve sonunda, her şey eski hamam eski tas, diye düşündüm... Bugün büroda çok çalıştım."
  },
  {
    "id": 818,
    "source": "Michael Ende - Momo",
    "text": "Oraya bir daha gitmek istemiyorum.\" Yaşlı bir adam \"Anlıyorum\" diye başını salladı. Diğerleri de aynı şeyi yaptılar. [\"]Pekâlâ[\"] dedi kadının biri; \"ama sen daha küçüksün. Birinin sana bakması gerekir.\" \"Yapabilecek misin?\" diye sordu kadın. \"Fazla bir şey istemem ki!\" dedi."
  },
  {
    "id": 819,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Yüzüne düşmüş saçlarını düzelterek, yavaş yavaş çenesini okşayarak halim, sakin bir sesle: -Bunda korkacak, ağlayacak ne var? Annen değil mi, elbette göreceksin, dedim. Biçare[;] hâlâ inanamıyor[,] korka korka gözlerime bakıyor; herkesin nefretle, lanetle andığı bu kadını sevmediğine beni inandırmak için, çocukça sebepler arıyordu. Fakat, onu öyle seviyor, öyle yana yana seviyordu ki... Çocuğum, eğer anneni sevmiyorsan ben seni çok ayıplarım, dedim."
  },
  {
    "id": 820,
    "source": "George Orwell - 1984",
    "text": "EK Yenisöylem kuralları Yenisöylem, Okyanusya'nın resmi diliydi ve İngsos ya da İngiliz Sosyalizmi'nin ideolojik gereksinimlerini söylem'i, konuşurken ya da yazarken biricik iletişim ara­ cı olarak kullanan tek bir kişi bile yoktu. Times gazete­ sinin önemli makaleleri Yenisöylem'le yazılmakla birlik­ te, bu ancak bir uzmanın gerçekleştirebileceği bir beceri gösterisi olmaktan öteye gitmiyordu. Yenisöylem[']in en geç 2050 yılına kadar Eskisöylem'in [(]daha doğrusu, her­ kesçe benimsenmiş olan İngilizcenin[)] yerini alınası bek­ leniyordu. Bu arada, Yenisöylem, tilin Parti üyelerinin günlük konuşmalarında Yenisöylem sözcükleri ve söz­ dizimlerini giderek daha fazla kullanmaları sonucunda olan ve Yenisöylem Sözlüğü'nün Dokuzuncu ve Onun­ cu Basımlarında yer alan biçimi geçiciydi ve sonradan çıkarılması tasarlanan pek çok gereksiz sözcük ve köhne­ miş yapılanış içeriyordu. Biz burada, Yenisöylem'in, Söz­ lüğün On Birinci Basımı'ndaki en son, yetkinleştirilmiş biçimini ele alıyoruz."
  },
  {
    "id": 821,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"George yapmaz öyle şey. Ne zamandan beri George'un yanındayım. Bu gece gelecek o[...]\" Ama şüphe içini kemirmeye başlamıştı: \"Gelmeyecek mi yoksa[?]\" Crooks[']un yüzü, işkence etmekten aldığı zevkle aydınlanıyordu. \"İnsanın ne yapacağı bilinmez,\" dedi sakin sakin. \"Diyelim ki, dönmek istedi de, dönemedi."
  },
  {
    "id": 822,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Artık pazar sabahları yapılan toplantılara da pek katılmayan Napoléon, buyruklarını öteki domuzlardan biriyle, genellikle de Squealer'la iletiyordu. Bir pazar sabahı, Squealer, daha yeni yumurtlayacak olan tavukların yumurtalarını çiftlik yönetimine vermeleri gerektiğini bildirdi. Napoléon[,] Whymper[']ın aracılık ettiği bir sözleşmeyi imzalamıştı; sözleşmeye göre, haftada dört yüz yumurta teslim etmeleri gerekiyordu[.] Yumurtaların parasıyla, yaz gelip de durumlar düzelinceye kadar çiftliği geçindirecek tahıl ve yemi alacaklardı. Tavuklar haberi duyar duymaz ortalığı birbirine kattılar."
  },
  {
    "id": 823,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Palavra! Ama herhalde eli ezildiğinden beri o meşhur bir, ikilerini kimseye konduramadığı kesin. Kim geldi onun hakkından['][?]\" Candy homurdanarak tekrarladı: \"Elini makineye kaptırdı.\" Kadın, küçümseme tavrıyla: \"Anladık, anladık,\" dedi. \"İstediğiniz kadar savunun onu, madem ki canınız istiyor. Umurumda mı sanki?"
  },
  {
    "id": 824,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Bu çelişkiyi kafanızda nasıl biliyorsanız öyle bağdaştırın. Ama bütün bunlar sizin nazarınızda romantizm demektir.” Bazarov kafasını salladı. “Sağlıklısınız, bağımsızsınız, zenginsiniz[;] daha ne istiyorsunuz[?] Başka ne isteğiniz olabilir?” “Daha ne mi istiyorum,” diye tekrarladı Odintsova ve derin bir nefes aldı. “Çok yoruldum, yaşlandım, çok çok uzun zamandır yaşıyormuşum gibi geliyor bana."
  },
  {
    "id": 825,
    "source": "Stefan Zweig - Satranç",
    "text": "“Sakın ha! Bugünlük bu kadar yeter! Kendinizi fazla zorlamayın[.]” “Zorlamak mı[!] Ha!” diye kahkahalarla ve kötü kötü güldü. “Böyle tembellik yapacağıma, on yedi oyun oynayabilirdim bu arada!"
  },
  {
    "id": 826,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Üzülme, iyi yürekli anne; oğlun Rus topraklarında büyüdü, değirmen çeviren orada her gün bayram. Orada iş omuzdan bir yük gibi atılır; orada çiftliğin sahibi şafakla beraber kalkmaz, tekerlekler, yağlar arasında işyerlerini gezmez. Verhliyovo[']da yılın birçok ayı boş duran büyük bir ev var[;] yaramaz Andryuşa oraya sık sık girer[;] uzun salonlar, sofalar, duvarlarda kara portreler görür. Yüzlerinde Almanların o kaba canlılığı yoktur; elleri büyük ve sert değildir. Mavi baygın gözler, pudralı saçlar, beyaz, nazik yüzler, dolgun göğüsler, bembeyaz manşetler arasından çıkıp kılıcın kabzası üzerinde mağrur duranince damarlı zarif eller..."
  },
  {
    "id": 827,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Olga'ya gitme vakti. Bugün yemeğe davetliydi. Yavaş yavaş kendine geldi[;] bir araba getirtti; Morskaya Sokağı[']na yollandı[.] IV Olga'ya ev sahibinin kardeşiyle görüştüğünü ve hafta içinde evi başka birine kiraya verebileceğini, kelimeleri ağzının içinde geveleye geveleye anlattı. Olga, görmeye çıktı."
  },
  {
    "id": 828,
    "source": "George Orwell - 1984",
    "text": "\"İşte Parsons geliyor,\" dedi. Sesinin tonunda, \"Şu geri zekalı\" demişçesine bir hava vardı. Winston[']ın Zafer Konutları[']ndaki komşusu Parsons[,] kalabalığın içinde kendine yol açarak ilerlemeye çalışıyordu; tombul, orta boylu, san saçlı, kurbağa suratlı bir adamdı. Otuz beş yaşında olmasına karşın boynu ve beli yağ bağlamaya başlamıştı, ama canlı ve çocuksu bir yürüyüşü vardı. Baştan ayağa erken büyümüş bir oğlan çocuğunu andırıyordu; o kadar ki, Parti tulumu giymiş olmasına karşın, onu Casuslar'ın mavi şortu, gri gömleği ve kırmızı boyunbağıyla düşünmemek nerdeyse olanak­ sızdı."
  },
  {
    "id": 829,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Kelebek boyunbağımla resim çektireceğim.” “Neden kelebek boyunbağı?” “Çünkü insan kelebek boyunbağı olmadan şair olamaz. Edmundo Dayı bana dergilerdeki şair resimlerini gösterdi, hepsinin kelebek boyunbağı var.” “Zezé, onun her söylediğine inanmaktan vazgeç. Edmundo Dayı kafadan çatlağın biri; biraz da yalancı[.]” “Öyleyse, boktan herifin biri.” “Dinle[!] Sövdüğün için çok tokat yedin. Edmundo Dayı öylesi değil."
  },
  {
    "id": 830,
    "source": "Stefan Zweig - Satranç",
    "text": "Beni her zamankinden fazla zorladı, çünkü soruları yanıtlarken söylediklerime aklımı vermek yerine, her şeyden önce kitabı fark ettirmeden tutmaya çalışıyordum bütün gücümle. Neyse ki sorgulama bu kez kısa sürdü ve kitabı kazasız belasız odama götürdüm; bütün ayrıntılarla zamanınızı almak istemiyorum, ama yürürken kitap bir kere tehlikeli bir biçimde pantolondan kaydı ve eğilip onu tekrar kemerin altına itmek için, öksürük tutmuş gibi yapmam gerekti. Ama bu kitapla cehennemime geri dönmek ne olağanüstü bir andı[,] en sonunda yalnızdım, ama hiç de yalnız sayılmazdım[!] Hemen kitabı kaptığımı, gözden geçirdiğimi, okuduğumu sanıyorsunuz herhalde. Kesinlikle hayır!"
  },
  {
    "id": 831,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Hem sonra, sizin anlatıldığı gibi biri olmadığınızı keşfettim. Ne yamyamsınız, ne de…” Yerinden fırlıyordu neredeyse. “Ne dedin[?]” “Yamyam[!]” “Ne olduğunu biliyor musun yamyamın[?]” “Evet, biliyorum. Edmundo Dayı öğretti. Kendisi bir bilgindir."
  },
  {
    "id": 832,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "kelime-i teyyibe: (Kelime-i tayyibe) Yatıştırıcı hoş söz. kepazelik: Rezalet. kerliferli [(]kelli felli[)][:] Kılığı kıyafeti düzgün, olgun ve gösterişli. kesb-i şeref etmek: Şeref duymak. kibir: Büyüklük, kendini büyük görme."
  },
  {
    "id": 833,
    "source": "Stefan Zweig - Satranç",
    "text": "Çok heyecanlandım: Bir yıldan beri kadın yüzü görmemiştim. Bu hoş görüntüye baktım; yabanıl, kendinden geçmiş bir bakış olsa gerekti bu, çünkü kadın, ‘Sakin olun! Sakin olun[!]’ diye yatıştırmaya çalıştı beni[.] Ama ben yalnızca sesine kulak kabarttım; bu konuşan, bir insan değil miydi? Yeryüzünde beni sorgulamayan, bana işkence yapmayan bir insan var mıydı gerçekten?"
  },
  {
    "id": 834,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Anlıyorsun, değil mi? Herkes avluya giriyor ve öğretmenin bulunduğu yeri arıyor. Öğretmen bizi dörder dörder sıraya diziyor[;] koyunlar gibi sınıfa giriyoruz[.] Kapağı açılıp kapanan bir sıraya oturuyor, elimizdekileri içine koyuyoruz. Öğretmen, iyi bir Brezilyalı ve iyi bir ‘yurtsever’ olmak için ülkemizin ulusal marşını öğrenmemiz gerektiğini söylediğinden, yığınla marş öğrenmek zorundayım."
  },
  {
    "id": 835,
    "source": "Albert Camus - Yabancı",
    "text": "Uzun bir zaman sırtı bana dönük olarak durdu. Onun varlığı bana batıyor, canımı sıkıyordu. Tam, [\"]Artık gidin[!]\" diyecektim, birden döndü ve sanki parlarcasına \"Hayır, size inanamam. Eminim, bir başka dünyaya susadığınız olmuştur,\" dedi. \"Elbette,\" dedim, \"ama bu, zengin olmayı dilemekten, çabuk yüzmeyi, güzel ağızlı olmayı dilemekten daha önemli değildir."
  },
  {
    "id": 836,
    "source": "Albert Camus - Yabancı",
    "text": "Bir şeyin bedenimi sıyırıp geçmesiyle uyandım. Gözlerim kapalı kaldığından odanın beyazlığı bana daha da parlak geldi. Önümde hiçbir gölge yoktu[;] her şey[,] her köşe ve bütün eğri çizgiler göz kamaştıran bir açıklıkla beliriyordu. Tam o sırada anamın arkadaşları içeri girdiler. Topu topu on kişi kadar vardılar."
  },
  {
    "id": 837,
    "source": "George Orwell - 1984",
    "text": "Örneğin, 'iyi' sözcüğü. 'İyi' sözcüğü varken, 'kötü' söz­ cüğüne neden gerek duyalım ki? [']İyideğil['] dersin, olur bi­ ter; hatta daha da iyi olur, çünkü 'iyideğil' 'iyi'nin tam karşıtı, 'kötü' ise tam karşıtı değil. Ya da 'iyi'nin yerine daha güçlü bir sözcük istiyorsan, 'mükemmel' ve 'fevkala­ de' gibi belirsiz ve yararsız sözcük kullanmanın ne anlamı var? 'Artıiyi' aynı anlamı karşılıyor; ya da, daha da güçlü bir sözcük istiyorsan, 'çifteartıiyi' diyebilirsin."
  },
  {
    "id": 838,
    "source": "Michael Ende - Momo",
    "text": "\"Kötü bir şeyler olduğunu sanıyorum da.\" \"Öyle mi?\" dedi polis. Bir yandan yazısına devam ediyordu. \"Konu nedir[?]\" \"Bir çocuk mu[?]\" \"Evet, bir kız çocuğu.\" \"Sizin çocuğunuz mu?\" \"Hayır\" dedi Beppo şaşkınlıkla. \"Yani evet, ama babası ben değilim.\" \"Hayır, yani evet!\" diye kızdı polis, \"Kimin çocuğu bu? Anası babası kim?\" \"Bunu kimse bilmiyor\" dedi Beppo."
  },
  {
    "id": 839,
    "source": "George Orwell - 1984",
    "text": "Kan­ tine girdiğinde, kız duvardan uzakta bir masada yalnız başına oturuyordu. Henüz erken olduğu için kantin pek kalabalık değildi. Kuyruk ağır ağır ilerlemiş[,] sıra nerdey­ se Winston['] a gelmişti ki[,] iki dakikalık bir duraklama ol­ du; önlerdeki bir adam sakarin tabletini alamadığından yakınıyordu. Winston tepsisini alıp da onun masasına doğru yürümeye başladığında, kız hala yalnız başına oturuyordu. Winston, kızın arkasında boş bir masa aranı­ yormuş gibi yaparak ilgisizce ilerledi."
  },
  {
    "id": 840,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Lennie ateşin öbür yanında onu gözetliyordu. Mütevekkil bir tavırla: \"Ben fasulyeyi, domates salçasıyla severdim,\" dedi. George kızdı[:] [\"]Salçamız yok,[\"] dedi; \"hep zaten olmayan şeyleri ister senin canın. Ah, bir yalnız olsaydım, ne rahat yaşardım! Bir iş bulup çalışırdım."
  },
  {
    "id": 841,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Beni kapıdışarı ettikleri zaman bari, biri çıksa da sevabına kafama bir kurşun sıksa. Ama kimse yapmaz bunu. Gidecek bir yerim olmayacak[;] hiçbir yerde iş bulamayaca​ğım[.] Buradan ayrılacağınız zaman otuz dolarım daha birikmiş olacak.\" George kalktı. \"Oldu bitti bu iş,\" dedi."
  },
  {
    "id": 842,
    "source": "Albert Camus - Yabancı",
    "text": "\"Tanrıya inanmıyorum da ondan,\" diye karşılık verdim. İnanmadığıma emin olmadığımı öğrenmek istedi. [\"]Bunu kendi kendime sormam bile[!]\" diye karşılık verdim[:] çünkü bu bana önemsiz bir sorun gibi görünüyordu. O zaman kendini arkaya doğru bıraktı, sırtını duvara dayadı. Ellerini açarak dizlerinin üzerine koydu."
  },
  {
    "id": 843,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Seninle biraz bahçeye çıkarsak geçer. Gece yatağımda, gözlerim karanlığa dikili, saatlerce uykusuz kaldım. Büyük bir kararsızlık içinde perişan oluyordum; yüzsüz[,] zalim bu mektuplarda[,] kim bilir bana neler söylemeye cesaret ediyordu[?] Birkaç defa lambayı yakarak onları okumak istedim. Fakat kendimi zapt ettim."
  },
  {
    "id": 844,
    "source": "Stefan Zweig - Satranç",
    "text": "Tek bildiğim, bir sabah uyandım ve bu, öncekilerden farklı bir uyanmaydı. Bedenim sanki benden ayrılmıştı, gevşek ve rahat yatıyordum. Aylardır tatmadığım yoğun[,] tatlı bir yorgunluk çökmüştü gözkapaklarıma[;] öyle sıcak ve hoş bir duyguydu ki bu, gözlerimi açıp açmamaya ilk başta karar veremedim[.] Dakikalarca uyanık yattım ve üzerimdeki bu ağırlığın, zevkten uyuşmuş duyularla tembel tembel yatmanın tadını çıkardım. Bir an arkamda sesler duydum sandım, bir şeyler söyleyen insan sesleri, ne kadar sevindiğimi bilemezsiniz, çünkü aylardır, yaklaşık bir yıldır sorgu hâkimlerinin sert, keskin ve kötü sözlerinden başka bir şey duymamıştım."
  },
  {
    "id": 845,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "41. (Fr.) Kimyanın Genel Esasları. [(]Ç.N.) XVIII Ertesi gün, Odintsova çaya geldiğinde, uzun zamandır fincanının üzerine eğilmiş durumda oturan Bazarov birden ona baktı[...] Odintsova, sanki, Bazarov ona dokunmuş gibi başını ona doğru çevirdi ve Bazarov’a da genç kadının yüzü gece boyunca hafifçe sararmış gibi geldi. Odintsova az sonra odasına çekildi ve ancak kahvaltıya doğru ortaya çıktı."
  },
  {
    "id": 846,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"Tanrı aşkına bağırma, George kızacak.\" Kadın onun ellerinde şiddetle çırpındı. iki ayağıyla otları dövüyordu, kurtulmak umuduyla kıvranıyordu. Lennie korkusundan bağırmaya başladı[:] [\"]Yapma Tanrı aşkına, yapma[!]\" diye yalvardı. \"George yine kötülük ettin diyecek bana. Tavşanlara bakmama izin vermeyecek sonra.\" Lennie biraz elini açacak oldu, kadın boğuk bir çığlık kopardı."
  },
  {
    "id": 847,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "“Bazarov bunu işitseydi keşke!”) Bekleyin siz, değiştireceğiz sizi.” “Beni kim değiştirecek? Siz mi?” “Kim mi? Ablam[;] artık kavga etmediğiniz Porfiriy Platonoviç; üç gün önce kiliseye götürdüğünüz teyzem[.]” “Reddedemezdim ki[!] Anna Sergeyevna’ya gelince; hatırlarsanız, birçok bakımdan Yevgeniy’le daha iyi anlaşıyordu.” “Ablam o zaman aynen sizin gibi onun etkisi altındaydı.” “Benim gibi mi! Artık onun etkisinden kurtulduğumun farkında değil misiniz?” Katya sesini çıkarmadı."
  },
  {
    "id": 848,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"George yine kötülük ettin diyecek bana. Tavşanlara bakmama izin vermeyecek sonra.\" Lennie biraz elini açacak oldu, kadın boğuk bir çığlık kopardı. Bunun üzerine Lennie kızdı[:] \"Yeter artık be[!]\" dedi. \"Bağırma öyle. George'un dediği gibi, başımı belaya sokacaksın."
  },
  {
    "id": 849,
    "source": "Michael Ende - Momo",
    "text": "\"Bunu istemem. Ama ya başı dertteyse.\" Gigi sözünü sürdürdü: \"Ama düşün bir kere, ya öyle değilse? Belki dediğim gibi[,] o bir yerlere dolaşmaya gitmiştir; sen de başına polisleri sardıracaksın[.] Bu Beppo, masanın önündeki bir sandalyeye çöktü ve başını kollarının üstüne dayadı. \"Doğrusu bilmiyorum\" diye inledi."
  },
  {
    "id": 850,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Ama açıkça belli etmemesine karşın, Boxer'a hayrandı; ikisi pazar günlerini birlikte geçirir, genellikle meyve bahçesinin arkasındaki çayırda hiç konuşmadan yan yana otlarlardı. İki at henüz yere uzanmışlardı ki, annelerini yitirmiş yavru ördekler ciyak ciyak bağırarak birerlekol halinde samanlığa girdiler; paytak paytak koşturuyor, ayaklar altında ezilmeyecekleri bir yer aranıyorlardı. Clover, kocaman ön ayağıyla ördek yavrularının çevresine bir duvar ördü[;] onlar da oraya sığınıp birbirlerine sokuldular ve o saat uykuya daldılar[.] Son anda, Bay Jones'un iki tekerlekli arabasını çeken saçı uzun aklı kısa, beyaz kısrak Mollie çıkageldi; ağzında kesmeşekeri, süzüm süzüm süzülerek içeri girdi. Kendine önlerde bir yer seçti; bakışları üzerinde toplamak umuduyla kırmızı kurdelelerle örülü beyaz yelesini iki yana sallamaya başladı."
  },
  {
    "id": 851,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"Biz nasılız, onu da anlat.\" George bir an sesini çıkarmadı. \"Biz öyle değiliz,\" dedi. \"Çünkü?..\" \"Çünkü benim için sen varsın[...]\" Lennie memnun bir edayla haykırdı: \"Senin için de ben[...] İkimiz de birbirimizi düşünürüz de ondan!\" Akşam meltemi düzlüğün üzerinden hafifçe esti, yeşil sular ürperdi. Adamların sesleri bu sefer çok daha yakından duyuldu."
  },
  {
    "id": 852,
    "source": "Stefan Zweig - Satranç",
    "text": "Sakın ha!” Elimizde olmadan hepimiz dönüp baktık. Kırk beş yaşlarında bir beydi konuşan, neredeyse tebeşir kadar beyaz olanince uzun, sert yüzü daha önce güvertede gözüme çarpmıştı, bütün dikkatimizi hamleye yönelttiğimiz son dakikalarda yanımıza gelmiş olmalıydı. Ona baktığımızı ayrımsayarak aceleyle ekledi[:] “Şimdi veziri alırsanız[,] fili c1’e sürüp piyonunuzu kırar[,] siz de atınızı geri çekersiniz. Ama bu arada boştaki piyonunu d7’ye getirip kalenizi tehdit eder ve atınızla şah mat deseniz bile kaybedersiniz ve dokuz on hamle sonra yenilirsiniz. 1922’de Pistyaner Turnuvası’nda Alehin’in Bogolyubov’a karşı oluşturduğu konumun hemen hemen aynısı.” McConnor şaşkınlıkla elini taştan çekti ve cennetten inen beklenmedik bir melek gibi yardımımıza koşan adama en az bizim kadar afallayarak baktı."
  },
  {
    "id": 853,
    "source": "Michael Ende - Momo",
    "text": "Kalabalık sokaklarda insanlar akın akın gidip geliyorlardı. Bir itiş kakıştır sürüyordu. Caddeler araba doluydu[;] otobüsler tıklım tıklımdı[.] Binaların duvarlarında ışıklı reklam panoları bir yanıp, bir sönerek etrafa çeşit çeşit renkler saçıyorlardı. Bütün bunları daha arkasından rüyadaymış gibi yürüyordu."
  },
  {
    "id": 854,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Snowball işte tam o anda saldırı işaretini verdi ve dosdoğru Jones'un üstüne atıldı. Snowball'un üstüne geldiğini gören Jones, tüfeğini doğrultup ateş etti. Saçmalar Snowball[']un sırtında kanlı karıklar açtı[;] koyunlardan biri oracıkta can verdi[.] Snowball, bir an duraksamadan, yüz kiloluk gövdesiyle Jones'un bacaklarına dalıverdi. Jones bir gübre yığınının üstüne yuvarlanırken, tüfeği elinden fırladı gitti."
  },
  {
    "id": 855,
    "source": "Stefan Zweig - Satranç",
    "text": "Şaşkınlıkla elimde olmadan ani bir devinim yapmış olmalıyım, çünkü arkamdan yaklaşan adımları duydum. Bir kadın usulca yanıma sokuldu, başında beyaz başlık olan bir kadın, bir hemşire. Çok heyecanlandım[:] Bir yıldan beri kadın yüzü görmemiştim[.] Bu hoş görüntüye baktım; yabanıl, kendinden geçmiş bir bakış olsa gerekti bu, çünkü kadın, ‘Sakin olun! Sakin olun!’ diye yatıştırmaya çalıştı beni."
  },
  {
    "id": 856,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Yoldaşlar, fazla bir ömrüm kaldığını sanmıyorum. Onun için, bugüne kadar edindiğim bilgileri, deneyimleri sizlere aktarmayı görev biliyorum. Çok uzun yaşadım[,] ağılımda bir başıma yatarken düşünecek çok zamanım oldu[;] bu dünyanın düzenini[,] yaşamakta olan her hayvan kadar kavradığımı söyleyebilirim. Bugün sizlerle konuşmak istediğim de bu işte. \"Evet yoldaşlar, yaşadığımız hayat nasıl bir hayattır?"
  },
  {
    "id": 857,
    "source": "Albert Camus - Yabancı",
    "text": "Müdür daha başka şeyler de söyledi. Ama, artık onu hemen hemen dinlemiyordum. Sonra[:] [\"]Herhalde annenizi görmek istersiniz, sanırım[?]\" dedi. Hiçbir şey demeden ayağa kalktım. Önümden kapıya doğru yürüdü."
  },
  {
    "id": 858,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Bu arada Dunyaşa yanan bir mumu, altına madenî bir para koyduktan sonra pencerenin önüne yerleştirdi. “Kaç aylık oldu?” diye sordu Pavel Petroviç. “Altı aylık[;] yakında yedi aylık olacak, ayın on birinde.” “Sekiz olmayacak mı, Fedosya Nikolayevna[?]” diye çekinerek lafa karıştı Dunyaşa. “Hayır, yedi; nasıl olabilir ki?” Bebek tekrar gülmeye başladı, gözlerini sandığa dikmişti ve birden beş parmağıyla annesinin burnunu ve dudaklarını yakaladı. “Yaramaz,” dedi Feneçka, yüzünü onun parmaklarından çekmeksizin."
  },
  {
    "id": 859,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "’ Benim en çok sevdiğim buydu, Tom Mix’in de sanırım. Ata binip avlandığımız ya da savaşmadığımız günler, bana saygıyla şöyle diyordu: “Hadi, Pinagé savaşçısı! Özgürlük marşını söyle[.]” İncecik sesim[,] uçsuz bucaksız ovayı dolduruyordu; salılan Bay Ariovaldo’ya yardım ettiğim sıralar söylediklerimden çok daha güzeldi[.] Salı günleri, her zamanki gibi okulu asıp dostum Ariovaldo’yu getirecek treni bekliyordum. Elinde, az sonra satacağımız şarkı sözleri destesiyle, merdivenden inişini görüyordum."
  },
  {
    "id": 860,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Ne eğitim, ne fizyoloji hakkında, hiçbir konuda hiçbir düşüncesi yok bu kadının. Eminim, embriyoloji hakkında da bir şey duymamıştır, oysa günümüzde bunlar olmadan ne yapabilirsiniz? [(]Yevdoksiya bu arada ellerini iki yana açmıştı.[)] Ah, Yeliseviç bu konuda ne harika bir makale yazmıştı[!] Bu bay bir deha! (Yevdoksiya, “adam” yerine hep “bay” sözcüğünü kullanıyordu.) Bazarov, şöyle divana, yanıma oturun."
  },
  {
    "id": 861,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Hayvanlarıyla ilgilenir.\" Güçlükle ayağa kalkarak kapıya yaklaştı. \"Sen misin Slim?\" Candy'nin sesi cevap verdi: \"Slim kasabaya indi. Bana bak, Lennie[']yi görmedin mi[?]\" \"Şu iri oğlanı mı?\" \"Evet, gördün mü buralarda onu?\" Crooks kısaca: \"Burada,\" dedi. Gelip yatağına uzandı. Candy kapı eşiğinde duruyor, kesik bileğini kaşıyor, ışıktan kamaşan gözleriyle odayı seyrediyordu."
  },
  {
    "id": 862,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Pencerelerde insanlar vardı ve dışarı bakıyorlardı. Yolculuk eden bütün kalabalık mutluydu. Küçükken Mangaratiba’nın geçişini seyretmeyi ve ona veda etmeyi severdim[;] bitip tükenmeyen vagonlar gözden kaybolana dek veda etmeyi[.] Şimdi sıra Luís’indi. Gözlerimi pastanenin masalarında gezdirdim."
  },
  {
    "id": 863,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Sıçanlar ve tavşanlar gibi yabanıl hayvanlar, dostumuz mu, düşmanımız mı? Oylamaya koyalım. Şu soruyu soruyorum[:] Sıçanlar yoldaşımız mıdır[?][\"] Hemen oylamaya geçildi; çok büyük bir çoğunlukla sıçanların yoldaş olduklarına karar verildi. Yalnızca dört karşı oy çıkmış, onlar da üç köpekle kediden gelmişti. Sonradan, kedinin hem evet, hem de hayır oyu kullandığı anlaşıldı."
  },
  {
    "id": 864,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Umarım Anisya unutmamıştır. Hiç yakasını bırakır mıyım? [(]Mutfağın kapısını açarak[)] Bakın kızarıyor. Nerede ise hazır olur... çeşit konuşmalarla ona, ısınmak için bir ateşe yaklaşır gibi, gittikçe daha fazla sokuluyordu."
  },
  {
    "id": 865,
    "source": "Michael Ende - Momo",
    "text": "Tek ayak üstünde duran biri gibi yukarı doğru genişliyor ve tıpkı dağ gibi bir topaca benziyordu. Öyle hızlı dönüyordu ki, ayrıntılar görünmüyordu. Profesör, \"Bu bir Hop[-]Hopus[-]Topulastikus!\" diye bağırırken, bir yandan da yağmurun burnunun üstünden kaydırdığı gözlüğünü tekrar yerleştirdi. Don Melu homurdandı. \"Bize bunu biraz daha açıklar mısınız?"
  },
  {
    "id": 866,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Lennie karanlıkta seslendi: \"George... uyudun mu?\" \"Yok. Ne istiyorsun[?]\" \"Tavşanlar renk renk olmalı, George.\" George uykulu bir sesle[:] \"Tabii, tabii,\" dedi. \"Kırmızılar, yeşiller, maviler olacak, Lennie. Milyonla tavşanımız olacak.\" \"Uzun tüylüler de olsun, George."
  },
  {
    "id": 867,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Ne kadar büyük bir iş başardığımızın farkında değilsin galiba, yoldaş! Şu üzerinde durduğumuz topraklar az önce düşman elindeydi. Oysa şimdi her bir karışını geri aldık; Napoléon Yoldaş[']ın önderliği sayesinde tabii[!]\" \"Demek, zaten bizim olanı geri almışız,\" dedi Boxer. Squealer, \"Bu zafer bizim,\" dedi. Topallaya topallaya avluya girdiler."
  },
  {
    "id": 868,
    "source": "George Orwell - 1984",
    "text": "Yoksul mahallelerden birinde, genellikle ka­ labalık ve gürültülü bir pazarın kurulduğu bir sokaktı burası. Ayakkabı bağcığı, dikiş ipliği gibi şeyler arıyor­ muş gibi tezgahların arasında dolanıyor olacaktı. Durum elverişliyse, Winston[']ı görünce bumunu siler gibi yapa­ caktı; yoksa Winston[']ın onu tanımazdan gelerek geçip gitmesi gerekiyordu. Ama talihleri yaver giderse, kalaba­ lığın içinde on beş dakika kadar görüşebilirler, yeniden ne zaman buluşacaklarını belirleyebilirlerdi. Julia, Winston'a, neler yapması gerektiğini ezberlet­ tikten sonra, \"Artık gitmeliyim,\" dedi."
  },
  {
    "id": 869,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Bir domuz için çok doğal. Ama hiçbir hayvan sonunda o gaddar bıçaktan kaçamaz. Siz[,] karşımda oturan genç domuzlar[;] bir yıla kalmaz[,] bıçağın altında ciyaklaya ciyaklaya can verirsiniz. İnekler, domuzlar, tavuklar, koyunlar; bu korkunç son hepimizi bekliyor, hepimizi. Atların ve köpeklerin yazgısı da bizimkinden farklı sayılmaz."
  },
  {
    "id": 870,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Acaba kardeşime karşı mı? Ama siz onu seviyorsunuz, değil mi?” “Seviyorum.” “Bütün ruhunuzla ve bütün kalbinizle mi?” “Nikolay Petroviç’i bütün kalbimle seviyorum.” “Doğru mu? Yüzüme baksanıza Feneçka [(]ona ilk defa böyle hitap ediyordu)[...] Bilirsiniz, yalan söylemek çok günahtır!” “Yalan söylemiyorum Pavel Petroviç. Ben Nikolay Petroviç’i sevmiyorsam bundan sonra yaşamayayım daha iyi!” “Onu hiç kimseyle aldatmıyorsunuz, değil mi?” “Onu kiminle aldatabilirim?” “Kim bilir!"
  },
  {
    "id": 871,
    "source": "İvan Gonçarov - Oblomov",
    "text": "tutmuş, devam ediyordu: — Elleri ne kadar beyazdı, insanın öpesi gelirdi. Şimdi kabalaştılar, çünkü her işi o görüyor. [(]Nerede ise ağlayacak gibi,[)] Gömleklerimi o kolalıyor[.] Vallahi o kolalıyor; gözümle gördüm. Emin ol kimsenin karısı onun bana baktığı gibi kocasına bakmaz."
  },
  {
    "id": 872,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Tepsiyi bırakarak acele acele dışarıya çıktım. Fakat doktoru görmeye gitmedim. Şubat [(]Akşama doğru[)] Hayrullah Bey’le müthiş bir kavga ettim[.] Ama iş için değil, başkalarının işine karışmak saygısızlığını pek ileri vardırdı da ondan... Demin İhsan Bey’den bahsediyorduk."
  },
  {
    "id": 873,
    "source": "Stefan Zweig - Satranç",
    "text": "Akrabalarından milyonlar koparmayı umdukları Avukat Baron Rotschild’in kesinlikle dikenli tellerin ardındaki bir toplama kampına atılmadığını, belirgin bir kayırmayla bir otele, Gestapo’nun karargâhı olan Metropole Oteli’ne yerleştirildiğini ve özel bir odası olduğunu anımsarsınız belki. Benim gibi göze çarpmayan bir adama da bu ödül layık görüldü. Bir otelde özel bir oda[,] alabildiğine insancıl geliyor kulağa[,] değil mi[?] Ama biz “önemli kişiler”i yirmişer yirmişer buz gibi bir barakaya tıkmayıp da oldukça iyi ısıtılmış, ayrı bir otel odasında barındırmaktaki amaçları, kesinlikle insancıl değil, tersine kurnaz bir yöntem uygulamaktı, bana inanabilirsiniz. Çünkü ağzımızdan gerekli “kanıt”ı almalarını sağlayacak baskı, kaba dayaktan ya da bedensel işkenceden daha incelikle uygulanmalıydı: akla gelebilecek en zekice soyutlama yoluyla."
  },
  {
    "id": 874,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Ç...1 Mayıs Deminden beri yukarıda talebelerimin vazifelerini tashih ediyordum. Kapı çalındı, Munise aşağıdan: -Abacığım, misafir geldi, diye seslendi. Taşlıkta siyah çarşaflı bir hanım geziniyor; yüzü kapalı olduğu için tanımadım, tereddütle[:] [-]Kimsiniz efendim? diye sordum. Birdenbireince bir kahkaha koptu; hanım, kedi gibi boynuma sıçradı."
  },
  {
    "id": 875,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Çiftlikteki hayvanların insanlarla ilişkiye girmesinin son derece sakıncalı olacağını bildiği için, buna gerek kalmayacak koşulları oluşturmaya karar vermişti. Tüm sorumluluğu kendisi üstlenecekti. Willingdon[']da oturan Bay Whymper adlı bir olmuştu; her pazartesi sabahı çiftliğe gelip Napoléon[']dan talimat alacaktı. çığlığıyla tamamladıktan sonra, hayvanlar İngiltere'nin Hayvanları şarkısını söyleyip dağıldılar. Çok geçmeden, Squealer, çiftliği dolaşıp hayvanların kafalarında beliren kuşkuları gidermeye koyuldu."
  },
  {
    "id": 876,
    "source": "George Orwell - 1984",
    "text": "Yakın anlamlı bir ad ile eylemin birbiriyle köken bakımdan bağıntılı olma­ dığı durumlarda bile, çoğu zaman ikisinden biri ayıklanı­ yordu. Örneğin, kesmek diye bir sözcük yoktu, bıçak ad­ eylemi onun anlamını yeterince karşılıyordu. Sıfatlar, ad[-]eylemlere [-]lu soneki, belirteçlere de -1.a soneki getiri­ lerek oluşturuluyordu. Örneğin, çabukluklu \"hızlı\" anla­ mına, çabuklukla da \"hızla\" anlamına geliyordu. Günü­ müzdeki iyi, güçlü, büyük, siyah, yumuşak gibi sıfatlar hiç kuşkusuz korunmuştu, ama çok azalmıştı."
  },
  {
    "id": 877,
    "source": "Michael Ende - Momo",
    "text": "Zira ara sıra onlar bir köşeden geçitikten az sonra duman adamlar orada beliriyor; fakat onlar uzaklaşmış oluyorlardı. Böylece hiçbirisi ile karşılaşmadılar. [\"]İyi ki okumayı önceden öğrenmişim, değil mi[?]\" diye farkında olmadan Kaplumbağanın sırtında bir alarm işareti gibi tek kelime belirdi[:] \"Sus!\" karanlık gölge geçti. Şimdi bulundukları mahalle berbat bir yerdi. Sıvaları dökülmüş bir yığın kale gibi yapı, su birikintileri ile dolu pis sokaklar."
  },
  {
    "id": 878,
    "source": "Michael Ende - Momo",
    "text": "Tam bu sırada birisi Profesör Eisenstein'ın kolundan çekti. Bu, güzel yerli kızdı. \"Malumba[!]\" diye hoş bir eda ile konuşuyordu[:] \"Malumba oisutu sono[!] Erveini samba insaltu lolobindra. Kramuna heu beni beni sadogau.\" Profesör şaşkınlıkla \"Babalu?” diye sordu."
  },
  {
    "id": 879,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Şehnaz Hanım, zarfın üzerine göz gezdirirken hafifçe kaşlarını çatıyordu. Fakat, çabucak kendini topladı. Derin sükûnete rağmen heyecan içinde olduğu hissedilen sınıfa hitâb ile[;] [-]Mektup, Cemile’nin Suriye’deki biraderinden[...] Yalnız hemen bana itaat etmediği için yarına kadar ona vermeyeceğim, dedi. Talebeler, tekrar başlarını kitaplarının üzerine eğdiler."
  },
  {
    "id": 880,
    "source": "İvan Gonçarov - Oblomov",
    "text": "İrkilerek kendine gelen nine, başındaki atkıyı düzeltir, kır saçlarını altına sokar ve sanki hiç uyumamış gibi yaparak bir İlyuşa'ya, bir efendisinin, hanımının pencerelerine ürkek gözlerle bakar, sonra titreyen elleriyle şişlerini dizleri üstündeki çoraba sokmaya başlar. O sırada sıcak yavaş yavaş azalmaktadır; tabiatta her şey diriliyor gibidir; güneş ormana doğru inmiştir. Ev de yavaş yavaş canlanmaya başlar[;] bir kapı gıcırdar[;] avluda ayak sesleri işitilir[;] samanlıkta birisi hapşırır. Çok geçmeden mutfaktan bir hizmetçi çıkar; iki büklüm, büyük bir semaveri taşımaktadır. Ev halkı yavaş yavaş çaya toplanır."
  },
  {
    "id": 881,
    "source": "Michael Ende - Momo",
    "text": "\"İkisini de yakalayıp sardı, kurtulamıyorlar. Geç kalmadan yardım etmeliyiz.\" Ve hemen yine daldı. Şefleri olan uzman Franko[']nun [(]ona Yunus derlerdi[)] yönetiminde yüz tane kurbağa adam derhal dalgaların arasına atladılar. Denizin üstünü köpüklere boğan korkunç bir savaş oldu dipte. Fakat bu dev yaratık öylesine güçlüydü ki, kurbağa adamlar bile iki kızı korkunç kıskaçtan kurtaramadılar."
  },
  {
    "id": 882,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Güçlü kuvvetli danalar yetiştirmek için gerekli olan sütleriniz nereye gitti? Her bir damlası düşmanlarımızın midesine indi. Siz[,] tavuklar; bu yıl kaç yumurta yumurtladınız, o yumurtaların kaçından civciv çıkarabildiniz[?] Tümüne yakını pazarda satıldı, Jones ve adamlarına para kazandırdı. Ve sen, Clover, doğurduğun o dört tay nerede; yaşlandığında sırtını dayayacağın, keyfini süreceğin o taylar nerede?"
  },
  {
    "id": 883,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Ne yapacağız, anlat!\" \"Ne olacak? Günün birinde, bütün paramızı toplayıp küçük bir ev, bir iki hektar toprak alacağız. Bir ineğimiz, birkaç domuzumuz olacak.[\"] Lennie[:] \"Mal sahipleri gibi yaşayacağız!\" diye bağırdı. \"Tavşanlarımız olacak. Anlat, George."
  },
  {
    "id": 884,
    "source": "Michael Ende - Momo",
    "text": "O bir şey kazanmamıştı. Her şeyini kaybetmişti. Ne var ki[,] gene arabasıyla programdan programa koşuyor[;] uçaklarla yolculuk yapıyor; sekreterlerine notlar yazdırıyor; eski hikâyeleri tersyüz edip duruyordu[.] Bütün gazetelerin yazdığına göre \"Çok verimli çalışıyordu\". Sonunda bir zamanların hayalci Gigi'si, yalancı bir Girolamo olup çıktı."
  },
  {
    "id": 885,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Geçen hafta, iyi bir öğrenci olduğum için bana Tılsımlı Gül adlı masal kitabını armağan ettiklerini hatırlıyor musun?” “Evet hatırlıyorum.” “Kitabı okuduğumu sana söylemedim daha. Bir periden kırmızı-beyaz bir gül alan prensin öyküsüydü. Bu değerli prens[,] koşumları altından bir ata biniyormuş; kitapta öyle anlatılıyor[.] Bu altın koşumlu at üzerinde serüven arayarak yolculuk ediyormuş. İlk tehlikede tılsımlı gülü bir sallıyormuş, kaçıp kurtulabilmesi için korkunç bir duman beliriyormuş ortalıkta."
  },
  {
    "id": 886,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Sen, Boxer, şu koca kasların gücünü yitirmeyegörsün, Jones o saat, sakat ve kocamış atları alan kasaba satar seni. Kasap da gırtlağını keser, kazanda kaynatıp av köpeklerine mama yapar. Köpeklere gelince[;] yaşlanıp dişleri dökülmeyegörsün[,] Jones boyunlarına bir taş bağlar, en yakın göle atar[.] \"Öyleyse, yoldaşlar, bu hayatta başımıza gelentüm kötülüklerin insanların zorbalığından kaynaklandığı gün gibi açık değil mi? Şu İnsanoğlu'ndan kurtulalım, emeğimizin ürünü bizim olsun."
  },
  {
    "id": 887,
    "source": "İvan Gonçarov - Oblomov",
    "text": "diyebildi. Nasıl olacak, dedi; başkaları sözünün ne demek olduğunu düşünmedin mi sanki? Durdu; Zahar[']a bir süre baktı[:] [—] Söyleyeyim mi sana bu sözün ne demek olduğunu? Zahar, ininde dolaşan bir ayı gibi döndü ve derin bir ah çekti. Başkaları dediğin, tavan aralarında pislik ve sefalet içinde yaşayan kaba, cahil, tanrıya kalmış insanlardır."
  },
  {
    "id": 888,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "sanki gözlerim açılmıştı! ‘İşte,’ diye düşünmüştüm, ‘sonunda bir insan buldum!’ Sırası gelmişken Yevgeniy Vasilyeviç, buradaki bir hanımefendiye mutlaka gitmelisiniz. Bu hanım sizi tümüyle anlayabilecek biridir ve mesajınız onun için gerçek bir bayram olacaktır; sanırım adını duymuşsunuzdur[.]” “Kimmiş bu[?]” dedi Bazarov isteksiz isteksiz[.] “Kukşina, Eudoxie, Yevdoksiya Kukşina. Mükemmel yaradılışlı, tam anlamıyla émancipée22, ilerici bir kadın."
  },
  {
    "id": 889,
    "source": "Albert Camus - Yabancı",
    "text": "Marie ile biz de çıktık. Kadın durmadan bağırıyor, Raymond da veryansın ediyordu. Marie, [\"]Ay, ne korkunç[!]\" dedi, ses çıkarmadım. Gidip bir polis çağırmamı söyledi. \"Polislerden hoşlanmam,\" dedim."
  },
  {
    "id": 890,
    "source": "Stefan Zweig - Satranç",
    "text": "Öğlen doktor geldi, sevimli, yaşlıca bir beydi. Ailemin adını biliyordu ve imparatorun özel doktoru olan amcamı öyle saygıyla andı ki, hakkımda iyi şeyler düşündüğü duygusuna kapıldım hemen. Arkasından bana akla gelebilecek her türlü soruyu sordu[,] özellikle bir tanesi beni çok şaşırttı[:] Matematikçi mi, yoksa kimyacı mıymışım. Her ikisi de olmadığımı söyledim. ‘Tuhaf,’ diye mırıldandı."
  },
  {
    "id": 891,
    "source": "Michael Ende - Momo",
    "text": "\"Bunun ne demek olduğunu hepiniz biliyorsunuz.\" rahatça birkaç kelime konuşamayacak mıyım? Ama görüyorsun işte yavrum, beni rahat bırakmıyorlar! Bu esir pazarcıları bana rahat vermiyor[!][\"] \"Ooo!\" diye alındı ikinci hanım, \"Bizce hava hoş! Biz sadece görevimizi yapıyoruz. Sizin programlarınızı düzenlemek için bize para ödüyorsunuz sayın üstat!\" bizimle havaalanına kadar gel!"
  },
  {
    "id": 892,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "İkiyüz kilo yük vur sırtına, bana mısın demez.\" Patron defteri cebine koydu. Baş parmaklarını kemerine geçirdi ve bir gözünü kırptı: \"Bana baksana sen,\" dedi. \"Nedir çevirdiğin dolap[?]\" \"Ha[?]\" \"Bu oğlanın sırtından ne kadar kazanıyorsun, yani[?] Gündeliğini sen mi alıyorsun yoksa?\" \"Ne münasebet. Demek onu işlettiğimi sandınız?\" \"Eee, bir adamın bir başkasıyla bu kadar yakından ilgilendiğini ömrümde görmedim de."
  },
  {
    "id": 893,
    "source": "Albert Camus - Yabancı",
    "text": "\"İniyorum!\" diye seslendi. Hem yorgunluğumdan, hem de panjurları açmadığımdan olacak, sokakta daha şimdiden dört bir yanı kaplamış olan güneş yüzüme sanki bir tokat gibi çarptı. Marie sevinçten yerinde duramıyor, hep, [\"]Hava ne güzel[!]\" deyip duruyordu. Kendimi biraz açılır gibi hissettim, karnımın da aç olduğunu fark ettim. Marie'ye söyledim."
  },
  {
    "id": 894,
    "source": "Stefan Zweig - Satranç",
    "text": "Mirko onu da rahatlıkla yendi. Ağır ağır, düşünüp taşınarak, kararlı bir biçimde oynuyordu, geniş alnını tahtadan bir kez bile kaldırmadı. Ama karşı konulmaz bir kesinlik vardı oyununda[;] ileriki günlerde ne jandarma çavuşu ne de papaz ona karşı bir el kazanmayı başardılar[.] Öğrencisinin normalde yaşadığı zekâ geriliğini herkesten daha iyi bilecek durumda olan papaz, bu tek yanlı tuhaf yeteneğin daha çetin bir sınava ne kadar dayanabileceğini ciddi olarak merak etmeye başladı. Mirko’ya biraz olsun çekidüzen vermek için, saman sarısı fırça gibi saçlarını köy berberinde kestirdikten sonra, kızağına bindirip küçük komşu kente götürdü onu, ana meydandaki kafenin bir köşesinde tutkulu satranç oyuncularının toplandığını biliyordu, kendisi onlar kadar deneyimli değildi."
  },
  {
    "id": 895,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Şarkı söylesem nasıl olurdu acaba? Evet, alçak sesle şarkı söyleyebilirdim, kuşkusuz yalnızlığında onu biraz avuturdu bu. Bildiğim bütün şarkıları kafamdan geçirirken, Bay Ariovaldo’dan öğrendiğim son şarkıyı anımsadım[:] Tango[;] becerebildiğim en güzel işlerden biriydi tango. Hafiften söylemeye başladım: Çırılçıplak bir kadın isterdim, Çırılçıplak isterdim onu… Gece ayışığında Bir kadın bedeni isterdim… “Zezé!” “Evet, baba?” Aceleyle yerimden fırladım. Babam tangoyu çok sevmiş olmalıydı ve gelip yakınında söylememi istiyordu herhalde."
  },
  {
    "id": 896,
    "source": "George Orwell - 1984",
    "text": "Julia, ondan kurtulmaya çalışmamakla birlikte, yan yana gelmelerini önlemek için adımlarını sıklaştırmıştı. Winston, başlangıç­ ta, ona metro istasyonuna kadar eşlik etmeye kararlıydı, ama çok geçmeden o soğukta Julia'nın ardı sıra yürümek ona saçma ve çekilmez gelmişti. Julia[']yı bırakıp gitmek­ ten çok[,] Kestane Ağacı Kahvesi[']ne dönmek için dayanıl­ maz bir istek duymuştu; Kestane Ağacı Kahvesi ona hiç bu kadar çekici gelmemişti. Birden köşedeki masasını, satranç tahtasını ve bittikçe garsonun yenilediği cini özle­ mişti. Üstelik sıcaktı orası."
  },
  {
    "id": 897,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Öğretmen durumundaki Totoca anlatıyordu: “Mandalina balonlar, ancak çok deney sahibi olduktan sonra yapılabilir. Başlangıçta balonları iki parçalı yapman gerek, böylesi daha kolay.” “Totoca, tek başıma bir balon yaparsam deliğini açar mısın?” “Duruma göre…” Bilyelerime, ve hızla çoğalmasına ‘kimsenin akıl erdiremediği’ artist resimlerime göz koyarak başlıyordu pazarlığa yine. “Amma yaptın, Totoca[;] benden istediğin zaman, senin yerine kavga bile ediyorum ama[.]” “Peki. Birincisini karşılıksız yaparım, ama başaramazsan ötekiler için değiş- tokuşa razı olursun.” “Kabul.” Böyle derken, bu işi, elini balonlarıma sürdürmeyecek kadar iyi öğreneceğime içimden yemin ediyordum. Ah!"
  },
  {
    "id": 898,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Mangaratiba Öğretmenimiz Cecília Paim, bir cümle, ama kendi bulduğu bir cümleyi yazmak için karatahtaya gelmek isteyen olup olmadığını sorunca, hiçbir öğrenci yerinden kımıldamadı. Ben bir şey düşündüm ve parmağımı kaldırdım. “Gelmek mi istiyorsun, Zezé?” Sıramdan çıktım, onun sözleriyle gururlanarak karatahtaya yürüdüm[:] “Gördünüz mü[!] Sınıfın en küçüğü!” dedi. Karatahtanın yarısına bile yetişemiyordum."
  },
  {
    "id": 899,
    "source": "Stefan Zweig - Satranç",
    "text": "Onunla konuşmak ve yanımıza çağırmak istemez miymişim? Czentovic’in yeni insanlarla tanışmaya pek hevesli olmadığı gerekçesiyle buna karşı çıktım. Üstelik[,] bizim gibi üçüncü sınıf oyuncularla uğraşmak bir dünya şampiyonuna ne zevk verirdi ki[?] Bu üçüncü sınıf oyuncular sözünü McConnor gibi hırslı bir adama söylememem gerekirdi. Kızgın kızgın arkasına yaslandı ve Czentovic’in bir beyefendinin nazik davetini geri çevireceğine kendi adına inanmadığını söyledi ters ters, bu işin peşine düşecekmiş."
  },
  {
    "id": 900,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Tümüne yakını pazarda satıldı, Jones ve adamlarına para kazandırdı. Ve sen, Clover, doğurduğun o dört tay nerede; yaşlandığında sırtını dayayacağın, keyfini süreceğin o taylar nerede? Dördü de bir yaşına geldiklerinde satıldı[;] onları bir daha hiç göremeyeceksin[.] İnsanlara verdiğin o dört tay ve tarlalardaki emeğinin karşılığında bir avuç yem ve soğuk bir ahırdan başka ne gördün? \"Kaldı ki, yaşadığımız şu sefil hayatın doğal sonuna varmasına bile izin vermezler."
  },
  {
    "id": 901,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "“Bu da ablan Glória için.” Gerindi. “Nefis bir gün oldu!” diye ekledi. “Bay Ariovaldo[?]” “Ne var[?]” “‘Zardalozun cadalozu’ ne demek[?]” “Ne bileyim yavrum? Öfkeyle uyduruverdim işte.” Ve durumundan pek hoşnut, bastı kahkahayı. “Gerçekten onun karnını deşmek istiyor muydunuz?” “Tabii ki hayır."
  },
  {
    "id": 902,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Boxer, burnunu uzatıp koklamaya kalkınca, incecik banknotlar hışırtıyla yerinden oynadı. Daha üç gün olmamıştı ki, çiftlik birbirine girdi. Birden yolun oradan bisikletiyle Whymper çıkageldi[;] yüzü kireç gibiydi[;] avluya girdiğinde bisikletini fırlatıp attı[,] koşarak çiftlik evine daldı. Az sonra, Napoléon'un kaldığı odadan öfkeli böğürtüler işitildi. Haber, tüm çiftliğe, önüne geçilemeyen bir yangın gibi yayıldı."
  },
  {
    "id": 903,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Sizi kendim aradım; fakat evde yoktunuz. Evet, kız kardeşim söylemişti. Fakat ev için merak etmeyin[;] burada rahat edersiniz; yoksa hayvanlardan mı şikâyetçisiniz[?] Hangi hayvanlardan? Tavuklardan."
  },
  {
    "id": 904,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Mina ile de hayatımı, kuvvetlerimi harcadım; onu sevdiğimi sanarak gelirimin yarısından fazlasını israf ettim. Nevskiy Bulvarı'nda kürklü mantolar arasında bir aşağı bir yukarı dolaştığım zamanlar; evlenecek iyi bir kısmet olduğum için akşam toplantılarına çağrıldığım zamanlar; şehirden yazlığa, yazlıktan Gorohovaya Caddesi'ne taşındığım zamanlar, hayatımı, kafamı boşu boşuna harcıyordum. İlkbahar benim için ıstakoz ve istiridye mevsimiydi[;] sonbahar ve kış kabul günleriyle doluydu[;] yaz gezintilerle geçerdi[...] Bütün hayat tembel ve rahat bir uyku idi. Gururumu da nelerde kullandım?"
  },
  {
    "id": 905,
    "source": "Albert Camus - Yabancı",
    "text": "Dönüşte yukarı çıkarken, Raymond'un odasından kulağıma bir kadın sesi geldi. Az sonra ihtiyar Salamano köpeğini payladı. Merdivenin tahta basamaklarında tekme ve pençe sesleri, ardından da, [\"]Pis, mundar hayvan![\"] diye haykırmalar duyduk. İkisi de sokağa çıktı. İhtiyarın hikâyesini Marie'ye anlattım, güldü."
  },
  {
    "id": 906,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Taşınacağımız evde en aşağı üç gün perişanlık devam edecek; hiçbir şey yerinde olmayacak; resimler yerde sürünecek; lastikler yatağın üstünde; ayakkabılar, çay kutusu, krem kutusu bir arada. Koltuğun biri parçalanmış, bir tablonun camı kırılmış, kanepe lekeler içinde... Aradığın hiçbir şeyi bulamazsın[,] kimse nerede olduğunu bilmez; ya kaybolmuştur ya da öteki evde kalmıştır; haydi bakalım[,] git orada ara[...] Evet, beş on defa gidip gelmek gerek, doğru. Ya, bak, sen de biliyorsun."
  },
  {
    "id": 907,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Nereden düşmüş buraya? dedi. Maarif Müdürü, göründüğü gibi değilmiş; arkadaşının bu sözlerinden adeta sıkıldı ve ötekinden daha fena bir Fransızca ile cevap verdi[:] [-]Rica ederim azizim, mektepteyiz. Ciddi olunuz! Müdür çenesinin altındaki porsumuş deriyi lastik gibi uzatarak bir şeyler düşünüyordu."
  },
  {
    "id": 908,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "“Gerçekten düettocu muyuz biz?” “Artık öyle.” “O zaman izin verin de, Fanny’in koro bölümünü ben söyleyeyim. Siz yüksek sesle söylersiniz, ben hafiften katılırım.” “Kötü bir öneri değil, Zezé.” “Elbette. Yemekten sonra işe koyulduğumuzda Fanny’yle başlarız[;] çok seviliyor[.]” Yakıcı güneşin altında gerçekten de işe koyulduk[.] Fanny’ye başlamıştık ki, bir felaket oldu: Şemsiyesinin altında kaskatı ve yüzü pudradan bembeyaz, Bayan Maria de Penha tam karşıdan geliyordu. Fanny’yi işitince durdu."
  },
  {
    "id": 909,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "Vasiliy İvanoviç ilk başta bu değişikliğe sevinmişti ama sevinci sürekli olmadı. “Yenyuşa beni kahrediyor,” diye gizlice karısına dert yanıyordu, “bir şeyden memnun olmasa ya da kızsa neyse ama kederli ve sıkıntılı olması çok kötü. Hep susuyor, keşke ikimize de küfretse; zayıflıyor, yüzünün rengi de iyi değil[.]” “Tanrım[!] Tanrım!” diye fısıldıyordu kadıncağız, “Boynuna bir muska taksaydım keşke ama izin vermez ki.” Vasiliy İvanoviç, birkaç defa çok dikkatli bir şekilde Bazarov’a çalışmaları hakkında, sağlığı hakkında ve Arkadiy’le ilgili sorular sormaya çalıştı. Ama Bazarov ona isteksiz ve ilgisiz bir tavırla cevap verdi."
  },
  {
    "id": 910,
    "source": "Stefan Zweig - Satranç",
    "text": "Her şeyi itiraf edeceğim! Belgelerin nerede olduğunu, paranın nerede saklandığını söyleyeceğim! Her şeyi söyleyeceğim[,] her şeyi[!]” Neyse ki beni duymadı. Belki de beni duymak istemiyordu. Tehlike bu kadar büyüdüğü sırada beni kurtaran, en azından belli bir süre için kurtaran, önceden tahmin edemeyeceğim bir şey oldu."
  },
  {
    "id": 911,
    "source": "Stefan Zweig - Satranç",
    "text": "Önce ilk sayfasını koparıp kitabı somyanın altına sakladım. Sonra ekmeğimden kopardığım küçük parçaları birleştirip gülünç ve yamuk yumuk satranç taşları yapmaya başladım, şah, vezir falan; bitmek bilmeyen bir uğraştan sonra, en sonunda satranç kitabında gösterilen konumların aynısını kareli yatak örtüsünün üzerinde oluşturabilmeyi başardım. Ama bütün oyunu yeniden oynamaya çalışınca, ötekilerden ayırmak için yarısının rengini tozla koyulaştırdığım gülünç ekmek[-]taşlarımla hiçbir şey beceremedim önce[.] İlk günlerde sürekli şaşırdım; bu bir tek oyuna beş kere, on kere, yirmi kere tekrar baştan başlamam gerekti. Ama yeryüzünde kimin, hiçliğin kölesi olan benim kadar yararsız ve kullanılmayan zamanı vardı ki, kim bu kadar hırs ve sabırla doluydu?"
  },
  {
    "id": 912,
    "source": "Albert Camus - Yabancı",
    "text": "Karnım aç değildi, akşam yemeği yemeden, yatağı boyladım. Raymond büroya telefon etti. Arkadaşlarından biri [(]benden söz etmiş ona[)], pazarı, Cezayir yakınlarındaki kulübesinde geçirmeye çağırıyormuş. \"İyi olurdu,\" dedim, \"ama pazar günü bir kadın arkadaşla buluşacağım.\" Raymond hemen, \"O da buyursun,\" dedi. Arkadaşının karısı, bir sürü erkek arasında tek başına kalmamış olurum diye sevinirmiş çok."
  },
  {
    "id": 913,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Fakat, talihime gayet iyi bir yer çıktı. Sakin, şirin bir asker memleketi. Yerli olsun[,] yabancı olsun[,] kimin babasını, kardeşini, oğlunu, kocasını sorarsanız mutlaka askerdi; ya zabit, ya nefer[...] Hocalarının bile bir kısmı tabur imamı, alay müftüsü, filan gibi askerlikte bir ilişiği olan insanlar. Komşum Kurban Efendi’nin, sarığıyla beraber ara sıra üniforma giydiği, kılıç taktığı bile oluyor."
  },
  {
    "id": 914,
    "source": "Stefan Zweig - Satranç",
    "text": "En can alıcı anda beklenmedik bir biçimde oyuna karışan kurtarıcımızın yarattığı gizemli havanın çekiciliği ve adamın neredeyse korku dolu alçakgönüllülüğü ile profesyonel oyuncunun sarsılmaz özgüveni arasındaki karşıtlık da eklendi buna. Kimdi bu yabancı? Burada rastlantı[,] daha keşfedilmemiş bir satranç dehasını gün ışığına mı çıkarmıştı[?] Yoksa ünlü bir usta anlaşılmaz bir nedenden dolayı bizden adını mı gizliyordu? Bütün bu olasılıkları büyük bir heyecanla tartıştık, en çılgın savlar bile, yabancının akıl almaz utangaçlığı ve şaşırtıcı açıklamasını unutulmaz oyun yeteneğiyle bağdaştırmaya yetecek kadar çılgın gelmiyordu bize."
  },
  {
    "id": 915,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Her halde, Zeyniler şimdiye kadar işittiğim ve resimlerini gördüğüm köylerden hiçbirisine benzemiyordu. Etrafı tahta perdelerle çevrilmiş bir bahçenin kırmızı kapısı önünde durduk. Yapraklarına varıncaya kadar siyah görünen bu köyde gördüğüm ilk renk[;] kırmızı tahta oldu[!] Muhtar, yumruğuyla kapıyı çalmaya başladı. Her vuruşunda kapı yıkılacak gibi sarsılıyordu."
  },
  {
    "id": 916,
    "source": "George Orwell - 1984",
    "text": "Syme bir fılolog, bir Yenisöylem uzmanıydı. Yenisöylem Sözlüğü' nün On Bi­ rinci Baskısı'nı hazırlamakta olan dev ekipteki uzmanlar­ dan biriydi. Ufak tefek, Winston[']dan da kısa boylu, siyah saçlı, iri, patlak gözlü bir adamdı; biraz mahzun, biraz alaycı bakışlarını yüzünüzden ayırmadan konuşurdu[.] \"Jiletin var mı diye soracaktım,\" dedi. Winston, suçluca bir telaşla, \"Hiç yok!\" dedi."
  },
  {
    "id": 917,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Silahlar patlar patlamaz ürküp kaçmıştı. Mollie'yi aramaya çıkanlar avluya döndüklerinde bir de baktılar, seyis ortalarda yok. Anlaşılan[,] öldü sandıkları delikanlı aslında yalnızca bayılmıştı; sonradan kendine gelmiş, tabanları yağlayıvermişti[.] Hayvanlar çılgınca bir coşkuyla yeniden bir araya gelmişler, savaşta gösterdikleri kahramanlıkları avazları çıktığı kadar bağırarak birbirlerine anlatıyorlardı. Zaferi kutlamak için hemen oracıkta bir tören düzenlediler."
  },
  {
    "id": 918,
    "source": "Michael Ende - Momo",
    "text": "Yere çömeldi ve parmağını kıvırarak yavaşça kaplumbağanın kabuğunu uyandırdığım için üzgünüm, ama bugün neden hiçbir arkadaşımın gelmediğini sen biliyor musun?\" Kabuğun üzerinde beliren yazı şuydu: \"Hiçbirisi burada değil.\" \"Neyse canım\" dedi. \"Yarın anlarız. Arkadaşlarım yarın mutlaka gelirler.[\"] Yanıt şuydu[:] [\"]Bir daha asla!\" \"Sen ne demek istiyorsun?\" diye korkuyla sordu. \"Arkadaşlarıma ne oldu?\" \"Hepsi gitti.\" yanılıyorsun Kassiopeia. Daha dün, burada, büyük toplantıda hepsi vardı.\" Kassiopeia'nın yanıtı \"Sen çok uyudun\" oldu."
  },
  {
    "id": 919,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Savaşta hayatını yitirmiş olan koyun ise \"İkinci Dereceden Kahraman Hayvan\" nişanına değer görüldü. Savaşa ne ad verileceği uzun uzadıya tartışıldı. Sonunda, [\"]Ağıl Savaşı[\"]nda karar kılındı; pusuya yatan hayvanlar oradan saldırıya geçmişlerdi. Bay Jones'un tüfeği çamurun içinde bulundu. Çiftlik evinde birkaç kutu fişek olduğunu biliyorlardı."
  },
  {
    "id": 920,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Ama öbür yana gitme, su çok derinleşir orada. Şimdi balık avlayacağım. Benimle kalmak istersen konuşmamalısın, sonra balıklar kaçabilir[.]” Onu balık avıyla baş başa bıraktım ve dolaşmaya çıktım[;] yeni keşiflerde bulunmaya[.] Ne kadar güzeldi ırmağın bu köşesi. Ayaklarımı suya soktum ve her yanda yığınla küçük kurbağa gördüm."
  },
  {
    "id": 921,
    "source": "George Orwell - 1984",
    "text": "Winston'ın arkasında oturan siyah saçlı kız, \"Do­ muz! Domuz! Domuz[!][\"] diye bağırmaya başlamıştı; bir­ den kalın bir Yenisöylem sözlüğünü kaptığı gibi ekrana fırlattı. Sözlük Goldstein'ın burnuna çarpıp yere düştü: Ses hiç kesilmeden sürüyordu. Winston bir an kendine geldi ve ötekilerle birlikte bağırdığını, topuklarını var gücüyle iskemlenin basamağına vurduğunu fark etti."
  },
  {
    "id": 922,
    "source": "George Orwell - 1984",
    "text": "Parsons'ı götürdüler. Nedendir bilinmez, daha başka tutuklular da geldi gitti. İçlerinde [\"]101 Numaralı Oda[\"]ya götürülmüş bir kadın da vardı[;] o odanın adı geçmeyegör­ sün, tirtir titremeye başlıyor, beti benzi kireç kesiliyordu. Bir ara Winston tahmin yürütmeye çalıştı: Oraya sabahle­ yin getirildiyse şimdi öğleden sonra olmalıydı, yok öğle­ den sonra getirildiyse o zaman şimdi gece yarısı olsa ge­ rekti. Hücrede kadınlı erkekli altı mahkıim vardı."
  },
  {
    "id": 923,
    "source": "Michael Ende - Momo",
    "text": "Arkasındaki demirli kapı biraz aralık cins köpek oynaşıyorlardı. Bir döner fıskiyeden sular fışkırıyordu. Çiçeklerle gizleyemedi; [\"]Ooo, bunlar ne güzel kuşlar[!][\"] deyiverdi. Ve onları yakından görebilmek için içeri girmeye yeltendi. Fakat yelekli adam onu yakasından geri çekti; \"Dur bakalım!"
  },
  {
    "id": 924,
    "source": "Albert Camus - Yabancı",
    "text": "\"Bilmem,\" dedim. Bunun üzerine köpürdü: \"Bu mundar hayvan için bir de para mı vereceğim? Gebersin kâfir[!][\"] Köpeğe küfürler savurmaya başladı[.] Raymond gülerek eve girdi. Ben de ardından girdim."
  },
  {
    "id": 925,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Sana ne faydası var bunun be, Candy? Kendine bile faydası yok. Neden öldürmezsin şu hayvanı, Candy[?][\"] \"Yalla[!].. Ne zamandan beri yanımda. Ta küçükten büyüttüm onu."
  },
  {
    "id": 926,
    "source": "İvan Gonçarov - Oblomov",
    "text": "diye düşünüyordu; belki de hokkadaki mürekkep kurumuştur, kâğıt yoktur. Ya da belki cümlelerinde \"ki\"lerle \"dolayı\"lar birbirine girmiştir; ya da \"şimdi ya da hiçbir zaman\" kelimelerinin sonuncusunu seçmiş, ellerini başının altına koyup uzanmış, Zahar da onu kendi el yazısıyla mektuplar, kâğıtlar, hatta dilekçeler duruyordu. Hiç [\"]ki\" kullanmadan birkaç sayfa doldurmuştu; rahat, hatta bazen güzel bir üslupla yazıyordu; Ştoltz[']la seyahat ve çalışma hülyaları kurduğu zamanlarda olduğu gibi. Sabah saat yedide kalkıyor, okuyor; dışarıdan kitaplar getirip götürüyordu. Yüzünde ne uyuşukluk, ne yorgunluk, ne de can sıkıntısı görünüyordu."
  },
  {
    "id": 927,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Canı sıkılmış gibi omuzlarını silkti: -Mızmızlanmaya lüzum yok. Tam dört saatlik yoldan geliyorum. Yorgunluktan berbat oldum[;] söze hizmet ettiğimiz yetmiyor da[,] bir de dalkavukluk mu etmeli[?] dedi. Hayrullah Bey, ehemmiyetli hastalıklar karşısında daima böyle asabi ve kaba bir adam oluyordu."
  },
  {
    "id": 928,
    "source": "Stefan Zweig - Satranç",
    "text": "İyi yürekli papaz canla başla uğraşıp ağzını bıçak açmayan, anlama güçlüğü çeken çocuğa köy okulunda öğrenemediği şeyleri evde özel dersler vererek öğretip açığını kapatmaya çalıştı. Ama çabaları sonuçsuz kaldı. Mirko[,] kendisine yüz kez anlatılan harflere hâlâ boş boş bakıyordu; ağır işleyen beyninde[,] en basit ders konularıyla bile uğraşacak güç yoktu[.] On dört yaşındayken bile, hesap yapması gerektiğinde parmaklarından yardım alıyordu ve bir kitap ya da gazete okumak, yetişme çağındaki bu çocuk için daha da çok çaba gerektiriyordu. Bu konuda Mirko’nun isteksiz ya da dik kafalı olduğu kesinlikle söylenemezdi."
  },
  {
    "id": 929,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Annem hemen hemen doğduğu günden beri çalışmaktaydı. Altı yaşma geldiği sıralarda fabrika kurulunca onu işe sokmuşlar. Bir masaya oturtmuşlar[;] araçları temizleyip silmesi gerekiyormuş[.] Ama o kadar küçükmüş ki, tek başına aşağı inemediğinden, bulunduğu yerde altını ıslatıyormuş. Bu yüzden hiç okula gidememiş, okuma yazma öğrenememiş."
  },
  {
    "id": 930,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Hiç, Manuel Valadares kadar çirkin bir ad işittin mi?” “Evet, çirkin bir ad. Ama ben bu konuda bir şey düşünüyorum.” “Ne düşündüğünü bilmediğimi mi sanıyorsun? Biliyorum[,] Minguinho[;] ama şimdi sırası değil. Bırak biraz da idman yapayım… Sonra denerim.” * * * Ve günler büyük bir mutluluk içinde geçiyordu. Bir sabah, elimde öğretmenime götürdüğüm çiçekle sınıfa girdim."
  },
  {
    "id": 931,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "dedi. Daha ziyade şaşırdım: -Yani diplomam mı demek istiyorsunuz, dedim. Müdür, sinirli bir istihfafla dudaklarını büktü; köşede oturan cılız bir misafire başını salladı[:] [-]Görüyorsunuz ya hali. insan, nasıl çıldırmaz? istida ile şahadetname arasındaki farktan haberleri yoktur."
  },
  {
    "id": 932,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Şimdi, sizden uzakken durum çok farklı! Tatlı gözleriniz, sevimli, güzel yüzünüz karşımda değil; önümdeki kâğıt sessiz ve sabırlı. Size şu cümleyi rahat rahat yazıyorum [(]yalan; hiç de rahat değilim[)]: Artık birbirimizi görmeyeceğiz (bu doğru). Başka birisi olsa şunu da eklerdi: 'Bu satırları gözyaşları içinde yazıyorum.' Ama ben size yalan söylemiyorum, acımın bir gösteriş olmasını istemiyorum, çünkü dertleri, pişmanlıkları artırmak neye yarar? Bu çeşit yalanlarda sevgiyi daha fazla kökleştirmek umudu saklıdır."
  },
  {
    "id": 933,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "George, Lennie'ye baktı. \"Ulan, amma şıllık şey be!\" dedi. [\"]Curley de karı diye bula bula bunu mu bulmuş[!]\" Lennie onu savunmak için[:] \"Güzel kız,\" dedi. \"Güzelliğine güzel, zaten pek sakladığı yok hani. Curley'in daha çok göreceği var bu karıdan."
  },
  {
    "id": 934,
    "source": "George Orwell - 1984",
    "text": "Bu sürekli değiştirme işlemi yalnızca gazeteler için değil, kitaplar, süreli yayınlar, broşürler, posterler, kitapçıklar, filmler, ses bantları, karikatürler, fotoğraflar, siyasal ya da ideolojik bakımdan önem taşıyabilecek her türlü kitap ve belge için geçerliydi. Geçmiş, günü gününe, nerdeyse dakikası dakikasına güncelleniyordu. Böylelikle[,] Parti[']nintüm öngörülerinin ne kadar doğru olduğu belgeleriyle kanıtlanmış oluyor; günün gereksinimleriyle çelişentüm haber ve görüşler kayıtlardan siliniyordu[.] Tüm tarih, ge­ rektikçe sık sık kazınan ve yeniden yazılan bir palimp­ seste dönmüştü. Bu işlem uygulandıktan sonra, herhangi bir çarpıtmanın yapıldığını kanıtlama olanağı ortadan kalkıyordu."
  },
  {
    "id": 935,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Canım, başka bir sokağa, şu tarafa, parka doğru git... Nehrin öbür kıyısına geç. Zahar kendi kendine, [\"]Gezmeye yolluyor beni[;] ne garip şey; hiç böyle şey görmedim,[\"] diyordu. arasından: çağırdı: — Pazara git, yiyecek al, dedi. Her şeyi aldım, yemek neredeyse hazır olacak."
  },
  {
    "id": 936,
    "source": "Albert Camus - Yabancı",
    "text": "Ağızlarını açmadılar. Az sonra, akşam bastırıverdi. Üzerinde yatacağım hasırı nasıl düzelteceğimi gösterdiler[;] hasırın uçlarından biri kıvrılarak[,] yastık yapılabiliyordu[.] Bütün gece tahtakuruları yüzümde cirit oynadı. Birkaç gün sonra, beni tek başıma bir hücreye kapadılar."
  },
  {
    "id": 937,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "Nereye gittiklerini pekala biliyorum.\" Lennie, büyülenmiş gibi onu seyrediyordu. Fakat keyifleri kaçan Candy ve Crooks, onunla gözgöze gelmekten sakınıyorlardı. Candy dedi ki[:] \"Madem ki nerede olduğunu biliyorsunuz, ne diye gelip, Curley[']i soruyorsunuz?\" Kadın hoşlanmış bir tavırla onlara baktı: \"Ne tuhaf,\" dedi. \"Bir erkeği tek başına gördüğüm zaman onunla pekala anlaşıyorum. Ama ikiniz bir arada oldunuz mu, ağzınızdan tek laf alana aşkolsun."
  },
  {
    "id": 938,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "“Kaç aylık oldu?” diye sordu Pavel Petroviç. “Altı aylık; yakında yedi aylık olacak, ayın on birinde.” “Sekiz olmayacak mı, Fedosya Nikolayevna?” diye çekinerek lafa karıştı Dunyaşa. “Hayır[,] yedi; nasıl olabilir ki[?]” Bebek tekrar gülmeye başladı, gözlerini sandığa dikmişti ve birden beş parmağıyla annesinin burnunu ve dudaklarını yakaladı[.] “Yaramaz,” dedi Feneçka, yüzünü onun parmaklarından çekmeksizin. “Kardeşime benziyor,” dedi Pavel Petroviç."
  },
  {
    "id": 939,
    "source": "Michael Ende - Momo",
    "text": "Onun için despotu kendi haline bıraktılar. Çılgınlık bu ya, Marksentius Kommunus'un da aklına dünyayı kendi haline bırakıp, yepyeni bir dünya kurmak fikri takıldı. [\"]Dünya büyüklüğünde[;] evleri, ağaçlan, akarsuları yerli yerinde eski dünyanın tıpkısı bir küre yapılmasını emretti. Ölüm cezası ile korkutularak o çağın bütün insanları bunun yapımında çalıştırıldılar. Tabii bu dünyayı üzerine oturtacak bir destek gerekiyordu."
  },
  {
    "id": 940,
    "source": "George Orwell - 1984",
    "text": "İyice seyrelmiş çiçekler, incecik dallar arasında ıslık çalan rüzgarda titriyordu. Winston kolunu Julia'nın beline dolamıştı. Ortalıkta tele[-]ekran görünmüyordu[,] ama gizli mik­ rofonlar olabilirdi; üstelik görübilirlerdi de[.] Ama ne fark ederdi ki, hiçbir şeyin önemi yoktu. Yere uzanabilir, can­ ları isterse şey yapabilirlerdi."
  },
  {
    "id": 941,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Seni canlandırmak kabil değil. Mesela, üç gün evvel bir düğün bahanesiyle seni köye götürdüm. Çeşit çeşit insanlar gördün[;] davul, zurna dinledin[;] köçek, pehlivan seyrettin[;] ben, kendi payıma müthiş eğlendim; fakat sen eğlenmedin, inkâr etme, göz ve izan var. Size anlatmak kabil değil enişte, benim yaradılışım başka türlü. Yok oğlum, sen kendini fena bıraktın."
  },
  {
    "id": 942,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Clover, kocaman ön ayağıyla ördek yavrularının çevresine bir duvar ördü; onlar da oraya sığınıp birbirlerine sokuldular ve o saat uykuya daldılar. Son anda, Bay Jones'un iki tekerlekli arabasını çeken saçı uzun aklı kısa, beyaz kısrak Mollie çıkageldi; ağzında kesmeşekeri, süzüm süzüm süzülerek içeri girdi. Kendine önlerde bir yer seçti[;] bakışları üzerinde toplamak umuduyla kırmızı kurdelelerle örülü beyaz yelesini iki yana sallamaya başladı[.] Son olarak da kedi göründü; huyu kurusun, hemen en sıcak yeri aranmaya başladı, sonunda Boxer ile Clover'ın arasına sığıştı; Koca Reis'in söylevinin sonuna kadar –söylediklerinin bir tekine bile kulak vermeden– keyifli keyifli mırlayıp durdu. Arka kapının oradaki tünekte uyuyan evcil kuzgun Moses'ı saymazsak, hayvanların tümü gelmişti artık."
  },
  {
    "id": 943,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "‘Öldüğünü Görmek İstiyorum Bir Zindanda’ bölümüne geldiğinde ürperirdim; o kadar güzeldi. Sesini ayarladı ve Claudionor’a başladı: Morro da Mangueria’da samba yapmaya gittim Bir kız çağırdı beni; şöyle, şöyle… Hayır, hayır, gitmeyeceğim; kocası irikıyım. Bıçağından korkarım… Hayır[,] gitmeyeceğim; kocası kocaman biri… Ailesini doyurmak için limanda çalışan biri Susuyor ve açıklıyordu[:] “Her keseye uygun şarkı sözü[.] Altmış yeni şarkı! Son tangolar.” İşte, beni mutlu eden şarkı: Fanny’yi söylemeye başlamıştı şimdi: Yalnız olmasından yararlandın zavallının İncecik sesiyle bağıramadı bile."
  },
  {
    "id": 944,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Acaba yankesicilere mi çarptırdım? Zahar: — Yankesici çarpsa hepsini alırdı, diyerek odadan çıktı. [\"]Nereden para bulacağım,\" diyordu; \"köyden kim bilir ne zaman gönderecekler ve ne kadar gönderecekler[?]\" Saate baktı; iki olmuştu. Olga'ya gitme vakti. Bugün yemeğe davetliydi."
  },
  {
    "id": 945,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Sual sormak için bana baktıkça, adeta kirpikleri titriyordu. Pencerenin yanında duran orta yaşlı iki kâtip, ağız ağıza bir şeyler konuşuyorlar, ara sıra yan gözle bize bakıyorlardı. Bir tanesi; [-]Şahap[,] evladım[,] sen bugün fazla yoruldun. Şu istidayı biraz da biz yazalım, dedi. Kuruyası dilim durmaz ki."
  },
  {
    "id": 946,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Bütün hayat tembel ve rahat bir uyku idi. Gururumu da nelerde kullandım? Ünlü bir terziye elbise ısmarlamakta; tanınmış aileler içine kabul edilmekte; Prens R[']nin elini sıkmakta[...] Gurur hayatın tuzudur derler; gururum nereye gitti? Ya ben yaşadığım hayatı anlayamadım ya da bu hayatın hiçbir değeri yoktu."
  },
  {
    "id": 947,
    "source": "George Orwell - 1984",
    "text": "Rüyasın­ da, aslında karanlık duvarın ardında ne olduğunu bildiği için hep kendi kendini kandırdığı duygusuna kapılıyor­ du. O şeyi, beyninin bir parçasuu kopartıp çıkanyormuş­ çasına korkunç bir çabayla tutup ortaya çıkarabilecekti sanki. Ama her seferinde[,] o şeyin ne olduğunu anlayama­ dan uyanıyordu; gel gör ki, lafını ağzına tıkadığında Julia['] nın söylemekte olduğu şeyle bir bağlantısı vardı[.] \"Kusura bakma,\" dedi; \"bir şey yok. Sıçanlardan nef­ ret ederim de.\" \"Merak etme, bir tanem, o iğrenç yaratıklar buraya asla giremeyecek."
  },
  {
    "id": 948,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Bu en yeni, en yakın felaketti; ama Taşınmaktan kurtulamayacağını için için seziyordu, hele Tarantiyev işe karıştıktan sonra... Ama bu belalı işi düşüncesinden en az bir hafta ileriye atmış, böylece bir haftalık rahatını sağlamıştı. [\"]Belki Zahar taşınmamanın bir çaresini bulur; belki de beni çıkarmazlar; işi gelecek yaza bırakırlar ya da büsbütün vazgeçerler[.] Neyse, bir çare bulunur elbet. Olacak şey mi canım..."
  },
  {
    "id": 949,
    "source": "George Orwell - 1984",
    "text": "Winston'ın ak­ lından geçirmesine kalmadan çıkarıverdiği giysilerini akla zarar bir buyurganlıkla fırlatıp atarken koca bir uy­ garlığı silip atıyordu sanki. Bembeyaz vücudu gün ışığın­ da pırıl pırıldı. Oysa Winston kızın vücuduna bir süre bakmadı[;] gözlerini, Julia[']nın çilli yüzündeki o belli belir­ siz, ama meydan okuyan gülümseyişten alamadı[.] Önün­ de diz çöküp ellerini ellerine aldı. \"Daha önce de yaptın mı bunu?\" \"Tabii."
  },
  {
    "id": 950,
    "source": "Stefan Zweig - Satranç",
    "text": "Bu oyunlar oyununun yarattığı tinsel durum üzerine ne dereceye kadar kafa yorduğunuzu bilmiyorum. Ama rastlantıdan tümüyle kopmuş bir düşünce oyunu olan satrançta, kendine karşı oynamak istemenin mantıksal açıdan bir saçmalık olduğunu anlamak için fazla düşünmeye gerek yok sanırım. Satrancın çekiciliği temelde bir tek şeyden kaynaklanır[:] stratejisinin farklı beyinlerde farklı biçimlerde gelişmesinden[.] Bu tinsel savaşta siyah, beyazın o an hangi manevrayı yapacağını bilemez ve sürekli tahminler yürütmeye ve çıkış yolları bulmaya çalışır, öte yandan beyaz da siyahın hain amaçlarını anlamaya ve baltalamaya uğraşır. Siyah ve beyazı aynı kişi oynarsa, tutarsız bir durum ortaya çıkar, aynı beyin bir yandan bir şeyi bilmek, öte yandan bilmemek durumundadır, beyaz olarak oynarken bir dakika önce siyah olarak istediği ve amaçladığı şeyleri kafasından silip atabilmelidir."
  },
  {
    "id": 951,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Birden öyle sevindi, içi öyle aydınlandı ki odanın içinde parmaklarını şıkırdatarak, keyfinden bağırmak isteyerek bir aşağı bir yukarı dolaşmaya başladı. Olga'nın kapısına gitti. Anahtar deliğinden sakin, tatlı bir sesle[:] [—] Olga, Olga, dedi; sana bir şey söyleyeceğim; hiç tahmin etmediğin bir şey[...] Teyze gelinceye kadar kalmaya karar vermişti. \"Bugün konuşuruz ve eve Olga ile nişanlanmış olarak dönerim.\" bozuldu, bütün neşesi kaçtı."
  },
  {
    "id": 952,
    "source": "Michael Ende - Momo",
    "text": "Fakat hiçbiri daha çok yaklaşmaya cesaret edemedi. geçti, sondaki küçük kapıyı açıp içeri girdi. Sayısız saatlerin bulunduğu salonda hiç oyalanmadan[,] dolaplı saatlerin ortasındaki odacığa erişti[;] küçük divanın üzerine kendini atarak[,] başını yastıkların arasına gömdü. Artık hiçbir şey görmek ve duymak istemiyordu. ON DOKUZUNCU BÖLÜM -KUŞATILANLAR KARAR VERMEK ZORUNDA Birisi alçak sesle konuşuyordu."
  },
  {
    "id": 953,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Çayırın biraz aşağısında, çiftliğin büyük bir bölümünü gören küçük bir tepe vardı. Hemen tepeye tırmandılar, sabahın duru ışığında çevreyi seyre daldılar. Evet, burası onlarındı artık[;] göz görebildiğince önlerinde uzanan her şey onlarındı[!] Bu düşünceyle kendilerinden geçerek hoplayıp zıplamaya, büyük bir coşkuyla havalara sıçramaya başladılar. Çiy düşmüş çimenlerin üzerinde yuvarlanıyor, tatlı yaz otlarını koparıp yutuyor, kara toprağı eşeleyip havaya savuruyor, toprağın güzelim kokusunu içlerine çekiyorlardı."
  },
  {
    "id": 954,
    "source": "Albert Camus - Yabancı",
    "text": "Çoğu fellahtı. Marie'nin sağı solu mağripli kadınlarla doluydu. Kendisi, iki ziyaretçi kadının arasındaydı[:] bunlardan biri karalar giyinmiş, ufak tefek, yaşlı bir kadındı[:] dudakları büzüktü. Öbürü, gür saçlı, şişmandı: bağıra bağıra konuşuyor, elleriyle birçok hareketler yapıyordu. Demir parmaklıklar arasında bir hayli aralık vardı."
  },
  {
    "id": 955,
    "source": "Stefan Zweig - Satranç",
    "text": "Bugünlük bu kadar yeter! Kendinizi fazla zorlamayın.” “Zorlamak mı! Ha[!]” diye kahkahalarla ve kötü kötü güldü[.] “Böyle tembellik yapacağıma, on yedi oyun oynayabilirdim bu arada! Bu tempoda ancak uyuyakalmamak için zorlanırım!"
  },
  {
    "id": 956,
    "source": "İvan Gonçarov - Oblomov",
    "text": "Zahar dirseğiyle Anisya'nın göğsüne vurarak: — Hâlâ duruyor musun? diye bağırdı. dayadı; elini göğsüne koyarak kalbinin atışını yokladı[:] [—] Bir bozukluk var kalbimde; ne yapmalı bilmem ki. Doktora sorsam Habeşistan'a git diyecek. Zahar'la Anisya, evlenmezden önce birbirlerinin işine karışmazlardı."
  },
  {
    "id": 957,
    "source": "Stefan Zweig - Satranç",
    "text": "Ya geçmemişse? O büro görevlisi yaptıklarımızın ne kadarını ispiyonlamıştı acaba? Mektupların kaç tanesini ele geçirmişlerdi[,] işlerini yürüttüğümüz Alman manastırlarının kimbilir kaçında her şeyden habersiz bir din adamını sıkıştırmışlardı bu arada[?] Ve sordular da sordular. Falanca manastır için hangi belgeleri satın almışım, hangi bankalarla yazışmalar yapmışım, Bay Falanca’yı tanıyor muymuşum, İsviçre’den ve Steenookerzeel’den mektuplar almış mıyım?"
  },
  {
    "id": 958,
    "source": "Michael Ende - Momo",
    "text": "Biri yanındakine, \"Şu hale bak! Ne günlere kaldık!\" diye söylendi. Öteki homurdandı[:] [\"]Bugünkü gençlikten başka ne beklenir[?]\" yemeğini yemesi biraz güç oldu; çünkü tabağının içini bile göremiyordu. Ama çok aç olduğu için kırıntı bırakmadan sildi, süpürdü. Gerçi karnı biraz doymuştu ama, Beppo'nun ne olduğunu mutlaka öğrenmek istiyordu."
  },
  {
    "id": 959,
    "source": "Albert Camus - Yabancı",
    "text": "Dayanamadım, \"Köpek size ne yaptı ki?\" diye sordum. Karşılık vermedi. O yalnızca, [\"]Pis, mundar köpek[!][\"] diyor, başka bir şey demiyordu. Köpeğinin üzerine eğilmiş, tasmasında bir şeyler düzeltiyor gibi geldi bana. Sesimi daha da yükselttim."
  },
  {
    "id": 960,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Ben, asıl bugün dul kalıyorum... Bütün olan, geçen şeylere rağmen, sen yine bir parça benimdin; ben bütün ruhumla senin... [(]Feride’nin jurnali burada bitiyordu.[)] BEŞİNCİ KISIM I KÂMRAN, seninle yol arkadaşlığı etmek işkence billahi, iki saatten beri belki yüz şey sordum. “Evet” yahut “Hayır”dan başka cevap alamadım. Kendine gel, oğlum."
  },
  {
    "id": 961,
    "source": "Michael Ende - Momo",
    "text": "Onu asıl şimdi, bulduğu şu anda kaybettiğini anladı. Yavaşça dönüp yolcu salonundan çıktı. Bir anda vücudunu ateş bastı[;] Kassiopeia da onu bırakıp gitmişti[.] ON ALTINCI BÖLÜM -BOLLUK İÇİNDE YOKLUK gidiyoruz?\" diye sordu. Kızcağız önüne bakarak düşündü."
  },
  {
    "id": 962,
    "source": "George Orwell - 1984",
    "text": "Gecenin geç saatlerinde, bıçkın proleterler sokaklarda kabadayılık taslayarak dola­ şırlarken, kentte bir kıyamettir gidiyordu. Kente her za­ mankinden daha çok tepkili bomba yağıyor, bazen uzak­ larda büyük patlamalar oluyor, bunları kimse açıklayama­ dığı için de inanılmaz söylentiler yayılıyordu. Nefret Haftası'nın simgesi olarak kullanılacak yeni şarkı [(]Nefret Şarkısı deniyordu[)] çoktan bestelenmiş, tele[-]ekranlarda durmadan çalınıyordu. Buna müzik de­ mek zordu, tamtam seslerini andıran yabanıl, kaba bir ritmi vardı. Yürüyüşe geçenlerin raprapları eşliğinde yüz­ lerce kişi tarafından haykırıldığında, insan yüreğine kor­ ku salıyordu."
  },
  {
    "id": 963,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Kâmran, biz asıl bugün birbirimizden ayrılıyoruz. Ben, asıl bugün dul kalıyorum... Bütün olan[,] geçen şeylere rağmen[,] sen yine bir parça benimdin; ben bütün ruhumla senin[...] (Feride’nin jurnali burada bitiyordu.) BEŞİNCİ KISIM I KÂMRAN, seninle yol arkadaşlığı etmek işkence billahi, iki saatten beri belki yüz şey sordum. “Evet” yahut “Hayır”dan başka cevap alamadım."
  },
  {
    "id": 964,
    "source": "Reşat Nuri Güntekin - Çalıkuşu",
    "text": "Baktım, odaya sarı basma entarili, yeşil krep başörtülü bir kadın giriyor. Daha kapıdan girerken: “iyisiniz inşallah, safa geldiniz, hanım kızım” diye hatır sordu. Düzgünlü zarif yüzü[;] kireçle delik deşik tıkanmış, harap bir duvarı hatıra getiriyor[;] rastıklı kaşları, simsiyah dişleri, bu çehreye bir ölü kafası korkunçluğu veriyordu. Biraz şaşırarak: -Safa bulduk efendim, dedim. Valide hanım nerede?"
  },
  {
    "id": 965,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Sonra, çiftliği baştan başa dolaşıp denetimden geçirdiler; tarlayı, otlağı, meyve bahçesini, gölcüğü, koruyu dilleri tutulmuşçasına, hayran hayran izlemekten alamadılar kendilerini. Sanki buraları daha önce hiç görmemişlerdi; bütün bunların artık kendilerinin olduğuna hâlâ inanamıyorlardı. Daha sonra[,] sıra olup çiftlik binalarına döndüler; çiftlik evinin kapısının önüne geldiklerinde, soluklarını tutup durdular[.] Bu ev de onlarındı artık, ama içeri girmeye korkuyorlardı. Derken, Snowball ile Napoléon'un kapıyı omuzlayıp kırmasıyla, hayvanlar birerlekol halinde içeri girdiler."
  },
  {
    "id": 966,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "O her zaman söyler, ben de ezberlemek isterdim. ‘Öldüğünü Görmek İstiyorum Bir Zindanda’ bölümüne geldiğinde ürperirdim; o kadar güzeldi. Sesini ayarladı ve Claudionor’a başladı[:] Morro da Mangueria’da samba yapmaya gittim Bir kız çağırdı beni[;] şöyle, şöyle… Hayır, hayır, gitmeyeceğim; kocası irikıyım[.] Bıçağından korkarım… Hayır, gitmeyeceğim; kocası kocaman biri… Ailesini doyurmak için limanda çalışan biri Susuyor ve açıklıyordu: “Her keseye uygun şarkı sözü. Altmış yeni şarkı!"
  },
  {
    "id": 967,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "“Güzel kadınlardan.” “Nasıl! Öyleyse Proudhon’un düşüncesini paylaşıyorsunuz demektir, değil mi?” Bazarov, kibirli bir şekilde yerinden doğruldu. “Hiç kimsenin düşüncesini paylaşmıyorum; benim kendi düşüncelerim var[.]” “Kahrolsun otoriteler[!]” diye bağırdı Sitnikov[.] Köle gibi yaltaklandığı bir adamın yanında kesin bir ifade kullanma fırsatı yakalamaktan çok memnun olmuştu. “Ama Macauley...” diye söze başlayacak oldu Kukşina."
  },
  {
    "id": 968,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Siz, tavuklar; bu yıl kaç yumurta yumurtladınız, o yumurtaların kaçından civciv çıkarabildiniz? Tümüne yakını pazarda satıldı, Jones ve adamlarına para kazandırdı. Ve sen[,] Clover[,] doğurduğun o dört tay nerede; yaşlandığında sırtını dayayacağın, keyfini süreceğin o taylar nerede[?] Dördü de bir yaşına geldiklerinde satıldı; onları bir daha hiç göremeyeceksin. İnsanlara verdiğin o dört tay ve tarlalardaki emeğinin karşılığında bir avuç yem ve soğuk bir ahırdan başka ne gördün?"
  },
  {
    "id": 969,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "(Y.N.) 56. Kastor ile Polluks ikizlerine verilen ad. [(]Y[.]N.[)] XXII Bizim arkadaşlar susarak, birbirlerine ancak pek ender olarak önemsiz laflar ederek Fedorov’un yerine vardılar. Bazarov kendisinden pek memnun değildi. Arkadiy de ondan memnun değildi."
  },
  {
    "id": 970,
    "source": "Stefan Zweig - Satranç",
    "text": "Gardiyan kapıyı aniden açacak olursa beni enselemesin diye yatağa uzandım, titreyerek kemerimin altından kitabı çıkardım. Bakar bakmaz hayal kırıklığına uğradım, hatta yoğun bir öfkeye kapıldım: Bu kadar büyük bir tehlikeyi göze alarak ele geçirdiğim, bu kadar büyük bir beklentiyle sakladığım kitap bir satranç albümüydü, yüz elli ustanın oyunundan oluşan bir toplamaydı. Kilit altında olmasaydım[,] o ilk öfkeyle kitabı açık bir pencereden fırlatırdım[,] çünkü bu saçma sapan şeyle ne yapabilirdim ki[?] Delikanlıyken lisede ötekilerin çoğu gibi benim de sıkıntıdan zaman zaman bir satranç tahtasının yanına uğradığım olmuştu. Ama bu kuramsal şey benim ne işime yarardı ki?"
  },
  {
    "id": 971,
    "source": "Michael Ende - Momo",
    "text": "Bahçeye girdi ve kapıyı kapamak üzereyken, birden bir şey hatırlamış gibi durdu. \"Sakın sen ünlü hikâyeci Girolamo'dan söz etmeyesin?\" Evinin nerede olduğunu biliyor musun?\" Adam, \"Gerçekten seni bekliyor mu?\" diye sordu. ne yersem o ödüyor.[\"] Yelekli adam kaşlarını kaldırdı, kafasını salladı; \"Şu sanatçılar[!]\" diye yüz buruşturdu. \"Ne garip kaprisleri oluyor bazen! Ama gerçekten seni beklediğine eminsen; evi caddenin üst başındaki son evdir.\" Ve kapıyı çarpıp kapadı."
  },
  {
    "id": 972,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "İlki başarılı olmazsa bir daha yapamaz insan ya da yapmak istemez.” “Bir gün… bir gün… seni bu evden uzaklara götüreceğim. Oturacağımız yer…” Arkası gelmedi. Kuşkusuz, Dindinha’nın evini düşünmüştü[;] ama orada da aynı cehennem vardı[.] Bunun üzerine düşlerimin dünyasına, şekerportakalı fidanımın dünyasına girmeye karar verdi. “Seni Tom Mix’le Buck Jones’un çiftliğine götüreceğim, orada yaşayacağız.” “Ama ben Fred Thompson’u daha çok severim.” “Öyleyse onunla gideriz.” Ve ikimiz de ne yapacağımızı bilmez durumda birbirimizin kollarında alçak sesle ağlamaya koyulduk… * * * O kadar çok özlediğim halde, iki gün boyunca Portekizli’yi görmedim."
  },
  {
    "id": 973,
    "source": "Michael Ende - Momo",
    "text": "Bu yüzden en sert yasalarımızdan biri şudur: Er geç sıra çocuklara gelir. Bu yasadan haberiniz var mıydı?\" \"Pek tabii, efendim.\" \"Buna rağmen elimizde deliller var. İçimizden biri, tekrar ediyorum, içimizden b[-]i[-]r[-]i, bir çocukla konuşmuş ve ona bizim gerçek yüzümüzü açıklamış. Sanık! Bu, içimizden b-i-r-i nin kim olduğunu biliyor musun?\" \"Bendim\" diye perişan cevap verdi, ajan BLW/553/c."
  },
  {
    "id": 974,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Hayvanlar, oybirliğiyle, bir askeri nişan oluşturulmasını kararlaştırdılar. \"Birinci Dereceden Kahraman Hayvan\" nişanı, hemen orada Snowball ile Boxer'a verildi. Bu pirinç madalyalar [(]aslında, koşum takımlarının durduğu odada buldukları eski at takılarıydı[)] pazarları ve bayram günleri takılacaktı[.] Savaşta hayatını yitirmiş olan koyun ise \"İkinci Dereceden Kahraman Hayvan\" nişanına değer görüldü. Savaşa ne ad verileceği uzun uzadıya tartışıldı."
  },
  {
    "id": 975,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"Ne olacak yavru köpeğim.\" Üstünü örten otları bir el vuruşta ayıkladı. \"Aa. Ölmüş o ayol[!]\" Lennie[:] \"Öyle küçüktü ki,\" dedi. \"Beraber oynuyorduk. Beni yalancıktan ısıracak oldu."
  },
  {
    "id": 976,
    "source": "George Orwell - 1984",
    "text": "Bazen göz­ ler, çıkık elmacıkkemil<lerinin üzerinden tuhaf bir ısrarla Winston'ın gözlerinin içine bakıyor, sonra çabucak bir başka yöne çevriliyordu. Konvoyun sonu gelmişti. Son kamyonun içinde dimdik duran yaşlı bir adam çarptı Winston[']ın gözüne[;] ak saçları yüzünü örtmüştü; sanki hep böyle duruyormuşçasına kollarını önünde kavuşttir­ muştu. Art.ık Winston'la kızın ayrılmaları gerekiyordu. Ama son anda, henüz kalabalıktan kurtulamamışken, kız Winston'ın elini tutup usulca sıktı."
  },
  {
    "id": 977,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Nasılsa ben, senin gibi bir kral değilim. İşte yaramazın tekiyim. Çok kötü bir çocuğum[,] evet[;] çok kötü bir çocuk… Başka bir şey değil.” * * * “Totoca, yeni eve uğradın mı[?]” “Hayır. Ya sen?” “Fırsat buldukça gidiyorum. Minguinho’nun iyi olup olmadığını öğrenmek için.” Güldü ve Ayışığı’nın yeni gövdesi olması gereken sopayı yontmayı sürdürdü."
  },
  {
    "id": 978,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"Saçımı bozma ama.\" Lennie: \"Aman, ne güzel!\" dedi. Daha kuwetle okşadı. \"Aman, ne güzel[!]\" \"Dikkat et, tuvaletimi bozacaksın.\" Sonra kızarak bağırdı[:] \"Yeter be, saçımı dağıtacaksın!\" Sert bir hareketle başını çevirdi. Lennie, parmaklarını sıkarak saçlara sımsıkı yapıştı. Kadın: \"Bırak beni\" diye haykırdı."
  },
  {
    "id": 979,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Benjamin de yaşlandı artık; belki de onu da emekliye ayırırlar da bana arkadaşlık eder.\" Clover, \"Hemen yardım istemeliyiz,\" dedi. \"Koşun, Squealer'a haber verin.\" Hayvanlar, olup biteni Squealer'a anlatmak üzere hep birlikte çiftlik evine koştular. Yalnızca Clover[']la Benjamin kalmıştı; Benjamin, Boxer[']ın yanına uzanmış, uzun kuyruğuyla sinekleri kovuyordu. On beş dakika kadar sonra, Squealer belirdi; üzgün ve kaygılı görünüyordu. Napoléon Yoldaş'ın, çiftliğin en sadık işçilerinden birinin başına geleni çok büyük bir üzüntüyle öğrendiğini, Boxer'ın tedavi için Willingdon'daki hastaneye gönderilmesini sağlamaya çalıştığını söyledi."
  },
  {
    "id": 980,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Hayvanları çalıştırır, karşılığında onlara açlıktan ölmeyecekleri kadar yiyecek verir, geri kalanını kendine ayırır. Bizse emeğimizle tarlayı sürer, gübremizle toprağı besleriz; oysa hiçbirimizin postundan başka bir şeyi yoktur. Siz[,] şu karşımda oturan inekler[;] bu yıl kaç bin litre süt verdiniz[?] Güçlü kuvvetli danalar yetiştirmek için gerekli olan sütleriniz nereye gitti? Her bir damlası düşmanlarımızın midesine indi."
  },
  {
    "id": 981,
    "source": "George Orwell - 1984",
    "text": "Ah, hepsine birden cüzam ya da frengi bulaştırmak ne kadar hoş olurdu! Parti'yi çürütmek, güçsüz kılmak, yerle bir etmek için neler vemezdi! Julia[']yı da aşağıya çekti[;] şimdi ikisi de dizlerinin üstünde, yüz yüzeydiler[.] \"Bak. Ne kadar çok erkekle yattıysan, seni o kadar çok seviyorum."
  },
  {
    "id": 982,
    "source": "George Orwell - 1984",
    "text": "VIII Başarmışlardı, evet, sonunda başarmışlardı işte! Loş, uzun bir odadaydılar. Tele[-]ekranın sesi iyice kı[-] sılnuştı, yalnızca bir mınltı duyuluyordu[;] koyu mavi halı o kadar yumuşaktı ki, kadife kumaş üstünde yürüyor gi­ bi oluyordunuz. O'Brien, odanın öbür ucunda, yeşil baş­ lıklı bir lambanın bulunduğu bir masanın başında, kağıt yığınları arasında oturuyordu. Uşak, Julia ile Winston'ı içeriye aldığında, başını kaldırıp bakmamıştı bile."
  },
  {
    "id": 983,
    "source": "George Orwell - 1984",
    "text": "Aynca, herhangi bir sözcük -bu da ilke olarak dilde­ ki her sözcüğe uygulanıyordusonuna -sız eki getirilerek olumsuzlanabiliyor ya da artıöneki eklenerek güçlendi­ rilebiliyor, daha da güçlü bir vurgu yapmak isteniyorsa önüne çiftartıeki getiriliyordu. Böylece, örneğin, soğuk­ suz sözcüğü \"sıcak\" anlamına gelirken, artısoğuk \"çok so­ ğuk\", çi/tartısoğuk da \"aşın soğuk\" demek oluyordu. Aynı zamanda, günümüz İngilizcesinde olduğu gibi, ön[-], [-]art, [-]yukan, -aşağı gibi önekler getirerek hemen her sözcüğün anlamını değiştirmek olanaklıydı. Butür yöntemlerle sözdağarcığının çok büyük ölçüde daraltılabileceği anla­ şılmıştı. Örneğin, iyi sözcüğü varken kötü diye bir sözcü­ ğe gerek yoktu, çünkü iyisiz sözcüğü istenen anlamı aynı ölçüde, hatta daha iyi veriyordu."
  },
  {
    "id": 984,
    "source": "İvan Turgenyev - Babalar ve Oğullar",
    "text": "70. Fransızca et voila tout (İşte hepsi bu) ifadesinin bozulmuş şekli. [(]Ç.N.[)] XXVII İhtiyar Bazarovlar, oğlullarının ani gelişine, onu hiç beklemedikleri için çok sevindiler. Arina Vlasyevna öyle bir telaşa kapıldı ve evde koşuşturmaya başladı ki, Vasiliy İvanoviç, onu “kekliğe” benzetti: Bluzunun kuyruğa benzeyen kısa eteği, ona sahiden de kuş görünümü veriyordu. Vasiliy İvanoviç ise sadece homurdanıyor ve piposunun kehribar ucunu yandan ısırıyor, bir yandan da parmaklarıyla piponun boynunu yakalamış, sanki iyice vidalanıp vidalanmadığını denermiş gibi kafasını çeviriyordu ve birden geniş ağzını açarak hiç gürültü çıkarmadan kahkahalar atıyordu."
  },
  {
    "id": 985,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Annem sana bir tabak hazırlar. O kadar çok şey, öyle bol pasta var ki…” Göze alamadım. Son günlerde bazı kimselerce pek hırpalanmıştım; birkaç kez sağdan soldan şu sözleri işitmiştim[:] ‘Sana kaç kez söyledim, bu sokak süprüntülerini eve doldurma diye[!] ’ “Hayır, çok teşekkür ederim,” diye yanıtladım Serginho’nun sorusunu. “Peki."
  },
  {
    "id": 986,
    "source": "George Orwell - 1984",
    "text": "\"İstesen, bir payntlık bira çekiverirsin şuracıkta. Bizim gençliğimizde litre mitre yoktu.\" Barmen, göz ucuyla öteki müşterilere bakarak, \"Si­ zin gençliğinizde biz daha beşikteydik,\" dedi. Bir kahkaha patladı[;] Winston[']ın gelişinin yarattığıte­ dirginlik ortadan kalkmış gibiydi[.] İhtiyarın bembeyazyü­ zü kıpkırmızı kesilmişti. Homurdanarak arkasına dönün­ ce Winston'a tosladı."
  },
  {
    "id": 987,
    "source": "John Steinbeck - Fareler ve İnsanlar",
    "text": "\"Babamın beklediği yeni işçiler siz misiniz?\" George: \"Daha şimdi geldik,\" dedi. \"Bırak, şu çam yarması söylesin.\" Lennie şaşkın bir halde kıvranıyordu. George atıldı[:] \"Ya konuşmak istemiyorsa canı[?]\" Curley bir sıçrayışta ona döndü: \"Söz söylendi mi, cevap verir adam. Hem ne halt etmeye karışıyorsun söze sen?\" George kayıtsız bir tavırla: \"Biz hep beraber dolaşırız,\" dedi. \"Ya, demek ondan!\" \"Evet ondan, ne olacak?\" Şaşkına dönen Lennie ne yapmak gerektiğini anlamak için George'a bakıyordu."
  },
  {
    "id": 988,
    "source": "Stefan Zweig - Satranç",
    "text": "Ama bu insan olmayan satranç makinesi, oyun bittikten sonra da tek sözcük etmedi, “mat” dedikten sonra, kendisinden ikinci bir oyun daha isteniyor mu diye masanın önünde kıpırdamadan bekledi. Duyarsız kabalığa karşı insanın her zaman içine düştüğü çaresizlikle ayağa kalkıp bu sona eren dolar işiyle en azından benim açımdan ilişkimizin de bittiğini ima edecektim ki, yanı başımdaki McConnor çok boğuk bir sesle, “Rövanş!” deyip beni sinir etti. Meydan okuyan ses tonu beni neredeyse ürküttü[;] gerçekten de McConnor o an kibar bir beyefendiden çok[,] yumruğunu indirmek üzere olan bir boksör izlenimi veriyordu[.] Czentovic’in bize kaba davranmasından mı, yoksa kendi hastalık derecesindeki hırsından mı kaynaklanıyordu bu, bilmiyorum, öyle ya da böyle, McConnor’ın ruh durumu tümüyle değişmişti. Yüzü alnına düşen perçemlere kadar kızarmış, burun delikleri öfkeden şişmişti, gözle görülür bir biçimde terliyordu ve kısılmış dudaklarından çıkan keskin bir kırışık, kavgacı bir havayla öne çıkmış çenesine doğru uzanıyordu."
  },
  {
    "id": 989,
    "source": "Michael Ende - Momo",
    "text": "Şu yararsız kuşu da defedin gitsin. İlle de gerekiyorsa, Bayan Daria'yı iki haftada bir görün. Çeyrek saatinizi alan güne bakıştan vazgeçin[;] hele değerli zamanınızı öyle şarkı söylemek[,] okumak ve sözde dostlarınızla konuşmak gibi şeylerle ziyan etmeyin[.] Yeri gelmişken size bir de öneride bulunayım: Dükkânınıza, doğru işleyen, şaşmaz bir saat asın ki, çırağınızı daha iyi denetleyebilesiniz.\" \"İyi de\" dedi Bay Fusi, \"Bütün bunları yaptıktan sonra, geri kalan zamanımda ne yapacağım? Nereye yatıracağım?"
  },
  {
    "id": 990,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Ne talih bu!..” Şaşırmayan tek kişi, Biriquinho oldu. “O sokağa taşınmanız, buraya yakın olduğu için bir talih. Ama sana sözünü ettiğim hikâye ne olacak[?]” “Ne zaman[?]” “Yarın saat sekizde, Bangu Gazinosu’nun kapısında[!] Fabrika sahibinin bir kamyon oyuncak ısmarladığını söylediler. Gelecek misin?” “Evet."
  },
  {
    "id": 991,
    "source": "Albert Camus - Yabancı",
    "text": "Asıl önemli olan şey, hükümlüye bir olanak sağlamaktı. Binde bir de olsa, bu olanak birçok şeyleri düzeltmeye yeterdi. Örneğin[,] kimyasal bir bileşim bulunabilir ve bunu içen hasta [(]aklım hastaya takılmıştı[)] onda dokuz olasılıkla ölebilirdi. Hasta bunu bilecekti. Bu şarttı."
  },
  {
    "id": 992,
    "source": "Michael Ende - Momo",
    "text": "İçinde sayısız girdapların, mercan kayalıklarının ve görülmemiş canavarların kaynaştığı bu sulara başka bir geminin girebildiğini kimse hatırlamıyordu. Üstelik bu denizde \"Sonsuz Tayfun\" dedikleri durup dinlenmek bilmeyen bir bela da vardı. Sularda devamlı dolaşır[;] canlı, kurnaz bir yaratık gibi, yutacak av arardı sanki[.] Ne yapacağı hiç belli olmazdı. Ve bu tayfun, dev pençesine düşürdüklerini kıymık gibi un ufak etmedikçe bırakmazdı."
  },
  {
    "id": 993,
    "source": "Albert Camus - Yabancı",
    "text": "Birden, ayağa kalktı. Büyük adımlarla masasının öbür ucuna gitti, bir dosya dolabının bir gözünü açtı, içinden gümüş bir haç çıkardı, havada tuta tuta bana doğru geldi. Tümden değişik, neredeyse titrek bir sesle bağırdı[:] [\"]Bunun ne olduğunu biliyor musunuz, bunun[?]\" \"Evet, tabii,\" diye karşılık verdim. Bunun üzerine coştu: kendisi Tanrıya inanırmış, kanısınca hiç kimse Tanrının bağışlayıcılığına kavuşmayacak kadar suçlu olamazmış, bunun için de insanın pişmanlık getirmesi, ruhu bomboş, her şeyi kabule hazır bir çocuk oluvermesi gerekmiş. Bütün vücuduyla masanın üzerine eğilmişti."
  },
  {
    "id": 994,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "\"Balbadem Diyarı, biz zavallı hayvanlarıntüm sıkıntılarımızdan kurtulup sonsuza dek huzur içinde yaşayacağımız ülke orada, şu gördüğünüz kara bulut var ya, onun hemen ardında!\" Dahası, bir gün çok yükseklerden uçarken oradan geçtiğini, alabildiğine uzanıp giden yonca tarlalarını, keten tohumu küspesi ve kesmeşekerlerle kaplı çalılıkları gözleriyle gördüğünü ileri sürüyordu. Hayvanların birçoğu ona inanıyordu. Bu dünyada açlık ve yokluk içinde yaşıyorlardı; başka bir yerlerde daha iyi bir dünyanın bulunmasından daha doğru[,] daha anlaşılır ne olabilirdi[?] Asıl anlaşılması zor olan, domuzların Moses'a karşı tutumuydu. Hem onu aşağılayarak Balbadem Diyarı'yla ilgili masallarının palavra olduğunu söylüyorlar, hem de hiç çalışmadan çiftlikte kalmasına ses çıkarmıyorlar, dahası her gün bira içmesine izin veriyorlardı."
  },
  {
    "id": 995,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Mollie ise, adındaki altı harften başka tek bir harf öğrenmemekte diretiyordu. İnce dalları yan yana getirerek adını yazıyor, dalları birkaç çiçekle süslüyor, sonra da hayran hayran çevresinde dolanıyordu. Çiftlikteki öteki hayvanların hiçbiri A harfinden öteye geçememiş; koyun, tavuk ve ördek gibi en ahmak hayvanların Yedi Emir[']i bir türlü ezberleyemedikleri görülmüştü[.] Bu sorunun çözümüne epey kafa yoran Snowball, sonunda, Yedi Emir'in aslında tek bir özdeyişe indirgenebileceğini açıkladı. Yedi Emir, bal gibi, \"dört ayak iyi, iki ayak kötü\" özdeyişine indirgenebilirdi."
  },
  {
    "id": 996,
    "source": "George Orwell - Hayvan Çiftliği",
    "text": "Bay Jones, eve döner dönmez, oturma odasındaki kanepeye uzanmış, News of the World gazetesine göz atarken uyuyakalmıştı. Hava karardığında hâlâ aç olan hayvanlar sonunda dayanamadılar. İneklerden biri boynuzuyla ambarın kapısını kırdı[;] içeri dalan hayvanlar yem kovalarından karınlarını doyurmaya koyuldular[.] Tam o sırada uyanıveren Bay Jones, dört işçisini de yanına alıp ambara koştu; hep birlikte hayvanları kırbaçlamaya başladılar. Bu da, hayvanların sabrını taşıran son damla oldu."
  },
  {
    "id": 997,
    "source": "Michael Ende - Momo",
    "text": "Hava serinledi, çocuklar titremeye başladılar. Uzaklarda bir kilise çanı sekizi vurdu. Artık hiç şüphe kalmamıştı[;] başaramamışlardı[.] Önce birkaç çocuk kalkıp gitti, onları diğerleri izledi. Kimse konuşmuyordu."
  },
  {
    "id": 998,
    "source": "George Orwell - 1984",
    "text": "Büyük gözaltı Bin Dokuz Yüz Seksen Dört'te anlatılan toplum düzeni, bir \"büyük gözaltı\" dır. Güç ve iktidarın sınırsızca uygulandığı, bel- lek, düşünce; dil ve aşkın iğdiş edilerek özgürlüklerin tümden ortadan kaldınldığı bu ubüyük gözaltı\"nı en sağlıklı yorumla­ yanlardan biri de, kanımca, Erich Fromm'dur: halinin dile getirilmesi ve bir uyandır: Dile getirilen ruh hali, in­ sanoğlunun geleceğine ilişkin handiyse bir umarsızlık, uyan ise, tarihin akışı değişmediği sürece dünyanın dört bir yanındaki insanlann en insani niteliklerini yitirecekleri, ruhsuz otomatla­ ra dönüşecekleri, üstelik bunun farkına bile varmayacaklandır: k!hini değildir: Bizi uyarmak ve uyandırmak ister: HAia umudu vardır; ama Batı toplumunun daha önceki evrelerindeki ütop­ yalann yazarlannın tersine, umarsız bir umuttur bu. Bin Dokuz Yüz Seksen Dört, bize, bu umudun ancak, bugüntüm insan­ lann karşı karşıya olduklan tehlikenin, bireyselliği, aşkı, eleştirel düşünceyi tümden yitireceği gibi, [(] [...] ) bunun ayırdına bile vara­ mayacak bir otomatlar toplumu olup çıkma tehlikesinin farkınalar güçlü birer uyandır; okuyucu, Bin Dokuz Yüz Seksen Dört'ü, yüzeysel bir biçimde Stalinci barbarlığın bir başka tanımlaması olarak yorumlamakla yetinir ve bizi de [Batı] kastettiğini gör­ mezse çok yazık olur:.:·1 Bin Dokuz Yüz Seksen Dört'le ilgili temel sorulardan bi­ rinin yanıtı, belki de Fromm'un bu sözlerinde saklıdır. Kitabı salt Stalin'in \"sosyalist uygulamaları\"na, 1 930'lar ve 1 940'la­ nn Sovyetler Birliği'nde oluşturulan baskı yönetimine karşıt düşüncelerin ürünü olarak kaleme alınış olsaydı, Bin Dokuz ruz Seksen Dört, yazılışından altmış yılı aşkın bir süre sonra, başka bir deyişle sosyalizmin en azından Sovyetler Birliği ve Doğu Avrupa ülkelerinde uygulandığı biçimiyle ortadan kalk­ tığı günümüzde, bir modem klasik niteliği kazanarak okurları derinden etkilemeyi sürdürebilir miydi?"
  },
  {
    "id": 999,
    "source": "Albert Camus - Yabancı",
    "text": "Taze toprak kokusunu ciğerlerime çekiyordum, artık uykum kaçmıştı. Bürodaki arkadaşları düşündüm. Bu saatte onlar işe gitmek için yataktan kalkıyorlardı[;] benim için bu saat her zaman en güç saatti[.] Bu şeyleri biraz daha düşündüm. Ama yapıların içinde çalan bir zil beni düşüncelerimden ayırdı."
  },
  {
    "id": 1000,
    "source": "José Mauro de Vasconcelos - Şeker Portakalı",
    "text": "Ama hoşuma da gitmiyor değildi. Portekizli’ye karşı içimde biriken öfkenin bütün acısını Bié’den çıkaracaktım. Gerçek şu ki[,] o gün esaslı bir sopa yedim[;] kavganın sonunu[,] morarıp kapanmış gözler ve sıyrık içinde kalmış kollarla getirdim. Totoca öbür çocuklarla birlikte yere oturmuştu. Kendi kitaplarıyla benimkiler dizlerinin üzerinde, yalnızca beni yüreklendiriyordu."
  }
];
