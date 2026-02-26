import { useFavorites } from "../context/FavoritesContext";
import MovieCard from "../components/MovieCard";
import { Heart } from "lucide-react";
import EmptyState from "../components/EmptyState";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(135deg, #0d0d0f 0%, #1a0a1a 50%, #0d0d0f 100%)",
      }}
    >
      <div className="flex-1 px-4 sm:px-6 lg:px-8 pt-8 ml-0 md:ml-60">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-xl bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center">
            <Heart size={18} fill="white" />
          </div>
          <h1 className="text-white text-2xl font-bold m-0">My Favorites</h1>
        </div>
        <p className="text-gray-500 text-sm mt-1 mb-6">
          {favorites.length
            ? `${favorites.length} movie${favorites.length > 1 ? "s" : ""} saved`
            : "No favorite movies yet"}
        </p>

        {!favorites.length ? (
          <EmptyState message="No Favorite Movies Yet" />
        ) : (
          <div
            className="w-full max-w-9xl mx-auto grid gap-4
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-2 
            lg:grid-cols-3 
            xl:grid-cols-4
          "
          >
            {favorites.map((movie) => (
              <MovieCard key={movie.id || movie.imdbID} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
