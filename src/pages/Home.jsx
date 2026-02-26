import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import MovieDetails from "./MovieDetails";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";

const API_KEY = "8aa3c21b";

const DEFAULT_MOVIES = [
  "Jaws",
  "Blade Runner",
  "Alien",
  "Apocalypse Now",
  "Goodfellas",
  "Casablanca",
  "Breakfast at Tiffany's",
  "Vertigo",
  "2001: A Space Odyssey",
  "Amadeus",
  "The Social Network",
  "Superman: The Movie",
  "Little Miss Sunshine",
  "Full Metal Jacket",
  "The Thing",
  "Bullitt",
  "The Goonies",
  "Indiana Jones and the Raiders of the Lost Ark",
  "Scarface",
];

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchMovieByTitle = async (title) => {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(title)}`,
      );
      const data = await res.json();

      if (data.Response === "True" && data.Search.length > 0) {
        return data.Search[0];
      } else {
        return null;
      }
    } catch {
      return null;
    }
  };

  useEffect(() => {
    const loadDefaultMovies = async () => {
      setLoading(true);
      const results = await Promise.all(
        DEFAULT_MOVIES.map((title) => fetchMovieByTitle(title)),
      );
      setMovies(results.filter(Boolean).slice(0, 12));
      setLoading(false);
    };
    loadDefaultMovies();
  }, []);

  const getMovieDetails = async (id) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`,
      );

      const data = await res.json();

      setSelectedMovie(data);
    } catch {
      setError("Failed to fetch movie details.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    try {
      const movie = await fetchMovieByTitle(query);
      if (!movie) {
        setError("No movies found!");
        setMovies([]);
      } else {
        setMovies([movie]);
      }
    } catch {
      setError("Search failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-linear-to-r from-[#0A0A0F] via-[#1A0A1F] to-[#0A0A0F] min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-2 text-center">
        Discover Your Next Favorite Movie
      </h1>
      <p className="text-[#99A1AF] mb-6 text-center">
        Search through thousands of movies and build your collection
      </p>

      <SearchBar onSearch={handleSearch} />

      {loading && <Loader />}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      <div className="max-w-4xl mx-auto mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onSelect={() => getMovieDetails(movie.imdbID)}
            />
          ))}
        </div>
      </div>

      {selectedMovie && (
        <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black bg-opacity-80 p-4 ">
          <div className="relative w-full max-w-4xl bg-[#0d0d0f] rounded-2xl shadow-lg overflow-hidden md:mt-20">
            <button
              onClick={() => setSelectedMovie(null)}
              className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-red-500 transition-colors"
            >
              &times;
            </button>

            <div className="p-6">
              <MovieDetails movie={selectedMovie} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
