function createCandleItem(candle) {
  const item = document.createElement("div");
  item.className = "gallery-item";
  item.innerHTML = `
    <img src="images/${candle.image}" alt="${candle.name}">
    <h3>${candle.name}</h3>
    <p>Price: ${candle.price}</p>
    <p>Lenght: ${candle.lenght}</p>
  `;
  return item;
}

function loadCandles() {
  fetch("candles.json")
    .then(response => response.json())
    .then(candles => {
      const container = document.getElementById("gallery-container");
      candles.forEach(candle => {
        const candleElement = createCandleItem(candle);
        container.appendChild(candleElement);
      });
    })
    .catch(err => console.error("Error loading candles:", err));
}

// Load when page is ready
document.addEventListener("DOMContentLoaded", loadCandles);
