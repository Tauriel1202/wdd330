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
    document.querySelector("#display").innerHTML = "";

    //parse localStorage
    let teams = JSON.parse(localStorage.getItem("Teams"));
    let you = document.createElement("h2");
    you.textContent = "Your Teams";
    document.querySelector("#display").append(you);

    if (Object.keys(JSON.parse(localStorage.getItem("Teams"))).length) {
      //get keys and loop through each of them
      Object.keys(teams).forEach((team) => {
        let div = document.createElement("div");
        div.innerHTML += `<h3><span>${team}</span> <span id='del'>❌</span></h3>`;
        div.innerHTML += `<p>${teams[team]}</p>`;

        document.getElementById("display").append(div);
      });
    } else {
      let p = document.createElement("p");
      p.innerHTML = "You do not have any teams yet.";
      document.querySelector("#display").append(p);
    }
  }
}
