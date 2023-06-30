import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/collapse.sass";

export default function Collapse({ title, text }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [height, setHeight] = useState(0);
    const divRef = useRef(null);

    const handleClick = () => {
        setIsVisible(!isVisible);
        setIsFocused((prevIsFocused) => !prevIsFocused);
        
    };

    useEffect(() => {
        if (divRef.current) {
          setHeight(divRef.current.scrollHeight);
        }
    }, [isFocused]);

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
            <div className="textBox" style={{ height: isFocused ? height + "px" : "0" }} ref={divRef}>
                {textBox}
            </div>
        </div>
    );
}
