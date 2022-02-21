function displayExhib(exhib) {
  const exhibImage = document.createElement("img");
  const exhibInfo = document.createElement("ul");
  const exhibTitle = document.createElement("li");
  const exhibDateAndLocation = document.createElement("li");
  const exhibLink = document.createElement("a");
  const exhibDescription = document.createElement("li");
  const exhibOnMap = document.createElement("a");

  exhibImage.src = `../img/past_exhibitions/${exhib}.png`;
  exhibTitle.innerHTML = `<h1>${exhibitions[exhib].exhib_title}</h1>`;
  exhibDateAndLocation.innerHTML = `${exhibitions[exhib]["exhib_date"]} at ${exhibitions[exhib]["exhib_location"]}`;
  exhibLink.innerHTML = `<i>Visit the project's website >></i>`;
  exhibDescription.innerHTML = `${exhibitions[exhib]["exhib_description"]}`;
  exhibOnMap.innerHTML = `<li><small>(Check it out on the map →)</small></li>`;

  exhibLink.setAttribute("href", `${exhibitions[exhib]["exhib_link"]}`);
  exhibLink.setAttribute("target", "_blank");
  exhibOnMap.setAttribute(
    "href",
    `./map.html?lat=${exhibitions[exhib]["exhib_lat"]}&lng=${exhibitions[exhib]["exhib_lng"]}&zoom=20`
  );
  exhibOnMap.setAttribute("target", "_blank");

  exhibInfo.setAttribute("class", "exhibInfo");
  exhibDescription.setAttribute("class", "exhibDescription");

  exhibInfo.append(
    exhibTitle,
    exhibDateAndLocation,
    exhibLink,
    exhibDescription,
    exhibOnMap
  );

  document.getElementById("exhibitionContent").innerHTML = "";
  document.getElementById("exhibitionContent").append(exhibImage, exhibInfo);

  exhibOn();
}
