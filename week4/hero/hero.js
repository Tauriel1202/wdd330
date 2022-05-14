const form = document.forms["heroForm"];
form.addEventListener("submit", makeHero, false);

form.heroName.addEventListener('keyup',validateInline)

// document.forms.hero.heroName.focus();

function makeHero(event) {
  event.preventDefault();

  const hero = {};

  hero.name = form.heroName.value;
  hero.realName = form.realName.value;
  hero.category = form.category.value;
  hero.age = form.age.value;
  hero.home = form.home.value;
  hero.origin = form.origin.value;

  console.log(JSON.stringify(hero));
  return hero;
}

const label = form.querySelector("label");
const error = document.createElement("div");
error.classList.add("error");
error.textContent = "! Your name is not allowed to start with X.";
label.append(error);

function validateInline() {
  const heroName = this.value.toUpperCase();
  console.log(heroName.startsWith('X'));
  if (heroName.startsWith("X")) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
}
