/* =====================================================
   L'ÉDITEUR — MODERN BOOKSTORE
   script.js
   ===================================================== */

(function () {
  const navbar = document.querySelector(".navbar");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const revealElements = document.querySelectorAll(
    "section, .book-card, .category-box, .article-card, .article-card-light"
  );
  const images = document.querySelectorAll("img");
  const buttons = document.querySelectorAll(
    ".btn-primary-custom, .btn-outline-custom, .btn-whatsapp"
  );

  /* =========================
     1. NAVBAR SCROLL EFFECT
     ========================= */
  if (navbar) {
    const updateNavbarState = () => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    };

    window.addEventListener("scroll", updateNavbarState, { passive: true });
    updateNavbarState();
  }

  /* =========================
     2. SMOOTH SCROLL
     ========================= */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetSelector = anchor.getAttribute("href");
      const target = targetSelector ? document.querySelector(targetSelector) : null;

      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  /* =========================
     3. MOBILE MENU AUTO CLOSE
     ========================= */
  document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse && navbarCollapse.classList.contains("show") && navbarToggler) {
        navbarToggler.click();
      }
    });
  });

  /* =========================
     4. SCROLL REVEAL ANIMATION
     ========================= */
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    function observeReveal(elements) {
      elements.forEach((element) => {
        element.classList.add("reveal");

        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          element.classList.add("active");
        } else {
          revealObserver.observe(element);
        }
      });
    }

    window.observeReveal = observeReveal;
    observeReveal(revealElements);
  }

  /* =========================
     5. WHATSAPP BOOK ORDER
     ========================= */
  window.orderBook = function orderBook(bookName) {
    const phone = "628123456789";
    const message = `Halo, saya tertarik untuk memesan buku "${bookName}". Apakah buku tersebut masih tersedia?`;
    const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  /* =========================
     6. IMAGE LAZY EFFECT
     ========================= */
  images.forEach((img) => {
    img.addEventListener("load", () => {
      img.style.opacity = "1";
    });
  });

  /* =========================
     7. BUTTON HOVER MICRO EFFECT
     ========================= */
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "translateY(-3px)";
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translateY(0)";
    });
  });

  /* =========================
     8. CURRENT YEAR FOOTER
     ========================= */
  const year = document.querySelector(".current-year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();


function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);
}
