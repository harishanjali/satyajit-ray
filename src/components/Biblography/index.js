import React from 'react'
import './index.css'

export default function Biblography() {
  return (
    <div className='container mb-5'>
        <div className='row'>
            <div className='col-12'>
                <h1 className='mt-5'>Browse Biblography</h1>
                <div className='slider'>
                    <div>
                        <img src='images/8b47b32afcf31cfad265443098361207.png' alt='biblo-img'/>
                        <p>A Vision of cinema</p>
                    </div>
                    <div>
                        <img src='images/1248579655e4fa04aff2a23f597edeae.png' alt='biblo-img'/>
                        <p>The complete adventure of Feluda</p>
                    </div>
                    <div>
                        <img src='images/23acfb3eaf382e82747553dec5ccf7f4.png' alt='biblo-img'/>
                        <p>The apu triology</p>
                    </div>
                    <div>
                        <img src='images/47d5623e4b9f5ec8bed538615979a1e0.png' alt='biblo-img'/>
                        <p>My Years with Apu
                        A memoir</p>
                    </div>
                    <div>
                        <img src='images/8a35303eef4f26869934f47ad1130176.png' alt='biblo-img'/>
                        <p>Our films their Films</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
