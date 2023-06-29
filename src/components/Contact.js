import React from "react";
import {useState} from 'react';

function Contact() {
    
    const [data, setData] =useState({name:"", email:"", phone:"", message:""});

    const handleChange = () =>{

    }

    const handleSubmit = () =>{

    }

    return (
        <div>
            <form method="post" onSubmit={handleSubmit}>
                <input class="inputField" type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder="name"></input>
                <input class="inputField"  type="email" name="email" id="" onChange={handleChange} value={data.email} placeholder="email"></input>
                <input  class="inputField" type="phone" name="phone" id="" onChange={handleChange} value={data.phone} placeholder="phone"></input>
                <textarea class="inputField" name="userMsg" id="" cols="30" rows="10" onChange={handleChange} value={data.message} placeholder="message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact