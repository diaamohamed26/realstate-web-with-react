import React from 'react'
import './awards.css'

function Awards() {
  return (
    <div className='awards'>
        <p className='our-awards'>Our Awards</p>
        <h1>Over 1,24,000+ Happy User Bieng With Us Still They Love Our
            <br></br> Services</h1>
        <div className='awards-icons'>
             <div className='award-icon'>
                <i class="ri-award-line"></i>
                <h1>32 M</h1>
                <p>Blue Burmin Award</p>
             </div>

             <div className='award-icon'>
                <i class="ri-award-line"></i>
                <h1>45 M</h1>
                <p>Mimo X11 Award</p>
             </div>

             <div className='award-icon'>
                <i class="ri-award-line"></i>
                <h1>98 M</h1>
                <p>Australian UGC Award</p>
             </div>

             <div className='award-icon'>
                <i class="ri-award-line"></i>
                <h1>46 M</h1>
                <p>IITCA Green Award</p>
             </div>
        </div>
    </div>
  )
}

export default Awards
