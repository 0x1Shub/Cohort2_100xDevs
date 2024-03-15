// setTimeout and setInterval

setTimeout(() => {
  console.log("Delayed function");
}, 1000);

setInterval(() => {
  console.log("Interval function");
}, 2000);

// Promises

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: "Data fetched successfully" };
      resolve(data);
    }, 1000);
  });
};

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

// Async / Await

const fetchData1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: "Data fetched successfully" };
      resolve(data);
    }, 1000);
  });
};

const getData = async () => {
  try {
    const data = await fetchData1();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

getData();
