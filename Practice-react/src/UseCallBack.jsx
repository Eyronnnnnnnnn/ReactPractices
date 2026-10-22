import { useState,memo,useMemo, useCallback } from "react"


const ChildConponent =  memo(function ChildConponent({HandleClick}){
    console.log("Rendered");
    return (
        <div>
           <h1>rendered</h1>
           <button
           onClick={()=>HandleClick()}
           >Click</button>
        </div>
    )
})



// parent component
export default function UseCallBack(){
    const [count ,setCount ] = useState(0);

    const HandleClick = useCallback(function HandleClick(){
        console.log(count)
    },[count])
    
    return(
        <div>
            
           <button
           onClick={()=> setCount(add=> add + 1)}
           >Increment +</button>
           <h1> TOTAL CLICK : {count} </h1>
           <ChildConponent
           HandleClick = {HandleClick}
           />
        </div>
    )
}