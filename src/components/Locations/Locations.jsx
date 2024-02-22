import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import Logo from "./Lokation.svg";
import Iinputs from "../Input/Inputs"; 
import "./Locations.css"
import { MyContext  } from "../Context/Context";
import Select from "../Selects/Select/Select";
import LocationCard from "./LocationCard/LocationCard";


export default function Locations(){
    const [pageCount, setPageCount] = useState(2)
    const {locationList, setLocationList, episodeList, setEpisodeist} = useContext(MyContext)
    const navigate = useNavigate();

    function handlerClickCart(id){
      navigate(`/location/${id}`)
      setEpisodeist(locationList[id - 1])
    }

    function handleClickButton(){
      axios.get(`https://rickandmortyapi.com/api/location/?page=${pageCount}`)
      .then(res => setLocationList([...locationList, ...res.data.results ]))
      .catch(error => console.error(error))
      setPageCount(count => count + 1)
    }

    return(
       <>
       <main className="main-locations">
        <img className="main-locations__imag" src={Logo} alt="Logotipe" />
        <div className="main-locations__selects">
           <Iinputs type={'location'}/>
           <Select placeholder={'Type'}/>
           <Select placeholder={'Dimension'}/>
        </div>
        <div className="main-locations__contant-wrapper">
            {locationList.map((item)=>{
              return  <LocationCard id={item.id} name={item.name} type={item.type} key={item.created} onClick={()=>handlerClickCart(item.id)}/>
            })}
        </div>
          <button
            onClick={handleClickButton}
            className="main-locations__button"
          >
            <span className="main-locations__button-text">load more</span>
         </button>
       </main>
       </>
    )
}