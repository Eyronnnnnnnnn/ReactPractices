import { useState } from "react"


  function useCounter(){
        const [count , setCount] = useState(0);

        function increment(){
          setCount(c => c + 1);
        }

        return{count, increment}

    }

export default function CustonHooks(){

    const{count , increment} = useCounter();
    const{count :  count1 , increment : increm} = useCounter();
    const {count : count2 , increment : increm2} = useCounter();

    return(
        <div>
            <h1>{count}</h1>
            <button
            onClick={increment}
            >count</button>
            
            <h1>second count : {count1}</h1>
            <button
            onClick={increm}
            >
                Count again
            </button>

<h1>Third Counter : {count2}</h1>
<button
onClick={increm2}
>
    Count again 2
</button>

        </div>
    )
}