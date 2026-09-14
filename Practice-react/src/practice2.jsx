import { DivideIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function CoffeeList(props) {
 
  return (
    
    <div className="bg-red-400 h-screen w-screen flex flex-col justify-center items-center ">
      <div className="bg-slate-500 h-96 w-80 rounded-xl p-5">
        <div className="w-70 h-10 flex flex-col justify-center text-center">
          <h1>Coffee List</h1>
        </div>
        <div className=" h-10 flex  justify-center items-center ">
          
          <input
          key={props.coffees.item}
          value={props.newPrice}
          onChange={(event)=> props.setNewcoffee(event.target.value) }
          placeholder="ENTER COFFEE"></input>
        </div>
        <div className=" h-10 flex  justify-center items-center">
          <input
          
          value={props.coffees.price}
          onChange={(event)=> props.setNewPrice(event.target.value)}
          className="w-32" placeholder="ENTER Price"></input>
          <button
          onClick={() =>  props.newCoffeelist()}
          className="bg-green-500 w-16 text-white">enter</button>
        </div>
        <div className="bg-amber-900 text-center rounded-md"  >
        {props.coffees.map((coffee,index)=>
         <h1 className="text-white"
          key={index} >{coffee.item} {coffee.price}</h1>)}
      </div>
      </div>

      
    </div>
  );
}

// function 
export default function Practice2() {
  const [coffees, setCoffee] = useState([
    { id: 1, item: "Matcha", price: "$50" },
    { id: 2, item: "Americano Latte", price: "$20" },
    { id: 3, item: "hot choco", price: "$10" },
    { id: 4, item: "cafamel", price: "$4" }
  ]);

  const [newCoffee ,setNewcoffee] = useState("");
  const [newPrice , setNewPrice] = useState("");

  const [nextid , setnextid] =useState(4);

 const setcoflist ={
    id: nextid , 
    item : newCoffee,
    price : newPrice
 }

function newCoffeelist(id){
    setCoffee([...coffees, {id : nextid , item : newCoffee , price : newPrice}])
    setNewcoffee("");
    setNewPrice("");
    setnextid( nextid + 1);
}

  return <CoffeeList
   coffees = {coffees}
   setCoffee = {setCoffee}
   newCoffee ={newCoffee}
   setNewcoffee = {setNewcoffee}
   newCoffeelist = {newCoffeelist}

  />;
}
