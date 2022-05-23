import {React} from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { getAuth } from "firebase/auth";
import { auth } from './pages/firebase-config'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Workouts from './pages/Workouts'
import HealthyLifestyle from './pages/HealthyLifestyle'
import SportsNews from './pages/SportsNews'
import TodoPage from './pages/TodoPage'
import ContactUs from './pages/ContactUs'
import Signin from './pages/Singin'
import Signup from './pages/Signup'
import PassRecovery from './pages/PassRecovery'
import Saved from './pages/Saved'
import SavedNoUser from './pages/SavedNoUser';
import SmoothieRecipes from './pages/SmoothieRecipes'
import NutritiousBreakfast from './pages/NutritiousBreakfast'
import BalancedDiet from './pages/BalancedDiet'
import JointsHarming from './pages/JointsHarming'
import Stretching from './pages/Stretching'
import Hiit from './pages/Hiit'
import WorkoutSongs from './pages/WorkoutSongs'
import ChildrenInSports from './pages/ChildrenInSports'
import BurnFatsTreadmill from './pages/BurnFatsTreadmill'
import BodyBuilding from './pages/BodyBuilding'
import AbsWorkout from './pages/AbsWorkout'
import FatLoss from './pages/FatLoss'
import CardioExercises from './pages/CardioExercises'
import BalanceExercises from './pages/BalanceExercises'
import F from './pages/F';
import Breakfast from './pages/Breakfast';
import MealP from './pages/MealP';


const App = () => {
  // const auth = getAuth();
  // const loggedUser = auth.currentUser;
  console.log('app.js: ',auth.email)
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="workouts" element={<Workouts />} />
      <Route path="healthy-lifestyle" element={<HealthyLifestyle />} />
      <Route path="sports-news" element={<SportsNews />} />
      <Route path="todo-list" element={<TodoPage />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
      <Route path="password-recovery" element={<PassRecovery />} />
      <Route path="saved" element={false? <Saved />: <SavedNoUser />} />
      <Route path="smoothie-recipes" element={<SmoothieRecipes/>} />
      <Route path="nutritious-breakfast" element={<NutritiousBreakfast />} />
      <Route path="balanced-diet" element={<BalancedDiet />} />
      <Route path="joints-harming" element={<JointsHarming />} />
      <Route path="stretching" element={<Stretching />} />
      <Route path="hiit" element={<Hiit />} />
      <Route path="workout-songs" element={<WorkoutSongs />} />
      <Route path="children-in-sports" element={<ChildrenInSports />} />
      <Route path="burn-fats-treadmill" element={<BurnFatsTreadmill />} />          
      <Route path="body-building-plan" element={<BodyBuilding />} />          
      <Route path="abs-workout" element={<AbsWorkout />} />          
      <Route path="fat-loss" element={<FatLoss />} />          
      <Route path="cardio-exercises" element={<CardioExercises />} />          
      <Route path="balance-exercises" element={<BalanceExercises />} />  
      <Route path="meal" element={<MealP />} />     
      <Route path="breakfast" element={<Breakfast />} />     
      <Route path="f" element={<F />} />     
   
       {/* Using path="*"" means "match anything", so this route
             acts like a catch-all for URLs that we don't have explicit
             routes for. */}
      <Route path="*" element={<NoMatch />} />
      </Route>
     </Routes>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
export default App