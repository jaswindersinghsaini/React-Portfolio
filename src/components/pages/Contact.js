import React from 'react';
import '../../styles/Contact.css'

function Contact() {
  return ( 
    <div className='contact'>
      <form className='form'>
        <h2 className='contact-header'>Contact Form</h2>
        <p> You can send me a message if you like to contact me.</p>
          <div>
            <label htmlForm='name'>Name</label>
            <input type='text' required></input>
          </div>
          <div>
            <label htmlForm='email' >Email</label>
            <input type='email' required></input>
          </div>
          <div>
            <label htmlForm='message'>Message</label>
            <textarea rows='6' required></textarea>
          </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
    )
};

export default Contact;

