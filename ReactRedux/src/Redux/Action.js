import { ADD, SUB } from "./ActionType";

export function AddToCounter ()
    {
            return{type:ADD,payload:1}
    }

export function SubToCounter()
{
    return{type:SUB,payload:1}
}