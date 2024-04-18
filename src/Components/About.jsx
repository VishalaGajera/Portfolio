import React from 'react'
import "../sass/About.scss"
import data from "../Data/skills.json"
import Heading from './Heading'

const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto  d-flex justify-content-center align-items-center flex-column">
            <div className='about p-4 pt-5'>
              <Heading title="About"/>
              <div className="content pt-2">
              <p>I am a passionate software developer with a primary interest in developing applications using React Js, with a total experience of 6 month in software development, i have gained expertise in creating multiple consumer products and projects.</p>
              <div className='education_content d-flex justify-content-center align-items-center flex-column pb-3 pt-2'>
                <h4 className='main_heading pb-2'>Education</h4>
                <p className="main_content"><b>Bechelor of computer application (BCA) </b>degree from Veer Narmad South Gujarat University in 2024</p>
              </div>
              <div className="experience_content  d-flex justify-content-center align-items-center flex-column pb-3">
                <h4 className="main_heading pb-2">Experience</h4>
                <p className="main_content"><b>Skill Workers </b>junior web developer from july 2023 to present</p>
              </div>
              <div className="skill_content  d-flex justify-content-center align-items-center flex-column pb-3">
                <h4 className="main_heading pb-2">Skills</h4>
                <div className="d-flex justify-content-center align-items-center flex-row gap-5 flex-wrap">
                  {data.map((e) => {
                    return (
                      <>
                        <div className="d-flex justify-content-center align-items-center flex-column pb-1">
                          <p className="main_content">{e.title}</p>
                          <img src={e.imageSrc} alt="" width={50} height={50} />
                        </div >
                      </>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
                      </div>
      </div >
    </>
  )
}

export default About