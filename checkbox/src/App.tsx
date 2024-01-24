import React from 'react';
import './App.css';
import ListForm from './components/ListForm';
import { todoData } from './consts/todoList';

function App() {
  return (
    <div>
      <header className='p-5 flex items-start justify-center text-[40px]'>U&I List</header>
      <div>
        <ListForm
        list={todoData}
        />
      </div>
      


     
    </div>
  );
}

export default App;
