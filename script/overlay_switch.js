function contribution_on() {
  document.getElementById("contributionOverlay").style.display = "block";
  //document.getElementById("body_list_contribution").style.overflow = "hidden";
}
function contribution_off() {
  document.getElementById("contributionOverlay").style.display = "none";
  //document.getElementById("body_list_contribution").style.overflow = "scroll";
}

function uploadPhoto_on() {
  document.getElementById("fileInput").style.display = "block";
}

function uploadPhoto_off() {
  document.getElementById("fileInput").style.display = "none";
}

function cropImgOverlay_on() {
  document.getElementById("cropImgOverlay").style.display = "block";
}

function cropImgOverlay_off() {
  document.getElementById("cropImgOverlay").style.display = "none";
}

function adding_form_on() {
  document.getElementById("addFormOverlay").style.display = "block";
  //document.getElementById("body_list_contribution").style.overflow = "hidden";
}
function adding_form_off() {
  document.getElementById("addFormOverlay").style.display = "none";
  //document.getElementById("body_list_contribution").style.overflow = "hidden";
}
function previewOn() {
  document.getElementById("previewOverlay").style.display = "flex";
  //document.getElementById("body_list_contribution").style.overflow = "hidden";
}
function previewOff() {
  document.getElementById("previewOverlay").style.display = "none";
}
