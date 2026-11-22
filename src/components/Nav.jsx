// TASK 5: a navigation bar. Use NavLink from "react-router".
// Links: Home (/), Movies (/movies), Watchlist (/watchlist). Remember the `end` prop on Home.
// NavLink gives you isActive: className={({ isActive }) => (isActive ? "nav active" : "nav")}
// TASK 6 will delete this file and replace it with a Layout.
export default function Nav() {
  return (
    <header className="site-header">
      <h1>Movie Watchlist</h1>
      <nav>{/* TODO */}</nav>
    </header>
  );
}
