import React from 'react'
import phoneImg from '../images/phone.svg'
import travelImg from '../images/Ourtrail.svg'
import { useGlobalContext } from '../context'
import {Link } from 'react-router-dom'

const Home = () => {
  const {closeSubmenu} = useGlobalContext();
  return <section className='hero-section' onMouseOver={closeSubmenu}>
    <div className='hero-center'>
      <article className='hero-info'>
        <h1>The trail to living abroad</h1>
        <p>Welcome to our website. Here we show you our recent trips and discoveries while traveling all over europe and beyond. Click on the link to discover more</p>
        <Link to="/travels"><button className='btn'>Start now</button></Link>
      </article>
      <article className='hero-images'>
        <img src={travelImg} alt="phone" className='phone-img'/>
      </article>
    </div>
  </section>
}

export default Home
