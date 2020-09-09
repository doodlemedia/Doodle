import React, { Component } from 'react';

import './Second.css';
import { Row, Col } from 'reactstrap';
import Navb from '../Navbar/Navb';
import { Link } from 'react-router-dom';
class Second extends Component {
    render() {
        return (
            <div className="background1">
                <Navb />
                <div className="container">

                    <div style={{ marginTop: "3%" }} className="heading2">
                        <p>Why &nbsp; Choose &nbsp; us</p>
                    </div>
                    <div className="row container section1" style={{ marginTop: "3%", marginLeft: "3%" }}>
                        <div className="col-12 col-md-6 container">
                            <img className="pic1" src={require('../Assets/pic1.png')} alt="full pic" />
                            <p>Unlimited Services</p>
                        </div>
                        <div className="col-12 col-md-6 container" >
                            <img className="pic2" src={require('../Assets/pic2.png')} alt="full pic" />
                            <p>Fast Delivery</p>
                        </div>
                    </div>
                    <div className="row container section1" style={{ marginTop: "3%", marginLeft: "3%" }}>
                        <div className="col-12 col-md-5 container">
                            <img className="pic1" src={require('../Assets/pic3.png')} alt="full pic" />
                            <p>Affordable Low Price</p>
                        </div>
                        <div className="col-12 col-md-5 container">
                            <img className="pic4" src={require('../Assets/pic4.png')} alt="full pic" />
                            <p>High Quality Designs</p>
                        </div>
                    </div>
                    <div className="container section1" style={{ marginTop: "3%", marginLeft: "3%" }}>
                        <img className="pic5" src={require('../Assets/pic5.png')} alt="full pic" />
                        <p>World Wide Business Deals</p>
                        <br/>
                        <Link className="button2 link" to='/about'>Get in Touch with us</Link><br />
                    </div>
                </div><br /><br/>
                <div className="footer1" >
                    <div style={{marginLeft: "3%" }}>
                        <h2>We Help you Work Faster and Smarter</h2><br />
                        <h4>We come together with creative Designers <br />around to provide you with the best<br /> graphics design services for all<br /> your creative needs.</h4>
                    </div>


                </div>

            </div>

        )
    }
}
export default Second;