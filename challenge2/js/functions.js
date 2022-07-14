//Logic
let myChars = [];

document.getElementById('create').addEventListener('click', event =>{
  document.querySelectorAll('select').forEach(selection =>{
    console.log(selection.innerHTML)
  })
})

//add listener to options, click to myChar
export function listen() {
  console.log("🌀");
  // let option = document.querySelector('option').value
  // console.log(option)
}

//add team to local
export function addLocal() {
  listen();
  console.log('🍍')

  let team = document.querySelector("#tName");
  let cBtn = document.querySelector("#create");
  cBtn.addEventListener("click", () => {
    localStorage.setItem(team, myChars);
  });
}
