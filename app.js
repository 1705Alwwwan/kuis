const { createApp } = Vue;

createApp({
  data() {
    return {
      currentQuestion: 0,
      score: 0,
      selected: null,
      answered: false,
      questions: [
        {
          question: "Yayasan Al Muslim berlokasi di daerah mana?",
          options: ["Jakarta Selatan", "Bekasi, Jawa Barat", "Depok, Jawa Barat", "Karawang, Jawa Barat"],
          answer: "Bekasi, Jawa Barat"
        },
        {
          question: "Yayasan Al Muslim Tambun berdiri pada tahun berapa?",
          options: ["1989", "1991", "1993", "1995"],
          answer: "1991"
        },
        {
          question: "Bidang utama yang dikelola oleh Yayasan Al Muslim adalah?",
          options: ["Kesehatan dan pariwisata", "Pendidikan dan sosial", "Industri dan perdagangan", "Pertanian dan teknologi"],
          answer: "Pendidikan dan sosial"
        },
        {
          question: "Nama sekolah yang berada di bawah naungan Yayasan Al Muslim adalah?",
          options: ["Al Muslim School", "SD Negeri Mekarsari", "SMA Negeri 1 Tambun Selatan", "Pesantren Daarul Muttaqien"],
          answer: "Al Muslim School"
        },
        {
          question: "Nilai utama yang dipegang oleh Yayasan Al Muslim adalah?",
          options: ["Disiplin, Tertib, dan Kreatif", "Islami, Berilmu, dan Mandiri", "Cerdas, Berakhlak, dan Berprestasi", "Modern, Mandiri, dan Terdepan"],
          answer: "Islami, Berilmu, dan Mandiri"
        },
        {
          question: "Jenjang pendidikan yang tersedia di Yayasan Al Muslim mencakup?",
          options: ["PAUD hingga SMA", "TK hingga SMK", "SD hingga Universitas", "TK hingga SMA"],
          answer: "TK hingga SMA"
        },
        {
          question: "Selain pendidikan formal, kegiatan apa yang juga dilakukan oleh Yayasan Al Muslim?",
          options: ["Bisnis properti", "Ekspor-impor", "Sosial dan kemanusiaan", "Pariwisata religi"],
          answer: "Sosial dan kemanusiaan"
        },
        {
          question: "Ciri khas pendidikan di lingkungan Al Muslim adalah?",
          options: [
            "Berbasis teknologi dan akhlak Islami",
            "Full boarding dan militeristik",
            "Fokus hanya pada akademik",
            "Nonformal dan bebas kurikulum"
          ],
          answer: "Berbasis teknologi dan akhlak Islami"
        },
        {
          question: "Kegiatan sosial yang sering diadakan oleh Yayasan Al Muslim antara lain?",
          options: ["Festival kuliner", "Bakti sosial dan santunan anak yatim", "Lomba otomotif", "Kegiatan politik lokal"],
          answer: "Bakti sosial dan santunan anak yatim"
        },
        {
          question: "Tujuan utama pendidikan di bawah Yayasan Al Muslim adalah?",
          options: [
            "Menyiapkan siswa menjadi pengusaha sukses",
            "Membentuk generasi beriman, berilmu, dan berakhlak mulia",
            "Melatih siswa menjadi pegawai negeri",
            "Menghasilkan siswa berprestasi akademik tinggi saja"
          ],
          answer: "Membentuk generasi beriman, berilmu, dan berakhlak mulia"
        }
      ]

    }
  },
  methods: {
    checkAnswer(option) {
      if (!this.answered) {
        this.selected = option;
        this.answered = true;
        if (option === this.questions[this.currentQuestion].answer) {
          this.score++;
        }
      }
    },
    nextQuestion() {
      this.currentQuestion++;
      this.selected = null;
      this.answered = false;
    },
    restartGame() {
      this.currentQuestion = 0;
      this.score = 0;
      this.selected = null;
      this.answered = false;
    }
  }
}).mount("#app");
