const fs = require("fs");

// Asynchronous file reading
fs.readFile("a.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

console.log("File reading started...");
