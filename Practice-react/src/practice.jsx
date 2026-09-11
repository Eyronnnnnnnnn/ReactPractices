import { useState } from "react";



function DisplayNumbers(props){

  

    return(
        <div className="" >
            <h1 className="text-black">Please Pick to display numbers</h1>
          <button className="bg-slate-400 w-20 h-10 mr-6 ml-9  "
          onClick={()=>props.setNum(1)}
          >1</button>

          <button className="bg-slate-400 w-20 h-10 "
          onClick={()=> props.setNum(2)}
          >2</button>
        
         <h1>YOU PICK : {props.shownum}</h1>

        </div>
    )
}

export default function Practice(props){
 
   const [numbers , setNumbers] = useState(0);


    return(
      
       <DisplayNumbers 
       shownum = {numbers}
       setNum = {setNumbers}
       />
    )
}