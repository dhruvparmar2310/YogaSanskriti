/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css';
import Header from './shared/component/Header';
import { Button } from 'react-bootstrap'
import AboutUs from './shared/component/About';
import Partner from './shared/component/Partner';
import Footer from './shared/component/Footer';
import Courses from './shared/component/Courses';
import Plans from './shared/component/Plans';
import bgImg from './assets/img/yoga-1.jpg'
import Contact from './shared/component/Contact';

function App() {
  return (
    <>
     <Header />

     <section className='hero' id='hero'>
        <div className='hero-content'>
          <div className='ads-content'>
            <p  className='subtitle'><span>YogaSanskriti</span> presents</p>

            <h1>The top yoga and <br /> wellness platform.</h1>
            <p className='desc mt-4'>Wherever, whenever, just for you. </p>
            <p className='desc'>Spreading wellness since 2020.</p>

            <div className='btn-content mt-3'>
              <Button className='book-btn'>Book Now</Button>
            </div>
          </div>

          <div className='img-content'>
            <img src={bgImg} alt='' className='bg img-fluid' />
          </div>
        </div>

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

     <section className='contact' id='contact'>
      <Contact />
     </section>
     <Footer />
    </>
  );
}

export default App;
