//Fetch
import { createSelect } from "./view.js";

let charArray = [];
const url = "https://swapi.dev/api/people/?page=";

addChar(charArray, url);

//create lst of chars to display
export function createLst(url) {
  fetch(url)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject); //<--remove later
      people.innerHTML = "";

      //New Page
      if (!jsObject.next) {
        maxPage = page;
      }

      //Character Stats
      for (let i = 0; i < jsObject.results.length; i++) {
        let name = jsObject.results[i].name;

        const div = document.createElement("div");
        const h2 = document.createElement("h2");

        h2.textContent = name;
        h2.addEventListener("click", () => {
          document.querySelectorAll("p").forEach((p) => p.remove());

          //Gender
          const genP = document.createElement("p");
          genP.textContent = `Gender: ${jsObject.results[i].gender}`;

          //Hair
          const hairP = document.createElement("p");
          hairP.textContent = `Hair Color: ${jsObject.results[i].hair_color}`;

          //Eye
          const eyeP = document.createElement("p");
          eyeP.textContent = `Eye Color: ${jsObject.results[i].eye_color}`;

          //Skin
          const skinP = document.createElement("p");
          skinP.textContent = `Skin Tone: ${jsObject.results[i].skin_color}`;

          //Film
          const filmP = document.createElement("p");
          filmP.textContent = `Number of Films: ${jsObject.results[i].films.length}`;

          //Planets
          const planetUrl = jsObject.results[i].homeworld;

          fetch(planetUrl)
            .then((response) => response.json())
            .then((planetJson) => {
              const homeP = document.createElement("p");
              homeP.textContent = `Home Planet: ${planetJson.name}`;
              div.insertBefore(homeP, genP);
            });

          //Ships
          if (jsObject.results[i].starships.length) {
            const sp = document.createElement("p");
            sp.textContent = "Ships: ";

            for (
              let j = jsObject.results[i].starships.length - 1;
              j >= 0;
              j--
            ) {
              const shipUrl = jsObject.results[i].starships[j];
              console.log(shipUrl);

              fetch(shipUrl)
                .then((response) => response.json())
                .then((shipJson) => {
                  console.log(shipJson);
                  sp.textContent += shipJson.name + (j == 0 ? "" : ", ");
                });
            }
            div.append(sp);
          }
          div.append(genP, hairP, eyeP, skinP, filmP);
        });

        div.append(h2);
        people.append(div);
      }
      // createSelect(charArray);
    });
}

//create a lst of chars to select
export function addChar(charArray, url) {
  if (url) {
    fetch(url)
      .then((response) => response.json())
      .then((jsObject) => {
        for (let i = 0; i < jsObject.results.length; i++) {
          charArray.push(jsObject.results[i].name);
        }
        addChar(charArray, jsObject.next);
        createSelect(charArray);
      });
  }
}
