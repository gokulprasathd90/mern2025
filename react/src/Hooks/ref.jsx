import React from "react";
const Ref = () => {
    const [count,setCount] = React.useState(0);
    const value = React.useRef(0);
    
    const handleIncrement = () => {
      setCount(count+1);
    }
    const handleValueIncrement = () => {
        value.current += 1;

    }
    return (
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={handleIncrement}>+</button>
            <h1>{value.current}</h1>
            <button onClick={handleValueIncrement}>Increment</button>
        </div>
    )
}