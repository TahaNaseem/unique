import React from 'react'
import imge1 from '../../assets/1.jpg'
import imge2 from '../../assets/2.jpg'
import imge3 from '../../assets/3.jpg'
import Nav from '../../component/navbar/navbar'
import './home.css'

function Home(){
    return(
        <div>
            <div><Nav/></div>
<div className="backcolor">

<div class="heading text-center">
<h1>our <span>special</span></h1>
<p>I like people who love to eat. They’re the best kind in the world..</p>
</div>

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col martop">
          <div class="card shadow-sm">
            <img src={imge1} class="bd-placeholder-img card-img-top kc"/>

            <div class="card-body">
              <p class="card-text">Food is any  consumed to provide nutritional support for an organism. Food is usually of plant, animal or fungal origin, and contains essential nutrients.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                 
                </div>
 
              </div>
            </div>
          </div>
        </div>
        <div class="col martop">
          <div class="card shadow-sm">
            <img src={imge2} class="bd-placeholder-img card-img-top kc"/>

            <div class="card-body">
              <p class="card-text">The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div class="col martop">
          <div class="card shadow-sm">
          <img src={imge3} class="bd-placeholder-img card-img-top kc"/>

            <div class="card-body">
              <p class="card-text">satisfy the needs of their unique metabolisms, often evolved to fill a specific ecological niche within specific geographical contexts.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>

      
      </div>


</div>
</div>
    )
}
export default Home;