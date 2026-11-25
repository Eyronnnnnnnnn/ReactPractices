
    import { BrowserRouter,Routes,Route,Link } from "react-router-dom"


    function HomePage(){
        return(
            <div>
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
            <div>
                <h1>Register Page</h1>
            </div>
        )
    }

    function Home(){
        return(
            <div>
                <h1>Home Page</h1>
            </div>
        )
    }

    export default function ReactRouter(){
   return(
    <div>
       <BrowserRouter>
         <Routes>
            
         </Routes>
       </BrowserRouter>
    </div>
   )
    }