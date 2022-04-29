//Code from Ch2
// alert(`Welcome to Quiz Ninja!`);

// const question = `What is the Mandalorian's real name?`;
// const answer = prompt(question);
// alert(`You answered ${answer}.`);

//Code from Ch3
// let score = 0;
// const quiz = [
//   [
//     `What is the Mandalorian's real name?`, `Din Djarin`
//   ],
//   [
//     `Who is the Lady of Lothlorien?`, `Galadriel`
//   ],
//   [
//     `What is Wonder Woman's real name?`, `Diana Prince`
//   ],

//   [
//     `Who is Thalia Grace's brother from Heroes of Olympus?`, `Jason`
//   ]
// ];

// for (const [question, answer] of quiz){
//   const response = prompt(question);
//   if (response === answer) {
//     alert(`Correct! 😀`);
//     score++;
//   }
//   else {
//     alert(`Wrong! The correct answer is ${answer}`);
//   }
// }

// alert(`Game Over! You scored ${score} point${score > 1 ? 's': ''}!`);

//Code from Ch4
const htmlMsg = document.querySelector('#msg')
const btn = document.querySelector('button');

const quiz = [
  [`Who is the Lady of Lothlorien?`, `Galadriel`],
  [`What is the Mandalorian's real name?`, `Din Djarin`],
  [`Who does Annabeth Chase face alone in Mark of Athena?`, "Arachne"],
  [`What is Wonder Woman's real name?`, `Diana Prince`],
  [`Who is Thalia Grace's brother from Heroes of Olympus?`, `Jason`],
];

function start(quiz, htmlMsg) {
  let score = 0;
  let msg = ''

  //Game Loop
  for (const [question, answer] of quiz) {
    const response = ask(question);
    check(response, answer);
  }

  gameOver(msg);

  function ask(question) {   
    return prompt(question)
  }

  function check(response, answer) {
    if (response === answer) {
      alert(`Correct! 😀`);
      score++;
    } else {
      alert(`Wrong! The correct answer was ${answer}`);
    }
  }

  function gameOver(msg) {
    msg = `Game Over! You scored ${score} point${score > 1 ? "s" : ""}`;
    htmlMsg.append(msg)
  }
}
btn.addEventListener('click', () => {start(quiz, htmlMsg)});