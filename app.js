const express = require("express");
const Datastore = require("nedb");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`starting server at ${port}`);
});
app.use(express.static("botanical_encounter"));
app.use(express.json({ limit: "1mb" }));

const database = new Datastore("database.db");
database.loadDatabase();

app.post("/location", (request, response) => {
  const location = request.body;
  response.json({
    status: "success",
    latitude: location.lat,
    longitude: location.lng,
  });
});

app.post("/submission", (request, response) => {
  const submission = request.body;
  const timestamp = Date.now();
  submission.timestamp = timestamp;
  submission.filename = timestamp + ".png";
  submission.filepath = "botanical_encounter/img_contribution/";
  database.insert(submission);
  response.json({ status: "successfully submitted" });

  //Jerome Richalot https://github.com/CodingTrain/Intro-to-Data-APIs-JS/issues/35
  const base64Data = submission.image.replace(/^data:image\/\w+;base64,/, "");
  fs.writeFile(
    submission.filepath + submission.filename,
    base64Data,
    "base64",
    (error) => {
      console.log(error);
    },
    delete submission.image
  );
});

app.get("/getdata", (request, response) => {
  database.find({}, (err, contributions) => {
    if (err) {
      response.end();
      return;
    } else {
      response.json(contributions);
    }
  });
});
