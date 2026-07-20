function riskBadgeClass(risk) {
  if (risk <= 2) return "badge-risk-low";
  if (risk <= 3) return "badge-risk-mid";
  return "badge-risk-high";
}

function riskLabel(risk) {
  const labels = ["", "Çok Düşük", "Düşük", "Orta", "Yüksek", "Çok Yüksek"];
  return labels[risk] || risk;
}

function riskBarHtml(risk) {
  let html = '<div class="risk-bar">';
  for (let i = 1; i <= 5; i++) {
    let cls = "";
    if (i <= risk) {
      if (risk <= 2) cls = "active-low";
      else if (risk <= 3) cls = "active-mid";
      else cls = "active-high";
    }
    html += `<div class="risk-dot ${cls}"></div>`;
  }
  html += "</div>";
  return html;
}

function cardHtml(item) {
  const methodCount = item.methods ? item.methods.length : 0;
  return `
    <a href="enstruman.html?id=${item.id}" class="card">
      <div class="card-icon">${item.icon}</div>
      <h3>${item.name}</h3>
      <p>${item.shortDesc}</p>
      <div class="card-meta">
        <span class="badge badge-category">${item.category}</span>
        <span class="badge ${riskBadgeClass(item.risk)}">Risk: ${riskLabel(item.risk)}</span>
        ${methodCount ? `<span class="badge badge-methods">${methodCount} alım yolu</span>` : ""}
      </div>
      ${riskBarHtml(item.risk)}
    </a>
  `;
}

function methodsComparisonHtml(methods) {
  if (!methods || !methods.length) return "";
  return `
    <div class="table-wrap methods-table-wrap">
      <table class="methods-table">
        <thead>
          <tr>
            <th>Yöntem</th>
            <th>Min. Tutar</th>
            <th>Likidite</th>
            <th>Maliyet</th>
            <th>Vergi</th>
            <th>Saklama</th>
            <th>Kolaylık</th>
          </tr>
        </thead>
        <tbody>
          ${methods.map(m => `
            <tr>
              <td><strong>${m.name}</strong></td>
              <td>${m.minAmount}</td>
              <td>${m.liquidity}</td>
              <td>${m.cost}</td>
              <td>${m.tax}</td>
              <td>${m.storage}</td>
              <td>${m.ease}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function methodCardHtml(method, index) {
  return `
    <div class="method-card" id="yontem-${index}">
      <h3>${method.name}</h3>
      <p class="method-desc">${method.description}</p>
      <div class="method-details">
        <div class="method-detail"><span>Min. Tutar</span><strong>${method.minAmount}</strong></div>
        <div class="method-detail"><span>Likidite</span><strong>${method.liquidity}</strong></div>
        <div class="method-detail"><span>Maliyet</span><strong>${method.cost}</strong></div>
        <div class="method-detail"><span>Vergi</span><strong>${method.tax}</strong></div>
        <div class="method-detail"><span>Saklama</span><strong>${method.storage}</strong></div>
        <div class="method-detail"><span>Kolaylık</span><strong>${method.ease}</strong></div>
      </div>
      <div class="pros-cons method-pros-cons">
        <div>
          <strong style="color: var(--success);">Artıları</strong>
          <ul class="pros">${method.pros.map(p => `<li>${p}</li>`).join("")}</ul>
        </div>
        <div>
          <strong style="color: var(--danger);">Eksileri</strong>
          <ul class="cons">${method.cons.map(c => `<li>${c}</li>`).join("")}</ul>
        </div>
      </div>
    </div>
  `;
}

function renderAllCards(containerId, filter) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const items = filter
    ? INSTRUMENTS.filter(i => i.category === filter)
    : INSTRUMENTS;
  el.innerHTML = items.map(cardHtml).join("");
}

function renderCategoryFilters(filterBarId, cardsContainerId) {
  const el = document.getElementById(filterBarId);
  if (!el) return;
  const categories = [...new Set(INSTRUMENTS.map(i => i.category))];
  el.innerHTML = `
    <button class="filter-btn active" data-category="">Tümü</button>
    ${categories.map(c => `<button class="filter-btn" data-category="${c}">${c}</button>`).join("")}
  `;
  el.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      el.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderAllCards(cardsContainerId, btn.dataset.category || null);
    });
  });
}

function renderDetailPage(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const item = INSTRUMENTS.find(i => i.id === id);

  if (!item) {
    el.innerHTML = `
      <section style="padding: 3rem 0; text-align: center;">
        <h1>Enstrüman Bulunamadı</h1>
        <p style="color: var(--text-muted); margin: 1rem 0;">Aradığınız enstrüman mevcut değil.</p>
        <a href="index.html" class="btn btn-primary">Tüm Enstrümanlar</a>
      </section>
    `;
    document.title = "Bulunamadı — Yatırım Evreni";
    return;
  }

  document.title = `${item.name} — Yatırım Evreni`;

  const methods = item.methods || [];
  const methodsSection = methods.length ? `
    <h2>Nasıl Alınır?</h2>
    <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
      ${item.name} yatırımı için ${methods.length} farklı yol var. Aşağıda her birini detaylı inceleyebilir,
      ardından karşılaştırma tablosundan yan yana değerlendirebilirsiniz.
    </p>

    <div class="methods-nav">
      ${methods.map((m, i) => `<a href="#yontem-${i}" class="method-link">${m.name}</a>`).join("")}
    </div>

    <div class="methods-list">
      ${methods.map((m, i) => methodCardHtml(m, i)).join("")}
    </div>

    <h2 style="margin-top: 2.5rem;">Yöntem Karşılaştırması</h2>
    <p style="color: var(--text-muted); margin-bottom: 1rem;">Hangi yolun size uygun olduğuna hızlıca bakın.</p>
    ${methodsComparisonHtml(methods)}
  ` : "";

  el.innerHTML = `
    <div class="breadcrumb">
      <a href="index.html">Enstrümanlar</a> / ${item.name}
    </div>

    <section class="detail-hero">
      <div class="icon">${item.icon}</div>
      <h1>${item.name}</h1>
      <p style="color: var(--text-muted);">${item.shortDesc}</p>
      <div class="card-meta" style="margin-top: 1rem;">
        <span class="badge badge-category">${item.category}</span>
        <span class="badge ${riskBadgeClass(item.risk)}">Risk: ${riskLabel(item.risk)}</span>
        ${methods.length ? `<span class="badge badge-methods">${methods.length} alım yolu</span>` : ""}
      </div>
    </section>

    <div class="detail-grid">
      <div class="detail-content">
        <h2>Nedir?</h2>
        <p>${item.description}</p>

        ${methodsSection}

        <h2>Avantajlar & Dezavantajlar</h2>
        <div class="pros-cons">
          <div>
            <strong style="color: var(--success);">Avantajlar</strong>
            <ul class="pros">${item.pros.map(p => `<li>${p}</li>`).join("")}</ul>
          </div>
          <div>
            <strong style="color: var(--danger);">Dezavantajlar</strong>
            <ul class="cons">${item.cons.map(c => `<li>${c}</li>`).join("")}</ul>
          </div>
        </div>

        <h2>Kimler İçin Uygun?</h2>
        <p>${item.suitableFor}</p>

        ${item.notSuitableFor ? `
        <h2>Kimler İçin Uygun Değil?</h2>
        <p>${item.notSuitableFor}</p>
        ` : ""}

        ${item.commonMistakes && item.commonMistakes.length ? `
        <h2>Sık Yapılan Hatalar</h2>
        <ul class="cons" style="list-style: none; padding: 0;">
          ${item.commonMistakes.map(m => `<li style="padding: 0.3rem 0; color: var(--text-muted); font-size: 0.9rem;">${m}</li>`).join("")}
        </ul>
        ` : ""}

        <div class="disclaimer">
          <strong>⚠️ Yasal Uyarı:</strong> Bu bilgi yatırım tavsiyesi değildir. Yatırım kararlarınızı vermeden önce profesyonel danışmanlık alın.
        </div>
      </div>

      <aside>
        <div class="sidebar-card">
          <h3>Özet Bilgiler</h3>
          <div class="info-row"><span class="label">Risk</span><span class="value">${riskLabel(item.risk)} / 5</span></div>
          <div class="info-row"><span class="label">Likidite</span><span class="value">${item.liquidity}</span></div>
          <div class="info-row"><span class="label">Getiri Türü</span><span class="value">${item.returnType}</span></div>
          <div class="info-row"><span class="label">Min. Tutar</span><span class="value">${item.minAmount}</span></div>
          <div class="info-row"><span class="label">Vergi</span><span class="value">${item.tax}</span></div>
          <div class="info-row"><span class="label">Düzenleyici</span><span class="value">${item.regulator}</span></div>
          ${riskBarHtml(item.risk)}
        </div>
      </aside>
    </div>
  `;
}

function renderComparisonTable(tbodyId) {
  const el = document.getElementById(tbodyId);
  if (!el) return;
  el.innerHTML = INSTRUMENTS.map(item => `
    <tr>
      <td><a href="enstruman.html?id=${item.id}">${item.icon} ${item.name}</a></td>
      <td>${item.category}</td>
      <td><span class="badge ${riskBadgeClass(item.risk)}">${item.risk}/5</span></td>
      <td>${item.liquidity}</td>
      <td>${item.returnType}</td>
      <td>${item.minAmount}</td>
      <td>${item.tax}</td>
    </tr>
  `).join("");
}

function renderTaxTable(tbodyId) {
  const el = document.getElementById(tbodyId);
  if (!el) return;
  el.innerHTML = TAX_INFO.map(row => `
    <tr>
      <td><strong>${row.instrument}</strong></td>
      <td>${row.withholding}</td>
      <td>${row.declaration}</td>
      <td style="color: var(--text-muted); font-size: 0.85rem;">${row.note}</td>
    </tr>
  `).join("");
}

function renderGlossary(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = GLOSSARY.map(g => `
    <div class="glossary-item">
      <dt>${g.term}</dt>
      <dd>${g.definition}</dd>
    </div>
  `).join("");
}

function renderPortfolioPage(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  document.title = "Portföy Örnekleri — Yatırım Evreni";

  el.innerHTML = PORTFOLIO_EXAMPLES.map(p => `
    <section style="padding: 2rem 0;">
      <div class="stat-card" style="padding: 1.5rem; text-align: left;">
        <h3 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <span class="badge ${p.risk <= 2 ? "badge-risk-low" : p.risk <= 3 ? "badge-risk-mid" : "badge-risk-high"}" style="font-size: 0.9rem; padding: 0.3rem 1rem;">Risk ${p.risk}/5</span>
          ${p.profile}
        </h3>
        <p style="color: var(--text-muted); margin-bottom: 1rem;">${p.desc}</p>

        <div style="margin-bottom: 1rem;">
          <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-muted); margin-bottom: 0.75rem;">Varlık Dağılımı</h4>
          <div style="display: flex; height: 32px; border-radius: 8px; overflow: hidden; margin-bottom: 0.75rem;">
            ${p.allocation.map(a => {
              const colors = ["#10b981","#34d399","#6ee7b7","#f59e0b","#fbbf24","#fcd34d","#ef4444","#f87171","#818cf8","#a78bfa","#e879f9","#fb923c"];
              return `<div style="width: ${a.pct}%; background: ${colors[p.allocation.indexOf(a) % colors.length]}; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; font-weight: 700; color: #0b1120;">${a.pct}%</div>`;
            }).join("")}
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 0.4rem;">
            ${p.allocation.map(a => {
              const colors = ["#10b981","#34d399","#6ee7b7","#f59e0b","#fbbf24","#fcd34d","#ef4444","#f87171","#818cf8","#a78bfa","#e879f9","#fb923c"];
              return `<div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; color: var(--text-muted);"><span style="width: 12px; height: 12px; border-radius: 3px; background: ${colors[p.allocation.indexOf(a) % colors.length]}; flex-shrink: 0;"></span>${a.asset} <strong style="color: var(--text);">%${a.pct}</strong></div>`;
            }).join("")}
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; padding-top: 1rem; border-top: 1px solid var(--border);">
          <div>
            <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-muted); display: block;">Beklenen Getiri</span>
            <strong style="font-size: 0.9rem;">${p.expectedReturn}</strong>
          </div>
          <div>
            <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-muted); display: block;">Uygun Yatırımcı</span>
            <span style="font-size: 0.85rem;">${p.suitableFor}</span>
          </div>
        </div>
      </div>
    </section>
  `).join("");
}

function renderStrategiesPage(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  document.title = "Yatırım Stratejileri — Yatırım Evreni";

  el.innerHTML = STRATEGIES.map(s => `
    <div class="method-card" style="margin-bottom: 1.25rem;">
      <div style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.75rem;">
        <span style="font-size: 2rem;">${s.icon}</span>
        <div>
          <h3 style="margin-bottom: 0.25rem;">${s.name}</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem;">${s.shortDesc}</p>
        </div>
      </div>
      <p style="color: var(--text-muted); margin-bottom: 1rem; font-size: 0.95rem;">${s.description}</p>

      <div class="pros-cons" style="margin-bottom: 1rem;">
        <div>
          <strong style="color: var(--success);">Artıları</strong>
          <ul class="pros">${s.pros.map(p => `<li>${p}</li>`).join("")}</ul>
        </div>
        <div>
          <strong style="color: var(--danger);">Eksileri</strong>
          <ul class="cons">${s.cons.map(c => `<li>${c}</li>`).join("")}</ul>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; padding-top: 0.75rem; border-top: 1px solid var(--border);">
        <div>
          <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-muted); display: block;">Kimler İçin</span>
          <span style="font-size: 0.85rem;">${s.suitableFor}</span>
        </div>
        <div>
          <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-muted); display: block;">Örnek</span>
          <span style="font-size: 0.85rem; font-style: italic; color: var(--text-muted);">${s.example}</span>
        </div>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }
});
