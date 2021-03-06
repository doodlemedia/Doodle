import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { Row, Col } from 'reactstrap';
import Navb from '../Navbar/Navb';
import ContactUs from '../FormA/FormA';

class About extends Component {
    render() {
        return (
            <div>
                <div className="background2">
                    <div><Navb /></div>
                    <br/>
                    <br/>
                    <div className="heading2H container">
                        About Doodle Media
                    </div>
                    <div style={{fontFamily:"Rakkas, cursive"}}>
                    <h2>About Doodle Media</h2>
                    </div>
                    <br/>
                    <br/>
                    <div className="section21 container">
                        <p>Our Mission is to Make our Clients Work Less<br /> and Provide Designs where everyone can find<br /> whatever they need for Personal and Commercial<br /> Projects. </p>
                    </div>
                    <br />
                    <div className="container">
                        <div className="container">
                            <p className="container line" />
                        </div>
                    </div>
                    <br />
                    <div className="section21 container">
                        <p>Browse around their web pages and search for what<br /> you need, and if you can't find it simply make a <br />design request below, So our team will get back to<br /> you!     </p>
                    </div>
                    <br />
                    <Link to="/services" className="buttonA">Our Services<br /></Link>
                    <br />
                </div>
                
                
                <div className="background21">
                    <ContactUs/>
                </div>
            </div>

        )
    }
}
export default About;