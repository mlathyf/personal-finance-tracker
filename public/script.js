const form = document.querySelector("#form");
const container = document.querySelector("#container");
const amount = document.querySelector("#amount");
const date = document.querySelector("#date");
const category = document.querySelector("#category");
const note = document.querySelector("#note");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Submitted");
  console.log(amount.value);
  console.log(date.value);
  console.log(category.value);
  console.log(note.value);

  const newElement = document.createElement("div");
  newElement.textContent = `Spent MVR ${amount.value} on ${note.value} under ${category.value} at ${date.value}`;
  container.prepend(newElement);

  // Clear the form
  form.reset();
});
