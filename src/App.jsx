// import { useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Layout from './Layout'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.scss'
AOS.init();

function App() {

  return (
    <>
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />} >
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/project' element={<Project />} />
              <Route path='/contact' element={<Contact />} /> 
              {/*<Route path='/experience' element={<Experience />} />
              <Route path='/skills' element={<Skills />} />*/}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
