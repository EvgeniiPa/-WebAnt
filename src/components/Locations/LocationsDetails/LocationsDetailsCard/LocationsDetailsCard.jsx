import "./LocationsDetailsCard.css"

export default function LocationsDetailsCard({image, name, species}){
    return (
        <>
        <div className="location-details-card">
              <img
                className="location-details-card__img"
                src={image}
                alt="avatar"
              />
              <h4 className="location-details-card___name">{name}</h4>
              <span className="location-details-card___species">{species}</span>
            </div>
        </>
    )
}