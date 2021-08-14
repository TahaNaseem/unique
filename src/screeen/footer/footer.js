import React from 'react'
import './footer.css'
import ic from '../../assets/icon.png'
import { NavLink } from 'react-router-dom';
function Footer(){
    return(
<div>

<div class="footer-basic">
        <footer>
            <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="https://www.facebook.com/Unique-Food-Corner-111546740534754/"><i class="icon ion-social-facebook"></i></a></div>
            <ul class="list-inline">
            <NavLink to = "/home"style={{ color: 'black', textDecoration:'none' }}>  <li class="list-inline-item"><a href="#">Home</a></li></NavLink>
            <NavLink to = "/about"style={{ color: 'black', textDecoration:'none' }}>    <li class="list-inline-item"><a href="#">About</a></li></NavLink>
            <NavLink to = "/dish"style={{ color: 'black', textDecoration:'none' }}>   <li class="list-inline-item"><a href="#">dish</a></li></NavLink>
            <NavLink to = "/contact"style={{ color: 'black', textDecoration:'none' }}>   <li class="list-inline-item"><a href="#">Contact</a></li></NavLink>
            </ul>
            <p class="copyright">Copy right@ Taha Ansari</p>
        </footer>
    </div>

</div>
    )
}
export default Footer;