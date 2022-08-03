import React,{useState} from 'react'
import './index.css';

const aboutDetails = [
    {
        id:1,
        year:1934,
        title:'Who was Satyajit Ray?',
        image:'images/dd58ea2ae16189217754929fc90981e0.png',
        description:'When a new character appears in your tale, you must describe his looks and clothes in some detail. If you don’t, your reader may imagine certain things on his own, which will probably not fit whatever you say later on.'
    },
    {
        id:2,
        year:1934,
        title:'Who was Satyajit Ray 2?',
        image:'images/d023b1b9c03b5a5a46e1d0786b155fba.png',
        description:'When a new character appears in your tale, you must describe his looks and clothes in some detail. If you don’t, your reader may imagine certain things on his own, which will probably not fit whatever you say later on.'
    },
    {
        id:3,
        year:1934,
        title:'Who was Satyajit Ray 3',
        image:'images/3d8a9820b9e6909612c6de9e7ff91d2d.png',
        description:'When a new character appears in your tale, you must describe his looks and clothes in some detail. If you don’t, your reader may imagine certain things on his own, which will probably not fit whatever you say later on.'
    },
    {
        id:4,
        year:1934,
        title:'Who was Satyajit Ray 4?',
        image:'images/9a11aba98a11f6ca1573bceabde1d48c.png',
        description:'When a new character appears in your tale, you must describe his looks and clothes in some detail. If you don’t, your reader may imagine certain things on his own, which will probably not fit whatever you say later on.'
    },
    {
        id:5,
        year:1934,
        title:'Who was Satyajit Ray 5?',
        image:'images/de69dbdebc143da472abae57aa904ec9.png',
        description:'When a new character appears in your tale, you must describe his looks and clothes in some detail. If you don’t, your reader may imagine certain things on his own, which will probably not fit whatever you say later on.'
    },
    {
        id:6,
        year:1934,
        title:'Who was Satyajit Ray 6?',
        image:'images/58e2c31cf149e75053708610f3cee851.png',
        description:'When a new character appears in your tale, you must describe his looks and clothes in some detail. If you don’t, your reader may imagine certain things on his own, which will probably not fit whatever you say later on.'
    }
]
export default function About() {
    const initialData = aboutDetails[0]
    const {year,title,description} = initialData;
    const [state,setState] = useState({years:year,titles:title,descriptions:description})
    const showData = (id)=>{
        let requireData = aboutDetails.filter(each=>(
            each.id===id
        ))
        let updateData = requireData[0];
        const {year,title,description} = updateData;
        setState({...state,years:year,titles:title,descriptions:description});
    }
    const {years,titles,descriptions} = state;
  return (
    <div className='container pb-5'>
        <div className='row'>
            <div className='col-6'>
                <h1 className='about-head'>{titles}</h1>
            </div>
            <div className='col-6'>
                <h1>{years}</h1>
                <p className='about-description'>{descriptions}
                </p>
            </div>
            <div className='col-12'>
                <div className='d-flex justify-content-evenly'>
                {aboutDetails.map(each=>(
                    <img onClick={()=>showData(each.id)} id={each.id} className='pe-4 about-img' src={each.image} alt='about-img'/>
                ))}
                </div>
                
            </div>
        </div>
    </div>
  )
}
