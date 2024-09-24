import React from 'react'
import './services.css'
import F1 from '../images/f-1.png'
import F2 from '../images/f-2.png'
import F3 from '../images/f-3.png'
import F4 from '../images/f-4.png'
import F5 from '../images/f-5.png'


function Services (){
    return(
        <div className='services'>
            <div className='top-services'>
                <p>Services</p>
                <h1>Services -All Services</h1>
            </div>

            <div className='bottom-services'>
                    <div className='featured-boxs2'>

                        <div className='box2'>
                            <img src={F1}/>
                            <h4>Family House</h4>
                            <label>122 Property</label>
                        </div>

                        <div className='box2'>
                            <img src={F2}/>
                            <h4>House & Villa</h4>
                            <label>155 Property</label>
                        </div>

                        <div className='box2'>
                            <img src={F3}/>
                            <h4>Apartment</h4>
                            <label>300 Property</label>
                        </div>

                        <div className='box2'>
                            <img src={F4}/>
                            <h4>Office & Studio</h4>
                            <label>160 Property</label>
                        </div>

                        <div className='box2'>
                            <img src={F5}/>
                            <h4>Villa & Condo</h4>
                            <label>170 Property</label>

                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Services
