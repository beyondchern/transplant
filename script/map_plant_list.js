let plantMap = L.map('map_plant_list',{
    zIndex:2,
    minZoom: 2,
    zoomControl: false
}).setView([50.9795, 11.3313],2);

let attribution = 'OpenStreetMap';
let tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
let tiles = L.tileLayer(tileUrl, {attribution});
tiles.addTo(plantMap);
