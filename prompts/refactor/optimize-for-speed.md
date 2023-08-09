# Prompt A

Give optimizations and feedback on this code based on clean code best practices like SOLID and DRY.

const express = require("express");
const app = express();
const fetch = require("node-fetch");
const port = 3000;

// Set up routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/stocks", async (req, res) => {
  try {
    // Fetch data from the server API (replace with actual API URL)
    const response = await fetch("<URL>/api/stocks");
    const data = await response.json();

    // Process the data to find the top 10 movers
    const top10Movers = data.sort((a, b) => b.change - a.change).slice(0, 10);

    res.json(top10Movers);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

# Prompt B
How will you improve it to optimize for speed? Suggest the fixes before writing the code

# Prompt C 
Add caching
