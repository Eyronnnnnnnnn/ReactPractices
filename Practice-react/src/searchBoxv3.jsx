import { useState } from "react";

export default function SearchBoxv3() {
  const movies = [
    {
      title: "Interstellar",
      year: 2014,
      genre: "Sci-Fi · Adventure",
      rating: "8.7",
      poster:
        "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      link: "https://www.themoviedb.org/movie/157336-interstellar",
    },
    {
      title: "Inception",
      year: 2010,
      genre: "Sci-Fi · Thriller",
      rating: "8.8",
      poster:
        "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
      link: "https://www.themoviedb.org/movie/27205-inception",
    },
    {
      title: "The Batman",
      year: 2022,
      genre: "Action · Crime",
      rating: "7.8",
      poster:
        "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
      link: "https://www.themoviedb.org/movie/414906-the-batman",
    },
    {
      title: "Dune: Part Two",
      year: 2024,
      genre: "Sci-Fi · Drama",
      rating: "8.5",
      poster:
        "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
      link: "https://www.themoviedb.org/movie/693134-dune-part-two",
    },
    {
      title: "Spider-Man: No Way Home",
      year: 2021,
      genre: "Action · Adventure",
      rating: "8.0",
      poster:
        "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      link: "https://www.themoviedb.org/movie/634649",
    },
    {
      title: "Joker",
      year: 2019,
      genre: "Crime · Drama",
      rating: "8.2",
      poster:
        "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      link: "https://www.themoviedb.org/movie/475557-joker",
    },
  ];

  const [input,setInput] = useState("");

  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-12">
        <a href="#" className="text-2xl font-black tracking-tight">
          cine<span className="text-red-500">box.</span>
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
        <span className="inline-block rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
          Your next favorite film
        </span>

        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
          Find your next
          <br />
          <span className="text-red-500">movie obsession.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
          Explore iconic movies, discover hidden gems, and
          find something worth watching tonight.
        </p>

        {/* Static search bar */}
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
            <path
              d="m16 16 4 4"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <input
          onChange={(e)=>setInput(e.target.value)}
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

      {/* Movie collection */}
      <section
        id="movies"
        className="mx-auto max-w-7xl px-6 pb-20 md:px-12"
      >
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
            06 titles
          </span>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
          {movies.map((movie) => (
            <a
              key={movie.title}
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
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-7 text-center">
        <p className="text-sm text-zinc-500">
          Made for movie lovers.
          <span className="ml-1 font-semibold text-red-500">
            cinebox.
          </span>
        </p>
      </footer>
    </div>
  );
}