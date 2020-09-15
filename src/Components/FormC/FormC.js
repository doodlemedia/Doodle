import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { db }  from '../firebase';
import './FormC.css';

const ContactC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('contact').add({
      name: name,
      email: email,
      number: number,
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
    setNumber("");
    setMessage("");
  };
  return (
    <form className="contact-form" style={{ textAlign: "center" }} onSubmit={handleSubmit}>
      
      <input type="text" placeholder="Your Name (Required)" className="frmc" value={name} onChange={(e) => setName(e.target.value)} /><br/>
      
      <input type="email" placeholder="Your E-mail "  className="frmc" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
      <input type="number" placeholder="Your Phone Number "  className="frmc" value={number} onChange={(e) => setNumber(e.target.value)} /><br/>
      <textarea  className="frmc" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} /><br/><br/><br/>
      <button type="submit" className="buttonC" >Get in Touch</button>
    </form>
  );
}
  

export default ContactC;