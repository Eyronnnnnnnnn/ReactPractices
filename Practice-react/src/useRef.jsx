import { useRef, useState,useEffect} from "react"



export default function UseRef(){

    const manipulation = useRef(null);

   

    useEffect(()=>{
          manipulation.current.focus();
          
    },[])

return(
    <div>
        <h1>hello world</h1>
        <input
        ref={manipulation}
        placeholder="Input"></input>
    </div>
)
}