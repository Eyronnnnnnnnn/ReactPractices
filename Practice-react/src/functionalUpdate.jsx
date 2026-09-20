import {useState} from "react"

export default function FunctionalUpdate(){
    const [count,setCount] = useState(0);

    function handleClick(){
      setCount(prevcount=>prevcount + 1);
      setCount(prevcount=>prevcount + 1);
      setCount(prevcount=>prevcount + 1);
    }
 
    return(
     <div>
        <h1>number : {count}</h1>
        <button
        onClick={handleClick}
        >Count</button>
     </div>
    )
}