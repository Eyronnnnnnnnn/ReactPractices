import { useEffect,useState } from "react"
export default function UseEfect(){
const [team , setTeam] = useState(0)

useEffect(()=>{
console.log("Current Players : ",team);

},[team]);

    return(
        <div>
            <button
            onClick={()=>setTeam(team + 1)}
            >Add person</button>
            <button
            onClick={()=>setTeam(team - 1)}
            >remove person</button>
            
        </div>
    )
}