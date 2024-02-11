import React from 'react'
import './App.css';
import Header from './shared/component/Header';
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { Button } from 'react-bootstrap'
import AboutUs from './shared/component/About';
import Partner from './shared/component/Partner';
import Footer from './shared/component/Footer';
import Courses from './shared/component/Courses';
import Plans from './shared/component/Plans';

function App() {
  return (
    <>
     <Header />

     <section className='hero mt-3' id='hero'>
        <motion.div className='hero-content' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p  className='subtitle'><span>YogaSanskriti</span> presents</p>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0,transition: { duration: 0.8, ease: 'easeInOut' } }}>Onl<span>!</span>ne Yoga Class</motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0,transition: { duration: 0.5, ease: 'easeInOut' } }} className='benefits'><FontAwesomeIcon icon={faCircleCheck} /> Reduce pain</motion.p>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0,transition: { duration: 0.8, ease: 'easeInOut' } }} className='benefits'><FontAwesomeIcon icon={faCircleCheck} /> Improve Stenght</motion.p>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0,transition: { duration: 1, ease: 'easeInOut' } }} className='benefits'><FontAwesomeIcon icon={faCircleCheck} /> Inprove flexibilty</motion.p>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0,transition: { duration: 1.3, ease: 'easeInOut' } }} className='benefits'><FontAwesomeIcon icon={faCircleCheck} /> Inprove Range of motion</motion.p>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0,transition: { duration: 1.5, ease: 'easeInOut' } }} className='benefits'><FontAwesomeIcon icon={faCircleCheck} /> Improve cardiovascular health</motion.p>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0,transition: { duration: 1.8, ease: 'easeInOut' } }} className='benefits'><FontAwesomeIcon icon={faCircleCheck} /> Improve Balance & co-ordination</motion.p>

          <div className='btn-content'>
            <Button className='book-btn'>Book Now</Button>
          </div>
        </motion.div>
     </section>

     <section className='about' id='about'>
      <AboutUs />
     </section>

     <section className='course' id='course'>
      <Courses />
     </section>

     <section className='plan'>
      <Plans />
     </section>

     <section className='sponsor' id='sponsor'>
      <Partner />
     </section>

     <Footer />
    </>
  );
}

export default App;
