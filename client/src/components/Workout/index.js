import React from 'react'
import { 
  WorkoutCategory,
  CategoryTitle,
  GridContainer
} from './WorkoutElements'
import home21 from '../../images/home-2-1.jpg'
import home22 from '../../images/home-2-2.jpg'

const WorkoutElements = () => {
  return (
    <>
    <GridContainer>
      <a href='/body-building-plan' style={{textDecoration:'none'}}><WorkoutCategory
      style={{backgroundImage:`url(${require('../../images/home-2-2.jpg')})`}}>
      <CategoryTitle>Body Building Plan</CategoryTitle>
      </WorkoutCategory></a>
      <a href='/abs-workout' style={{textDecoration:'none'}}><WorkoutCategory
      style={{backgroundImage:`url(${require('../../images/home-2-1.jpg')})`}}>
      <CategoryTitle>ABS Workout</CategoryTitle>
      </WorkoutCategory></a>
      <a href='/fat-loss' style={{textDecoration:'none'}}><WorkoutCategory
      style={{backgroundImage:`url(${require('../../images/home-2-1.jpg')})`}}>
      <CategoryTitle>Fat Loss</CategoryTitle>
      </WorkoutCategory></a>
      <a href='/cardio-exercises' style={{textDecoration:'none'}}><WorkoutCategory
      style={{backgroundImage:`url(${require('../../images/home-2-1.jpg')})`}}>
      <CategoryTitle>20 Cardio Exercises</CategoryTitle>
      </WorkoutCategory></a>
      <a href='/balance-exercises' style={{textDecoration:'none'}}><WorkoutCategory
      style={{backgroundImage:`url(${require('../../images/home-2-1.jpg')})`}}>
      <CategoryTitle>13 Balance Exercises</CategoryTitle>
      </WorkoutCategory></a>
    </GridContainer>
    </>
  )
}

export default WorkoutElements