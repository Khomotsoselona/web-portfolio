      const modal = document.getElementById("videoModal");
      const video = document.getElementById("portfolioVideo");
      const videoSource = document.getElementById("videoSource");
      const closeBtn = document.querySelector(".close");
      const images = document.querySelectorAll(".image-gallery img");

      images.forEach((img) => {
        img.addEventListener("click", () => {
          const videoPath = img.getAttribute("data-video");
          videoSource.src = videoPath;
          video.load();
          modal.style.display = "block";
          video.play();
        });
      });

      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        video.pause();
        video.currentTime = 0;
      });

      window.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.style.display = "none";
          video.pause();
          video.currentTime = 0;
        }
      });document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("portfolioVideo");
  const videoSource = document.getElementById("videoSource");
  const closeBtn = document.querySelector(".close");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const videoFile = card.getAttribute("data-video");
      videoSource.src = videoFile;
      video.load();
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      video.pause();
      video.currentTime = 0;
    }
  });
});
