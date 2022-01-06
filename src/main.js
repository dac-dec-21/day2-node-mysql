const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.json({ message: "I AM TRYINTN TO  GET ALL USERS" });
});

app.post("/add-user", (req, res) => {
  res.json({ message: "I AM TRYING TO Add New User" });
});

app.listen(4000, () => console.log("server started"));
