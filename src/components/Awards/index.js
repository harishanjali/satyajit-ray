import React from 'react'
import './index.css';

export default function Awards() {
  return (
    <div className='awards-container'>
        <div className='container-fluid'>
            <div className='row justify-content-between'>
              <div className='col-4'>
                <div className='awards'>
                        <img src='images/Group474.png' alt='awards-img'/>
                        <span>21 Awards</span>
                        <ul>
                          <li>Honorary awards</li>
                          <li>National film Awards</li>
                          <li>International film festival awards</li>
                          <li>Cannes Film festival awards etc.,</li>
                        </ul>
                </div>
              </div>
              <div className='col-5 d-flex text-center awards-description'>
                <p><span className='double-quotes'>“</span><br></br>When a new character appears in your tale, you must describe his looks and clothes in some detail. If you don’t, your reader may imagine certain things on his 
                own, which will probably not fit whatever you say later on.</p>
              </div>
            </div>
        </div>
    </div>
  )
}
