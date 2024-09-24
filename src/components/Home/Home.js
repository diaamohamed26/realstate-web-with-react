import React from 'react'
import './home.css'
import Hero from './hero/Hero'
import Featured from './featured/Featured'
import Property from './property/Property'
import Awards from './awards/Awards'
import Explore from './explore/Explore'
import Agents from './agents/Agents'
import Package from './package/Package'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Featured/>
      <Property/>
      <Awards/>
      <Explore/>
      <Agents/>
      <Package/>
    </div>
  )
}

export default Home
