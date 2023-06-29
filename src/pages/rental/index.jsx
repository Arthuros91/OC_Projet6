import "../../styles/rental.sass";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from "react-dotenv";

import Carousel from "../../components/Carousel";
import StarsNotation from "../../components/StarsNotation";
import Collapse from "../../components/Collapse";

export default function Rental() {
    //recup Info
    const [rentalsFile, setRentalFile] = useState([]);
    const id = useParams();

    useEffect(() => {
        fetch(env.BACK_URL)
            .then((response) => response.json())
            .then((rentals) => setRentalFile(rentals))
            .catch((error) => console.log(error));
    }, []);

    const rentalInfos = rentalsFile.filter((rental) => rental.id === id);
    const rental = rentalInfos[0];

    const rendertagsList = (tags) => {
        return tags.map((tag) => (
            <li key={tag} className="tag">
                {tag}
            </li>
        ));
    };

    //render
    return (
        <main className="rentalArticle">
            <Carousel props={rental.pictures} />
            <div className="rentalInfos">
                <div className="rentalTitle">
                    <h2>{rental.title}</h2>
                    <p>{rental.location}</p>
                    <ul className="tagsList">{rendertagsList(rental.tags)}</ul>
                </div>
                <div className="notation">
                    <div className="userInfos">
                        <p>{rental.host.name}</p>
                        <img src={rental.host.picture} alt="propriétaire" />
                    </div>
                    <StarsNotation starNumber={rental.rating} />
                </div>
            </div>

            <div className="rentalDescriptions">
                <Collapse title="Description" text={rental.description} />
                <Collapse title="Equipement" text={rental.equipments} />
            </div>
        </main>
    );
}
