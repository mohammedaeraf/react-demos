import { useState } from "react";

interface CounterProps {
    title: string;
    initialVal: number;
}

function Counter(props: CounterProps) {

    let [count, setCount] = useState(props.initialVal);

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