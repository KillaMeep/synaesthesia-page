const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static("public"));

// Define routes for each project page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/hypersekt", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "hypersekt.html"));
});

app.get("/djsynaesthesia", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "djsynaesthesia.html"));
});

app.get("/personal-music", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "personal-music.html"));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
