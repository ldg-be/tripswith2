import React from 'react'
import navbarlogo from '../images/navbarlogo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'
import sublinks from '../data'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const {openSidebar, openSubmenu, closeSubmenu, travel} = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right)/2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, {center, bottom});
  }
  const handleSubmenu = (e) => {
    if(!e.target.classList.contains('link-btn')){
      closeSubmenu()
    }
  }
  return <nav className='nav' onMouseOver={handleSubmenu}>
<div className='nav-center'>
  <div className='nav-header'>
    <Link to="/">
      <img src={navbarlogo} className='nav-logo' alt='Trips with 2' />
    </Link>
    <button className='btn toggle-btn' onClick={openSidebar}><FaBars/></button>
  </div>
  <ul className='nav-links'>
    {sublinks.map((item,index) => {
            const {_, page} = item;
            return <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>{page}</button>
            </li> 
    })}
                
  </ul>
  <button className='btn signin-btn'>Sign In </button>
</div>
  </nav>
}

export default Navbar
