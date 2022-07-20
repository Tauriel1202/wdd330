//Fetch
import { View } from "./view.js";
import { page, changeMaxPage, changePage } from "./star.js";

let view = new View();
let charArray = [];
const url = "https://swapi.dev/api/people/?page=";
const jUrl = "https://tauriel1202.github.io/wdd330/challenge2/json/star.json";
const jUrl2 = "https://tauriel1202.github.io/wdd330/challenge2/json/star2.json";

let url2 = false;
let oldJsobj;

export class Fetch {
  //create lst of chars to display
  createLst(url) {
    fetch(url)
      .then((response) => response.json())
      .then((jsObject) => {
        console.log(jsObject)
        people.innerHTML = "";

        //New Page
        console.log(jsObject.next)
        if (!jsObject.next) {
          oldJsobj = jsObject;
          url2 = jUrl;
          console.log(url2)
        }
        if (!jsObject.next) {
          changeMaxPage(page);
        }
        if (jsObject.results.length < 10 & jsObject.next == null) {
          fetch(url2)
            .then((response2) => response2.json())
            .then((jsObject2) => {
              
              // loadStats: extendObj => jsObject, jsObject2
              jsObject.results = [...jsObject.results, ...jsObject2.results];
              this.loadStats(jsObject);
             
            });
        } else {
          this.loadStats(jsObject);
        }
      });
  }

  //create a lst of chars to select
  addChar(charArray, url) {
    if (url == null){
      url =jUrl2;
    }
    if (url) {
      fetch(url)
        .then((response) => response.json())
        .then((jsObject) => {
          for (let i = 0; i < jsObject.results.length; i++) {
            charArray.push(jsObject.results[i].name);
          }
          let button = document.createElement("button");
          button.innerHTML = document.getElementById("a").childElementCount + 1;

          // a.setAttribute('href', )
          document.getElementById("a").append(button);
          this.addChar(charArray, jsObject.next);
          view.createSelect(charArray);
        });
    }
  }

  //load people stats
  loadStats(jsObject) {
    url2 = '';

    //Character Stats
    for (
      let i = 0;
      i < (jsObject.results.length < 10 ? jsObject.results.length : 10);
      i++
    ) {
      let name = jsObject.results[i].name;

      const div = document.createElement("div");
      const h2 = document.createElement("h2");

      h2.textContent = name;
      h2.addEventListener("click", () => {
        document.querySelectorAll("#people p").forEach((p) => p.remove());

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

          for (let j = jsObject.results[i].starships.length - 1; j >= 0; j--) {
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
  }
}
let f = new Fetch();
f.addChar(charArray, url);

document.getElementById("a").addEventListener("click", (e) => {
  let element = e.target;
  changePage(Number(element.innerHTML));

  if (Number(element.innerHTML) <= 9){
  f.createLst(url + Number(element.innerHTML));
  } else {
    f.createLst(jUrl2)
  }
});
