import { Link } from "react-router-dom";
import "../styles/card.sass";
import { useState, useEffect } from "react";

export default function Card({ rental }) {
    const locID = String("/" + rental.id);

    const [backgroundImage, setBackgroundImage] = useState("");

    useEffect(() => {
        setBackgroundImage(rental.cover);
    }, [rental.cover]);

    return (
  
            <Link
                to={locID}
                className="card"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
              <div className="maskCard">
                <h2>{rental.title}</h2>
              </div>
            </Link>
  
    );
}
