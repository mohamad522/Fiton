import React from 'react'
import {
  WorkoutTitle, 
  WorkoutDesc,
  WorkoutImg,
  WorkoutButton,
  SingleWorkoutContainer,
  DescriptionContainer,
} from './WorkoutElements'

const WorkoutElements = (props) => {
  return (
    <>
    <SingleWorkoutContainer>
      <DescriptionContainer>
        <WorkoutTitle>{props.name}</WorkoutTitle>
        <WorkoutDesc>Description: {props.description}</WorkoutDesc>
        <p>{props.setsAndReps}</p>
        <WorkoutButton onClick={props.save}>Save</WorkoutButton>
      </DescriptionContainer>
      <WorkoutImg src={props.imageUrl} />
    </SingleWorkoutContainer>
    <hr />
    </>
  )
}

export default WorkoutElements