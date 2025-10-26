// Lightbox for gallery images

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('gallery-modal');
  const modalImg = document.getElementById('gallery-modal-img');
  const closeBtn = document.getElementById('gallery-modal-close');

  // Open modal on image click
  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function () {
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      modal.classList.add('show');
    });
  });

  // Close modal on close button or background click
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    modalImg.src = '';
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
      modalImg.src = '';
    }
  });

  // Close modal on ESC key
  document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('show') && (e.key === 'Escape' || e.key === 'Esc')) {
      modal.classList.remove('show');
      modalImg.src = '';
    }
  });
});
