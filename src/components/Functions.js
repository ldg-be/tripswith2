import { Link } from 'react-router-dom'
import { FaPlane } from 'react-icons/fa';
import { useGlobalContext } from '../context.js'
import Loading from './Loading.js';

// functions to use on different components

export const OrderByYearBtn = (year) => {
  const {loading, data} = useGlobalContext();
  const travels = data

  // show loading state while waiting for the data
  if (!data) return <Loading/>;

  console.log(data[0].doc.year)
    const thisyear = data.filter((item) => item.doc.year === year)
    return thisyear.map((item) =>{
      const {url, label} = item.doc;
      return <p><Link to= {`../travels/${url}`} className='btn' >{label}</Link></p>
    })
  }

export const OrderByYearLink = (year) => {
  const {loading, data} = useGlobalContext();
  const travels = data

  // show loading state while waiting for the data
  if (!data) return <Loading/>;

    const thisyear = data.filter((item) => item.doc.year === year)
    return thisyear.map((item, index) =>{
      const {label, icon, url} = item.doc;
      return <Link key={index} to={`../travels/${url}`}>{<FaPlane />}{label}</Link>
    })
  }


