//install dependencies: express and nedb
const express = require("express");
const Datastore = require("nedb");
const fs = require("fs");

const app = express();

//setting up port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`starting server at ${port}`);
});
//serving static website
app.use(express.static("botanical_encounter"));
//recieving json file
app.use(express.json({ limit: "1mb" }));

const database = new Datastore("database.db");
database.loadDatabase();

//recieving a POST request and insert it into the database
app.post("/submission", (request, response) => {
  const submission = request.body;
  const timestamp = Date.now();
  submission.timestamp = timestamp;
  submission.filename = timestamp + ".png";
  submission.filepath = "botanical_encounter/img_contribution/";
  database.insert(submission);
  response.json({ status: "successfully submitted" });

  //replace base64Data in the database to filepaths
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

//handels get request from data
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
