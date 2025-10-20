document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".gallery-img");
  let current = 0;

  function updateGallery() {
    images.forEach((img, i) => {
      img.classList.remove("active", "left", "right");
      if (i === current) {
        img.classList.add("active");
      } else if (i === (current - 1 + images.length) % images.length) {
        img.classList.add("left");
      } else if (i === (current + 1) % images.length) {
        img.classList.add("right");
      }
    });
  }

  function nextImage() {
    current = (current + 1) % images.length;
    updateGallery();
  }

  updateGallery();
  setInterval(nextImage, 6000);
});
