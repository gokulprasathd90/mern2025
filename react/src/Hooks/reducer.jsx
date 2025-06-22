import React from "react";
cosnt initialValue = (state,action)=>{
    const reducerFunction=(state, action) => {

    }  
const Reducer =()=>{
    const [state, dispatch] = React.useReducer(reducerFunction, initialValue)
    return (
        <div>
            <h1>{state,dispatch}</h1>
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
              <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>  
        </div>
    )
}
}