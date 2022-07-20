//Logic
let myChars = [];
let save = {};

//add team to local
//add to local storage
export function addLocal() {
  let team = document.querySelector("#tName");
  let cBtn = document.querySelector("#create");

  cBtn.addEventListener("click", _ => {
    if(localStorage.getItem('Teams')){
      save = JSON.parse( localStorage.getItem('Teams'))
    }
    else {
      save = {}
    }
    if (team.value != "") {
      document.querySelectorAll("select").forEach((select) => {
        myChars.push(select.value);
      });

      let teamName = team.value;
      save[teamName] = myChars;

      localStorage.setItem('Teams', JSON.stringify(save));
    }
  });
}

//delete team
export function deleteTeam(){
  let saved = JSON.parse(localStorage.getItem('Teams'));
  document.querySelectorAll('#del').addEventListener(() => {
    console.log('💩💩💩💩💩💩💩')
  })
}