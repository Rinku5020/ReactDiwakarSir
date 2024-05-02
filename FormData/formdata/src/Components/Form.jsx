import React, { useState } from "react"
function Form()
{
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[select,setSelect]=useState("")
    const[password,setPassword]=useState("")
    const[check,setCheck]=useState(false)
    const handleNameChange=(e)=>
    {
        setName(e.target.value)
    }
    const handleEmailChange=(e)=>
    {
        setEmail(e.target.value)
    }
    const handleSelect=(e)=>
    {
        setSelect(e.target.value)
    }
    const handlePassword=(e)=>
    {
        setPassword(e.target.value)
    }
    const handleCheck=(e)=>{
        setCheck(e.target.checked)
    }

   
const handleSubmit=(e)=>
{
    e.preventDefault()
    const formdata=
    {
        name:name,
        email:email,
        select:select,
        password:password,
        married:check
    };
    console.log(formdata)
}



    return(
        <div>
            <h1>Form Data</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleNameChange } placeholder="Enter Your Name" /> <br /><br />
                <input type="Email" value={email} onChange={handleEmailChange} placeholder="Enter Your Email" /> <br /><br />
                <input type="Password" value={password} onChange={handlePassword} placeholder="Enter Your Password" /><br /><br />
                <select name="" id="" value={select} onChange={handleSelect}>
                    <option value=""  >Select Your City</option>
                    <option value="Surat">Surat</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Dwarka">Dwarka</option>
                    <option value="Rajkot">Rajkot</option>
                </select><br /><br />
                <label>Your Married</label>
                <input type="checkbox" checked={check}  onChange={handleCheck}/><br /><br />
                <input type="Submit" />
            </form>
        </div>
    )
}
export default Form
