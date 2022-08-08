import React from 'react';
import Searchbar from './Searchbar';
import UserProfileButton from './UserProfileButton';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className='h-[50px] flex justify-between items-center w-full border-b border-b-neutral-200'>
      <Searchbar />
      <UserProfileButton />
    </header>
  );
};

export default Header;
