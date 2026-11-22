export default function WatchForm({ onAdd }) {
  // TASK 2: make the input controlled. Keep its text in state (useState("")).

  function handleSubmit(e) {
    // TODO: stop the page reload, ignore empty text, call onAdd(text), clear the box
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add a movie to watch" />
      <button type="submit">Add</button>
    </form>
  );
}
