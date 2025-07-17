## Sample test questions on **JavaScript**, **TypeScript**, and **React**:


### **🟡 JavaScript**


What is the output of: `console.log("2" + 2)`?

   * a) 4
   * b) "22" ✅
   * c) NaN
   * d) Error

Which of the following is **not** a JavaScript data type?

   * a) String
   * b) Number
   * c) Float ✅
   * d) Boolean

What is the purpose of `map()` function in JS?

   * a) Mutate the array
   * b) Filter elements
   * c) Transform each element ✅
   * d) Sort the array

What does `==` do in JavaScript?

   * a) Strict comparison
   * b) Value comparison ✅
   * c) Type comparison
   * d) Logical comparison

Which keyword declares a constant in JavaScript?

   * a) let
   * b) var
   * c) const ✅
   * d) static

What does `JSON.stringify()` do?

   * a) Parse a string
   * b) Convert JSON to Object
   * c) Convert Object to JSON string ✅
   * d) None


Which of the following is not a loop in JavaScript?

* a) for
* b) foreach ✅ *(Note: it’s a method, not a loop construct)*
* c) while
* d) do...while


Which is the correct way to declare an arrow function?

* a) `function =>() {}`
* b) `() => {}` ✅
* c) `=> () {}`
* d) `function() => {}`

---

### **🔵 TypeScript**

What is TypeScript?

   * a) A new language
   * b) A JavaScript superset ✅
   * c) A framework
   * d) A compiler

What does `: string` in `let name: string` indicate?

   * a) Function return type
   * b) Type annotation ✅
   * c) Type inference
   * d) Interface

What is the output of this code?

   ```ts
   let x: any = "Hello";
   x = 100;
   console.log(x);
   ```

   * a) Hello
   * b) Error
   * c) 100 ✅
   * d) undefined

Which keyword is used to define custom types?

   * a) interface
   * b) type
   * c) both ✅
   * d) class

Which of these will result in an error?

   * a) `let a: number = "10"` ✅
   * b) `let b: string = "hello"`
   * c) `let c: boolean = true`
   * d) `let d: any = 5`

What is a union type in TypeScript?

   * a) `let a = 5 | 6`
   * b) `let value: string | number` ✅
   * c) `let value = string + number`
   * d) `let value = union(string, number)`

How do you define an optional property in an interface?

   * a) `name? string`
   * b) `name: string?`
   * c) `name?: string` ✅
   * d) `optional name: string`

What is the default type of variables in TypeScript if not specified?

   * a) string
   * b) any ✅
   * c) object
   * d) undefined


How to declare a tuple?

* a) `let x: [number, string]` ✅
* b) `let x: (number, string)`
* c) `let x = [number, string]`
* d) `tuple x = [number, string]`

What is the return type of a function with no return?

* a) void ✅
* b) any
* c) null
* d) undefined

Which is NOT a valid TypeScript type?

* a) boolean
* b) float ✅
* c) unknown
* d) never

What does `readonly` do in a TypeScript interface?

* a) Prevents assignment ✅
* b) Makes property optional
* c) Converts to string
* d) Removes property


---

### **🟢 React**

1. What is the purpose of `useState` in React?

   * a) To handle props
   * b) To manage component state ✅
   * c) To fetch data
   * d) To create a context

2. Which hook is used to perform side effects?

   * a) useRef
   * b) useEffect ✅
   * c) useMemo
   * d) useCallback

3. What is a valid way to pass props to a child component?

   * a) `<Child data="value" />` ✅
   * b) `<Child data=value />`
   * c) `<Child>{data: "value"}</Child>`
   * d) `<Child prop="data=value" />`

4. What is the purpose of `useContext`?

   * a) Manage side effects
   * b) Create new components
   * c) Access shared data ✅
   * d) Reduce rendering

5. What does `useReducer` return?

   * a) \[state, dispatch] ✅
   * b) state only
   * c) reducer function
   * d) dispatch only

6. Which library is commonly used for routing in React?

   * a) react-router-dom ✅
   * b) react-path
   * c) react-navigate
   * d) router-react

7. What should every React component return?

   * a) Object
   * b) Array
   * c) JSX ✅
   * d) String

8. What is JSX?

   * a) A JavaScript extension ✅
   * b) A type of JSON
   * c) A routing library
   * d) Styling library

9. How do you apply inline styles in React?

   * a) `style={{ color: "red" }}` ✅
   * b) `style="color: red"`
   * c) `css="color: red"`
   * d) `style: color=red`

10. What is the purpose of a key in lists?

* a) To store values
* b) To prevent duplication
* c) To identify unique elements ✅
* d) For accessibility

11. What is Context API used for?

* a) Navigation
* b) Styling
* c) Global state management ✅
* d) Animations


12. How to fetch data in a React component?

* a) Using fetch in `useEffect` ✅
* b) In `useState`
* c) In `render()`
* d) Using `props`

13. Which is true about `createContext()`?

* a) It returns a hook
* b) It creates a new context ✅
* c) It dispatches events
* d) It sets state
