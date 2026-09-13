# Dev Stack — Build Your Ideal Development Stack

**Dev Stack** is a modern, interactive web application designed for developers to explore various frontend, backend, database, and tooling technologies, compare them side-by-side, and curate their ideal project tech stack.

---

## 🚀 Features
1. **Interactive Technology Exploration:** Browse through a curated list of popular web development technologies complete with details, ratings, difficulties, and badges.
2. **Dynamic Stack Management:** Add or remove technologies to/from your custom stack in real-time with instant UI updates and persistent storage using **Browser LocalStorage**.
3. **Toast Notifications & Bulk Actions:** Get instant feedback via **React Toastify** alerts when adding or removing items, and easily clear your entire stack with a single click.

---

## 💻 Technologies Used
* **React.js** (Frontend Library)
* **Tailwind CSS & DaisyUI** (Styling & UI Components)
* **JavaScript (ES6+)**
* **React-Toastify** (For pop-up notifications)
* **JSON** (Local data source)
* **Vite** (Build Tool)

---

## ❓ React Concepts & Interview Answers

### 1. What is JSX, and why is it used in React?
**JSX** stands for JavaScript XML. It allows us to write HTML-like syntax directly inside JavaScript files. It is used in React because it makes the code cleaner, more readable, and easier to write UI structures without having to use complex `createElement` functions.

### 2. What is the difference between props and state?
* **Props (Properties):** These are read-only inputs passed from parent components to child components to configure or display data. They are immutable (cannot be changed by the child).
* **State:** This is internal data managed *within* a component. It can change over time based on user actions or events, and changing it triggers a re-render of the component.

### 3. What does the useState hook do, and where did you use it in this project?
`useState` is a React Hook that lets you add state variables to functional components. 
* *Usage in this project:* I used `usestate` to manage the fetched technologies list (`users`) and the user's selected technology stack (`addedStack`).

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
`useEffect` lets you perform side effects (like data fetching, subscriptions, or manually changing the DOM) in functional components after rendering. 
* *Why it's needed:* Fetching data is an asynchronous side effect. Running it inside `useEffect` ensures the fetch request happens once when the component mounts, preventing infinite loops.

### 5. Why does every item in a .map() list need a unique key prop?
React uses keys to efficiently identify which items in a list have changed, been added, or been removed. Unique keys help React optimize rendering performance and maintain correct component states.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering is the ability to render different UI elements or components based on certain conditions (like `if` statements or ternary operators).
* *Example used in this project (Empty Stack Message):*
  ```jsx
  {addedStack.length === 0 ? (
    <div className="text-center text-gray-400">Your stack is empty.</div>
  ) : (
    <div>{/* Render selected items */}</div>
  )}
