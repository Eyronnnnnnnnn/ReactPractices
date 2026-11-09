import { useRef } from "react";

export default function UncontrolledForm(){
  

    const nameRef = useRef()

    const HandleEvent =  (event)=>{
     console.log(nameRef.current.value)
    }

 return (



    <div className="w-screen h-screen flex justify-center items-center">
       
       <div>
        <label>Enter Name</label>
        <input
        ref={nameRef}
        onChange={HandleEvent}
        className="border border-black"
        type="text"  placeholder="Enter Name"/>
       </div>
       
    </div>
 )
}