
import { useMemo ,useState} from "react"
export default function UseMemo(){

   const[number , setNumber] = useState(0)
   const [text, setText] = useState("");

    const normalFunction = ()=>{
        console.log("computation of normalFunciton is running");
    }

    const memoizedFunction = useMemo(()=>{
         console.log("computation of memoizedFunction is running");
    },[number]);
     normalFunction();

    return(
        <div>
           <div>

            <button
            onClick={()=>setNumber( number + 1)}
            >increment </button>
            <input
            value={text}
            onChange={(e)=> setText(e.target.value)}
            ></input> 

          
           </div>
        </div>
    )
}