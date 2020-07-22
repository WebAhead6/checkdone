const todoList = document.querySelector(".todoList");
const input = document.querySelector("#addList");
const buttton = document.querySelector("#submit");
const form = document.querySelector("#form");
const completedTasks = document.querySelector(".completedTasks");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

function creatToDo(task) {
  const li = document.createElement("li");
  const textnode = document.createTextNode(task);
  li.appendChild(textnode);

  li.addEventListener("click", (e) => {
    e.target.style.color = "red";
    var el = li.cloneNode(true);
    completedTasks.appendChild(el);
  });

  return li;
}

buttton.addEventListener("click", () => {
  let elemnt = creatToDo(input.value);

  todoList.appendChild(elemnt);
});
