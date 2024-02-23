import "./EpisodesDetailsCard.css"

export default function EpisodesDetailsCard({image, name, species}){
    return(
        <>
         <div className="episode-details-card">
              <img
                className="episode-details-card__img"
                src={image}
                alt="avatar"
              />
              <h4 className="episode-details-card___name">{name}</h4>
              <span className="episode-details-card___species">{species}</span>
            </div>
        </>
    )
}