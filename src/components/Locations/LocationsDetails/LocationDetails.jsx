import Arrow from "./GoBackArrow.svg";
import axios from "axios";
import "./LocationsDetails.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../Context/Context";

export default function LocationDetails(){
    const {locationList, setLocationList, episodeList, setEpisodeist} = useContext(MyContext)
    const navigate = useNavigate()

    console.log(episodeList)

    function reloadPage(){
        axios
        .get("https://rickandmortyapi.com/api/location")
        .then(res => setLocationList(res.data.results))
        .catch(error => console.error(error))
    }

    function handleClickBack() {
        navigate("/location");
        reloadPage()
      }

    return(
        <>
        <main className="main-location-details">
            <div className="main-location-details__head-container">
                <img onClick={handleClickBack} className="main-location-details__arrow" src={Arrow} alt="Arrow go back" />
                <div className="main-location-details__title-container">
                     <h2 className="main-location-details__title">{episodeList.name}</h2>
                     <div className="main-location-details__sub-titles-box">
                        <div className="main-location-details__type-box">
                            <h5 className="main-location-details__type">Type</h5>
                            <div className="main-location-details__type-text">{episodeList.type}</div>
                        </div>
                            <div className="main-location-details__type-box">
                            <h5 className="main-location-details__type">Dimension</h5>
                        <div className="main-location-details__type-text">{episodeList.dimension}</div>
                     </div>
                     </div>
                </div>
            </div>
        </main>
        </>
    )
}