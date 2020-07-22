
test("Submitting a new task adds it to the list", t => {
  const textField = document.querySelector("#addList");
  textField.value = "study at 5 p.m";
  const submitButton = document.querySelector("button[type='submit']");
  submitButton.click();
  const result = document.querySelector("span");
  console.log(result);
  t.equal(result.textContent, "study at 5 p.m");
  const li = document.querySelector("li")
  // li.remove();
});




// Delete things from the list if I don’t need to do them anymore
test("Deleting an entry removes it from the list", t => {

  const xx = document.querySelector('li');
  // console.log(xx)
  xx.lastChild.click();
  // console.log(xx);
  t.equal(document.querySelector('li'), null);
    todoList.classList.add("hide1");
});

// Check things off my list so that I can see what I’ve done
test("Checking an entry marks it as complete", t => {
  const xx = document.querySelector('li');
  xx.children[1].click();
  const yy = document.querySelector('.completedTasks');
  const comTasTxt = yy.children[0].textContent;
  // console.log(yy.children[0].textContent);
  t.equal(comTasTxt, 'study at 5 p.m');

});

