// This component is finished. Read it, but you do not need to change it.
export default function WatchList({ watchlist, onToggle, onDelete }) {
  if (watchlist.length === 0) {
    return <p className="meta">No watchlist yet. Add one above.</p>;
  }
  return (
    <ul className="watchlist">
      {watchlist.map((item) => (
        <li key={item.id}>
          <label className={item.watched ? "struck" : ""}>
            <input type="checkbox" checked={item.watched} onChange={() => onToggle(item.id)} /> {item.text}
          </label>
          <button onClick={() => onDelete(item.id)} aria-label={`Delete ${item.text}`}>×</button>
        </li>
      ))}
    </ul>
  );
}
