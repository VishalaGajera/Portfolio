import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import "../sass/Footer.scss"

const Footer = () => {
  return (
    <>
        <div className="footer d-flex justify-content-center align-items-center flex-row">
        {/* <p></p> */}
        {/* <p> */}
        <FaRegCopyright /> 2024 Vishala Gajera Design | +91 93139 89416 - vishalagajera@gmail.com
        {/* </p> */}
        </div>
    </>
  )
}

export default Footer