import React from 'react'
import '../css/balanceddiet.css'
import healthymeals2 from '../images/healthymeals2.png'
import healthymeals3 from '../images/healthymeals3.webp'
import healthymeals4 from '../images/healthymeals4.png'
import healthymeals5 from '../images/healthymeals5.jpg'
import healthymeals7 from '../images/healthymeals7.jpg'
import healthymeals8 from '../images/healthymeals8.jpg'
import healthymeals9 from '../images/healthymeals9.jpg'
import healthymeals10 from '../images/healthymeals10.jpg'
import healthymeals11 from '../images/healthymeals11.webp'
import healthymeals12 from '../images/healthymeals12.png'

const BalancedDiet = () => {
  return (
    <div className='balenced-diet-bg'>
      <div>
        <h1 className='balencedDiet-title'>Balenced Diet</h1>
        <div className='introduction-paragraph'>
          <p>Healthy bodies come in all shapes and sizes. While weight loss is not a magic bullet for health, and not everyone needs to pursue weight loss, it might be something you want to work toward to feel your healthiest.</p>
          <p>Coupled with regular movement, your diet can affect your health outcomes. (Just make sure to talk with a healthcare professional before making drastic changes!)</p>
          <p>If losing weight is your goal, these 18 foods may help support a healthy weight loss journey, according to science.</p>
        </div>
        <hr className='padding-hr'></hr>
        <div>
          <div>
            <h1 className='title-whole-egg'>1. Whole Eggs</h1>
            <div className='flexcontainer'>
              <ul>
                <li className='list-numbers'>Once feared for being high in cholesterol, whole eggs have been making a comeback.</li>
                <li className='list-numbers'>These fears were rooted in misconceptions that overlooked how your body regulates cholesterol levels.</li>
              </ul>
              <img className='meals-img' src={healthymeals2} />
            </div>
            <hr className='padding-hr'></hr>
            <div>
              <h1 className='title-whole-egg'>2. Leafy greens</h1>
              <div className='flexcontainer'>
                <ul>
                  <li className='list-numbers'>Leafy greens include kale, spinach, collard greens, Swiss chard, and a few others.</li>
                  <li className='list-numbers'>They have several properties that make them perfect for reaching or maintaining a healthy weight. For example, they pack fiber and nutrients that keep you satiated and hydrated.</li>
                </ul>
                <img className='meals-img' src={healthymeals3} />
              </div>
            </div>
            <hr className='padding-hr'></hr>
            <div>
              <h1 className='title-whole-egg'>3. Salmon</h1>
              <div className='flexcontainer'>
                <ul>
                    <li className='list-numbers'>Fatty fish like salmon are incredibly nutritious and very satisfying.</li>
                    <li className='list-numbers'>Salmon is loaded with high quality protein, healthy fats, and various important nutrients. That combination keeps you satiated and can help you reach a healthier weight</li>
                  </ul>
                  <img className='meals-img' src={healthymeals4} />
              </div>
            </div>
            <hr className='padding-hr'></hr>
            <div>
              <h1 className='title-whole-egg'>4. Cruciferous vegetables</h1>
              <div className='flexcontainer'>
                  <ul>
                    <li className='list-numbers'>Cruciferous vegetables include broccoli, cauliflower, cabbage, and Brussels sprouts.</li>
                    <li className='list-numbers'>Like other vegetables, they’re high in fiber and tend to be incredibly filling.</li>
                    <li className='list-numbers'>What’s more, these types of veggies contain decent amounts of protein. They’re not nearly as high in protein as animal foods or legumes, but still high for vegetables </li>
                  </ul>
                  <img className='meals-img' src={healthymeals5} />
              </div>
            </div>
            <hr className='padding-hr'></hr>
            <div>
              <h1 className='title-whole-egg'>5. Chicken breast and some lean meats</h1>
              <div className='flexcontainer'>
                  <ul>
                    <li className='list-numbers'>Meat remains a controversial food group for many people.</li>
                    <li className='list-numbers'>Beyond issues of sustainability and ethics, we’re still not sure whether and how red meat raises the risk of heart disease or diabetes.</li>
                    <li className='list-numbers'>Research on meat consumption and health outcomes has yielded low evidence of causation.</li>
                    <li className='list-numbers'>That language can be confusing, and it’s often misinterpreted as a ringing endorsement to eat more meat, but it simply means that there isn’t enough evidence to say whether it causes unfavorable health outcomes</li>
                  </ul>
                  <img className='meals-img' src={healthymeals7} />
              </div>
            </div>
            <hr className='padding-hr'></hr>
            <div>
              <h1 className='title-whole-egg'>6. Potatoes and other root vegetables</h1>
              <div className='flexcontainer'>
                <ul>
                  <li className='list-numbers'>White potatoes seem to have fallen out of favor — possibly, at least in part, due to the rise of lower carb diets.</li>
                  <li className='list-numbers'>For what it’s worth, potatoes and other root vegetables have several properties that make them wonderful foods for weight loss and optimal health.</li>
                  <li className='list-numbers'>They contain an incredibly diverse range of nutrients — a little bit of almost everything you need.</li>
                </ul>
                <img className='meals-img' src={healthymeals8} />
              </div>
            </div>
            <hr className='padding-hr'></hr>
            <div>
              <h1 className='title-whole-egg'>7. Tuna</h1>
              <div className='flexcontainer'>
                <ul>
                  <li className='list-numbers'>Tuna is another satiating high protein food.</li>
                  <li className='list-numbers'>It’s a lean fish, meaning it has protein, which helps keep you full, as well as healthy fats. Among these healthy fats is docosahexaenoic acid (DHA), a form of omega-3 fatty acid, which may benefit your heart </li>
                </ul>
                <img className='meals-img' src={healthymeals9} />
              </div>
            </div>
            <hr className='padding-hr'></hr>
            <div>
              <h1 className='title-whole-egg'>8. Beans and legumes</h1>
              <div className='flexcontainer'>
                <ul>
                  <li className='list-numbers'>Beans and other legumes can be beneficial for weight loss. These include lentils, black beans, kidney beans, and some others.</li>
                  <li className='list-numbers'>Those foods tend to be high in protein and fiber, which are two nutrients that promote satiety. They also tend to contain some resistant starch </li>
                </ul>
                <img className='meals-img' src={healthymeals10} />
              </div>
            </div>
            <hr className='padding-hr'></hr>
            <div>
              <h1 className='title-whole-egg'>9. Soups</h1>
              <div className='flexcontainer'>
                <ul>
                  <li className='list-numbers'>Soup can be a delicious way to increase your intake of vegetables and whole grains you may not get enough of otherwise. However, soup varieties that are cream-based or that include processed meats aren’t going to provide the same nutritional boost.</li>
                  <li className='list-numbers'>Between the slurping, smelling, tasting, cooling, and chewing, soup takes some people longer to eat than other foods. Eating slowly may help you eat more mindfully. It could also help keep you from eating past fullness</li>
                </ul>
                <img className='meals-img' src={healthymeals11} />
              </div>
            </div>
            <hr className='padding-hr'></hr>
            <div>
              <h1 className='title-whole-egg'>10. Avocados</h1>
              <div className='flexcontainer'>
                <ul>
                  <li className='list-numbers'>Avocados are unique fruits.</li>
                  <li className='list-numbers'>While most fruits are high in carbs, avocados are instead loaded with healthy fats. They’re particularly high in monounsaturated oleic acid, the same type of fat found in olive oil.</li>
                  <li className='list-numbers'>Despite being mostly fat, avocados also contain a lot of water and fiber, making them greatly satiating.</li>
                  <li className='list-numbers'>What’s more, they’re a perfect addition to vegetable-based salads, as studies show that their fat content can increase how much of the carotenoid antioxidants your body absorbs from vegetables. In fact, it may increase absorption by 4.6–12.6 times </li>
                </ul>
                <img className='meals-img' src={healthymeals12} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BalancedDiet