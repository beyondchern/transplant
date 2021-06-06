let lat = 50.9795;
let lng = 11.3313;
let zoom = 3;
let bounds = new L.LatLngBounds(new L.LatLng(-85, -215), new L.LatLng(85, 215));
let map = L.map("map", {
  zIndex: 2,
  minZoom: 2,
  zoomControl: false,
  maxBounds: bounds,
  maxBoundsViscosity: 0.5,
}).setView([lat, lng], zoom);

let attribution = "OpenStreetMap";
let tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
let tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);

let userMarker = L.marker([lat, lng], { draggable: true }).addTo(map);

setView();
function setView() {
  if (window.location.search) {
    function getQueryStringValue(key) {
      return decodeURIComponent(
        window.location.search.replace(
          new RegExp(
            "^(?:.*[&\\?]" +
              encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") +
              "(?:\\=([^&]*))?)?.*$",
            "i"
          ),
          "$1"
        )
      );
    }
    lat = getQueryStringValue("lat");
    lng = getQueryStringValue("lng");
    zoom = getQueryStringValue("zoom");
  } else if (navigator.geolocation) {
    console.log("geolocation available");
    setUserLocation();
    async function setUserLocation() {
      const getUserLocation =
        navigator.geolocation.getCurrentPosition(position);
      lat = position.coords.latitude;
      lng = position.coords.longitude;
      zoom = 12;
      console.log(lat, lng);
    }
  }
  console.log(lat, lng, zoom);
  map.setView([lat, lng], zoom);
  userMarker
    .setLatLng([lat, lng])
    .bindPopup(
      "<p><h1>Welcome to the map of botanical encounters!</h1><br>Click a photo to see its story.<br>Or start sharing your story by dropping this pin at where you met your plant :)</p>"
    )
    .openPopup();
}

let coords = {};
userMarker.on("dragend", (e) => {
  coords = userMarker.getLatLng();
  console.log(coords);
  userMarker._popup.setContent(
    '<p>Start with uploading your art!</p><button class="button" id="uploadPhotoButton">Upload a photo</button>'
  );
  userMarker.openPopup();

  document.getElementById("uploadPhotoButton").onclick = function () {
    cropImgOverlay_on();
    uploadPhoto_on();
    //cancelUploadPhotoButton_on();
  };
});
