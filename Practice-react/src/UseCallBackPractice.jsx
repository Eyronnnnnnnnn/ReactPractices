import { memo ,useState,useCallback } from "react"

const ChildComponent = memo(function ChildComponent ({click}){
    console.log("rendered");
  
    return(
        <div>
        </div>
    )
})

function Testing(){
    console.log("Testing");
}
export default function UseCallBackPractice(){
    const[click,setClick] = useState(0);

    const handleClick =  useCallback(function handleClick(){
     console.log("has rendered ")
    },[click])
        
    

    return(
        <div>
          
        
         <ChildComponent
         handleClick={handleClick}
         />
         <button
         onClick={()=> setClick(c=> c + 1)}
         >Plus + 1</button>
          <h1>you Clicked : {click}</h1>
        </div>
    )
}