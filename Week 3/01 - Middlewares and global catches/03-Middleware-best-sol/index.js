const express = require("express");

const app = express();

function userMiddleware(req, res, next) {
  if (username != "username" || password != "password") {
    res.status(403).json({
      msg: "User dosen't exits!",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).json({
      msg: "Incorrect inputs",
    });
  } else {
    next();
  }
}

app.get(
  "/health-checkup",
  userMiddleware,
  kidneyMiddleware,
  function (req, res) {
    // do logic
    res.send("Your kidney is fine");
  }
);

app.get("/kidney-check", userMiddleware, kidneyMiddleware, function (req, res) {
  // do logic
  res.send("Your kidney is fine");
});

app.get("/heart-check", userMiddleware, kidneyMiddleware, function (req, res) {
  // do logic
  res.send("Your heart is fine");
});
