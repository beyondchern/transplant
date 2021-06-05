getData();
async function getData() {
  const response = await fetch("/getdata");
  let contributions = await response.json();
  console.log("data:");
  console.log(contributions);

  let markers = L.markerClusterGroup({ showCoverageOnHover: false });

  putMarker();
  function putMarker() {
    for (item of contributions) {
      let item_ = item;
      let plantIcon = L.icon({
        iconUrl: `../img_contribution/${item.filename}`,
        iconSize: [90, 120],
      });

      /* contributions in pop-ups
      let popupContent = `<img src=../img_contribution/${item_.filename}>
      <ul class="contribution__info">
      <li class="contribution__plant_name">${item_.plantName}<i class="contribution__scientific_name">${item_.scientificName}</i></li>
      <li class="contribution__author">${item_.author}</li>
      <li class="contribution__story">${item_.story}</li>
      </ul>`;

      let popupOptions = {
        className: "contribution__popup",
        maxWidth: "90%",
      };

      L.marker([item.location.lat, item.location.lng], {
        icon: plantIcon,
      })
        .addTo(map)
      .bindPopup(popupContent, popupOptions);
      */

      /* contributions in overlays*/
      let marker = L.marker([item.location.lat, item.location.lng], {
        icon: plantIcon,
      });
      //.addTo(map)
      markers.addLayer(marker);
      marker.on("click", onClick);

      function onClick() {
        const contributionImage = document.createElement("img");
        const contributionInfo = document.createElement("ul");
        const contributionPlantName = document.createElement("li");
        const contributionScientificName = document.createElement("li");
        const contributionAuthor = document.createElement("li");
        const contributionStory = document.createElement("li");

        contributionImage.src = `../img_contribution/${item_.filename}`;
        contributionPlantName.innerHTML = `<h1>${item_.plantName}</h1>`;
        contributionScientificName.innerHTML = `<i>${item_.scientificName}</i>`;
        contributionAuthor.textContent = `By ${item_.author}`;
        contributionStory.textContent = `${item_.story}`;

        contributionImage.setAttribute("class", "contribition__image");
        contributionInfo.setAttribute("class", "contribution__info");
        contributionPlantName.setAttribute("class", "contribution__plant_name");
        contributionScientificName.setAttribute(
          "class",
          "contribution__scientific_name"
        );
        contributionAuthor.setAttribute("class", "contribution__author");
        contributionStory.setAttribute("class", "contribution__story");

        contributionInfo.append(
          contributionPlantName,
          contributionScientificName,
          contributionAuthor,
          contributionStory
        );
        document
          .getElementById("contributedContent")
          .append(contributionImage, contributionInfo);

        contribution_on();
      }
    }
  }
  map.addLayer(markers);

  const shareData = {
    title: `A Botanical Encounter - ${item.plantName} by ${item.author}`,
    files: `../img_contribution/${item.filename}`,
    text: `${item.story}`,
    url: "http://localhost:3000/pages/map.html",
  };

  const shareButton = document.getElementById("shareButton");

  // Must be triggered some kind of "user activation"
  shareButton.onclick = async () => {
    try {
      await navigator.share(shareData);
      console.log("shareData");
    } catch (err) {
      console.log("Error: " + err);
    }
  };
}
