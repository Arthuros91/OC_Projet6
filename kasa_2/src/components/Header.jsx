import { Link } from "react-router-dom"

import "../styles/header.sass"
import logo from "../assets/LOGO.png"




export default function Header() {
    return (
        <header>
            <img src={ logo }alt="Logo de Kasa" />
            <nav>
                <Link className="link link_1" to="/">Accueil</Link>
                <Link className="link" to="/About">A Propos</Link>
            </nav>
        </header>
    );
}
