function myOwnsetTimeout(duration) {
  let p = new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
  return p;
}

myOwnsetTimeout(5000).then(function () {
  console.log("Log after some duration");
});
