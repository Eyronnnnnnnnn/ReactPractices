import {useState} from 'react'


function Display(props) {
  return (
    <div className="p-6 max-w-md mx-auto bg-neutral-900 rounded-lg shadow-lg border-2 border-red-600">
      {props.cars.map((car) => (
        <div
          key={car.id}
          className="flex items-center gap-3 bg-neutral-800 p-3 mb-3 rounded-md border border-neutral-700 hover:border-red-500 transition"
        >
          <img
            className="w-20 h-20 rounded-md object-cover border-2 border-red-600"
            src={car.img}
          />
          <div className="flex-1">
            <h1 className="text-lg font-bold text-white uppercase tracking-wide">{car.brand}</h1>
            <p className="text-red-500 font-semibold">{car.Price}</p>
          </div>
          <button
            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition font-bold uppercase text-sm"
            onClick={() => props.deleteCar(car.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <button
        onClick={() => props.addCar()}
        className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg font-bold uppercase tracking-wide hover:bg-red-700 transition border-2 border-white"
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
         {id : 4 , brand : "Mazda" , Price : "$3,400" , done : false , img : "https://logodownload.org/wp-content/uploads/2019/11/mazda-logo.png"}
          {id : 4 , brand : "Mazda" , Price : "$3,400" , done : false , img : "https://logodownload.org/wp-content/uploads/2019/11/mazda-logo.png"}
           {id : 4 , brand : "Mazda" , Price : "$3,400" , done : false , img : "https://logodownload.org/wp-content/uploads/2019/11/mazda-logo.png"}
            {id : 4 , brand : "Mazda" , Price : "$3,400" , done : false , img : "https://logodownload.org/wp-content/uploads/2019/11/mazda-logo.png"}
             {id : 4 , brand : "Mazda" , Price : "$3,400" , done : false , img : "https://logodownload.org/wp-content/uploads/2019/11/mazda-logo.png"}
              {id : 4 , brand : "Mazda" , Price : "$3,400" , done : false , img : "https://logodownload.org/wp-content/uploads/2019/11/mazda-logo.png"}
               {id : 4 , brand : "Mazda" , Price : "$3,400" , done : false , img : "https://logodownload.org/wp-content/uploads/2019/11/mazda-logo.png"}
                {id : 4 , brand : "Mazda" , Price : "$3,400" , done : false , img : "https://logodownload.org/wp-content/uploads/2019/11/mazda-logo.png"}
                 {id : 4 , brand : "Mazda" , Price : "$3,400" , done : false , img : "https://logodownload.org/wp-content/uploads/2019/11/mazda-logo.png"}
                  {id : 4 , brand : "Mazda" , Price : "$3,400" , done : false , img : "https://logodownload.org/wp-content/uploads/2019/11/mazda-logo.png"}
    ]);

    function addCar(){
        setCars([...cars, {id : cars.length , brand : "lamborghini" , Price : "$8,900 ",done : false}])
    }

    function deleteCar(id){
        setCars( cars.filter((car)=> car.id !== id ));
      
    }



return(
<Display
cars = {cars}
addCar = {addCar}
deleteCar = {deleteCar}
/>
)
}