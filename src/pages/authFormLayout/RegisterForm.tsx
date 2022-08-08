import React from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  return (
    <form>
      <h1 className='font-medium mb-6'>Sign up</h1>
      <input
        type='email'
        placeholder='Email'
        className='w-full mb-6 border-b border-b-gray-300 placeholder-gray-300 outline-0 caret-main focus:border-b-main'
      />
      <input
        type='password'
        placeholder='Password'
        className='w-full mb-6 border-b border-b-gray-300 placeholder-gray-300 outline-0 caret-main focus:border-b-main'
      />
      <input
        type='password'
        placeholder='Confirm password'
        className='w-full mb-4 border-b border-b-gray-300 placeholder-gray-300 outline-0 caret-main focus:border-b-main'
      />
      <div className='flex justify-end space-x-4 mt-4'>
        <Link to='/login' className='bg-secondary flex justify-center items-center text-xs h-8 w-28'>
          Back
        </Link>
        <button className='bg-main text-xs h-8 w-28'>Sign up</button>
      </div>
    </form>
  );
};

export default RegisterForm;
