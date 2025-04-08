
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const API_KEY = "c45a857c193f6302f2b5061c3b85e743";

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then((res) => setMovie(res.data));

    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
      .then((res) => setCast(res.data.cast.slice(0, 10)));
  }, [id]);

  if (!movie) return <div className="text-white p-6">Loading...</div>;

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full max-w-sm rounded-lg"
        />

        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
          <p className="text-gray-400 mb-2">Rating: {movie.vote_average}</p>
          <p className="text-gray-400 mb-2">
            {movie.runtime} min • {movie.genres.map((g) => g.name).join(", ")}
          </p>
          <p className="text-gray-400 mb-2">
            Release Date: {new Date(movie.release_date).toDateString()}
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-1">Overview</h3>
          <p className="text-gray-300">{movie.overview}</p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Cast</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {cast.map((actor) => (
            <div key={actor.cast_id} className="bg-gray-800 rounded-lg overflow-hidden shadow">
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                alt={actor.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-2 text-sm">
                <p className="font-semibold">{actor.name}</p>
                <p className="text-gray-400">Character: {actor.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
