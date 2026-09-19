import {useState} from "react"


export default function Eventhandler(){
   
    const [check,setCheck] = useState(false);
   let status = check  ? "true" : "false";

   
function handleSubmit(event){
   console.log("submited")
event.preventDefault();
}

return(
    <div className="flex flex-col justify-center items-center w-screen h-screen">
        <label>check this </label>
        
        
      <form onSubmit={handleSubmit}>
         <input
     checked={check}
     onChange={(event)=> (
        setCheck(event.target.checked)
      
     )}
     className="bg-slate-600"
     type="checkbox" />
     <button type="submit">submit</button>
      </form>
        <h1>hello world</h1>
        <h1> you {status}</h1>
    </div>
)

}