import axios from "axios";
import { useState } from "react"

export function useCharacterDetails(){
    const [character, setCharacter] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [episodes, setEpisodes] = useState()

    const loadCharacter = (id)=>{
        if(isLoading ===false){
            return;
        }

       axios.get(`https://rickandmortyapi.com/api/character/${id}`)
       .then(res => {
        setCharacter(res.data)
        setIsLoading(false)  
        })
       .catch(error=> console.log(error))
    }

    const loadEpisodes = () => {
      if(character ===undefined){
        return;
      }

      return setEpisodes(episodes => character.episode)
    }

    return {
        episodes,
        character,
        isLoading,
        loadCharacter,
        loadEpisodes,
    }
}