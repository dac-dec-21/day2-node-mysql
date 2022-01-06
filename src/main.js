const express = require("express");
const app = express();
app.use(express.json());

app.get("/users", (req, res) => {
  console.log(req.query);
  res.json({ message: "I AM TRYINTN TO  GET ALL USERS" });
});

app.post("/add-user", (req, res) => {
  console.log(req.body);
  res.json({ message: "I AM TRYING TO Add New User Kuch Bhiiii" });
});

app.listen(4000, () => console.log("server started"));
