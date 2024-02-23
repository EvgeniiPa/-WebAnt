import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyContext = createContext(null);

export function MyProvider({ children }) {
  const [characterList, setCharacterList] = useState([]);
  const [responseNavigation, setResponseNavigation] = useState([]);

  const [locationList, setLocationList] = useState([]);
  const [locationEpisode, setLocationEpisode] = useState([]);

  const [episodesList, setEpisodesList] = useState([]);
  const [episodesResidents, setEpisodesResident] = useState();
  const [episodesResidentsCharacters, setEisodesResidentsCharacters] = useState([])


  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setCharacterList(res.data.results))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location")
      .then((res) => setLocationList(res.data.results))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode")
      .then((res) => setEpisodesList(res.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <MyContext.Provider
      value={{
        characterList,
        setCharacterList,
        locationList,
        setLocationList,
        episodesList,
        setEpisodesList,
        locationEpisode,
        setLocationEpisode,
        episodesResidents, 
        setEpisodesResident,
        episodesResidentsCharacters, 
        setEisodesResidentsCharacters
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
