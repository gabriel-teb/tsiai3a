class Header extends HTMLElement{
    constructor(){
        super()
        this.innerHTML=`
     <header style="display: flex; justify-content: space-between;height: 60px; align-items: center; background-color: rgb(223, 97, 24);">
    <a href="/index.html" style=" text-decoration: none;
    color:aquamarine">
        <h1>LOGO</h1>
    </a>
    <nav>
        <ul style="display: flex;
     gap:8px">
            <li style="list-style-type:none"><a style=" text-decoration: none;
    color:aquamarine" href="/index.html">Strona główna</a></li>
            <li style="list-style-type:none"><a style=" text-decoration: none;
    color:aquamarine" href="#">Mężczyzna</a></li>
            <li style="list-style-type:none"><a style=" text-decoration: none;
    color:aquamarine" href="#">Kobieta</a></li>
            <li style="list-style-type:none"><a style=" text-decoration: none;
    color:aquamarine" href="#">Dziecko</a></li>
        </ul>
    </nav>
    <section>
        <button onClick="window.location.href='/pages/logowanie/logowanie.html'">Zaloguj</button>
        <button onClick="window.location.href='/pages/zarejestruj/zarejestruj.html'">Zarejestruj</button>
    </section>
</header>
        `
    }
}
customElements.define('dom-mody-header', Header)