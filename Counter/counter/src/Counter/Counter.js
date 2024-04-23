import React, { useState } from 'react'

function Counter() {
  const[counter,setCounter]=useState(0)
  return (
    <div style={{border:"1px solid black", margin:"200px", borderRadius:"15px",fontFamily:"-moz-initial",backgroundColor:"#40E0D0"}}>
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <div style={{marginBottom:"50px", padding:"30px"}}>
      <button className='btn' style={{margin:"15px",backgroundColor:"green"}} onClick={()=>setCounter(counter+1)}>Increment</button>
      <button className='btn' style={{margin:"15px",backgroundColor:"yellow"}} onClick={()=>setCounter(0)}>Reset</button>
      <button className='btn' style={{margin:"15px",backgroundColor:"red"}} disabled={counter==0} onClick={()=>setCounter(counter-1)}>decrement</button>
      </div>
    </div>
  )
}

export default Counter
