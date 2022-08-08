import React from 'react';
import userAvatar from '../../assets/icons/profile.svg';
import UserProfilePopup from './UserProfilePopup';

type Props = {};

const UserProfileButton = (props: Props) => {
  return (
    <button className='relative flex justify-center items-center h-full px-1 mr-3'>
      <img src={userAvatar} alt='user avatar' />

      <UserProfilePopup />
    </button>
  );
};

export default UserProfileButton;
