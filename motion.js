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
      });