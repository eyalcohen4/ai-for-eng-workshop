const express = require("express");
const app = express();
const axios = require("axios");

// Serve static files from the 'public' folder
app.use(express.static("public"));

// API route to fetch stock moves
app.get("/api/getStockMoves", async (req, res) => {
  try {
    // Fetch stock data from external server
    const response = await axios.get(
      "https://mock-api-virid.vercel.app/api/getStockMoves"
    ); // Replace with actual URL

    res.json(response.data.stocks);
  } catch (error) {
    console.error("Error fetching stock moves:", error);
    res.status(500).json({ error: "Failed to fetch stock moves" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
