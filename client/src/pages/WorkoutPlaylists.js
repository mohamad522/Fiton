import React, {useState,useEffect} from 'react';
import Header from '../components/todo/Header';
import "../css/workoutplaylists.css";
import Form from "../components/todo/Form";
import TodoList from '../components/todo/TodoList';
const WorkoutPlaylists = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput]= useState("");
  const [todos, setTodos]= useState(initialState);// to keep track of the todos items
  const [editTodo, setEditTodo]=useState(null);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className='container1'>
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form 
            input={input}
            setInput={setInput}
            todos= {todos}
            setTodos= {setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList  
            todos={todos} 
            setTodos={setTodos} 
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>

   
  );
};

export default WorkoutPlaylists;