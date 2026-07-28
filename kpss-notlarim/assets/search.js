(function () {
  // PWA Entegrasyonu
  (function initPWA() {
    var indexUrl = window.SEARCH_INDEX_URL || "assets/search-index.json";
    var root = indexUrl.replace("assets/search-index.json", "");

    // 1. Web Manifest'ini Dinamik Olarak Ekle
    if (!document.querySelector('link[rel="manifest"]')) {
      var link = document.createElement('link');
      link.rel = 'manifest';
      link.href = root + 'manifest.json';
      document.head.appendChild(link);
    }

    // 2. iOS Mobil Cihaz Meta Etiketlerini Ekle
    var metaTags = [
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: 'Fiş Kutusu' }
    ];
    metaTags.forEach(function (tagInfo) {
      if (!document.querySelector('meta[name="' + tagInfo.name + '"]')) {
        var meta = document.createElement('meta');
        meta.name = tagInfo.name;
        meta.content = tagInfo.content;
        document.head.appendChild(meta);
      }
    });

    // 3. Yükleme Banner'ı CSS Stillerini Dinamik Olarak Ekle
    var styleId = 'pwa-prompt-style';
    if (!document.getElementById(styleId)) {
      var style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = 
        '.pwa-install-banner {' +
        '  position: fixed;' +
        '  bottom: 24px;' +
        '  right: 24px;' +
        '  left: auto;' +
        '  width: 360px;' +
        '  background: linear-gradient(180deg, #2b211a 0%, #1d1612 100%);' +
        '  border: 1px solid #b98f45;' +
        '  border-radius: 6px;' +
        '  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);' +
        '  padding: 16px;' +
        '  color: #e8dcc8;' +
        '  z-index: 99999;' +
        '  font-family: "Source Serif 4", Georgia, serif;' +
        '  display: flex;' +
        '  flex-direction: column;' +
        '  gap: 12px;' +
        '  box-sizing: border-box;' +
        '  animation: pwa-slide-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;' +
        '}' +
        '@keyframes pwa-slide-in {' +
        '  from { transform: translateY(120%) scale(0.9); opacity: 0; }' +
        '  to { transform: translateY(0) scale(1); opacity: 1; }' +
        '}' +
        '.pwa-install-banner.hidden {' +
        '  animation: pwa-slide-out 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;' +
        '  pointer-events: none;' +
        '}' +
        '@keyframes pwa-slide-out {' +
        '  from { transform: translateY(0) scale(1); opacity: 1; }' +
        '  to { transform: translateY(120%) scale(0.9); opacity: 0; }' +
        '}' +
        '.pwa-header {' +
        '  display: flex;' +
        '  align-items: center;' +
        '  gap: 12px;' +
        '}' +
        '.pwa-icon-wrap {' +
        '  width: 44px;' +
        '  height: 44px;' +
        '  border-radius: 8px;' +
        '  background: radial-gradient(circle at 35% 30%, #d8ae66, #b98f45 60%, #7d5f2c 100%);' +
        '  display: flex;' +
        '  align-items: center;' +
        '  justify-content: center;' +
        '  color: #2b211a;' +
        '  font-family: "Fraunces", Georgia, serif;' +
        '  font-weight: 900;' +
        '  font-size: 0.85rem;' +
        '  letter-spacing: 0.5px;' +
        '  box-shadow: inset 0 -2px 4px rgba(0,0,0,0.3), 0 2px 5px rgba(0,0,0,0.4);' +
        '  flex-shrink: 0;' +
        '}' +
        '.pwa-title-wrap {' +
        '  flex: 1;' +
        '}' +
        '.pwa-banner-title {' +
        '  font-family: "Fraunces", Georgia, serif;' +
        '  font-weight: 700;' +
        '  font-size: 1.05rem;' +
        '  margin: 0 0 2px 0;' +
        '  color: #f4ecdd;' +
        '}' +
        '.pwa-banner-sub {' +
        '  font-size: 0.78rem;' +
        '  color: #b7a888;' +
        '  line-height: 1.3;' +
        '  margin: 0;' +
        '}' +
        '.pwa-actions {' +
        '  display: flex;' +
        '  gap: 8px;' +
        '  justify-content: flex-end;' +
        '  margin-top: 4px;' +
        '}' +
        '.pwa-btn {' +
        '  padding: 8px 16px;' +
        '  font-family: "IBM Plex Mono", monospace;' +
        '  font-size: 0.72rem;' +
        '  text-transform: uppercase;' +
        '  letter-spacing: 0.05em;' +
        '  border-radius: 3px;' +
        '  cursor: pointer;' +
        '  transition: all 0.15s ease;' +
        '  font-weight: 500;' +
        '}' +
        '.pwa-btn-install {' +
        '  background: #b98f45;' +
        '  color: #1d1612;' +
        '  border: 1px solid #d8ae66;' +
        '}' +
        '.pwa-btn-install:hover {' +
        '  background: #d8ae66;' +
        '  box-shadow: 0 0 8px rgba(216, 174, 102, 0.4);' +
        '}' +
        '.pwa-btn-close {' +
        '  background: transparent;' +
        '  color: #b7a888;' +
        '  border: 1px solid transparent;' +
        '}' +
        '.pwa-btn-close:hover {' +
        '  color: #f4ecdd;' +
        '  border-color: rgba(183, 168, 136, 0.2);' +
        '}' +
        '@media (max-width: 480px) {' +
        '  .pwa-install-banner {' +
        '    bottom: 0;' +
        '    left: 0;' +
        '    right: 0;' +
        '    width: 100%;' +
        '    border-radius: 12px 12px 0 0;' +
        '    border-bottom: none;' +
        '    border-left: none;' +
        '    border-right: none;' +
        '    padding: 20px 16px;' +
        '  }' +
        '}';
      document.head.appendChild(style);
    }

    // 4. Service Worker Kaydı
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register(root + 'sw.js')
          .then(function (reg) {
            console.log('SW başarıyla kaydedildi, kapsam:', reg.scope);
          })
          .catch(function (err) {
            console.error('SW kaydı başarısız:', err);
          });
      });
    }

    // 5. Yükleme İstemi (beforeinstallprompt) İşlemleri
    var deferredPrompt = null;
    var banner = null;

    var isPromptDismissed = function () {
      try {
        var dismissedTime = localStorage.getItem('pwa_prompt_dismissed');
        if (!dismissedTime) return false;
        var diff = Date.now() - parseInt(dismissedTime, 10);
        return diff < (3 * 24 * 60 * 60 * 1000); // 3 gün boyunca tekrar sorma
      } catch (e) {
        return false;
      }
    };

    var setPromptDismissed = function () {
      try {
        localStorage.setItem('pwa_prompt_dismissed', Date.now().toString());
      } catch (e) {}
    };

    window.addEventListener('beforeinstallprompt', function (e) {
      // Tarayıcının varsayılan yükleme çubuğunu engelle
      e.preventDefault();
      deferredPrompt = e;

      // Son zamanlarda kapatıldıysa veya standalone moddaysa gösterme
      if (isPromptDismissed()) return;
      if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
        return;
      }

      // Özel yükleme banner'ını oluştur ve göster
      showInstallBanner();
    });

    function showInstallBanner() {
      if (banner) return;

      banner = document.createElement('div');
      banner.className = 'pwa-install-banner';
      banner.innerHTML =
        '<div class="pwa-header">' +
        '  <div class="pwa-icon-wrap">KPSS</div>' +
        '  <div class="pwa-title-wrap">' +
        '    <h3 class="pwa-banner-title">Fiş Kutusu\'nu Yükleyin</h3>' +
        '    <p class="pwa-banner-sub">Notları internetsiz okuyun, ders çalışmaya kaldığınız yerden devam edin.</p>' +
        '  </div>' +
        '</div>' +
        '<div class="pwa-actions">' +
        '  <button class="pwa-btn pwa-btn-close" id="pwa-btn-later">Daha Sonra</button>' +
        '  <button class="pwa-btn pwa-btn-install" id="pwa-btn-install">YÜKLE</button>' +
        '</div>';

      document.body.appendChild(banner);

      document.getElementById('pwa-btn-later').addEventListener('click', function () {
        dismissBanner();
        setPromptDismissed();
      });

      document.getElementById('pwa-btn-install').addEventListener('click', function () {
        if (!deferredPrompt) return;
        
        dismissBanner();
        deferredPrompt.prompt();
        
        deferredPrompt.userChoice.then(function (choiceResult) {
          if (choiceResult.outcome === 'accepted') {
            console.log('PWA yükleme isteği kullanıcı tarafından kabul edildi.');
          } else {
            console.log('PWA yükleme isteği kullanıcı tarafından reddedildi.');
            setPromptDismissed();
          }
          deferredPrompt = null;
        });
      });
    }

    function dismissBanner() {
      if (!banner) return;
      banner.classList.add('hidden');
      setTimeout(function () {
        if (banner && banner.parentNode) {
          banner.parentNode.removeChild(banner);
        }
        banner = null;
      }, 400);
    }

    window.addEventListener('appinstalled', function () {
      console.log('PWA uygulaması başarıyla yüklendi.');
      dismissBanner();
      deferredPrompt = null;
    });
  })();

  var input = document.getElementById("search-input");
  var results = document.getElementById("search-results");
  if (!input || !results) return;


  var data = null;
  var loading = false;

  function loadData(cb) {
    if (data) return cb(data);
    if (loading) return;
    loading = true;
    fetch(window.SEARCH_INDEX_URL)
      .then(function (r) { return r.json(); })
      .then(function (json) {
        data = json;
        loading = false;
        cb(data);
      })
      .catch(function () {
        loading = false;
      });
  }

  function normalize(s) {
    return s
      .toLowerCase()
      .replace(/ç/g, "c").replace(/ğ/g, "g").replace(/ı/g, "i")
      .replace(/ö/g, "o").replace(/ş/g, "s").replace(/ü/g, "u");
  }

  function render(items, query) {
    if (!items.length) {
      results.innerHTML = '<div class="sr-empty">"' + query + '" için sonuç bulunamadı.</div>';
      results.classList.add("active");
      return;
    }
    var root = window.SEARCH_INDEX_URL.replace("assets/search-index.json", "");
    var html = items
      .slice(0, 12)
      .map(function (item) {
        return (
          '<a href="' + root + item.url + '">' +
          '<span class="sr-title">' + escapeHtml(item.title) + "</span>" +
          '<span class="sr-snippet">' + escapeHtml(item.snippet) + "</span>" +
          "</a>"
        );
      })
      .join("");
    results.innerHTML = html;
    results.classList.add("active");
  }

  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  var debounceTimer = null;
  input.addEventListener("input", function () {
    var query = input.value.trim();
    clearTimeout(debounceTimer);
    if (!query) {
      results.classList.remove("active");
      return;
    }
    debounceTimer = setTimeout(function () {
      loadData(function (items) {
        var nq = normalize(query);
        var filtered = items.filter(function (item) {
          return (
            normalize(item.title).indexOf(nq) !== -1 ||
            normalize(item.snippet).indexOf(nq) !== -1
          );
        });
        // Title matches first
        filtered.sort(function (a, b) {
          var aTitle = normalize(a.title).indexOf(nq) !== -1 ? 0 : 1;
          var bTitle = normalize(b.title).indexOf(nq) !== -1 ? 0 : 1;
          return aTitle - bTitle;
        });
        render(filtered, query);
      });
    }, 120);
  });

  document.addEventListener("click", function (e) {
    if (!results.contains(e.target) && e.target !== input) {
      results.classList.remove("active");
    }
  });

  input.addEventListener("focus", function () {
    if (input.value.trim()) results.classList.add("active");
  });
})();
