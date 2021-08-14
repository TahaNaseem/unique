import React from 'react'
import './aboutus.css'
import { NavLink } from 'react-router-dom';
import Nav from '../../component/navbar/navbar'
import image1 from '../../assets/p1.jpg'
import image2 from '../../assets/p2.jpeg'
import image3 from '../../assets/p3.jpeg'
import Footer from '../footer/footer';
function About(){
    return(
       
<div>

<div>
 <Nav/>
 </div>
 

<div className="maindivhe">

<div class=" text-center">
    <h1 className="ab"><span>about</span> us</h1>
    </div>

<div class="row">
      <div class="col-lg-4">
        <img src={image1} className="abim"/>
        <h2>Fries</h2>
        <p>Welcome to unique food corner, your number one source for all things [product]. We're dedicated to providing you the very best of [product], with an emphasis on [store characteristic 1], [store characteristic 2], [store characteristic 3].
        Founded in [year] by [founder name], unique food corner has come a long way from its beginnings in [starting location]. When [founder name] first started out, [his/her/their].</p>

      </div>
      <div class="col-lg-4">
      <img src={image2} className="abim"/>

        <h2>Burger</h2>
        <p>Welcome to unique food corner, your number one source for all things [product]. We're dedicated to providing you the very best of [product], with an emphasis on [store characteristic 1], [store characteristic 2], [store characteristic 3].
        Founded in [year] by [founder name], unique food corner has come a long way from its beginnings in [starting location]. When [founder name] first started out, [his/her/their].</p>
       
      </div>
      <div class="col-lg-4">
      <img src={image3} className="abim"/>

        <h2>Somose</h2>
        <p>Welcome to unique food corner, your number one source for all things [product]. We're dedicated to providing you the very best of [product], with an emphasis on [store characteristic 1], [store characteristic 2], [store characteristic 3].
        Founded in [year] by [founder name], unique food corner has come a long way from its beginnings in [starting location]. When [founder name] first started out, [his/her/their]..</p>
      
      </div>
    </div>




</div>
<Footer/>
</div>


    )
}
export default About;