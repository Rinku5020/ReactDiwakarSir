import React, { useEffect, useState } from 'react'
import Cart from './Cart';
import Form from './Form';

function Product() {

    const [data, setData] = useState([])
    useEffect(() => {
        function FetchApi() {
            fetch("http://localhost:8080/data")
                .then((res) => res.json())
                .then((data) => setData(data))
                .catch((err) => console.log(err))
        }
        FetchApi();
    }, [])

    
    console.log(data)

    return (
        <div>
        <h1 style={{textAlign:"center"}}>Cart Project Add Update and Delete</h1>
        <hr></hr>
        <Form/>
        <div  className='cart'>
        
            {data.map((el) => (

                <Cart key={el.id}
                    image={el.image}
                    title={el.title}
                    price={el.price}
                    description={el.description}
                    category={el.category} 
                    id={el.id}
                     />
            ))}
        </div>
        </div>
    )
}

export default Product
