import React from 'react';
import emailjs from 'emailjs-com';
import './FormC.css';

export default function Contactu() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_wziju8p', e.target, 'user_PtA1bipZUhhTloD3FwKXJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    function refreshPage() {
        window.location.reload(false);
    }
    return (
        <form className="contact-form container" style={{ textAlign: "center" }} onSubmit={sendEmail}>
            
                    <br/>
                    <br/>
                    <input type="text" name="from_name"  placeholder="Your Name (Required)" className="frmc" /><br />
                    <input type="email" name="user_email" className="input frmc" placeholder="Your Email" /><br />
                    <input type="number" name="user_number" className="input frmc" placeholder="Your Number" /><br />
                    <textarea name="message_html" className="input frmc"  placeholder="Your Message" /><br />
                
                    
                    <br/>
                    <input type="submit" value="Get in Touch" className="buttonC" onClick={refreshPage}></input>
                    <br/>
                   
        </form>
    );
}