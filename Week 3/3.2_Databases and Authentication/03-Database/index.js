const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect("your-mongodb-url");

const User = mongoose.model("User", {
  name: String,
  username: String,
  password: String,
});

const app = express();
app.use(express.json());

function userExists(username, password) {}

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exits",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);
