import React, { useState } from 'react';
import { TiHeart } from "react-icons/ti";

interface TodoItemRequest {
    title: string;
  }
  
  // AddEvent 컴포넌트
  function AddEvent({ onAdd }: { onAdd: (todo: TodoItemRequest) => void }) {
    const [title, setTitle] = useState('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onAdd({ title });
      setTitle('');
    };
  

  return (
    <form onSubmit={handleSubmit} className='flex flex-row p-5 items-center justify-center'>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Plus Event"
        className='w-20'
      />
      <button type="submit" ><TiHeart color="Purple" style={{ fontSize: '24px' }}/></button>
    </form>
  );
}

export default AddEvent;
