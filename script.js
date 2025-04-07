// Mum verileri
const mumlar = [
    {
        isim: "Lavanta Mum",
        yanmaSuresi: "50 Saat",
        malzeme: "Soja Mumu",
        fiyat: "45₺",
        resim: "mum1.jpg"
    },
    {
        isim: "Vadi Mum",
        yanmaSuresi: "60 Saat",
        malzeme: "Balmumu",
        fiyat: "55₺",
        resim: "mum2.jpg"
    },
    {
        isim: "Gül Mum",
        yanmaSuresi: "40 Saat",
        malzeme: "Soja Mumu",
        fiyat: "50₺",
        resim: "mum3.jpg"
    },
    {
        isim: "Sedir Mum",
        yanmaSuresi: "55 Saat",
        malzeme: "Sedir Ağacı Yağı",
        fiyat: "60₺",
        resim: "mum4.jpg"
    }
];

// Mumları ekranda gösterecek fonksiyon
function rastgeleMumGoster() {
    const mumContainer = document.getElementById("mum-container");

    // Rastgele mum seçimi
    const rastgeleIndex = Math.floor(Math.random() * mumlar.length);
    const secilenMum = mumlar[rastgeleIndex];

    // HTML içeriğini güncelleme
    mumContainer.innerHTML = `
        <div class="mum-info">
            <h3>${secilenMum.isim}</h3>
            <p>Yanma Süresi: ${secilenMum.yanmaSuresi}</p>
            <p>Malzeme: ${secilenMum.malzeme}</p>
            <p>Fiyat: ${secilenMum.fiyat}</p>
        </div>
        <img src="${secilenMum.resim}" alt="${secilenMum.isim}" class="mum-resim">
    `;
}

// Sayfa yüklendiğinde ilk mum gösterilsin
window.onload = function() {
    rastgeleMumGoster();

    // Rastgele mumları her 5 saniyede bir değiştirelim
    setInterval(rastgeleMumGoster, 5000);  // 5000ms = 5 saniye
};
