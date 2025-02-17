const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 3000;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
});

pool.connect()
  .then(() => console.log("Connected to PostgreSQL database"))
  .catch(err => console.error("Database connection failed:", err));

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.send(`Node.js with PostgreSQL is running! Server time: ${result.rows[0].now}`);
  } catch (err) {
    res.status(500).send("Database error: " + err.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
