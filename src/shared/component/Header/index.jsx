import React, { useState } from 'react'
import logo from '../../../assets/img/main-logo.jpg'
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Header = () => {
    const [currSection, setCurrSection] = useState('')

    const handleSection = (e, data) => {
        e.preventDefault()
        setCurrSection(data)
    }
    // useEffect(() => {
    //     if (location?.hash?.split('#')?.[1] === 'home' || currSection === '') {
    //         setCurrSection(location?.hash?.split('#')?.[1])
    //     }
    //     setCurrSection(location?.hash?.split('#')?.[1])
    // }, [currSection, location])

    console.log(currSection)
    return (
        <>
            <header>
                <nav className='navbar'>
                    <div className='main-logo'>
                        <img src={logo} alt="YogaSanskriti" />
                    </div>

                    <ul className='nav-menu'>
                        <li className='nav-item'>
                            <a href="#hero" onClick={(e) => handleSection(e, 'home')} className={`${currSection === '' || currSection === 'home' ? 'active' : ''}`}>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#about" onClick={(e) => handleSection(e, 'about')} className={`${currSection === 'about' ? 'active' : ''}`}>About Us</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#course" onClick={(e) => handleSection(e, 'course')} className={`${currSection === 'course' ? 'active' : ''}`}>Courses</a>
                        </li>
                        {/* testimonial */}
                        <li className='nav-item'>
                            <a href="#sponsor" onClick={(e) => handleSection(e, 'sponsor')} className={`${currSection === 'sponsor' ? 'active' : ''}`}>Sponsorship</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#contact" onClick={(e) => handleSection(e, 'contact')} className={`${currSection === 'contact' ? 'active' : ''}`}>Contact Us</a>
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
