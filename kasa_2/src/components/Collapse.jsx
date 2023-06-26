import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "../styles/collapse.sass"


export default function Collapse({title, text}) {
    const [statusClass, setStatusClass] = useState("button")
    //states

    
    const handleClick = () => {
        
        
    }
    
    //useEffect= (() => {
            
    //}, [statusClass])
    
    
    return (<div className="collapse">
        <p>{title}</p>
        <button className ={statusClass} onClick={handleClick}><FontAwesomeIcon icon="fas fa-chevron-up" /></button>
    </div>)
}
