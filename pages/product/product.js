const ubrania = [{
    "id":1,
    "marka": "Nike",
    "model": "Air Max 95",
    "cena": 500,
    "obraz":"nike.jpg"
},
{
    "id":2,
    "marka": "Adidas",
    "model": "Samba",
    "cena": 450 ,
    "obraz":"adidas.jpg"
},
{
    "id":3,
    "marka": "Wólczanka",
    "model": "Biała koszula we wzorki",
    "cena": 300,
    "obraz":"wolczanka.jpg"
}]

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)
const id = parseInt(urlParams.get('id'))
const main = document.querySelector('#main')
const ubranie = ubrania.filter(u=> u.id === id)
const product = document.createElement('div')
let liczbaSztuk = 0
let cena = 0
function dodajDoKoszyka(){
    cena = cena +ubranie[0].cena
    console.log(cena)
}
product.innerHTML=`
    <img src='/assets/${ubranie[0].obraz}' alt='${ubranie[0].marka}'/>
    <div id="bucketSection">
    <span>${ubranie[0].marka}</span>
    <span>${ubranie[0].model}</span>
    <span>${ubranie[0].cena}</span>
    <div>
        <span>Liczba sztuk</span>
        <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </div>
    <button onClick="dodajDoKoszyka()">Dodaj do koszyka</button>
    </div>
`

main.appendChild(product)

