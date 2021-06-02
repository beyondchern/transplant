let lat = 50.9795;
let lon = 11.3313;

let map = L.map("map", {
  zIndex: 2,
  minZoom: 3,
  zoomControl: false,
}).setView([lat, lon], 12);

let attribution = "OpenStreetMap";
let tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
let tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);

if (navigator.geolocation) {
  console.log("geolocation available");
  navigator.geolocation.getCurrentPosition(async (position) => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    console.log(lat, lon);
    map.setView([lat, lon], 12);
  });
} else {
  console.log("Sorry! Your browser donsn't support geolocate.");
}
