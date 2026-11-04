import { useState, useEffect } from "react";

const debounce = (search,delay) => {
    const [debouncedValue,setDebounceValue] = useState(search)
  useEffect(()=>{
 const timer = setTimeout(()=>{
    setDebounceValue(search)
 },[delay])

 return ()=>{
    clearTimeout(timer)
 }
  },[search])
}

export default function useDebounce() {
  const movie = [
    { id: 1, title: "spiderman " },
    { id: 2, title: "Batman " },
    { id: 3, title: "Warcraft " },
    { id: 4, title: "Avengers " },
    { id: 5, title: "Need For Speed" },
    { id: 6, title: "Harry potter " },
    { id: 7, title: "Barney" },
  ];
  const [search ,setSearch] = useState("");
  
  const searchedMovies = movie.filter((mov)=> mov.title.toLocaleLowerCase().includes(search.toLowerCase()))
  
  return (
    <div>
        <input 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="border-2 border-solid border-gray-800"
        type="text" placeholder="Search movie"/>
        {searchedMovies.map((movie)=>(
            <div key ={movie.id}>
                <h1>{movie.title}</h1>
                 </div>
        ))}
      
    </div>
  );
}
