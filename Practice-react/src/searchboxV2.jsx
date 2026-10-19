
import { useState } from "react"
export default function Searchboxv2(){
    const [movie,setMovie] = useState([
        { id : 1, MovieTitle : "SpiderMan " ,Prize : 300},
         { id : 2, MovieTitle : "Avengers " ,Prize : 400},
          { id : 3, MovieTitle : "SpiderMan " ,Prize : 600}
    ]);

    const [search ,setSearch] = useState("");

    const searchedList = list.filter((li)=> li.id === li.MovieTitle.includes(search))

    return(
        <div className="bg-red-600 w-screen h-screen flex  flex-col justify-center items-center">
            <div className="bg-slate-500 h-3/4 w-96 rounded-lg ">
            <div className="   h-36 flex justify-center items-center" >
               <div className="  bg-black">
                <input 
                placeholder="Search Movie"
                className="w-72 pl-3"
                type="text" />
               </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                {searchedList.map((li)=>(
              <div 
              key={li.id}
              className="h-11">
                {li.MovieTitle}
             </div>
            ))}
            </div>
            
            
            </div>
        </div>
    )
}