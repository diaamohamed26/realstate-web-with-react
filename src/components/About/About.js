import React from 'react'
import './about.css'
import Img from '../images/about/about-2.jpg'

const About = () =>{
    return(
        <div className='about'>

            <div className='about-top'>
                <p>About Us</p>
                <h1>About Us - Who We Are?</h1>
            </div>

            <div className='about-bottom'>
                <div className='bottom-par'>
                    <h1>Our Agency Story</h1>
                    <label>Check out our company story and work process</label>
                    <br/><br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                    <button>More About Us</button>
                </div>

                <div className='button-img'>
                    <img src={Img}/>
                </div>

            </div>

        </div>
        
    )
}

export default About