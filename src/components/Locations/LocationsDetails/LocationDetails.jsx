import Arrow from "./GoBackArrow.svg";
import axios from "axios";
import "./LocationsDetails.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { MyContext } from "../../Context/Context";
import LocationsDetailsCard from "./LocationsDetailsCard/LocationsDetailsCard";

export default function LocationDetails(){
    const { setLocationList, locationEpisode } = useContext(MyContext)
    const [residentsList, setResidentsList] = useState([])
    const navigate = useNavigate()

    function reloadPage(){
        axios
        .get("https://rickandmortyapi.com/api/location")
        .then(res => setLocationList([]))
        .catch(error => console.error(error))
    }

    function handleClickBack() {
        navigate("/location");
        reloadPage()
      }
      
      function loadResidents(urls){
        urls.forEach((url)=>{
           axios
            .get(url).then(res => {
                setResidentsList(itm =>[...itm, res.data])
            })
        })
      }
    
      useEffect(()=>{
            axios.get('https://rickandmortyapi.com/api/location')
            .then(res => setLocationList(res.data.results))
            .catch(error=> console.error(error))
      },[])

      useEffect(()=>{
        if(residentsList !== undefined){
            loadResidents(locationEpisode.slice(0, 4))
        }
      }, [])


  return(
        <>
        <main className="main-location-details">
            <div className="main-location-details__head-container">
                <img onClick={handleClickBack} className="main-location-details__arrow" src={Arrow} alt="Arrow go back" />
                <div className="main-location-details__title-container">
                     <h2 className="main-location-details__title">{residentsList.name}</h2>
                     <div className="main-location-details__sub-titles-box">
                        <div className="main-location-details__type-box">
                            <h5 className="main-location-details__type">Type</h5>
                            <div className="main-location-details__type-text">{residentsList.type}</div>
                        </div>
                            <div className="main-location-details__type-box">
                            <h5 className="main-location-details__type">Dimension</h5>
                        <div className="main-location-details__type-text">{residentsList.dimension}</div>
                     </div>
                     </div>
                </div>
            </div>
            <div className="main-location-details__card-container">
                {residentsList.map((item, index)=>{
                    return <LocationsDetailsCard key={index} image={item.image} name={item.name} species={item.species}/>
                })}
            </div>
        </main>
        </>
    )
}