import React from 'react'
import img from '../images/about/about.jpg'
import './blog.css'
import P1 from '../images/p-1.png'
import P2 from '../images/p-2.png'
import P3 from '../images/p-3.png'
import P4 from '../images/p-4.png'
import P5 from '../images/p-5.png'
import P6 from '../images/p-6.png'
function Blog (){
    return(
        <div className='blog'>
            <div className='top-blog'>
                <p>Blog</p>
                <h1>Blog Grid - Our Blogs</h1>
            </div>

            <div className='bottom-blog'>
                    <div className='property-boxs'>
                        <div className='property-box'>
                            <img src={P1}/>
                            <div className='rent'>
                            <p className='for-rent'>For Rent</p>
                            <i class="ri-heart-line"></i>
                            </div>
                            <div className='property-text'>
                            <h6>Red Carpet Real Estate</h6>
                            <p className='location'><i class="ri-map-pin-fill"></i>210 Zirak Road, Canada</p>
                            </div>
                            <div className='price'>
                                <h3>$3,700</h3>
                                <h6>Apartment</h6>
                            </div>
                        </div>

                        <div className='property-box'>
                            <img src={P2}/>
                            <div className='rent'>
                            <p className='for-sale'>For Sale
                            </p>
                            <i class="ri-heart-line"></i>
                            </div>
                            <div className='property-text'>
                            <h6>Fairmount Properties
                            </h6>
                            <p className='location'><i class="ri-map-pin-fill"></i>5698 Zirak Road, NewYork</p>
                            </div>
                            <div className='price'>
                                <h3>$4,700</h3>
                                <h6>Condos</h6>
                            </div>
                        </div>

                        <div className='property-box'>
                            <img src={P3}/>
                            <div className='rent'>
                            <p className='for-rent'>For Rent</p>
                            <i class="ri-heart-line"></i>
                            </div>
                            <div className='property-text'>
                            <h6>The Real Estate Corner
                            </h6>
                            <p className='location'><i class="ri-map-pin-fill"></i>5624 Mooker Market, USA</p>
                            </div>
                            <div className='price'>
                                <h3>$7,700</h3>
                                <h6>Offices</h6>
                            </div>
                        </div>

                        <div className='property-box'>
                            <img src={P4}/>
                            <div className='rent'>
                            <p className='for-sale'>For Sale
                            </p>
                            <i class="ri-heart-line"></i>
                            </div>
                            <div className='property-text'>
                            <h6>Herringbone Realty
                            </h6>
                            <p className='location'><i class="ri-map-pin-fill"></i> 5621 Liverpool, London</p>
                            </div>
                            <div className='price'>
                                <h3>$9,700</h3>
                                <h6>Homes & Villas
                                </h6>
                            </div>
                        </div>

                        <div className='property-box'>
                            <img src={P5}/>
                            <div className='rent'>
                            <p className='for-rent'>For Rent</p>
                            <i class="ri-heart-line"></i>
                            </div>
                            <div className='property-text'>
                            <h6>Brick Lane Realty
                            </h6>
                            <p className='location'><i class="ri-map-pin-fill"></i> 210 Montreal Road, Canada</p>
                            </div>
                            <div className='price'>
                                <h3>$5,700</h3>
                                <h6>Commercial</h6>
                            </div>
                        </div>

                        <div className='property-box'>
                            <img src={P6}/>
                            <div className='rent'>
                            <p className='for-sale'>For Sale
                            </p>
                            <i class="ri-heart-line"></i>
                            </div>
                            <div className='property-text'>
                            <h6>Banyon Tree Realty
                            </h6>
                            <p className='location'><i class="ri-map-pin-fill"></i>210 Zirak Road, Canada</p>
                            </div>
                            <div className='price'>
                                <h3>$9,800</h3>
                                <h6>Apartment</h6>
                            </div>
                        </div>
                    </div>           
            </div>

        </div>
    )
}

export default Blog