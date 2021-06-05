/*with leaflet draw
var contributionPins = new L.FeatureGroup();
map.addLayer(contributionPins);

var drawControl = new L.Control.Draw({
  position: "bottomright",
  draw: {
    circle: false,
    polyline: false,
    polygon: false,
    rectangle: false,
    circleuserMarker: false,
    marker: {},
  },
  edit: {
    featureGroup: contributionPins,
    edit: false,
  },
}).addTo(map);

// Initialise the draw control and pass it the FeatureGroup of editable layers

map.addControl(drawControl);
map.on("draw:created", (e) => {
  //coords = e.layer._latlng;
  contributionPins
    .addLayer(e.layer)
    .bindPopup(
      '<p>Start sharing your human-plant encounter!</p><button class="button" id="takePhotoButton">Take a photo</button><button class="button" id="uploadPhotoButton">Upload a photo</button>'
    )
    .openPopup();

  document.getElementById("takePhotoButton").onclick = function () {
    takePhotoOverlay_on();
    startup();
  };

  document.getElementById("uploadPhotoButton").onclick = function () {
    cropImgOverlay_on();
    uploadPhoto_on();
    cancelUploadPhotoButton_on();
  };
});
*/

/*======draggable marker====*/

/*
<button class="button" id="takePhotoButton">Take a photo</button>
document.getElementById("takePhotoButton").onclick = function () {
  takePhotoOverlay_on();
  startup();
};
*/
