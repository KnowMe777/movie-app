import { useFavorites } from "../context/FavoritesContext";
import { Heart, Calendar, Clock, Star } from "lucide-react";

const MovieDetails = ({ movie }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  if (!movie) return null;

  const favorited = isFavorite(movie.imdbID);

  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #0d0d0f 0%, #1a0a1a 50%, #0d0d0f 100%)",
      }}
    >
      <div className="flex flex-col md:flex-row gap-8 px-6 pt-4 pb-10 max-w-5xl">
        <div className="w-full md:w-95 shrink-0">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
            alt={movie.Title}
            className="w-full h-70 md:h-75 object-cover rounded-xl"
          />
        </div>

        <div className="flex-1 flex flex-col justify-start pt-1">
          <h1 className="text-white text-3xl font-bold mb-3">{movie.Title}</h1>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            {movie.Year && (
              <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                <Calendar size={13} />
                <span>{movie.Year}</span>
              </div>
            )}
            {movie.Runtime && (
              <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                <Clock size={13} />
                <span>{movie.Runtime}</span>
              </div>
            )}
            {movie.imdbRating && (
              <div className="flex items-center gap-1.5 bg-yellow-500/20 border border-yellow-500/40 px-2.5 py-0.5 rounded-md">
                <Star size={12} className="text-yellow-400 fill-yellow-400" />
                <span className="text-yellow-400 text-sm font-semibold">
                  {movie.imdbRating}/10
                </span>
              </div>
            )}
          </div>

          {movie.Genre && (
            <div className="flex flex-wrap gap-2 mb-5">
              {movie.Genre.split(", ").map((g) => (
                <span
                  key={g}
                  className="text-xs text-gray-300 bg-white/[0.07] border border-white/8 px-3 py-1 rounded-full"
                >
                  {g}
                </span>
              ))}
            </div>
          )}

          {movie.Plot && (
            <div className="mb-6">
              <h3 className="text-white text-sm font-semibold mb-1.5">Plot</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {movie.Plot}
              </p>
            </div>
          )}

          <button
            onClick={() =>
              favorited ? removeFavorite(movie.imdbID) : addFavorite(movie)
            }
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border cursor-pointer transition-all duration-200 w-fit ${
              favorited
                ? "bg-red-500/20 border-red-500/40 text-red-400 hover:bg-red-500/30"
                : "bg-white/5 border-white/12 text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Heart size={15} fill={favorited ? "currentColor" : "none"} />
            {favorited ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
