import { useEffect } from "react";

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

export default function useDebouncePracticev2(){
    return(
        <div>

        </div>
    )
}