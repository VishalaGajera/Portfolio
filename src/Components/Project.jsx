import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from "../Data/projects.json"
import OIG4 from "../Images/OIG4.jpeg"
import "../sass/Project.scss"
import Heading from './Heading';
import { Link } from 'react-router-dom';

const Project = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto  d-flex justify-content-center align-items-center flex-row">
                        <div className="project d-flex align-items-center flex-column pt-5">
                            {/* <h1 className='heading'>Project</h1> */}
                            <Heading title="Project"/>
                            {
                                data.map((e) => {
                                    return (
                                        <div className="card d-flex flex-row justify-content-lg-around align-content-lg-stretch  p-3 m-3">
                                            <div className='card_image'>
                                                <img src={e.imageSrc} alt="" className='image' />
                                            </div>

                                            <div className="main_project_content">
                                                <div className='content'>
                                                    <p className='title'>{e.title}</p>
                                                    <p className='description'>{e.description}</p>
                                                    <div className="buttons d-flex flex-row align-align-items-center">
                                                        <button className='btn'><Link to={e.source} className='link'>Source</Link></button>
                                                        <button className='btn'><Link to={e.demo} className='link'>Demo</Link></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project