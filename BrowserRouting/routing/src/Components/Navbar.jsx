import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
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
        {
          path:'/product',
          title:'Product'
        },
      ]

  return (
    <div style={{display:"flex",justifyContent:"space-around", margin:"15px"}}>


    {link.map((el,i)=>(
        <NavLink style={({isActive})=>
        {
          return isActive ? {color:"red",textDecoration:"none"} :{color:"teal",textDecoration:"none"}
        }} 

        
        key={el.path} to={el.path}> 
        {el.title}    
        </NavLink>
    ))}
    <Link to={"/login"}><Button variant="outline-primary">Login</Button></Link>
    

{/* 
      <Link to={'/'} >Home</Link>
      <Link to={'/about'} >About</Link>
      <Link to={'/service'} >Service</Link> */}
    </div>
  )
}

export default Navbar
