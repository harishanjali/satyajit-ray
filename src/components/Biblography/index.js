import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import leftArrow from '../../assets/images/icon/next-slider.png';//we can import image
import './index.css'

export default function Biblography() {
    var settings = {
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow:4,
        slidesToScroll: 1,
        arrows:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      };
  return (
    <div className='container mb-5'>
        <div className='row'>
            <div className='col-12 position-relative'>
                <h1 className='mt-5 head mb-5'>Browse Biblography</h1>
                <Slider {...settings}>
                    <a href='https://www.google.com' target='_blank'>
                    <div className='position-relative'>
                        <img className='carousel-card-img' src='images/8b47b32afcf31cfad265443098361207.png' alt='biblo-img'/>
                        <p className='mt-3'>A Vision of cinema</p>
                        <div className='card-arrow'>
                            →
                        </div>
                    </div>
                    </a>
                    <a href='https://www.google.com' target='_blank'>
                    <div className='position-relative'>
                        <img className='carousel-card-img' src='images/1248579655e4fa04aff2a23f597edeae.png' alt='biblo-img'/>
                        <p className='mt-3'>The complete adventure of Feluda</p>
                        <div className='card-arrow'>
                            →
                        </div>
                    </div>
                    </a>
                    <a href='https://www.google.com' target='_blank'>
                    <div className='position-relative'>
                        <img className='carousel-card-img' src='images/23acfb3eaf382e82747553dec5ccf7f4.png' alt='biblo-img'/>
                        <p className='mt-3'>The apu triology</p>
                        <div className='card-arrow'>
                            →
                        </div>
                    </div>
                    </a>
                    <a href='https://www.google.com' target='_blank'>
                    <div className='position-relative'>
                        <img className='carousel-card-img' src='images/47d5623e4b9f5ec8bed538615979a1e0.png' alt='biblo-img'/>
                        <p className='mt-3'>My Years with Apu
                        A memoir</p>
                        <div className='card-arrow'>
                            →
                        </div>
                    </div>
                    </a>
                    <a href='https://www.google.com' target='_blank'>
                    <div className='position-relative'>
                        <img className='carousel-card-img' src='images/8a35303eef4f26869934f47ad1130176.png' alt='biblo-img'/>
                        <p className='mt-3'>Our films their Films</p>
                        <div className='card-arrow'>
                            →
                        </div>
                    </div>
                    </a>
                </Slider>
            </div>
        </div>
    </div>
  )
}
