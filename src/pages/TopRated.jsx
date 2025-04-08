
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import Pagination from "../components/Pagination";

export default function TopRated() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const API_KEY = "c45a857c193f6302f2b5061c3b85e743";

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`)
      .then((res) => setMovies(res.data.results));
  }, [page]);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h2 className="text-3xl font-bold mb-6">Top Rated Movies</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow hover:scale-105 transition-transform"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
              <div className="text-yellow-400 flex items-center gap-2">
                <FaStar /> {movie.vote_average}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination page={page} setPage={setPage} />
    </div>
  );
}
