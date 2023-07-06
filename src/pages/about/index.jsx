import { useState, useEffect } from "react";
import about from "../../datas/about.json"
import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";

const imageAboutBannerUrl = "./Image_2.png"

export default function About() {

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