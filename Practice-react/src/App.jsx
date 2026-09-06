

const UserCardProps = [
  { id: 1, name: "aaronguillermo", email: "aaronguillermo0987654321@gmail.com" },
  { id: 2, name: "shaneboromeo", email: "shaneboromeo@gmail.com" },
  { id: 3, name: "micaguillermo", email: "micaguillermo@gmail.com" }
];

function App() {
  return (
    <div className="bg-slate-900  h-screen flex justify-center gap-11 items-center">
      {UserCardProps.map(card => (
        <UserCard 
          key={card.id} 
          name={card.name} 
          email={card.email} 
        />
      ))}
      
    
    </div>
     
    
  
  );
}

function UserCard({ name, email }) {
  return (
    
    <div className="bg-transparent bg-black w-80 h-20 gap-6 rounded-lg text-center flex flex-col">
      <h1 className="text-lg font-bold text-blue-50">{name}</h1>
      <p className="text-sm text-red-300">{email}</p>
    </div>

    
  );
}

export default App;
