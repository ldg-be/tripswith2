import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from '../data'
import { useGlobalContext } from '../context'
import { OrderByYearLink } from './Functions'

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useGlobalContext();

  

  return <aside className={`${isSidebarOpen? 'sidebar-wrapper show':'sidebar-wrapper'}`}>
    <div className='sidebar'>
      <button className='close-btn' onClick={closeSidebar}><FaTimes/></button>
      <div className='sidebar-links'>
        {sublinks.map((item,index) => {
          const {links, page} = item;
          if(page ==="our travels"){
            return <article key={index}>
              <h4>{page}</h4>
              <div>
                <h5>2023</h5>
              <div className='sidebar-sublinks'>
                {OrderByYearLink(2023)}
              </div>
              <h5>2022</h5>
              <div className='sidebar-sublinks'>
                {OrderByYearLink(2022)}
              </div>
              <h5>2021</h5>
              <div className='sidebar-sublinks'>
                {OrderByYearLink(2021)}
              </div>
              </div>
            </article>
          }


          return <article key={index}>
            <h4>{page}</h4>
            <div className='sidebar-sublinks'>
              {links.map((link, index) => {
                  const {url, icon, label} = link;
                  return <a key={index} href={`../travels/${url}`}>{icon}{label}</a>
              })}
            </div>
          </article>
        })}
      </div>
    </div>
  </aside>
}

export default Sidebar
