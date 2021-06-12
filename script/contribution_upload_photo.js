//Previewing Image Before File Upload - JavaScript Tutorial https://www.youtube.com/watch?v=VElnT8EoEEM
const inputFile = document.getElementById("fileInput");

inputFile.addEventListener("change", function () {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      let img = new Image();
      img.onload = function () {
        context.canvas.height = img.height;
        context.canvas.width = img.width;
        context.drawImage(img, 0, 0);
        cropCanvas();
      };
      img.setAttribute("src", reader.result);
    });
    reader.readAsDataURL(file);
  }
});
