export default function MovieCard({ movie }) {
  // TASK 1: give this card memory. Add a piece of state called favourite (starts false).
  const favourite = false;

  return (
    <article className="card">
      <p className="code">{movie.genre}</p>
      <h3>{movie.title}</h3>
      <p className="meta">
        {movie.year} · {movie.runtime} min
      </p>
      <span className={favourite ? "badge done" : "badge todo"}>
        {favourite ? "Favourite" : "Not a favourite"}
      </span>
      {/* TASK 1: make this button toggle favourite. Its text should change too. */}
      <button>Add favourite</button>
      {/* TASK 6a: add a <Link> to /movies/<id> here */}
    </article>
  );
}
