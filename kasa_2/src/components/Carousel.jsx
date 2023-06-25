import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../styles/carousel.sass"



export default function Carousel({props}){
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = props
    //comportement

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };


    //render
    return(<div id="carousel" >
        <button className="buttonNav previous" onClick={goToPreviousSlide}><FontAwesomeIcon icon="fas fa-chevron-left" /></button>
        <img src={images[currentIndex]} alt="images de la location" />
        <button className="buttonNav next" onClick={goToNextSlide}><FontAwesomeIcon icon="fas fa-chevron-right" /></button>
    </div>)
}