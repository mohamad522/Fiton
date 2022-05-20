import React from 'react'
import '../css/workouts.css'

const Workouts = () => {
  return (
    <>
    <div className='workouts-bg'>
      <h1 className='workouts-title'>Workouts</h1>
    </div>
    <div className='c2d2'></div>
    <div className='GridContainer'>
      <a href='/body-building-plan' style={{textDecoration:'none'}}><div className='WorkoutCategory'
      style={{backgroundImage:`url(${require('../images/bodybuilding.jpg')})`}}>
      <div className='CategoryTitle'>Body Building Plan</div>
      </div></a>
      <a href='/abs-workout' style={{textDecoration:'none'}}><div className='WorkoutCategory'
      style={{backgroundImage:`url(${require('../images/workoutAbs.jpeg')})`}}>
      <div className='CategoryTitle'>ABS Workout</div>
      </div></a>
      <a href='/fat-loss' style={{textDecoration:'none'}}><div className='WorkoutCategory'
      style={{backgroundImage:`url(${require('../images/workoutFatLoss.jpeg')})`}}>
      <div className='CategoryTitle'>Fat Loss</div>
      </div></a>
      <a href='/cardio-exercises' style={{textDecoration:'none'}}><div className='WorkoutCategory'
      style={{backgroundImage:`url(${require('../images/cardio.jpg')})`}}>
      <div className='CategoryTitle'>Cardio Exercises</div>
      </div></a>
      <a href='/balance-exercises' style={{textDecoration:'none'}}><div className='WorkoutCategory'
      style={{backgroundImage:`url(${require('../images/balance.jpg')})`}}>
      <div className='CategoryTitle'>Balance Exercises</div>
      </div></a>
    </div>
    </>
  )
}

export default Workouts