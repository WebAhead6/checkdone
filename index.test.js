test("list item is created when submitting", (t) => {
  const result = creatToDo("cooking a meal");
  console.log(result.outerHTML);
  t.equal(result.outerHTML, "<li>cooking a meal</li>");
});
