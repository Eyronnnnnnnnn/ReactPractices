
import { useEffect, useState } from "react";

function uselocalstorage(key,initialvalue){

 const [value,setValue] = useState(()=>{
     const savedValue = localStorage.getItem(key);
     return savedValue ? JSON.parse(savedValue) : initialvalue;
   
 })
 useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(value))
},[key,value])

   return [value,setValue]
}



export default function UseLocalStorage(){
   
    const [count ,setCount] = uselocalstorage("count" , 0);

    function clearLocalStorage(){
        localStorage.clear()
    }

    return(
        <div>
            <h1> click : {count}</h1>
            <button
            onClick={()=> setCount(count + 1)}
            >PLUS 1</button>
            <button
            onClick={()=> clearLocalStorage()}
            >Clear</button>
        </div>
    )
}