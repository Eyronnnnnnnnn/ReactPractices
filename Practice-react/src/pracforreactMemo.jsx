import { useState,memo, useCallback } from "react"
const ChildComponent = memo(function ChildComponent ({onGreet}){
    console.log("rendered");
   onGreet()
    return(
        <div>
            
        </div>
    )
})


   
   
export default function PracforreactMemo(){

     const [count,setCount] = useState(0);
    const Greet = useCallback(()=>{
        console.log("Greet");
        return(
            <div>
            </div>
        )
    },[])

   
   

   
    return (
        <div>
            <h1>Clicked : {count}</h1>
            <button 
            onClick={()=> setCount(newCount => newCount + 1)}
            className="bg-red-700 py-2 px-8 text-white rounded-lg">+ 1</button>
            <ChildComponent 
            onGreet = { Greet}
             />
        </div>
    )
}