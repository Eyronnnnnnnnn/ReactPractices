export default function useDebounce() {
  const movie = [
    { id: 1, title: "spiderman " },
    { id: 2, title: "Batman " },
    { id: 3, title: "Warcraft " },
    { id: 4, title: "Avengers " },
    { id: 5, title: "Need For Speed" },
    { id: 6, title: "Harry potter " },
    { id: 7, title: "Barney" },
  ];

  return (
    <div>
        {movie.map((movie)=>(
            <div key ={movie.id}>
                <h1>{movie.title}</h1>
                 </div>
        ))}
      <input type="text" />
    </div>
  );
}
