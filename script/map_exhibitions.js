function makeExhibitionMarkers() {
  for (let exhib in exhibitions) {
    let exhibDetails = exhibitions[exhib];
    let exhibitionIcon = L.divIcon({
      html: `
  <div class="map-label">
    <div style=" 
    background-image:url(../img/past_exhibitions/markers/marker_${exhib}.png);"
    class="exhibitionIcon"></div>
    <div class="exhib-label-arrow"></div>
  </div>`,
      className: "dummy",
    });

    let exhibitionMarker = L.marker(
      [exhibDetails.exhib_lat, exhibDetails.exhib_lng],
      {
        icon: exhibitionIcon,
      }
    ).on("click", () => {
      displayExhib(exhib);
    });
    markers.addLayer(exhibitionMarker);
  }
}
