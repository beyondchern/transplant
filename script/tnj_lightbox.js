let contributions;
async function getTnjImg(journalNr) {
  const response = await fetch(
    "https://beyondchern.eu.pythonanywhere.com/database"
  );
  contributions = await response.json();

  let imgLink = [];
  getImgLink();
  function getImgLink() {
    for (key in contributions) {
      let item = contributions[key];
      let j = item.journalNumber;
      if (j) {
        if (imgLink[j] === undefined) {
          imgLink[j] = [];
        }
        imgLink[j].push(
          `https://beyondchern.eu.pythonanywhere.com/static/images/${item.image}`
        );
      }
    }
    console.log(imgLink);
    SimpleLightbox.open({
      items: imgLink[journalNr],
    });
  }
}
