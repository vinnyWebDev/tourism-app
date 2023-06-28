import React from "react";
import "../App.css";
import {useState} from "react";
import axios from "axios";


function Home(){

  

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