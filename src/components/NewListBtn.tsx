import React from 'react';
import plus from '../assets/icons/plus.svg';

type Props = {};

const NewListBtn = (props: Props) => {
  return (
    <button className='flex items-center space-x-2 mt-3 w-full px-2 py-1'>
      <img src={plus} alt='plux' />
      <span className='font-medium'>New list</span>
    </button>
  );
};

export default NewListBtn;
