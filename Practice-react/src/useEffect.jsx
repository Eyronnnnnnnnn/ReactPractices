import { useEffect, useState } from "react";

export default function UseEffect() {
  const [team, setTeam] = useState(0);
  const [playerUpdate , setPlayerUpdate] = useState("");

  useEffect(() => {
    console.log("Current Players:", team);
    if (team > 3) {
        setPlayerUpdate("To many PLayer")
       
    } else {
       setPlayerUpdate(`player : ${team}`)
    }
  }, [team]);

  return (
    <div>
      <button
        className="bg-slate-400 px-4 py-2 m-2"
        onClick={() => setTeam(team + 1)}
      >
        Add person
      </button>
      <button
        className="bg-red-600 px-4 py-2 m-2"
        onClick={() => setTeam(team > 0 ? team - 1 : 0)}
      >
        Remove person
      </button>



      <h1>{playerUpdate}</h1>
    </div>
  );
}
