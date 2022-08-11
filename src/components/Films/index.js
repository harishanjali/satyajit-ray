import React,{useState,useEffect} from 'react'
import { RibbonContainer,  RightCornerRibbon,LeftCornerRibbon} from "react-ribbons";

import './index.css';

const films = [
    {
        id:1,
        image:'images/Image11.png',
        title:'AGNATUK',
        year:1991,
        language:'Hindi'
    },
    {
        id:2,
        image:'images/95db9f3915a51df9c7f6c5bb3e39b9a5.png',
        title:'Charulatha',
        year:1991,
        language:'Hindi'
    },
    {
        id:3,
        image:'images/91b985f892c090824db8311df1a35323.png',
        title:'GHARE-BHAIRE',
        year:1984,
        language:'Hindi'
    },
    {
        id:4,
        image:'images/9542fd0ad701d9786b8d388e5d8e5763.png',
        title:'PATHER-PANCHALI',
        year:1955,
        language:'Hindi'
    },
    {
        id:5,
        image:'images/9542fd0ad701d9786b8d388e5d8e5763.png',
        title:'PATHER-PANCHALI',
        year:1956,
        language:'Tamil'
    },
    {
        id:6,
        image:'images/91b985f892c090824db8311df1a35323.png',
        title:'GHARE-BHAIRE',
        year:1984,
        language:'Tamil'
    },
    {
        id:7,
        image:'images/95db9f3915a51df9c7f6c5bb3e39b9a5.png',
        title:'Charulatha',
        year:1991,
        language:'Tamil'
    },
    {
        id:8,
        image:'images/Image11.png',
        title:'AGNATUK',
        year:1991,
        language:'Tamil'
    },
    {
        id:9,
        image:'images/95db9f3915a51df9c7f6c5bb3e39b9a5.png',
        title:'Charulatha',
        year:1991,
        language:'Hindi'
    },
]

export default function Films() {
    const [state,setState] = useState({initialFilms:films.slice(0,4)});
    const {initialFilms} = state;
    const onChangeValue = (event)=>{
        let filteredData = films.filter(each=>{
            if(event.target.value!=='all'){
                if(each.language===event.target.value){
                    return each;
                }
            }
            else{
                return each;
            }
        });
        setState({...state,initialFilms:filteredData});
    }
  return (
    <div className='films-container d-flex'>
        <div className='container pt-5 pb-5 film__content'>
            <div className='row'>
                <div className='col-12 col-md-9'>
                    <div className='d-flex flex-column flex-md-row justify-content-md-between mb-4 align-items-start'>
                        <h1>Films</h1>
                        <div className='d-flex position-relative'>
                            <p class='special me-3 text-center'>National Film Awarded</p>
                            <div className='select-wrapper'>
                            <select name='language' onChange={onChangeValue}>
                                <option selected disabled>
                                Language
                                </option>
                                <option value='Hindi'>
                                Hindi
                                </option>
                                <option value='Tamil'>
                                Tamil
                                </option>
                                <option value='all'>
                                All
                                </option>
                            </select>
                            </div>
                            
                            {/* <div className='custom-select-arrow'></div> */}
                        </div>
                        
                    </div>
                </div>
                <div className='col-12 col-md-9'>
                    <div className='films d-flex justify-content-between flex-md-wrap'>
                        {initialFilms.map(each=>(
                            <a href='https://www.google.com' target='_blank'>
                            <div className='position-relative film-card'>
                                <span data-content={each.language}></span>
                                <img src={each.image} alt='film-img'/>
                                <p className='films-title mt-3'>{each.title}</p>
                                <p className='year'>{each.year}</p>
                            </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className='col-12'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button className='view-all-btn'>VIEW ALL</button>
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
