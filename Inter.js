 const cards = document.querySelectorAll('.card');
      const modal = document.getElementById('pdfModal');
      const pdfFrame = document.getElementById('pdfFrame');
      const modalClose = document.getElementById('modalClose');

      cards.forEach(card => {
        card.addEventListener('click', () => {
          const pdfSrc = card.getAttribute('data-pdf');
          pdfFrame.src = pdfSrc;
          modal.style.display = 'block';
        });
      });

      modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
        pdfFrame.src = '';
      });

      window.addEventListener('click', e => {
        if (e.target === modal) {
          modal.style.display = 'none';
          pdfFrame.src = '';
        }
      });