import React from 'react'
import './Hero.css'

const Hero = () => {
    return(
        <div className='hero'>
            <h1>Search Your Next Home</h1>
            <p>Find new & featured property located in your local city.</p>
            

            <div className='flex'>

              <div className='box'>
                <span>city/Street</span>
                <input type='text' placeholder='location'/>
              </div>

              <div className='box'>
                <span>Property Type</span>
                <input type='text' placeholder='Property Type'/>
              </div>

              <div className='box'>
                <span>Price Range</span>
                <input type='text' placeholder='Price Range'/>
              </div>

              <div className='box'>
                <h4>Advance 
                  Filter</h4>
              </div>

              <button className='btn2'>
                <i class="ri-search-2-fill"></i>
              </button>




            </div>
            
        </div>
    )
} 
export default Hero