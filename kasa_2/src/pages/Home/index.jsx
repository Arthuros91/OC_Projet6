import { useEffect, useState } from "react";

import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";
import env from "react-dotenv" 



export default function Home() {
  const [rentalsList, setRentalList] = useState([])

  
  useEffect(() => {
    fetch(env.BACK_URL)
         .then((response) => response.json())
         .then(( rentals ) => setRentalList(rentals))
         .catch((error) => console.log(error))
  
 }, [])

  //render
  return (
    <main id="Home">
      <Banner />
      <Gallery props={rentalsList}/>
    </main>
  );
}


