import React, { Component } from 'react';
import { Fade } from "react-reveal";
import './Services.css';
import { Row, Col } from 'reactstrap';
import Navb from '../Navbar/Navb';
import { Link } from 'react-router-dom';

class Services extends Component {
    render() {
        return (
            <div className="background3 ">
                <Navb />
                <div className="container">

                    <div className="heading33">
                        <h2>Our Services</h2>
                </div>
                    <br />
                    <br />
                    <Fade left duration={1000} >
                    <div className="row ">
                        <div className="col-12 col-md-6">
                            <img className="pi18" src={require('../Assets/Webdesigning.png')} alt="full pic" />
                            <div className="heading3">
                                <Link className="heading3" to='/work'> Web Designing</Link>
                            </div>
                            <div className="section3">
                                To provide background information about a business, organization, or service.
                            </div>
                        </div>
                        <div className="col-12 col-md-6 serv" >                    
                                <img className="pi19" src={require('../Assets/Webdesigning.png')} alt="full pic" />                           
                        </div>
                    </div>
                    </Fade>
                    <br/>
                    <br/>
                    <p className="container line" />
                    <br/>
                    <br/>
                    <br/>
                    <Fade right duration={1000} >
                    <div className="row">
                        <div className="col-12 col-md-6">                       
                            <img className="pi1" src={require('../Assets/Logodesigning.png')} alt="full pic" />                         
                        </div>
                            <div className="col-12 col-md-6" >
                                <div className="heading32">
                                <Link className="heading3" to='/work'>Logo Designing</Link>
                            </div>
                                <div className="section32" >
                                It tells people the name of the company and it creates a visual symbol that represents your business.
                            </div>
                        </div>
                    </div>
                    </Fade>
                    <p className="container line" />
                    <br />
                    <br/>
                    <Fade left duration={1000} >
                    <div className="row ">
                        <div className="col-12 col-md-6">
                        <img className="pi18" src={require('../Assets/Posterdesigning.png')} alt="full pic" />
                            <div className="heading3">
                            <Link className="heading3" to='/work'>Poster Designing</Link>
                            </div>
                            <div className="section3">
                            They are a frequent tool of advertisers to communicate a message Graphically
                            </div>
                        </div>
                        <div className="col-12 col-md-6 serv" >
                            <img className="pi19" src={require('../Assets/Posterdesigning.png')} alt="full pic" />
                        </div>
                    </div>
                    </Fade>
                    <br/>
                    <p className="container line" />
                    <br/>
                    <br/>
                    <br/>
                    <Fade right duration={1000} >
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img className="pi1" src={require('../Assets/SocialMediadesign.png')} alt="full pic" />
                        </div>
                            <div className="col-12 col-md-6" >
                                <div className="heading32">
                                <Link className="heading3" to='/work'>Social Media Designing </Link>
                            </div>
                                <div className="section32"  >
                                Social media can also help you generate engagement around your brand for driving website traffic and sales.
                            </div>
                        </div>
                    </div>
                    </Fade>
                    <p className="container line" />
                    <br />
                    <br />
                    <br/>
                    <Fade left duration={1000} >
                    <div className="row ">
                        <div className="col-12 col-md-6">
                            <img className="pi18" src={require('../Assets/Brochuredesign.png')} alt="full pic" />
                            <div className="heading3">
                            <Link className="heading3" to='/work'>Brochure Designing </Link>
                            </div>
                            <div className="section3">
                            Brochures are great marketing tools when reaching out to new customers. & provide positive press about your company.
                            </div>
                        </div>
                        <div className="col-12 col-md-6 serv" >
                        <img className="pi19" src={require('../Assets/Brochuredesign.png')} alt="full pic" />
                        </div>
                    </div>
                    </Fade>
                    <p className="container line" />
                    <br/>
                    <br/>
                    <br/>
                    <Fade right duration={1000} >
                    <div className="row">
                        <div className="col-12 col-md-6">
                        <img className="pi1" src={require('../Assets/Infographicsdesigning.png')} alt="full pic" />
                        </div>
                            <div className="col-12 col-md-6" >
                                <div className="heading32">
                                <Link className="heading3" to='/work'>Infographics</Link>
                            </div>
                                <div className="section32"  >
                                Infographics simplify information in a visually engaging way in order to attract and inform a large audience.
                            </div>
                        </div>
                    </div>
                    </Fade>
                    <p className="container line" />
                    <br />
                    <br />
                    <br/>
                    <Fade left duration={1000} >
                    <div className="row ">
                        <div className="col-12 col-md-6">
                        <img className="pi18" src={require('../Assets/InvitationCarddesign.png')} alt="full pic" />
                            <div className="heading3">
                            <Link className="heading3" to='/work'>Invitation Card</Link>
                            </div>
                            <div className="section3">
                            In a business, invitations might be sent for a special event like a grand opening, or release of new product.
                            </div>
                        </div>
                        <div className="col-12 col-md-6 serv" >
                        <img className="pi19" src={require('../Assets/InvitationCarddesign.png')} alt="full pic" />
                        </div>
                    </div>
                    </Fade>
                    <p className="container line" />
                    <br/>
                    <br/>
                    <br/>
                    <Fade right duration={1000} >
                    <div className="row">
                        <div className="col-12 col-md-6">
                        <img className="pi1" src={require('../Assets/BusinessCarddesign.png')} alt="full pic" />
                        </div>
                            <div className="col-12 col-md-6">
                                <div className="heading32">
                                <Link className="heading3" to='/work'>Business Card</Link>
                            </div>
                                <div className="section32" >
                                Business cards serve the key purpose of marketing your business
                            </div>
                        </div>
                    </div>
                    </Fade>
                    <br/>
                    <p className="container line" />
                    <br />
                    <br />
                    <br/>
                    <Fade left duration={1000} >
                    <div className="row ">
                        <div className="col-12 col-md-6">
                        <img className="pi18" src={require('../Assets/Webbannerdesign.png')} alt="full pic" />
                            <div className="heading3">
                            <Link className="heading3" to='/work'>Web Banner </Link>
                            </div>
                            
                            <div className="section3">
                            Banner ads are intended to generate traffic to a website by linking to it
                            </div>
                        </div>
                        <div className="col-12 col-md-6 serv" >
                        <img className="pi19" src={require('../Assets/Webbannerdesign.png')} alt="full pic" />
                        </div>
                    </div>
                    </Fade>
                    <br/>
                    <p className="container line" />
                    <br/>
                    <br/>
                    <br/>
                    <Fade right duration={1000} >
                    <div className="row">
                        <div className="col-12 col-md-6">
                        <img className="pi1" src={require('../Assets/SocialMediadesign.png')} alt="full pic" />
                        </div>
                            <div className="col-12 col-md-6" >
                                <div className="heading32">
                                <Link className="heading3" to='/work'> Social Media Banner</Link>
                            </div>
                                <div className="section32"  >
                                Their aim is to catch the attention of your users with a beautiful image and design 
                            </div>
                        </div>
                    </div>
                    </Fade>
                    <br/>
                    <p className="container line" />
                    <br />
                    <br />
                    <br/>
                    <Fade left duration={1000} >
                    <div className="row ">
                        <div className="col-12 col-md-6">
                        <img className="pi18" src={require('../Assets/Menucarddesign.png')} alt="full pic" />
                            <div className="heading3">
                            <Link className="heading3" to='/work'>Menu Card Designing</Link>
                            </div>
                            <div className="section3">
                            Its purpose is to display the food your guests
                            </div>
                        </div>
                        <div className="col-12 col-md-6 serv" >
                        <img className="pi19" src={require('../Assets/Menucarddesign.png')} alt="full pic" />
                        </div>
                    </div>
                    </Fade>
                    <br/>
                    <p className="container line" />
                    <br/>
                    <br/>
                    <br/>
                    <Fade right duration={1000} >
                    <div className="row">
                        <div className="col-12 col-md-6">
                        <img className="pi1" src={require('../Assets/CatlogsandFlyerdesigning.png')} alt="full pic" />
                        </div>
                            <div className="col-12 col-md-6" >
                                <div className="heading32">
                                <Link className="heading3" to='/work'>Catlogs and Flyer</Link>
                            </div>
                                <div className="section32"  >
                                Another big benefit of using a flyer to promote an event is its tangible nature.
                            </div>
                        </div>
                    </div>
                    </Fade>
                    <br/>
                    <p className="container line" />
                    <br />
                    <br />
                    <br/>
                    <Fade left duration={1000} >
                    <div className="row ">
                        <div className="col-12 col-md-6">
                        <img className="pi18" src={require('../Assets/GreetingCarddesign.png')} alt="full pic" />
                            <div className="heading3">
                            <Link className="heading3" to='/work'>Greeting Card</Link>
                            </div>
                            <div className="section3">
                            Greeting Cards Are Still A Thing In The Digital Age for expressing a message.
                            </div>
                        </div>
                        <div className="col-12 col-md-6 serv" >
                        <img className="pi19" src={require('../Assets/GreetingCarddesign.png')} alt="full pic" />
                        </div>
                        <br/>
                        
                    <br/>
                    </div>
                    </Fade>
                    <br/>
                    <br/>
                    <div  style={{textAlign: "center"}}>
                        <Link className="buttonS link" to='/work'>Visit Our Gallery</Link>
                        <br/>
                    <br/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        )
    }
}
export default Services;