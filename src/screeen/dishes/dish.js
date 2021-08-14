import React from 'react'
import './dish.css'
import { NavLink } from 'react-router-dom';
import Nav from '../../component/navbar/navbar';
import i from '../../assets/1.jpg'
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpeg'
import p3 from '../../assets/p3.jpeg'
import p4 from '../../assets/p4.jpeg'
import p5 from '../../assets/p5.jpeg'
import p6 from '../../assets/p6.jpg'
import star from '../../assets/star.png'
import Footer from '../footer/footer';
function Dish(){
    return(
<div>

<div>
    <div>
        <Nav/>
    </div>

<div className="seccontai">

    <div class="text-center">
        <h1 className="f">our <span >dishes</span></h1>
    </div>


<div class="boxesContainer">

  <div class="cardBoxl">
    <div class="cardl">
      <div class="front">
      <img src={p1} className="ilo"/>
       
      </div>
      <div class="back">
        <h1>Dish 1</h1><hr/>
        <h2>Rs 10 to 100 </h2>
        <img src={star} className="star"/><hr/><h1 className="fri"><i>Fries</i></h1>
      </div>
    </div>
  </div>

  <div class="cardBoxl">
    <div class="cardl">
      <div class="front">
      <img src={p2} className="ilo"/>
      </div>
      <div class="back">
      <h1>Dish 2</h1><hr/>
      <h2>Rs 40 to 60 </h2>
      <img src={star} className="star"/><hr/><h1 className="fri"><i>Burger</i></h1>
      </div>
    </div>
  </div>

  <div class="cardBoxl">
    <div class="cardl">
      <div class="front">
      <img src={p3} className="ilo"/>
      </div>
      <div class="back">
      <h1>Dish 3</h1><hr/>
      <h2>Rs 10 </h2>
      <img src={star} className="star"/><hr/><h1 className="fri"><i>Roll</i></h1>
      </div>
    </div>
  </div>

 



<div class="cardBoxl">
    <div class="cardl">
      <div class="front">
      <img src={p4} className="ilo"/>
      </div>
      <div class="back">
      <h1>Dish 4</h1><hr/>
      <h2>Rs 05 </h2>
      <img src={star} className="star"/><hr/><h1 className="fri"><i>Alo Chap</i></h1>
      </div>
    </div>
  </div>

  <div class="cardBoxl">
    <div class="cardl">
      <div class="front">
      <img src={p5} className="ilo"/>
      </div>
      <div class="back">
      <h1>Dish 5</h1><hr/>
      <h2>Rs 05 </h2>
      <img src={star} className="star"/><hr/><h1 className="fri"><i>Kachori</i></h1>
      </div>
    </div>
  </div>

  <div class="cardBoxl">
    <div class="cardl">
      <div class="front">
      <img src={p6} className="ilo"/>
      </div>
      <div class="back">
      <h1>Dish 6</h1><hr/>
      <h2>Rs 05 </h2>
     <img src={star} className="star"/><hr/><h1 className="fri"><i>Samose</i></h1>
      </div>
    </div>
  </div>


  

 
</div>

</div>


</div>



</div>
    )
}
export default Dish;