const express = require("express");
const app = express();

// URL:: http://localhost:4000/
app.get("/", (req, res) => {
  res.json({ title: "hellooo first api" });
});

// URL:: http://localhost:4000/1
app.get("/1", (req, res) => {
  res.json({ message: "1111" });
});

// URL:: http://localhost:4000/2
app.get("/2", (req, res) => {
  res.json({ message: "ABcd 22233" });
});

app.listen(4000, () => console.log("server started"));
