import { memo, useMemo, useState } from "react";

const PopUpModal = memo(function PopUpModal({modal}){
  if(!modal ){return}

  return(
    <div className="bg-white w-screen h-44">
      hello world
    </div>
  )
})
const MovieCard = memo(function MovieCard({ movie }) {
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
            View movie
            <span aria-hidden="true">↗</span>
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
    link: "https://www.themoviedb.org/movie/157336",
  },
  {
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi · Thriller",
    rating: "8.8",
    poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    link: "https://www.themoviedb.org/movie/27205",
  },
  {
    title: "The Batman",
    year: 2022,
    genre: "Action · Crime",
    rating: "7.8",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    link: "https://www.themoviedb.org/movie/414906",
  },
  {
    title: "Dune: Part Two",
    year: 2024,
    genre: "Sci-Fi · Drama",
    rating: "8.5",
    poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    link: "https://www.themoviedb.org/movie/693134",
  },
  {
    title: "Spider-Man: No Way Home",
    year: 2021,
    genre: "Action · Adventure",
    rating: "8.0",
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    link: "https://www.themoviedb.org/movie/634649",
  },
  {
    title: "Joker",
    year: 2019,
    genre: "Crime · Drama",
    rating: "8.2",
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    link: "https://www.themoviedb.org/movie/475557",
  },
  {
    title: "Spider-Man: Brand New Day",
    year: 2026,
    genre: "Action · Sci-Fi · Adventure",
    rating: "N/A",
    poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/bjiS5ipwxb9JFy3XRRN4OAilSeX.jpg",
    link: "https://www.themoviedb.org/movie/969681",
  },
  {
    title: "Avengers: Endgame",
    year: 2019,
    genre: "Action · Adventure",
    rating: "8.4",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    link: "https://www.themoviedb.org/movie/299534",
  },
  {
    title: "Avengers: Infinity War",
    year: 2018,
    genre: "Action · Sci-Fi",
    rating: "8.4",
    poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    link: "https://www.themoviedb.org/movie/299536",
  },
  {
    title: "Iron Man",
    year: 2008,
    genre: "Action · Sci-Fi",
    rating: "7.9",
    poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    link: "https://www.themoviedb.org/movie/1726",
  },
  {
    title: "Captain America: Civil War",
    year: 2016,
    genre: "Action · Adventure",
    rating: "7.8",
    poster: "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
    link: "https://www.themoviedb.org/movie/271110",
  },
  {
    title: "Black Panther",
    year: 2018,
    genre: "Action · Adventure",
    rating: "7.3",
    poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    link: "https://www.themoviedb.org/movie/284054",
  },
  {
    title: "Doctor Strange",
    year: 2016,
    genre: "Action · Fantasy",
    rating: "7.5",
    poster: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
    link: "https://www.themoviedb.org/movie/284052",
  },
  {
    title: "Guardians of the Galaxy",
    year: 2014,
    genre: "Action · Comedy",
    rating: "8.0",
    poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    link: "https://www.themoviedb.org/movie/118340",
  },
  {
    title: "Thor: Ragnarok",
    year: 2017,
    genre: "Action · Comedy",
    rating: "7.9",
    poster: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
    link: "https://www.themoviedb.org/movie/284053",
  },
  {
    title: "Spider-Man: Homecoming",
    year: 2017,
    genre: "Action · Adventure",
    rating: "7.4",
    poster: "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
    link: "https://www.themoviedb.org/movie/315635",
  },
  {
    title: "Spider-Man: Far From Home",
    year: 2019,
    genre: "Action · Adventure",
    rating: "7.4",
    poster: "https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
    link: "https://www.themoviedb.org/movie/429617",
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    genre: "Animation · Action",
    rating: "8.4",
    poster: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    link: "https://www.themoviedb.org/movie/324857",
  },
  {
    title: "Spider-Man: Across the Spider-Verse",
    year: 2023,
    genre: "Animation · Adventure",
    rating: "8.6",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    link: "https://www.themoviedb.org/movie/569094",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "Action · Crime",
    rating: "9.0",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    link: "https://www.themoviedb.org/movie/155",
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    genre: "Action · Thriller",
    rating: "8.4",
    poster: "https://image.tmdb.org/t/p/w500/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg",
    link: "https://www.themoviedb.org/movie/49026",
  },
  {
    title: "Man of Steel",
    year: 2013,
    genre: "Action · Sci-Fi",
    rating: "7.1",
    poster: "https://image.tmdb.org/t/p/w500/dksTL9NXc3GqPBRHYHcy1aIwjS.jpg",
    link: "https://www.themoviedb.org/movie/49521",
  },
  {
    title: "Wonder Woman",
    year: 2017,
    genre: "Action · Fantasy",
    rating: "7.4",
    poster: "https://image.tmdb.org/t/p/w500/v4ncgZjG2Zu8ZW5al1vIZTsSjqX.jpg",
    link: "https://www.themoviedb.org/movie/297762",
  },
  {
    title: "Aquaman",
    year: 2018,
    genre: "Action · Adventure",
    rating: "6.8",
    poster: "https://image.tmdb.org/t/p/w500/xLPffWMhMj1l50ND3KchMjYoKmE.jpg",
    link: "https://www.themoviedb.org/movie/297802",
  },
  {
    title: "Zack Snyder's Justice League",
    year: 2021,
    genre: "Action · Fantasy",
    rating: "8.0",
    poster: "https://image.tmdb.org/t/p/w500/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
    link: "https://www.themoviedb.org/movie/791373",
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

      {/* Hero section */}
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

        {/* Search bar */}
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

      {/* Movie collection */}
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
              <MovieCard key={movie.title} movie={movie} modal = {modal} />
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
