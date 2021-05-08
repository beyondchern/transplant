
let plantIcon = L.icon({
  iconUrl:'../img/Johannes_A_001.png',
  iconSize: [60,88]});

 L.marker([38.9573415, 35.240741], {icon:plantIcon}).addTo(plantMap).on('click', onClick);
 function onClick(){
   location.href='gallery_single_plant.html';
 }
