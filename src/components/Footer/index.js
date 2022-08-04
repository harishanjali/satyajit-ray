import React from 'react'
import './index.css';

export default function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-9'>
                ©2021 Satyajit ray All rights reserved
                </div>
                <div className='col-3 icons-container d-flex justify-content-between'>
                <a href='https://www.facebook.com' target='_blank'>
                <i class="bi bi-facebook"></i>
                </a>
                <a href='https://www.facebook.com' target='_blank'>
                <i class="bi bi-instagram"></i>
                </a>
                <a href='https://www.facebook.com' target='_blank'>
                <i class="bi bi-twitter"></i>
                </a>
                <a href='https://www.facebook.com' target='_blank'>
                <i class="bi bi-linkedin"></i>
                </a>
                <a href='https://www.facebook.com' target='_blank'>
                <i class="bi bi-youtube"></i>
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}
