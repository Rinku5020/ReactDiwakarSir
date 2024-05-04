import React, { useState } from 'react'
function Cart({ id, image, title, price, category, description }) {

    const handledelete = () => {
        fetch(`http://localhost:8080/data/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    console.log('Resource deleted successfully');
                } else {
                    console.error('Error deleting resource');
                }
            })
            .catch(error => console.error('Error:', error));
    }

    return (
        <div>
            <div className='cart2'>
                <p>{id}</p>
                <img className='Img' src={image} alt={title}></img>
                <h3>{title}</h3>
                <h2>{price}</h2>
                <h5>{category}</h5>
                <p style={{ fontSize: "8px", textAlign: "left", padding: "5px", }}>{description}</p>
            </div>
            <button onClick={()=>handledelete(id)}>Delete</button>
            <button>Update</button>
        </div>
    )
}

export default Cart
