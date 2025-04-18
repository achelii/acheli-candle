document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery-container');
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const closeBtn = document.querySelector('.close-btn');

  let slides = [];
  let currentFolder = '';
  let currentIndex = 0;

  function showModal() {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function hideModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  function updateModalImage() {
    modalImg.src = `images/${currentFolder}/${slides[currentIndex]}`;
  }

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateModalImage();
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % slides.length;
    updateModalImage();
  });

  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    hideModal();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      hideModal();
    }
  });

  fetch('candles.json')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((candle) => {
        const images = Array.isArray(candle.images) ? candle.images : [candle.images];
        const folder = candle.folder || '';
        const item = document.createElement('div');
        item.className = 'gallery-item';

        item.innerHTML = `
          <img src="images/${folder}/${images[0]}" alt="${candle.name}">
          <h3>${candle.name}</h3>
          <p>Price: ${candle.price}</p>
          <p>Length: ${candle.length || candle.lenght || '-'}</p>
        `;

        item.addEventListener('click', () => {
          slides = images;
          currentFolder = folder;
          currentIndex = 0;
          updateModalImage();
          showModal();
        });

        gallery.appendChild(item);
      });
    })
    .catch((error) => {
      console.error('Error loading candles.json:', error);
    });
});
