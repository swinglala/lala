import React, { useState, useEffect } from 'react';
import { Routes,Route,useNavigate } from 'react-router-dom';
import './App.css';
import ListForm from './components/ListForm';
import { TodoItem, TodoItemRequest } from './consts/todoList';
import AddEvent from './components/AddEvent';

function App() {
  const navigate =useNavigate( );

  const [todoData, setTodoData] = useState<TodoItem[]>(() => {
    const storedData = localStorage.getItem("todoData");
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    // todoData가 변경될 때마다 로컬 저장소에 저장
    localStorage.setItem("todoData", JSON.stringify(todoData));
  }, [todoData]); // todoData가 변경될 때만 실행

  const handleAddTodo = (todo: TodoItemRequest) => {
    setTodoData([
      ...todoData,
      {
        ...todo,
        id: todoData.length + 1,
        progress: "TODO" // 기본값으로 'TODO' 설정
      }
    ]);
  };

  const handleDelete = (deleteId: number) => {
    setTodoData((prev) => prev.filter((prevItem) => prevItem.id !== deleteId));
  };
  const updateTodo = (id: number, updatedTodo: TodoItem) => {
    setTodoData(todoData.map(todo => todo.id === id ? updatedTodo : todo));
  };

  const todoList = todoData.filter((item) => item.progress === "TODO");
  const doneList = todoData.filter((item) => item.progress === "DONE");


  return (
    <div className='flex flex-col items-center justify-center'>
      <header >
          <div className='p-5 flex items-start justify-center text-[40px]'> U&I List </div>
          <div className='flex flex-row items-center justify-center gap-5 text-white w-screen h-[40px] bg-slate-300'>
            <div onClick={()=> navigate("/") }>모두</div>
            <div> / </div>
            <div onClick={()=> navigate("/todo") }>앞으로</div>
            <div> / </div>
            <div onClick={()=> navigate("/done") }>추억</div>
          </div>
      </header>

      <Routes>
    <Route path="/" element={
      <div className=''>
        <ListForm
        list={todoData}
        handleDelete={handleDelete}
        onUpdate={updateTodo}
        />
      </div>
       }/> 
    <Route path="/todo" element={
            <ListForm list={todoList}
            handleDelete={handleDelete}
            onUpdate={updateTodo} />
          } />  
   <Route path="/done" element={
            <ListForm list={doneList}
            handleDelete={handleDelete}
            onUpdate={updateTodo} />
          } />        
       </Routes>
      <div>
      <AddEvent onAdd={handleAddTodo} />
      </div>
      


     
    </div>
  );
}

export default App;
