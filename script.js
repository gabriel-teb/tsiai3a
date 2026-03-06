const formularz = document.querySelector("#formularz")

formularz.addEventListener("submit", (e) =>{
    e.preventDefault()

    const imie = formularz.querySelector("#imie")
    const nazwisko = formularz.querySelector("#nazwisko")
    const email = formularz.querySelector('input[name="email"]')

    console.log(imie.value, nazwisko.value, email.value)
    imie.value = ""
    nazwisko.value = ""
    email.value = ""
})

