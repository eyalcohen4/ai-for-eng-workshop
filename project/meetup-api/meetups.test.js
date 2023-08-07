const request = require("supertest");
const app = require("./index");

it("should create a new meetup successfully", async () => {
  const response = await request(app).post("/meetups").send({
    name: "Test Meetup",
    description: "This is a test meetup",
    location: "Test Location",
    date: "2022-01-01",
    time: "12:00 PM",
  });
  expect(response.status).toBe(201);
  expect(response.body.name).toBe("Test Meetup");
});

// Tests that all meetups can be retrieved successfully
it("should retrieve all meetups successfully", async () => {
  const response = await request(app).get("/meetups");
  expect(response.status).toBe(200);
  expect(response.body.length).toBeGreaterThan(0);
});

