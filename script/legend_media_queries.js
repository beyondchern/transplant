const mediaQuery = window.matchMedia("(max-width: 800px)");
function handleTabletChange(e) {
  if (e.matches) {
    document.getElementById("legends").onclick = function () {
      document.getElementById("legends").classList.toggle("active");
    };
  }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);
