    import { use, useState } from "react";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";

    function HomePage() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
            <h1 className="text-4xl font-bold text-gray-800">Welcome Home!</h1>
            <p className="text-gray-500 mt-3">Welcome to my simple website.</p>
              <NavLink to= "/LoginPage">Login</NavLink>
              <NavLink to = "/RegisterPage">Register</NavLink>
              
        </div>
        
        </div>
    );

    }

    function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold text-gray-800">
        Dashboard
      </h1>
      <p className="text-gray-500 mt-2 mb-8">
        Welcome back, Aaron!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Total Users</p>
          <h2 className="text-3xl font-bold mt-2">1,240</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Total Products</p>
          <h2 className="text-3xl font-bold mt-2">350</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Total Sales</p>
          <h2 className="text-3xl font-bold mt-2">$5,200</h2>
        </div>

      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-xl shadow mt-8">
        <h2 className="text-xl font-bold mb-4">
          Recent Activity
        </h2>

        <p className="text-gray-600 border-b py-3">
          New user registered
        </p>

        <p className="text-gray-600 border-b py-3">
          New product added
        </p>

        <p className="text-gray-600 py-3">
          New order received
        </p>
      </div>

    </div>
  );
}



    function LoginPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
            <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

            <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg mb-4 outline-blue-500"
            />

            <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg mb-5 outline-blue-500"
            />

            <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
            Login
            </button>
            <NavLink to ="/LoginPage">Login</NavLink>
            <NavLink to = "/">back</NavLink>
        </div>
        </div>
    );
    }

    function RegisterPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
            <h1 className="text-3xl font-bold text-center mb-6">Register</h1>

            <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg mb-4 outline-blue-500"
            />

            <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg mb-4 outline-blue-500"
            />

            <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg mb-5 outline-blue-500"
            />

            <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
            Create Account
            </button>
            <NavLink to = "/">back</NavLink>
            <NavLink
            className={({isActive})=>(
                isActive ? "text-blue-600 " : "text-black"
            )}
            to={RegisterPage}>Register</NavLink>
        </div>
        </div>
    );
    }

    export default function ReactRouterPractice() {

        const [loginInput,setloginInput] = useState("");
        const [passwordInput, setpasswordInput] = useState();

        const Account = {
            Email : "Aaronguillermo@gmail.com",
            password : 12345
        };

        function HandleLogin(e){
            if()
        }

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element = {<HomePage/>}></Route>
            <Route path = "/LoginPage" element = {<LoginPage
            loginInput = {loginInput}
            passwordInput = {passwordInput}
            />}></Route>
            <Route path="/RegisterPage" element = {<RegisterPage/>}></Route>
            <Route path="/Dashboard" element ={<Dashboard/>}></Route>

          
        </Routes>
        </BrowserRouter>
    );
    }
