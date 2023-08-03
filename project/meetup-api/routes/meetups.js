const express = require("express");
const router = express.Router();

let meetups = []; // In-memory data store
let currentId = 1; // Helper variable to assign IDs to meetups

// Route to create a new meetup
router.post("/", (req, res) => {
  const { name, description, location, date, time } = req.body;
  const newMeetup = {
    id: currentId++,
    name,
    description,
    location,
    date,
    time,
  };
  meetups.push(newMeetup);
  res.status(201).json(newMeetup);
});

// Route to retrieve a list of all meetups
router.get("/", (req, res) => {
  res.json(meetups);
});

// Route to retrieve a specific meetup by its 'id'
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const meetup = meetups.find((m) => m.id === id);

  if (!meetup) return res.status(404).json({ error: "Meetup not found" });

  res.json(meetup);
});

// Route to update the details of a specific meetup by its 'id'
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = meetups.findIndex((m) => m.id === id);

  if (index === -1) return res.status(404).json({ error: "Meetup not found" });

  const { name, description, location, date, time } = req.body;
  meetups[index] = { id, name, description, location, date, time };

  res.json(meetups[index]);
});

// Route to delete a specific meetup by its 'id'
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = meetups.findIndex((m) => m.id === id);

  if (index === -1) return res.status(404).json({ error: "Meetup not found" });

  meetups = meetups.filter((m) => m.id !== id);

  res.status(204).end();
});

module.exports = router;
