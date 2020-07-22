const todoList = document.querySelector(".todoList");
const input = document.querySelector("#addList");
const buttton = document.querySelector("#submit");
const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

function creatToDo(task) {
  const li = document.createElement("li");
  const remove = document.createElement("button");
  remove.style.marginLeft = "20px";
  remove.classList.add("removeBtn");
  const textnode = document.createTextNode(task);
  remove.textContent = "X";
  li.appendChild(textnode);
  li.appendChild(remove);

  return li;
}

buttton.addEventListener("click", () => {
  if (input.value === "") {
    alert("You must write something!");
  } else {
    console.log(input.value);
    let elemnt = creatToDo(input.value);

    todoList.appendChild(elemnt);
    document.getElementById("form").reset();
  }
  let removeBtns = document.querySelectorAll(".removeBtn");
  removeBtns.forEach((el) => {
    // console.log(el)
    el.addEventListener("click", (event) => {
      event.target.parentElement.remove();
    });
  });
});

