import { Link } from "react-router-dom"

import "../styles/header.sass"
import logo from "../assets/LOGO.png"




export default function Header() {
    return (
        <header>
            <Link className="link" to="/"><img src={ logo }alt="Logo de Kasa" /></Link>
            <nav>
                <Link className="link link_1" to="/">Accueil</Link>
                <Link className="link" to="/About">A Propos</Link>
            </nav>
        </header>
    );
}
