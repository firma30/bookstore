/* =====================================================
   L'ÉDITEUR — MODERN BOOKSTORE
   articles.js — logic untuk halaman artikel (articles.html)
   ===================================================== */

(function () {
  const articleGrid = document.getElementById("articleGrid");
  const articleFilter = document.getElementById("articleFilter");
  const resultsCount = document.getElementById("articleResultsCount");

  if (!articleGrid || !articleFilter || !resultsCount) return;

  let activeCategory = "All";

  function renderFilters() {
    const allCategories = ["All", ...articleCategories];

    articleFilter.innerHTML = allCategories
      .map((cat) => {
        const isActive = cat === activeCategory ? "active" : "";
        const label = cat === "All" ? "Semua" : cat;

        return `<button type="button" class="filter-pill ${isActive}" data-category="${cat}">${label}</button>`;
      })
      .join("");

    articleFilter.querySelectorAll(".filter-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        activeCategory = pill.dataset.category;
        renderFilters();
        renderArticles();
      });
    });
  }

  function articleCardTemplate(article) {
    return `
      <div class="col-md-6 col-lg-4">
        <div class="article-card-light">
          <div class="article-thumb">
            <img src="${article.image}" alt="${article.title}" loading="lazy">
          </div>
          <div class="article-body">
            <div class="article-meta-row">
              <span class="article-category-tag">${article.category}</span>
              <span class="article-date">${article.date}</span>
            </div>
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
          </div>
        </div>
      </div>
    `;
  }

  function renderArticles() {
    const filtered = articlesData.filter(
      (article) => activeCategory === "All" || article.category === activeCategory
    );

    resultsCount.innerHTML = `Menampilkan <strong>${filtered.length}</strong> dari <strong>${articlesData.length}</strong> artikel`;

    if (filtered.length === 0) {
      articleGrid.innerHTML = `
        <div class="col-12">
          <div class="empty-state">
            <i class="bi bi-journal-text"></i>
            <h3>Artikel Tidak Ditemukan</h3>
            <p>Coba pilih kategori lain.</p>
          </div>
        </div>
      `;
      return;
    }

    articleGrid.innerHTML = filtered.map(articleCardTemplate).join("");

    if (window.observeReveal) {
      window.observeReveal(articleGrid.querySelectorAll(".article-card-light"));
    }
  }

  renderFilters();
  renderArticles();
})();
