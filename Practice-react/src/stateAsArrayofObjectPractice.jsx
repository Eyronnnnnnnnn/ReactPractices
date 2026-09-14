import {useState} from 'react'


function Display(props) {
  return (
    <div className="p-6 max-w-2xl mx-auto bg-neutral-900 rounded-xl shadow-lg border border-red-500">
      <h1 className="text-2xl font-bold text-red-500 uppercase tracking-wide mb-6 text-center">
        Car Garage
      </h1>

      <div className="space-y-5">
        {props.cars.map((car,index) => (
          <div
            key={car.id}
            className="flex items-center gap-4 bg-neutral-800 p-4 rounded-lg border border-neutral-700 hover:border-red-500 transition-colors"
          >
            <img
              className="w-24 h-24 rounded-lg object-cover border border-red-500"
              src={car.img}
              alt={car.brand}
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-white uppercase tracking-wide">
                {car.brand}
              </h2>
              <p className="text-red-400 font-medium">{car.Price}</p>
            </div>

            <div className="flex flex-col gap-2">
              <input
              key={index}
              value={props.priceUpdate}
                onChange={(event)=> props.setUpdatedPrice(event.target.value)}
                type="text"
                placeholder="Set Price $"
                className="px-2 py-1 rounded-md text-sm bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button 
              onClick={()=> updatePrice()}
              className="bg-yellow-500 text-black px-3 py-1 rounded-md font-semibold text-xs uppercase hover:bg-yellow-600 transition">
                Update
              </button>
            </div>

            <button
              className="bg-red-600 text-white px-3 py-1 rounded-md font-semibold uppercase text-xs hover:bg-red-700 transition"
              onClick={() => props.deleteCar(car.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => props.addCar()}
        className="mt-6 w-full bg-red-600 text-white py-3 rounded-lg font-bold uppercase tracking-wide hover:bg-red-700 transition border border-white"
      >
        Add Car
      </button>
    </div>
  );
}


export default function StateArrayofObjectPractice (){

    const [cars,setCars] = useState([
        {id : 1 , brand : "Honda" , Price : "$1,600" , done : false , img : "https://www.pngplay.com/wp-content/uploads/7/Honda-Logo-Transparent-Background.png"},
        {id : 2 , brand : "Toyota" , Price : "$3,400" , done : false , img : "https://tse1.mm.bing.net/th/id/OIP.arB4JG8H6hDcgqNFtVLLYgHaGe?r=0&w=1574&h=1376&rs=1&pid=ImgDetMain&o=7&rm=3  "},  
        {id : 3 , brand : "Subaru" , Price : "$1,600" , done : false , img : "https://pluspng.com/img-png/subaru-logo-png-subaru-logo-hd-png-meaning-information-2560x1440.png"},
        {id : 4 , brand : "Mazda" , Price : "$3,400" , done : false , img : "https://logodownload.org/wp-content/uploads/2019/11/mazda-logo.png"}
       
    ]);

    const [priceUpdate , setUpdatedPrice] = useState("");

    function addCar(){
        setCars([...cars, {id : cars.length , brand : "lamborghini" , Price : "$8,900 ",done : false}])
    }

    function deleteCar(id){
        setCars( cars.filter((car)=> car.id !== id ));
      
    }

    function updatePrice(){
      setCars([...cars , {price : updatePrice}]);
    }



return(
<Display
cars = {cars}
addCar = {addCar}
deleteCar = {deleteCar}
priceUpdate = {priceUpdate}
setUpdatedPrice = {setUpdatedPrice}
updatePrice ={updatePrice}
/>
)
}