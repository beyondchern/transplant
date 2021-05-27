getData();
async function getData() {
  const response = await fetch("/getdata");
  let contributions = await response.json();
  console.log("data:");
  console.log(contributions);

  putMarker();
  function putMarker() {
    for (item of contributions) {
      let item_ = item;
      let plantIcon = L.icon({
        iconUrl: `../img_contribution/${item.filename}`,
        iconSize: [95, 95],
      });
      L.marker([item.location.lat, item.location.lng], {
        icon: plantIcon,
      })
        .addTo(map)
        .on("click", onClick);
      function onClick() {
        const contributionImage = document.createElement("img");
        const contributionInfo = document.createElement("ul");
        const contributionPlantName = document.createElement("li");
        const contributionScientificName = document.createElement("i");
        const contributionAuthor = document.createElement("li");
        const contributionStory = document.createElement("li");

        contributionImage.src = `../img_contribution/${item_.filename}`;
        contributionPlantName.textContent = `${item_.plantName}`;
        contributionScientificName.textContent = `${item_.scientificName}`;
        contributionAuthor.textContent = `${item_.author}`;
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
          .getElementById("contributionWrapper")
          .append(contributionImage, contributionInfo);

        contribution_on();
      }
    }
  }
}
