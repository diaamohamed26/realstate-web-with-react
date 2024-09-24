import React from 'react'
import './explore.css'
import C1 from '../../images/cities/city-1.png'
import C2 from '../../images/cities/city-2.png'
import C3 from '../../images/cities/city-3.png'
import C4 from '../../images/cities/city-4.png'
import C5 from '../../images/cities/city-5.png'
import C6 from '../../images/cities/city-6.png'

function Explore (){
    return(
        <div className='explore'>
             <div className='explore-heading'>
                <h1>Explore By Location</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
             </div>

             <div className='explore-boxs'>
                <div className='explore-box'>
                    <img src={C1}/>
                    <h5>New Orleans, Louisiana</h5>
                </div>

                <div className='explore-box'>
                    <img src={C2}/>
                    <h5>Jerrsy, United State</h5>
                </div>

                <div className='explore-box'>
                    <img src={C3}/>
                    <h5>Liverpool, London</h5>
                </div>

                <div className='explore-box'>
                    <img src={C4}/>
                    <h5>NewYork, United States</h5>
                </div>

                <div className='explore-box'>
                    <img src={C5}/>
                    <h5>Montreal, Canada</h5>
                </div>

                <div className='explore-box'>
                    <img src={C6}/>
                    <h5>California, USA</h5>
                </div>
                
             </div>
        </div>
    )
}

export default Explore