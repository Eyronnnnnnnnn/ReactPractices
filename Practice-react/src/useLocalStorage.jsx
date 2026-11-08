
import { useState } from "react";

function uselocalstorage(key,initialvalue){

 const [value,setValue] = useState(()=>{
     const savedValue = localStorage.getItem(key);
     return savedValue ? JSON.parse(savedValue) : initialvalue;
   
 })

   return [value,setValue]
}



export default function UseLocalStorage(){
   
    const [count ,setCount] = useState(0);


    return(
        <div>
            <h1>click : {count}</h1>
            <button
            onClick={()=> setCount(count + 1)}
            >PLUS 1</button>
        </div>
    )
}