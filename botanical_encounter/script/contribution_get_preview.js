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

  let previewMap = L.map("previewMap", {
    zIndex: 2,
    zoom: 12,
    zoomControl: false,
  }).setView([coords.lat, coords.lng]);

  submission.locaion = coords;

  let attribution = "OpenStreetMap";
  let tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  let tiles = L.tileLayer(tileUrl, { attribution });
  tiles.addTo(previewMap);

  var ediblePin = new L.FeatureGroup();
  map.addLayer(ediblePin);

  let previewDrawControl = new L.Control.Draw({
    draw: {
      circle: false,
      marker: false,
      polyline: false,
      polygon: false,
      rectangle: false,
      circlemarker: false,
    },
    edit: {
      featureGroup: previewPin,
    },
  }).addTo(previewMap);
}
// input location: coords;
