import { useState } from "react";

export default function UseMemov2() {
  const [number, setNumber] = useState(0);
  const [darkmode, setDarkmode] = useState(false);

  const toogle = ()=>{
    setDarkmode(!darkmode ? true : false)
  }

const slowComputation = ()=>{
    let  result = num ;
    for(let i = 0 ; i < 5000000 ; i++){
     
        result = result ;
    }
    return num * 2;
}

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-6 p-6">
      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => setNumber(number + 1)}
          className="bg-slate-800 w-40 h-10 text-white rounded-md shadow hover:bg-slate-700 transition"
        >
          number +1
        </button>
        <button
          onClick={() => setNumber(0)}
          className="bg-slate-800 w-40 h-10 text-white rounded-md shadow hover:bg-slate-700 transition"
        >
          Reset
        </button>
        <button 
        onClick={()=> setDarkmode(!darkmode)}
        className="bg-gray-200 w-40 h-10 rounded-md shadow hover:bg-gray-300 transition">
          DARK/LIGHT
        </button>
      </div>

      {/* Box Section */}
      <div className="bg-slate-400 w-60 h-40 flex flex-col justify-center items-center rounded-lg shadow-md">

        {darkmode ? (
          <div className="bg-black w-40 h-20 flex items-center justify-center text-white rounded-md">
          dsa
        </div>
        ) : (
              <div className="w-40 h-20 flex items-center justify-center rounded-md bg-white text-black">
    dsa
  </div>
        )}
      
        <div className="">
          <h1>{number}</h1>
        </div>
      </div>
    </div>
  );
}
