// todo: { id : timestamp, content: string, completed: bool }
// toDoList = [toDo];
export class LOCAL {
  lst = [];
  lsAdd(todo) {
    // lst = document.querySelector(".todoLst");
    // todos = [];
    // input = document.querySelector("input");
    // totalLst = [];

    let filtered = todo.children[1].classList.value;
    let date = new Date();
    let com;
    if (filtered) {
      com = true;
    } else {
      com = false;
    }
    let localTodo = { id: date, content: todo.innerHTML, completed: com };
    this.lst.push(localTodo);

    // localStorage.setItem(todo.innerText, JSON.stringify(localTodo));
  }
  addLst(totalLst) {
    this.lst = [];
    totalLst.forEach((element) => {
      this.lsAdd(element);
    });
    localStorage.setItem("totalLst", JSON.stringify(this.lst));
  }
  getLst(todoLst, totalLst) {
    let lsLst = JSON.parse(localStorage.getItem("totalLst"));
    if (lsLst) {
      lsLst.forEach((item) => {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = item.content;
        todoLst.append(newDiv);
        totalLst.push(newDiv);
      });
    }
  }
}
