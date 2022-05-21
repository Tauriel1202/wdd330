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
  todos.push(input.value)
  return todos;
}

//Display on screen
function display() {
  const oneTodo = document.createElement("div");
  todos.forEach((todo) => {
    oneTodo.innerHTML = `<label><input type="checkbox" name="check" id="check"></label><p>${todo}</p><button class="remove">❌</button>`;
  });
  lst.append(oneTodo);
}

lst.addEventListener("click", (e) => {
  //Done
  if (e.target.checked) {
    let p = e.target.parentElement.nextSibling
    p.innerHTML = `<strike>${p.innerHTML}</strike>`
  }
  else {
    let p = e.target.parentElement.nextSibling
    p.innerHTML = `${p.children[0].innerHTML}`
  }
  //Remove Todo
  if (e.target.innerHTML === "❌") {
    const index = Array.from(lst.children).indexOf(e.target.parentElement);
    todos.pop(index);
    e.target.parentElement.remove();
  }

});





// function clear(){
//   input.value.textContent = '';
//   return input;
// }
