import React from 'react'
import {Link, NavLink} from 'react-router-dom'
function Navbar() {

    const link=[
        {
          path:'/',
          title:"Home"
        },
        {
          path:'/about',
          title:"About"
        },
        {
          path:'/service',
          title:"Service"
        },
      ]

  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>


    {link.map((el,i)=>(
        <NavLink style={({isActive})=>
        {
          return isActive ? {color:"red",textDecoration:"none"} :{color:"teal",textDecoration:"none"}
        }} 

        
        key={el.path} to={el.path}> 
        {el.title}
           
        </NavLink>
    ))}



      <Link to={'/'} >Home</Link>
      <Link to={'/about'} >About</Link>
      <Link to={'/service'} >Service</Link>
    </div>
  )
}

export default Navbar
