/* =====================================================
   L'ÉDITEUR — MODERN BOOKSTORE
   book-detail.js — logic untuk halaman detail buku (book-detail.html)
   ===================================================== */

(function () {
  const detailContent = document.getElementById("detailContent");
  const notFoundState = document.getElementById("notFoundState");
  const relatedGrid = document.getElementById("relatedGrid");

  if (!detailContent || !notFoundState || !relatedGrid) return;

  const params = new URLSearchParams(window.location.search);
  const bookId = params.get("id");
  const book = booksData.find((item) => item.id === bookId);

  if (!book) {
    notFoundState.classList.remove("d-none");
    return;
  }

  detailContent.classList.remove("d-none");

  const pageTitle = document.getElementById("pageTitle");
  const breadcrumbTitle = document.getElementById("breadcrumbTitle");
  const detailCover = document.getElementById("detailCover");
  const detailCategory = document.getElementById("detailCategory");
  const detailTitle = document.getElementById("detailTitle");
  const detailAuthor = document.getElementById("detailAuthor");
  const detailSynopsis = document.getElementById("detailSynopsis");
  const tagEl = document.getElementById("detailTag");
  const highlightsEl = document.getElementById("detailHighlights");
  const waLink = document.getElementById("detailWhatsapp");

  pageTitle.textContent = `${book.title} | L'Éditeur`;
  breadcrumbTitle.textContent = book.title;
  detailCover.src = getBookCover(book);
  detailCover.alt = book.title;
  detailCategory.textContent = book.category;
  detailTitle.textContent = book.title;
  detailAuthor.textContent = book.author;
  detailSynopsis.textContent = book.synopsis;

  const detailPrice = document.getElementById("detailPrice");
  const detailRating = document.getElementById("detailRating");
  const detailPages = document.getElementById("detailPages");
  const detailYear = document.getElementById("detailYear");
  if (detailPrice) detailPrice.textContent = formatRupiah(book.price);
  if (detailRating) detailRating.textContent = `${book.rating} / 5`;
  if (detailPages) detailPages.textContent = `${book.pages} halaman`;
  if (detailYear) detailYear.textContent = book.publishedYear;

  if (book.tag) {
    tagEl.textContent = book.tag;
    tagEl.classList.toggle("new", book.tag === "New");
  } else {
    tagEl.style.display = "none";
  }

  highlightsEl.innerHTML = book.highlights
    .map((point) => `<li><i class="bi bi-check-circle-fill"></i><span>${point}</span></li>`)
    .join("");

  waLink.setAttribute(
    "onclick",
    `orderBook('${book.title.replace(/'/g, "\\'")}'); return false;`
  );

  const related = booksData
    .filter((item) => item.category === book.category && item.id !== book.id)
    .slice(0, 3);

  const fallback = related.length > 0
    ? related
    : booksData.filter((item) => item.id !== book.id).slice(0, 3);

  relatedGrid.innerHTML = fallback
    .map((item) => {
      const tagMarkup = item.tag
        ? `<span class="book-tag ${item.tag === "New" ? "new" : ""}">${item.tag}</span>`
        : "";

      return `
        <div class="col-md-6 col-lg-4">
          <div class="book-card">
            <a href="book-detail.html?id=${item.id}" class="book-thumb">
              ${tagMarkup}
              <img src="${getBookCover(item)}" alt="${item.title}" loading="lazy">
            </a>
            <div class="book-content">
              <span class="book-category-label">${item.category}</span>
              <a href="book-detail.html?id=${item.id}" class="book-title-link">
                <h3>${item.title}</h3>
              </a>
              <p>${item.author}</p>
              <div class="book-actions">
                <a href="book-detail.html?id=${item.id}" class="detail-link">Lihat Detail</a>
                <a href="#" onclick="orderBook('${item.title.replace(/'/g, "\\'")}'); return false;">Pesan via WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  if (window.observeReveal) {
    window.observeReveal(relatedGrid.querySelectorAll(".book-card"));
  }
})();
