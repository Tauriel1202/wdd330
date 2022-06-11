const url = "https://swapi.dev/api/people/?page=";
const people = document.querySelector("#people");
const Pbtn = document.querySelector("#prev");
const Nbtn = document.querySelector("#next");
let page = 1;
let maxPage = 100;

function createLst(url) {
  fetch(url)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);

      people.innerHTML = "";

      if (!jsObject.next) {
        maxPage = page;
      }

      for (let i = 0; i < jsObject.results.length; i++) {
        const div = document.createElement("div");
        const h2 = document.createElement("h2");

        let name = jsObject.results[i].name;

        h2.textContent = name;
        h2.addEventListener("click", () => {
          document.querySelectorAll("p").forEach((p) => p.remove());

          //Bday
          const bdayP = document.createElement("p");
          bdayP.textContent = `Birth Year: ${jsObject.results[i].birth_year}`;

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

          //Height
          const heightP = document.createElement("p");
          heightP.textContent = `Height: ${jsObject.results[i].height}`;

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
              div.insertBefore(homeP, bdayP);
            });
          //Ships
          if (jsObject.results[i].starships.length) {
            const sp = document.createElement("p");
            sp.textContent = "Ships: ";

            for (let j = jsObject.results[i].starships.length-1; j>=0; j--) {
              const shipUrl = jsObject.results[i].starships[j];
              console.log(shipUrl);

              fetch(shipUrl)
                .then((response) => response.json())
                .then((shipJson) => {
                  console.log(shipJson);
                  sp.textContent += shipJson.name + (j==0?'':", ");
                });
              }
            div.append(sp);
          }
          div.append(bdayP, genP, hairP, eyeP, skinP, heightP, filmP);
        });

        div.append(h2);
        people.append(div);
      }
    });
}
createLst(url);

Nbtn.addEventListener("click", () => {
  page += page < maxPage ? 1 : 0;
  createLst(url + page);
});

Pbtn.addEventListener("click", () => {
  page -= page > 1 ? 1 : 0;
  createLst(url + page);
});
