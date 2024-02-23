import ArrowBack from './ArrowBack.svg';
import "./EpisodesDetails.css"
import EpisodesDetailsCard from './EpisodesDetailsCard/EpisodesDetailsCard';
import { useEffect, useState, useContext } from 'react';
import { MyContext } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function EpisodesDetails(){
    const {episodesList, episodesResidents, setEpisodesList } = useContext(MyContext)
    const [episodeResidentsList, setEpisodeResidentsList] = useState([])
    const navigate = useNavigate()

    function handleClickBack(){
        reloadPage()
        navigate('/episode')
    }

    function reloadPage(){
        axios.get(`https://rickandmortyapi.com/api/episode`)
        .then(res => setEpisodesList(res.data.results))
        .catch(error => console.error(error))
    }

  function loadCharacters(urls){
    urls.forEach((url)=>{
        axios.get(url)
        .then(res => {
            console.log(res.data)
            setEpisodeResidentsList(itm => [...itm, res.data])     
        })
        .catch(error => console.error(error))
    })
  }

  useEffect(()=>{
    console.log(episodeResidentsList)
  }, [episodeResidentsList])

  useEffect(()=>{
   if(episodesResidents !== undefined){
       loadCharacters(episodesResidents.characters)
     console.log(episodesResidents)
   }
  }, [episodesResidents])



    return(
        <>
         <main className="main-episodes-details">
            <div className="main-episodes-details__head-container">
                <img onClick={handleClickBack} className="main-episodes-details__arrow" src={ArrowBack} alt="Arrow go back" />
                <div className="main-episodes-details__title-container">
                     <h2 className="main-episodes-details__title">{episodesResidents.name}</h2>
                     <div className="main-episodes-details__sub-titles-box">
                        <div className="main-episodes-details__type-box">
                            <h5 className="main-episodes-details__type">Episode</h5>
                            <div className="main-episodes-details__type-text">{episodesResidents.episode}</div>
                        </div>
                            <div className="main-episodes-details__type-box">
                            <h5 className="main-episodes-details__type">Date</h5>
                        <div className="main-episodes-details__type-text">{episodesResidents.air_date}</div>
                     </div>
                     </div>
                </div>
            </div>
            <div className="main-location-details__card-container">
                {episodeResidentsList.map((item, index)=>{
                    return <EpisodesDetailsCard key={index} image={item.image} name={item.name} species={item.species}/>
                })}
            </div>
        </main>
        </>
    )
}