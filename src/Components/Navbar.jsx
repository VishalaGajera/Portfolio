import React from 'react'
import '../sass/Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='navbar_content'>
                <div className='left_navbar'>Portfolio</div>
                <div className='right_navbar'>
                    <Link to={'/'} className='navbar_link'>Home</Link>
                    <Link to={'/about'} className='navbar_link'>About</Link>
                    <Link to={'/project'} className='navbar_link'>Project</Link>
                    <Link to={'/contact'} className='navbar_link'>Contact</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar