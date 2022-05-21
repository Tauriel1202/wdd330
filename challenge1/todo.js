let todos = [];
const lst = document.querySelector(".todoLst");
const input = document.querySelector("input");

//Button
document.querySelector("button").addEventListener("click", () => {
  main();
});

function main() {
  add();
  display();

  // done();
}

//Add to list
function add() {
  todos.push(input.value);
  return todos;
}

//Display on screen
function display() {
  const oneTodo = document.createElement("div");
  todos.forEach((todo) => {
    oneTodo.innerHTML = `<label><input type="checkbox" name="check" id="check"></label> ${todo} <button class="remove">❌</button>`;
  });
  lst.append(oneTodo);
}

//Remove Todo
lst.addEventListener("click", (e) => {
  if (e.target.innerHTML === "❌") {
    const index = Array.from(lst.children).indexOf(e.target.parentElement);
    todos.pop(index);
    e.target.parentElement.remove();
  }
});

//Completed
function done() {
  if (document.querySelector("#check") === true) {
    console.log("🌷");
  }
}

// function clear(){
//   input.value.textContent = '';
//   return input;
// }
