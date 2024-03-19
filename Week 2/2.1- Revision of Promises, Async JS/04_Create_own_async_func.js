// Approach 1: Wrapping another async function

function myOwnSetTimeout(fn, duration) {
  setTimeout(fn, duration);
}

myOwnSetTimeout(function () {
  console.log("Hii there");
}, 5000);

// Create a function that logs something after 1s And then waits for 2 seconds to log another thing

function myOwnSetTimeout(fn, duration) {
  setTimeout(fn, duration);
}

myOwnSetTimeout(function () {
  console.log("log this first");
  myOwnSetTimeout(function () {
    console.log("Log this second");
  }, 2000);
}, 1000);
