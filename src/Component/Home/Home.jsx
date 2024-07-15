import React from 'react'
import avatimg from '../../Assets/images/avataaars.svg'
import './Home.css'
import Sitetitle from '../Sitetitle/Sitetitle';
// import App from '../../App';


export default function Home() {
    Sitetitle ('Home');

  return <>
  {/* text-white */}
{/* <app-home> */}
    <div className="home d-flex justify-content-center align-items-center text-white ">
        <div className="text-center">
            <img src={avatimg} alt="" className="mb-3" />
            <app-star>
                <div className="text-center pt-4 text-white  ">
                    <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>start Framework</h2>
                    <div className="d-flex align-items-center justify-content-center mb-3 ">
                        <div className="line me-3">  </div>
                            <i className="fa-solid fa-star"></i>
                        <div className="line ms-3"></div>
                    </div>
                </div>
            </app-star>
            <div className="text-white">Graphic Artist - Web Designer - Illustrator</div>
        </div>
    </div>
{/* </app-home> */}

  
  </>
}
