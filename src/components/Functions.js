import { Link } from 'react-router-dom'
import { FaPlane } from 'react-icons/fa';
import { useGlobalContext } from '../context.js'
import Loading from './Loading.js';

// functions to use on different components

export const OrderByYearBtn = (year) => {
  const {loading, data} = useGlobalContext();
  //const travels = data

  // show loading state while waiting for the data
  if (!data) return <Loading/>;

    const thisyear = data.filter((item) => item.year === year)
    return <div className='ourtravel-grid'>
    {thisyear.map((item) =>{
      const {url, label} = item;
      return <Link to= {`../travels/${url}`} className='btn ' >{label}</Link>
    })}</div>
  }

export const OrderByYearLink = (year) => {
  const {loading, data} = useGlobalContext();
  //const travels = data

  // show loading state while waiting for the data
  if (!data) return <Loading/>;

    const thisyear = data.filter((item) => item.year === year)
    return thisyear.map((item, index) =>{
      const {label, icon, url} = item;
      return <Link key={index} to={`../travels/${url}`}>{<FaPlane />}{label}</Link>
    })
  }


