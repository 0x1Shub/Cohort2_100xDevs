// Create a todo app that lets  user to store there todo on the server using express js

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let todos = [];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const { text } = req.body;
  const newTodos = {
    id: todos.length + 1,
    text: text,
  };
  todos.push(newTodos);
  res.status(201).json(newTodos);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
