import { useState } from "react";



function DisplayNumbers(props){
    return(
        <div className="" >
            <h1 className="text-black">Please Pick to display numbers</h1>
          <button className="bg-slate-400 w-20 h-10 mr-6 ml-9 " >1</button>
          <button className="bg-slate-400 w-20 h-10 ">2</button>
        
         <h1>YOU PICK : {props.number2}</h1>

        </div>
    )
}


export default function Practice(props){
 
     const [num1 , Setnum1] = useState(1);
    const [num2 , Setnum2] = useState(2);

    return(
      
       <DisplayNumbers 
       number1 = {num1}
       number2 = {num2}
       />
    )
}