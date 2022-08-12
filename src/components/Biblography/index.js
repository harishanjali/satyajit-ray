import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import leftArrow from '../../assets/images/icon/next-slider.png';//we can import image
import './index.css'

const bibographyItems = [
    {
        id:1,
        image:'images/8b47b32afcf31cfad265443098361207.png',
        title:'A Vision of cinema'
    },
    {
        id:2,
        image:'images/1248579655e4fa04aff2a23f597edeae.png',
        title:'The complete adventure of Feluda'
    },
    {
        id:3,
        image:'images/23acfb3eaf382e82747553dec5ccf7f4.png',
        title:'The apu triology'
    },
    {
        id:4,
        image:'images/47d5623e4b9f5ec8bed538615979a1e0.png',
        title:'My Years with Apu A memoir'
    },
    {
        id:5,
        image:'images/8a35303eef4f26869934f47ad1130176.png',
        title:'Our films their Films'
    },
]

export default function Biblography() {
    var settings = {
        dots:false,
        speed: 500,
        slidesToShow:4,
        slidesToScroll: 1,
        arrows:true,
        centerMode: true,
        centerPadding:'70px',
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
    <div className='mb-5 biblography'>
        <div className='position-relative'>
            <h1 className='mt-5 head mb-5'>Browse Biblography</h1>
            <Slider {...settings}>
                {bibographyItems.map(each=>(
                    <a href='https://www.google.com' target='_blank' key={each.id}>
                    <div className='position-relative me-1'>
                        <img className='carousel-card-img' src={each.image} alt='biblo-img'/>
                        <p className='mt-3 carousel-card-title'>{each.title}</p>
                        <div className='card-arrow'>
                            →
                        </div>
                    </div>
                    </a>
                ))}
                </Slider>
        </div>
    </div>
  )
}
