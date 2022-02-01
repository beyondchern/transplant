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

///--- Div Icon---///
let userIcon = L.divIcon({
  html: '<div class="map-label"><div class="map-label-round"></div></div>',
  className: "coordinates",
});

let userDropIcon = L.divIcon({
  html: '<div class="drop-label-content"></div>',
  className: "coordinates",
});

///--- User Location Marker---///
let userMarker = L.marker([lat, lng], {
  icon: userDropIcon,
  iconAnchor: [lat, lng], // point of the icon which will correspond to marker's location
  popupAnchor: [lat, lng], // point from which the popup should open relative to the iconAnchor
  draggable: true,
}).addTo(map);

let welcomePopUp = L.popup()
  .setLatLng([lat, lng])
  .setContent('<div data-key="welcome_pop_up" style="width:300px"></div>')
  .openOn(map);

///---set to initial view---///
putView();
function putView() {
  putViewLat = getQueryStringValue("lat");
  putViewLng = getQueryStringValue("lng");
  putViewZoom = getQueryStringValue("zoom");
  if (putViewLat && putViewLng && putViewZoom) {
    map.setView([putViewLat, putViewLng], putViewZoom);
    welcomePopUp.setLatLng([putViewLat, putViewLng]);

    if (navigator.geolocation) {
      map.locate().on("locationfound", (e) => {
        userMarker.setLatLng([e.latitude, e.longitude]).addTo(map);
      });
    }
  } else if (navigator.geolocation) {
    map.locate({ setView: true, zoom: 16 }).on("locationfound", (e) => {
      userMarker.setLatLng([e.latitude, e.longitude]).addTo(map);
      welcomePopUp.setLatLng([e.latitude, e.longitude]);
    });
  }
}

///---User drop pins---///
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
