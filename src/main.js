const express = require("express");
const app = express();
// THIS IS HELPING TO READ THE :: "POST REQUEST BODY".
app.use(express.json());

// CROSS ORIGIN REQUEST ENABLING.
const cors = require("cors");
app.use(cors());

const { addUser, selectAllUser } = require("./user");

app.get("/users", async (req, res) => {
  const list = await selectAllUser();
  res.json(list);
});

app.post("/add-user", async (req, res) => {
  const user = req.body;
  await addUser(user);
  res.json({ message: "User Added Successfully" });
});

app.listen(4000, () => console.log("this is optional, server started"));
