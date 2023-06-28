import React from "react";
import dublin from '../assets/images/dublin.jpg';
import cork from '../assets/images/cork.jpg';

function Weather() {
    return (
        <div className="container pt-4">
            <h1 className="pageHeader">Weather</h1>
            <div class="row">
                <div class="col-lg border rounded m-3">
                    <h3 className="mb-4 destHeadings">Dublin</h3>
                    <img src={dublin} class="destImg img-fluid mb-3 rounded"></img>
                </div>
                <div class="col-lg border rounded m-3">
                    <h3 className="mb-4 destHeadings">Cork</h3>
                    <img src={cork} class="destImg img-fluid mb-3 rounded"></img>
                </div>
            </div>
        </div>
    )
}

export default Weather