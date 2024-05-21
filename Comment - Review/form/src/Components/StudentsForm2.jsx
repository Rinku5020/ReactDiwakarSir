import React, { useState } from 'react'

function StudentsForm2() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [select, setSelect] = useState("")
    const [password, setPassword] = useState("")
    const [male, setmale] = useState(false)
    const [female, setFemale] = useState(false)
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleSelect = (e) => {
        setSelect(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleCheck1 = (e) => {
        setmale(e.target.checked)
    }
    const handleCheck2 = (e) => {
        setFemale(e.target.checked)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formdata =
        {
            name: name,
            email: email,
            select: select,
            password: password,
            male:male,
            female:female
        };
        console.log(formdata)
    }

    return (
        <div>
            <h1>2. Student Form Using Multiple State</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleNameChange} placeholder="Enter Your Name" /> <br /><br />
                <input type="Email" value={email} onChange={handleEmailChange} placeholder="Enter Your Email" /> <br /><br />
                <input type="Password" value={password} onChange={handlePassword} placeholder="Enter Your Password" /><br /><br />
                <select name="" id="" value={select} onChange={handleSelect}>
                    <option value="" disabled >Select Your Education</option>
                    <option value="10th">10th</option>
                    <option value="12th">12th</option>
                    <option value="Graduate">Graduate</option>
                </select><br /><br />
                <input type="radio"  checked={male} onChange={(e) => handleCheck1(e)} /><label htmlFor="">Male</label>
                <input type="radio" checked={female} onChange={(e) => handleCheck2(e)} /><label htmlFor="">Female</label><br /><br />
                <input type="Submit"  className='btn'/>
            </form>
        </div>
    )
}

export default StudentsForm2
