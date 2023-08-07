// routes/meetups.js
const express = require("express");
const router = express.Router();

// In-memory data store for meetup events
let meetupsData = [];

// Route to create a new meetup
router.post("/", (req, res) => {
  const { name, description, location, date, time } = req.body;

  // Check if a meetup with the same title and time already exists
  const existingMeetup = meetupsData.find(
    (meetup) => meetup.name === name && meetup.time === time
  );

  if (existingMeetup) {
    return res.status(400).json({
      error: "A meetup with the same title at the same time already exists",
    });
  }

  // Generate a unique ID for the new meetup (you can use a UUID library for more robust IDs)
  const id = meetupsData.length + 1;

  // Create the new meetup object
  const newMeetup = {
    id,
    name,
    description,
    location,
    date,
    time,
  };

  // Add the new meetup to the meetupsData array
  meetupsData.push(newMeetup);

  // Respond with the newly created meetup
  res.status(201).json(newMeetup);
});

// Route to retrieve a list of all meetups
router.get("/", (req, res) => {
  // Respond with the array of all meetups
  res.json(meetupsData);
});

// Route to retrieve details of a specific meetup by its 'id'
router.get("/:id", (req, res) => {
  const meetupId = parseInt(req.params.id);

  // Find the meetup with the given 'id' in the meetupsData array
  const meetup = meetupsData.find((meetup) => meetup.id === meetupId);

  if (!meetup) {
    // If the meetup with the given 'id' is not found, return a 404 response
    res.status(404).json({ error: "Meetup not found" });
  } else {
    // Respond with the meetup details
    res.json(meetup);
  }
});

// Route to update the details of a specific meetup by its 'id'
router.put("/:id", (req, res) => {
  const meetupId = parseInt(req.params.id);
  const { name, description, location, date, time } = req.body;

  // Find the index of the meetup with the given 'id' in the meetupsData array
  const meetupIndex = meetupsData.findIndex((meetup) => meetup.id === meetupId);

  if (meetupIndex === -1) {
    // If the meetup with the given 'id' is not found, return a 404 response
    res.status(404).json({ error: "Meetup not found" });
  } else {
    // Update the meetup details
    meetupsData[meetupIndex] = {
      id: meetupId,
      name,
      description,
      location,
      date,
      time,
    };

    // Respond with the updated meetup
    res.json(meetupsData[meetupIndex]);
  }
});

// Route to delete a specific meetup by its 'id'
router.delete("/:id", (req, res) => {
  const meetupId = parseInt(req.params.id);

  // Find the index of the meetup with the given 'id' in the meetupsData array
  const meetupIndex = meetupsData.findIndex((meetup) => meetup.id === meetupId);

  if (meetupIndex === -1) {
    // If the meetup with the given 'id' is not found, return a 404 response
    res.status(404).json({ error: "Meetup not found. Unable to delete." });
  } else {
    // Delete the meetup from the meetupsData array
    meetupsData.splice(meetupIndex, 1);

    // Respond with a success message
    res.json({ message: "Meetup deleted successfully" });
  }
});

module.exports = router;

module.exports = router;
