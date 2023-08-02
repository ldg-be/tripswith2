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
          

        {travel.page.map((item, index)=>{
          const {title, text, image} = item;
          if(index % 2 === 0) {
          return <div>
            <h2>{title}</h2>
            <div className='travel'>
              <img className="image" src={image} alt={title}/>
              <p className='text'>{text}</p>
            </div>
            </div>

          }
          else{
          return <div>
            <h2>{title}</h2>
            <div className='travel'>
              <p className='text'>{text}</p>
              <img className="image" src={image} alt={title}/>
            </div>
            </div>  
          }
          
        })}

      </article>
      <article className='hero-images'>
        <img src={logo} alt="phone" className='phone-img'/>
      </article>
    </div>
  </section>
}

export default OurTravels

