/* =========================================================
   OPEN LIBRARY API
   ========================================================= */

const OPEN_LIBRARY_URL = "https://openlibrary.org/search.json";

/* =========================================================
   SEARCH BOOKS
   ========================================================= */

async function searchBooksFromAPI(keyword, limit = 10) {
  if (!keyword || !keyword.trim()) {
    return [];
  }

  const url = `${OPEN_LIBRARY_URL}?q=${encodeURIComponent(keyword.trim())}&limit=${limit}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Open Library Error: ${response.status}`);
  }

  const data = await response.json();

  return data.docs || [];
}

/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const searchInput = document.getElementById("apiSearchInput");

const searchButton = document.getElementById("apiSearchButton");

const bookGrid = document.getElementById("apiBookGrid");

const statusElement = document.getElementById("apiStatus");

/* =========================================================
   STOP JIKA HALAMAN INI TIDAK PUNYA SECTION OPEN LIBRARY
   (mencegah error yang bisa menghentikan script lain
   kalau api.js ikut ter-load di halaman tanpa elemen ini)
   ========================================================= */

if (searchInput && searchButton && bookGrid && statusElement) {
  /* =========================================================
   ESCAPE TEKS
   (supaya karakter seperti < atau & dari data API
   tidak merusak tampilan HTML)
   ========================================================= */

  function escapeHtml(value) {
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  /* =========================================================
   SHOW STATUS
   ========================================================= */

  function showStatus(message) {
    statusElement.textContent = message;
  }

  /* =========================================================
   CLEAR STATUS
   ========================================================= */

  function clearStatus() {
    statusElement.textContent = "";
  }

  /* =========================================================
   CREATE BOOK CARD
   ========================================================= */

  function createBookCard(book) {
    const title = escapeHtml(book.title || "Judul tidak tersedia");

    const hasAuthor = Array.isArray(book.author_name) && book.author_name.length > 0;
    const author = escapeHtml(hasAuthor ? book.author_name[0] : "Penulis tidak diketahui");

    const year = escapeHtml(book.first_publish_year || "-");

    let coverUrl;

    if (book.cover_i) {
      coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
    } else {
      coverUrl = "";
    }

    const card = document.createElement("div");

    card.className = "api-book-card";

    card.innerHTML = `

        <div class="api-book-cover">

            ${
              coverUrl
                ? `
                        <img
                            src="${coverUrl}"
                            alt="${title}"
                            loading="lazy"
                        >
                    `
                : `
                        <div class="api-no-cover">

                            <i class="bi bi-book"></i>

                            <span>
                                No Cover
                            </span>

                        </div>
                    `
            }

        </div>


        <div class="api-book-info">

            <h3>
                ${title}
            </h3>


            <p class="api-book-author">
                ${author}
            </p>


            <p class="api-book-year">
                Tahun terbit:
                ${year}
            </p>

        </div>

    `;

    return card;
  }

  /* =========================================================
   DISPLAY BOOKS
   ========================================================= */

  function displayBooks(books) {
    bookGrid.innerHTML = "";

    if (!books.length) {
      showStatus("Buku tidak ditemukan.");

      return;
    }

    clearStatus();

    books.forEach((book) => {
      const card = createBookCard(book);

      bookGrid.appendChild(card);
    });

    showStatus(`${books.length} buku ditemukan.`);
  }

  /* =========================================================
   SEARCH HANDLER
   ========================================================= */

  async function handleSearch() {
    const keyword = searchInput.value.trim();

    if (!keyword) {
      showStatus("Masukkan judul buku atau nama penulis terlebih dahulu.");

      searchInput.focus();

      return;
    }

    searchButton.disabled = true;

    searchButton.innerHTML = `

        <span
            class="spinner-border spinner-border-sm"
            aria-hidden="true"
        ></span>

        Mencari...

    `;

    showStatus("Sedang mencari buku...");

    bookGrid.innerHTML = "";

    try {
      const books = await searchBooksFromAPI(keyword, 10);

      displayBooks(books);
    } catch (error) {
      console.error("Open Library Error:", error);

      showStatus("Buku tidak dapat dimuat. Silakan coba lagi.");
    } finally {
      searchButton.disabled = false;

      searchButton.innerHTML = `

            <i class="bi bi-search"></i>

            Cari

        `;
    }
  }

  /* =========================================================
   BUTTON CLICK
   ========================================================= */

  searchButton.addEventListener("click", handleSearch);

  /* =========================================================
   ENTER KEY
   ========================================================= */

  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  });
}
