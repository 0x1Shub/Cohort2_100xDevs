function promises() {
  let p = new Promise(function (resolve) {
    resolve("hi there");
  });
  return p;
}

const value = promises();
value.then(function (data) {
  console.log(data);
});
