var plantIcon = L.icon({
    iconUrl:'../img_contribution/date.jpg',
    iconSize: [95, 95]
  })
var marker = L.marker([38.9637, 35.2433], {icon:plantIcon}).addTo(contributionMap).on('click', contribution_on);
