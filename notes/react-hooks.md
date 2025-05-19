## 🧠 **Understanding React Hooks – A Beginner's Guide**

### ✅ What Are Hooks?

Hooks are **functions** that let you **“hook into” React features** (like state and lifecycle methods) from your **function components**.

Before Hooks, you needed to write **class components** to use features like state, but now with Hooks, you can do all that in **function components**.

---

### 🧩 Why Were Hooks Introduced?

* To **reuse logic** across components (without wrappers like HOCs or render props).
* To **write cleaner and simpler code** using functions.
* To make it easier to understand how components behave.

---

### 🎣 Commonly Used Hooks

---

### 1. **`useState()` – for State Management**

#### ✅ Purpose:

Allows your component to keep track of values (like a counter, form input, etc.)

#### 🧪 Example:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // 0 is the initial value

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

💡 Here, `count` is the state variable, and `setCount` is the function to update it.

---

### 2. **`useEffect()` – for Side Effects**

#### ✅ Purpose:

Runs code **after the component renders**, such as:

* Fetching data from an API
* Setting up timers
* Listening to events

#### 🧪 Example:

```jsx
import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []); // Empty dependency = run once when component mounts

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}
```

---

### 3. **`useRef()` – for Referencing Elements or Persisting Values**

#### ✅ Purpose:

* Access a DOM element directly
* Store a value without causing re-renders

#### 🧪 Example:

```jsx
import { useRef } from "react";

function TextInputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Access DOM element
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

---

### 📝 Key Points:

* Hooks only work in **function components**.
* Hook names **must start with `use`** (like `useState`, `useEffect`).
* You **can’t use Hooks inside loops or conditions** – always call them at the top level of the component.
* Hooks are meant to make your code **cleaner, shorter, and more readable**.

---

### 📚 Suggest Practice:

✅ Create small apps using:

* A **counter** using `useState`
* A **data fetcher** using `useEffect`
* A **focus form** using `useRef`

