import React from "react";

function Weather() {
    return (
        <div className="container pt-4">
            <h1 className="pageHeader">Weather</h1>
            <div class="row">
                <div class="col-lg border rounded m-3">
                    <h3 className="mb-4 destHeadings">Dublin</h3>
                    <p>Stick your head over the parapet at the historic Blarney Castle and kiss the famous Blarney Stone as millions have done before you.
                        It’s said that people who manage to kiss the mysterious Blarney Stone are endowed with ‘the gift of the gab’.
                        This mystic relic isn’t the only interesting attraction at Blarney Castle –
                        dating back to 1446, the medieval stronghold is a warren of stone passageways and dark dungeons, so take a tour and discover the castle’s
                        hidden secrets and expanses of rambling green gardens.</p>
                </div>
                <div class="col-lg border rounded m-3">
                    <h3 className="mb-4 destHeadings">Cork</h3>
                    <p>Standing at 214 meters over the depths of the Atlantic Ocean, and stretching for an awesome 8 km, are the rugged Cliffs of Moher in County Clare. Visitors are drawn to the cliffs, not just for their sheer impressive size,
                        but also for the views of the breath-taking landscape – on a clear day it is possible to see all 5 of the surrounding counties as well as the Aran Islands. The awe-inspiring cliffs are also home to Ireland’s largest mainland
                        seabird colony, which between April and July includes Puffins!</p>
                </div>
            </div>
        </div>
    )
}

export default Weather