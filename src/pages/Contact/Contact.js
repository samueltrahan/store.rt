import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
     <div className="message-section">
       <h1>Send Us a Message</h1>
       <label className="label">Name:</label>
       <input className="input" type="text" placeholder="Name..."></input>
       <label className="label">Email:</label>
       <input className="input" type="text" placeholder="Email..."></input>
       <label className="label">Message:</label>
       <textarea className="message" type="text"></textarea>
     </div>
     <div className="email-section">
        <label className="label">Email:</label>
        <a className="email-link" href="mailto:samueltrahan91@gmail.com">samueltrahan91@gmail.com</a>
        <label className="label">Address:</label>
        <h4>Austin, Texas</h4>
        <label className="label">Phone Number:</label>
        <a className="email-link" href="tel:555-555-5555">(555) - 555- 5555</a>
     </div>
    </div>
  )
}
