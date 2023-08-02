import React from 'react'
import { useGlobalContext } from '../context'

const Error = () => {
  const {closeSubmenu} = useGlobalContext();
  return <section className='hero-section' onMouseOver={closeSubmenu}>
    <div className='hero-center'>
      <article className='hero-info'>
        <h1>Oops! Here is a Dead End</h1>
      </article>
    </div>
  </section>
}

export default Error
