import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "../styles/collapse.sass"


export default function Collapse({title, text}) {
    const [statusClass, setStatusClass] = useState("button")
    const [visible, setVisible] = useState("none")
    const [currentIndex, setCurrentIndex] = useState(0);
    const status = ["open", "closed"]
    const visibleStatus =["initial", "none"]
    //states

    
    const handleClick = () => {
        
        setCurrentIndex((prevIndex) => (prevIndex + 1) % status.length);
        
       
    }
    
    useEffect(() => {
        setStatusClass("button " + status[currentIndex])  
        setVisible(visibleStatus[currentIndex])  
        const textBox = document.querySelector(".textBox")
        textBox.style.display = visible  
    }, [currentIndex])
    
    const isOpen = () => {
        return(<div className="collapse">
            <div className="titleBox">
                <p>{title}</p>
                <button className ={statusClass} onClick={handleClick}><FontAwesomeIcon icon="fas fa-chevron-up" /></button>
            </div>
            <div className="textBox" display={visible}>
                <p>{text}</p>
            </div>
        </div>)
    }
    
    return (<div>{isOpen()}
    </div>)
}
