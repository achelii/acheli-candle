// Mum verileri
const candles = [
    {
        name: "Taper",
        material: "Premium Soy Wax",
        price: "7lv",
        image: "taper.jpg"
    },
    {
        name: "Taper - Two Color",
        material: "Premium Soy Wax",
        price: "9lv",
        image: "taper_colored.jpg"
    },
    {
        name: "Ribbed",
        material: "Premium Soy Wax",
        price: "6lv",
        image: "ribbed.jpg"
    },
    {
        name: "Ribbed - Two Color",
        material: "Premium Soy Wax",
        price: "8lv",
        image: "ribbed_two_color.jpg"
    },
    {
        name: "Zig Zag",
        material: "Premium Soy Wax",
        price: "11lv",
        image: "zigzag.jpg"
    },
    {
        name: "Zig Zag - Two Color",
        material: "Premium Soy Wax",
        price: "13lv",
        image: "zigzag_two_color.jpg"
    },
    {
        name: "Tower",
        material: "Premium Soy Wax",
        price: "5lv",
        image: "tower.jpg"
    },
    {
        name: "Spiral",
        material: "Premium Soy Wax",
        price: "5lv",
        image: "spiral.jpg"
    },
    {
        name: "Closet",
        material: "Premium Soy Wax",
        price: "5lv",
        image: "closet.jpg"
    },
    {
        name: "Tree",
        material: "Premium Soy Wax",
        price: "11lv",
        image: "tree.jpg"
    },
    {
        name: "Hourglass - Big - Two Color",
        material: "Premium Soy Wax",
        price: "17lv",
        image: "hour_glass_big.jpg"
    },
    {
        name: "Hourglass",
        material: "Premium Soy Wax",
        price: "15lv",
        image: "hour_glass_single.jpg"
    },
    {
        name: "Hourglass - Two Color",
        material: "Premium Soy Wax",
        price: "13lv",
        image: "hour_glass_small_two_color.jpg"
    },
    {
        name: "Pencil - Small",
        material: "Premium Soy Wax",
        price: "10lv",
        image: "pencil_small.jpg"
    },
    {
        name: "Pencil - Two Color",
        material: "Premium Soy Wax",
        price: "12lv",
        image: "pencil_two_color.jpg"
    },
    {
        name: "Pencil",
        material: "Premium Soy Wax",
        price: "10lv",
        image: "pencil.jpg"
    },
    {
        name: "Ying-Yang",
        material: "Premium Soy Wax",
        price: "11lv",
        image: "yingyang.jpg"
    }
];

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

let currentContent = "candle";

function showRandomContent() {
    const contentContainer = document.getElementById("content-container");

    if (currentContent === "candle") {
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
        contentInterval = setTimeout(showRandomContent, 15000);
    } else {
        const randomIndex = Math.floor(Math.random() * candlesWithoutDesc.length);
        const selectedPost = candlesWithoutDesc[randomIndex];

        contentContainer.innerHTML = `
            <img src="images/${selectedPost}" class="posts">
`;
 
        currentContent = "candle";
        contentInterval = setTimeout(showRandomContent, 10000);
    }
}


showRandomContent();

