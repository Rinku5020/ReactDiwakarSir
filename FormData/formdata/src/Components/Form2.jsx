import React, { useState } from "react"
function Form2()
{
    const[data,setData]=useState({
        name:"",
        email:"",
        password:"",
        select:"",
        check: false

    })
    
   const handleChange=(e)=>
   {
        const {name,value,type,checked}=e.target;
        const newValue= type==="checkbox" ? checked:value

    //  const name= e.target.name
    //  const value=e.target.value;
        setData((prev) => {
            return { ...prev, [name]: newValue}
        })            
   } 

 const handleSubmit=(e)=>
 {
    e.preventDefault()
    console.log(data)
 }


    return(
        <div>
            <h1>Form Data</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Your Name" name='name' onChange={handleChange} /> <br /><br />
                <input type="Email" placeholder="Enter Your Email" name='email' onChange={handleChange} /> <br /><br />
                <input type="Password" placeholder="Enter Your Password" name='password' onChange={handleChange}/><br /><br />
                <select name="select" id="" onChange={handleChange}>
                    <option value=""  >Select Your City</option>
                    <option value="Surat">Surat</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Dwarka">Dwarka</option>
                    <option value="Rajkot">Rajkot</option>
                </select><br /><br />
                <label>Your Married</label>
                <input type="checkbox" name="check" onChange={handleChange} /><br /><br />
                <input type="Submit" />
            </form>
        </div>
    )
}
export default Form2
