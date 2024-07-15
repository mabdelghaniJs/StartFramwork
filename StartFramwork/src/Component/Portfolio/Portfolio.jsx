import React from 'react'
import Sitetitle from '../Sitetitle/Sitetitle';
import img1 from '../../Assets/images/poert1.png'
import img2 from '../../Assets/images/port2.png'
import img3 from '../../Assets/images/port3.png'
import './Portfolio.css'

export default function Portfolio() {
  
  Sitetitle ('Portfolio');
  const handleClick = event => {
    let elementimg = document.querySelector('#element'); 
    elementimg.style.display = "flex"};
    const handleClick2 = event => {
     let elementimg2 = document.querySelector('#element2');
     elementimg2.style.display = "flex"};
     const handleClick3 = event => {
      let elementimg3 = document.querySelector('#element3');
      elementimg3.style.display = "flex"};
      const handleClick4 = event => {
        let elementimg4 = document.querySelector('#element4');
        elementimg4.style.display = "flex"};
        const handleClick5 = event => {
          let elementimg5 = document.querySelector('#element5');
          elementimg5.style.display = "flex"};
          const handleClick6 = event => {
            let elementimg6 = document.querySelector('#element6');
            elementimg6.style.display = "flex"};

  const handleClick1 = event => {
    let elementimg = document.querySelector('#element');
    elementimg.style.display = "none" };
    const handleClick22 = event => {
      let elementimg2 = document.querySelector('#element2');
      elementimg2.style.display = "none"};
      const handleClick33 = event => {
       let elementimg3 = document.querySelector('#element3');
       elementimg3.style.display = "none"};
       const handleClick44 = event => {
         let elementimg4 = document.querySelector('#element4');
         elementimg4.style.display = "none"};
         const handleClick55 = event => {
           let elementimg5 = document.querySelector('#element5');
           elementimg5.style.display = "none"};
           const handleClick66 = event => {
             let elementimg6 = document.querySelector('#element6');
             elementimg6.style.display = "none"};
  

  return <>
  <div className="mb-4" >
    <div className="pt-4">
      <app-star title="portfolio component" customcolor="#2c3e50">
        <div className="text-center pt-4" style={{color: "rgb(44, 62, 80)"}}>
          <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>portfolio component</h2>
            <div className="d-flex align-items-center justify-content-center mb-3 ">
              <div className="line me-3" style={{backgroundColor: "rgb(44, 62, 80)"}}>  </div>
                  <i className="fa-solid fa-star"></i>
              <div className="line ms-3" style={{backgroundColor: "rgb(44, 62, 80)"}}></div>
            </div>
        </div>
      </app-star>
      <div className="container" >
        <div className="row g-5 ">

          <div className="col-lg-4 col-md-6 c"  >
            <div className="rounded-3 overflow-hidden position-relative  " >
              <img className='w-100 rounded-3' src={img1} alt="" />
              <div onClick={handleClick}  className="layer__  position-absolute  start-0  w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 c">
            <div className="rounded-3 overflow-hidden position-relative ">
              <img className='w-100 rounded-3' src={img2} alt="" />
              <div onClick={handleClick2} className="layer__  position-absolute  start-0  w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 c">
            <div className="rounded-3 overflow-hidden position-relative ">
              <img className='w-100 rounded-3' src={img3} alt="" />
              <div onClick={handleClick3} className="layer__  position-absolute  start-0  w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 c">
            <div className="rounded-3 overflow-hidden position-relative ">
              <img className='w-100 rounded-3' src={img1} alt="" />
              <div onClick={handleClick4} className="layer__  position-absolute  start-0  w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 c">
            <div className="rounded-3 overflow-hidden position-relative ">
              <img className='w-100 rounded-3' src={img2} alt="" />
              <div onClick={handleClick5} className="layer__  position-absolute  start-0  w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 c">
            <div className="rounded-3 overflow-hidden position-relative ">
              <img className='w-100 rounded-3' src={img3} alt="" />
              <div onClick={handleClick6} className="layer__  position-absolute  start-0  w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
            </div>
          </div>

          {/* <div className="col-lg-4 col-md-6 c">
            <div className="rounded-3 overflow-hidden position-relative ">
              <img className='w-100 rounded-3' src={img3} alt="" data-bs-toggle="modal" data-bs-target="#imageExample"/>
              <div className="modal fade" id='imageExample' tabIndex="-1" araia-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body">
                      <button type='button' className="btn-close" 
                      data-bs-dismiss="modal" arai-label="Close"> </button>
                      <img src={img3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="layer__  position-absolute  start-0  w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </div>
   <div onClick={handleClick1}  id='element' className="hide model__ position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25  justify-content-center align-items-center">
      <img className='modalimg' src={img1} alt="" />
    </div>

    <div onClick={handleClick22}  id='element2' className="hide model__ position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25  justify-content-center align-items-center">
      <img className='modalimg' src={img2} alt="" />
    </div>

    <div onClick={handleClick33}  id='element3' className="hide model__ position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25  justify-content-center align-items-center">
      <img className='modalimg' src={img3} alt="" />
    </div>
    <div onClick={handleClick44}  id='element4' className="hide model__ position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25  justify-content-center align-items-center">
      <img className='modalimg' src={img1} alt="" />
    </div>
    <div onClick={handleClick55}  id='element5' className="hide model__ position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25  justify-content-center align-items-center">
      <img className='modalimg' src={img2} alt="" />
    </div>
    <div onClick={handleClick66}  id='element6' className="hide model__ position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25  justify-content-center align-items-center">
      <img className='modalimg' src={img3} alt="" />
    </div>
  </div>
  
  </>
}
