import { useState } from "react";

export const CounterFunctionalComponent = () => {
    const [count, setCount] = useState<number>(0);

    const add = () => setCount(count + 1)
    
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Add to counter</button>
            <p>{count}</p>
        </div>
    )
}