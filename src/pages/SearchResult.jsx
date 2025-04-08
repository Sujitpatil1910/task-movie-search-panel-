
import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";


export default function SearchResult() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const query = searchParams.get("query");
  const API_KEY = "c45a857c193f6302f2b5061c3b85e743";

  useEffect(() => {
    if (query) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=${page}`
        )
        .then((res) => setMovies(res.data.results))
        .catch((err) => {
          console.error("Search error:", err);
          setMovies([]); // fallback if API fails
        });
    }
  }, [query, page]);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <h2 className="text-3xl font-bold mb-6">
        Search Results for: <span className="text-blue-400">{query}</span>
      </h2>

      {movies.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          <Pagination page={page} setPage={setPage} />
        </>
      ) : (
        <p className="text-lg text-gray-300">No results found.</p>
      )}
    </div>
  );
}
