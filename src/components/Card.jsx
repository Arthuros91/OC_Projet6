import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/card.sass";


export default function Card({ rental }) {
    const locID = String("/rentals/" + rental.id);
    const [backgroundImage, setBackgroundImage] = useState("");

    useEffect(() => {
        setBackgroundImage(rental.cover);
    }, [rental.cover]);

    return (
      <Link to={locID} className="card" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="maskCard">
          <h2>{rental.title}</h2>
        </div>
      </Link>
    );
}
