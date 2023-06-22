import "../styles/footer.sass";
import logo_black from "../assets/LOGO_black.png";



export default function Footer() {
    return (
        <footer>
            <div id="footer_text">
                <img src={logo_black} alt="Logo en noir de Kasa" />
                <p>2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
}
