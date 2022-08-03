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

                <i class="bi bi-facebook"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-linkedin"></i>
                <i class="bi bi-youtube"></i>
                </div>
            </div>
        </div>
    </div>
  )
}
