import React from 'react'
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import { NavLink } from 'react-router-dom'
import Nav from '../navbar/navbar'

import './craousel.css'

function Craousel(){


 
    return(
      <div>
     <div> <Nav/></div>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">

  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class="col-md-8 ml-md-5 text-md-left content"> <h1 className="uni">Unique food corner</h1>
    
    <p className="thieduni"><i>enjoy the marvelous taste  <p>unique food </p></i></p>
    <NavLink to = "home2"><button className="btnuni"><i>Get start</i></button></NavLink></div>
      <img src={img1} class="d-block w-100 yz" alt="chips"/>
    </div>
    <div class="carousel-item">
    <div class="col-md-8 ml-md-5 text-md-left content"> <h1 className="uni">Unique food corner</h1>
    
    <p className="thieduni"><i>enjoy the marvelous taste  <p>unique food </p></i></p>
    <NavLink to = "/home"><button className="btnuni"> <i>Get start</i></button></NavLink></div>
      <img src={img2} class="d-block w-100 yz" alt="burger"/>
    </div>
    <div class="carousel-item">
    <div class="col-md-8 ml-md-5 text-md-left content"> <h1 className="uni">Unique food corner</h1>
    
    <p className="thieduni"><i>enjoy the marvelous taste  <p>unique food </p></i></p>
    <NavLink to = "/home"><button className="btnuni" ><i>Get start</i></button></NavLink></div>
      <img src={img3} class="d-block w-100 yz" alt="samose"/>
    </div>
  </div>
  
</div>
</div>


    )
}
export default Craousel;