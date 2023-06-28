import React from "react";
import dublin from '../assets/images/dublin.jpg';
import cork from '../assets/images/cork.jpg';
import { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

function Weather() {

    const dublinCity = "dublin";
    const corkCity = "cork";
    const [temp, setTemp] = useState("");

    async function getWeather(city) {
        let response = await axios.get("http://api.openweathermap.org/data/2.5/weather?mode=json&q=" + city + "&appid=f27f5da1d06fab42171fafce4c6ec8f7");
        console.log(response);
        setTemp(response.data.main.temp)
        console.log(temp);
    }

    getWeather(dublinCity)
    getWeather(corkCity);


    return (
        <div className="container pt-4">
            <h1 className="pageHeader">Weather</h1>
            <div class="row">
                <div class="col-lg border rounded m-3">
                    <h3 className="mb-4 destHeadings">Dublin</h3>
                    <img src={dublin} class="destImg img-fluid mb-3 rounded"></img>
                    <Button variant="dark">Get Weather</Button>
                    <p>{temp}</p>
                </div>
                <div class="col-lg border rounded m-3">
                    <h3 className="mb-4 destHeadings">Cork</h3>
                    <img src={cork} class="destImg img-fluid mb-3 rounded"></img>
                    <p>{temp}</p>
                </div>
            </div>
        </div>
    )
}

export default Weather