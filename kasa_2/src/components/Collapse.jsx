import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "../styles/collapse.sass"


export default function Collapse({title, text}) {
    //states

    
    const handleClick = () => {
        const elem = document.querySelector(".button")
        const isOpen = elem.getAttribute("open")
        isOpen != null ? elem.setAttribute("class","button closed") : elem.setAttribute("class","button open")
        
    }
    
    
    
    
    return (<div className="collapse">
        <p>{title}</p>
        <button className ="button" onClick={handleClick}><FontAwesomeIcon icon="fas fa-chevron-up" /></button>
    </div>)
}
