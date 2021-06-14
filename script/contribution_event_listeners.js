//Contribution Overlay
document.getElementById("closeContributionOverlay").onclick = function () {
  document.getElementById("contributedContent").innerHTML = "";
  shareDialog.classList.remove("is-open");

  contribution_off();
};

const copyLinkButton = document.getElementById("copyLinkButton");
copyLinkButton.onclick = () => {
  /* Get the text field */
  const copyText = document.getElementById("penUrl").textContent;
  const cb = navigator.clipboard;
  cb.writeText(copyText).then(() =>
    alert("The link is successfully copied to your clipboard!")
  );
};

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

document.getElementById("closeCropImgOverlay").onclick = cropImgOverlay_off;
document.getElementById("closeAddingFormOverlay").onclick = adding_form_off;
document.getElementById("closePreviewOverlay").onclick = previewOff;
