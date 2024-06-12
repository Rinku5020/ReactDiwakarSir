
import { useState } from 'react'
import './App.css'
import { store } from './Redux/Store'

function App() {

  const[value,setValue]=useState(1) //Step 9
const {getState,dispatch,subscribe} = store //4

 const handleAdd=()=>
  {
    dispatch({type:"increment", payload:1}) // Step 7
    console.log(getState().counter)
  }
const handlesub=()=>
  {
    dispatch({type:"decrement", payload:1}) //Step 7
    console.log(getState().counter)
  }

  subscribe(()=>
    {
        setValue((prev)=>prev+1) // Step 10
    }
  )
  return (
    <>
     <h1>Redux</h1>
      <h2>Counter: {getState().counter}</h2> {/*Step 5*/}
      <button onClick={handleAdd} >+</button>  {/* Stpe6*/}
      <button onClick={handlesub}>-</button>
    </>
  )
}

export default App

