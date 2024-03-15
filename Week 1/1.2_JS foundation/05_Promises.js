function downloadData() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Data downloaded");
      resolve("Downloaded Data");
    }, 1000);
  });
}

function processData(data) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Data processed");
      resolve("Processed " + data);
    }, 1000);
  });
}

downloadData()
  .then(processData)
  .then(function (finalResult) {
    console.log("Final result: " + finalResult);
  })
  .catch(function (error) {
    console.error("An error occurred:", error);
  });
