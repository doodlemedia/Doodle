import React from 'react';
import emailjs from 'emailjs-com';
import './FormA.css';

export default function ContactUs() {

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
            <div className="row">
                <div className="col-12 col-md-6">
                    <br/>
                    <br/>
                    <input type="text" name="from_name"  placeholder="Name" className="frm" /><br />
                    <input type="hidden" name="contact_number " placeholder="Name" />
                    <input type="email" name="user_email" className="input frm" placeholder="Email" /><br />
                    <textarea name="message_html" className="input frm"  placeholder="Design Message" /><br />
                </div>
                <div className="col-12 col-md-6">
                    <img className="emailA" src={require('../Assets/email.png')} alt="full pic" />
                    <br/>
                    <input type="submit" value="Request" className="buttonF" onClick={refreshPage}></input>
                    <br/>
                </div>
                

            </div>



        </form>
    );
}