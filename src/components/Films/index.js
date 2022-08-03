import React,{useState} from 'react'
import './index.css';

const films = [
    {
        id:1,
        image:'images/Image11.png',
        title:'AGNATUK',
        year:1991,
        language:'hindi'
    },
    {
        id:2,
        image:'images/95db9f3915a51df9c7f6c5bb3e39b9a5.png',
        title:'Charulatha',
        year:1991,
        language:'hindi'
    },
    {
        id:3,
        image:'images/91b985f892c090824db8311df1a35323.png',
        title:'GHARE-BHAIRE',
        year:1984,
        language:'hindi'
    },
    {
        id:4,
        image:'images/9542fd0ad701d9786b8d388e5d8e5763.png',
        title:'PATHER-PANCHALI',
        year:1955,
        language:'hindi'
    },
]

export default function Films() {
    const [state,setState] = useState({initialFilms:films});
    const {initialFilms} = state;
  return (
    <div className='films-container d-flex'>
        <div className='container pt-5 pb-5'>
            <div className='row'>
                <div className='col-9'>
                    <div className='d-flex justify-content-between mb-4'>
                        <h1>Films</h1>
                        <div className='d-flex'>
                            <p class='special me-3'>National Film Awarded</p>
                            <select name='language' className='form-select'>
                                <option selected>
                                Language
                                </option>
                                <option value='hindi'>
                                Hindi
                                </option>
                                <option value='tamil'>
                                Tamil
                                </option>
                            </select>
                        </div>
                        
                    </div>
                </div>
                <div className='col-9'>
                    <div className='films d-flex justify-content-between'>
                        {initialFilms.map(each=>(
                            <div>
                                <img src={each.image} alt='film-img'/>
                                <p>{each.title}</p>
                                <p>{each.year}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='col-12'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button>VIEW ALL</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='films-part'>
            <img className='camera-img' src='images/Image10.png' alt='bg'/>
        </div>
    </div>
  )
}
