import { useFavorites } from "../context/FavoritesContext";

const MovieCard = ({ movie, onSelect }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  return (
    <div className="relative  rounded-lg  border border-[#99A1AF] overflow-hidden shadow hover:shadow-lg transition max-w-72.5">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
        alt={movie.Title}
        className="w-full h-72 object-cover cursor-pointer border-b border-[#99A1AF] hover:scale-105 transition duration-500"
        onClick={onSelect}
      />
      <div className="p-2">
        <h2 className="font-semibold text-white">{movie.Title}</h2>
        <p className="text-gray-400 text-sm">{movie.Year}</p>

        <div className="flex gap-2 mt-2">
          <button
            onClick={() =>
              isFavorite(movie.imdbID)
                ? removeFavorite(movie.imdbID)
                : addFavorite(movie)
            }
            className={`flex-1 py-1 text-sm cursor-pointer rounded font-semibold transition ${
              isFavorite(movie.imdbID)
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-green-500 hover:bg-green-600 text-white"
            }`}
          >
            {isFavorite(movie.imdbID) ? "Remove Favorite" : "Add to Favorite"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
