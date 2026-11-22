import Home from "./pages/Home.jsx";
import MoviesPage from "./pages/MoviesPage.jsx";
import WatchlistPage from "./pages/WatchlistPage.jsx";

// For Tasks 1 to 4 everything is stacked on one page.
// In Task 5 you will give each of these its own address.
export default function App() {
  return (
    <>
      <header className="site-header">
        <h1>Movie Watchlist</h1>
      </header>
      <Home />
      <MoviesPage />
      <WatchlistPage />
    </>
  );
}
