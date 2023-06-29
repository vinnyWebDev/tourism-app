import Contact from "./Contact"

function About() {

    return (
        <div>
            <div className="container pt-4">
                <h1 className="pageHeader">About</h1>
                <div className="row">
                    <div className="col-lg border rounded m-3">
                        <h3 className="destHeadings">This Website</h3>
                        <p>Welcome to our Irish Tourism website, where we invite you to explore the enchanting wonders of the Emerald Isle.
                            Nestled on the western fringes of Europe, Ireland is a land steeped in ancient history, vibrant culture, and breathtaking landscapes.<br/><br/>

                            Immerse yourself in the warm hospitality and friendly nature of the Irish people as you embark on a journey through this captivating country.
                            From the rugged cliffs of the Wild Atlantic Way to the lush green fields of the rolling countryside, Ireland offers an abundance of natural beauty that will leave you in awe.<br/><br/>

                            Discover the rich tapestry of Ireland's past as you wander through historic castles, mystical ruins, and ancient monuments that bear witness to the nation's intriguing heritage. 
                            Uncover the legends of folklore and mythology that have shaped Irish storytelling for centuries, and lose yourself in the vibrant music, dance, and 
                            literature that form the soul of this captivating land.<br/><br/>

                            Indulge your taste buds with traditional Irish cuisine and sample the finest whiskey and Guinness in cozy pubs, where the warm atmosphere and lively conversations will make you feel right at home. 
                            Join in the festivities of colorful festivals and events that celebrate Ireland's unique traditions and immerse yourself in the vibrant cultural tapestry of this magical country.<br/><br/>

                            Whether you're exploring bustling cities like Dublin and Galway or venturing off the beaten path to uncover hidden gems,
                            Ireland promises a journey that will touch your heart and leave lasting memories. So, pack your bags, follow the winding roads, 
                            and let Ireland's charm and beauty weave its spell on you. Get ready to experience the magic of Ireland with us!</p>
                    </div>
                    <div className="col-lg border rounded m-3 p-3">
                        <h3 className="destHeadings">Contact Us</h3>
                        <Contact></Contact>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About