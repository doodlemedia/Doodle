import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { db } from '../firebase';
import './FormA.css';

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('contact').add({
            name: name,
            email: email,
            message: message,
        })
            .then(() => {
                alert('message has been submitted');
                setLoader(false);
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });
        setName("");
        setEmail("");
        setMessage("");
    };
    return (

        <form className="contact-form" style={{ textAlign: "center" }} onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-12 col-md-6">
                <br/>
                    <br/>
                    <input type="text" placeholder="Name" className="frm" value={name} onChange={(e) => setName(e.target.value)} /><br />

                    <input type="email" placeholder="Email" className="input frm" value={email} onChange={(e) => setEmail(e.target.value)} /><br />

                    <textarea className="input frm" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} /><br /><br /><br />
                </div>
                <div className="col-12 col-md-6">
                    <img className="emailA" src={require('../Assets/email.png')} alt="full pic" /><br/>
                    <button type="submit" className="buttonF" >Request</button>
                </div>
            </div >
        </form >



    );
}


export default ContactUs;