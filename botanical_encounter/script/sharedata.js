const shareData = {
  title: "Botanical Encounter",
  text: "Botanical Encounter is a collaborative mapping project inspired by a 16th century naturalist book Codex Kentmanus",
  url: "https://botanical-encounter.herokuapp.com/pages/map.html",
};

const btn = document.getElementById("shareBtton");

// Must be triggered some kind of "user activation"
btn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
    console.log(shareData);
  } catch (err) {
    console.log("Error: " + err);
  }
});
