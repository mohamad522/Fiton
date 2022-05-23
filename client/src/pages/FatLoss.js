import { async } from '@firebase/util';
import { React, useState, useEffect } from 'react'
import { db } from './firebase-config';
import { collection, getDocs, doc, setDoc, addDoc } from 'firebase/firestore'
import WorkoutElements from '../components/Workout';
import { WorkoutPageTitle, WorkoutButton } from '../components/Workout/WorkoutElements';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const BodyBuilding = () => {
  const [users, setUsers] = useState([]); //users is the array of workouts so we can reach properties by users.name for example
  const usersCollectionRef = collection(db, "workouts/Fat Loss/fat loss collection") //name of the collection we want to map through
  const workoutsDocRef = doc(db, "workouts/Fat Loss")
  // const saveWorkout = async (idn, namen, sets-and-reps, image, explication) => {

  // }
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef) //returns all documents from a specific collection
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id}))) //map through data and extract what we want
    }

    getUsers()
  }, [])


  return ( //write html inside the return
    // <>: important because all elements inside the return should be wrapped inside a father element
    <> 
    <WorkoutPageTitle>{workoutsDocRef.id}</WorkoutPageTitle>
    {/* display each information */}
    <div>
      {/* map function loops on each element of the array users (like for loop in python) */}
      {users.map((user) => {
        return (<div>
          <WorkoutButton style={{margin:'0 0 10px 20px'}} onClick={() =>{
            const auth = getAuth();
            const loggedUser = auth.currentUser;
            if (loggedUser !== null) {
              setDoc(collection(db, "users", loggedUser.email), {name: user.name, description:user.description})
            } else {
              console.log('signed out')
            }
           }}>Save</WorkoutButton>
          {/* user.property returns the property */}
          <WorkoutElements name={user.name} description={user.description}
           imageUrl={user.image}></WorkoutElements>
           
          <br />
        </div>)
      })}
    </div> 
    </>
  )
}
export default BodyBuilding