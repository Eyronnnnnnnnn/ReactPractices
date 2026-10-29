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
                setLoading(false)
                console.log(error);
            }
       
        }
        FetchData()
    },[url])

    return{data,loading,error}

}

export default function UseFetchPrac(){
    const {data,loading,error} = useFetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const {data : data2, loading : loading1 ,error : error1} = useFetch("https://jsonplaceholder.typicode.com/posts");
    return(
        <div>
          {loading ?(<h1>Loading...</h1>) 
           : error ? ("error") : (<h1>{data.results.map((d,index)=>(
            <p key ={d.name}># {index + 1} pokemon names : <span className="text-lg font-bold">{d.name}</span> </p>
          ))}</h1>)
          
          }

          <div>
            <h1>DATA 2 : </h1>
            {loading1 ? (<h1>loading...</h1>) : error1 ? ("Error Fetching Data")
            
            : (<h1>{data2.map((d)=>(
            <div key={d.id}>
              <p key = {d.id}> User Number 1  </p> 
              <p key={d.userId}>Posts : {d.title} </p>
            </div>
           
               
            
            ))}</h1>)}
          </div>
       
        </div>
    )
}