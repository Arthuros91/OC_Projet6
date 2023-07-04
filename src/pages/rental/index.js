import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Carousel from "../../components/Carousel";
import StarsNotation from "../../components/StarsNotation";
import Collapse from "../../components/Collapse";
import Loading from "../../components/Loading";

import "../../styles/rental.sass";

export default function Rental2() {
    const { id } = useParams();
    const [rental, setRental] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/rentals.json")
            .then((response) => response.json())
            .then((rentalList) => {
                const rentalInfos = rentalList.filter(
                    (rental) => rental.id === id
                );
                setRental(rentalInfos[0]);
                console.log(rentalInfos);
            })
            .catch((error) => console.log(error));
    }, []);

    const rendertagsList = (tags) => {
        tags?.map((tag) => (
            <li key={tag} className="tag">
                {tag}
            </li>
        ));
    };

    return rental ? (
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
    ) : ( <main><Loading /></main> );
}
