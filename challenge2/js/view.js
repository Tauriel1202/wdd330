//HTML
export class View {
  constructor() {
    // check if there are any teams to display
    if (localStorage.getItem("Teams")) {
      this.displayTeam();
    }
  }

  //creates select
  createSelect(charArray) {
    let count = 0;
    document.querySelector(".selects").textContent = "";

    charArray = Array.from(new Set(charArray));

    while (count < 5) {
      let p = document.createElement("p");
      let select = document.createElement("select");

      for (let i = 0; i < charArray.length; i++) {
        let option = document.createElement("option");
        option.textContent = charArray[i];
        select.append(option);
      }

      p.textContent = "Choose a character: ";
      document.querySelector(".selects").append(p, select);
      count += 1;
    }
  }

  //displays created teams
  displayTeam() {
    //parse localStorage
    let teams = JSON.parse(localStorage.getItem("Teams"));
    let you = document.createElement("h2");
    you.textContent = "Your Teams";
    document.querySelector("#display").append(you);

    //get keys and loop through each of them
    Object.keys(teams).forEach((team) => {
      let div = document.createElement("div");
      // div.innerHTML = "<h2>Your Teams</h2>";
      div.innerHTML += `<h3>${team} <span id='del'>❌</span></h3>`;
      div.innerHTML += `<p>${teams[team]}</p>`;

      document.getElementById("display").append(div);
    });
  }
}
