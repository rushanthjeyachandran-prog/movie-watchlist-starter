import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="panel">
      <h2>404 · Page not found</h2>
      <p>There is nothing at this address.</p>
      <Link to="/">Go to the home page</Link>
    </section>
  );
}
