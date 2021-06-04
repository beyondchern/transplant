let coords = {};

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
    circlemarker: false,
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

let marker = L.marker([lat, lon], { draggable: true })
  .addTo(map)
  .bindPopup(
    "<p><h1>Welcome to the map of botanical encounters!</h1><br>Click a photo to see its story.<br>Or, drop this pin to where your plant story happened and start sharing yours :)</p>"
  )
  .openPopup();

marker.on("dragend", (e) => {
  coords = marker.getLatLng();
  marker._popup.setContent(
    '<p>Start sharing your human-plant encounter!</p><button class="button" id="takePhotoButton">Take a photo</button><button class="button" id="uploadPhotoButton">Upload a photo</button>'
  );
  marker.openPopup();
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
