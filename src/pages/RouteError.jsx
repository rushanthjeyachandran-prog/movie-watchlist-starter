import { isRouteErrorResponse, useRouteError } from "react-router";

export default function RouteError() {
  const error = useRouteError();
  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : error.message;
  return (
    <section className="panel">
      <h2>Something went wrong</h2>
      <p role="alert">{message}</p>
    </section>
  );
}
