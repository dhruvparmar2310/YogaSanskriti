import React from 'react'
import aboutImg from '../../../assets/img/about.jpg'
import { Col, Row } from 'react-bootstrap'

const AboutUs = () => {
    return (
        <>
            <h1 className='section-title' data-heading='About'>Yoga Sanskriti</h1>

            <div className='about-content container mt-5'>
                <Row>
                    <Col lg={6} md={12}>
                        <div className='about-img'>
                            <img src={aboutImg} className='img-fluid' alt="" />
                            <div className='design'></div>
                            <div className='bg-design'></div>
                        </div>
                    </Col>
                    <Col lg={6} md={12} className='mt-lg-0 mt-3'>
                        <div className='about-desc'>
                            <p>
                                Welcome to <span>YogaSanskriti</span>! We &apos;re more than just a yoga class; we&apos;re a community dedicated to helping you find your inner peace and unlock your full potential. Since our doors opened in 2020, we&apos;ve been passionate about guiding individuals on their unique yoga journeys, regardless of experience or background.
                            </p>

                            <h4>Our Journey:</h4><hr className='line' />
                            <p>
                                Founded in 2020, <span>YogaSanskriti</span> was born from a desire to create a welcoming space where everyone could explore the transformative power of yoga. We believe that yoga is for everyone, and we strive to offer a diverse range of classes, workshops, and events to cater to all levels and interests.
                            </p>
                        </div>
                    </Col>
                </Row>
                <div className='about-desc mt-4'>
                    <h4>What Makes Us Different:</h4><hr className='line' />
                    <p>
                        <ul>
                            <li>
                                <span>Experienced and passionate instructors:</span> Our team of certified yoga teachers is dedicated to sharing their knowledge and expertise in a supportive and encouraging environment.
                            </li>
                            <li className='mt-2'>
                                <span>Diverse class offerings:</span> From gentle Hatha to challenging Vinyasa, we offer a variety of classes to suit your needs and preferences. We also have workshops, retreats, and other events to help you deepen your practice.

                            </li>
                            <li className='mt-2'>
                                <span>More than just physical postures:</span> We understand that yoga is about more than just physical exercise. We incorporate mindfulness, meditation, and breathwork into our classes to help you connect with your inner self and find greater peace and well-being.
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutUs
