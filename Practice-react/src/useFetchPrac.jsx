import { useState,useEffect } from "react"

const useFetch = (url)=> {
    const [data,setData] = useState(null);
    const[loading,setLoading] = useState(true);
    
    useEffect(()=>{
        const FetchData = async()=>{

            try{
            const response = await fetch(url);
            const result = await response.json();
            console.log(result)

            }catch(error){
                console.log(error);
            }
       
        }
        FetchData()
    },[url])
  
    return{data,loading}

}

export default function UseFetchPrac(){
    const {data} = useFetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    return(
        <div>

        </div>
    )
}