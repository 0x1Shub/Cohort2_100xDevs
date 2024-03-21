// create wrapper function here

const express = require("express");

const app = express();

function usernameValidator(username, password) {
  if (username != "username" || password != "password") {
    return false;
  }
  return true;
}

function kidneyValidator(kidneyId) {
  if (kidneyId != 1 && kidneyId != 2) {
    return false;
  }
  return true;
}

app.get("/health-checkup", (req, res) => {
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;

  if (!usernameValidator(username, password)) {
    res.status(403).json({
      msg: "User doesn't exits!",
    });
    return;
  }

  if (!kidneyValidator(kidneyId)) {
    res.status(411).json({
      msg: "Wrong inputs, Please enter correct inputs",
    });
    return;
  }

  res.send({
    msg: "Your kidney is fine !",
  });
});

app.put("/replace-kidney", (req, res) => {
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;

  if (!usernameValidator(username, password)) {
    res.status(403).json({
      msg: "User doesn't exits!",
    });
    return;
  }

  if (!kidneyValidator(kidneyId)) {
    res.status(411).json({
      msg: "Wrong inputs, Please enter correct inputs",
    });
    return;
  }

  res.send({
    msg: "Your kidney is fine !",
  });
});

app.listen(3000);
