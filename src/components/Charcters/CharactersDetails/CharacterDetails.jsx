import "./CharacterDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { useCharacterDetails } from "./useCharacterDetails";
import CharactersDetailsEpisodes from "./CharactersDetailsEpisodes/CharactersDetailsEpisodes";
import React, { useEffect, useState, useContext } from "react";
import Arrow from "./GoBackArrow.svg";
import axios from "axios";
import { MyContext } from "../../Context/Context";



export default function CharactersDetails() {
  const { id } = useParams();
  const { character, isLoading, loadCharacter } = useCharacterDetails();
  const [ episodes, setEpisodes] = useState([])
  const { setCharacterList } = useContext(MyContext)
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(character !== undefined){
      loadEpisodes(character.episode.slice(0, 4))
    }
  }, [isLoading])

  function reloadPage(){
    axios
    .get("https://rickandmortyapi.com/api/character")
    .then(res =>{ 
      setCharacterList(res.data.results)
    })
    .catch(error => console.error(error))
}

  function handleClickBack() {
    navigate("/");
    reloadPage()
  }

  function loadEpisodes(urls){
    urls.forEach((url)=>{
       axios
        .get(url).then(res => setEpisodes(itm =>[...itm, res.data]))
    })
  }


  useEffect(() => { 
    if (character === undefined){
         loadCharacter(id)
   }
  }, [character, isLoading, loadCharacter]);

  if (isLoading) {
    return <>loadin...</>;
  }

  return (
    <>
      <main className="main-character-details">
        <div className="main-character-details__container">
          <img
            onClick={handleClickBack}
            src={Arrow}
            alt="Arrow"
            className="main-character-details__go-back"
          />
          <div className="main-character-details__avatar-container">
            <img
              src={character.image}
              alt="Avatar"
              className="main-character-details__avatar"
            />
            <h4 className="main-character-details__avatar-title">
              {character.name}
            </h4>
          </div>
        </div>
        <div className="main-character-details__informaition-container">
          <div className="main-character-details__informaitions">
            <h4 className="main-character-details__informaition-title">
              Informations
            </h4>
            <div className="main-character-details__informaition-cart">
              <span className="main-character-details__informaition-cart-request">
                Gender
              </span>
              <span className="main-character-details__informaition-cart-response">
                {character.gender}
              </span>
            </div>
            <div className="main-character-details__informaition-cart">
              <span className="main-character-details__informaition-cart-request">
                Status
              </span>
              <span className="main-character-details__informaition-cart-response">
                {character.status}
              </span>
            </div>
            <div className="main-character-details__informaition-cart">
              <span className="main-character-details__informaition-cart-request">
                Specie
              </span>
              <span className="main-character-details__informaition-cart-response">
                {character.species}
              </span>
            </div>
            <div className="main-character-details__informaition-cart">
              <span className="main-character-details__informaition-cart-request">
                Origin
              </span>
              <span className="main-character-details__informaition-cart-response">
                {character.origin.name}
              </span>
            </div>
            <div className="main-character-details__informaition-cart">
              <span className="main-character-details__informaition-cart-request">
                Type
              </span>
              <span className="main-character-details__informaition-cart-response">
                Unknown
              </span>
            </div>
            <div className="main-character-details__informaition-cart">
              <span className="main-character-details__informaition-cart-request">
                Location
              </span>
              <span className="main-character-details__informaition-cart-response">
                {character.location.name}
              </span>
            </div>
          </div>
          <div className="main-character-details__episodes">
            <h4 className="main-character-details__episodes-title">Episodes</h4>
                {episodes && episodes.map((item, index) =>{
                return  <CharactersDetailsEpisodes key={index} name={item.name} episode={item.episode} airDate={item.air_date} />
                 })}
           </div>
        </div>
      </main>
    </>
  );
}
