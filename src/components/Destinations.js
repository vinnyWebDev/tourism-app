import React from "react";
import blarney from '../assets/images/blarney_castle.jpg'
import moher from '../assets/images/cliffs_of_moher.jpg'
import guinness from '../assets/images/guinness_storehouse.jpg'
import powerscourt from '../assets/images/powerscourt_estate.jpg'
import skelligs from '../assets/images/skellig_michael.jpg'
import causeway from "../assets/images/giants_causeway.jpg"
function Destinations() {
    return (
        <div className="container pt-4">
            <h1 className="pageHeader">Destinations</h1>
            <div class="row">
                <div class="col-lg border rounded m-3">
                    <h3 className="mb-4 destHeadings">Blarney Castle</h3>
                    <img src={blarney} className="destImg img-fluid mb-3 rounded" alt="A photo of blarney castle"></img>
                    <p>Stick your head over the parapet at the historic Blarney Castle and kiss the famous Blarney Stone as millions have done before you.
                        It’s said that people who manage to kiss the mysterious Blarney Stone are endowed with ‘the gift of the gab’.
                        This mystic relic isn’t the only interesting attraction at Blarney Castle –
                        dating back to 1446, the medieval stronghold is a warren of stone passageways and dark dungeons, so take a tour and discover the castle’s
                        hidden secrets and expanses of rambling green gardens.</p>
                </div>
                <div class="col-lg border rounded m-3">
                    <h3 className="mb-4 destHeadings">Cliffs of Moher</h3>
                    <img src={moher} className="destImg img-fluid mb-3 rounded" alt="A photo of the cliffs of moher"></img>
                    <p>Standing at 214 meters over the depths of the Atlantic Ocean, and stretching for an awesome 8 km, are the rugged Cliffs of Moher in County Clare. Visitors are drawn to the cliffs, not just for their sheer impressive size,
                        but also for the views of the breath-taking landscape – on a clear day it is possible to see all 5 of the surrounding counties as well as the Aran Islands. The awe-inspiring cliffs are also home to Ireland’s largest mainland
                        seabird colony, which between April and July includes Puffins!</p>
                </div>
                <div class="col-lg border rounded m-3">
                    <h3 className="mb-4 destHeadings">Guinness Storehouse</h3>
                    <img src={guinness} className="destImg img-fluid mb-3 rounded" alt="A photo of the cliffs of moher"></img>
                    <p>Set in the heart of Dublin is the iconic Guinness Storehouse. The brewery has been making Guinness here since 1769 when Arthur Guinness signed a lease for 9,000 years.
                        Nowadays the home of Guinness is a modern visitor attraction, where fans can learn about the process of making the famous black stuff,
                        understand the history behind it and, of course, sample it.</p>
                </div>

            </div>

            <div class="row mb-5">
                <div class="col-lg border rounded m-3">
                    <h3 className="mb-4 destHeadings">Powerscourt Estate</h3>
                    <img src={powerscourt} className="destImg img-fluid mb-3 rounded" alt="A photo of blarney castle"></img>
                    <p>Just 20 km from Dublin is the ineffably grand Powerscourt Estate. Set in 47 acres of beautiful land, the gardens were created 150 years ago with the idea of blending the stately home seamlessly into the surrounding landscape.
                        Against the bold backdrop of the Great Sugar Loaf Mountains, the gardens are home to 200 varieties of trees, a rose garden, an Italian garden, and a large kitchen garden.
                        There are many trails to walk along through the vast landscape – one of which leads to Powerscourt Falls, Ireland’s highest waterfall at 121 meters..</p>
                </div>
                <div class="col-lg border rounded m-3">
                    <h3 className="mb-4 destHeadings">Skellig Michael</h3>
                    <img src={skelligs} className="destImg img-fluid mb-3 rounded" alt="A photo of the cliffs of moher"></img>
                    <p>If you are into Star Wars then you will want to visit Skellig Michael – and if you’re not, you should visit anyway because it is awe-inspiringly beautiful. The rocky island rises out of the Atlantic just off the Iveragh Peninsula and was frequented by ascetic monks,
                        who chose the towering sea crag as a place to live and worship somewhere between the 6th and 8th centuries.</p>
                </div>
                <div class="col-lg border rounded m-3">
                    <h3 className="mb-4 destHeadings">Giant's Causeway</h3>
                    <img src={causeway} className="destImg img-fluid mb-3 rounded" alt="A photo of the cliffs of moher"></img>
                    <p>The most characteristic and unique feature of the site is the exposure of some 40,000 large, regularly shaped polygonal columns of basalt in perfect horizontal sections, forming a pavement.The tops of the columns form stepping stones
                        that lead from the cliff foot and disappear under the sea. Most of the columns are hexagonal, although some have four, five, seven or eight sides
                        This dramatic sight has inspired legends of giants striding over the sea to Scotland.</p>
                </div>

            </div>


        </div>
    )
}

export default Destinations