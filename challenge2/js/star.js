//Altogether
import { Fetch } from "./fetch.js";
import { addLocal } from "./functions.js"; //REMOVE

const url = "https://swapi.dev/api/people/?page=";
const jUrl = "https://tauriel1202.github.io/wdd330/challenge2/json/star2.json";

const Pbtn = document.querySelector("#prev");
const Nbtn = document.querySelector("#next");
let page = 1;
let maxPage = 100;

let fetch = new Fetch();

//Creates char lst
fetch.createLst(url);
// fetch.jsonChars(jUrl);

//adds team to local storage
addLocal();

//Next
Nbtn.addEventListener("click", () => {
  page += page < maxPage ? 1 : 0;

  if (page > 9) {
    fetch.createLst(`https://tauriel1202.github.io/wdd330/challenge2/json/star${page-8}.json`);
  } else {
    fetch.createLst(url + page);
  }
});

//Prev
Pbtn.addEventListener("click", () => {
  page -= page > 1 ? 1 : 0;

  fetch.createLst(url + page);
});

function changePage(value) {
  page = value;
}
function changeMaxPage(value) {
  maxPage = value;
}

export { page, maxPage, changePage, changeMaxPage };
