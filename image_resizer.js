const WIDTH = 800;

let input = document.getElementById("input");

input.addEventListener("change", (e) => {
  let image_file = event.target.files[0];

  let reader = new FileReader();
  reader.readAsDataURL(image_file);

  reader.onload = (e) => {
    let image_url = event.target.result;

    let image = document.createElement("img");
    image.src = image_url;

    // document.getElementById("wrapper").appendChild(image);

    image.onload = (evt) => {
      let canvas = document.createElement("canvas");
      let ratio = WIDTH / evt.target.width;
      canvas.width = WIDTH;
      canvas.height = evt.target.height * ratio;

      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, canvas.width, canvas.height);

      let new_image_url = context.canvas.toDataURL("image/jpeg", 50);

      let new_image = document.createElement("img");
      new_image.src = new_image_url;
      document.getElementById("wrapper").appendChild(new_image);
    };
  };
});
