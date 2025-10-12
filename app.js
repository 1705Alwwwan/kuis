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
          question: "Siapakah pencipta bahasa pemrograman Python?",
          options: ["Guido van Rossum", "Dennis Ritchie", "James Gosling", "Linus Torvalds"],
          answer: "Guido van Rossum"
        },
        {
          question: "Framework frontend yang dibuat oleh Evan You adalah?",
          options: ["React", "Vue.js", "Angular", "Svelte"],
          answer: "Vue.js"
        },
        {
          question: "HTML adalah singkatan dari?",
          options: [
            "Hyper Trainer Marking Language",
            "Hyper Text Markup Language",
            "High Text Markup Language",
            "Hyper Tool Multi Language"
          ],
          answer: "Hyper Text Markup Language"
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
