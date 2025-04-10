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

let currentContent = "candle";

function showRandomContent() {
    const contentContainer = document.getElementById("content-container");

    if (currentContent === "candle") {
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
        
        currentContent = "instagram";
        contentInterval = setTimeout(showRandomContent, 5000);
    } else {
        const randomIndex = Math.floor(Math.random() * instagramPosts.length);
        const selectedPost = instagramPosts[randomIndex];

        contentContainer.innerHTML = `
    <div class="instagram-wrapper">
        <blockquote 
            class="instagram-media" 
            data-instgrm-permalink="${selectedPost}" 
            data-instgrm-version="14"
            style="margin: 0 auto; width:100%; max-width: 320px;">
        </blockquote>
    </div>
`;
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        }
        currentContent = "candle";
        contentInterval = setTimeout(showRandomContent, 15000);
    }
}


showRandomContent();

