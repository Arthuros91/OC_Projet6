import { useEffect, useState } from "react";

import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";
import env from "react-dotenv" 

const imageBannerUrl = "./Image_1-banner.png"
const textBanner = "Chez vous, partout et ailleurs"

export default function Home() {
  const [rentalsList, setRentalList] = useState([])

  
  useEffect(() => {
    fetch(env.BACK_URL)
         .then((response) => response.json())
         .then(( rentals ) => setRentalList(rentals))
         .catch((error) => console.log(error))
 }, [])

  return (
    <main id="Home">
      <Banner text={textBanner} imageURL={imageBannerUrl}/>
      <Gallery props={rentalsList}/>
    </main>
  );
}


