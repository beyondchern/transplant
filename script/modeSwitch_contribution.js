function contributionGalleryView() {
  document.getElementById('list_contribution').style.display = "flex";
  document.getElementById('map_contribution').style.display = "none";
}

function contributionMapView() {
  document.getElementById('map_contribution').style.display = "block";
  document.getElementById('list_contribution').style.display = "none";
  contributionMap.invalidateSize();
  recenter();
}

function recenter(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position)=>{
      contributionMap.setView([position.coords.latitude, position.coords.longitude],2);
    });
  } else {
    document.write("Sorry! Your browser doesn't support geolocating :(")
  }
}
