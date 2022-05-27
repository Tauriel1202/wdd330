console.clear();
import { TODO } from "./utils.js";
import { LOCAL } from "./ls.js";

let todos = [];
const lst = document.querySelector(".todoLst");
const todo = new TODO();
const ls = new LOCAL();

ls.getLst(lst, todo.totalLst);
todo.tasksLeft();

//Buttons
document.querySelector("#add").addEventListener("click", () => {
  // main();
  todo.add();
  todo.focus();
  todo.display();
  ls.addLst(todo.totalLst);
  todo.tasksLeft();
});

//Backup Functions
{
  // function main() {
  //   add();
  //   display();
  //   // done();
  //   input.value = "";
  //   input.focus();
  // }
  // //Add to list
  // function add() {
  //   todos.push(input.value);
  //   return todos;
  // }
  // //Display on screen
  // function display() {
  //   const oneTodo = document.createElement("div");
  //   todos.forEach((todo) => {
  //     oneTodo.innerHTML = `<label><input type="checkbox" name="check" id="check"></label><p>${todo}</p><button class="remove">❌</button>`;
  //   });
  //   lst.append(oneTodo);
  // }
}

lst.addEventListener("click", (e) => {
  if (e.target.tagName != "DIV") {
    //Remove Todo
    if (e.target.innerHTML === "❌") {
      const index = Array.from(lst.children).indexOf(e.target.parentElement);
      todos.pop(index);
      todo.totalLst.pop(index);

      e.target.parentElement.remove();
    }
    //Done
    else if (e.target.checked) {
      let p = e.target.parentElement.nextSibling;
      p.innerHTML = `<strike>${p.innerHTML}</strike>`;
      p.classList.add("slash");
      e.target.setAttribute("checked", true);
    } else if (e.target.tagName == "INPUT") {
      let p = e.target.parentElement.nextSibling;
      p.innerHTML = `${p.children[0].innerHTML}`;
      p.classList.remove("slash");
      e.target.removeAttribute("checked");
    }
  }
  ls.addLst(todo.totalLst);
  todo.tasksLeft();
});

//Show completed
document.querySelector("#comp").addEventListener("click", (e) => {
  todo.showComp();
});

//Show all
document.querySelector("#all").addEventListener("click", (e) => {
  todo.displayLst(todo.totalLst);
});

//Show active
document.querySelector("#active").addEventListener("click", () => {
  todo.showActive(true);
});
