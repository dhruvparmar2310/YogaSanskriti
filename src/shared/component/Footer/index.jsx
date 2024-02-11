import React from 'react'
import mainLogo from '../../../assets/img/main-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import physioBrotherLogo from '../../../assets/img/physiobrothers.png'

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='footer-content'>
                    <div className='company-intro'>
                        <img src={mainLogo} alt="YogaSanskriti" title='YogaSanakriti' className='img-fluid' />
                        <p>&quot;Yoga is the journey of the self,<br /> to the self, through the self.&quot;</p>
                    </div>

                    <div className='useful-links'>
                        <div>
                            <p className='heading'>Quick Links</p>
                            <ul>
                                <li><span><FontAwesomeIcon icon={faPlay} /> About Us</span></li>
                                <li><span><FontAwesomeIcon icon={faPlay} /> Courses</span></li>
                                <li><span><FontAwesomeIcon icon={faPlay} /> Sponsorship</span></li>
                                <li><span><FontAwesomeIcon icon={faPlay} /> Contact Us</span></li>
                            </ul>
                        </div>

                        <div>
                            <p className='heading'>Additional Links</p>
                            <ul>
                                <li><span><FontAwesomeIcon icon={faPlay} /> Career</span></li>
                                <li><span><FontAwesomeIcon icon={faPlay} /> Collaboration</span></li>
                                <li><span><FontAwesomeIcon icon={faPlay} /> Testimonials</span></li>
                            </ul>
                        </div>

                        <div>
                            <p className='heading'>Social Links</p>

                            <div className='social-icons'>
                                <ul>
                                    <li className='social-links'><FaLinkedinIn /></li>
                                    <li className='social-links'><FaInstagram /></li>
                                    <li className='social-links'><FaWhatsapp /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='copyright'>
                    <p>Copyright &copy; 2024. All rights reserved.</p>
                    <p className='powered-by'>
                        <span>
                            Powered by <a href='https://thephysiobrothers.netlify.app/'>
                                <img src={physioBrotherLogo} alt='ThePhysioBrothers Logo' title='ThePhysioBrothers' />
                            </a>
                        </span>
                        <span>Developed by: <a href='https://dhanparmar.netlify.app' title='Dhruv Parmar | Web Developer'>Dhruv Parmar</a></span>
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer
