console.clear();

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
  input.value = "";
  input.focus();
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
    oneTodo.innerHTML = `<label><input type="checkbox" name="check" id="check"></label><p>${todo}</p><button class="remove">❌</button>`;
  });
  lst.append(oneTodo);
}

lst.addEventListener("click", (e) => {
  if (e.target.tagName != "DIV") {
    //Remove Todo
    if (e.target.innerHTML === "❌") {
      const index = Array.from(lst.children).indexOf(e.target.parentElement);
      todos.pop(index);
      e.target.parentElement.remove();
    }
    //Done
    else if (e.target.checked) {
      let p = e.target.parentElement.nextSibling;
      p.innerHTML = `<strike>${p.innerHTML}</strike>`;
    } else if (e.target.tagName == 'INPUT') {
      let p = e.target.parentElement.nextSibling;
      p.innerHTML = `${p.children[0].innerHTML}`;
    }
  }
});
