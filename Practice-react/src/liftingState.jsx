
import {useState} from "react"

// child component
function AddButton() {
  return <div></div>;
}


//child component
function Displaycount() {
  return <div></div>;
}

//parent component
export default function LiftingState() {
  const [count, setCount] = useState(null);

  return (
    <div>
      <Displaycount count={count} />
      <AddButton setCount={setCount} />
    </div>
  );
}
