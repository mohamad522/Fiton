import React,{Component} from 'react'
import breakfast from '../images/breakfast.jpeg';

import "../css/mealP.css";
import "../css/healthy.css";
class Breakfast extends Component{
    render(){
  return (
  <>
<div>
  
   <img src={breakfast} alt="Banner" id="img2" className='h-img'/>
   
   <div id="banner-overlay">
     <div >
          <p id="banner-text">breakfast</p>
          </div>
          </div>
          
   </div>
  <p>
  Breakfast is a great way to start your day.​

While some people prefer to skip breakfast, others need a source of energy to get going.​

If you enjoy breakfast, choosing nutritious foods may provide long-lasting energy and keep you full for hours. These foods are typically high in fiber, protein, healthy fats, and micronutrients.​

While it’s best to avoid unhealthy options that are high in sugar, refined carbs, and additives, it’s not always easy to know what to choose. As such, the list below will help you build a healthy breakfast.​

Here are some of the best foods and drinks to enjoy in the morning
  </p>
   <div>
     <ul className='h-ul'><li className='h-li'>
         <h5>1-Eggs</h5>
         <p>Eggs are high in protein and several important nutrients. They may promote fullness and help lower your calorie intake later in the day.​</p>
         </li>
         <li className='h-li'>
         <h5>2-Greek Yogurt</h5>
         <p>Greek yogurt is not only high in protein and low in calories, but certain types are also high in probiotics, which support gut health.</p>
         </li>
         <li className='h-li'>
         <h5>3-Coffee</h5>
         <p>The caffeine in coffee promotes alertness and enhances physical and mental performance. Drinking coffee regularly is associated with a lower risk of illnesses.</p>
         </li>
         <li className='h-li'>
         <h5>4-Oat Meal​</h5>
         <p>Oatmeal is rich in beta glucan, a type of fiber that may lower cholesterol levels and increase feelings of fullness. It also contains many vitamins and minerals.​.​</p>
         </li>
         <li className='h-li'>
         <h5>5-Berries​</h5>
         <p>Berries are high in fiber and low in calories. They’re also rich in antioxidants that may decrease your risk of disease.​</p>
         </li></ul>
         <li className='h-li'>
         <h5>6- Cottage Cheese​</h5>
         <p>Cottage cheese is high in protein, which may help keep you full and reduce hunger. Common breakfast toppings include fresh fruit, veggies, seeds, and granola.​</p>
         </li>
         <li className='h-li'>
         <h5>7-Whole Wheat Toast​</h5>
         <p>You can spread any number of nutritious toppings on whole wheat toast, including:​

fried eggs and tomatoes,avocado and chili flakes,peanut butter and banana,cottage cheese and strawberries,sliced figs and honey,Tuna,sliced turkey or chicken,baked beans,egg salad…​

Whole wheat toast is a good source of fiber. Plus, you can top it with a wide variety of nutritious spreads.​</p>
         </li>
     </div>
    
  </>
  )
  }
  }
export default Breakfast