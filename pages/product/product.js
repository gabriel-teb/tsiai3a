const ubrania = [{
    "id":1,
    "marka": "Nike",
    "model": "Air Max 95",
    "cena": "500 zł",
    "obraz":"nike.jpg"
},
{
    "id":2,
    "marka": "Adidas",
    "model": "Samba",
    "cena": "450 zł",
    "obraz":"adidas.jpg"
},
{
    "id":3,
    "marka": "Wólczanka",
    "model": "Biała koszula we wzorki",
    "cena": "300 zł",
    "obraz":"wolczanka.jpg"
}]

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)
const id = parseInt(urlParams.get('id'))
const main = document.querySelector('#main')
const ubranie = ubrania.filter(u=> u.id === id)

