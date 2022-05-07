const quiz = [
  {
    q: "Who is the Lady of Lothlorien?",
    a: "Galadriel",
  },
  {
    q: "What the Mandalorian's real name?",
    a: "Din Djarin",
  },
  {
    q: "Which ancient enemy did Annabeth face alone in Rome?",
    a: "Arachne",
  },
  {
    q: "Who is Jason Grace's sister?",
    a: "Thalia",
  },
  {
    q: "Which magic sword did Seth find in the first Fablehaven series?",
    a: "Vasilis",
  },
];

/*Ch5 Code
 const game = {
   start(quiz) {    
     this.questions = [...quiz];
     this.score = 0;
     // main game loop
     for (const question of this.questions) {
       this.question = question;
       this.ask();
     }
     // end of main game loop
     this.gameOver(msg);
   },
   ask() {
     const question = `${this.question.question}`;
     const response = prompt(question);
     this.check(response);
   },
   check(response) {
     const answer = this.question.answer;
     if (response === answer) {
       alert("Correct! 😀");
       this.score++;
     } else {
       alert(`Wrong! The correct answer was ${answer}`);
     }
   },
   gameOver() {
     alert(`Game Over! You scored ${score} point${score > 1 ? "s" : ""}`);  
   },
 };
 game.start(quiz)
*/

//Ch6 & Ch7
const view = {
  score: document.querySelector("#score strong"),
  question: document.querySelector("#question"),
  result: document.querySelector("#result"),
  info: document.querySelector("#info"),
  start: document.querySelector("button"),

  render(target, content, attributes) {
    for (const key in attributes) {
      target.setAttribute(key, attributes[key]);
    }
    target.innerHTML = content;
  },
  show(element) {
    element.style.display = "block";
  },
  hide(element) {
    element.style.display = "none";
  },
};
const game = {
  start(quiz) {
    view.hide(view.start);
    this.questions = [...quiz];
    this.score = 0;
    // main game loop
    for (const question of this.questions) {
      this.question = question;
      this.ask();
    }
    // end of main game loop
    this.gameOver();
  },
  ask() {
    const question = `${this.question.q}`;
    view.render(view.question, question);
    const response = prompt(question);
    this.check(response);
  },
  check(response) {
    const answer = this.question.a;
    if (response === answer) {
      view.render(view.result, "Correct!", { class: "correct" });
      alert("Correct! 😀");
      this.score++;
      view.render(view.score, this.score);
    } else {
      view.render(view.result, `Wrong! The correct answer was ${answer}`, {
        class: "wrong",
      });
      alert(`Wrong! The correct answer was ${answer}`);
    }
  },
  gameOver() {
    view.render(
      view.info,
      `Game Over, you scored ${this.score} point${this.score !== 1 ? "s" : ""}`,
      view.show(view.start),
    );
  },
};
view.start.addEventListener("click", () => {
  game.start(quiz), false;
});
