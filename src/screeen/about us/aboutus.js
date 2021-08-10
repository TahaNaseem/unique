import React from 'react'
import './aboutus.css'
import { NavLink } from 'react-router-dom';
import Nav from '../../component/navbar/navbar'
import men from '../../assets/men.png'

function About(){
    return(
       
<div>

<div>
 <Nav/>
 </div>
 

<div className="maindivhe">

<div class="heading text-center">
    <h1><span>about</span>us</h1>
    </div>

<div class="row">
<div class="col-lg-7  cont">

   <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi recusandae iusto, perferendis earum laboriosam rerum et quisquam iste vel commodi corporis praesentium porro impedit ullam!</i></p>
            <p><i>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci iure aliquam illum quaerat quia voluptate.</i></p>
            <a href="#"><button>learn more</button></a>
</div>


<div class="col-lg-5 ">

<img className="imch" src={men} alt="men"/>

</div>

</div>

</div>

</div>
    )
}
export default About;