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
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element = {<HomePage/>}></Route>
            <Route path = "/LoginPage" element = {<LoginPage/>}></Route>
            <Route path="/RegisterPage" element = {<RegisterPage/>}></Route>

          
        </Routes>
        </BrowserRouter>
    );
    }
