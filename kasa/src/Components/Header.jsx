import logo from "../Assets/LOGO.png"
import "../Styles/header.sass"


export default function Header() {
    return (<div id="header">
        <img src={logo} alt="logo de Kasa"/>
        <nav>
            <a className="link link__home" href="">Accueil</a>
            <a className="link link__about" href="">A propos</a>
        </nav>
    </div>
    )
}