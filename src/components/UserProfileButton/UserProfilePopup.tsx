import React from 'react';
import { Link } from 'react-router-dom';
import userAvatar from '../../assets/icons/profile.svg';
import logoText from '../../assets/logo-text.svg';

type Props = {};

const UserProfilePopup = (props: Props) => {
  return (
    <div className='absolute z-10 bg-white top-[65px] min-w-[300px] w-auto py-2 px-4 right-1 shadow cursor-default'>
      <div className='flex items-center justify-between'>
        <img src={logoText} alt='awesome text logo' className='w-[68px]' />
        <Link to='/login' className='text-xs text-secondary'>
          Sign out
        </Link>
      </div>

      <div className='flex space-x-4 mt-4'>
        <img src={userAvatar} alt='user avatar' className='w-20 shrink-0' />
        <div className='flex flex-col items-start space-y-2 pt-2'>
          <span className='text-xs'>admin@email.com</span>
          <Link to='/todos' className='text-xs text-main'>
            My profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePopup;
