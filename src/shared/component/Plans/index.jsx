import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Plans = () => {
    return (
        <>
            <h1 className='section-title' data-heading='Our'>Subscription</h1>

            <div className='plan-content container mb-5'>
                <Row>
                    <Col lg={3} md={6} sm={6}>
                        <div className='plan-card'>
                            <h2>1 Month</h2>
                            <div className='card-body'>
                                <p className='previous-price'>1500</p>
                                <p className='current-price'>800/-</p>
                                <button className='btn btn-primary'>Select Plan</button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} className='mt-lg-0 mt-5'>
                        <div className='plan-card'>
                            <h2>3 Months</h2>
                            <div className='card-body'>
                                <p className='previous-price'>4500</p>
                                <p className='current-price'>2200/-</p>
                                <button className='btn btn-primary'>Select Plan</button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} className='mt-lg-0 mt-5'>
                        <div className='plan-card'>
                            <h2>6 Months</h2>
                            <div className='card-body'>
                                <p className='previous-price'>9000</p>
                                <p className='current-price'>4000/-</p>
                                <button className='btn btn-primary'>Select Plan</button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} className='mt-lg-0 mt-5'>
                        <div className='plan-card'>
                            <h2>12 Months</h2>
                            <div className='card-body'>
                                <p className='previous-price'>18000</p>
                                <p className='current-price'>7200/-</p>
                                <button className='btn btn-primary'>Select Plan</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Plans
