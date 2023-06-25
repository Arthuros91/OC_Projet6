import { Link } from "react-router-dom";
import "../styles/card.sass";

export default function Card({ rental }) {
    const locID = String("/" + rental.id);

    return (
        <div className="card">
            <Link to={locID} className="link">
                <img src={rental.cover} alt={rental.title} />
                <h2>{rental.title}</h2>
            </Link>
        </div>
    );
}
