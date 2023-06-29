import React from "react";
import {useState} from 'react';

function Contact() {
    
    const [data, setData] =useState({name:"", email:"", phone:"", userMsg:""});
    const [error, setError]=useState(false)

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setData({...data,[name]:value});
        if(data.name == "" || data.email =="" || data.userMsg ==""){
            setError(true);
        }
        else{
            setError(false);
        }

    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(data)
        
    }

    return (
        <div>
            <form method="post" onSubmit={handleSubmit}>
                <input className="inputField" type="text" name="name"  onChange={handleChange} value={data.name} placeholder="name*"></input>
                {error&&data.name==0?
                <label>Name field cannot be blank</label>:""}
                <input className="inputField"  type="email" name="email" onChange={handleChange} value={data.email} placeholder="email*"></input>
                {error&&data.email==0?
                <label>Email field cannot be blank</label>:""}
                <input  className="inputField" type="phone" name="phone"  onChange={handleChange} value={data.phone} placeholder="phone"></input>
                {error&&data.userMsg==0?
                <label>Message field cannot be blank</label>:""}
                <textarea className="inputField" name="userMsg" cols="30" rows="10" onChange={handleChange} value={data.message} placeholder="message"></textarea>
                {error?
                <button type="submit" disabled>Submit</button>:<button type="submit">Submit</button>}
            </form>
        </div>
    )
}

export default Contact