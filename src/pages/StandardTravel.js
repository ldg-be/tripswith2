import React from 'react'
import logo from '../images/trips with 2.svg'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
import {travels} from '../data.js'

const OurTravels = () => {
  const {closeSubmenu} = useGlobalContext();
  const {dest} = useParams();
  const travel = travels.find((item) => item.url === dest)
      
  return <section className='hero-section' onMouseOver={closeSubmenu}>
    <div className='hero-center'>
      <article className='hero-info'>
            <h1>{travel.label}</h1>
            <p>{travel.intro}</p>
          

        {travel.page.map((item)=>{
          const {title, text, image} = item;
          return <div>
            <h2>{title}</h2>
            <p>{text}</p>
            </div>
          
        })}

      </article>
      <article className='hero-images'>
        <img src={logo} alt="phone" className='phone-img'/>
      </article>
    </div>
  </section>
}

export default OurTravels

