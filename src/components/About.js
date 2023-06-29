import Contact from "./Contact"

function About() {
   
    return (
        <div>
            <div className="container pt-4">
                <h1 className="pageHeader">About</h1>
                <div className="row">
                    <div className="col-lg border rounded m-3">
                        <h3 className="destHeadings">This Website</h3>
                        <p>The purpose of this website is to demonstrate knowledge in the use  of React.</p>
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