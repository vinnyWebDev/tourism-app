import React from "react";
import "../App.css";
import {useState} from "react";
import axios from "axios";
import { Button } from "bootstrap";


function Home(){

    const dublin = "dublin";
    const [temp, setTemp] = useState("");

    async function getWeather(){
    let response = await axios.get("http://api.openweathermap.org/data/2.5/weather?mode=json&q="+dublin+"&appid=f27f5da1d06fab42171fafce4c6ec8f7");
    console.log(response);
    setTemp(response.data.main.temp)
    console.log(temp);
}

getWeather()

    return(
        <section className="bgimage" id="home">
        <div className="container-fluid">
            <div className="row">
            <div className="hero-text">
                <h2 className="hero_title">Tour Ireland</h2>
                <p className="hero_desc">Tour the land of saints, scholars and so much more.</p>
            </div>
            </div>
        </div>
    </section>
    )
}

export default Home