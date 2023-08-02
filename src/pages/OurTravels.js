import React from 'react'
import logo from '../images/trips with 2.svg'
import { useGlobalContext } from '../context'
import { OrderByYearBtn } from '../components/Functions'

const OurTravels = () => {
  const {closeSubmenu} = useGlobalContext();
  return <section className='hero-section' onMouseOver={closeSubmenu}>
    <div className='hero-center'>
      <article className='hero-info'>
        <h1>Here you find an overview of our last travels</h1>
        <h2>2023</h2>
        {
          OrderByYearBtn(2023)
        }
        <h2>2022</h2>
        {
          OrderByYearBtn(2022)
        }
        <h2>2021</h2>
        {
          OrderByYearBtn(2021)
        }

      </article>
      <article className='hero-images'>
        <img src={logo} alt="phone" className='phone-img'/>
      </article>
    </div>
  </section>
}

export default OurTravels

