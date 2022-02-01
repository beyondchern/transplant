getData();
let contributions;
let routePoints = [];
async function getData() {
  const response = await fetch(
    "https://beyondchern.eu.pythonanywhere.com/database"
  );
  contributions = await response.json();

  markers = L.markerClusterGroup({
    showCoverageOnHover: false,
    disableClusteringAtZoom: 10,
  });

  putMarkers();
  function putMarkers() {
    for (key in contributions) {
      let item = contributions[key];
      let jn = item.journalNumber ? item.journalNumber : "none";
      let plantIcon = L.divIcon({
        html: `
        <div class="map-label">
          <div style="
            background-image: url(https://beyondchern.eu.pythonanywhere.com/static/images/${item.image});
            background-size: 90px 120px;
            height:120px;
            width:90px"
            class="map-label-content journal-number-${jn}"
          ></div>
          <div class="map-label-arrow"></div>
        </div>`,
        className: "dummy",
      });

      /*contributions' markers and contribution overlay*/
      let marker = L.marker([item.location.lat, item.location.lng], {
        icon: plantIcon,
      });

      markers.addLayer(marker);
      marker.on("click", markerClick);

      function markerClick() {
        if (jn != "none") {
          highlightJournal(jn);
        }

        const contributionImage = document.createElement("img");
        const contributionInfo = document.createElement("ul");
        const contributionPlantName = document.createElement("li");
        const contributionScientificName = document.createElement("li");
        const contributionAuthor = document.createElement("li");
        const contributionStory = document.createElement("li");
        const contributionUrl = document.createElement("a");

        contributionImage.src = `https://beyondchern.eu.pythonanywhere.com/static/images/${item.image}`;
        contributionPlantName.innerHTML = `<h1>${item.plantName}</h1>`;
        contributionScientificName.innerHTML = `<i>${item.scientificName}</i>`;
        contributionAuthor.textContent = `By ${item.author}`;
        contributionStory.innerHTML = `${item.story} `;
        contributionUrl.href = `https://botanical-encounter.com/pages/map.html?lat=${item.location.lat}&lng=${item.location.lng}&zoom=12`;

        contributionImage.setAttribute("class", "contribution__image");
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
        document.getElementById("contributedContent").innerHTML = "";
        document
          .getElementById("contributedContent")
          .append(contributionImage, contributionInfo);

        //share button
        shareButton.onclick = (element) => {
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
            const shareLink = document.createElement("div");
            shareLink.textContent = `https://botanical-encounter.com/pages/map.html?lat=${item.location.lat}&lng=${item.location.lng}&zoom=15`;
            shareLink.setAttribute("class", "pen-url");
            shareLink.setAttribute("id", "penUrl");
            document.getElementById("shareLinkWrap").prepend(shareLink);

            shareDialog.classList.add("is-open");

            closeShareDialogButton.onclick = (event) => {
              shareDialog.classList.remove("is-open");
              shareLink.textContent = "";
            };
          }
        };

        //print button
        if (item.reproductionPermission == true) {
          document.getElementById("printButton").style.display = "block";
        } else {
          document.getElementById("printButton").style.display = "none";
        }

        contribution_on();
      }
      appendToRoutes(item);
    }
    routePoints.forEach((line) => {
      let polyLine = L.polyline(line, {
        dashArray: "6",
        color: "#7b3016",
        opacity: 0.5,
        weight: 3,
        className: `journal-number-${line.journalNumber}`,
      });

      polyLine
        .on("click", function () {
          highlightJournal(line.journalNumber);
        })
        .addTo(map);
      highlightRoute();
    });
  }
  makeExhibitionMarkers();
  map.addLayer(markers);
}
