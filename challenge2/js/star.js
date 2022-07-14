//Altogether
import { createLst } from "./fetch.js";
import { addLocal, listen } from "./functions.js"; //REMOVE

const url = "https://swapi.dev/api/people/?page=";
const Pbtn = document.querySelector("#prev");
const Nbtn = document.querySelector("#next");
let page = 1;
let maxPage = 100;

//Creates char lst
createLst(url);

//REMOVE LATER
// listen();
// console.log(document.querySelector('option').value)

console.log('😀')
addLocal();
// let team = document.querySelector("#tName");
// let cBtn = document.querySelector("#create");
// cBtn.addEventListener("click", () => {
//   localStorage.setItem(team, myChars);
// });

//REMOVE LATER

//Next
Nbtn.addEventListener("click", () => {
  page += page < maxPage ? 1 : 0;
  createLst(url + page);
});

//Prev
Pbtn.addEventListener("click", () => {
  page -= page > 1 ? 1 : 0;
  createLst(url + page);
});
