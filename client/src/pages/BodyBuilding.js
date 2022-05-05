import { async } from '@firebase/util';
import { React, useState, useEffect } from 'react'
import { db } from './firebase-config';
import { collection, getDocs, doc, setDoc, addDoc } from 'firebase/firestore'
import WorkoutElements from '../components/Workout';
import { WorkoutPageTitle } from '../components/Workout/WorkoutElements';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const BodyBuilding = () => {
  const [users, setUsers] = useState([]); //users is the array of workouts so we can reach properties by users.name for example
  const usersCollectionRef = collection(db, "workouts/chest and triceps/chest-collection") //name of the collection we want to map through
  const workoutsDocRef = doc(db, "workouts/chest and triceps")
  // const saveWorkout = async (idn, namen, sets-and-reps, image, explication) => {

  // }
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef) //returns all documents from a specific collection
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id}))) //map through data and extract what we want
    }

    getUsers()
  }, [])

  

  const save = () => {
    
  // import { doc, setDoc } from "firebase/firestore"; 
  // Add a new document in collection "cities"
  // await setDoc(doc(db, "cities", "new-city-id"), data); //data is the workout
    const auth = getAuth();
    const loggedUser = auth.currentUser;
    if (loggedUser !== null) {
      setDoc(doc(db, "users", loggedUser.email), {data:'data'})
    } else {
      console.log('signed out')
    }

  // Add a new document with a generated id.
  // const docRef = await addDoc(collection(db, "cities"), {
  //   name: "Tokyo",
  //   country: "Japan"
  // });
  // console.log("Document written with ID: ", docRef.id);
  }

  return ( //write html inside the return
    // <>: important because all elements inside the return should be wrapped inside a father element
    <> 
    <WorkoutPageTitle>{workoutsDocRef.id}</WorkoutPageTitle>
    {/* display each information */}
    <div>
      {/* map function loops on each element of the array users (like for loop in python) */}
      {users.map((user) => {
        return (<div>
          {/* user.property returns the property */}
          <WorkoutElements name={user.name} description={user.description}
           setsAndReps={user['sets and reps']} imageUrl={user.image} save={save}></WorkoutElements>
          <br />
        </div>)
      })}
    </div> 
    </>
  )
}
export default BodyBuilding