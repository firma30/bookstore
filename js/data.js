/* =====================================================
   L'ÉDITEUR — MODERN BOOKSTORE
   data.js
   Sumber data buku & artikel (dummy content).
   Ganti "cover" / "image" dengan path asset asli saat sudah tersedia.
   ===================================================== */

/* =========================
   KATEGORI BUKU (urutan tetap dipakai di filter)
   ========================= */

const bookCategories = [
  "Novel",
  "Pendidikan",
  "Bisnis",
  "Self Development",
  "Agama",
  "Anak",
  "Kesehatan",
];

/* =========================
   DATA BUKU
   ========================= */

const booksData = [
  {
    id: "quiet-mind",
    title: "The Quiet Mind",
    author: "Olivia Hart",
    category: "Self Development",
    tag: "Bestseller",
    cover: "https://placehold.co/500x625/173c34/f5f1e8?font=playfair-display&text=The+Quiet+Mind",
    synopsis:
      "Sebuah panduan reflektif tentang bagaimana menenangkan pikiran yang ramai di tengah kehidupan modern yang serba cepat. Olivia Hart mengajak pembaca menemukan kembali ruang hening di dalam diri.",
    highlights: [
      "Ditulis dengan bahasa yang hangat dan mudah dipahami",
      "Dilengkapi latihan reflektif di setiap bab",
      "Direkomendasikan oleh komunitas mindfulness nasional",
    ],
  },
  {
    id: "beyond-knowledge",
    title: "Beyond Knowledge",
    author: "Michael Stone",
    category: "Pendidikan",
    tag: "New",
    cover: "https://placehold.co/500x625/173c34/f5f1e8?font=playfair-display&text=Beyond+Knowledge",
    synopsis:
      "Menjelajahi batas antara pengetahuan dan kebijaksanaan, buku ini mengajak pembaca berpikir lebih dalam tentang cara kita belajar dan memaknai informasi di era digital.",
    highlights: [
      "Perspektif segar tentang pendidikan masa depan",
      "Studi kasus dari berbagai institusi pendidikan dunia",
      "Cocok untuk pendidik, orang tua, dan pelajar",
    ],
  },
  {
    id: "art-of-reading",
    title: "The Art Of Reading",
    author: "Emma Wilson",
    category: "Self Development",
    tag: "",
    cover: "https://placehold.co/500x625/173c34/f5f1e8?font=playfair-display&text=The+Art+Of+Reading",
    synopsis:
      "Panduan praktis membangun kebiasaan membaca yang bermakna, mulai dari memilih buku yang tepat hingga menyerap gagasan secara mendalam.",
    highlights: [
      "Teknik membaca aktif yang mudah diterapkan",
      "Daftar rekomendasi buku lintas genre",
      "Ditulis oleh kurator perpustakaan independen",
    ],
  },
  {
    id: "silent-harbor",
    title: "Silent Harbor",
    author: "Daniel Reyes",
    category: "Novel",
    tag: "Bestseller",
    cover: "https://placehold.co/500x625/173c34/f5f1e8?font=playfair-display&text=Silent+Harbor",
    synopsis:
      "Kisah seorang nelayan tua yang mencari makna hidup di sebuah pelabuhan kecil yang perlahan ditinggalkan zaman. Novel penuh renungan tentang kehilangan dan penerimaan.",
    highlights: [
      "Gaya bercerita liris dan mendalam",
      "Latar pesisir yang digambarkan dengan detail",
      "Pemenang penghargaan sastra independen",
    ],
  },
  {
    id: "the-last-letter",
    title: "The Last Letter",
    author: "Sofia Marchetti",
    category: "Novel",
    tag: "",
    cover: "https://placehold.co/500x625/173c34/f5f1e8?font=playfair-display&text=The+Last+Letter",
    synopsis:
      "Surat-surat yang tak pernah terkirim membuka rahasia keluarga selama tiga generasi. Sebuah novel tentang cinta, waktu, dan hal-hal yang tertinggal.",
    highlights: [
      "Alur berlapis antar tiga generasi",
      "Ending yang mengesankan dan mengharukan",
      "Favorit pembaca klub buku",
    ],
  },
  {
    id: "founders-mindset",
    title: "Founder's Mindset",
    author: "Ray Hutomo",
    category: "Bisnis",
    tag: "New",
    cover: "https://placehold.co/500x625/173c34/f5f1e8?font=playfair-display&text=Founder%27s+Mindset",
    synopsis:
      "Kumpulan pelajaran dari para pendiri bisnis independen di Indonesia tentang membangun usaha dari nol dengan sumber daya terbatas.",
    highlights: [
      "Wawancara eksklusif dengan 12 pendiri bisnis lokal",
      "Kerangka praktis untuk validasi ide usaha",
      "Bonus lembar kerja perencanaan bisnis",
    ],
  },
  {
    id: "the-lean-ledger",
    title: "The Lean Ledger",
    author: "Anisa Putri",
    category: "Bisnis",
    tag: "",
    cover: "https://placehold.co/500x625/173c34/f5f1e8?font=playfair-display&text=The+Lean+Ledger",
    synopsis:
      "Panduan mengelola keuangan usaha kecil dengan pendekatan sederhana namun disiplin, ditulis khusus untuk pelaku UMKM.",
    highlights: [
      "Contoh pembukuan sederhana yang bisa langsung dipraktikkan",
      "Bahasa yang ringan, jauh dari istilah akuntansi rumit",
      "Dilengkapi studi kasus UMKM lokal",
    ],
  },
  {
    id: "morning-light",
    title: "Morning Light",
    author: "Clara Bennett",
    category: "Self Development",
    tag: "",
    cover: "https://placehold.co/500x625/173c34/f5f1e8?font=playfair-display&text=Morning+Light",
    synopsis:
      "Rutinitas pagi sederhana yang dapat mengubah cara kita menjalani hari, disusun berdasarkan riset kebiasaan dan pengalaman pribadi penulis.",
    highlights: [
      "30 hari tantangan membangun rutinitas pagi",
      "Ilustrasi ringan di setiap bab",
      "Cocok dibaca perlahan, satu bab per hari",
    ],
  },
  {
    id: "cahaya-hati",
    title: "Cahaya Hati",
    author: "Ust. Rahmat Fauzan",
    category: "Agama",
    tag: "Bestseller",
    cover: "https://placehold.co/500x625/173c34/f5f1e8?font=playfair-display&text=Cahaya+Hati",
    synopsis:
      "Renungan harian yang menenangkan, membantu pembaca membangun kedekatan spiritual di tengah kesibukan sehari-hari.",
    highlights: [
      "365 renungan singkat, satu untuk setiap hari",
      "Bahasa yang lembut dan menyejukkan",
      "Cocok dibawa bepergian, ukuran ringkas",
    ],
  },
  {
    id: "jalan-yang-lurus",
    title: "Jalan Yang Lurus",
    author: "K.H. Ilham Nasution",
    category: "Agama",
    tag: "",
    cover: "https://placehold.co/500x625/173c34/f5f1e8?font=playfair-display&text=Jalan+Yang+Lurus",
    synopsis:
      "Kumpulan kisah teladan yang mengajarkan nilai kejujuran, kesabaran, dan keikhlasan dalam kehidupan sehari-hari.",
    highlights: [
      "Kisah-kisah pendek yang mudah dicerna",
      "Nilai moral yang relevan untuk segala usia",
      "Cocok dibaca bersama keluarga",
    ],
  },
  {
    id: "petualangan-si-kecil",
    title: "Petualangan Si Kecil",
    author: "Dinda Kartika",
    category: "Anak",
    tag: "New",
    cover: "https://placehold.co/500x625/173c34/f5f1e8?font=playfair-display&text=Petualangan+Si+Kecil",
    synopsis:
      "Buku cerita bergambar yang mengajak anak-anak mengenal nilai keberanian dan persahabatan lewat petualangan seru di hutan.",
    highlights: [
      "Ilustrasi penuh warna di setiap halaman",
      "Cerita ringan untuk usia 4-8 tahun",
      "Pesan moral yang mudah dipahami anak",
    ],
  },
  {
    id: "dongeng-sebelum-tidur",
    title: "Dongeng Sebelum Tidur",
    author: "Kumpulan Penulis",
    category: "Anak",
    tag: "",
    cover: "https://placehold.co/500x625/173c34/f5f1e8?font=playfair-display&text=Dongeng+Sebelum+Tidur",
    synopsis:
      "Kumpulan dongeng pendek yang cocok dibacakan orang tua kepada anak menjelang tidur, penuh imajinasi dan kehangatan.",
    highlights: [
      "20 dongeng pendek, 5-7 menit per cerita",
      "Bahasa sederhana, cocok dibacakan nyaring",
      "Sampul tebal, tahan lama",
    ],
  },
  {
    id: "seimbang-dan-sehat",
    title: "Seimbang & Sehat",
    author: "dr. Laras Widyani",
    category: "Kesehatan",
    tag: "Bestseller",
    cover: "https://placehold.co/500x625/173c34/f5f1e8?font=playfair-display&text=Seimbang+%26+Sehat",
    synopsis:
      "Panduan hidup sehat yang realistis untuk kesibukan sehari-hari, mencakup pola makan, tidur, dan aktivitas fisik sederhana.",
    highlights: [
      "Ditulis oleh dokter praktisi berpengalaman",
      "Tips yang mudah diterapkan tanpa perlu alat khusus",
      "Dilengkapi rangkuman di akhir setiap bab",
    ],
  },
  {
    id: "napas-tenang",
    title: "Napas Tenang",
    author: "Wulan Aryani",
    category: "Kesehatan",
    tag: "",
    cover: "https://placehold.co/500x625/173c34/f5f1e8?font=playfair-display&text=Napas+Tenang",
    synopsis:
      "Teknik pernapasan sederhana untuk mengelola stres dan kecemasan, disusun berdasarkan pendekatan terapi pernapasan modern.",
    highlights: [
      "Latihan pernapasan bertahap, mudah diikuti",
      "Penjelasan ilmiah yang tetap ringan dibaca",
      "Cocok untuk pemula yang baru belajar relaksasi",
    ],
  },
];

/* =========================
   KATEGORI ARTIKEL
   ========================= */

const articleCategories = [
  "Review Buku",
  "Buku Terbaru",
  "Cerita Penulis",
  "Tips Membaca",
  "Berita Penerbit",
];

/* =========================
   DATA ARTIKEL
   ========================= */

const articlesData = [
  {
    id: "rekomendasi-buku-bulan-ini",
    title: "Rekomendasi Buku Bulan Ini",
    category: "Buku Terbaru",
    date: "1 Sep 2026",
    image: "https://placehold.co/700x460/ebe4d7/173c34?font=playfair-display&text=Rekomendasi+Bulan+Ini",
    excerpt:
      "Temukan bacaan terbaik pilihan kurator kami untuk menemani hari-hari Anda bulan ini, dari novel reflektif hingga buku pengembangan diri.",
  },
  {
    id: "cerita-dibalik-buku",
    title: "Cerita Dibalik Buku",
    category: "Cerita Penulis",
    date: "28 Agu 2026",
    image: "https://placehold.co/700x460/ebe4d7/173c34?font=playfair-display&text=Cerita+Dibalik+Buku",
    excerpt:
      "Mengenal lebih dekat perjalanan para penulis dalam merangkai setiap karya, mulai dari ide awal hingga menjadi buku yang siap dibaca.",
  },
  {
    id: "tips-membaca-lebih-efektif",
    title: "Tips Membaca Lebih Efektif",
    category: "Tips Membaca",
    date: "22 Agu 2026",
    image: "https://placehold.co/700x460/ebe4d7/173c34?font=playfair-display&text=Membaca+Lebih+Efektif",
    excerpt:
      "Bangun kebiasaan membaca yang bermakna dengan beberapa pendekatan sederhana yang bisa langsung Anda terapkan mulai hari ini.",
  },
  {
    id: "review-the-quiet-mind",
    title: "Review: The Quiet Mind",
    category: "Review Buku",
    date: "15 Agu 2026",
    image: "https://placehold.co/700x460/ebe4d7/173c34?font=playfair-display&text=Review%3A+The+Quiet+Mind",
    excerpt:
      "Ulasan mendalam tentang buku terbaru Olivia Hart yang mengajak pembaca menemukan kembali ketenangan di tengah hiruk-pikuk kehidupan.",
  },
  {
    id: "koleksi-baru-september",
    title: "Koleksi Baru Bulan September",
    category: "Buku Terbaru",
    date: "10 Agu 2026",
    image: "https://placehold.co/700x460/ebe4d7/173c34?font=playfair-display&text=Koleksi+Baru",
    excerpt:
      "Sejumlah judul baru resmi hadir di katalog kami, mulai dari kategori bisnis, kesehatan, hingga bacaan anak-anak.",
  },
  {
    id: "wawancara-daniel-reyes",
    title: "Wawancara Bersama Daniel Reyes",
    category: "Cerita Penulis",
    date: "3 Agu 2026",
    image: "https://placehold.co/700x460/ebe4d7/173c34?font=playfair-display&text=Wawancara+Penulis",
    excerpt:
      "Daniel Reyes berbagi proses kreatif di balik novel Silent Harbor dan bagaimana ia menemukan inspirasi dari kampung nelayan.",
  },
  {
    id: "membangun-rak-buku-keluarga",
    title: "Membangun Rak Buku Keluarga",
    category: "Tips Membaca",
    date: "27 Jul 2026",
    image: "https://placehold.co/700x460/ebe4d7/173c34?font=playfair-display&text=Rak+Buku+Keluarga",
    excerpt:
      "Beberapa tips memilih bacaan yang tepat untuk setiap anggota keluarga, dari anak-anak hingga orang tua.",
  },
  {
    id: "penerbit-buka-program-penulis-baru",
    title: "Penerbit Buka Program Penulis Baru",
    category: "Berita Penerbit",
    date: "20 Jul 2026",
    image: "https://placehold.co/700x460/ebe4d7/173c34?font=playfair-display&text=Program+Penulis+Baru",
    excerpt:
      "L'Éditeur membuka kesempatan bagi penulis baru untuk menerbitkan karya pertama mereka bersama tim editorial kami.",
  },
  {
    id: "review-founders-mindset",
    title: "Review: Founder's Mindset",
    category: "Review Buku",
    date: "14 Jul 2026",
    image: "https://placehold.co/700x460/ebe4d7/173c34?font=playfair-display&text=Review+Founder%27s+Mindset",
    excerpt:
      "Apa yang membuat buku ini layak dibaca para pelaku usaha kecil? Simak ulasan lengkapnya di sini.",
  },
  {
    id: "acara-bedah-buku-bulan-depan",
    title: "Acara Bedah Buku Bulan Depan",
    category: "Berita Penerbit",
    date: "5 Jul 2026",
    image: "https://placehold.co/700x460/ebe4d7/173c34?font=playfair-display&text=Bedah+Buku",
    excerpt:
      "Kami mengundang Anda dalam acara bedah buku bersama penulis dan komunitas pembaca, terbuka untuk umum.",
  },
];
