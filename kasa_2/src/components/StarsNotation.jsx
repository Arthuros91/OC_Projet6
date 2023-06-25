
import "../styles/starsNotation.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function StarsNotation({starNumber}) {
    const getStarStyle = (index) => {
        const color = index <= starNumber  ? '#FF6060' : 'gray';
        return {
          color: color,
          // Ajoute d'autres styles CSS au besoin
        };
    };

    //render
    return (
        <div id="starsNotation">
            {[1, 2, 3, 4, 5].map((index) => (
                <FontAwesomeIcon className="star" key={index}  icon="fa-solid fa-star" style={getStarStyle(index)} />
            ))}
        </div>
    );

}