import React, { useState } from 'react'
import { MdPhoneInTalk } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import "../sass/Contact.scss"
import Heading from './Heading'
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
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
                <div className="form">
                  <div className='d-flex justify-content-center align-items-center w-100'>
                    <div className='heading'>
                      <Heading title="Drop Us a Message" />
                    </div>
                  </div>
                  <p>Feel free to reach out to me for any inquiries or collaborations.</p>
                  <div className="row gx-3 mb-2">
                    <div className="col-sm-6">
                      <div className="form_group">
                        <input type="text" className="form-control " placeholder="Name" required onChange={handleInput} value={formData.name} name="name" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form_group">
                        <input type="text" className="form-control " placeholder="+91 93139 89416" required onChange={handleInput} value={formData.number} name="number" maxLength={10} />
                      </div>
                    </div>
                    {/* </div> */}
                    {/* <div className="row mb-3 d-flex flex-wrap"> */}
                    <div className="col-sm-6">
                      <div className="form_group">
                        <input type="email" className="form-control " placeholder="hr@gmail.com" required onChange={handleInput} value={formData.email} name="email" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form_group">
                        <input type="text" className="form-control " placeholder="+91 93139 89416" required onChange={handleInput} value={formData.number} name="number" maxLength={10} />
                      </div>
                    </div>
                    {/* </div> */}
                    {/* <div className="row mb-3"> */}
                    <div className="col-12">
                      <div className="form_group">
                        <textarea className="form-control " placeholder="Message" required onChange={handleInput} value={formData.message} name="message" cols="30" rows="5"></textarea>
                      </div>
                    </div>
                    {/* </div>
                  <div className="row mb-3 pt-1"> */}
                    <div className="col-12 pt-3">
                      <div className="form_group">
                        <button type="submit" className='btn w-100 fw-bold fs-4' onClick={handleSubmit}>Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="personal_details ">
                  <div className="contact-info-list">
                    <ul className='ul-reset'>
                      <li className='info-list' style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInRight' }}>
                        <div className="icon-box">
                          <MdPhoneInTalk />
                        </div>
                        <div className="text-box">
                          <p>Phone</p>
                          <a href="tel:0123456789">+91 99784  20331</a>
                        </div>
                      </li>
                      <li className='info-list' style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInRight' }}>
                        <div className="icon-box">
                          <MdOutlineMail />
                        </div>
                        <div className="text-box">
                          <p>Email</p>
                          <a href="mailto:dhameliyamiral@gmail.com" style={{ wordBreak: 'break-all' }}>vishalagajera@gmail.com</a>
                        </div>
                      </li>
                      <li className='info-list' style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInRight' }}>
                        <div className="icon-box">
                          <IoLocationSharp />
                        </div>
                        <div className="text-box">
                          <p>Address</p>
                          <a href="/">Varachha , <br />Surat</a>
                        </div>
                      </li>
                    </ul>
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