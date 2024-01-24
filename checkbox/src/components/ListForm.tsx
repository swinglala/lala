import React, { useState } from 'react';
import { TiHeartOutline, TiHeart } from "react-icons/ti";
import { TodoItem } from '../consts/todoList';

type Props = {
  list: TodoItem[];
};

export default function ListForm({ list }: Props) {
  // 각 체크박스의 상태를 저장할 배열
  const [checkedStates, setCheckedStates] = useState<boolean[]>(list.map(() => false));

  // 특정 체크박스의 상태를 토글하는 함수
  const handleChange = (index: number) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);
  };

  return (
    <div>
      <div className='flex flex-col p-5' >
        {list.map((item, index) => (
          <div key={index} className='flex flex-row'>
            <div className='w-[180px] h-[40px]'>{item.title}</div>
            <div className='w-10 h-10 items-center justify-center'>
              <input
                type="checkbox"
                id={`heartCheckbox-${index}`}
                checked={checkedStates[index]}
                onChange={() => handleChange(index)}
                style={{ display: 'none' }} 
              />
              <label htmlFor={`heartCheckbox-${index}`}>
                {checkedStates[index] ? <TiHeart color="red" style={{ fontSize: '24px' }} /> : <TiHeartOutline style={{ fontSize: '24px' }} />}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
