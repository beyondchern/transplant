function appendToRoutes(item) {
  let j = item.journalNumber;
  if (j) {
    if (routePoints[j] === undefined) {
      routePoints[j] = [];
    }
    routePoints[j].push([item.location.lat, item.location.lng]);
    routePoints[j].journalNumber = j;
  }
}

function highlightJournal(journalNumber) {
  let previous = document.getElementById("highlight");
  if (previous) {
    previous.remove();
  }
  var style = document.createElement("style");
  style.innerHTML = `.journal-number-${journalNumber} {border: solid 4px #002F0C; stroke: #002F0C;}`;
  style.id = "highlight";
  document.head.appendChild(style);
}
