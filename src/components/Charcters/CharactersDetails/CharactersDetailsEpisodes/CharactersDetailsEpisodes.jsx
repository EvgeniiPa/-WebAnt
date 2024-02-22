import { useContext, useEffect } from "react"
import { MyContext } from "../../../Context/Context"
import axios from "axios"

export default function CharactersDetailsEpisodes({name, episode, airDate}){


    return(
        <>
        <div className="main-character-details__episode-cart">
              <span className="main-character-details__episode">
                {episode}
              </span>
              <span className="main-character-details__episode-name">
                {name}
              </span>
              <span className="main-character-details__episode-date">
                {airDate}
              </span>
            </div>
        </>
    )
}