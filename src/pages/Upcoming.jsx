
import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

export default function Upcoming() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const API_KEY = "c45a857c193f6302f2b5061c3b85e743";

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`)
      .then((res) => {
        setMovies(res.data.results);
        console.log("Upcoming Movies:", res.data.results); // debug
      })
      .catch((error) => console.error("Error fetching upcoming movies", error));
  }, [page]);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h2 className="text-3xl font-bold mb-6">Upcoming Movies</h2>

      {movies.length === 0 ? (
        <p className="text-gray-400">No upcoming movies found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}

      <Pagination page={page} setPage={setPage} />
    </div>
  );
}
