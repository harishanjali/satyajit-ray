import React from 'react'
import About from '../About'
import Awards from '../Awards'
import Biblography from '../Biblography'
import Films from '../Films'
import Footer from '../Footer'
import './index.css'

export default function Home() {
  return (
    <div className='position-relative'>
        <div className='banner-part'>
        <div className='logo-part'>SR</div>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-9 col-lg-5'>
                        <p className='border-start ps-3 border-3 title'>The director is the only person
                         who knows what the film is about.
                        </p>
                        <h1><span className='shri'>Shri </span>Satyajit Ray <span className='designation'>Indian film Director</span></h1>
                        <p className='time-period border pb-2'>1921-1992</p>
                    </div>
                    <div className='col-3'>
                        <div className='d-none camera-ipad-view col-md-none'>
                        <img className='img-fluid' src='images/Image10.png' alt='bg-camera'/>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='banner-image'>
                <img className='banner-image__bg' src='images/path478.png' alt='bg-banner'/>
                <img className='main-photo' src='images/MaskGroup1.png' alt='bg-main'/>
                <img className='camera-photo' src='images/Image10.png' alt='bg-camera'/>
            </div>
        </div>
        <About/>
        <Awards/>
        <Biblography/>
        <Films/>
        <Footer/>
    </div>
  )
}
