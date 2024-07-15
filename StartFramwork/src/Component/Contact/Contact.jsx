import React from 'react'
import './Contact.css'
import Sitetitle from '../Sitetitle/Sitetitle';

export default function Contact() {
  Sitetitle ('Contact');

  return <>
   <div className="mb-4">
    <div className="pt-4">
      <app-star title="conatct section" customcolor="#2c3e50">
        <div className="text-center pt-4" style={{color: "rgb(44, 62, 80)"}}>
          <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>conatct section</h2>
            <div className="d-flex align-items-center justify-content-center mb-3 ">
              <div className="line me-3" style={{backgroundColor: "rgb(44, 62, 80)"}}>  </div>
                  <i className="fa-solid fa-star"></i>
              <div className="line ms-3" style={{backgroundColor: "rgb(44, 62, 80)"}}></div>
            </div>
        </div>
      </app-star>

  <form  className="w-50 p-3 mx-auto mt-5 ng-pristine ng-valid ng-touched">
    <label htmlFor="userName" className="position-relative top-0 __top">userName : </label>
    <input id='userName' type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched" />

    <label htmlFor="userAge" className="position-relative top-0 __top">userAge : </label>
    <input id='userAge' type="text" placeholder="userAge" name="userAge" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid" />

    <label htmlFor="userEmail" className="position-relative top-0 __top">userEmail : </label>
    <input id="userEmail" type="text" placeholder="userEmail" name="userEmail" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"/>

    <label htmlFor="userPassword" className="position-relative top-0 __top">userPassword : </label>
    <input id="userPassword" type="text" placeholder="userPassword" name="userPassword" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"/>

    <button className="btn mt-4 text-white" style={{backgroundColor: "#1abc9c"}} > send Message </button>
  </form>
  
  </div>
  </div>


  </>
}
