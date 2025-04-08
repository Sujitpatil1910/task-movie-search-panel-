import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie, showRating = true }) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="bg-gray-800 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-80 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-white truncate">
          {movie.title}
        </h3>
        {showRating && (
          <p className="text-gray-400 text-sm">
            Rating: {movie.vote_average}
          </p>
        )}
      </div>
    </Link>
  );
}
