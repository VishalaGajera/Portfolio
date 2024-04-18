import React, { useState } from 'react'
import "../sass/Contact.scss"
import Heading from './Heading'
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    number:"",
    subject:"",
    message:""
  });
  
  const handleInput=(e)=>{
    const {name, value}=e.target;
    setFormData(prev => ({...prev, [name]: value}))
  }
  
  const handleSubmit=()=>{
    console.log(formData);
  }
  console.log(formData);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto  d-flex justify-content-center align-items-center flex-column">
            <div className="contact d-flex justify-content-lg-start align-items-center flex-column pt-5">
              <div className="main_content">
                <div className="personal_details ">
                  <div className="email_content">
                    <h4>Email Us</h4>
                    <p>vishalagajera@gmail.com</p>
                  </div>
                  <div className="email_content">
                    <h4>Contact No. </h4>
                    <p>+91 93139 89416</p>
                  </div>
                  <div className="contact_content">
                    <h4>Connect With Us</h4>
                    <div className="icons">
                      <Link to="https://www.instagram.com/" target="_blank" className='icon'><FaInstagram style={{ fontSize: "25px" }} /></Link>
                      <Link to="https://www.linkedin.com/" target="_blank" className='icon'><FaLinkedinIn style={{ fontSize: "25px" }} /></Link>
                      <Link to="https://www.facebook.com/" target="_blank" className='icon'><FaFacebookF style={{ fontSize: "25px" }} /></Link>
                    </div>
                  </div>
                </div>
                <div className="form">
                  <div className='d-flex justify-content-center align-items-center w-100'>
                    <div className='heading'>
                      <Heading title="Contact Us" />
                      <p>To Learn more about  begin featured, get in touch - web love to hear from you!</p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col col-md-12">
                      <input type="text" className="form-control " placeholder="Name" required onChange={handleInput} value={formData.name} name="name" />
                    </div>
                  </div>
                  <div className="row mb-3 d-flex flex-wrap">
                    <div className="col col-md-6">
                      <input type="email" className="form-control " placeholder="hr@gmail.com" required onChange={handleInput} value={formData.email} name="email" />
                    </div>
                    <div className="col col-md-6">
                      <input type="text" className="form-control " placeholder="+91 93139 89416" required onChange={handleInput} value={formData.number} name="number" maxLength={10}/>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col col-md-12">
                      <input type="text" className="form-control " placeholder="Subject" required onChange={handleInput} value={formData.subject} name="subject" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col col-md-12">
                      <input type="text" className="form-control " placeholder="Message" required onChange={handleInput} value={formData.message} name="message" />
                    </div>
                  </div>
                  <div className="row mb-3 pt-3">
                    <div className="col col-md-12">
                      <button type="submit" className='btn w-100 fw-bold fs-4' onClick={handleSubmit}>Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact