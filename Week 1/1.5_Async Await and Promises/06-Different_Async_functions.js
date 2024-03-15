// 1. Callback

function shubham(callback) {
  // do some async logic here
  callback("hi there!");
}

async function main() {
  shubham(function (value) {
    console.log(value);
  });
}

main();

// 2. Promise (then) syntax

function a() {
  let p = new Promise(function (resolve) {
    // do some async logic here
    resolve("hi there!");
  });
  return p;
}

function main() {
  a().then(function (value) {
    console.log(value);
  });
}

main();

// 3. Async/await syntax

function x() {
  let p = new Promise(function (resolve) {
    // do some async logic here
    resolve("hi there!");
  });
  return p;
}

async function main() {
  const value = await x();
  console.log(value);
}

main();
