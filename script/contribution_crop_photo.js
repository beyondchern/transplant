let photoData;
let cropper;

function cropCanvas() {
  const option = {
    viewMode: 1,
    aspectRatio: 3 / 4,
    dragMode: "move",
    guides: false,
    center: false,
    cropBoxMovable: false,
    cropBoxResizable: false,
  };
  if (cropper) {
    cropper.destroy();
  }
  cropper = new Cropper(canvas, option);

  const inputPhoto = document.getElementById("inputPhoto");
  document.getElementById("cropImgButton").onclick = function () {
    // Get a string base 64 data url
    let cropped = cropper.getCroppedCanvas({ width: 600, height: 800 });
    photoData = cropped.toDataURL("image/jpeg", 0.85);
    inputPhoto.setAttribute("src", photoData);

    cropImgOverlay_off();
    adding_form_on();
  };
}
