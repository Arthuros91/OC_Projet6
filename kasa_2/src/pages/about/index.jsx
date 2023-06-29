import { useState, useEffect } from "react";
import env from "react-dotenv";

import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";


export default function About() {
    const imageAboutBannerUrl = "./Image_2.png"
    const respectText = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const serviceText = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const securityText = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    
    const [aboutInfos, setaboutInfos] = useState([])   

    useEffect(() => {
        fetch("./about.json")
             .then((response) => response.json())
             .then(( about ) => setaboutInfos(about))
             .catch((error) => console.log(error))
    }, [])
    console.log(aboutInfos)
    const about = aboutInfos[0]

    return(<main>
        <Banner imageURL={imageAboutBannerUrl} />
        <Collapse title="Fiabilité" text={respectText} />
        <Collapse title="Respect" text={respectText} />
        <Collapse title="Service" text={serviceText} />
        <Collapse title="Sécurité" text={securityText} />
    </main>
    )
}