import { useState } from "react"

export default function ControlledFormMultipleinputs(){

    const [form,setForm] = useState({name : "" , email : ""})


   \
    return(
        <div className=" h-screen w-screen flex justify-center items-center">
            <div>
                <form action="">
                    <label>Enter name : </label>
                    <input 
                    value={form.name}
                    placeholder="Name"
                    type="text" />

                    <label>Enter email : </label>
                    <input
                    value={form.email}
                    onChange={(e)=>setForm({})}
                    placeholder="Email"
                    type="email" />
                </form>
            </div>
        </div>
    )
}