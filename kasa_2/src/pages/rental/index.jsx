import "../../styles/rental.sass";
import { useParams } from "react-router-dom";

import rentals from "../../datas/rentals.json";
import Carousel from "../../components/Carousel";
import StarsNotation from "../../components/StarsNotation";
import Collapse from "../../components/Collapse";



export default function Rental() {
    //recup Info
    const { id } = useParams();
    const rentalInfo = rentals.filter((rental) => rental.id === id);
    const rental = rentalInfo[0];



    const rendertagsList = (tags) => { 
        return tags.map(tag => <li key={tag} className="tag">{tag}</li>)
    }




    //render
    return (
        <div className="rentalArticle">
            <Carousel props={rental.pictures} />
            <div className="rentalInfos">
                <div className="rentalTitle">
                    <h2>{rental.title}</h2>
                    <p>{rental.location}</p>
                </div>
                <div className="userInfos">
                    <p>{rental.host.name}</p>
                    <img src={rental.host.picture} alt="propriétaire" />
                </div>
            </div>
            <div className="notation">
                <ul className="tagsList">{rendertagsList(rental.tags)}</ul>
                <StarsNotation starNumber={rental.rating}/>
            </div>
            <div id="rentalDescriptions">
                <Collapse title="description" />
            </div>    
        </div>
    );
}
