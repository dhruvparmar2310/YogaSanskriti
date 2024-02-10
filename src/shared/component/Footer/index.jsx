import React from 'react'
import mainLogo from '../../../assets/img/main-logo.png'

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='company-intro'>
                    <img src={mainLogo} alt="YogaSanskriti" title='YogaSanakriti' className='img-fluid' />
                    <p>&quot;Yoga is the journey of the self,<br /> to the self, through the self.&quot;</p>

                    <div className='contact-info'>
                        <div>
                            Email ID: <span> <a href="mailto:darshanparmar680@gmail.com">darshanparmar680@gmail.com</a> </span>
                        </div>
                        <div>
                            Mobile No.: <span> <a href="tel:+91 7984-377-793">+91 7984-377-793</a> </span>
                        </div>
                    </div>
                </div>

                <div>
                    <ul>
                        <li>Quick Links</li>
                        <li>About Us</li>
                        <li>Courses</li>
                        <li>Sponsorship</li>
                        <li>Contact Us</li>
                    </ul>

                    <ul>
                        <li>Career</li>
                        <li>Collaboration</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
