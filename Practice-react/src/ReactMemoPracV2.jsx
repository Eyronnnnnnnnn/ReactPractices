import { memo, useCallback, useState } from "react";
// Child Compontent
const ChildComponent = memo(function ChildComponent({ count }) {
  console.log("rendered");
  return (
    <div>
      <h1>dsa</h1>
    </div>
  );
});

//Parent Component
function ReactMemoPracV2() {
  const [count, setCount] = useState(0);
  const [stat, setStatic] = useState(0);

 

  const HandleClick = useCallback(function HandleClick(){
        setCount((count) => count + 1);
  },[count])

  return (
    <div>
      <ChildComponent count={count} />
      <h1>Click Button </h1>
      <button onClick={HandleClick} className="bg-red-700 w-20 h-9">
        + 1
      </button>
      <h1>Count : {count}</h1>
    </div>
  );
}

export default ReactMemoPracV2;
