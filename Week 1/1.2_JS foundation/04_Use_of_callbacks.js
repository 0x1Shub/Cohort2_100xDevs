// Passing Functions as Arguments

function processInput(input, callback) {
  const ans = input.toUpperCase();
  callback(ans);
}

function displayOutput(ans) {
  console.log("Processed output: ", ans);
}

processInput("shubham yeram", displayOutput);

// Asynchronous Operations

function displayGreeting(callback) {
  setTimeout(() => {
    callback("Hello World !");
  }, 2000);
}

function displayMessage(message) {
  console.log(message);
}

displayGreeting(displayMessage);

// Error Handling

function fetchData(callback) {
  const data = null;
  if (data === null) {
    callback(null, "Error: Unable to fetch data");
  } else {
    callback(data, null);
  }
}
function handleData(result, error) {
  if (error) {
    console.error(error);
  } else {
    console.log("Data:", result);
  }
}
fetchData(handleData);
