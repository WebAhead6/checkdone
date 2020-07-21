const todoList = document.querySelector(".todoList");
const input = document.querySelector("#addList");
const buttton = document.querySelector("#submit");
const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

function creatToDo(task) {
  const li = document.createElement("li");
  const textnode = document.createTextNode(task);
  li.appendChild(textnode);
  return li;
}

buttton.addEventListener("click", () => {
  console.log(input.value);
  let elemnt = creatToDo(input.value);

  todoList.appendChild(elemnt);
});
