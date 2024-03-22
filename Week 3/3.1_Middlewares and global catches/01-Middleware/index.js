const express = require("express");

const app = express();

app.get("/health-checkup", (req, res) => {
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "username" || password != "password") {
    res.status(403).json({
      msg: "User doesn't exits!",
    });
    return;
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(411).json({
      msg: "Wrong inputs, Please check your inputs",
    });
    return;
  }

  res.send({
    msg: "Your kidney is fine !",
  });
});

app.listen(3000);
