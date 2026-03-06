const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
  host: "multi-tier-mysql.c7kyy6ee60ly.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "Ashwin123",
  database: "multitierdb"
});

db.connect(err => {
  if (err) {
    console.log("Database connection failed");
  } else {
    console.log("Connected to RDS MySQL");
  }
});

app.get("/", (req, res) => {
  res.send("Backend server running successfully");
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
