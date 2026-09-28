function UserProfile({ profile }) {
  return (
    <div>
      {profile.map(({ name, role, age,id }) => (
        <p key={id}>
          name : {name}
         role :  {role}
          age : {age}
        </p>
      ))}
    </div>
  );
}

export default function Propsdestructuring() {
  const profile = [
    { id: 1, name: "aaron", role: "software Engineer", age: 21 },
    { id: 2, name: "shaneBoromeo", role: "House Wife ni Aaron", age: 19 },
    { id: 3, name: "micaguillermo", role: "Architect", age: 15 },
  ];

  return (
    <div>
      <h1>Profile Details</h1>
      <UserProfile profile={profile} />
    </div>
  );
}
