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

function showRandomContent() {
  const contentContainer = document.getElementById("content-container");

  if (currentContent === "candle" && candles.length > 0) {
    const randomIndex = Math.floor(Math.random() * candles.length);
    const selectedCandle = candles[randomIndex];

    contentContainer.innerHTML = `
      <div class="candle-info">
        <h3>${selectedCandle.name}</h3>
        <p>Made with: ${selectedCandle.material}</p>
        <p>Price: ${selectedCandle.price}</p>
      </div>
      <img src="images/${selectedCandle.image}" alt="${selectedCandle.name}" class="candle-image">
    `;

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

function loadCandlesAndStart() {
  fetch("candles.json")
    .then(response => response.json())
    .then(data => {
      candles = data;
      showRandomContent(); // Start the loop
    })
    .catch(error => console.error("Failed to load candles.json:", error));
}

document.addEventListener("DOMContentLoaded", loadCandlesAndStart);

