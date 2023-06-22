import { useState, useEffect } from "react";
import "../../styles/home.sass"

import locations from "./locations.json"
import Gallery from "../../components/Gallery";



export default function Home() {
  
  //render
  return (
    < div id="Home">
      <div id="banner">
        <p>Chez vous, partout et ailleurs </p>
      </div>
      <Gallery />
      
    </div>
  );
}


