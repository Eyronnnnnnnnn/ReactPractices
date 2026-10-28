import { useState,useEffect } from "react"

const useFetch = (url)=> {
    const [data,setData] = useState(null);
    const[loading,setLoading] = useState(true);
    const [error,setError] = useState(false)
    
    useEffect(()=>{
        const FetchData = async()=>{

          

            try{
            const response = await fetch(url);

              if(!response.ok){
                throw new Error("something is wrong ")
              }
            const result = await response.json();
            setData(result)
            setLoading(false)
            console.log(result)

            }catch(error){
                setError(true)
                console.log(error);
            }
       
        }
        FetchData()
    },[url])

    return{data,loading,error}

}

export default function UseFetchPrac(){
    const {data,loading,error} = useFetch("https://pokeapi.co/api/v2/pokemonn?limit=20");
    return(
        <div>
          {!loading ? (<h1>{data.results.map((d,index)=>(
            <p key ={d.name}># {index + 1} pokemon names : <span className="text-lg font-bold">{d.name}</span> </p>
          ))}</h1>) : (<h1>loading...</h1>)
          
          }
         {error === true ? (<h1>Error</h1>) : (<h1>responded</h1>)}
        </div>
    )
}