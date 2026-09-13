import {useState} from "react"
export default function StateArrayofObject (){

    const [cars,setCars] = useState([
  {id: 1, brand: "Honda"},
  {id: 2, brand: "Toyota"}
    ]);

    function setcar(){
        setCars([...cars, {id : cars.length , brand : "byd"}])
    }
   

// cars.map((car)=>car.brand === "Honda" ? {...car , brand : "Mazda"} : car)

return(
    <div>
        
        {cars.map((car,index)=> <h1 key={index}>{car.brand}</h1> )}
        <button
        onClick={() => setcar()}
        className="bg-slate-700">
            add car 
        </button>
    </div>
)

}