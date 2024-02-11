import React from 'react'
import maaKrupaLogo from '../../../assets/img/sponsors/maaKrupa.png'
import physioBrotherLogo from '../../../assets/img/sponsors/thePhysioBrothers.png'
import fitIndiaLogo from '../../../assets/img/sponsors/fit-india-logo.png'
import indianFederationLogo from '../../../assets/img/sponsors/indian-federation-of-yoga.png'
import GujYogBoardLogo from '../../../assets/img/sponsors/guj-yo-borad-logo.png'
import MINAyushLogo from '../../../assets/img/sponsors/Ministry-of-AYUSH-logo-750x400.jpg'
import WHOLogo from '../../../assets/img/sponsors/WHO-Logo.png'


const Partner = () => {
    return (
        <>
            <h1 className='section-title' data-heading='Our'>Sponsors</h1>

            <div className='sponsor-content container'>
                <div className='brand'>
                    <a href='https://dhruvparmar2310.github.io/MaaKrupa/' title='MaaKrupa Hardware & Machine Tools'>
                        <img src={maaKrupaLogo} alt="MaaKrupa Logo" className='img-fluid' />
                    </a>
                </div>
                <div className='brand'>
                    <a href='https://dhruvparmar2310.github.io/thephysiobrothers/' title='ThePhysioBrothers'>
                        <img src={physioBrotherLogo} alt="ThePhysioBrothers Logo" />
                    </a>
                </div>
            </div>

            <h1 className='section-title mt-5' data-heading='Got'>Inspired By</h1>

            <div className='sponsor-content container'>
                <div className='inspired-brand'>
                    <div className='brand'>
                        <img src={GujYogBoardLogo} alt="Gujarat State Yog Board Logo" title='Gujarat State Yog Board' className='img-fluid' />
                    </div>
                    <div className='brand'>
                        <img src={fitIndiaLogo} alt="Fit India Logo" title='Fit India' />
                    </div>
                    <div className='brand'>
                        <img src={indianFederationLogo} alt="Indian Federation Logo" title='Indian Federation of Yoga' />
                    </div>
                    <div className='brand'>
                        <img src={MINAyushLogo} alt="Ministry of Ayush Logo" title='Ministry of Ayush' className='img-fluid' />
                    </div>
                    <div className='brand'>
                        <img src={WHOLogo} alt="World Health Organization Logo" title='World Health Organization | WHO' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partner
