//Logic
import { View } from "./view.js";

let view = new View();
let myChars = [];
let save = {};

//add team to local
//add to local storage
export function addLocal() {
  let team = document.querySelector("#tName");
  let cBtn = document.querySelector("#create");

  cBtn.addEventListener("click", (_) => {
    if (localStorage.getItem("Teams")) {
      save = JSON.parse(localStorage.getItem("Teams"));
    } else {
      save = {};
    }
    if (team.value != "") {
      document.querySelectorAll("select").forEach((select) => {
        myChars.push(select.value);
      });

      let teamName = team.value;
      save[teamName] = myChars;

      localStorage.setItem("Teams", JSON.stringify(save));
    }
  });
}

//delete team
export function deleteTeam(team) {
  let saved = JSON.parse(localStorage.getItem("Teams"));
  delete saved[team];
  localStorage.setItem("Teams", JSON.stringify(saved));

  view.displayTeam();
}

document.addEventListener("click", (event) => {
  if (event.target.innerHTML === "❌") {
    deleteTeam(event.target.parentElement.children[0].innerHTML);
  }
  return false;
});
