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

        contributionImage.src = `../img_contribution/${item_.filename}`;
        contributionPlantName.innerHTML = `<h1>${item_.plantName}</h1>`;
        contributionScientificName.innerHTML = `<i>${item_.scientificName}</i>`;
        contributionAuthor.textContent = `By ${item_.author}`;
        contributionStory.textContent = `${item_.story} `;
        contributionUrl.href = `https://botanical-encounter.herokuapp.com/pages/map.html?lat=${item_.location.lat}&lng=${item_.location.lng}&zoom=12`;

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
        contributionUrl.setAttribute("class", "contribution__Url");

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
          if (navigator.share) {
            navigator
              .share({
                title: "Botanical Encounter",
                text: document.getElementById("contributionStory").textContent,
                url: "https://botanical-encounter.herokuapp.com/pages/map.html?lat=24.138373019941636&lng=120.66393613815309&zoom=12",
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

            shareOnFacebook.href = `https://www.facebook.com/sharer.php?u=https://botanical-encounter.herokuapp.com/pages/map.html?lat=${item_.location.lat}%26lng=${item_.location.lng}%26zoom=12`;
            shareOnFacebook.setAttribute("target", "_blank");
            shareOnFacebook.textContent = "Facebook";
            shareLink.textContent = `https://botanical-encounter.herokuapp.com/pages/map.html?lat=${item_.location.lat}&lng=${item_.location.lng}&zoom=12`;
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
