import React, { Component } from 'react';
import Second from './Second/Second';
import { Router, Switch, Route, BrowserRouter } from 'react-router-dom'
import First from './First/First';
import Navb from './Navbar/Navb';
import About from './About/About';
import Services from './Services/Services';
import Work from './Work/Work';
import Contact from './Contact/Contact';


class Home extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                        
                        <Route path="/home" component={First} />
                        <Route path="/second" component={Second} /> 
                        <Route path="/about" component={About} /> 
                        <Route path="/services" component={Services} /> 
                        <Route path="/work" component={Work} /> 
                        <Route path="/contact" component={Contact} /> 
                    </Switch>
                </BrowserRouter>
                
            </div>
        )
    }
}
export default Home;