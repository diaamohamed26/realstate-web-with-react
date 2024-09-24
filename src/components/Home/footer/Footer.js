import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import Logo2 from '../../images/logo2.png'


function Footer() {
  return (
    <div className='footer'>


        <div className='top-footer'>
            <div className='questions'>
                <h1>Do You Have Questions ?</h1>
                <p>We'll help you to grow your career and growth.</p>
            </div>
            <a className='contact'>Contact Us Today</a>
        </div>

       <div className='bottom-footer'>
        <div className='boxs-footer'>
          <div className='box-footer'>
              <Link class="navbar-brand" href="#">
                <img src={Logo2} className='logo-footer'/>
              </Link>
              <h1>Do You Need Help With Anything?</h1>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
              <div className='input'>
                <input className='input-email' type='text' placeholder='Email Address'/>                                            



                <button className='subscribe'>Subscribe</button>

              </div>
          </div>

          <div className='box-footer'>
            <h4>LAYOUTS</h4>
            <p>Home Page</p>                                       
            <p>About Page</p>
            <p>Service Page</p>
            <p>Property Page</p>
            <p>Contact Page</p>
            <p>Single Blog</p>
          </div>

          <div className='box-footer'>
            <h4>ALL SECTIONS
            </h4>
            <p>Headers</p>                                       
            <p>Features</p>
            <p>Attractive
            </p>
            <p>Testimonials</p>
            <p>Videos</p>
            <p>Footers</p>
          </div>

          <div className='box-footer'>
            <h4>COMPANY
            </h4>
            <p>Home</p>                                       
            <p>Blog</p>
            <p>Pricing</p>
            <p>Affiliate</p>
            <p>Login</p>
            <p>Changelog</p>
          </div>
        </div>

        <div className='designed'>
           <hr/>
          <h6>© 2024 RentUP. Designd By diaa mohamed.</h6>
        </div>
       </div>

        
    </div>
  )
}

export default Footer
