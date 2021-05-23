function contribution_on() {
  document.getElementById("contributionOverlay").style.display = "block";
  //document.getElementById("body_list_contribution").style.overflow = "hidden";
}
function contribution_off() {
  document.getElementById("contributionOverlay").style.display = "none";
  //document.getElementById("body_list_contribution").style.overflow = "scroll";
}

function adding_form_on() {
  document.getElementById("addFormOverlay").style.display = "block";
  //document.getElementById("body_list_contribution").style.overflow = "hidden";
}
function adding_form_preview() {
  preview();
  document.getElementById("previewOverlay").style.display = "block";
  document.getElementById("addingForm").style.visibility = "hidden";
  //document.getElementById("body_list_contribution").style.overflow = "hidden";
}

function adding_form_off() {
  document.getElementById("addFormOverlay").style.display = "none";
  //document.getElementById("body_list_contribution").style.overflow = "hidden";
}

function previewOff() {
  document.getElementById("previewOverlay").style.display = "none";
  document.getElementById("addingForm").style.visibility = "visible";
}
