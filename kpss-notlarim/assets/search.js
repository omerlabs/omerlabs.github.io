(function () {
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
