function contribution_on() {
  document.getElementById("contributionOverlay").style.display = "block";
}
function contribution_off() {
  document.getElementById("contributionOverlay").style.display = "none";
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
}
function adding_form_off() {
  document.getElementById("addFormOverlay").style.display = "none";
  tnj_expln_off();
  email_expln_off();
}

function tnj_expln_on() {
  document.getElementById("tnjExplnDialog").style.display = "block";
  document.getElementById("tnjExplnDialog").style.zIndex = "3";
}

function tnj_expln_off() {
  document.getElementById("tnjExplnDialog").style.display = "none";
}

function email_expln_on() {
  document.getElementById("emailExplnDialog").style.display = "block";
  document.getElementById("emailExplnDialog").style.zIndex = "2";
}

function email_expln_off() {
  document.getElementById("emailExplnDialog").style.display = "none";
}

function previewOn() {
  document.getElementById("previewOverlay").style.display = "flex";
  tnj_expln_off();
}
function previewOff() {
  document.getElementById("previewOverlay").style.display = "none";
}

//On Exhibition Page
function exhibOn() {
  document.getElementById("exhibitionOverlay").style.display = "block";
}
function exhibOff() {
  document.getElementById("exhibitionOverlay").style.display = "none";
}
