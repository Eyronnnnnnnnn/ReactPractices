import { useState } from "react";

// this is child component
function Update_ui({count}){
return(
  <div>
    <h1>Buttonclick : {count} </h1>
  </div>
)
}



function App() {

  const [count , countFunction] = useState(0);


  return (
  <div>
    <button onClick={()=> countFunction(count + 1)}>click me</button>
    <Update_ui count = {count} />
  </div>
  )
}

export default App;
