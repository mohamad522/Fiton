import { async } from '@firebase/util';
import { React, useState, useEffect } from 'react'
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore'

const BodyBuilding = () => {
  const [users, setUsers] = useState([]); //users is the array of workouts so we can reach properties by users.name for example
  const usersCollectionRef = collection(db, "chest and triceps") //name of the collection we want to map through
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
    <div>BodyBuilding</div>
    {/* display each information */}
    <div>
      {/* map function loop on each element of the array users (like for loop in python) */}
      {users.map((user) => {
        return <div>
          {/* user.property returns the property */}
          <h1>Name: {user.idn}</h1>
        </div>
      })}
    </div> 
    </>
  )
}

export default BodyBuilding