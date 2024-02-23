import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import Logo from "./RickAndMorty.svg";
import Selects from "../Selects/Selects";
import "./Characters.css";
import { MyContext  } from "../Context/Context";




export default function Characters() {
  const [pageCount, setPageCount] = useState(2)
  const { characterList, setCharacterList }  = useContext(MyContext)
  const navigate = useNavigate();


  function handleClick(){
    axios.get(`https://rickandmortyapi.com/api/character/?page=${pageCount}`)
    .then(res => setCharacterList([...characterList, ...res.data.results ]))
    .catch(error => console.error(error))
    setPageCount(count => count + 1)
  }

  function handleClickCart(id){  
    navigate(`/character/${id}`)
  }

  return (
    <main className="main">
      <div className="main__logo-container">
        <img className="main__logotipe" src={Logo} alt="Logotipe" />
      </div>
      <Selects/>
      <div className="main__contant-container">
        {characterList.map((item) => {
          return (
            <div onClick={()=> handleClickCart(item.id)} key={item.id + item.name} className="main__contant-cart">
              <img
                className="main__contant-img"
                src={item.image}
                alt="avatar"
              />
              <h4 className="main__contant-name">{item.name}</h4>
              <span className="main__contant-species">{item.species}</span>
            </div>
          );
        })}
      </div>
      <button
        onClick={handleClick}
        className="main__button-container"
      >
        <span className="main__button-text">load more</span>
      </button>
    </main>
  );
}
