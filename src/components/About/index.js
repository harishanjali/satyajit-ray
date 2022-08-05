import React,{useState} from 'react'
import './index.css';

const initialData = [
    {
        id:1,
        year:1934,
        title:'Who was Satyajit Ray more more more?',
        image:'images/dd58ea2ae16189217754929fc90981e0.png',
        isActive:true,
        description:'When a new character appears in your tale, you must describe his looks and clothes in some detail. If you don’t, your reader may imagine certain things on his own, which will probably not fit whatever you say later on.'
    },
    {
        id:2,
        year:1934,
        title:'Who was Satyajit Ray 2?',
        image:'images/d023b1b9c03b5a5a46e1d0786b155fba.png',
        isActive:false,
        description:'When a new character appears in your tale, you must describe his looks and clothes in some detail. If you don’t, your reader may imagine certain things on his own, which will probably not fit whatever you say later on.'
    },
    {
        id:3,
        year:1934,
        title:'Who was Satyajit Ray 3',
        image:'images/3d8a9820b9e6909612c6de9e7ff91d2d.png',
        isActive:false,
        description:'When a new character appears in your tale, you must describe his looks and clothes in some detail. If you don’t, your reader may imagine certain things on his own, which will probably not fit whatever you say later on.'
    },
    {
        id:4,
        year:1934,
        title:'Who was Satyajit Ray 4?',
        image:'images/9a11aba98a11f6ca1573bceabde1d48c.png',
        isActive:false,
        description:'When a new character appears in your tale, you must describe his looks and clothes in some detail. If you don’t, your reader may imagine certain things on his own, which will probably not fit whatever you say later on.'
    },
    {
        id:5,
        year:1934,
        title:'Who was Satyajit Ray 5?',
        image:'images/de69dbdebc143da472abae57aa904ec9.png',
        isActive:false,
        description:'When a new character appears in your tale, you must describe his looks and clothes in some detail. If you don’t, your reader may imagine certain things on his own, which will probably not fit whatever you say later on.'
    },
    {
        id:6,
        year:1934,
        title:'Who was Satyajit Ray 6?',
        image:'images/58e2c31cf149e75053708610f3cee851.png',
        isActive:false,
        description:'When a new character appears in your tale, you must describe his looks and clothes in some detail. If you don’t, your reader may imagine certain things on his own, which will probably not fit whatever you say later on.'
    }
]
export default function About() {
    const startData = initialData[0]
    const {year,title,description} = startData;
    const [state,setState] = useState({years:year,titles:title,descriptions:description})
    const [aboutData,setData] = useState(initialData)
    const showData = (id)=>{
        let requireData = initialData.filter(each=>(
            each.id===id
        ))
        let updateData = requireData[0];
        const {year,title,description} = updateData;
        setState({...state,years:year,titles:title,descriptions:description});
        const getUpdate = (each)=>{
            if(each.id===id){
                each.isActive = true;
            }
            else{
                each.isActive = false;
            }
        }

        let updatedList = initialData.map(getUpdate)
        // setData(updatedList);
    }
    const {years,titles,descriptions} = state;
  return (
    <div className='position-relative'>
        {/* <div className='dotted-line'></div> */}
         <div className='container pb-5'>
            <div className='row'>
                <div className='col-6'>
                    <h1 className='about-head text'>{titles}</h1>
                </div>
                <div className='col-6 border-start'>
                    <h1>{years}</h1>
                    <p className='about-description'>{descriptions}
                    </p>
                </div>
                
            </div>
        </div>
        <div className='dashed-line'>
                    <ul className='about-items d-flex justify-content-between mt-5 container'>
                    {aboutData.map(each=>(
                        <li onClick={()=>showData(each.id)} key={`about${each.id}`} className={each.isActive?'active-about-item about-item d-flex flex-column justify-content-center align-items-center':'about-item d-flex flex-column justify-content-center align-items-center'}>
                            {each.isActive?<img className='about-img-active' src={each.image} alt='about-img'/>:<img src={each.image} alt='about-img'/>}
                        </li>
                    ))}
                    </ul>
                </div>
    </div>
   
  )
}
