const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

app.use(express.json());

const ALL_USERS = [
  {
    username: "john123@gmail.com",
    password: "password",
    name: "John Doe",
  },
  {
    username: "example@gmail.com",
    password: "password@123",
    name: "Example",
  },
  {
    username: "abc@gmail.com",
    password: "abcd",
    name: "ABC",
  },
];

function userExists(username, password) {
  let userExists = false;
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (
      ALL_USERS[i].username == username &&
      ALL_USERS[i].password == password
    ) {
      userExists = true;
    }
  }
  return userExists;
}

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

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, jwtPassword);
  const username = decoded.username;

  res.json({
    users: ALL_USERS.filter(function (value) {
      if (value.username == username) {
        return false;
      } else {
        return true;
      }
    }),
  });
});

app.listen(3000);
