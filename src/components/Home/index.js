import React from 'react'
import About from '../About'
import Awards from '../Awards'
import Biblography from '../Biblography'
import Films from '../Films'
import Footer from '../Footer'
import './index.css'

export default function Home() {
  return (
    <div>
        <div className='banner-part'>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-5'>
                        <p className='border-start ps-3 border-3'>The director is the only person
                         who knows what the film is about.
                        </p>
                        <h1><span className='shri'>Shri </span>Satyajit Ray <span className='designation'>Indian film Director</span></h1>
                        <p className='time-period border pb-2'>1921-1992</p>
                    </div>
                </div>
            </div>
            <div className='banner-image'>
                <img className='banner-image__bg' src='images/Path478.png' alt='bg'/>
                <img className='main-photo' src='images/MaskGroup1.png' alt='bg'/>
                <img className='camera-photo' src='images/Image10.png' alt='bg'/>
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
