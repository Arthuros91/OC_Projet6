import "../styles/gallery.sass"
import Card from "./Card"



export default function Gallery({props}) {
    //render
    return(
        <div id="gallery">
            {props.map((loc) => (
                <Card key={loc.id} rental={loc} />
            ))}
      </div>
        
    )
}
