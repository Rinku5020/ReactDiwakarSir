import React, { useState } from "react";
function Form3() {
/**
 * !Step 1 :- Create one const beacuse this cost is create object
 */
    const UserData = {
        name: "",
        email: "",
        password: "",
        select: "",
        Ismarried: false
    }
/**
 * !Step 2 :- create useState beacuse this useState setdata and all Object 
 */
    const [data, setData] = useState({ UserData });
    /*
    ! Step 4 :- this handleChange function geting value and target input value
    
    */ 
    
    const handleChange=(e)=>
    {
        /*
        ! Stpe 6 :- create const and setdata and use spred oprator beacause setvalue all time will be changing so spred oprator use is copy data of last setdata 
        */ 
            const inputvalue=e.target.type=="checkbox" ?e.target.checked :e.target.value
            setData((prevData)=>({...prevData,[e.target.name]:inputvalue}))
    }
    /* 
    ! Step 7 :- this function show data from object form
    */ 
    const handleSubmit=(e)=>
    {
        e.preventDefault()
        console.log(data)

    }
    return (
        <div>
            <h1>Form Type  No.3 Diwakar Sir </h1>
            <h1>Form Data</h1>
            <form action="" onSubmit={(e)=>handleSubmit(e)}>
            {/* Stpe 3 :- create a callback function this function handling input and value */}
      
            <input type="text" name="name" value={data.name} onChange={(e)=>handleChange(e)} placeholder="Enter Your Name" /> <br /><br />
            {/* Step 5 :- geting value from input so use value from data.allInputName*/}
                <input type="Email" name="email" value={data.email} onChange={(e)=>handleChange(e)} placeholder="Enter Your Email" /> <br /><br />
                <input type="Password" name="password" value={data.password} onChange={(e)=>handleChange(e)} placeholder="Enter Your Password" /><br /><br />
                <select name="select" value={data.select} onChange={(e)=>handleChange(e)} id="" >
                    <option value=""  >Select Your City</option>
                    <option value="Surat">Surat</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Dwarka">Dwarka</option>
                    <option value="Rajkot">Rajkot</option>
                </select><br /><br />
                <label>Your Married</label>
                <input type="checkbox" checked={data.Ismarried} onChange={(e)=>handleChange(e)} name="Ismarried" /><br /><br />
                <input type="Submit" />
            </form>
        </div>
    )
}
export default Form3;