import { useState, useEffect } from "react";
import about from "../../datas/about.json"
import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";



export default function About() {
    const imageAboutBannerUrl = "./Image_2.png"
    const respectText = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const serviceText = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const securityText = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    
    const [aboutInfos, setaboutInfos] = useState(about)   


    return(<main>
        <Banner imageURL={imageAboutBannerUrl} />
        <Collapse title="Fiabilité" text={aboutInfos[0].reliability} />
        <Collapse title="Respect" text={aboutInfos[0].respect} />
        <Collapse title="Service" text={aboutInfos[0].service} />
        <Collapse title="Sécurité" text={aboutInfos[0].security} />
    </main>
    )
}