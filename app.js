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
          question: "Jenjang pendidikan yang tersedia di Yayasan Al Muslim mencakup?",
          options: ["PAUD hingga SMA", "TK hingga SMK", "SD hingga Universitas", "PG hingga Perguruan Tinggi"],
          answer: "PG hingga Perguruan Tinggi"
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
