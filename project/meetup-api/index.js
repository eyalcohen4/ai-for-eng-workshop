const express = require("express");
const meetupsRoutes = require("./routes/meetups");
const app = express();
const PORT = process.env.PORT || 3000;

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/meetups", meetupsRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
