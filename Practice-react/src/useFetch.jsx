        import { useEffect, useState } from "react";

        function useFetch(url){
        const [data,setData] = useState(null);
        const [loading , setLoading] = useState(true);
        const [error ,setError] = useState(null);

        useEffect(()=>{

        const FetchUser = async()=>{
            try{
            const response =  await fetch(url)
            const result = await response.json();
            setData(result)
            setLoading(false)
            }catch(error){
                setLoading(false)
                setError(error)
            }
        }
        FetchUser();

        },[url])


    return {data,loading}
        }

        export default function UseFetch(){
    
        const {data,loading} =  useFetch("https://jsonplaceholder.typicode.com/posts")
            
    
        console.log(data);
    
            return(
                <div>
                    {!loading  ? (<h1>{data.map((d)=>(
                        <p key = {d.id}>{d.title}</p>
                    ))}</h1>) : (<h1>loading</h1>) }
                    <h1></h1>
                </div>
            )
        }