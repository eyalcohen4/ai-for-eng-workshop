const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();
const port = 3001; // You can change this to the desired port number

// Set up rate limiting: 10 requests per second
const limiter = rateLimit({
  windowMs: 1, // 1 second
  max: 1,
});

// Apply the rate limiter to all requests
app.use(limiter);

// Define a basic route for testing rate limiting
app.get("/api/test", (req, res) => {
  res.send("Test endpoint. Rate limiting is applied.");
});

// Define a basic route for testing rate limiting
app.get("/api/change", (req, res) => {
  // return a random percent change between -5% and 5%
  res.send((Math.random() * 10 - 20).toFixed(2));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
