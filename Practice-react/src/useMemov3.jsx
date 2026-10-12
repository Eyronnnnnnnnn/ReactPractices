    import {  useMemo, useState } from "react"

    export default function UseMemov3(){
            const [ item ,setItem] = useState([
                {id: 1 , Fruits : "orange"},
                {id: 2 , Fruits : "apple"},
                {id: 3 , Fruits : "banna"},
        ]);
        const [query ,setQuery] = useState("");
        const [darkmode,setdarkMode] = useState(null)

        const filteredFruits = useMemo(()=>{
        const fruitfilter = item.filter(fruit => fruit.Fruits.includes(query) );
fruitfilter
        return fruitfilter;
        },[query,item])

        return(
            <div className="flex justify-center items-center bg-slate-600 h-screen">
            <div className="bg-red-400 w-3/6 h-40">
            {filteredFruits.map((list)=>(
                
                <div key={list.id}>
                    <h1>{list.Fruits}</h1>
                    
                </div>
            ))}
                <input
                value={query}
                onChange={(e)=> setQuery(e.target.value)}
                ></input>
            </div>
            </div>
        )
    }