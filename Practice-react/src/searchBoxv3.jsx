import { memo, useMemo, useState } from "react";




const PopUpModal = memo(function PopUpModal({modal}){
  if(!modal ){return}

  return(
    <div className="bg-white w-screen h-44">
      hello world
    </div>
  )
})
const MovieCard = memo(function MovieCard({ movie,deleteBtn }) {
  return (
    <a
      href={movie.link}
      target="_blank"
      rel="noreferrer"
      className="group block"
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-zinc-900">
        <img
          src={movie.poster}
          alt={`${movie.title} movie poster`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-70"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

        <div className="absolute left-3 top-3 rounded-md border border-white/10 bg-black/60 px-2 py-1 text-xs font-semibold text-yellow-400 backdrop-blur-sm">
          ★ {movie.rating}
        </div>

        <div className="absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1 rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold">
             <button
             key={movie.title}
             onClick={()=>deleteBtn(movie.title)}
             >delete Movie</button>
            <span aria-hidden="true">x</span>
          </span>
        </div>
      </div>

      {/* Movie details */}
      <div className="mt-3">
        <h3 className="truncate font-semibold text-zinc-100 transition group-hover:text-red-400">
          {movie.title}
        </h3>

        <p className="mt-1 text-xs text-zinc-500">
          {movie.year} · {movie.genre}
        </p>
      </div>
    </a>
  );
});

export default function SearchBoxv3() {
  const [movies, setMovie] = useState([
   {
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi · Adventure",
    rating: "8.7",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
   
  },
  {
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi · Thriller",
    rating: "8.8",
    poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
  
  },
  {
    title: "The Batman",
    year: 2022,
    genre: "Action · Crime",
    rating: "7.8",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  
  },
  {
    title: "Dune: Part Two",
    year: 2024,
    genre: "Sci-Fi · Drama",
    rating: "8.5",
    poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
  
  },

  ]);

  const [input, setInput] = useState("");
  const [modal , setModal] = useState(true);

  const filteredMovies = useMemo(
    () =>
      movies.filter((mov) =>
        mov.title.toLocaleLowerCase().includes(input.toLocaleLowerCase()),
      ),
    [input, movies],
  );

  const deleteBtn = (title)=>{
   return setMovie(movies.filter((mov)=> mov.title !== title ))
  }

  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-12">
        <a href="#" className="text-2xl font-black tracking-tight">
          Eyron<span className="text-red-500">MovieBox.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#" className="text-white">
            Discover
          </a>
          <a href="#movies" className="hover:text-red-400">
            Movies
          </a>
          <a href="#search" className="hover:text-red-400">
            Search
          </a>
        </div>

        <a
          href="#movies"
          className="rounded-full border border-white/15 px-4 py-2 text-sm transition hover:bg-white hover:text-black"
        >
          Explore
        </a>
      </nav>

    
      <header className="px-6 pb-12 pt-16 text-center md:pb-16 md:pt-24">
        <span>Developed by : Aaron D Guillermo</span>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
          Free Movies for Ilocos Norte
          <br />
          <span className="text-red-500">EyronMovieBox</span>
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
          Explore iconic movies, discover hidden gems, and find something worth
          watching tonight.
        </p>

        
        <div
          id="search"
          className="mx-auto mt-9 flex max-w-2xl items-center gap-3 rounded-2xl border border-white/10 bg-[#141416] p-2 shadow-2xl shadow-black/30 transition focus-within:border-red-500/50"
        >
          <svg
            className="ml-3 h-5 w-5 shrink-0 text-zinc-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="7" strokeWidth="2" />
            <path d="m16 16 4 4" strokeWidth="2" strokeLinecap="round" />
          </svg>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Search movies, titles, genres..."
            className="min-w-0 flex-1 bg-transparent py-3 text-sm text-white outline-none placeholder:text-zinc-600"
          />

          <button
            type="button"
            className="rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold transition hover:bg-red-500"
          >
            Search
          </button>
        </div>

        <p className="mt-4 text-xs text-zinc-600">
          Popular searches: Interstellar, Batman, Dune
        </p>
      </header>

      <div className="h-20 flex justify-end items-end pl-20 pr-96">
        <div>
          <button className="bg-red-600  px-5 py-3  rounded-xl font-bold transition hover:bg-red-500">Add Movies</button>
        </div>
      </div>

     
      <section id="movies" className="mx-auto max-w-7xl px-6 pb-20 md:px-12">
        <div className="mb-7 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
              Handpicked for you
            </p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Popular Movies
            </h2>
          </div>

          <span className="text-sm text-zinc-500">
            {filteredMovies.length} titles
          </span>
        </div>

        {filteredMovies.length === 0 ? (
          <div className="w-100 h-60 text-xl flex justify-center items-center">
            <div>
              <h1>No Movies Found</h1>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.title} movie={movie} modal = {modal} deleteBtn={deleteBtn} />
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-7 text-center">
        <p className="text-sm text-zinc-500">
          Made for movie lovers.
          <span className="ml-1 font-semibold text-red-500">cinebox.</span>
        </p>
      </footer>
    </div>
  );
}
