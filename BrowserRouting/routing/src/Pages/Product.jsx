import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Product() {
  const [data,setdata]=useState([])
  useEffect(()=>{
    fetch("http://localhost:8080/Productdata")
    .then((res)=>res.json())
    .then((data)=>setdata(data))
    .catch((err)=>console.log(err))
  },[])
  return (
    <div className='pr'>
    {data.map((el)=>(
      <Link to={`/description/${el.id}`} key={el.id}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={250} src={el.image}/>
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
         Price:- {el.price}
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    ))}
    
    
      
    </div>
  )
}

export default Product
