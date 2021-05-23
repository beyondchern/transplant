const { request } = require("express");
const express = require("express");
const Datastore = require("nedb");

const app = express();
app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static("botanical_encounter"));
app.use(express.json({ limit: "1mb" }));

const database = new Datastore("database.db");
database.loadDatabase();

app.post("/location", (request, response) => {
  const location = request.body;
  database.insert(location);
  response.json({
    status: "success",
    latitude: location.lat,
    longitude: location.lng,
  });
});

app.post("/submition", (request, response) => {
  const submition = request.body;
  database.insert(submition);
  response.json({});
});
