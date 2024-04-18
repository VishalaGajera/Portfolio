import React from 'react'
import Navbar from './Components/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer.jsx'

const Layout = () => {
  return (
    <>
      <div className="  " >
        <Navbar />
      </div>
      <div className={"body--"}>
        <Outlet></Outlet>
      </div>
      <div className='Footer'>
        <Footer/>
      </div>
    </>
  )
}

export default Layout