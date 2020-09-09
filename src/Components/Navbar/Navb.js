import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavLink, Collapse, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Navb.css';


class Navb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,

        };
        this.toggleNav = this.toggleNav.bind(this);

    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
            <>
                <Navbar dark expand="md" className="Navbar" sticky="top">
                    
                    <NavbarToggler onClick={this.toggleNav} style={{ border: "1px solid white", color: "white" }}>=</NavbarToggler>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <NavbarBrand className="mr-auto navbrand" href="/home">
                            <img src={require('../Assets/whitelogo.png')} height="50" width="91" alt="Ristorante Con Fusion" />
                        </NavbarBrand>
                        <div className="ml-auto">
                        
                            <Nav navbar style={{ cursor: "pointer" }}>
                                <NavItem >
                                    <Link className="link" to='/second'>Home &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="link" to='/about'>About &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="link" to='/services'>Services &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="link" to='/work'>Work &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="link" to='/contact'>Contact us</Link>
                                </NavItem>
                            </Nav>
                        </div>
                    </Collapse>

                </Navbar>
            </>
        )
    }
}
export default Navb;