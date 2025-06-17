const images = document.querySelectorAll('.showcase-image');
    const modal = document.getElementById('pdfModal');
    const modalClose = document.getElementById('modalClose');
    const pdfFrame = document.getElementById('pdfFrame');

    images.forEach(img => {
      img.addEventListener('click', () => {
        const pdfUrl = img.getAttribute('data-pdf');
        pdfFrame.src = pdfUrl;
        modal.style.display = 'flex';
      });
    });

    modalClose.addEventListener('click', () => {
      modal.style.display = 'none';
      pdfFrame.src = ''; // Clear iframe src to stop PDF loading
    });

    // Close modal if clicking outside modal-content
    window.addEventListener('click', e => {
      if (e.target === modal) {
        modal.style.display = 'none';
        pdfFrame.src = '';
      }
          
    });
    function openVideo(src) {
  const modal = document.getElementById("mediaModal");
  const content = document.getElementById("modalContent");
  content.innerHTML = `<video controls autoplay><source src="${src}" type="video/mp4">Your browser does not support the video tag.</video>`;
  modal.style.display = "block";
}

function openPDF(src) {
  const modal = document.getElementById("mediaModal");
  const content = document.getElementById("modalContent");
  content.innerHTML = `<iframe src="${src}" width="100%" height="500px"></iframe>`;
  modal.style.display = "block";
}

function openImage(src) {
  const modal = document.getElementById("mediaModal");
  const content = document.getElementById("modalContent");
  content.innerHTML = `<img src="${src}" alt="Preview Image" />`;
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("mediaModal");
  modal.style.display = "none";
  document.getElementById("modalContent").innerHTML = "";
}
