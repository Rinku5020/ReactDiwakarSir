import React, { useState } from 'react'

function StudentsForm() {
    const userdata =
    {
        name: "",
        email: "",
        password: "",
        select: "",
        gender: false,

    }

    const [data, setData] = useState({ userdata })
    const handelClick = (e) => {
        let value = e.target.value == "on" ? true : e.target.value
        setData((prevData) => ({ ...prevData, [e.target.name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)

    }

    return (
        <div>
            <h1>1. Student Form Using Single State</h1>
            <form action="" onSubmit={(e) => handleSubmit(e)} >
                <input type="text" name='name' value={data.name} onChange={(e) => handelClick(e)} placeholder='Enter Your Name' /> <br /> <br />
                <input type="email" name='email' value={data.email} onChange={(e) => handelClick(e)} placeholder='Enter Your Email' /> <br /> <br />
                <input type="password" name='password' value={data.password} onChange={(e) => handelClick(e)} placeholder='Enter Your Password' /> <br /> <br />
                <select name="select" value={data.select} onChange={(e) => handelClick(e)}>
                    <option value=""  disabled>Select Your Education</option>
                    <option value="10th">10th</option>
                    <option value="12th">12th</option>
                    <option value="Graduate">Graduate</option>
                </select><br /><br />
                <input type="radio" name='gender' checked={data.male} onChange={(e) => handelClick(e)} /><label htmlFor="">Male</label>
                <input type="radio" name='gender' checked={data.female} onChange={(e) => handelClick(e)}/><label htmlFor="">Female</label><br /><br />
                <input type="Submit" className='btn' />
            </form>
        </div>
    )
}

export default StudentsForm
