import React, { useState, useEffect } from 'react';
import './App.css';
import ListForm from './components/ListForm';
import { TodoItem, TodoItemRequest } from './consts/todoList';
import AddEvent from './components/AddEvent';

function App() {

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

  return (
    <div className='flex flex-col items-center justify-center'>
      <header className='p-5 flex items-start justify-center text-[40px]'>U&I List</header>
      <div className=''>
        <ListForm
        list={todoData}
        handleDelete={handleDelete}
        onUpdate={updateTodo}
        />
      </div>
      <div>
      <AddEvent onAdd={handleAddTodo} />
      </div>
      


     
    </div>
  );
}

export default App;
