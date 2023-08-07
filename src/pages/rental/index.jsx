import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Carousel from "../../components/Carousel";
import StarsNotation from "../../components/StarsNotation";
import Collapse from "../../components/Collapse";
import Loading from "../../components/Loading";

import "../../styles/rental.sass";
import ErrorPage from "../404";

import rentalsList from "../../datas/rentals.json";


export default function Rental() {
    const { id } = useParams();
    const [rental, setRental] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const rentalInfos = rentalsList.filter(
            (rental) => rental.id === id
        );
        setRental(rentalInfos[0]);
        setIsLoading(false);
        })



    if (isLoading) {
        return <main><Loading /></main>;
    } 
    
    return rental ? (
        <main className="rentalArticle">
            <Carousel props={rental.pictures} />
            <div className="rentalInfos">
                <div className="rentalTitle">
                    <h2>{rental.title}</h2>
                    <p>{rental.location}</p>
                    <ul className="tagsList">{rental.tags.map((tag) => ( <li key={tag} className="tag"> {tag} </li>))}</ul>
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
    ) : ( <main><ErrorPage /></main> );
}
