function loadImage(id, targetId) {
  var el = document.getElementById(id);
  var targetEl = targetId ? document.getElementById(targetId) : el;
  var imageToLoad;

  if (el.dataset.image) {
    // use inline `data-image` to download the image with HTML (1 req instead of multiple)
    imageToLoad = el.dataset.image;
  } else if (typeof el.currentSrc === "undefined") {
    // the browsers doesn't support the `data-X`, use `(img)src` as fallback
    imageToLoad = el.src;
  } else {
    // use the one provided by CSS (at least in our case e.g. `wallpaper` in our 'main.css')
    imageToLoad = el.currentSrc;
  }

  if (imageToLoad) {
    var img = new Image();
    img.src = imageToLoad;
    img.onload = function() {
      targetEl.classList.add("is-loaded");
    };
  }

  document.addEventListener("DOMContentLoaded", function() {
    loadImage("wallpaper");
    loadImage("pictureImage", "picture");
  });
}
