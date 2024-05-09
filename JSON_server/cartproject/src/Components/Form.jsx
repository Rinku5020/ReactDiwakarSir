import React, { useState } from 'react'
function Form() {
    const allFromData = {
        image: "",
        title: "",
        price: "",
        description: ""
    }
    const [formdata, setFormdata] = useState({ allFromData })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormdata((prevformdata) => ({ ...prevformdata, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formdata)

        if (!formdata.image || !formdata.title || !formdata.price || !formdata.description) {
            alert("Please fill in all fields");
            return;
        }


        fetch("http://localhost:8081/data", {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formdata)
        })
            .then((res) => res.json())
            .catch((err) => console.log(err))
    }

    return (
        <div className='form'>
            <h1>Form Data</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" className='formInput' name='image' value={formdata.image} onChange={handleChange} placeholder='Entre image URL' />
                <input type="text" className='formInput' name='title' value={formdata.title} onChange={handleChange} placeholder='Entre image title' />
                <input type="text" className='formInput' name='price' value={formdata.price} onChange={handleChange} placeholder='Entre price' />
                <input type="text" className='formInput' name='description' value={formdata.description} onChange={handleChange} placeholder='Entre description' />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form
