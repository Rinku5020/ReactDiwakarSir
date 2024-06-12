import { ADD, SUB } from "./ActionType";

export function AddToCounter () // 7
    {
            return{type:ADD,payload:1}
    }

export function SubToCounter() // 8
{
    return{type:SUB,payload:1}
}