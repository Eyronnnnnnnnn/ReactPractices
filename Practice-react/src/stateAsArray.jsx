import {useState} from "react";


export default function StateAsArray(){

    const [carbrand , setCarbrand] = useState(["Honda","Toyota","BYD"]);

    

    function addCarBrand(){
      setCarbrand([...carbrand,"Ford"]);
    }

    function removeCarBrand(){
      setCarbrand(carbrand.filter(car => car !== "BYD"));  
    }

    function changeCar(){
        setCarbrand(carbrand.map(car => car === "Honda" ? "Mazda" : car))
    }

return(
 <div>
   {carbrand.map((car,index) => <h1 key={index}> {car} </h1>)}
   <button className="bg-slate-800 text-white ml-3 mr-4"
   onClick={addCarBrand}
   >add ford</button>


<button className="bg-slate-800 text-white ml-3"
   onClick={removeCarBrand}
   >remove car</button>   

   <button className="bg-slate-800 text-white ml-3"
   onClick={changeCar}
   >change honda to mazda</button>   
 </div>
)
}