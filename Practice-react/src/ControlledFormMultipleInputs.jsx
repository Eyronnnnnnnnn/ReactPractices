    import { useState } from "react"

    export default function ControlledFormMultipleinputs(){

        const [form,setForm] = useState({name : "" , email : ""})
        const [form2 ,setForm2] = useState({name : "", email : ""})

    
        return(
            <div className=" h-screen w-screen flex flex-col justify-center items-center">
                <div className="p-20">
                    <form action="">
                        <label>Enter name : </label>
                        <input 
                        value={form.name}
                        onChange={(e)=>setForm({...form , name : e.target.value})}
                        placeholder="Name"
                        type="text" />

                        <label>Enter email : </label>
                        <input
                        value={form.email}
                        onChange={(e)=>setForm({...form , email : e.target.value})}
                        placeholder="Email"
                        type="email" />
                    </form>
                </div>

                <div>
                <h1>Controlled Forms Multiple inputs 1 function handler</h1>
                <form action="">
                        <label>Enter name : </label>
                        <input 
                        
                        
                        placeholder="Name"
                        type="text" />

                        <label>Enter email : </label>
                        <input

                    
                        placeholder="Email"
                        type="email" />
                    </form>
                </div>
            </div>
        )
    }