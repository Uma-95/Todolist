import './App.css';
import React, { useState } from 'react'
import TodoInput  from './components/TodoInput';
import Todolist from './components/Todolist';

function App() {
  const[ListTodo,SetListTodo]=useState([]);
  let addList=(inputText)=>{
    SetListTodo([...SetListTodo,inputText]);
  }
  return (
   <div className="main-container">
    <div className="center-container">
    <TodoInput addList={addList}/>
    

    </div>
   </div>
  );
}

export default App;
