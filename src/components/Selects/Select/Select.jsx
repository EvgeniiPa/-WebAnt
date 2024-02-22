import "./Select.css"

export default function Select({placeholder}){
    return(
        <>
         <select className="slects__serch">
             <option className="slects__option" value="Species">{placeholder}</option>
         </select>
        </>
    )
}