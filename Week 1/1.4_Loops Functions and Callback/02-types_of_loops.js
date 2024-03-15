// for loop

for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0, 1, 2, 3, 4
}

// While loop

let i = 0;
while (i < 5) {
  console.log(i); // Output: 0, 1, 2, 3, 4
  i++;
}

// do-while loop

let a = 0;
do {
  console.log(a); // Output: 0, 1, 2, 3, 4
  i++;
} while (a < 5);

// for-in loop

const person = {
  name: "John",
  age: 30,
  gender: "male",
};

for (let key in person) {
  console.log(key + ": " + person[key]); // Output: name: John, age: 30, gender: male
}

// for-of loop

const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color); // Output: red, green, blue
}
