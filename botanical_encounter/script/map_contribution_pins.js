var contributionPins = new L.FeatureGroup();
map.addLayer(contributionPins);

var drawControl = new L.Control.Draw({
  draw: {
    circle: false,
    marker: true,
    polyline: false,
    polygon: false,
    rectangle: false,
    circlemarker: false,
  },
  edit: {
    featureGroup: contributionPins,
  },
}).addTo(map);

// Initialise the draw control and pass it the FeatureGroup of editable layers
map.addControl(drawControl);

let coords = {};
map.on("draw:created", (e) => {
  coords = e.layer._latlng;
  console.log(coords);
  let tempMarker = contributionPins.addLayer(e.layer);
  fetch("/location", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(coords),
  })
    .then((response) => {
      return response.json();
    })
    .then((location) => {
      console.log(location);
    });

  adding_form_on();
});
