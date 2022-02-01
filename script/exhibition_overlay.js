function displayExhib(exhib) {
  const exhibImage = document.createElement("img");
  const exhibInfo = document.createElement("ul");
  const exhibTitle = document.createElement("li");
  const exhibDateAndLocation = document.createElement("li");
  const exhibLink = document.createElement("a");
  const exhibDescription = document.createElement("li");

  exhibImage.src = `../img/past_exhibitions/${exhib}.png`;
  exhibTitle.innerHTML = `<h1>${exhibitions[exhib].exhib_title}</h1>`;
  exhibDateAndLocation.innerHTML = `${exhibitions[exhib]["exhib_date"]} at ${exhibitions[exhib]["exhib_location"]}`;
  exhibLink.innerHTML = `Visit the project's website >>`;
  exhibDescription.innerHTML = `${exhibitions[exhib]["exhib_description"]}`;

  exhibLink.setAttribute("href", `${exhibitions[exhib]["exhib_link"]}`);
  exhibLink.setAttribute("target", "_blank");

  exhibInfo.setAttribute("class", "exhibInfo");
  exhibDescription.setAttribute("class", "exhibDescription");

  exhibInfo.append(
    exhibTitle,
    exhibDateAndLocation,
    exhibLink,
    exhibDescription
  );

  document.getElementById("exhibitionContent").innerHTML = "";
  document.getElementById("exhibitionContent").append(exhibImage, exhibInfo);

  exhibOn();
}
