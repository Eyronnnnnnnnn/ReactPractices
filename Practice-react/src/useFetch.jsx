    import { useEffect, useState } from "react";

    function useFetch(url){
    const [data,setData] = useState(null);
    const [loading , setLoading] = useState(false);

    useEffect(()=>{

    const FetchUser = async()=>{
        try{
         const response =  await fetch(url)
         const data = await response.json();
        }catch(error){
            console.log(error);
        }
    }
    FetchUser();

    },[url])



    }

    export default function UseFetch(){
        return(
            <div>
                <h1></h1>
            </div>
        )
    }