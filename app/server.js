const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const jwt = require("jsonwebtoken");
const { exec } = require("child_process");

const app = express();
app.use(express.json());

const db = new sqlite3.Database(":memory:");

db.serialize(() => {
    db.run("CREATE TABLE users (id INT, username TEXT, password TEXT)");
    db.run("INSERT INTO users VALUES (1, 'admin', 'password123')");
});

// Vulnerability: Hardcoded secret
const JWT_SECRET = "secret123";

app.get("/health", (req, res) => {
    res.json({ status: "healthy" });
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Vulnerability: SQL injection
    const query =
        `SELECT * FROM users WHERE username='${username}' AND password='${password}'`;

    db.get(query, (err, row) => {
        if (row) {
            const token = jwt.sign({ user: username }, JWT_SECRET);

            // Vulnerability: Logging sensitive data
            console.log("LOGIN:", username, password);

            return res.json({ token });
        }

        res.status(401).json({ error: "Unauthorized" });
    });
});

app.get("/search", (req, res) => {
    const keyword = req.query.q;

    // Vulnerability: Command injection
    exec(`echo ${keyword}`, (err, stdout) => {
        res.send(stdout);
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});