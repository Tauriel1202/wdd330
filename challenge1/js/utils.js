//Todo Class
import { LOCAL } from "./ls.js";
const ls = new LOCAL();

export class TODO {
  lst = document.querySelector(".todoLst");
  todos = [];
  input = document.querySelector("input");
  totalLst = [];

  //Focus to input
  focus() {
    this.input.value = "";
    this.input.focus();
  }

  //Add to todos
  add() {
    this.todos.push(this.input.value);
    return this.todos;
  }

  //Adds to HTMl
  display() {
    const oneTodo = document.createElement("div");
    this.todos.forEach((todo) => {
      oneTodo.innerHTML = `<label><input type="checkbox" name="check" class="check"></label><p>${todo}</p><button class="remove">❌</button>`;
    });
    this.lst.append(oneTodo);
    this.totalLst = Array.from(this.lst.children);
  }

  //Displays list choice
  displayLst(lst) {
    this.lst.innerHTML = "";
    lst.forEach((el) => this.lst.append(el));
    
  }

  //Show completed
  showComp() {
    let completed = this.totalLst.filter((todo) => {
      let p = todo.children[1].classList.value;
      return p;
    });
    this.displayLst(completed);
  }

  //Show active
  showActive(show) {
    let active = this.totalLst.filter((todo) => {
      let p = todo.children[1].classList.value;
      
      if (p != 'slash'){
        return !p;
      }
    });
    if (show) {
      this.displayLst(active);
    }
    return active;
  }
  tasksLeft(){
    let numLeft = this.showActive(false);
    left.innerHTML = `${numLeft.length} task${numLeft.length===1 ? ' ': 's'} left `
  }
  //Class ENDING
}
