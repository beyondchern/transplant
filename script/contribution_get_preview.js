let submission = {};

function preview() {
  submission.image = photoData;
  submission.plantName = document.getElementById("inputPlantName").value;
  submission.scientificName = document.getElementById(
    "inputScientificName"
  ).value;
  submission.author = document.getElementById("inputAuthor").value;
  let story_ = document.getElementById("inputStory").value;
  submission.story = story_.replace("\n", "<br>");
  submission.email = document.getElementById("inputEmail").value;
  submission.journalNumber =
    document.getElementById("inputJournalNumber").value;

  document.getElementById("previewImage").setAttribute("src", photoData);
  document.getElementById("previewPlantName").innerHTML = submission.plantName;
  document.getElementById("PreviewScientificName").innerHTML =
    submission.scientificName;
  document.getElementById("previewAuthor").innerHTML = submission.author;
  document.getElementById("previewStory").innerHTML = submission.story;
  document.getElementById("previewEmail").innerHTML = submission.email;
  document.getElementById("previewJournalNumber").innerHTML =
    submission.journalNumber;

  submission.location = coords;
}
