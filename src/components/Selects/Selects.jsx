import "./Selects.css"
import Iinputs from "../Input/Inputs"

export default function Selects(){

    return(
     <>
        <div className="slects__serch-container">
                <Iinputs type={"character"}/>
                <select className="slects__serch">
                    <option className="slects__option" value="Species">Species</option>
                </select>
                <select className="slects__serch">
                    <option className="slects__option" value="Gender">Gender</option>
                    </select>
                <select className="slects__serch">
                    <option className="slects__option" value="Status">Status</option>
                </select>
        </div>
     </>
    )
}