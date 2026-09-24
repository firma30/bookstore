



const bookCategories = [
  "Novel",
  "Pendidikan",
  "Bisnis",
  "Self Development",
  "Agama",
  "Anak",
  "Kesehatan",
];



const booksData = [
  {
    id: "quiet-mind",
    title: "The Quiet Mind",
    author: "Olivia Hart",
    category: "Self Development",
    tag: "Bestseller",
    cover: null,
    price: 89000,
    rating: 4.8,
    pages: 224,
    publishedYear: 2024,
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
    cover: null,
    price: 99000,
    rating: 4.6,
    pages: 288,
    publishedYear: 2025,
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
    cover: null,
    price: 79000,
    rating: 4.7,
    pages: 192,
    publishedYear: 2023,
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
    cover: null,
    price: 109000,
    rating: 4.9,
    pages: 352,
    publishedYear: 2022,
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
    cover: null,
    price: 115000,
    rating: 4.8,
    pages: 384,
    publishedYear: 2021,
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
    cover: null,
    price: 125000,
    rating: 4.7,
    pages: 304,
    publishedYear: 2025,
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
    cover: null,
    price: 95000,
    rating: 4.6,
    pages: 256,
    publishedYear: 2024,
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
    cover: null,
    price: 85000,
    rating: 4.7,
    pages: 208,
    publishedYear: 2023,
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
    cover: null,
    price: 78000,
    rating: 4.9,
    pages: 240,
    publishedYear: 2024,
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
    cover: null,
    price: 82000,
    rating: 4.8,
    pages: 216,
    publishedYear: 2022,
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
    cover: null,
    price: 69000,
    rating: 4.9,
    pages: 64,
    publishedYear: 2025,
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
    cover: null,
    price: 75000,
    rating: 4.8,
    pages: 96,
    publishedYear: 2023,
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
    cover: null,
    price: 105000,
    rating: 4.7,
    pages: 272,
    publishedYear: 2024,
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
    cover: null,
    price: 88000,
    rating: 4.6,
    pages: 224,
    publishedYear: 2023,
    synopsis:
      "Teknik pernapasan sederhana untuk mengelola stres dan kecemasan, disusun berdasarkan pendekatan terapi pernapasan modern.",
    highlights: [
      "Latihan pernapasan bertahap, mudah diikuti",
      "Penjelasan ilmiah yang tetap ringan dibaca",
      "Cocok untuk pemula yang baru belajar relaksasi",
    ],
  },
  {
    id: "the-curious-classroom",
    title: "The Curious Classroom",
    author: "Nathan Pierce",
    category: "Pendidikan",
    tag: "New",
    cover: null,
    price: 102000,
    rating: 4.7,
    pages: 296,
    publishedYear: 2024,
    synopsis:
      "Menawarkan pendekatan belajar berbasis rasa ingin tahu, buku ini membahas bagaimana ruang kelas dapat diubah menjadi tempat eksplorasi yang hidup.",
    highlights: [
      "Metode pembelajaran berbasis pertanyaan terbuka",
      "Dilengkapi contoh aktivitas kelas siap pakai",
      "Ditulis oleh praktisi pendidikan alternatif",
    ],
  },
  {
    id: "belajar-tanpa-batas",
    title: "Belajar Tanpa Batas",
    author: "Rina Anggraini",
    category: "Pendidikan",
    tag: "",
    cover: null,
    price: 92000,
    rating: 4.8,
    pages: 248,
    publishedYear: 2025,
    synopsis:
      "Mengupas berbagai model pembelajaran mandiri di era digital, mulai dari belajar daring hingga komunitas belajar informal.",
    highlights: [
      "Panduan memilih sumber belajar yang tepat",
      "Kisah nyata pembelajar otodidak",
      "Cocok untuk siapa saja yang ingin terus berkembang",
    ],
  },
  {
    id: "peta-masa-depan",
    title: "Peta Masa Depan",
    author: "Farah Amelia",
    category: "Pendidikan",
    tag: "Bestseller",
    cover: null,
    price: 115000,
    rating: 4.6,
    pages: 320,
    publishedYear: 2024,
    synopsis:
      "Sebuah refleksi tentang arah pendidikan di masa depan, menyoroti keterampilan apa saja yang perlu dipersiapkan generasi muda.",
    highlights: [
      "Analisis tren pendidikan global terkini",
      "Rekomendasi praktis untuk orang tua dan pendidik",
      "Ditulis dengan riset mendalam namun mudah dicerna",
    ],
  },
  {
    id: "the-glass-garden",
    title: "The Glass Garden",
    author: "Isabelle Renaud",
    category: "Novel",
    tag: "Bestseller",
    cover: null,
    price: 112000,
    rating: 4.8,
    pages: 368,
    publishedYear: 2023,
    synopsis:
      "Kisah seorang arsitek yang membangun rumah kaca di tengah kota untuk menyimpan kenangan mendiang istrinya, hingga rahasia masa lalu perlahan terungkap.",
    highlights: [
      "Narasi penuh simbolisme dan detail visual",
      "Karakter utama yang kompleks dan manusiawi",
      "Masuk daftar novel pilihan tahun ini",
    ],
  },
  {
    id: "jejak-di-tanah-basah",
    title: "Jejak di Tanah Basah",
    author: "Raka Saputra",
    category: "Novel",
    tag: "",
    cover: null,
    price: 98000,
    rating: 4.7,
    pages: 304,
    publishedYear: 2022,
    synopsis:
      "Novel yang mengikuti perjalanan seorang pemuda desa mencari jati diri di tengah perubahan zaman yang menggeser tradisi keluarganya.",
    highlights: [
      "Latar pedesaan yang kental dan otentik",
      "Tema pencarian identitas yang relevan lintas generasi",
      "Gaya bahasa puitis khas sastra Nusantara",
    ],
  },
  {
    id: "winter-of-echoes",
    title: "Winter of Echoes",
    author: "Thomas Bell",
    category: "Novel",
    tag: "New",
    cover: null,
    price: 118000,
    rating: 4.9,
    pages: 416,
    publishedYear: 2021,
    synopsis:
      "Di sebuah kota kecil yang diselimuti salju, seorang penulis surat kabar menyelidiki misteri yang menghubungkan tiga keluarga selama puluhan tahun.",
    highlights: [
      "Alur misteri yang terus membangun ketegangan",
      "Atmosfer musim dingin yang digambarkan dengan kuat",
      "Twist akhir yang mengejutkan",
    ],
  },
  {
    id: "strategi-tanpa-modal-besar",
    title: "Strategi Tanpa Modal Besar",
    author: "Bagas Wirawan",
    category: "Bisnis",
    tag: "",
    cover: null,
    price: 89000,
    rating: 4.6,
    pages: 232,
    publishedYear: 2024,
    synopsis:
      "Strategi praktis membangun bisnis dengan modal terbatas, disusun dari pengalaman nyata para pelaku usaha rumahan.",
    highlights: [
      "Studi kasus usaha rumahan yang berhasil berkembang",
      "Tips memanfaatkan sumber daya seadanya",
      "Format buku ringkas dan langsung ke inti",
    ],
  },
  {
    id: "the-growth-equation",
    title: "The Growth Equation",
    author: "Jonathan Reeve",
    category: "Bisnis",
    tag: "New",
    cover: null,
    price: 108000,
    rating: 4.8,
    pages: 288,
    publishedYear: 2025,
    synopsis:
      "Membedah pola pikir dan sistem yang digunakan perusahaan rintisan untuk tumbuh secara konsisten di pasar yang kompetitif.",
    highlights: [
      "Kerangka kerja pertumbuhan yang teruji",
      "Wawancara dengan pendiri startup internasional",
      "Ilustrasi data yang mudah dipahami",
    ],
  },
  {
    id: "pemasaran-untuk-pemula",
    title: "Pemasaran Untuk Pemula",
    author: "Citra Maheswari",
    category: "Bisnis",
    tag: "Bestseller",
    cover: null,
    price: 93000,
    rating: 4.7,
    pages: 264,
    publishedYear: 2023,
    synopsis:
      "Panduan dasar pemasaran yang ditulis khusus untuk pelaku usaha baru, mencakup strategi digital hingga membangun loyalitas pelanggan.",
    highlights: [
      "Bahasa sederhana tanpa istilah pemasaran yang rumit",
      "Contoh kampanye pemasaran skala kecil",
      "Cocok untuk pemilik usaha yang baru memulai",
    ],
  },
  {
    id: "langkah-kecil-berarti",
    title: "Langkah Kecil Berarti",
    author: "Yasmin Puspita",
    category: "Self Development",
    tag: "",
    cover: null,
    price: 81000,
    rating: 4.8,
    pages: 200,
    publishedYear: 2024,
    synopsis:
      "Mengajarkan bahwa perubahan besar dalam hidup sering kali dimulai dari kebiasaan kecil yang dilakukan secara konsisten.",
    highlights: [
      "Latihan harian yang ringan dan realistis",
      "Kisah inspiratif dari pembaca yang telah mempraktikkannya",
      "Cocok dibaca perlahan sambil dipraktikkan",
    ],
  },
  {
    id: "the-focus-shift",
    title: "The Focus Shift",
    author: "Ethan Cross",
    category: "Self Development",
    tag: "New",
    cover: null,
    price: 87000,
    rating: 4.7,
    pages: 216,
    publishedYear: 2025,
    synopsis:
      "Panduan mengelola fokus di tengah gangguan digital yang terus meningkat, dengan pendekatan yang berbasis riset kognitif.",
    highlights: [
      "Teknik manajemen perhatian yang praktis",
      "Penjelasan ilmiah yang disampaikan secara ringkas",
      "Dilengkapi lembar evaluasi kebiasaan digital",
    ],
  },
  {
    id: "hikmah-di-setiap-langkah",
    title: "Hikmah di Setiap Langkah",
    author: "Ust. Zainal Abidin",
    category: "Agama",
    tag: "",
    cover: null,
    price: 76000,
    rating: 4.9,
    pages: 208,
    publishedYear: 2023,
    synopsis:
      "Kumpulan renungan yang mengajak pembaca menemukan makna di balik setiap peristiwa kehidupan, besar maupun kecil.",
    highlights: [
      "Disusun dalam bahasa yang lembut dan reflektif",
      "Setiap bab diakhiri dengan poin perenungan",
      "Cocok dibaca kapan saja, tanpa urutan tertentu",
    ],
  },
  {
    id: "menuju-hati-yang-tenang",
    title: "Menuju Hati yang Tenang",
    author: "Nyai Halimah Sa'diyah",
    category: "Agama",
    tag: "Bestseller",
    cover: null,
    price: 84000,
    rating: 4.8,
    pages: 232,
    publishedYear: 2024,
    synopsis:
      "Menawarkan tuntunan spiritual untuk menghadapi kegelisahan hidup modern, dengan pendekatan yang hangat dan mudah diamalkan.",
    highlights: [
      "Kombinasi kisah teladan dan panduan praktis",
      "Bahasa yang menenangkan dan mudah dipahami",
      "Banyak direkomendasikan oleh komunitas pengajian",
    ],
  },
  {
    id: "kisah-si-kancil-cerdik",
    title: "Kisah Si Kancil Cerdik",
    author: "Melati Ayu",
    category: "Anak",
    tag: "",
    cover: null,
    price: 65000,
    rating: 4.9,
    pages: 72,
    publishedYear: 2022,
    synopsis:
      "Cerita klasik Nusantara yang dikemas ulang dengan ilustrasi segar, mengajarkan anak tentang kecerdikan dan kebijaksanaan.",
    highlights: [
      "Ilustrasi penuh warna khas cerita rakyat",
      "Bahasa yang akrab untuk anak usia dini",
      "Menghadirkan nilai budaya lokal",
    ],
  },
  {
    id: "petualangan-luna-di-angkasa",
    title: "Petualangan Luna di Angkasa",
    author: "Bimo Prasetyo",
    category: "Anak",
    tag: "New",
    cover: null,
    price: 72000,
    rating: 4.8,
    pages: 80,
    publishedYear: 2025,
    synopsis:
      "Luna, seorang gadis kecil pemberani, menjelajahi luar angkasa bersama robot sahabatnya sambil belajar tentang rasa ingin tahu dan kerja sama.",
    highlights: [
      "Mengenalkan konsep sains dasar dengan cara menyenangkan",
      "Ilustrasi bergaya futuristik yang menarik",
      "Cocok untuk anak yang menyukai tema luar angkasa",
    ],
  },
  {
    id: "pola-hidup-anti-stres",
    title: "Pola Hidup Anti Stres",
    author: "dr. Ivan Kusuma",
    category: "Kesehatan",
    tag: "",
    cover: null,
    price: 97000,
    rating: 4.6,
    pages: 240,
    publishedYear: 2023,
    synopsis:
      "Panduan mengelola stres sehari-hari melalui pola makan, olahraga ringan, dan manajemen waktu yang lebih seimbang.",
    highlights: [
      "Ditulis berdasarkan pengalaman klinis penulis",
      "Rekomendasi yang mudah diterapkan tanpa alat khusus",
      "Dilengkapi checklist gaya hidup sehat",
    ],
  },
  {
    id: "tidur-berkualitas-hidup-berkualitas",
    title: "Tidur Berkualitas, Hidup Berkualitas",
    author: "dr. Sasha Wardhani",
    category: "Kesehatan",
    tag: "Bestseller",
    cover: null,
    price: 101000,
    rating: 4.7,
    pages: 256,
    publishedYear: 2024,
    synopsis:
      "Mengungkap pentingnya kualitas tidur bagi kesehatan fisik dan mental, lengkap dengan panduan membangun rutinitas tidur yang lebih baik.",
    highlights: [
      "Penjelasan ilmiah seputar siklus tidur",
      "Tips praktis mengatasi gangguan tidur ringan",
      "Cocok untuk pembaca dengan jadwal padat",
    ],
  },
];



const articleCategories = [
  "Review Buku",
  "Buku Terbaru",
  "Cerita Penulis",
  "Tips Membaca",
  "Berita Penerbit",
];



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




const bookCoverThemes = {
  "Novel": { bg: "#24383A", accent: "#D5B46B", ink: "#F5F1E8", motif: "circle" },
  "Pendidikan": { bg: "#2F4054", accent: "#D9B96E", ink: "#F4F0E7", motif: "grid" },
  "Bisnis": { bg: "#1D2E2B", accent: "#C8A96B", ink: "#F5F1E8", motif: "bars" },
  "Self Development": { bg: "#52645A", accent: "#E2C98B", ink: "#FBF8F0", motif: "sun" },
  "Agama": { bg: "#394A3F", accent: "#D8C27B", ink: "#F7F2E6", motif: "arch" },
  "Anak": { bg: "#6A7180", accent: "#E8C66E", ink: "#FFF9EC", motif: "stars" },
  "Kesehatan": { bg: "#365B59", accent: "#D2C47B", ink: "#F5F4EA", motif: "wave" },
};

function escapeSvgText(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function wrapCoverTitle(title, maxChars = 15) {
  const words = title.split(/\s+/);
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else line = next;
  });
  if (line) lines.push(line);
  return lines.slice(0, 4);
}

function getBookCover(book) {
  if (book.cover) return book.cover;

  const t = bookCoverThemes[book.category] || bookCoverThemes.Novel;
  const titleLines = wrapCoverTitle(book.title);
  const titleSvg = titleLines.map((line, i) =>
    `<text x="52" y="${250 + i * 43}" fill="${t.ink}" font-family="Georgia,serif" font-size="34" font-weight="600">${escapeSvgText(line)}</text>`
  ).join("");
  const motif = {
    circle: `<circle cx="410" cy="120" r="72" fill="none" stroke="${t.accent}" stroke-width="2"/><circle cx="410" cy="120" r="48" fill="${t.accent}" opacity=".14"/>`,
    grid: `<path d="M330 50H450M330 90H450M330 130H450M350 30V150M390 30V150M430 30V150" stroke="${t.accent}" opacity=".5" stroke-width="1"/>`,
    bars: `<rect x="335" y="70" width="18" height="100" fill="${t.accent}" opacity=".35"/><rect x="365" y="45" width="18" height="125" fill="${t.accent}" opacity=".55"/><rect x="395" y="90" width="18" height="80" fill="${t.accent}" opacity=".8"/><rect x="425" y="30" width="18" height="140" fill="${t.accent}"/>`,
    sun: `<circle cx="405" cy="105" r="43" fill="${t.accent}" opacity=".85"/><circle cx="405" cy="105" r="70" fill="none" stroke="${t.accent}" opacity=".35"/>`,
    arch: `<path d="M335 160V100a70 70 0 0 1 140 0v60" fill="none" stroke="${t.accent}" stroke-width="4"/><path d="M355 160V105a50 50 0 0 1 100 0v55" fill="none" stroke="${t.accent}" opacity=".45" stroke-width="2"/>`,
    stars: `<path d="M390 45l7 20 21 1-16 13 5 21-17-11-18 11 6-21-16-13 21-1z" fill="${t.accent}"/><circle cx="445" cy="135" r="7" fill="${t.accent}" opacity=".65"/><circle cx="350" cy="90" r="5" fill="${t.accent}" opacity=".6"/>`,
    wave: `<path d="M325 120 C355 75, 385 165, 415 120 S475 75, 485 110" fill="none" stroke="${t.accent}" stroke-width="5"/><path d="M325 145 C355 100, 385 190, 415 145 S475 100, 485 135" fill="none" stroke="${t.accent}" opacity=".35" stroke-width="2"/>`
  }[t.motif];

  const svg = `<svg xmlns="http:
    <rect width="500" height="625" fill="${t.bg}"/>
    <rect x="24" y="24" width="452" height="577" rx="4" fill="none" stroke="${t.accent}" opacity=".55"/>
    ${motif}
    <text x="52" y="82" fill="${t.accent}" font-family="Arial,sans-serif" font-size="11" font-weight="700" letter-spacing="3">L&apos;ÉDITEUR</text>
    <line x1="52" y1="105" x2="170" y2="105" stroke="${t.accent}" opacity=".7"/>
    ${titleSvg}
    <text x="52" y="455" fill="${t.accent}" font-family="Arial,sans-serif" font-size="12" letter-spacing="2">${escapeSvgText(book.category.toUpperCase())}</text>
    <text x="52" y="535" fill="${t.ink}" font-family="Arial,sans-serif" font-size="14" opacity=".9">${escapeSvgText(book.author)}</text>
    <text x="52" y="572" fill="${t.ink}" font-family="Arial,sans-serif" font-size="9" letter-spacing="2" opacity=".55">A MODERN BOOKSTORE COLLECTION</text>
  </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
