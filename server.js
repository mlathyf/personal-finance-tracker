const express = require("express");
const Database = require("better-sqlite3");

const app = express();
const db = new Database("expenses.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS expenses (
    id INTEGER PRIMARY KEY,
    amount INTEGER,
    date TEXT,
    category TEXT,
    note TEXT
  )
  `);

// middleware
app.use(express.static("public"));
app.use(express.json()); // to parse JSON request bodies

// routes
app.get("/api/expenses", (req, res) => {
  res.json(db.prepare("SELECT * FROM expenses").all());
});
app.post("/api/expenses", (req, res) => {
  const { amount, date, category, note } = req.body;
  console.log(amount, date, category, note);
  const amountCents = Math.round(parseFloat(amount) * 100);
  const result = db
    .prepare(
      `INSERT INTO expenses (amount, date, category, note) VALUES (?, ?, ?, ?)`,
    )
    .run(amountCents, date, category, note);
  const expense = {
    id: result.lastInsertRowid,
    amount: amountCents,
    date: date,
    category: category,
    note: note,
  };
  res.status(201).json(expense);
});

// listen on port 3000
app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
