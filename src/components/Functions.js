import { Link } from 'react-router-dom'
import {travels} from '../data.js'

// functions to use on different components

export const OrderByYearBtn = (year) => {
    const thisyear = travels.filter((item) => item.year === year)
    return thisyear.map((item) =>{
      const {url, label} = item;
      return <p><Link to= {`../travels/${url}`} className='btn' >{label}</Link></p>
    })
  }

export const OrderByYearLink = (year) => {
    const thisyear = travels.filter((item) => item.year === year)
    return thisyear.map((item, index) =>{
      const {label, icon, url} = item;
      return <Link key={index} to={`../travels/${url}`}>{icon}{label}</Link>
    })
  }