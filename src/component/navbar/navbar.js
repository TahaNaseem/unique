import React from 'react'
import logo from '../../assets/logo.png'
import icon from '../../assets/icon.png'
import { NavLink } from 'react-router-dom';
import Craousel from '../craousel/craousel'
import './navbar.css'
function Nav(){
    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img className="log" src={logo} /></a>
    <button class="navbar-toggler bor" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class=""><img className="i"src={icon}/></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">  <NavLink to = "/home"style={{ color: 'black', textDecoration:'none' }}><b>Home</b></NavLink></a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#"><NavLink to = "/about"style={{ color: 'black', textDecoration:'none' }}><b>About</b></NavLink></a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#"><b>Dishes</b></a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#"><b>Contact</b></a>
        </li>
      </ul>
    </div>
    
  </div>
</nav>






</div>

    )
}


export default Nav;
