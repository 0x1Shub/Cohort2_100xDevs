// normal function

function sum(a, b) {
  return a + b;
}

// arrow function

const sum = (a, b) => {
  return a + b;
};

app.get("/", (req, res) => {});

const ans = sum(1, 2);
console.log(ans);
