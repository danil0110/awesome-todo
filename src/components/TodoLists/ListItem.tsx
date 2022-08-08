import React from 'react';
import trash from '../../assets/icons/trash.svg';

type Props = {
  list: any;
};

const ListItem = ({ id, name }: any) => {
  return (
    <li className='pl-8 py-1 flex cursor-pointer hover:bg-amber-400'>
      <span>{name}</span>
      <button className='flex ml-auto justify-center items-center px-2'>
        <img src={trash} alt='trash' />
      </button>
    </li>
  );
};

export default ListItem;
