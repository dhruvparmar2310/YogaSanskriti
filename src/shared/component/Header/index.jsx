/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import logo from '../../../assets/img/header-logo.png'
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
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

                    <div onClick={() => setShowMenu(!showMenu)} className='mobMenu'>
                        {showMenu ? <FontAwesomeIcon icon={faXmark} color='var(--primary-color)' /> : <FontAwesomeIcon icon={faBars} color='var(--primary-color)' />}
                    </div>
                    <ul className='mobile-nav-menu' style={{ display: showMenu ? 'flex' : 'none' }}>
                        <li className='mobile-nav-item'>
                            <Link className='mobile-menu-list-link' activeClass='active' to='hero' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setShowMenu(false)}>Home</Link>
                        </li>
                        <li className='mobile-nav-item'>
                            <Link className='mobile-menu-list-link' activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}>About Us</Link>
                        </li>
                        <li className='mobile-nav-item'>
                            <Link className='mobile-menu-list-link' activeClass='active' to='course' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}>Courses</Link>
                        </li>
                        {/* testimonial */}
                        <li className='mobile-nav-item'>
                            <Link className='mobile-menu-list-link' activeClass='active' to='sponsor' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}>Sponsorship</Link>
                        </li>
                        <li className='mobile-nav-item'>
                            <Link className='mobile-menu-list-link' activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}>Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header
