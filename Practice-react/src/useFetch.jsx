        import { useEffect, useState } from "react";

        function useFetch(url){
        const [data,setData] = useState(null);
        const [loading , setLoading] = useState(true);
        const [error ,setError] = useState(null);

        useEffect(()=>{

        const FetchUser = async()=>{
            try{
            const response =  await fetch(url)

            if(response.ok){
               const result = await response.json();
            setData(result)
            setLoading(false)
            }else{
                throw new Error("failed to fetch data")
            }

         
            }catch(error){
                setLoading(false)
                setError(error.message)
            }
        }
        FetchUser();

        },[url])


    return {data,loading,error}
        }

        export default function UseFetch(){
    
        const {data,loading,error} =  useFetch("https://jsonplaceholder.typicode.com/posts")
            
    
        console.log(error);
    
            return(
                <div>
                    {!loading  ? (<h1>{data.map((d)=>(
                        <p key = {d.id}>{d.title}</p>
                    ))}</h1>) : (<h1>loading</h1>) }
                  
                </div>
            )
        }