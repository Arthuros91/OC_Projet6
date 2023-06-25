import { Link } from "react-router-dom";
import "../styles/card.sass";
import { useState, useEffect } from "react";

export default function Card({ rental }) {
    const locID = String("/" + rental.id);

    const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // Charger les données JSON et extraire l'URL de l'image de fond
    setBackgroundImage(rental.cover)
    // Mettre à jour la variable d'état `backgroundImage`
  }, []);

    return (
        <div className="card" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Link to={locID} className="link">
                <h2>{rental.title}</h2>
            </Link>
        </div>
    );
}
