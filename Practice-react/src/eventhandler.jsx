import {useState} from "react"



export default function Eventhandler(){
   
    const [check,setCheck] = useState(false);
   let status = check  ? "true" : "false";

return(
    <div className="flex flex-col justify-center items-center w-screen h-screen">
        <label>check this </label>
     <input
     checked={check}
     onChange={(event)=> setCheck(event.target.checked)}
     className="bg-slate-600"
     type="checkbox" />
        <h1>hello world</h1>
        <h1> you {status}</h1>
    </div>
)

}