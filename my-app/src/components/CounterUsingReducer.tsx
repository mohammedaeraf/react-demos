import { useReducer } from "react";

// Define the shape of the counter state
type CounterState = {
  count: number;         // The current value of the counter
  error: string | null;  // Error message if an invalid operation is attempted
};

// Define the possible actions for the reducer
type Action = {
  type: "increment" | "decrement"; // Only increment or decrement actions allowed
};

function CounterUsingReducer() {
  // Reducer function to handle state transitions based on action type
  function reducer(counterState: CounterState, action: Action): CounterState {
    // Reset error on every action
    counterState.error = null;

    // Handle increment action
    if (action.type == "increment") {
      // Prevent incrementing beyond 5
      if (counterState.count == 5) {
        return {
          ...counterState,
          error: "Value cannot go beyond 5", // Set error message
        };
      }
      // Increment count
      return {
        ...counterState,
        count: counterState.count + 1,
      };
    } 
    // Handle decrement action
    else if (action.type == "decrement") {
      // Prevent decrementing below 1
      if (counterState.count == 1) {
        return {
          ...counterState,
          error: "Value cannot be less than 1", // Set error message
        };
      }
      // Decrement count
      return {
        ...counterState,
        count: counterState.count - 1,
      };
    } 
    // For any other action, return current state
    else {
      return counterState;
    }
  }

  // Initial state for the counter
  const initialState: CounterState = {
    count: 1,    // Start counter at 1
    error: null, // No error initially
  };

  // useReducer hook to manage counter state and dispatch actions
  const [counterState, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="text-secondary">
      <h2>Counter App using useReducer</h2>
      {/* Display error message if present */}
      {counterState.error && (
        <h5 className="alert alert-danger">{counterState.error}</h5>
      )}
      {/* Display current count */}
      <h4>Count: {counterState.count}</h4>
      <div>
        {/* Increment button dispatches increment action */}
        <button
          className="btn btn-primary mb-3"
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>
      </div>
      <div>
        {/* Decrement button dispatches decrement action */}
        <button
          className="btn btn-warning mb-3"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default CounterUsingReducer;