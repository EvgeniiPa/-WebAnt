import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const MyContext = createContext(null)

export function MyProvider({children}){
    const [characterList, setCharacterList] = useState([])
    const [idNavigation, setIdNavigation] = useState('')
    const [responseNavigation, setResponseNavigation] = useState([])


    const [locationList, setLocationList] = useState([])
    const [idNavigationLocations, setIdNavigationLocations] = useState('')
    const [episodeList, setEpisodeist] = useState([])
    
    

    function navigation(){
        axios.get(`https://rickandmortyapi.com/api/character/${idNavigation}`)
        .then(res => setResponseNavigation([...res.data.results]))
        .catch(error => console.log(error))
    }

    function navigationLocation(){
        axios.get(`https://rickandmortyapi.com/api/location/${idNavigationLocations}`)
        .then(res => setIdNavigationLocations([...res.data.results]))
        .catch(error => console.log(error))
    }


    useEffect(()=>{
        axios
        .get("https://rickandmortyapi.com/api/character")
        .then(res => setCharacterList([ ...res.data.results]))
        .catch(error => console.log(error))
    },[])

    useEffect(()=>{
        axios
        .get("https://rickandmortyapi.com/api/location")
        .then(res => setLocationList([ ...res.data.results]))
        .catch(error => console.log(error))
    },[])

    useEffect(()=>{
        axios
        .get("https://rickandmortyapi.com/api/episode")
        .then(res => setEpisodeist([...episodeList, ...res.data.results]))
        .catch(error => console.log(error))
    },[])


    return( 
    <MyContext.Provider value={{
            characterList, 
            setCharacterList,
            locationList,
            setLocationList,
            episodeList,
            setEpisodeist,
            navigation,
            navigationLocation
      }}>
         {children}
    </MyContext.Provider>
    )
}



