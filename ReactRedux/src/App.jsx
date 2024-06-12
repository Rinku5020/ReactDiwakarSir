import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { AddToCounter, SubToCounter } from './Redux/Action'
import { store } from './Redux/Store'

function App() {

// const {dispatch, getState, subscribe} = store

const dispatch = useDispatch()
const getCounter=useSelector(a=>a.counter)
console.log(getCounter)

  return (
    <>
      <h1>Counter : {getCounter}</h1>
      <button onClick={ ()=>{dispatch(AddToCounter())}} >+</button>
      <button onClick={()=>{dispatch(SubToCounter())}} >-</button>
    </>
  )
}

export default App

