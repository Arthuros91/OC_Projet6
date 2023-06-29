import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../styles/carousel.sass"



export default function Carousel({props}){
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = props

    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => { 
      setBackgroundImage(images[currentIndex])
    },[currentIndex]);
    //comportement

    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    
    const goToPreviousSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

    };


    //render
    return(<div id="carousel" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <button className="buttonNav previous" onClick={goToPreviousSlide}><FontAwesomeIcon icon="fas fa-chevron-left" /></button>
        <button className="buttonNav next" onClick={goToNextSlide}><FontAwesomeIcon icon="fas fa-chevron-right" /></button>
    </div>)
}