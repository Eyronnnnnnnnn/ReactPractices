  import React from 'react';
  import { useState , useEffect } from 'react'



  function RenderPage(props){

  useEffect(()=>{

  const id =  setInterval(()=>{
  console.log("still running");
    },1000);
  
  return () => clearInterval(id);
  },[])

  return(
    <div>
    <h1>Count : {props.count}</h1>
      <button
      onClick = { props.Increment }
      >increment</button>
        <button
        onClick = {props.Decrement}
        >decrement</button>

        <button>next</button>
    </div>
  )

  }

  function Useeffectwithcleanup() {
    const [count, setCount] = useState(0)
    const [showPage , setShowPage] = useState(false)
  
  const Increment = () =>{
      setCount(count + 1);
  }

  const Decrement = () =>{
      setCount(count - 1);
  }



    return (
        <div>
        <button onClick={() => setShowPage(!showPage)}>toggle</button>

        {showPage && (
  <RenderPage 
        count = {count}
        setCount= {setCount}
        Increment= {Increment}
        Decrement = {Decrement}
          />
        )}
      
        </div>
        
      
    )

    }


  export default App
