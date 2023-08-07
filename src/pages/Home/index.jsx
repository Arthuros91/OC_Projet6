import { useEffect, useState } from "react";

import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";
import rentalsList from "../../datas/rentals.json";

const imageBannerUrl = "./Image_1-banner.png";
const textBanner = "Chez vous, partout et ailleurs";




export default function Home() {


  return (
      <main id="Home">
          <Banner text={textBanner} imageURL={imageBannerUrl} />
          <Gallery props={rentalsList} />
      </main>
  );
}
