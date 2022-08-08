import React from 'react';
import search from '../assets/icons/search.svg';

type Props = {};

const Searchbar = (props: Props) => {
  return (
    <div className='relative w-80 ml-6 mr-3'>
      <img src={search} alt='search icon' className='absolute left-4 top-1/2 -translate-y-1/2' />
      <input
        type='text'
        placeholder='Search'
        className='w-full py-1 pl-11 outline-none border focus:border-main focus:caret-main'
      />
    </div>
  );
};

export default Searchbar;
