## Instructions

We now want to test the API.

Using your prefered client, run the following HTTP request:

`GET http://localhost:3000/meetup` - Should return an empty array.
`POST http://localhost:3000/meetup` - Should return a 201 status and the created meetup.
`GET http://localhost:3000/meetup` - Should return an array with the created meetup.
`DELETE`

- @EYAL - COMPLETE EDGE CASES

## Prompt

Please create a valid json that is a dummy data for API so we can test it

## Response

// routes/meetups.js
// ... (existing code)

// In-memory data store for meetup events
let meetupsData = [
{
id: 1,
name: "Tech Talk Meetup",
description: "Join us for an exciting tech talk on the latest trends.",
location: "Tech Hub, City",
date: "2023-08-15",
time: "18:00",
},
{
id: 2,
name: "Outdoor Adventure Meetup",
description: "Hike, camp, and explore the great outdoors with us!",
location: "National Park",
date: "2023-08-20",
time: "10:00",
},
{
id: 3,
name: "Art and Culture Expo",
description: "Experience the beauty of art and culture at our expo.",
location: "Art Gallery, Downtown",
date: "2023-08-25",
time: "15:30",
},
];

# Prompt

We called the API for `DELETE http://localhost:3000/meetups/15` when there is no meetup with this id.

The response we recived was:

```
{
	"message": "Meetup deleted successfully"
}
```

This is an issue. please fix

# Prompt

Please add verification on POST that a meetup with the same title at the specific hour isn't already exist
