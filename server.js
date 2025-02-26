const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/feedback", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "feedback.html"));
});

app.post("/submit-feedback", (req, res) => {
    console.log("Feedback received:", req.body);
    res.send("<h2>Thank you for your feedback! <a href='/'>Go Back</a></h2>");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
