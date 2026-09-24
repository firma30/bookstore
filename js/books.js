

(function () {
  const bookGrid = document.getElementById("bookGrid");
  const categoryFilter = document.getElementById("categoryFilter");
  const bookSearch = document.getElementById("bookSearch");
  const resultsCount = document.getElementById("resultsCount");

  if (!bookGrid || !categoryFilter || !bookSearch || !resultsCount) return;

  let activeCategory = "All";

  const params = new URLSearchParams(window.location.search);
  const presetCategory = params.get("category");

  if (presetCategory && bookCategories.includes(presetCategory)) {
    activeCategory = presetCategory;
  }

  function renderFilters() {
    const allCategories = ["All", ...bookCategories];

    categoryFilter.innerHTML = allCategories
      .map((cat) => {
        const isActive = cat === activeCategory ? "active" : "";
        const label = cat === "All" ? "Semua" : cat;

        return `<button type="button" class="filter-pill ${isActive}" data-category="${cat}">${label}</button>`;
      })
      .join("");

    categoryFilter.querySelectorAll(".filter-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        activeCategory = pill.dataset.category;
        renderFilters();
        renderBooks();
      });
    });
  }

  function bookCardTemplate(book) {
    const tagMarkup = book.tag
      ? `<span class="book-tag ${book.tag === "New" ? "new" : ""}">${book.tag}</span>`
      : "";

    return `
      <div class="col-md-6 col-lg-4">
        <div class="book-card">
          <a href="book-detail.html?id=${book.id}" class="book-thumb">
            ${tagMarkup}
            <img src="${getBookCover(book)}" alt="${book.title}" loading="lazy">
          </a>
          <div class="book-content">
            <span class="book-category-label">${book.category}</span>
            <a href="book-detail.html?id=${book.id}" class="book-title-link">
              <h3>${book.title}</h3>
            </a>
            <p>${book.author}</p>
            <div class="book-meta"><span>★ ${book.rating}</span><span>${formatRupiah(book.price)}</span></div>
            <div class="book-actions">
              <a href="book-detail.html?id=${book.id}" class="detail-link">Lihat Detail</a>
              <a href="#" onclick="orderBook('${book.title.replace(/'/g, "\\'")}'); return false;">Pesan via WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderBooks() {
    const keyword = bookSearch.value.trim().toLowerCase();

    const filtered = booksData.filter((book) => {
      const matchCategory = activeCategory === "All" || book.category === activeCategory;
      const matchKeyword =
        keyword === "" ||
        book.title.toLowerCase().includes(keyword) ||
        book.author.toLowerCase().includes(keyword);

      return matchCategory && matchKeyword;
    });

    resultsCount.innerHTML = `Menampilkan <strong>${filtered.length}</strong> dari <strong>${booksData.length}</strong> buku`;

    if (filtered.length === 0) {
      bookGrid.innerHTML = `
        <div class="col-12">
          <div class="empty-state">
            <i class="bi bi-search"></i>
            <h3>Buku Tidak Ditemukan</h3>
            <p>Coba kata kunci lain atau pilih kategori berbeda.</p>
          </div>
        </div>
      `;
      return;
    }

    bookGrid.innerHTML = filtered.map(bookCardTemplate).join("");

    if (window.observeReveal) {
      window.observeReveal(bookGrid.querySelectorAll(".book-card"));
    }
  }

  bookSearch.addEventListener("input", renderBooks);
  renderFilters();
  renderBooks();
})();
