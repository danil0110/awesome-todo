import React from 'react';

import logo from '../../assets/logo-text.svg';
import styles from './authFormLayout.module.scss';

type Props = {
  children: React.ReactNode;
};

const AuthFormLayout = ({ children }: Props) => {
  return (
    <div className={styles.background}>
      <div className='w-[440px] bg-white p-10 shadow-md'>
        <img src={logo} alt='awesome todo logo' className='mb-1' />
        {children}
      </div>
    </div>
  );
};

export default AuthFormLayout;
