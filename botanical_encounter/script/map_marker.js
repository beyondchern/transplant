var plantIcon = L.icon({
  iconUrl: "../img_contribution/date.jpg",
  iconSize: [95, 95],
});
let marker = L.marker([50.9795, 11.3313], { icon: plantIcon })
  .addTo(map)
  .on("click", contribution_on);
