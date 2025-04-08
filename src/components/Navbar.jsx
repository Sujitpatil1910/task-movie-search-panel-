
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
      setQuery("");
    }
  };

  return (
    <nav className="bg-black-900 text-white px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <Link to="/" className="text-2xl font-bold text-white">Movies</Link>

      <div className="flex gap-6 text-sm font-medium">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/popular" className="hover:underline">Popular</Link>
        <Link to="/top-rated" className="hover:underline">Top Rated</Link>
        <Link to="/upcoming" className="hover:underline">Upcoming</Link>
      </div>

      <form onSubmit={handleSearch} className="flex gap-2 w-full md:w-auto">
        <input
          type="text"
          placeholder="Movie Name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 rounded-md text-white bg-gray-700 w-full md:w-64"
        />
        <button
          type="submit"
          className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition"
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
