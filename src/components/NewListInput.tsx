import React from 'react';
import plus from '../assets/icons/plus.svg';

type Props = {};

const NewListInput = (props: Props) => {
  return (
    <div className='relative'>
      <img src={plus} alt='plus' className='absolute left-2 top-1/2 -translate-y-1/2' />
      <input type='text' placeholder='New list' className='w-full py-1 pl-8 pr-11 outline-none' />
      <button className='absolute right-2 top-1/2 -translate-y-1/2 text-main'>Add</button>
    </div>
  );
};

export default NewListInput;
