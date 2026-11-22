import { useState } from "react";

// TASK 4a: a useState that remembers its value in localStorage.
// 1. Initialise with a function: read localStorage.getItem(key), JSON.parse it, else use initialValue.
// 2. useEffect: save JSON.stringify(value) under key whenever value changes.
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);
  return [value, setValue];
}
