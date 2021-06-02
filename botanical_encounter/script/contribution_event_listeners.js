//On Map
/*
document
  .getElementById("contributionOverlay")
  .addEventListener("click", contribution_off);

  Buttons in pup-ups are defined at map_contribution_pins.js
  They are "takePhotoButton" and "uploadPhotoButton"
  */

//on Take Photo Overlay
const takePhotoButton_ = document.getElementById("takePhotoButton_");
takePhotoButton_.addEventListener(
  "click",
  function (ev) {
    takepicture();
    ev.preventDefault();
  },
  false
);
takePhotoButton_.addEventListener("click", takePhotoOverlay_off);
takePhotoButton_.addEventListener("click", cropImgOverlay_on);
takePhotoButton_.addEventListener("click", retakePhotoButton_on);

const cancelTakePhotoButton = document.getElementById("cancelTakePhotoButton");
cancelTakePhotoButton.addEventListener("click", () => {
  takePhotoOverlay_off();
  retakePhotoButton_off();
});

const retakePhotoButton = document.getElementById("retakePhotoButton");
retakePhotoButton.addEventListener("click", refreshCanvas);
retakePhotoButton.addEventListener("click", cropImgOverlay_off);
retakePhotoButton.addEventListener("click", takePhotoOverlay_on);
retakePhotoButton.addEventListener("click", startup);

//on Add-Form
document.getElementById("previewButton").addEventListener("click", preview);
document.getElementById("previewButton").addEventListener("click", previewOn);

document.getElementById("cancelButton").addEventListener("click", () => {
  adding_form_off();
  cropImgOverlay_on();
});

//on Preview Overlay
document.getElementById("editButton").addEventListener("click", previewOff);
document.getElementById("editButton").addEventListener("click", adding_form_on);

document.getElementById("submitButton").addEventListener("click", submit);
