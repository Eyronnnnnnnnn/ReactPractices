import { useContext } from "react"
import NameContext from "./NameContext"

export default function Child(){

    NameContext = useContext();
    return(
        <div>
            <p></p>
        </div>
    )
}