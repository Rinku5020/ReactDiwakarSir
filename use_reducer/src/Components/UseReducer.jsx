import React, { useReducer } from 'react'

const initialState = { count: 0 } //2

const reducer = (state,action) => //3
{
    switch(action.type){  //5
        case "increment":
        return{count:state.count+action.payload}
        case "decrement":
        return{count:state.count+ action.payload}
    }
}

function UseReducer() {

    const [state, dispatch] = useReducer(reducer, initialState)  // 1
    console.log(state)
  
    return (
        <div>

            <h1>Counter : {state.count}</h1> {/*6*/}
            <button onClick={() => dispatch({ type: "increment", payload: 1 })}>increment</button> {/*4*/}
            <button disabled={state.count==0} onClick={() => dispatch({ type: "decrement", payload: -1 })} >decrement</button>
        </div>
    )
}

export default UseReducer
