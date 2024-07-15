import React, { useState } from 'react'
import Sitetitle from '../Sitetitle/Sitetitle';

import './Portfolio.css'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import img1 from '../../Assets/images/poert1.png'
import img2 from '../../Assets/images/port2.png'
import img3 from '../../Assets/images/port3.png'

const images = [ img1,img2,img3,img1,img2,img3]

export default function Portifolio() {
    Sitetitle ('Portfolio');

    const [data , setData] = useState ({img: '', i: 0})
    
    const viewImage = (img, i )=>{
        setData({img , i});
    }
    const imgAction= (action) => {
        if(!action){
            setData({img: '' , i: 0});
        }
    }
    // const handleCloseOvaer = event => {
    //     let elementimg = document.querySelector('#element');
    //     elementimg.style.display = "none" };

  return <>
{data.img && <div id='element'
onClick={()=> imgAction()}
style={{
    width:'100%',
    height: '100vh',
    position:'fixed',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    background: 'rgba(0,0,0,29%)',
    zIndex:9999,
}}>
    <button 
    onClick={()=> imgAction()}
    style={{
        position:'absolute',
        top:'0px', right:'10px'
    }}>X</button>
    <img src={data.img} style={{
                position:'absolute',

        top:0,
    width:'600px',
    maxWidth:'90%',
        maxHeight:'90%',
        // margin:'auto'
    }} />
</div>}




<div className="container p-5">
<div className="row">

    {/* <div className=""> */}
    {/* <div className=" "> */}
<ResponsiveMasonry columnsCountBreakPoints={{350: 1 , 750: 2 , 900: 3 }} >
                    <Masonry  gutter='20px' >
                            {images.map((image, i) => (
                            <div className="rounded-3 overflow-hidden position-relative ">
                            <img 
                                key={i}
                                src={image}
                                style={{cursor: 'pointer'  , widows:'100%' , display:'block'}}
                                alt=""
                                onClick={()=> viewImage(image, i)}
                            />
                <div onClick={()=> viewImage(image, i)}  
                className="layer__  position-absolute
                start-0  top-0 h-100 d-flex justify-content-center align-items-center bg-danger ">
                <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
                            </div>
                        ))} 
                           
                    </Masonry>
                    </ResponsiveMasonry>
                    
  
        {/* </div> */}
           
    {/* </div> */}

</div>
</div>
          
                  
  </>
}
