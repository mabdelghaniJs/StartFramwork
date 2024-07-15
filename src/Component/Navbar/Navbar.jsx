// import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import { useEffect } from 'react';


export default function Navbar() {
  // const [navSize, setnavSize] = useState("8rem");
  // const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    // window.scrollY > 10 ? setnavColor("#2c3e50") : setnavColor("transparent");
    // window.scrollY > 10 ? setnavSize("5rem") : setnavSize("8rem");
    let element = document.querySelector('.navbar');
    if (window.scrollY > 10) {
      element.style.padding = "8px 10px";
      // element.classList.add = "navnav";
      // document.getElementById("navbar").style.padding = "30px 10px";
          }else{
      // element.classList.remove = "navnav";
      element.style.padding = "25px 10px";
      // document.getElementById("navbar").style.padding = "80px 10px";
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;
  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  
  return <>
  <nav  style={{transition: "all .6s"}}
  className="navnav navbar navbar-expand-lg fixed-top   " >
    <div className="container">
      <Link className="navbar-brand text-white text-uppercase fw-bolder fs-2" to={'/'}>Start Framework </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" 
      aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarsExample03">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className={splitLocation[1] === "about" ? "active" : "" } >
            <Link className="nav-link nav-item me-3 text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 active rounded-3" to={'about'}>about</Link>
          </li>
          <li className={splitLocation[1] === "portfolio" ? "active" : ""}>
            <Link  className="nav-link nav-item me-3 text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 rounded-3" to={'portfolio'}>portfolio</Link>
          </li>
          {/* <li className="nav-item me-3 "> */}
          <li className={splitLocation[1] === "contact" ? "active" : ""}>
            <Link  className="nav-link nav-item me-3 text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 rounded-3" to={'contact'}>contact</Link>
          </li>
         </ul>
         </div>
    </div>
</nav>
  </>
}
