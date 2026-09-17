const express = require("express");

const app = express();

const expenses = [];
let nextId = 1;

// middleware
app.use(express.static("public"));
app.use(express.json()); // to parse JSON request bodies

// routes
app.get("/api/expenses", (req, res) => {
  res.json(expenses);
});
app.post("/api/expenses", (req, res) => {
  const { amount, date, category, note } = req.body;
  console.log(amount, date, category, note);
  const expense = {
    id: nextId,
    amount: amount,
    date: date,
    category: category,
    note: note,
  };
  nextId++;
  expenses.push(expense);
  res.status(201).json(expense);
});

// listen on port 3000
app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
