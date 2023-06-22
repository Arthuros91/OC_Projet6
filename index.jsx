import { useState, useEffect } from "react";
import "../../styles/home.sass"

import { locations } from "../../datas/locations.json"




export default function Home() {
  const dataUrl = "./locations.json"
  const dataOnline = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(dataOnline)
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('Erreur lors de la requête Fetch : ' + response.status);
    }
  })
  .then(textData => {
    const jsonData = JSON.parse(textData);
    setData(jsonData);
  })
  .catch(error => {
    console.log('Erreur lors de la requête Fetch :', error);
  });
  }, []);

  // Reste du code de votre composant...




  //render
  return (
    <div id="Home">
      <div id="banner">
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <div id="gallery">

      </div>
    </div>
  );
}


