import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navb from '../Navbar/Navb';
import Carousel from 'react-elastic-carousel';
import './Contact.css';
import Contactu from '../FormC/FormC';
import Example from '../Carousel/Carousel';
import Example2 from '../Carousel2/Carousel2';
import ContactUs from '../FormA/FormA';
import ContactC from '../FormC/FormC';


class Contact extends Component {

    render() {
        return (
            <div className="backgroundC">
                <Navb />
                <br/>
                <br/>
                <div className="container">
                    <div className="headingC">
                        Our Clients
                    </div>
                    <div style={{fontFamily:"Rakkas, cursive"}}>
                        <h2>Our Clients</h2>
                    </div>
                    <br/>
                    <br/>
                    <Example />
                    <div className="headingC">
                        <p>Testimonials</p>
                    </div>
                    <Example2 />
                    <br />
                    <div className="headingC">
                        <p>Get in Touch with us</p>
                    </div>
                    <div className="container">
                        <img className="picC1" src={require('../Assets/illustration.png')} alt="full pic" />
                    </div>
                    <ContactC />
                </div>
                

                <div className="container">
                    <p className="container lineC" />
                    <div className="row hidd">
                        <div className="col-12 col-md-1">
                            <a href=" https://www.facebook.com/Doodle-Media-111701640668210  " ><img className="icon" src={require('../Assets/facebook.png')} alt="full pic" /></a>
                        </div>
                        <div className="col-12 col-md-1">
                            <a href="https://www.instagram.com/doodle_media_/" ><img className="icon" src={require('../Assets/instagram.png')} alt="full pic" /></a>
                        </div>
                        <div className="col-12 col-md-1">
                            <a href=" https://www.linkedin.com/company/doodle-media11" ><img className="icon" src={require('../Assets/linkedin.png')} alt="full pic" /></a>
                        </div>
                        <div className="col-12 col-md-1">
                            <a href="https://twitter.com/doodlemedia_11  " ><img className="icon" src={require('../Assets/twitter.png')} alt="full pic" /></a>
                        </div>
                        <div className="col-12 col-md-1">
                            <a href="7676617298 " ><img className="icon" src={require('../Assets/whatsapp.png')} alt="full pic" /></a>
                        </div>
                        <div className="col-12 col-md-1">
                            <a href="https://dribbble.com/Mrsan1106" ><img className="icon" src={require('../Assets/dribble.png')} alt="full pic" /></a>
                        </div>
                        <div className="col-12 col-md-1">
                            <a href="https://www.behance.net/mrsanthosh1106    " ><img className="icon" src={require('../Assets/behance.png')} alt="full pic" /></a>
                        </div>

                        
                    </div>
                    
                </div>
                <p className="container lineCs" />
                <div className="container">

                
                <div className="row container" style={{justifyContent: "center"}}>
                    <div className="col-12 col-md-4 mar">
                        <img className="piclogo" src={require('../Assets/pink.png')} alt="full pic" />
                    </div>
                    <div className="col-12 col-md-4 mar container">
                        <p className="headingL">
                            Contact us
                        </p>
                        <p className="sectionL">
                            <span className="fa fa-building fa-1x" style={{ color: "black" }} > </span>&nbsp;&nbsp; Flat no 404, Prakruthi<br /> &nbsp; &nbsp; &nbsp; &nbsp;Enclave, Kudlu gate,<br />&nbsp; &nbsp; &nbsp; &nbsp;Bengaluru-560068
                        </p>
                        <p className="sectionL">
                            <span className="fa fa-phone fa-1x" style={{ color: "black" }} > </span>&nbsp;&nbsp; 7676617298
                        </p>
                        <p className="sectionL">
                            <span className="fa fa-envelope fa-1x" style={{ color: "black" }} > </span>&nbsp;&nbsp; doodlemedia.11@gmail.com
                        </p>
                    </div>
                    <div className="col-12 col-md-4 mar container">
                        <p className="headingL">
                            Company
                        </p>
                        <div className="sectionL">
                            <Link className="links" to='/second'>Home </Link><a href=" https://www.facebook.com/Doodle-Media-111701640668210  " ><img className="iconC" src={require('../Assets/facebook.png')} alt="full pic" /></a>
                        </div>
                        <div className="sectionL">
                            <Link className="links" to='/about'>About </Link> <a href="https://www.instagram.com/doodle_media_/" ><img className="iconC" src={require('../Assets/instagram.png')} alt="full pic" /></a>
                        </div>
                        <div className="sectionL">
                            <Link className="links" to='/services'>Services </Link><a href=" https://www.linkedin.com/company/doodle-media11" ><img className="iconC" src={require('../Assets/linkedin.png')} alt="full pic" /></a>
                        </div>
                        <div className="sectionL">
                            <Link className="links" to='/work'>Work</Link><a href="https://twitter.com/doodlemedia_11  " ><img className="iconC" src={require('../Assets/twitter.png')} alt="full pic" /></a>
                        </div>
                        <div className="sectionL">
                            <Link className="links" to='/contact'>Contact</Link><a href="https://www.behance.net/mrsanthosh1106    " ><img className="iconC" src={require('../Assets/behance.png')} alt="full pic" /></a>
                        </div>

                    </div>


                </div>
                </div>
                <p className="container lineCs" />
                <div className="headingL" style={{ textAlign: "center" }}>
                    Life is for Great Services
                    </div>
                <div className="center">

                    <div className="sect">
                        Copyright 2020
                    </div>
                    <div className="sect">
                        All Rights Reserved. Creativity by Doodle Media
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;