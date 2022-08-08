import React from 'react';
import NewListBtn from './NewListBtn';
import NewListInput from './NewListInput';
import TodoLists from './TodoLists';

import logo from '../assets/logo.svg';
import arrow from '../assets/icons/arrow.svg';

const todoLists = [
  {
    id: 1,
    name: 'My todo list'
  },
  {
    id: 2,
    name: 'For the shops'
  },
  {
    id: 3,
    name: 'Code in the evening'
  }
];

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside className='bg-main w-[250px] h-screen p-5 shrink-0'>
      <img src={logo} alt='awesome logo' className='mb-7' />

      <button className='block px-[10px] py-1 mb-2 rotate-180'>
        <img src={arrow} alt='arrow' />
      </button>

      <TodoLists lists={todoLists} />

      <NewListBtn />
      <NewListInput />
    </aside>
  );
};

export default Sidebar;
