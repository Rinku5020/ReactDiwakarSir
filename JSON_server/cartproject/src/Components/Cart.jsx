import React, { useState } from 'react'
function Cart({ id, image, title, price, category, description }) {
    const [showForm, setShowFrom] = useState(false)
    const [Updatetitle, setUpdatetitle] = useState(title);
    const [Updateimage, setUpdateimage] = useState(image);
    const [Updateprice, setUpdateprice] = useState(price);
    const [Updatedescription, setUpdatedescription] = useState(description);
    // !  Delete Function 
    const handledelete = () => {
        fetch(`http://localhost:8081/data/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    console.log('Resource deleted successfully');
                    alert("Delete successfully....")
                } else {
                    console.error('Error deleting resource');
                }
            })
            .catch(error => console.error('Error:', error));
    }
    //  ! update Function

    const handleUpdate = () => {
        setShowFrom(true)
    };
    const HandleSubmit = (e) => {
        e.preventDefault();
        const updateData = {
            title: Updatetitle,
            image: Updateimage,
            price: Updateprice,
            description: Updatedescription,
        }
        console.log(updateData)

        fetch(`http://localhost:8081/data/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updateData)
        })
        .then(response => response.json())
        .then(data => {
            alert("updated.....")
            console.log(data)})
        .catch(error => console.error('Error:', error));


        setShowFrom(false);
        
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
            <button style={{ marginLeft: '40px', marginTop: "10px", marginBottom: '10px' }} onClick={handledelete}>Delete</button>
            <button style={{ marginLeft: '40px' }} onClick={handleUpdate}>Update</button>
            {showForm && (
                <div className='form'>
                    <h1>Form UpdateData Data</h1>
                    <form action="" onSubmit={HandleSubmit}>
                        <input type="text" className='formInput' onChange={(e)=>setUpdateimage(e.target.value)} value={Updateimage} placeholder='Entre image URL' />
                        <input type="text" className='formInput' onChange={(e)=>setUpdatetitle(e.target.value)} value={Updatetitle} placeholder='Entre image title' />
                        <input type="text" className='formInput' onChange={(e)=>setUpdateprice(e.target.value)} value={Updateprice} placeholder='Entre price' />
                        <input type="text" className='formInput' onChange={(e)=>setUpdatedescription(e.target.value)} value={Updatedescription} placeholder='Entre description' />
                        <button type='submit'>Update</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Cart
