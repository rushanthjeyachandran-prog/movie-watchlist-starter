import WatchForm from "../components/WatchForm.jsx";
import WatchList from "../components/WatchList.jsx";

export default function WatchlistPage() {
  // TASK 2: the watchlist live HERE, in the parent, not inside WatchForm or WatchList.
  // Replace the next line with useState, then fill in the three functions.
  const watchlist = [];

  function addItem(text) {
    // TODO: add { id: crypto.randomUUID(), text, watched: false } WITHOUT mutating the array
  }

  function toggleItem(id) {
    // TODO: flip watched for the item with this id (use map and a copy)
  }

  function deleteItem(id) {
    // TODO: remove the item with this id (use filter)
  }

  // TASK 2: derived data. Compute it from watchlist. Do NOT store it in state.
  const toWatch = 0;

  return (
    <section className="panel">
      <h2>Watchlist ({toWatch} to watch)</h2>
      <WatchForm onAdd={addItem} />
      <WatchList watchlist={watchlist} onToggle={toggleItem} onDelete={deleteItem} />
    </section>
  );
}
