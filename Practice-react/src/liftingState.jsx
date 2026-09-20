import { useState } from "react";

// child component
function AddButton(props) {
  return (
    <div>
        <button
        
        onClick={()=>props.setCount((newCount)=> newCount + 1 )}
        >Click for + 1</button>
    </div>
  )
}

//child component
function Displaycount(props) {
  return (
    <div>
      <h1>Number Clicked : {props.count}</h1>
    </div>
  );
}

//parent component
export default function LiftingState() {
  const [count, setCount] = useState(0);    
  return (
    <div>
      <Displaycount count={count} />
      <AddButton setCount={setCount} />
    </div>
  );
}
