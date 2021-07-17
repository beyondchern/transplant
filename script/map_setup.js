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

/////--- Div Icon---/////
let userIcon = L.divIcon({
  html: '<div class="map-label"><div style="width:300px" class="user-label-content" data-key="welcome_pop_up"></div><div class="map-label-arrow"></div></div>',
  className: "coordinates",
});

let userDropIcon = L.divIcon({
  html: '<div class="drop-label-content"></div>',
  className: "coordinates",
});

/////--- Div Icon---/////

let userMarker = L.marker([lat, lng], {
  icon: userIcon,
  iconSize: [300, 51],
  iconAnchor: [lat, lng], // point of the icon which will correspond to marker's location
  popupAnchor: [lat, lng], // point from which the popup should open relative to the iconAnchor
  draggable: true,
}).addTo(map);

putView();
function putView() {
  lat = getQueryStringValue("lat");
  lng = getQueryStringValue("lng");
  zoom = getQueryStringValue("zoom");
  if (lat && lng && zoom) {
    map.setView([lat, lng], zoom);
    userMarker.setLatLng([lat, lng]);
  } else if (navigator.geolocation) {
    map.locate({ setView: true, zoom: 16 }).on("locationfound", (e) => {
      userMarker.setLatLng([e.latitude, e.longitude]);
    });

    /*
    console.log("geolocation available");
    setUserLocation();
    async function setUserLocation() {
      const getUserLocation =
        navigator.geolocation.getCurrentPosition(position);
      lat = getUserLocation.coords.latitude;
      lng = getUserLocation.coords.longitude;
      zoom = 12;
      console.log(lat, lng);
    */
  }
}

let coords = {};
map.on("click", (e) => {
  coords = e.latlng;
  userMarker.setLatLng(coords);
  userMarker.setIcon(userDropIcon);
  userMarker
    .bindPopup(
      '<div class="map__popup_2">' + languages[lang]["upload_pop_up"] + "</div>"
    )
    .openPopup();

  document.getElementById("uploadPhotoButton").onclick = function () {
    cropImgOverlay_on();
    uploadPhoto_on();
  };
});

userMarker.on("dragend", (e) => {
  coords = userMarker.getLatLng();
  userMarker.setIcon(userDropIcon);
  userMarker
    .bindPopup(
      '<div class="map__popup_2">' + languages[lang]["upload_pop_up"] + "</div>"
    )
    .openPopup();

  document.getElementById("uploadPhotoButton").onclick = function () {
    cropImgOverlay_on();
    uploadPhoto_on();
  };
});
