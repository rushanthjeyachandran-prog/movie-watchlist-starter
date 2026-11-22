import { createContext, useContext, useReducer } from "react";

// TASK 7: the shared store for the watchlist (Context + useReducer).
// Two contexts: one carries the watchlist, one carries dispatch.
const WatchlistContext = createContext(null);
const WatchlistDispatchContext = createContext(null);

function watchlistReducer(watchlist, action) {
  switch (action.type) {
    // TODO: "added"   -> return a new array with { id: action.id, text: action.text, watched: false } at the end
    // TODO: "toggled" -> return a new array where the item with action.id has watched flipped
    // TODO: "deleted" -> return a new array without the item with action.id
    default:
      throw Error("Unknown action: " + action.type);
  }
}

export function WatchProvider({ children }) {
  // TODO: const [watchlist, dispatch] = useReducer(watchlistReducer, []);
  // TODO: return both contexts around {children}. In React 19 write <WatchlistContext value={watchlist}>.
  return children;
}

export function useWatchlist() {
  const value = useContext(WatchlistContext);
  if (value === null) throw Error("useWatchlist must be used inside <WatchProvider>");
  return value;
}

export function useWatchlistDispatch() {
  const value = useContext(WatchlistDispatchContext);
  if (value === null) throw Error("useWatchlistDispatch must be used inside <WatchProvider>");
  return value;
}
