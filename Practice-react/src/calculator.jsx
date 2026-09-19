import {useState} from "react"



function Displaycalculator(props){
return(
    <div className="bg-orange-900 w-screen h-screen" >
      <div className="bg-yellow-800 w-full h-20">
        <h1 className="flex flex-col  justify-center items-center">REACT CALCULATOR</h1>
      </div>
      <div className="  justify-center flex items-center  bg-slate-900 w-full h-5/6">
      <div className=" flex flex-col justify-between p-8 rounded-xl bg-amber-800 w-1/2 h-96">
        <div className="  ">
            <input 

            value={props.display}
            onChange={(event)=> props.setDisplay(event.target.value)}
            className="w-full h-20 rounded-lg text-right text-6xl"  type="text" placeholder="0" /></div>
             <div className="bg-slate-600 w-full h-56">
                <button 
                 className="w-16 h-16 bg-red-500"
                value={"1"}
                onClick={(event)=> props.handleNumber(event.target.value)}
                >1</button>
                
                <button
                 className="w-16 h-16 bg-red-500"
                value={2}
                
                >2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button 
                value={"+"}
                onClick={(event)=> props.operands(event.target.value)}
                className="w-16 h-16 bg-red-500">+</button>
                <button
                 className="w-16 h-16 bg-red-500"
                onClick={(event)=>props.clear()}
                >C</button>
                <button
                onClick={(event)=> props.calculate()}
                   className="w-16 h-16 bg-red-500"
                >=</button>
             </div>
      </div>
      </div>
    </div>
)
}





export default function Calculator(){

    const [num1 , setNum1] = useState(null);
    const [operator , setOperator] = useState(null)
    const [display, setDisplay] = useState("0");
    


    function handleNumber(num){
        setDisplay(display + num)
    }

 function operands(op){
    setNum1(parseFloat(display));
    setOperator(op);
    setDisplay("");
 }


 function calculate(){
    const secondnum = parseFloat(display);
    let result;

    switch(operator ){
        case "+":
            result = num1 + secondnum;
            break;

            default:
                return;
    }
    setDisplay(result.toString())
    setOperator(null)
    setNum1(null)

 }

   function clear(){
    setNum1("0");
   }

   
    return(
        <Displaycalculator
        setNum1 = {setNum1}
        num1 = {num1}
        display={display}
        setDisplay={setDisplay}
        handleNumber ={handleNumber}
       setOperator = {setOperator}
       operands = {operands}
        clear = {clear}
        calculate = {calculate}
        />
         
        
    )
}