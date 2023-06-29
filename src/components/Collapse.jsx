import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/collapse.sass";

export default function Collapse({ title, text }) {
    const [isVisible, setIsVisible] = useState(false);
    
    const handleClick = () => {
        setIsVisible(!isVisible);
    };
    const textBox =
        typeof text === "string" ? (
            <p>{text}</p>
        ) : (
            <ul>
                {text.map((element) => (
                    <li key={element}>{element}</li>
                ))}
            </ul>
        );
    return (
        <div className="collapse">
            <div className="titleBox">
                <p>{title}</p>
                <button
                    className={`button ${isVisible ? "open" : "closed"}`}
                    onClick={handleClick}
                >
                    <FontAwesomeIcon icon="fas fa-chevron-up" />
                </button>
            </div>
            <div className={`textBox ${isVisible ? "open" : "closed"}`}>
                {textBox}
            </div>
        </div>
    );
}
