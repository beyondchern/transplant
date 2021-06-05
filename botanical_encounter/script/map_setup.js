let lat = 50.9795;
let lon = 11.3313;
let bounds = new L.LatLngBounds(new L.LatLng(-85, -215), new L.LatLng(85, 215));

let map = L.map("map", {
  zIndex: 2,
  minZoom: 2,
  zoomControl: false,
  maxBounds: bounds,
  maxBoundsViscosity: 0.5,
}).setView([lat, lon], 3);

let attribution = "OpenStreetMap";
let tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
let tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);

let userMarker = L.marker([lat, lon], { draggable: true })
  .addTo(map)
  .bindPopup(
    "<p><h1>Welcome to the map of botanical encounters!</h1><br>Click a photo to see its story.<br>Or, drop this pin to where your plant story happened and start sharing yours :)</p>"
  )
  .openPopup();

let coords = {};
userMarker.on("dragend", (e) => {
  coords = userMarker.getLatLng();
  userMarker._popup.setContent(
    '<p>"Start with uploading your art!"</p><button class="button" id="uploadPhotoButton">Upload a photo</button>'
  );
  userMarker.openPopup();

  document.getElementById("uploadPhotoButton").onclick = function () {
    cropImgOverlay_on();
    uploadPhoto_on();
    //cancelUploadPhotoButton_on();
  };
});

if (navigator.geolocation) {
  console.log("geolocation available");
  navigator.geolocation.getCurrentPosition(async (position) => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    console.log(lat, lon);
    map.setView([lat, lon], 3);
    userMarker.setLatLng([lat, lon]);
  });
} else {
  console.log("Sorry! Your browser donsn't support geolocate.");
}
