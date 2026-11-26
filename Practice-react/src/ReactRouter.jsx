
    import { BrowserRouter,Routes,Route,Link } from "react-router-dom"


    function HomePage(){
        return(
            <div className="bg-red-600 w-screen ">
                <h1>Home Page</h1>
            </div>
        )
    }

    function LogInPage(){
        return(
            <div>
                <h1>Login Page</h1>
            </div>
        )
    }


    function RegisterPage(){
        return(
            <div className="bg-blue-800 w-screen h-10">
                <h1>Register Page</h1>
            </div>
        )
    }

 
    export default function ReactRouter(){
   return(
    <div>
       <BrowserRouter>

       

         <Routes>
            <Route path="/" element ={<HomePage/>}></Route>
            <Route path="/LogInPage" element = {<LogInPage/>}></Route>
            <Route path="/RegisterPage" element = {<RegisterPage/>}></Route>
         </Routes>
         <Link to ="/LogInPage">Login</Link>
         <Link to = "/RegisterPage">Register</Link>
       </BrowserRouter>
    </div>
   )
    }d