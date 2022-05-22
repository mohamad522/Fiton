import React,{Component} from 'react'
import hm1 from '../images/hm1.jpeg';
import egg from '../images/egg.jpeg';
import legume1 from '../images/legume1.jpeg';
import legume2 from '../images/legume2.jpeg';
import legume3 from '../images/legume3.jpeg';
import beans from '../images/beans.jpeg';
import avocado from '../images/avocado.jpeg';
import tuna from '../images/tuna.jpeg';
import salmon from '../images/salmon.jpeg';
import breast from '../images/breast.jpeg';
import soups from '../images/soups.jpeg';
import "../css/mealP.css";
import "../css/healthy.css";
class MealP extends Component{
    render(){
  return (
  <>
<div>
  
   <img src={hm1} alt="Banner" id="img1" className='h-img'/>
   
   <div id="banner-overlay">
     <div >
          <p id="banner-text">HEALTHY Meal</p>
          </div>
          </div>
          
   </div>
   <div> 
     <p>Healthy bodies come in all shapes and sizes. While weight loss is not a magic bullet for health, and not everyone needs to pursue weight loss, it might be something you want to work toward to feel your healthiest.​

Coupled with regular movement, your diet can affect your health outcomes. (Just make sure to talk with a healthcare professional before making drastic changes!)​

If losing weight is your goal, these 18 foods may help support a healthy weight loss journey, according to science.​</p>
   </div>
   <div>
     <ul className='h-ul'>
       <li className='h-li'>
         <h4>1.whole Egg</h4>
          <ul className='h-ul'><li className='h-li'>Once feared for being high in cholesterol, whole eggs have been making a comeback.</li>
          <li className='h-li'>These fears were rooted in misconceptions that overlooked how your body regulates cholesterol levels.​</li></ul>
          <img src={egg} className='h-img' />
       </li>
       <li className='h-li'>
         <h4>2. Leafy greens</h4>
          <ul className='h-ul'><li className='h-li'>Leafy greens include kale, spinach, collard greens, Swiss chard, and a few others.​</li>
          <li className='h-li'>They have several properties that make them perfect for reaching or maintaining a healthy weight. For example, they pack fiber and nutrients that keep you satiated and hydrated.​.​</li></ul>
          <img src={beans} className='h-img' />
       </li>
       <li className='h-li'>
         <h4>3. Salmon</h4>
          <ul className='h-ul'><li className='h-li'>Fatty fish like salmon are incredibly nutritious and very satisfying.</li>
          <li className='h-li'>Salmon is loaded with high quality protein, healthy fats, and various important nutrients. That combination keeps you satiated and can help you reach a healthier weight​​</li></ul>
          <img src={salmon} className='h-img' />
       </li>
       <li className='h-li'>
         <h4>4. Cruciferous vegetables​</h4>
          <ul className='h-ul'><li className='h-li'>Cruciferous vegetables include broccoli, cauliflower, cabbage, and Brussels sprouts.​</li>
          <li className='h-li'>Like other vegetables, they’re high in fiber and tend to be incredibly filling.​​</li>
          <li>What’s more, these types of veggies contain decent amounts of protein. They’re not nearly as high in protein as animal foods or legumes, but still high for vegetables ​.​​</li></ul>
          <img src={legume1} className='h-img' />
       </li>
       <li className='h-li'>
         <h4>5. Chicken breast and some lean meats</h4>
          <ul className='h-ul'><li className='h-li'>Meat remains a controversial food group for many people.​</li>
          <li className='h-li'>Beyond issues of sustainability and ethics, we’re still not sure whether and how red meat raises the risk of heart disease or diabetes.</li>
          <li className='h-li'>Research on meat consumption and health outcomes has yielded low evidence of causation.​​</li>
          <li className='h-li'>That language can be confusing, and it’s often misinterpreted as a ringing endorsement to eat more meat, but it simply means that there isn’t enough evidence to say whether it causes unfavorable health outcomes</li></ul>
          
          <img src={breast} className='h-img' />
       </li>
       <li className='h-li'>
         <h4>6. Potatoes and other root vegetablesn</h4>
          <ul className='h-ul'><li className='h-li'>White potatoes seem to have fallen out of favor — possibly, at least in part, due to the rise of lower carb diets.​</li>
          <li className='h-li'>For what it’s worth, potatoes and other root vegetables have several properties that make them wonderful foods for weight loss and optimal health.​</li>
          <li className='h-li'>They contain an incredibly diverse range of nutrients — a little bit of almost everything you need.​​​</li>  </ul>
          <img src={legume2} className='h-img' />
       </li>
       <li className='h-li'>
         <h4>7. Tuna</h4>
          <ul className='h-ul'><li className='h-li'>Tuna is another satiating high protein food.​</li>
          <li className='h-li'>It’s a lean fish, meaning it has protein, which helps keep you full, as well as healthy fats. Among these healthy fats is docosahexaenoic acid (DHA), a form of omega-3 fatty acid, which may benefit your heart ​</li></ul>
          <img src={tuna} className='h-img' />
       </li>
       <li className='h-li'>
         <h4>8. Beans and legumes</h4>
          <ul className='h-ul'><li>Beans and other legumes can be beneficial for weight loss. These include lentils, black beans, kidney beans, and some others.</li>
          <li className='h-li'>Those foods tend to be high in protein and fiber, which are two nutrients that promote satiety. They also tend to contain some resistant starch ​</li></ul>
          <img src={legume3} className='h-img' />
       </li>
       <li className='h-li'>
         <h4>9. Soups</h4>
          <ul className='h-ul'><li className='h-li'>Soup can be a delicious way to increase your intake of vegetables and whole grains you may not get enough of otherwise. However, soup varieties that are cream-based or that include processed meats aren’t going to provide the same nutritional boost.</li>
          <li className='h-li'>Between the slurping, smelling, tasting, cooling, and chewing, soup takes some people longer to eat than other foods. Eating slowly may help you eat more mindfully. It could also help keep you from eating past fullness​</li></ul>
          <img src={soups} className='h-img' />
       </li>
       <li className='h-li'>
         <h4>10. Avocados</h4>
          <ul className='h-ul'><li className='h-li'>Avocados are unique fruits.​</li>
          <li className='h-li'>While most fruits are high in carbs, avocados are instead loaded with healthy fats. They’re particularly high in monounsaturated oleic acid, the same type of fat found in olive oil.​</li>
          <li className='h-li'>Despite being mostly fat, avocados also contain a lot of water and fiber, making them greatly satiating.​.​</li>
          <li className='h-li'>What’s more, they’re a perfect addition to vegetable-based salads, as studies show that their fat content can increase how much of the carotenoid antioxidants your body absorbs from vegetables. In fact, it may increase absorption by 4.6–12.6 times ​</li></ul>
          <img src={avocado} className='h-img' />
       </li>
       </ul>
     </div>
    
  </>
  )
  }
  }
export default MealP