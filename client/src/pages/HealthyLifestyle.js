import React from 'react'
// import Banner from '../images/Banner.jpg';
// import Meal from '../images/Healthy_meal.jpg';
// import Breakfast from '../images/Healthy_breakfast.jpg';
// import f     from '../images/F.jpeg';
import "../css/healthyLifestyle.css";

const HealthyLifestyle = () => {

  return (
  <>
  {/* //  <div>
  //  <img src={Banner} alt="Banner" id="banner_size"/>
  //  <div id="banner-overlay">
  //         <p id="banner-text">HEALTHY LIFESTYLE</p>
  //         </div>
          
  //  </div>
  //  <p id="body-parag">Fitness starts with what you eat</p>
  //  <div> */}
          <section id="points-of-sale">
              <ul>
              <li>
                      {/* <img src={Meal} alt="Banner" id="banner_size"/> */}
                      <h3>Healthy Meals</h3>
                  </li>
                  <li>
                      {/* <img src={f}/> */}
                      <h3>Fat Loss</h3>
                  </li>

                  <li>
                      {/* <img src={Breakfast}/> */}
                      <h3>Healthy Breakfast</h3>
                  </li>
              </ul>
               

          </section>
      {/* //  </div> */}
  </>
  )
}
export default HealthyLifestyle