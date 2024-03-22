// Let people sign up to your website Only allow signed in users to see people (create a dummy people list)

const express = require("express");
const bcrypt = require("bcrypt");
const session = require("express-session");

// Initialize Express app
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "secret", resave: false, saveUninitialized: false }));

// Dummy user database
const users = [];

// Routes for registration, login, and protected page
app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/register.html");
});

app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    res.redirect("/login");
  } catch {
    res.redirect("/register");
  }
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.post("/login", async (req, res) => {
  const user = users.find((user) => user.email === req.body.email);
  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    req.session.userId = user.id;
    res.redirect("/people");
  } else {
    res.redirect("/login");
  }
});

app.get("/people", (req, res) => {
  if (req.session && req.session.userId) {
    res.sendFile(__dirname + "/people.html");
  } else {
    res.redirect("/login");
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
