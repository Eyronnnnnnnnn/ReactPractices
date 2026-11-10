import { useState } from "react"

function SignupBox(form,setForm) {
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
                        type="text"
                        placeholder="Enter your name"
                        className="w-full border border-gray-400 rounded-md p-2"
                    />
                </div>

                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full border border-gray-400 rounded-md p-2"
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full border border-gray-400 rounded-md p-2"
                    />
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input
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
        ConfirmPassword : "" ,
         }
    
    )
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-gray-800/60">
            <SignupBox 
            form = {form}
            setForm = {setForm}
            />
        </div>
    )
}