//On Map
document.getElementById("contributionOverlay").onclick = function () {
  document.getElementById("contributedContent").innerHTML = "";
  contribution_off();
};

/*
  Buttons in pup-ups are defined at map_contribution_pins.js
  They are "takePhotoButton" and "uploadPhotoButton"
  */

//on Take Photo Overlay
/*
const takePhotoButton_ = document.getElementById("takePhotoButton_");
takePhotoButton_.onclick = function (ev) {
  takepicture();
  vidOff();
  ev.preventDefault();
  takePhotoOverlay_off();
  cropImgOverlay_on();
  retakePhotoButton_on();
};

const cancelTakePhotoButton = document.getElementById("cancelTakePhotoButton");
cancelTakePhotoButton.onclick = function () {
  vidOff();
  takePhotoOverlay_off();
  retakePhotoButton_off();
};

const retakePhotoButton = document.getElementById("retakePhotoButton");
retakePhotoButton.onclick = function () {
  if (cropper) {
    cropper.destroy();
  }
  cropImgOverlay_off();
  takePhotoOverlay_on();
  startup();
};

document.getElementById("closeTakePhotoOverlay").onclick = function () {
  vidOff();
  takePhotoOverlay_off();
};
*/
const cancelUploadPhotoButton = document.getElementById(
  "cancelUploadPhotoButton"
);
cancelUploadPhotoButton.onclick = function () {
  if (cropper) {
    cropper.destroy();
  }
  cropImgOverlay_off();
};

//on Add-Form
document.getElementById("previewButton").onclick = function () {
  preview();
  previewOn();
  adding_form_off();
};

document.getElementById("cancelButton").onclick = function () {
  adding_form_off();
  cropImgOverlay_on();
};

//on Preview Overlay
document.getElementById("editButton").onclick = function () {
  previewOff();
  adding_form_on();
};

document.getElementById("submitButton").onclick = function () {
  previewOff();
  submit();
};

/*
document.getElementById("closeContributionOverlay").onclick = function () {
  document.getElementById("contributedContent").innerHTML = "";
  contribution_off();
};
*/

document.getElementById("closeCropImgOverlay").onclick = cropImgOverlay_off;
document.getElementById("closeAddingFormOverlay").onclick = adding_form_off;
document.getElementById("closePreviewOverlay").onclick = previewOff;
