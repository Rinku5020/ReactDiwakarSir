import { legacy_createStore } from "redux"
import Reducer from "./Reducer"


const initalstate ={
        counter :0
}

export const store = legacy_createStore(Reducer,initalstate) // Step 1