import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { AddToCounter, SubToCounter } from './Redux/Action'
import { store } from './Redux/Store'

function App() {

// const {dispatch, getState, subscribe} = store //4

const dispatch = useDispatch() // 9
const getCounter=useSelector(a=>a.counter) // 10
console.log(getCounter)

  return (
    <>
      <h1>Counter : {getCounter}</h1>  {/*11*/}
      <button onClick={ ()=>{dispatch(AddToCounter())}} >+</button> {/*5*/}
      <button onClick={()=>{dispatch(SubToCounter())}} >-</button>  {/*6*/}
    </>
  )
}

export default App

