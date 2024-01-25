import React, { useState } from 'react';
import { TiHeartOutline, TiHeart, TiTrash } from "react-icons/ti";
import { TodoItem } from '../consts/todoList';


type Props = {
  list: TodoItem[];
  onUpdate: (id: number, updatedTodo: TodoItem) => void;
  handleDelete :  (deleteId: number) => void
};

export default function ListForm({ list, onUpdate, handleDelete }: Props) {
  const handleButtonClick = (index: number) => {
    const newTodo: TodoItem = {
      ...list[index],
      progress: list[index].progress === "TODO" ? "DONE" : "TODO",
      completeDate: list[index].progress === "TODO" ? new Date().toISOString().split('T')[0] : null // 속성 이름을 올바르게 수정
    };
    onUpdate(list[index].id, newTodo);
  };
  

  return (
    <div >
      <div className='flex flex-col p-5 gap-2' >
        {list.map((item, index) => (
          <div key={index} className='flex flex-row w-[350px] items-center justify-between bg-pink-100  rounded-sm'>
            <div className='flex w-fit h-[50px] items-center justify-start p-2 font-bold'>{item.title}</div>
            <div className='flex items-center justify-center gap-2'>
             
            <button onClick={() => handleButtonClick(index)} className='flex w-10 h-10 items-center justify-center'>
      {item.progress === "DONE" ? <TiHeart color="red" style={{ fontSize: '24px' }} /> : <TiHeartOutline style={{ fontSize: '24px' }} />}
    </button>
    <div className='flex items-center w-fit p-2'>
      {item.completeDate && <span>{item.completeDate}</span>}
    </div>
              <button 
              className='flex w-10 h-10 items-center justify-center text-slate-500 opacity-30' 
              onClick={() => handleDelete(item.id)}> <TiTrash style={{ fontSize: '24px' }}/> </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
