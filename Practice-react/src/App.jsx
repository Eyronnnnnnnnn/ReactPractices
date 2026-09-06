import { useState } from "react";

function UserCard({name ,Cpnum}){
  return(
    <div>
      <h2>Name : {name}</h2>
      <p>Cp# : {Cpnum}</p>
    </div>
  )
}



function App(props) {

const userData =[
  {Name : "Aaron Guillermo" , Cpnum : "094324234" }
];
 


  return (
  <UserCard name = {userData[0].Name} Cpnum={userData[0].Cpnum} ></UserCard>
  )
}

export default App;
