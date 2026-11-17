import { useEffect,useState } from "react";

function useDebounce (value,delay){
    const [debounceValue , setdebounceValue] = useState(value);

    useEffect(()=>{
        const timer = setTimeout(() => {
            
            setdebounceValue(value)

        }, delay);

        return ()=>{
            clearTimeout(timer);
        }
    },[value])

    return debounceValue
}

export default function UseDebouncePracticev2(){

    const username = [
        {id : 1 , name : "aaron"},
         {id : 2, name : "shane"},
          {id : 3 , name : "ailene"},
           {id : 4 , name : "gabby"},
            {id : 5 , name : "mica"}
    ]

    const debounceSearch = useDebounce()

    return(
        <div>
          {username.map((username)=>(
            <div key={username.id}>
                 <h1>{username.name}</h1>
            </div>
          ))}
        </div>
    )
}