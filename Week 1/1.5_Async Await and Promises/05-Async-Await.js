function abc() {
  let p = new Promise(function (resolve) {
    resolve("hi there!");
  });
  return p;
}

async function main() {
  const value = await abc();
  console.log(value);
}

main();
