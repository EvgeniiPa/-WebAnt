import "./LocationCard.css"

export default function LocationCard({name, type, onClick }){

    return(
        <>
        <div onClick={onClick} className="locartion-card">
            <h4 className="location-card__title">{name}</h4>
            <span className="location-card__text">{type}</span>
        </div>
        </>
    )
}