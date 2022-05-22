import { React, useState, useEffect} from 'react'
import { db } from './firebase-config';
import { collection, getDocs} from 'firebase/firestore'
import { getAuth } from "firebase/auth";
import WorkoutElements from '../components/Workout';

const auth = getAuth();
const loggedUser = auth.currentUser;

const Saved = () => {
  const [userWorkouts, setUserWorkouts] = useState([]);
  const userWorkoutsCollectionRef = collection(db, "users", loggedUser.email, loggedUser.email)
  useEffect(() => {
    const getUserWorkouts = async () => {
    const data = await getDocs(userWorkoutsCollectionRef) //returns all documents from a specific collection
    setUserWorkouts(data.docs.map((doc) => ({...doc.data(), id: doc.id}))) //map through data and extract what we want
    }

    getUserWorkouts()
  }, [])
    return (
      <>
      <h1>Saved Workouts</h1>
      <div>
        {userWorkouts.map((workout) => {
          return (<div>
            <WorkoutElements name={workout.name} description={workout.description}
              setsAndReps={workout['sets and reps']} imageUrl={workout.image}></WorkoutElements>
            <br />
          </div>)
        })}
      </div>
      </>
    )
}

export default Saved