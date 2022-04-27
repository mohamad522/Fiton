import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto;
  grid-gap: 1px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: auto;
  }
`
export const WorkoutCategory = styled.div`
  background-size: cover;
  /* height: 300px; */
  /* max-width: 500px; */
  border: 2px solid black;
  @media screen and (max-width: 768px) {
    
  }
`
export const CategoryTitle = styled.p`
  color: #000;
  text-align: center;
  margin: auto;
  line-height: 300px;
  font-size: 50px;
`