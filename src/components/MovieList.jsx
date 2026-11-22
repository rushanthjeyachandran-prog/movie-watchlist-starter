import MovieCard from "./MovieCard.jsx";
import useFetch from "../hooks/useFetch.js";

export default function MovieList() {
  const { data: movies, loading, error } = useFetch("/movies.json");

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