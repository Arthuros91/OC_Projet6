import { Link } from "react-router-dom"

import "../styles/error.sass"


export default function Error() {
    return(<div id="error">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link className="link" to="/">Retourner sur la page d'accueil</Link>
    </div>)
}