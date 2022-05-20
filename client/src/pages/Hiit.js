import React from 'react'
import '../css/hiit.css'
import overhead from '../images/overhead.jpg'
import way from '../images/way.png'
import pushup from '../images/pushup.png'
import bentover from '../images/bentover.png'
import reversefly from '../images/reversefly.png'

const Hiit = () => {
  return (
          <div className='hiit-div'>
            <h1>1. Overhead Press</h1>
            <div className='hiit-flexcontainer'>
              <ul>
                <li className='list-numbers'>Stand with your feet about hip-width apart. Hold a weight in each hand and rest them at shoulder height,
                 with your palms facing forward and your elbows bent. This is the starting position.</li>
                <li className='list-numbers'>Press the dumbbells overhead to touch, straightening your elbows completely. Make sure to keep your core 
                engaged and hips tucked under to avoid arching your lower back as you lift your arms.</li>
                <li className='list-numbers'>Slowly bend your elbows to lower the weight back down to the starting position. This is one rep.</li>
                <li className='list-numbers'>Continue performing reps for 40 seconds.</li>
              </ul>
              <img className='workout-img' src={overhead} />
            </div>
            <hr className='padding-hr'></hr>
            <div className='hiit-div'>
              <h1>2. 3-Way Bicep Curl </h1>
              <div className='hiit-flexcontainer'>
                <ul>
                  <li className='list-numbers'>Start with your arms at your sides, holding a dumbbell in each hand with a supinated grip (palms facing up).</li>
                  <li className='list-numbers'>Curl the dumbbells to your shoulders and bring down to the starting position. This is a regular biceps curl.</li>
                  <li className='list-numbers'>Rotate your wrists to hammer grip (palms facing each other). Curl the dumbbells to your shoulders and bring down to the starting position. This is a bicep hammer curl.</li>
                  <li className='list-numbers'>Hold your arms wide at your sides with your elbows pushing in toward your ribs, palms facing up. Curl the dumbbells to your shoulders and bring down to the starting position. This is a wide-grip bicep curl.</li>
                  <li className='list-numbers'>All three moves make up one rep. Continue performing reps for 40 seconds.</li>
                </ul>
                <img className='workout-img' src={way} />
              </div>
            </div>
            <hr className='padding-hr'></hr>
            <div className='hiit-div'>
              <h1>3. Push-Up</h1>
              <div className='hiit-flexcontainer'>
                <ul>
                    <li className='list-numbers'>Start in a high plank with your palms flat, hands shoulder-width apart, shoulders stacked
                     directly above your wrists, legs extended behind you, and your core and glutes engaged.</li>
                    <li className='list-numbers'>Bend your elbows and lower your chest to the floor. Drop to your knees if needed.</li>
                    <li className='list-numbers'>Push through the palms of your hands to straighten your arms. That’s one rep.</li>
                    <li className='list-numbers'>Continue performing reps for 40 seconds.</li>
                  </ul>
                  <img className='workout-img' src={pushup} />
              </div>
            </div>
            <hr className='padding-hr'></hr>
            <div className='hiit-div'>
              <h1>4. Bent-Over Row</h1>
              <div className='hiit-flexcontainer'>
                  <ul>
                    <li className='list-numbers'>Stand with your feet hip-width apart, holding a weight in each hand with your arms at your sides.</li>
                    <li className='list-numbers'>With your core engaged, hinge forward at the hips, push your butt back, and bend your knees slightly, so that your back is no lower than parallel to the floor. (Depending on your hip mobility and hamstring flexibility, you may not be able to bend so far over.) Gaze at the ground a few inches in front of your feet to keep your neck in a comfortable position.</li>
                    <li className='list-numbers'>Do a row by pulling the weights up toward your chest, keeping your elbows hugged close to your body, and squeezing your shoulder blades for two seconds at the top of the movement. Your elbows should go past your back as you bring the weight toward your chest.</li>
                    <li className='list-numbers'>Slowly lower the weights by extending your arms toward the floor. That’s one rep.</li>
                    <li className='list-numbers'>Continue performing reps for 40 seconds.</li>
                  </ul>
                  <img className='workout-img' src={bentover} />
              </div>
            </div>
            <hr className='padding-hr'></hr>
            <div className='hiit-div'>
              <h1>5. Reverse Fly </h1>
              <div className='hiit-flexcontainer'>
                  <ul>
                    <li className='list-numbers'>Stand with your feet hip-width apart, holding a weight in each hand with your arms at your sides, palms facing in, and elbows slightly bent.</li>
                    <li className='list-numbers'>With your core engaged, hinge forward at the hips, push your butt back, and bend your knees slightly, so that your back is no lower than parallel to the floor. (Depending on your hip mobility and hamstring flexibility, you may not be able to bend so far over.) Gaze at the ground a few inches in front of your feet to keep your neck in a comfortable position.</li>
                    <li className='list-numbers'>Keeping your back flat, core tight, and elbows bent, raise your arms out to the sides until they are in line with your shoulders. Pause for a second, and then lower your arms back down to the starting position. This is one rep.</li>
                    <li className='list-numbers'>Continue performing reps for 40 seconds.</li>
                  </ul>
                  <img className='workout-img' src={reversefly} />
              </div>
            </div>
          </div>
  )
}

export default Hiit