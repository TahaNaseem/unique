import React from 'react'
import './contact.css'
import Nav from '../../component/navbar/navbar';
import banner from '../../assets/banner.png'

import Footer from '../footer/footer';

function Contact(){
    return(
<div>

<div><Nav/>
</div>

<div className="maicontact">

<div class=" text-center">
    <h1 className="ab"><span>Contact</span> us</h1>
    </div>

<img src={banner} className="ban" />


<div>

<div class="row featurette conmap">
      <div class="col-md-7 conmap">
        <h2 class="featurette-heading">Contact us page <span class="text-muted">It’ll blow your mind.</span></h2>
        <p class="lead">Ideally, a contact page should include both an email address and a contact form for visitors to fill out. You may also choose to include a business address, phone number, or specific employee/department contact information.</p>
      </div>
      <div class="col-md-5">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14468.42943295544!2d66.98629393827953!3d24.962461736584796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb36bfdcc410d65%3A0x9ef5cf4f58cbfa63!2sUnique%20Food%20Corner!5e0!3m2!1sen!2s!4v1628858172846!5m2!1sen!2s" className="mapwidth"></iframe>

      </div>
    </div>


</div>







</div>
<Footer/>
</div>
    )
}

export default Contact;
