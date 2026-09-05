import App2 from "./practice";


const UserCardProps = [
  { id : 1,
  name: "aaronguillermo",
  email: "aaronguillermo0987654321@gmail.com"
},
  { id : 2,
  name: "shaneboromeo",
  email: "shaneboromeo@gmail.com"
},
  { id : 3,
  name: "micaguillermo",
  email: "micaguillermo@gmail.com"
},

]


function App(){
  return(
   <div>
     {UserCardProps.map(card =>{
      return <UserCard key = {card.id} name = {card.name} email = {card.email}/>
     })}
        
        <App2 />
   </div>
  
  );


 
}
  function UserCard(props){
    return(
      <div>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
      </div>
    )
  }


export default App