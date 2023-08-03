import React from 'react'
import travelImg from '../images/Ourtrail.svg'
import { useGlobalContext } from '../context'
import { travels } from '../data'

const About = () => {
    const {closeSubmenu} = useGlobalContext();
    console.log(JSON.stringify(travels))
    
    return <section className='hero-section' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>About us</h1>
          <p>Here we will tell you more about us. We are Lars and Douglas</p>
        </article>
        <article className='hero-images'>
          <img src={travelImg} alt="phone" className='phone-img'/>
        </article>
      </div>
    </section>
}

export default About
