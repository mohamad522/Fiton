import React from 'react'
import '../css/workouts.css'
import WorkoutElements from '../components/Workout'

const Workouts = () => {
  return (
    <>
    <div className='workouts-bg'>
      <h1 className='workouts-title'>Workouts</h1>
    </div>
    <div className='c2d2'></div>
    <WorkoutElements />
    </>
  )
}

export default Workouts