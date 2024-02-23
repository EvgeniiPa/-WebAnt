import "./EpisodeCard.css"

export default function LocationCard({name, airDate, onClick, episode }){

    return(
        <>
        <div onClick={onClick} className="episode-card">
            <h4 className="episode-card__name">{name}</h4>
            <span className="episode-data">{airDate}</span>
            <span className="episode-card__episode">{episode}</span>
        </div>
        </>
    )
}


