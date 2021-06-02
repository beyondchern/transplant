let context = canvas.getContext("2d");

function startup() {
  width = 600; // We will scale the photo width to this
  height = 0; // This will be computed based on the input stream
  streaming = false;

  video = document.getElementById("video");

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

  clearphoto();
}

function clearphoto() {
  context.fillStyle = "#AAA";
  context.fillRect(0, 0, canvas.width, canvas.height);

  //photoData = canvas.toDataURL();
}

function takepicture() {
  if (width && height) {
    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);
    cropCanvas();
  } else {
    clearphoto();
  }
}
