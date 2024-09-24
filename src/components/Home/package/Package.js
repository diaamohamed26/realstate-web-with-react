import React from 'react'
import './package.css'


function Package (){
    return(
        <div className='package'>
            <div className='package-heading'>
              <h1>Select Your Package</h1>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
            </div>
            <div className='package-boxs'>

                <div className='package-box'>
                    <div className='per-month'>
                      <h6>Basic</h6>
                      <h1><label>$</label>29</h1>
                      <p>per user, per month</p>
                    </div>
                    <div className='right-false'>
                       <p className='ri'><i class="ri-check-line"></i>  99.5% Uptime Guarantee</p>
                       
                       <p className='ri'><i class="ri-close-line"></i >  120GB CDN Bandwidth</p>
                       
                       <p className='ri'><i class="ri-close-line"></i >  5GB Cloud Storage</p>
                       
                       <p className='ri'><i class="ri-close-line"></i >  5GB Cloud Storage</p>
                       
                       <p className='ri'><i class="ri-check-line"></i>  Enterprise SLA</p>
                    </div>
                    <a className='start'>Start Basic</a>
                </div>



                <div className='package-box act'>
                    <a className='best-value'>Best Value</a>
                    <div className='per-month'>
                      <h6>Platinum</h6>
                      <h1><label>$</label>56</h1>
                      <p>per user, per month</p>
                    </div>
                    <div className='right-false'>
                       <p className='ri'><i class="ri-check-line"></i>  99.5% Uptime Guarantee</p>
                       
                       <p className='ri'><i class="ri-close-line"></i >  120GB CDN Bandwidth</p>
                       
                       <p className='ri'><i class="ri-close-line"></i >  5GB Cloud Storage</p>
                       
                       <p className='ri'><i class="ri-close-line"></i >  5GB Cloud Storage</p>
                       
                       <p className='ri'><i class="ri-check-line"></i>  Enterprise SLA</p>
                    </div>
                    <a className='start standard'>Start Standard</a>
                </div>











                <div className='package-box'>
                    <div className='per-month'>
                      <h6>Standard</h6>
                      <h1><label>$</label>32</h1>
                      <p>per user, per month</p>
                    </div>
                    <div className='right-false'>
                       <p className='ri'><i class="ri-check-line"></i>  99.5% Uptime Guarantee</p>
                       
                       <p className='ri'><i class="ri-close-line"></i >  120GB CDN Bandwidth</p>
                       
                       <p className='ri'><i class="ri-close-line"></i >  5GB Cloud Storage</p>
                       
                       <p className='ri'><i class="ri-close-line"></i >  5GB Cloud Storage</p>
                       
                       <p className='ri'><i class="ri-check-line"></i>  Enterprise SLA</p>
                    </div>
                    <a className='start'>Start Basic</a>
                </div>
                   

            </div>

        </div>
    )
}

export default Package