import Logo from "./Episodes.svg"
import "./Episodes.css"
import { useNavigate } from "react-router";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { MyContext } from "../Context/Context";
import Iinputs from "../Input/Inputs"; 
import LocationCard from "./EpisodesCard/EpisodesCard";

export default function Episodes(){
    const [pageCount, setPageCount] = useState(2)
    const {episodesList, setEpisodesList, episodesResidents, setEpisodesResident, episodesResidentsCharacters, setEisodesResidentsCharacters} = useContext(MyContext)
    const navigate = useNavigate();

    function handlerClickCart(id){
      setEpisodesResident(episodesList[id - 1])
      navigate(`/episode/${id}`)
    }

    useEffect(()=>{
        console.log(episodesResidents, 'до')
    }, [episodesResidents])

    useEffect(()=>{
        console.log(episodesList)
    },[episodesList])

    function handleClickButton(){
      axios.get(`https://rickandmortyapi.com/api/episode/?page=${pageCount}`)
      .then(res => setEpisodesList([...episodesList, ...res.data.results ]))
      .catch(error => console.error(error))
      setPageCount(count => count + 1)
    }



    return(
        <>
        <main className="main-episodes">
            <img className="main-episodes__image" src={Logo} alt="Logotipe" />
            <div className="main-episodes__input">
            <Iinputs type={'location'}/>
            </div>
            <div className="main-episodes__contant-wrapper">
                {episodesList.map((item)=>{
                return  <LocationCard id={item.id} name={item.name} airDate={item.air_date} episode={item.episode} key={item.created + item.id} onClick={()=>handlerClickCart(item.id)}/>
                })}
            </div>
            <button
                onClick={handleClickButton}
                className="main-episodes__button"
            >
                <span className="main-episodes__button-text">load more</span>
            </button>
       </main>
        </>
    )
}