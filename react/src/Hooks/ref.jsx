import React, { useEffect } from "react";
const Ref = () => {
    const [count,setCount] = React.useState(0);
    const value = React.useRef(0);
    useEffect(() => {
        setTimeout(() => {
            value.current = value.current+1}, 1000);
        })
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