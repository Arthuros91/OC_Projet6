import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../styles/carousel.sass"



export default function Carousel({props}){
  const [currentIndex, setCurrentIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState('');
  const images = props

  useEffect(() => { 
    setBackgroundImage(images[currentIndex])
  },[currentIndex]);


  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  };

  //render
  return( 
    images.length > 1 ? (
      <div id="carousel">
        <img src={backgroundImage} alt={`location ${currentIndex+1}`}/>
        <button className="buttonNav previous" onClick={goToPreviousSlide}><FontAwesomeIcon icon="fas fa-chevron-left" /></button>
        <button className="buttonNav next" onClick={goToNextSlide}><FontAwesomeIcon icon="fas fa-chevron-right" /></button>
      </div>
    ) : (
      <div id="carousel">
        <img src={backgroundImage} alt={`location ${currentIndex+1}`}/>
      </div>
    )
  )


}