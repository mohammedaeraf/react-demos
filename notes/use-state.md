# **React useState Hook - A Complete Guide with Examples**

## **📌 What is `useState`?**

`useState` is a **React Hook** that allows functional components to **store and manage state**. It is used when a component needs to remember values between renders.

### **💡 When to Use `useState`?**

✅ Storing and updating **numbers, strings, or booleans**

✅ Managing **form inputs** (text fields, checkboxes, etc.)

✅ Keeping track of **lists and objects**

✅ Handling **toggle states (like dark mode, modals, etc.)**

---

## **🔹 Basic Syntax**

```tsx
const [state, setState] = useState(initialValue);

```

- **`state`** → Holds the current value.
- **`setState(newValue)`** → Updates the state and re-renders the component.
- **`initialValue`** → The starting value for state.

---

# **1️⃣ Basic Counter Example (Using `useState` with a Number)**

### **📝 Example: Counter with Increment Button**

```tsx
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // Initialize count with 0

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;

```

### **🔍 Explanation**

✅ **`useState(0)` initializes `count` with `0`**.

✅ **Clicking the button updates `count`**, causing a **re-render**.

---

# **2️⃣ Managing Text Input (Using `useState` with Strings)**

### **📝 Example: Live Text Update**

```tsx
import React, { useState } from "react";

const TextInput = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
};

export default TextInput;

```

### **🔍 Explanation**

✅ **User input updates state (`text`)** in real-time.

✅ **Two-way data binding** → Whatever the user types is shown immediately.

---

# **3️⃣ Toggle Button Example (Using `useState` with Booleans)**

### **📝 Example: Toggle Light/Dark Mode**

```tsx
import React, { useState } from "react";

const ToggleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div style={{ background: isDarkMode ? "black" : "white", color: isDarkMode ? "white" : "black", padding: "20px" }}>
      <h2>Current Mode: {isDarkMode ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Mode</button>
    </div>
  );
};

export default ToggleTheme;

```

### **🔍 Explanation**

✅ `useState(false)` stores a boolean.

✅ Clicking the button **toggles** between **dark** and **light mode**.

---

# **4️⃣ Managing Objects with `useState`**

### **📝 Example: Updating User Profile**

```tsx
import React, { useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({ name: "", age: "" });

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Enter age"
        value={user.age}
        onChange={(e) => setUser({ ...user, age: e.target.value })}
      />
      <p>Name: {user.name}, Age: {user.age}</p>
    </div>
  );
};

export default UserProfile;

```

### **🔍 Explanation**

✅ `useState({ name: "", age: "" })` stores an **object**.

✅ **`...user` ensures existing values remain unchanged** when updating one field.

---

# **5️⃣ Managing an Array with `useState`**

### **📝 Example: Adding Items to a List**

```tsx
import React, { useState } from "react";

const ItemList = () => {
  const [items, setItems] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input]);
      setInput("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

```

### **🔍 Explanation**

✅ `useState<string[]>([])` initializes an **empty array**.

✅ `setItems([...items, input])` **adds a new item while keeping old ones**.

---

# **6️⃣ `useState` with API Data**

### **📝 Example: Fetching Data from an API**

```tsx
import React, { useState, useEffect } from "react";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]); // State to store movie data
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY");
        
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();
        setMovies(data.results); // Update state with movie list
      } catch (error) {
        setError(error.message); // Store error message
      } finally {
        setLoading(false); // Hide loading indicator after fetch
      }
    };

    fetchMovies(); // Call the async function
  }, []); // Runs only once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PopularMovies;

```

### **🔍 Explanation**

✅ `useState([])` holds an **array of movies**.

✅ `useEffect()` **fetches data on mount**.

---

# **🔹 Common Mistakes & Best Practices**

| ❌ Mistake | ✅ Fix |
| --- | --- |
| Modifying state directly (`state = newValue`) | Use `setState(newValue)` |
| Forgetting to update previous state in objects/arrays | Use the **spread operator (`...state`)** |
| Not initializing state properly | Provide a **default value (`useState([])`)** |
| Using `useState` when data doesn’t change | Use **props instead** |

---

# **🎯 Final Takeaways**

✅ `useState(initialValue)` **creates state variables**.

✅ `setState(newValue)` **updates state and triggers re-render**.

✅ **Use `useState` for numbers, strings, booleans, objects, and arrays**.

✅ **Use the spread operator (`...state`) when updating objects or arrays**.