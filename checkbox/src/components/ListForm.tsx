import React from 'react'
import { TodoItem } from '../consts/todoList'
import HeartCheckbox from './HeartCheckbox'


type Props = {
  list : TodoItem[],
}

export default function ListForm({
     list, }: Props) {
    
  return (
    <div>
        <div className='flex flex-col p-5' >
            
            {list.map((item, index) => 
            <div key={index} className='flex flex-row'>
                <div className='w-[180px] h-[40px]'>{item.title}</div>
                <HeartCheckbox/>
            </div>
            )}
        </div>
    </div>

  )
}