import { useContext } from "react"
import NameContext from "./NameContext"

export default function Child(){

const name = useContext(NameContext);
    
    return(
        <div>
            <p>my name is {name}</p>
        </div>
    )
}