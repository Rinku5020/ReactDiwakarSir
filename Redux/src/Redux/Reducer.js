import React from 'react'

function Reducer(state,action) {

  switch(action.type){
    case "increment" :
    return{counter:state.counter + action.payload} // Step 8
    case "decrement" :
    return{counter:state.counter - action.payload}
    default:
      return state
  }
}

export default Reducer

//Step 2