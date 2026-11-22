import { useState, useEffect } from "react";
import MovieCard from "./MovieCard.jsx";


export default function MovieList() {
  // TASK 3: stop using sampleMovies. Fetch "/movies.json" in a useEffect.
  // Keep three pieces of state: movies, loading, error. Show "Loading..." and an error message.
  // Abort the request in the cleanup function.
  // TASK 4b: later, move all of that into your useFetch hook.
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch("/movies.json");
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        if (!isCancelled) {
          setMovies(data);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err.message);
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    fetchMovies();

    return () => {
      isCancelled = true;
    };
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
