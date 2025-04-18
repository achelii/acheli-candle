const candlesWithoutDesc = [
  "post1.jpg",
  "post2.jpg",
  "post3.jpg",
  "post4.jpg",
  "post5.jpg",
  "post6.jpg",
  "post7.jpg",
  "post8.jpg",
  "post9.jpg"
];

let candles = [];
let currentContent = "candle";
let currentImageIndex = 0;
let currentCandleIndex = 0;

function showRandomContent() {
  const contentContainer = document.getElementById("content-container");

  if (currentContent === "candle" && candles.length > 0) {
    currentCandleIndex = Math.floor(Math.random() * candles.length);
    currentImageIndex = 0;
    const selectedCandle = candles[currentCandleIndex];
    renderCandleCarousel(selectedCandle);

    currentContent = "candlesWithoutDesc";
    setTimeout(showRandomContent, 15000);
  } else {
    const randomIndex = Math.floor(Math.random() * candlesWithoutDesc.length);
    const selectedPost = candlesWithoutDesc[randomIndex];

    contentContainer.innerHTML = `
      <img src="images/${selectedPost}" class="posts">
    `;

    currentContent = "candle";
    setTimeout(showRandomContent, 10000);
  }
}

function renderCandleCarousel(candle) {
  const contentContainer = document.getElementById("content-container");

  const slidesHTML = candle.images.map((img, index) => `
    <div class="fade-slide ${index === currentImageIndex ? 'active' : ''}">
      <img src="images/${img}" alt="${candle.name}" class="candle-image">
    </div>
  `).join("");

  contentContainer.innerHTML = `
    <div class="candle-info">
      <h3>${candle.name}</h3>
      <p>Made with: ${candle.material}</p>
      <p>Price: ${candle.price}</p>
    </div>
    <div class="carousel-wrapper" id="carousel-wrapper">
      ${slidesHTML}
      <button class="nav prev" onclick="prevSlide()">‹</button>
      <button class="nav next" onclick="nextSlide()">›</button>
    </div>
  `;

  setupSwipe();
}

function prevSlide() {
  const candle = candles[currentCandleIndex];
  currentImageIndex = (currentImageIndex - 1 + candle.images.length) % candle.images.length;
  renderCandleCarousel(candle);
}

function nextSlide() {
  const candle = candles[currentCandleIndex];
  currentImageIndex = (currentImageIndex + 1) % candle.images.length;
  renderCandleCarousel(candle);
}

function setupSwipe() {
  const wrapper = document.getElementById("carousel-wrapper");
  let startX = 0;

  wrapper.ontouchstart = (e) => {
    startX = e.touches[0].clientX;
  };

  wrapper.ontouchend = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };
}

function loadCandlesAndStart() {
  fetch("candles.json")
    .then(response => response.json())
    .then(data => {
      candles = data;
      showRandomContent();
    })
    .catch(error => console.error("Failed to load candles.json:", error));
}

document.addEventListener("DOMContentLoaded", loadCandlesAndStart);
