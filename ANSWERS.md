# My answers: Movie Watchlist workshop

Name: 

Answer each question in your own words, two or three sentences. Do not paste an AI answer. You may be asked to explain these in a viva.

## Task 1

**1.1 (Explain)** In your own words, why did the Favourite button do nothing while favourite was an ordinary variable?

My answer:



**1.2 (Predict)** There are three cards and you click Add favourite on the second one. Which cards change, and why?

My answer:



**1.3 (Fix)** A friend wrote onClick={setFavourite(true)} and gets "Too many re-renders". What is wrong and how do you fix it?

My answer:



## Task 2

**2.1 (Explain)** What does it mean for an input to be controlled? Describe what happens from one key press to the new text appearing in the box.

My answer:



**2.2 (Explain)** Why is watchlist.push(item) followed by setWatchlist(watchlist) a bug?

My answer:



**2.3 (Explain)** The heading shows how many movies are still to watch. Why does that number not need its own useState?

My answer:



**2.4 (Explain)** Why do list items use key={item.id} and not the index?

My answer:



## Task 3

**3.1 (Explain)** Why is the fetch inside useEffect and not written directly in the component body?

My answer:



**3.2 (Predict)** What is the difference between useEffect(fn), useEffect(fn, []) and useEffect(fn, [url])?

My answer:



**3.3 (Explain)** fetch does not fail on a 404. What can go wrong if you forget to check res.ok?

My answer:



**3.4 (Explain)** What does the cleanup function (controller.abort()) do and why do we ignore AbortError?

My answer:



## Task 4

**4.1 (Explain)** What is a custom hook? What makes it different from an ordinary function?

My answer:



**4.2 (Explain)** Why does useLocalStorage use useState(() => ...) with an arrow function instead of a plain value?

My answer:



**4.3 (Predict)** Two components both call useFetch("/movies.json"). Do they share the same data? Explain.

My answer:



**4.4 (Explain)** Why is JSON.parse wrapped in try and catch?

My answer:



## Task 5

**5.1 (Explain)** Why do we use Link and NavLink instead of an a tag with href?

My answer:



**5.2 (Explain)** Why does the Home NavLink need the end prop?

My answer:



**5.3 (Explain)** What does the route with path "*" do, and where must you place it?

My answer:



**5.4 (Predict)** After you deploy, refreshing /watchlist shows a server 404. Why does it happen and how is it fixed?

My answer:



## Task 6

**6.1 (Explain)** What does <Outlet /> do in the Layout?

My answer:



**6.2 (Explain)** What does index: true mean for the Home route?

My answer:



**6.3 (Fix)** useParams gives movieId as "3", but movies.find((m) => m.id === movieId) finds nothing. Why, and what is the fix?

My answer:



**6.4 (Explain)** Why are the children's paths written without a leading slash?

My answer:



## Task 7

**7.1 (Explain)** Why can the header badge not get the watchlist through props from WatchlistPage? What does Context do about it?

My answer:



**7.2 (Explain)** What does the reducer do, and why must it never use push or change the old array?

My answer:



**7.3 (Explain)** Why do we create two contexts, one for the list and one for dispatch?

My answer:



**7.4 (Predict)** What happens if useWatchlist is used outside the provider? Why is that error helpful?

My answer:



## Task 8

**8.1 (Explain)** Where does the search text live in this task? Give two advantages over useState.

My answer:



**8.2 (Explain)** Why is the filtered list not stored in state?

My answer:



**8.3 (Predict)** Where would you keep each: (a) dark mode that survives a refresh, (b) which tab is open inside one component, (c) the logged-in user needed by every page?

My answer:



