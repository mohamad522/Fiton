import styled from 'styled-components'

export const WorkoutTitle = styled.h1`
  color: darkgray;
  font-size: 500;
`
export const WorkoutDesc = styled.p`
  max-width: 600px;
  font-size: 18px;
  padding: 2vw;
`
export const WorkoutImg = styled.img`
  width: 500px;
`
export const WorkoutButton = styled.button`
  background: #0F80AA;
  border-radius: 2px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 15px;
  text-decoration: none;
`
export const SingleWorkoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const DescriptionContainer = styled.div`

`
export const WorkoutPageTitle = styled.p`
  font-size: 70px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 30px;
`