import { async } from '@firebase/util';
import { React, useState, useEffect } from 'react'
import { db } from './firebase-config';
import { collection, getDocs, doc, setDoc, addDoc } from 'firebase/firestore'
import WorkoutElements from '../components/Workout';
import { WorkoutPageTitle, WorkoutButton } from '../components/Workout/WorkoutElements';
import { getAuth } from "firebase/auth";


const AbsWorkout = () => {
  const [workouts, setWorkouts] = useState([]); //users is the array of workouts so we can reach properties by users.name for example
  const workoutsCollectionRef = collection(db, "workouts/Abs Workout/Abs collection") //name of the collection we want to map through
  const workoutsDocRef = doc(db, "workouts/Abs Workout")

  useEffect(() => {
    const getWorkouts = async () => {
      const data = await getDocs(workoutsCollectionRef) //returns all documents from a specific collection
      setWorkouts(data.docs.map((doc) => ({...doc.data(), id: doc.id}))) //map through data and extract what we want
    }

    getWorkouts()
  }, [])

  
  return ( //write html inside the return
    // <>: important because all elements inside the return should be wrapped inside a father element
    <> 
    <WorkoutPageTitle>{workoutsDocRef.id}</WorkoutPageTitle>
    {/* display each information */}
    <div>
      {/* map function loops on each element of the array users (like for loop in python) */}
      {workouts.map((workout) => {
        return (<div>
          <WorkoutButton style={{margin:'0 0 10px 20px'}} onClick={() =>{
            const auth = getAuth();
            const loggedUser = auth.currentUser;
            if (loggedUser !== null) {
              setDoc(doc(db, "users", loggedUser.email, loggedUser.email, workout.name), 
              {name: workout.name, description: workout.description, image: workout.image})
            } else {
              console.log('signed out')
            }
           }}>Save</WorkoutButton>
          {/* user.property returns the property */}
          <WorkoutElements name={workout.name} description={workout.description}
           imageUrl={workout.image}></WorkoutElements>
          <br />
        </div>)
      })}
    </div> 
    </>
  )
}
export default AbsWorkout