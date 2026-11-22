import MovieCard from "./MovieCard.jsx";
import { sampleMovies } from "../data.js";

export default function MovieList() {
  // TASK 3: stop using sampleMovies. Fetch "/movies.json" in a useEffect.
  // Keep three pieces of state: movies, loading, error. Show "Loading..." and an error message.
  // Abort the request in the cleanup function.
  // TASK 4b: later, move all of that into your useFetch hook.
  const movies = sampleMovies;

  return (
    <div className="grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
