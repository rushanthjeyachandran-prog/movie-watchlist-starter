import { useState } from "react";
import WatchForm from "../components/WatchForm.jsx";
import WatchList from "../components/WatchList.jsx";

export default function WatchlistPage() {
  // TASK 2: the watchlist live HERE, in the parent, not inside WatchForm or WatchList.
  // Replace the next line with useState, then fill in the three functions.
  const [watchlist, setWatchlist] = useState([]);

  function addItem(text) {
    const newItem = { id: crypto.randomUUID(), text, watched: false };
setWatchlist([...watchlist, newItem]);
  }

  function toggleItem(id) {
    setWatchlist(
  watchlist.map((i) => (i.id === id ? { ...i, watched: !i.watched } : i))
);// TODO: flip watched for the item with this id (use map and a copy)
  }

  function deleteItem(id) {
    setWatchlist(watchlist.filter((i) => i.id !== id));
  }

  // TASK 2: derived data. Compute it from watchlist. Do NOT store it in state.
  const toWatch = watchlist.filter((i) => !i.watched).length;

  return (
    <section className="panel">
      <h2>Watchlist ({toWatch} to watch)</h2>
      <WatchForm onAdd={addItem} />
      <WatchList watchlist={watchlist} onToggle={toggleItem} onDelete={deleteItem} />
    </section>
  );
}
