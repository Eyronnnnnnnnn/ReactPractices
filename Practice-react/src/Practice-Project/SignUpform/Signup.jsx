import { useState } from "react"

function SignupBox({setForm,HandledInput,form}) {
    return (
        <div className="bg-white w-96 rounded-2xl p-7">

            <div className="text-center mb-6">
                <h1 className="font-serif text-lg">
                    MARIANO MARCOS STATE UNIVERSITY
                </h1>
                <p className="text-gray-500 text-sm">
                    Create your account
                </p>
            </div>

            <div className="space-y-4">

                <div>
                    <label>Full Name</label>
                    <input
                        value = {form.Fullname}
                        onChange={HandledInput}
                        name = "Fullname"
                        type="text"
                        placeholder="Enter your name"
                        className="w-full border border-gray-400 rounded-md p-2"
                    />
                </div>

                <div>
                    <label>Email</label>
                    <input
                    name="Email"
                    value = {form.Email}
                    onChange={HandledInput}
                        type="email"
                        placeholder="Enter your email"
                        className="w-full border border-gray-400 rounded-md p-2"
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input
                    name="Password"
                    value={form.Password}
                    onChange={HandledInput}
                        type="password"
                        placeholder="Enter your password"
                        className="w-full border border-gray-400 rounded-md p-2"
                    />
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input
                    name="ConfirmPassword"
                    onChange={HandledInput}
                    value={form.ConfirmPassword}
                        type="password"
                        placeholder="Confirm your password"
                        className="w-full border border-gray-400 rounded-md p-2"
                    />
                </div>

                <button className="w-full bg-green-700 text-white p-2 rounded-md">
                    Sign Up
                </button>

            </div>

        </div>
    )
}

export default function Signup() {
    const [form ,setForm] = useState(
        {Fullname : "" ,
        Email : "" ,
        Password : "" ,
        ConfirmPassword : "" 
         }
    
    )

  function HandledInput(event){
            const {name , value} = event.target

            setForm(
                {...form , [name] : value}
            )
         }

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-gray-800/60">
            <SignupBox 
            form = {form}
            setForm = {setForm}
            HandledInput ={HandledInput}
            />
        </div>
    )
}