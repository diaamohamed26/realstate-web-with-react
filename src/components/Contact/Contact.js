import React from 'react'
import './contact.css'
function Contact() {
  return (
    <div className='contact-us'>
        <div className='top-contact-us'>
            <p>Contact Us</p>
            <h1>Get Helps & Friendly Support</h1>
        </div>
        <div className='form-contact'>
            <h4>Fillup The Form</h4>
            <br></br>
            <div className='name-email'>
                <input type='text' placeholder='Name'/>
                <input type='text' placeholder='Email'/>
            </div>
            <input type='text' placeholder='subject'/>
            <textarea cols='30' rows='10'/>
            <button>Submit Request</button>
        </div>
      
    </div>
  )
}

export default Contact

