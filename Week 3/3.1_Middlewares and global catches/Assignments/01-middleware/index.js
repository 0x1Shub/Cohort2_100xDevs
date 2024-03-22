const express = require("express");
const app = express();

// Middleware to count requests
let requestCount = 0;
const countRequests = (req, res, next) => {
  requestCount++;
  console.log(`Total requests received: ${requestCount}`);
  next();
};

// Middleware to calculate response time
const calculateResponseTime = (req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`Request handled in ${duration}ms`);
    next();
  });
};

// Using middleware
app.use(countRequests);
app.use(calculateResponseTime);

// Route to handle health checkup
app.get("/health-checkup", (req, res) => {
  res.send({
    msg: "Your kidney is fine!",
  });
});

// Route to replace kidney
app.put("/replace-kidney", (req, res) => {
  res.send({
    msg: "Your kidney is fine!",
  });
});

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
