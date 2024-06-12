import {legacy_createStore} from "redux"
import Reducer from "./Reducer" // Step 3


const initalstate ={
    counter :0
}

export const store = legacy_createStore(Reducer, initalstate)

//Step 1