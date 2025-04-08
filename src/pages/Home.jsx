import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const API_KEY = "c45a857c193f6302f2b5061c3b85e743";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error("Failed to fetch movies", err));
  }, [page]);

  return (
    <div className="bg-black min-h-screen text-white p-6">

      <h2 className="text-3xl font-bold mb-6">Now Trending</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} showRating={false} />
        ))}
      </div>

      <Pagination page={page} setPage={setPage} />
    </div>
  );
}
