import React from 'react'
import '../css/jointsHarming.css'
import JointsHarming2 from '../images/harmingJoints2.jpg'
import JointsHarming3 from '../images/jointsHarming3.png'
import JointsHarming4 from '../images/jointsHarming4.png'
import JointsHarming5 from '../images/jointsHarming5.png'
import JointsHarming6 from '../images/jointsHarming6.png'

const JointsHarming = () => {
  return (
    <div className='jointharming-bg'>
      <h1 className='jh-title'>5 Exercise Mistakes Harming Your Joints</h1>
      <div className='mistakes-block'>
        <h2>1. Skipping Strength Training</h2>
        <div className='flexcontainer'>
          <ul>
            <li>Cardio exercises, such as running or cycling, are great additions to your workout routine, but if you are skipping dedicated workouts to lifting weights.</li>
            <li>"Strength training is essential not only for aesthetic reasons but also for optimal health and longevity," says physical therapist Grayson Wickham. "Being strong will help you decrease your chances of pain and injury. This is achieved by creating resilient joints. When all of the muscles that cross and surround a joint are mobile and strong, your injury and pain risk decreases significantly."</li>
            <li>In addition, Wickham says that strength training increases your lean body mass which helps you burn more calories at rest. This translates into maintaining a healthy body weight to further decrease the stress on your joints.</li>
          </ul>
          <img src={JointsHarming2} className="size-img"/>
        </div>
        <h2>2. Skimping on Mobility</h2>
        <div className='flexcontainer'>
          <ul>
            <li>You are knocking out the cardio, adding in strength training, but are you taking the time to stretch? "Flexibility and mobility is the foundation for every movement you perform in life, in the gym or in sport"</li>
            <li>As a result, your joints will have to compensate for this immobility, causing wear and tear and eventually pain and injury. A good example of how immobility or poor flexibility can lead to an injury is doing a squat.</li>
            <li>"The squat requires that you have adequate ankle and hip mobility. If your ankles and/or hips are tight, your knees and low back will have to compensate for your tight ankles and hips. This is one of the primary causes of injury in your knees and low back," he explains.</li>
          </ul>
          <img src={JointsHarming3} className="size-img"/>
        </div>
        <h2>3. Only Doing High-Impact Exercise</h2>
        <div className='flexcontainer'>
          <ul>
            <li>For optimal joint health, you should be mixing up your exercise routine between high-impact and low-impact exercises. For example, doing five days in a row of high-intensity interval training (HIIT) or running three miles every day is not only be hard on your joints, but it also doesn't allow your body to reap the full benefits of exercise.</li>
            <li>In fact, only doing high-impact exercises can eventually cause wear-and-tear damage to your joints.</li>
            <li>On the other hand, if you only do low-impact exercises, like cycling or swimming, you are missing out on the bone-strengthening benefits of high-impact exercise and strength training. The key is moderation and alternating your exercises.</li>
            <li>Mixing up your routine also challenges your body so you continue to make gains. "If you consistently perform the same exercises at the same intensity, you will eventually plateau and your strength, muscle and cardiovascular gains will stop progressing," Wickham says.</li>
          </ul>
          <img src={JointsHarming4} className="size-img"/>
        </div>
        <h2>4. Avoiding Rest Days</h2>
        <div className='flexcontainer'>
          <ul>
            <li>Just like not varying your workouts enough, not taking any rest days can also hurt your joints. It is important to take a day to rest, recover and recharge. Doctors orders!</li>
            <li>"Adequate recovery is essential because exercising causes stress to your nervous system, and physical stress to your connective tissues, such as your muscles, fascia and tendons."</li>
            <li>This damage then needs time to heal properly, so limiting stress on your nervous system and connective tissues during your rest days allows them to recover and repair.</li>
          </ul>
          <img src={JointsHarming5} className="size-img"/>
        </div>
        <h2>5. Wearing the Wrong Shoes</h2>
        <div className='flexcontainer'>
          <ul>
            <li>Depending on the exercise you're doing and your natural foot shape, wearing the wrong type of shoe can hurt your joints.</li>
            <li>"It's important to wear shoes that match your ability and exercise choice." This is especially important if you don't have the proper foot strength and are going to be increasing exercise.</li>
            <li>The Mayo Clinic explains that your shoes should conform to the shape of your feet. You should not force your feet to conform to a pair of shoes.</li>
            <li>For example, if you have high arches and are doing a high-impact exercise, like running, make sure you find a shoe that supports your arch to avoid joint injury. If you have a low arch or flat feet, the Mayo Clinic recommends a shoe with motion control to prevent joint injury.</li>
            <li>Other considerations in a shoe include how much cushion you need, as many shoes have air, gel or foam to help absorb the shock to protect your joints.</li>
          </ul>
          <img src={JointsHarming6} className="size-img"/>
        </div>
      </div>
    </div>
  )
}

export default JointsHarming