import React, { Component } from 'react';

import './First.css';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
class First extends Component {
    render() {
        return (
            <div className="background">
                <div className="row container">
                    <div className="col-12 col-md-7">
                        <img className="logo" src={require('../Assets/pink.png')} alt="full pic" />
                        <div className="heading">Graphics For Everyone!</div><br/>
                        <div className="paragraph">We are Here to Add Creativity to your thoughts that models your brand Smart</div>
                        <Link className="button link" to='/second'>Learn more</Link>
                    </div>



                    <div className="col-12  col-md-5">
                        
                        
                        <img className="pic" src={require('../Assets/1.png')} alt="full pic" />
                    </div>

                </div>

            </div>
        )
    }
}
export default First;