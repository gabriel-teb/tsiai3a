class Footer extends HTMLElement{
    constructor(){
        super()
        this.innerHTML=`
            <footer style=" background-color: rgb(223, 97, 24);
    display: flex;
    align-items: center;
    color: azure;
    height: 50px;
    justify-content: center;">
        <p>Wszelkie prawa zastrzeżone</p>
    </footer>
        `
    }
}
customElements.define('dom-mody-footer', Footer)