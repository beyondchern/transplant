function galleryView() {
  document.getElementById('plant_list').style.display = "flex";
  document.getElementById('map_plant_list').style.display = "none";
}

function map_view() {
  document.getElementById('map_plant_list').style.display = "block";
  document.getElementById('plant_list').style.display = "none";
  plantMap.invalidateSize();
  recenter();
}

function recenter(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position)=>{
      plantMap.setView([position.coords.latitude, position.coords.longitude],2);
    });
  } else {
    document.write("Sorry! Your browser doesn't support geolocating :(")
  }
}
