// test("list item is created when submitting", (t) => {
//   const result = creatToDo("cooking a meal");
//   console.log(result.outerHTML);
//   t.equal(result.outerHTML, "<li>cooking a meal</li>");
// });

test("Submitting a new task adds it to the list", (t) => {
  
  const textField = document.querySelector("#addList");
  textField.value = "study at 5 p.m";
  const submitButton = document.querySelector("button[type='submit']");
  submitButton.click();
  const result = document.querySelector("span");
  console.log(result);
  t.equal(result.textContent, "study at 5 p.m");
  const li=document.querySelector("li")
  li.remove();
});
