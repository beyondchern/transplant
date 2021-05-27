function startup() {
  width = 320; // We will scale the photo width to this
  height = 0; // This will be computed based on the input stream
  streaming = false;

  video = document.getElementById("video");
  canvas = document.getElementById("canvas");
  photo = document.getElementById("inputPhoto");
  buttonTakePhoto = document.getElementById("button_take_photo");

  // access video stream from webcam
  navigator.mediaDevices
    .getUserMedia({
      video: { facingMode: "environment" },
      audio: false,
    })
    // on success, stream it in video tag
    .then(function (stream) {
      video.srcObject = stream;
      video.play();
    })
    .catch(function (err) {
      console.log("An error occurred: " + err);
    });

  video.addEventListener(
    "canplay",
    function (ev) {
      if (!streaming) {
        height = video.videoHeight / (video.videoWidth / width);

        if (isNaN(height)) {
          height = width / (4 / 3);
        }

        video.setAttribute("width", width);
        video.setAttribute("height", height);
        canvas.setAttribute("width", width);
        canvas.setAttribute("height", height);
        streaming = true;
      }
    },
    false
  );

  buttonTakePhoto.addEventListener(
    "click",
    function (ev) {
      takepicture();
      ev.preventDefault();
    },
    false
  );

  clearphoto();
}

let photoData;
function clearphoto() {
  var context = canvas.getContext("2d");
  context.fillStyle = "#AAA";
  context.fillRect(0, 0, canvas.width, canvas.height);

  photoData = canvas.toDataURL();
  photo.setAttribute("src", photoData);
}

function takepicture() {
  var context = canvas.getContext("2d");
  if (width && height) {
    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);

    photoData = canvas.toDataURL();
    console.log(photoData);
    photo.setAttribute("src", photoData);
  } else {
    clearphoto();
  }
  adding_form_on();
}
