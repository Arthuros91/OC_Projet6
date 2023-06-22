import "../styles/gallery.sass"
import locations from "../datas/locations.json"


export default function Gallery() {


    //render
    return(
        <div id="gallery">
            {locations.map((loc) => (
                <div key={loc.id} className="card">
                    <img src={loc.cover} alt={loc.title}/>
                    <p>{loc.title}</p>
                </div>))}
      </div>
        
    )
}
