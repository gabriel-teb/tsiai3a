const ubrania = [{
    "id": 1,
    "marka": "Nike",
    "model": "Air Max 95",
    "cena": "500 zł",
    "obraz":"nike.jpg"
},
{    "id": 2,
    "marka": "Adidas",
    "model": "Samba",
    "cena": "450 zł",
    "obraz":"adidas.jpg"
},
{   
     "id": 3,
    "marka": "Wólczanka",
    "model": "Biała koszula we wzorki",
    "cena": "300 zł",
    "obraz":"wolczanka.jpg"
}]

const kontener = document.querySelector("#container")

ubrania.forEach(ubranie =>
    {
            const product = document.createElement("section")
            product.className = "product"
      
            product.innerHTML =  `
                <img src="./assets/${ubranie.obraz}" alt="${ubranie.marka}" width="150px" height="150px">
                <section class="dane">
                    <div class="nazwa-info">
                        <div class="nazwa">
                            <span class="marka">${ubranie.marka}</span>
                            <span class="model">${ubranie.model}</span>
                        </div>
                        <span class="cena">${ubranie.cena}</span>
                    </div>
                     <div class="btn-container">
                        <button class="btn-kup" onclick="window.location.href='/pages/product/product.html?id=${ubranie.id}'">Kup teraz</button>
                    </div>
                </section>
            `

            kontener.appendChild(product)
}
)
    



