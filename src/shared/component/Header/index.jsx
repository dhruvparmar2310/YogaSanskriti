import React from 'react'
import logo from '../../../assets/img/main-logo.jpg'
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Header = () => {
    return (
        <>
            <header>
                <nav className='navbar'>
                    <div className='main-logo'>
                        <img src={logo} alt="YogaSanskriti" />
                    </div>

                    <ul className='nav-menu'>
                        <li className='nav-item'>
                            <a href="#home">Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#about">About Us</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#course">Courses</a>
                        </li>
                        {/* testimonial */}
                        <li className='nav-item'>
                            <a href="#sponsor">Sponsorship</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#contact">Contact Us</a>
                        </li>
                    </ul>

                    <div className='social-icons'>
                        <ul>
                            <li className='social-links'><FaLinkedinIn /></li>
                            <li className='social-links'><FaInstagram /></li>
                            <li className='social-links'><FaWhatsapp /></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
