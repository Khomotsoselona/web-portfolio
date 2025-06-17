
  function openModal(element) {
    const img = element.querySelector('img');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');

    modal.style.display = 'block';
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  }

  function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
  }

  // Optional: close modal when clicking outside the image
  window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }

