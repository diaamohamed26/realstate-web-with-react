import React from 'react'
import './navigation.css'
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png'


function Navigation() {
  
return (
    <div className='navigation'>
       	<nav className="navbar navbar-expand-lg">
      <div class="container-fluid">
        <Link class="navbar-brand" href="#">
          <img src={Logo} className='logo'/>
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
           <i class="ri-menu-3-line"></i>
        </button>
    
        <div class=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto ">
            <li class="nav-item">
              <Link class="nav-link mx-2"  href="#" to='/'>Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link mx-2" href="#" to='/about'>About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link mx-2" href="#" to='/services'>Services</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link mx-2" href="#" to='/blog'>Blog</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link mx-2" href="#" to='/pricing'>Pricing</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link mx-2" href="#" to='/contact'>Contact</Link>
            </li>
          </ul>
          <div class="navbar-nav ms-auto btn-1">
            <i class="ri-login-box-line"></i> 
            <label className='sign-in'>Sign in</label>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navigation
