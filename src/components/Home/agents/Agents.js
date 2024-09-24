import React from 'react'
import './agents.css'
import T1 from '../../images/teams/team-1.jpg'
import T2 from '../../images/teams/team-2.jpg'
import T3 from '../../images/teams/team-3.jpg'
import T4 from '../../images/teams/team-4.jpg'
import T5 from '../../images/teams/team-5.jpg'
import T6 from '../../images/teams/team-1.jpg'

function Agents (){
    return(
         <div className='agents'>
            <div className='agents-heading'>
                <h1>Our Featured Agents</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>

            <div className='agents-boxs'>


                <div className='agents-box'>
                    
                    <a className='btn-2'>50 Listings</a>
                    <div className='img-name-social'>
                        <img src={T1}/>
                        <div className='agents-location'>
                          <i class="ri-map-pin-line"></i> 
                          <label>Liverpool, Canada</label>
                        </div>
                        <label className='name'>Sargam S. Singh</label>
                        <div className='icons'>
                           <i class="ri-facebook-fill"></i>
                           <i class="ri-twitter-fill"></i>
                           <i class="ri-instagram-fill"></i>
                        </div>
                    </div>
                    <div className='message-phone'>
                       <div className='message'>
                         <i class="ri-mail-line"></i> Message
                       </div>
                       <i class="ri-phone-fill"></i>
                    </div>
                </div>

                <div className='agents-box'>
                    <a className='btn-2'>50 Listings</a>
                    <div className='img-name-social'>
                        <img src={T2}/>
                        <div className='agents-location'>
                          <i class="ri-map-pin-line"></i> 
                          <label>Montreal, Canada
                          </label>
                        </div>
                        <label className='name'>Harijeet M. Siller</label>
                        <div className='icons'>
                           <i class="ri-facebook-fill"></i>
                           <i class="ri-twitter-fill"></i>
                           <i class="ri-instagram-fill"></i>
                        </div>
                    </div>
                    <div className='message-phone'>
                       <div className='message'>
                         <i class="ri-mail-line"></i> Message
                       </div>
                       <i class="ri-phone-fill"></i>
                    </div>
                </div>

                <div className='agents-box'>
                    <a className='btn-2'>50 Listings</a>
                    <div className='img-name-social'>
                        <img src={T3}/>
                        <div className='agents-location'>
                          <i class="ri-map-pin-line"></i> 
                          <label>Denever, USA
                          </label>
                        </div>
                        <label className='name'>Anna K. Young</label>
                        <div className='icons'>
                           <i class="ri-facebook-fill"></i>
                           <i class="ri-twitter-fill"></i>
                           <i class="ri-instagram-fill"></i>
                        </div>
                    </div>
                    <div className='message-phone'>
                       <div className='message'>
                         <i class="ri-mail-line"></i> Message
                       </div>
                       <i class="ri-phone-fill"></i>
                    </div>
                </div>

                <div className='agents-box'>
                    <a className='btn-2'>50 Listings</a>
                    <div className='img-name-social'>
                        <img src={T4}/>
                        <div className='agents-location'>
                          <i class="ri-map-pin-line"></i> 
                          <label>2272 Briarwood Drive
                          </label>
                        </div>
                        <label className='name'>Michael P. Grimaldo</label>
                        <div className='icons'>
                           <i class="ri-facebook-fill"></i>
                           <i class="ri-twitter-fill"></i>
                           <i class="ri-instagram-fill"></i>
                        </div>
                    </div>
                    <div className='message-phone'>
                       <div className='message'>
                         <i class="ri-mail-line"></i> Message
                       </div>
                       <i class="ri-phone-fill"></i>
                    </div>
                </div>

                <div className='agents-box'>
                    <a className='btn-2'>50 Listings</a>
                    <div className='img-name-social'>
                        <img src={T5}/>
                        <div className='agents-location'>
                          <i class="ri-map-pin-line"></i> 
                          <label>2272 Briarwood Drive
                          </label>
                        </div>
                        <label className='name'>Michael P. Grimaldo</label>
                        <div className='icons'>
                           <i class="ri-facebook-fill"></i>
                           <i class="ri-twitter-fill"></i>
                           <i class="ri-instagram-fill"></i>
                        </div>
                    </div>
                    <div className='message-phone'>
                       <div className='message'>
                         <i class="ri-mail-line"></i> Message
                       </div>
                       <i class="ri-phone-fill"></i>
                    </div>
                </div>

                <div className='agents-box'>
                    <a className='btn-2'>50 Listings</a>
                    <div className='img-name-social'>
                        <img src={T6}/>
                        <div className='agents-location'>
                          <i class="ri-map-pin-line"></i> 
                          <label>Montreal, USA</label>
                        </div>
                        <label className='name'>Adam K. Jollio</label>
                        <div className='icons'>
                           <i class="ri-facebook-fill"></i>
                           <i class="ri-twitter-fill"></i>
                           <i class="ri-instagram-fill"></i>
                        </div>
                    </div>
                    <div className='message-phone'>
                       <div className='message'>
                         <i class="ri-mail-line"></i> Message
                       </div>
                       <i class="ri-phone-fill"></i>
                    </div>
                </div>

            </div>

         </div>
    )
}

export default Agents