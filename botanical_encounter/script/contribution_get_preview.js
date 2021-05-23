let submition = {};

function preview() {
  submition.plantName = document.getElementById("inputPlantName").value;
  submition.scientificName = document.getElementById(
    "inputScientificName"
  ).value;
  submition.author = document.getElementById("inputAuthor").value;
  submition.story = document.getElementById("inputStory").value;

  document.getElementById("previewPlantName").innerHTML = submition.plantName;
  document.getElementById("PreviewScientificName").innerHTML =
    submition.scientificName;
  document.getElementById("previewAuthor").innerHTML = submition.author;
  document.getElementById("previewStory").innerHTML = submition.story;

  previewMap.setView([coords.lat, coords.lng]);
}
// input location: coords;
