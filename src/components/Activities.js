import React, { useEffect } from "react";
import dublin from '../assets/images/dublin.jpg';
import cork from '../assets/images/cork.jpg';
import { useState } from "react";
import axios from "axios";
import Activity from "./Activity";

function Activities() {

    const [activities, setActivities] = useState([]);

    useEffect(() => {

        async function getActivities() {
            let response = await axios.get("https://failteireland.azure-api.net/opendata-api/v1/activities");
            setActivities(response.data.results);
            console.log(activities)

        }
        getActivities();
    }, [])


    return (
        <div className="container pt-4">
            <h1 className="pageHeader">Activities</h1>
            {
                activities.map(function (i, index) {
                    return (

                        <Activity name = {i.name} tel={i.telephone} url={i.url}/>
                        /*
                        <div className="row">
                            <div className="col-lg">
                                <li key={i}>{i.name}</li>
                            </div>
                            <div className="col-lg">
                                <li key={i}>{i.telephone}</li>
                            </div>
                        </div>
                        */
                    )
                })
            }
        </div>
    )
}


export default Activities