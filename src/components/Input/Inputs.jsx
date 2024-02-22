import "./Inputs.css";
import Inputs from "./Inputs.svg";
import { useState, useContext } from "react";
import axios from "axios";
import { MyContext } from "../Context/Context";

//выдает ошибку если элемент будет назван просто Input

export default function Iinputs({type}) {
  const [searchText, setSearchText] = useState("");
  const { setCharacterList } = useContext(MyContext);

  function handlerSearch(){
      axios
        .get(`https://rickandmortyapi.com/api/${type}/?name=${searchText}&status=alive`)
        .then(res => setCharacterList([...res.data.results]))
        .catch(error => console.error(error))
  }

  function handlerInput(e){
    setSearchText(e.target.value)
    console.log(searchText, type)
  }
  
  return (
    <>
      <label className="input__wrapper" htmlFor="input">
        <img
          onClick={handlerSearch}
          className="input__img"
          src={Inputs}
          alt="Glass"
        />
        <input
          onChange={handlerInput}
          id="input"
          className="input__serch"
          type="text"
          placeholder="Filter by name..."
        />
      </label>
    </>
  );
}
