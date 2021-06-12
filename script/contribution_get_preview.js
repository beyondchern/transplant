let submission = {};

function preview() {
  submission.image = photoData;
  submission.plantName = document.getElementById("inputPlantName").value;
  submission.scientificName = document.getElementById(
    "inputScientificName"
  ).value;
  submission.author = document.getElementById("inputAuthor").value;
  submission.story = document.getElementById("inputStory").value;

  document.getElementById("previewImage").setAttribute("src", photoData);
  document.getElementById("previewPlantName").innerHTML = submission.plantName;
  document.getElementById("PreviewScientificName").innerHTML =
    submission.scientificName;
  document.getElementById("previewAuthor").innerHTML = submission.author;
  document.getElementById("previewStory").innerHTML = submission.story;

  submission.location = coords;
}
