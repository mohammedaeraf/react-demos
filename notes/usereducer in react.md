# **useReducer Hook**

The useReducer hook in React is an alternative to useState for managing complex state logic. It is particularly useful when the next state depends on the previous one or when dealing with multiple sub-values in the state.

**Here's how useReducer works: \[[1](https://www.telerik.com/blogs/react-usereducer-hook)\]**

* **Reducer Function**: You define a reducer function that takes the current state and an action as arguments and returns the new state based on the action type.  
* **Initial State**: You provide an initial state value.  
* **Dispatch Function**: useReducer returns the current state and a dispatch function. You use the dispatch function to trigger state updates by sending action objects to the reducer.  
* **State Update**: When an action is dispatched, the reducer function determines how to update the state based on the action type and returns a new state.

**Key Concepts:**

* **Reducer**: A pure function that takes the current state and an action and returns a new state.  
* **Action**: An object that describes the type of state update to perform.  
* **Dispatch**: A function provided by useReducer that sends an action to the reducer. \[[1](https://www.telerik.com/blogs/react-usereducer-hook), [2](https://medium.com/@shruti.latthe/react-usereducer-hook-843d0ea0ef24)\]

**When to Use useReducer:**

* Complex state logic involving multiple sub-values.  
* When state transitions are complex or depend on the previous state.  
* When you want to centralize state update logic in a single place. \[[3](https://medium.com/zestgeek/mastering-reacts-usereducer-hook-a-comprehensive-guide-with-examples-e48c2f306566#:~:text=When%20to%20Use%20useReducer%20*%20Complex%20State,making%20it%20easier%20to%20debug%20and%20test.)\]

Example:

| `import React, { useReducer } from 'react'; const initialState = { count: 0 }; function reducer(state, action) {   switch (action.type) {     case 'increment':       return { count: state.count + 1 };     case 'decrement':       return { count: state.count - 1 };     case 'reset':         return { count: 0 };     default:       return state;   } } function Counter() {   const [state, dispatch] = useReducer(reducer, initialState);   return (     <div>       <p>Count: {state.count}</p>       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>       <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>       <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>     </div>   ); } export default Counter;` |
| :---- |

**In this example:**

* initialState is initialized with a count of 0\.  
* The reducer function handles the increment, decrement and reset actions.  
* The dispatch function is used to trigger the actions.

useReducer is a powerful tool for managing complex state in React, offering a more structured approach than useState for intricate state logic.

*AI responses may include mistakes.*

\[1\] [https://www.telerik.com/blogs/react-usereducer-hook](https://www.telerik.com/blogs/react-usereducer-hook)  
\[2\] [https://medium.com/@shruti.latthe/react-usereducer-hook-843d0ea0ef24](https://medium.com/@shruti.latthe/react-usereducer-hook-843d0ea0ef24)  
\[3\] [https://medium.com/zestgeek/mastering-reacts-usereducer-hook-a-comprehensive-guide-with-examples-e48c2f306566](https://medium.com/zestgeek/mastering-reacts-usereducer-hook-a-comprehensive-guide-with-examples-e48c2f306566#:~:text=When%20to%20Use%20useReducer%20*%20Complex%20State,making%20it%20easier%20to%20debug%20and%20test.)  
\[-\] [https://medium.com/@bhairabpatra.iitd/usereducer-hook-in-react-46dd7716ebd7](https://medium.com/@bhairabpatra.iitd/usereducer-hook-in-react-46dd7716ebd7#:~:text=What%20is%20useReducer\(\)%20?%20The%20useReducer%20hook,by%20employing%20a%20technique%20called%20%22reducer%20functions.%22)  
\[-\] [https://weblianz.com/blog/6-most-important-hooks-that-every-react-developer-should-know](https://weblianz.com/blog/6-most-important-hooks-that-every-react-developer-should-know)  
\[-\] [https://github.com/amiryusupov/frontend\_cheatsheet](https://github.com/amiryusupov/frontend_cheatsheet#:~:text=Frontend%20Cheat%20Sheet.%20This%20repository%20is%20a,my%20own%20use%20/%20official%20documentation%20and)