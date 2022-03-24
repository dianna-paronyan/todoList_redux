import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='todoBox'>
        <div className='heading'>
        <h3 className='text'>To-Do List</h3>
        </div>
      
      <TodoForm/>
      <TodoList/>
      </div>
    </div>
  );
}

export default App;
