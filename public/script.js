const form = document.querySelector("#form");
const container = document.querySelector("#container");
const amount = document.querySelector("#amount");
const date = document.querySelector("#date");
const category = document.querySelector("#category");
const note = document.querySelector("#note");

function renderExpense(expense) {
  const { id, amount, date, category, note } = expense;
  const newElement = document.createElement("div");

  newElement.textContent = `${id} . Spent MVR ${amount} on ${note} | ${category} | ${date}`;
  container.prepend(newElement);
}

async function fetchExpenses() {
  const response = await fetch("/api/expenses");
  const data = await response.json();
  // console.log(data);

  for (let expense of data) {
    renderExpense(expense);
  }
}
fetchExpenses();

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const expense = {
    amount: amount.value,
    date: date.value,
    category: category.value,
    note: note.value,
  };

  const response = await fetch("/api/expenses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expense),
  });

  const data = await response.json();

  renderExpense(data);

  // Clear the form
  form.reset();
});
