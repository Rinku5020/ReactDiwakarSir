import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

function Description() {
 const[cardData,setCardData]=useState({})
const{id}=useParams()
 useEffect(()=>{
    fetch(`http://localhost:8080/Productdata/${id}`)
    .then((res)=>res.json())
    .then((data)=>setCardData(data))
    .catch((err)=>console.log(err))
 },[])


  return (
    <div>
      <h1>Description Page</h1>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cardData.image}/>
      <Card.Body>
        <Card.Title>{cardData.name}</Card.Title>
        <Card.Text>
        Price:- {cardData.price}
        </Card.Text>
      </Card.Body>
    </Card>      
    </div>
  )
}

export default Description
