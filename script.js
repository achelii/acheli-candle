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

function renderCandleCarousel(candle) {
  const images = candle.images;
  const folder = candle.folder;
  let carouselHTML = `
    <div class="candle-info">
      <h3>${candle.name}</h3>
      <p>Made with: ${candle.material}</p>
      <p>Price: ${candle.price}</p>
    </div>
    <div class="carousel-container">
  `;

  images.forEach((img, index) => {
    carouselHTML += `
      <img src="images/${folder}/${img}" class="carousel-image${index === 0 ? ' active' : ''}" alt="${candle.name} image ${index + 1}">
    `;
  });

  // carouselHTML += `
  //     <button class="carousel-nav next">&#10095;</button>
  //   </div>
  // `;

  return carouselHTML;
}

// function addCarouselControls(container) {
//   let current = 0;
//   const images = container.querySelectorAll(".carousel-image");

//   function show(index) {
//     images.forEach((img, i) => {
//       img.classList.remove("active");
//       if (i === index) {
//         img.classList.add("active");
//       }
//     });
//   }

//   container.querySelector(".next").addEventListener("click", () => {
//     current = (current + 1) % images.length;
//     show(current);
//   });

//   // Swipe support
//   let startX = 0;
//   container.addEventListener("touchstart", (e) => {
//     startX = e.touches[0].clientX;
//   });

//   container.addEventListener("touchend", (e) => {
//     const diff = e.changedTouches[0].clientX - startX;
//     if (diff > 50) {
//       current = (current - 1 + images.length) % images.length;
//       show(current);
//     } else if (diff < -50) {
//       current = (current + 1) % images.length;
//       show(current);
//     }
//   });
// }

function showRandomContent() {
  const container = document.getElementById("content-container");

  if (currentContent === "candle" && candles.length > 0) {
    const candle = candles[Math.floor(Math.random() * candles.length)];
    container.innerHTML = renderCandleCarousel(candle);
    //addCarouselControls(container.querySelector(".carousel-container"));
    currentContent = "candlesWithoutDesc";
    setTimeout(showRandomContent, 15000);
  } else {
    const post = candlesWithoutDesc[Math.floor(Math.random() * candlesWithoutDesc.length)];
    container.innerHTML = `<img src="images/posts/${post}" class="posts">`;
    currentContent = "candle";
    setTimeout(showRandomContent, 10000);
  }
}

function loadCandlesAndStart() {
  fetch("candles.json")
    .then(res => res.json())
    .then(data => {
      candles = data;
      showRandomContent();
    })
    .catch(err => console.error("Error loading candles.json:", err));
}

document.addEventListener("DOMContentLoaded", loadCandlesAndStart);

