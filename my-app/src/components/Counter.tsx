import { useEffect, useState } from "react";

interface CounterProps {
  title: string;
  initialVal: number;
}

function Counter(props: CounterProps) {
  let [count, setCount] = useState(props.initialVal);

  // used to run side effects
  useEffect(() => {
    console.log(`The value of count is ${count}`);
  }, [count]);
    // [] => means the code will run when the component mounts (loads)

  return (
    <>
      <h1 className="text-warning mb-3">{props.title}</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <h4>
        Count: <span className="badge bg-primary">{count}</span>
      </h4>
    </>
  );
}

export default Counter;
