const body = document.body;
const clicky = document.querySelector('#clicky');
const tapTap = document.querySelector('#tapTap');
const wave = document.querySelector('#wave');

function highlight(e) {
  e.target.classList.toggle("highlight");
  const h3 = document.createElement('h3');
  h3.innerHTML = `😀 You are <strong>holding!</strong> 😎`;

  body.append(h3)
}

clicky.addEventListener('click', () => {
  clicky.innerHTML = `🏹 You <em> clicked </em> me! 🍒`
})
tapTap.addEventListener('dblclick', () => {
  tapTap.style.backgroundColor = '#0ac6ff';
})
wave.addEventListener('mouseover', () => {
  wave.style.border = '2px dashed #0ac6ff';
})
body.addEventListener("keydown", highlight);
body.addEventListener("keypress", (event) =>
  console.log(`You pressed the ${event.key} character`)
);
