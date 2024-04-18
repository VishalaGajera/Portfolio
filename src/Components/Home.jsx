import React from 'react'
import pdf from "../pdf/VISHALA_GAJERA_RESUME.pdf"
import OIG4 from "../../public/assets/hero/9782.jpg"
import "../sass/Home.scss"

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto  d-flex justify-content-center align-items-center flex-column"></div>
          <div className='home_content'>
            <div className="left_home p-5">
              <p className="main_heading">Hi , I am Vishala Gajera , A Web Developer Based in Surat.</p>
              <p className='sub_heading'>I help businesses and companies reach their goals by designing user-centric digital products & interactive experiences.</p>
              <a className="home_Link btn btn_outline_warning" href={pdf} download="VISHALA_GAJERA_RESUME.pdf">Resume</a>
            </div>
            <div className="right_home">
              <img
                src={OIG4}
                alt="OIG4"
                className="profile_image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home