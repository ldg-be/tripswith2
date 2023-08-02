import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import pages
import Home from './pages/Home'
import About from './pages/About'
import OurTravels from './pages/OurTravels'
import StandardTravel from './pages/StandardTravel'
import Error from './pages/Error'

// import components
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Submenu from './components/Submenu'
//import Loading from './components/Loading'

function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      <Submenu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/travels' element={<OurTravels/>}/>        
        <Route path='/travels/:dest' element={<StandardTravel />}/>
        <Route exact path='*' element={<Error />}/>        
        
      </Routes>
    </Router>
  )
}

export default App
