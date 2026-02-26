import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { FiFilm, FiHeart } from "react-icons/fi";

const Navbar = () => {
  const { favorites } = useFavorites();

  return (
    <nav className="bg-[#0A0A0F] backdrop-blur-md border-b border-[#D1D5DC] sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-around h-14">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-white hover:scale-105 transition duration-300"
        >
          <div className="bg-linear-to-r from-[#FB2C36] to-[#FE9A00] p-1 rounded-sm flex items-center justify-center">
            <FiFilm className="text-white w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          Movie Search
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            to="/favorites"
            className="flex items-center text-gray-300 hover:text-white transition duration-200 gap-1"
          >
            <FiHeart className="text-[#D1D5DC]" />
            Favorites
            <span className="ml-1 bg-red-600 text-white text-sm px-2 py-0.5 rounded-full">
              {favorites.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
