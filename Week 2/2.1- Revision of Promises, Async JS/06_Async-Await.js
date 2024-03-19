function myOwnsetTimeout(duration) {
  let p = new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
  return p;
}

async function myFunc() {
  await myOwnsetTimeout(5000);
  console.log("Log this after some time");
}

myFunc();
