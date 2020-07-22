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
  const remove = document.createElement("button");

  const completed = document.createElement("button");
  completed.style.marginLeft = "40px";
  completed.classList.add("compBtn");
  completed.textContent = "^";

  remove.style.marginLeft = "20px";
  remove.classList.add("removeBtn");
  const textnode = document.createElement("span");
  textnode.textContent = task;
  textnode.width = "100px";
  remove.textContent = "X";
  li.appendChild(textnode);
  li.appendChild(completed);
  li.appendChild(remove);

  //   li.addEventListener("click", (e) => {
  //     e.target.style.color = "red";
  //     var el = li.cloneNode(true);
  //     completedTasks.appendChild(el);
  //   });

  return li;
}

buttton.addEventListener("click", () => {
  let element;
  if (input.value === "") {
    alert("You must write something!");
    return;
  } else {
    console.log(input.value);
    element = creatToDo(input.value);

    todoList.appendChild(element);
    document.getElementById("form").reset();
  }
  let removeEvent = (event) => {
    event.target.parentElement.remove();
  };
  let removeBtns = document.querySelectorAll(".removeBtn");
  removeBtns.forEach((el) => {
    // console.log(el)
    el.addEventListener("click", removeEvent);
  });
  //   let completedBtns = document.querySelectorAll(".compBtn");
  //   completedBtns.forEach((el) => {
  // console.log(el)
  element.childNodes[1].addEventListener("click", (event) => {
    console.log("invoked");
    event.target.parentElement.style.color = "red";
    var el = event.target.parentElement.cloneNode(true);
    el.lastChild.addEventListener("click", removeEvent);
    el.childNodes[1].remove();
    completedTasks.appendChild(el);

    //   e.target.completed();
    //   var el = li.cloneNode(true);
    //   completedTasks.appendChild(el);
  });
});
// });
