import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-xl mx-auto mb-6 bg-[#99A1AF"
    >
      <div className="relative flex-1">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-l-lg rounded-r-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 text-white  placeholder-gray-400 transition duration-300"
        />
        <button
          type="submit"
          className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-linear-to-r from-[#FB2C36] to-[#FE9A00] text-white px-4 py-1 rounded-lg hover:opacity-90 transition flex items-center gap-1"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
