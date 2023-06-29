import React from "react";
import {useState} from 'react';

function Contact() {
    
    const [data, setData] =useState({name:"", email:"", phone:"", userMsg:""});

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setData({...data,[name]:value});

    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(data)
    }

    return (
        <div>
            <form method="post" onSubmit={handleSubmit}>
                <input className="inputField" type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder="name"></input>
                <input className="inputField"  type="email" name="email" id="" onChange={handleChange} value={data.email} placeholder="email"></input>
                <input  className="inputField" type="phone" name="phone" id="" onChange={handleChange} value={data.phone} placeholder="phone"></input>
                <textarea className="inputField" name="userMsg" id="" cols="30" rows="10" onChange={handleChange} value={data.message} placeholder="message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact