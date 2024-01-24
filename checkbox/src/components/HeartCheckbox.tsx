import React, { useState } from 'react';
import { TiHeartOutline, TiHeart } from "react-icons/ti";

const HeartCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className='w-10 h-10 items-center justify-center'>
      <input
        type="checkbox"
        id="heartCheckbox"
        checked={checked}
        onChange={handleChange}
        style={{ display: 'none' }} 
      />
      <label htmlFor="heartCheckbox">
        {checked ? <TiHeart color="red" style={{ fontSize: '24px' }} /> : <TiHeartOutline style={{ fontSize: '24px' }} />}
      </label>
    </div>
  );
};

export default HeartCheckbox;
