import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Controller, useForm } from 'react-hook-form'
import { FaPaperPlane, FaWhatsapp } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

const Contact = () => {
    const {
        handleSubmit,
        formState: { errors },
        control
    } = useForm({ mode: 'all' })

    function onSubmit (data) {
        console.log('data :>> ', data)
        //     href = {`https://wa.me/7984377793?text=Hello%20there,%20I'am%20${watch('sName')}%20and%2C%20I%20wanted%20to%20discuss%20about%20${watch('sSubject')}%20that,%20${watch('sMessage')}`
        // }
    }

    return (
        <>
            <h1 className='section-title' data-heading='Get in Touch'>Contact Us</h1>

            <div className="container">
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-card">
                            <IoMdMail className='card-icon' />

                            <h3 className="card-title">Email</h3>
                            <span className="card-data">darshanparmar680@gmail.com</span>
                        </div>
                    </div>

                    <div className="contact-info">
                        <div className="contact-card">
                            <FaWhatsapp className='card-icon' />

                            <h3 className="card-title">Whatsapp</h3>
                            <span className="card-data">+91 7984-377-793</span>
                        </div>
                    </div>
                </div>

                <div className="container contact-form">
                    <Form className='step-one' autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                        <div className='input-container'>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Controller
                                    name='sName'
                                    control={control}
                                    rules={{ required: { value: true, message: 'Name is required.' } }}
                                    render={({ field: { onChange, value, ref } }) => (
                                        <Form.Control
                                            ref={ref}
                                            type="text"
                                            className={`form-control ${errors && errors.sName}`}
                                            placeholder="Enter your name"
                                            value={value}
                                            onChange={onChange}
                                        />
                                    )}
                                />
                                {errors.sName && <Form.Control.Feedback type='invalid'>{errors.sName.message}</Form.Control.Feedback>}
                            </Form.Group>
                        </div>
                        <div className='input-container mt-2'>
                            <Form.Group>
                                <Form.Label>Subject</Form.Label>
                                <Controller
                                    name='sSubject'
                                    control={control}
                                    rules={{ required: { value: true, message: 'Subject to discuss is required.' } }}
                                    render={({ field: { onChange, value, ref } }) => (
                                        <Form.Control
                                            ref={ref}
                                            type="text"
                                            placeholder="Enter topic to discuss"
                                            value={value}
                                            onChange={onChange}
                                            className={`form-control ${errors && errors.sSubject}`}
                                        />
                                    )}
                                />
                                {errors.sSubject && <Form.Control.Feedback type='invalid'>{errors.sSubject.message}</Form.Control.Feedback>}
                            </Form.Group>
                        </div>
                        <div className='input-container mt-2'>
                            <Form.Group>
                                <Form.Label>Message</Form.Label>
                                <Controller
                                    name='sMessage'
                                    control={control}
                                    rules={{ required: { value: true, message: 'Message is required.' } }}
                                    render={({ field: { onChange, value, ref } }) => (
                                        <Form.Control
                                            as="textarea"
                                            style={{ height: '100px' }}
                                            ref={ref}
                                            placeholder="Enter the message..."
                                            value={value}
                                            className={`form-control ${errors && errors.sMessage}`}
                                            onChange={onChange}
                                        />
                                    )}
                                />
                                {errors.sMessage && <Form.Control.Feedback type='invalid'>{errors.sMessage.message}</Form.Control.Feedback>}
                            </Form.Group>
                        </div>

                        <div className='mt-3'>
                            <Button type='submit' className='button'>
                                <FaPaperPlane className='button-icon' /> Send Message
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Contact
