getData();
async function getData() {
  const response = await fetch(
    "http://beyondchern.eu.pythonanywhere.com/database"
  );
  let contributions = await response.json();
  console.log("data:");
  console.log(contributions);

  let markers = L.markerClusterGroup({ showCoverageOnHover: false });

  putMarker();
  function putMarker() {
    for (key in contributions) {
      let item = contributions[key];
      let plantIcon = L.divIcon({
        html: `<div classname="map-label"><div style="background-image: url(http://beyondchern.eu.pythonanywhere.com/static/images/${item.image});background-size: 90px 120px;height:120px;width:90px" class="map-label-content"></div><div class="map-label-arrow"></div></div>`,
        className: "dummy",
      });

      /*
      let plantIcon = L.icon({
        iconUrl: `../img_contribution/${item.filename}`,
        iconSize: [90, 120],
      });
      */
      /* contributions in overlays*/
      let marker = L.marker([item.location.lat, item.location.lng], {
        icon: plantIcon,
      });
      //.addTo(map)
      markers.addLayer(marker);
      marker.on("click", markerClick);

      function markerClick() {
        const contributionImage = document.createElement("img");
        const contributionInfo = document.createElement("ul");
        const contributionPlantName = document.createElement("li");
        const contributionScientificName = document.createElement("li");
        const contributionAuthor = document.createElement("li");
        const contributionStory = document.createElement("li");
        const contributionUrl = document.createElement("a");

        contributionImage.src = `http://beyondchern.eu.pythonanywhere.com/static/images/${item.image}`;
        contributionPlantName.innerHTML = `<h1>${item.plantName}</h1>`;
        contributionScientificName.innerHTML = `<i>${item.scientificName}</i>`;
        contributionAuthor.textContent = `By ${item.author}`;
        contributionStory.textContent = `${item.story} `;
        contributionUrl.href = `https://botanical-encounter.herokuapp.com/pages/map.html?lat=${item.location.lat}&lng=${item.location.lng}&zoom=12`;

        contributionImage.setAttribute("class", "contribition__image");
        contributionInfo.setAttribute("class", "contribution__info");
        contributionPlantName.setAttribute("class", "contribution__plant_name");
        contributionScientificName.setAttribute(
          "class",
          "contribution__scientific_name"
        );
        contributionAuthor.setAttribute("class", "contribution__author");
        contributionStory.setAttribute("class", "contribution__story");
        contributionStory.setAttribute("id", "contributionStory");
        contributionUrl.setAttribute("id", "contributionUrl");

        contributionInfo.append(
          contributionPlantName,
          contributionScientificName,
          contributionAuthor,
          contributionStory,
          contributionUrl
        );
        document
          .getElementById("contributedContent")
          .append(contributionImage, contributionInfo);

        //share button
        shareButton.onclick = (element) => {
          console.log(contributionUrl.href);
          if (navigator.share) {
            navigator
              .share({
                title: "A botanical encounter",
                text: "Check out this beautiful story on Map of Botanical Encounter",
                url: contributionUrl.href,
              })
              .then(() => {
                console.log("Thanks for sharing!");
              })
              .catch(console.error);
          } else {
            //Share dialog
            const shareOnFacebook = document.createElement("a");
            const shareViaEmail = document.createElement("a");
            const shareLink = document.createElement("div");

            shareOnFacebook.href = `https://www.facebook.com/sharer.php?u=https://botanical-encounter.herokuapp.com/pages/map.html?lat=${item.location.lat}%26lng=${item.location.lng}%26zoom=12`;
            shareOnFacebook.setAttribute("target", "_blank");
            shareOnFacebook.textContent = "Facebook";
            shareLink.textContent = `https://botanical-encounter.herokuapp.com/pages/map.html?lat=${item.location.lat}&lng=${item.location.lng}&zoom=12`;
            shareLink.setAttribute("class", "pen-url");
            shareLink.setAttribute("id", "penUrl");

            document.getElementById("shareTargets").prepend(shareOnFacebook);
            document.getElementById("shareLink").prepend(shareLink);

            shareDialog.classList.add("is-open");
          }
        };

        closeShareDialogButton.onclick = (event) => {
          shareDialog.classList.remove("is-open");
          shareTargets.innerHTML = "";
          shareLink.textContent = "";
        };

        contribution_on();
      }
    }
  }
  map.addLayer(markers);
}

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
