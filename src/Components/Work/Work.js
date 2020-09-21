import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navb from '../Navbar/Navb';
import './Work.css';

class Work extends Component{
    render(){
        return(
            <div className="background4">
                <Navb/>
                <div className="heading4 container">
                    Work Gallery
                </div>
                <div className="headingH" >
                    <h2>Work Gallery</h2>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 box">
                        <img className="picW" src={require('../Assets/NATURE.png')} alt="full pic" />
                        <p className="content1">
                            Web Designing
                        </p>
                    </div>
                    <div className="col-12 col-md-6 box">
                    <img className="picW" src={require('../Assets/Group.png')} alt="full pic" />
                        <p className="content2">
                            Web Banner
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6  box">
                    <img className="picW" src={require('../Assets/Presentation.png')} alt="full pic" />
                    <p className="content3">
                            UI/UX Designing
                        </p>
                    </div>
                    <div className="col-12 col-md-6 box">
                    <img className="picW" src={require('../Assets/ELEGANCE.png')} alt="full pic" />
                    <p className="content4">
                            Catalog Designing 
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 box">
                    <img className="picW" src={require('../Assets/2.png')} alt="full pic" />
                    <p className="content5">
                            Brouchure Card 
                        </p>
                    </div>
                    <div className="col-12 col-md-6 box">
                    <img className="picW" src={require('../Assets/12.png')} alt="full pic" />
                    <p className="content6">
                            Social Media Banner
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 box">
                    <img className="picW" src={require('../Assets/smar.jpg')} alt="full pic" />
                    <p className="content7">
                            Products Print
                        </p>
                    </div>
                    <div className="col-12 col-md-6 box">
                    <img className="picW" src={require('../Assets/Screenshot.png')} alt="full pic" />
                    <p className="content8">
                    Business Designing
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 box">
                    <img className="picW" src={require('../Assets/smartmockups.png')} alt="full pic" />
                    <p className="content9">
                            Logo Designing
                        </p>
                    </div>
                    <div className="col-12 col-md-6 box">
                    <img className="picW" src={require('../Assets/smartmockupsk.jpg')} alt="full pic" />
                    <p className="content10">
                            Logo Designing 
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 box">
                    <img className="picW" src={require('../Assets/Black.png')} alt="full pic" />
                    <p className="content11">
                            Flyers
                        </p>
                    </div>
                    <div className="col-12 col-md-6 box">
                    <img className="picW" src={require('../Assets/_Poster.png')} alt="full pic" />
                    <p className="content12">
                            Poster Designing
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 box">
                    <img className="picW" src={require('../Assets/White.png')} alt="full pic" />
                    <p className="content13">
                            Menu Card 
                        </p>
                    </div>
                    <div className="col-12 col-md-6 box">
                    <img className="picW" src={require('../Assets/Wh.png')} alt="full pic" />
                    <p className="content14">
                            Greeting Card 
                        </p>
                    </div>
                </div>
                <br/>
                <br/>
                <Link className="buttonW link" to='/contact'>Get in Touch with us</Link><br />
                <br/>
                <br/>
            </div>
        )
    }
}
export default Work;