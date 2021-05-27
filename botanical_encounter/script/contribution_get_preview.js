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

  let previewMap;
  if (previewMap == null) {
    previewMap = new L.map("previewMap", {
      zIndex: 2,
      minZoom: 2,
      zoomControl: false,
    }).setView([coords.lat, coords.lng], 12);
  }

  let attribution = "OpenStreetMap";
  let tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  let tiles = L.tileLayer(tileUrl, { attribution });
  tiles.addTo(previewMap);

  L.marker([coords.lat, coords.lng]).addTo(previewMap);
}
// input location: coords;
