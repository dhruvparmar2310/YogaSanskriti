/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import logo from '../../../assets/img/header-logo.png'
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Header = () => {
    const [currSection, setCurrSection] = useState('')

    const handleSection = (e, data) => {
        e.preventDefault()
        setCurrSection(data)
    }
    return (
        <>
            <header>
                <nav className='navbar'>
                    <div className='main-logo'>
                        <img src={logo} alt="YogaSanskriti" />
                    </div>

                    <ul className='nav-menu'>
                        <li className='nav-item'>
                            <Link className='menu-list-link' activeClass='active' to='hero' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='menu-list-link' activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500}>About Us</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='menu-list-link' activeClass='active' to='course' spy={true} smooth={true} offset={-50} duration={500}>Courses</Link>
                        </li>
                        {/* testimonial */}
                        <li className='nav-item'>
                            <Link className='menu-list-link' activeClass='active' to='sponsor' spy={true} smooth={true} offset={-50} duration={500}>Sponsorship</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='menu-list-link' activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}>Contact Us</Link>
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
