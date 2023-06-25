//import { useState, useEffect } from "react";
import "../../styles/home.sass"

import rentals from "../../datas/rentals.json"
import Gallery from "../../components/Gallery";



export default function Home() {

  //render
  return (
    <main id="Home">
      <div id="banner">
        <h1>Chez vous, partout et ailleurs </h1>
      </div>
      <Gallery props={rentals}/>
    </main>
  );
}


