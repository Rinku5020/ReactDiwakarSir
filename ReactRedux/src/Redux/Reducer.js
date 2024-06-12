import React from 'react'
import { ADD, SUB } from './ActionType';

function Reducer(state,{type,payload}) {
switch(type){

    case ADD :
        return{counter:state.counter+payload};
    case SUB :
        return{counter:state.counter-payload};

    default:
        return state
}


}
 
export default Reducer
 // Step 3