// 2. Calculate the time it takes between a setTimeout call and the inner function actually running

function calculateTime() {
  const startTime = Date.now();
  setTimeout(() => {
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    console.log(`Time elapsed: ${elapsedTime} milliseconds`);
  }, 1000);
}
calculateTime();
