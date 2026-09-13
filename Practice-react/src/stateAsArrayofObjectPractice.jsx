import {useState} from 'react'



function Display(props){
return(
    <div>
     {props.cars.map((car,index) => <h1 key ={index}>{car.brand}</h1>)}
    </div>
)
}


export default function StateArrayofObjectPractice (){

    const [cars,setCars] = useState([
        {id : 1 , brand : "Honda" , Price : "$1,600" , done : false},
        {id : 2 , brand : "Toyota" , Price : "$3,400" , done : false},  
        {id : 3 , brand : "Subaru" , Price : "$1,600" , done : false},
        {id : 4 , brand : "Mazda" , Price : "$3,400" , done : false}
    ]);



return(
<Display
cars = {cars}
/>
)
}