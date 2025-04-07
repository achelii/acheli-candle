// Mum verileri
const candles = [
    {
        name: "Taper Candle",
        burningTime: "8 Hours",
        material: "Premium Soy Wax",
        price: "7lv",
        scent: "Sun Set - Vanilia + Sakura",
        image: "taper.jpg"
    },
    {
        name: "Ribbed Candle",
        burningTime: "6 Hours",
        material: "Premium Soy Wax",
        price: "5lv",
        image: "ribbed.jpg"
    },
    {
        name: "Zig Zag Candle",
        burningTime: "15 Hours",
        material: "Premium Soy Wax",
        price: "12lv",
        image: "zigzag.jpg"
    },
    {
        name: "Tower Candle",
        burningTime: "4 Hours",
        material: "Premium Soy Wax",
        price: "4lv",
        image: "tower.jpg"
    },
    {
        name: "Spiral Candle",
        burningTime: "4.5 Hours",
        material: "Premium Soy Wax",
        price: "4lv",
        image: "spiral.jpg"
    }
];

const instagramPosts = [
     "https://www.instagram.com/p/DIEHfdzNkVH/",
     "https://www.instagram.com/p/DIEG5k1Npwl/",
     "https://www.instagram.com/p/DIEGWUot4NR/",
     "https://www.instagram.com/p/DIBxPGpNL-h/"
];

let currentContent = "candle"; // Keep track of what type of content is currently displayed

function showRandomContent() {
    const contentContainer = document.getElementById("content-container");

    // Randomly decide between showing a candle or Instagram post
    if (currentContent === "candle") {
        // Show a random candle
        const randomIndex = Math.floor(Math.random() * candles.length);
        const selectedCandle = candles[randomIndex];

        contentContainer.innerHTML = `
            <div class="candle-info">
                <h3>${selectedCandle.name}</h3>
                <p>Burning Time: ${selectedCandle.burningTime}</p>
                <p>Made with: ${selectedCandle.material}</p>
                <p>Price: ${selectedCandle.price}</p>
            </div>
            <img src="${selectedCandle.image}" alt="${selectedCandle.name}" class="candle-image">
        `;
        
        currentContent = "instagram"; // Switch to Instagram after candle
    } else {
        // Show a random Instagram post
        const randomIndex = Math.floor(Math.random() * instagramPosts.length);
        const selectedPost = instagramPosts[randomIndex];

        contentContainer.innerHTML = `
            <div class="instagram-post">
                <iframe src="https://www.instagram.com/p/${selectedPost.split("/")[4]}/embed" width="400" height="480" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        `;

        currentContent = "candle"; // Switch to candle after Instagram post
    }
}

// Set interval to switch between Instagram post and candle
setInterval(showRandomContent, 5000);  // Default is 5 seconds for both

// Initially call showRandomContent once so that the page starts with random content
showRandomContent();

