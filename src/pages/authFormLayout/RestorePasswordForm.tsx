import React from 'react';
import { Link } from 'react-router-dom';

const RestorePasswordForm = () => {
  return (
    <form>
      <h1 className='font-medium mb-6'>Forgot password</h1>
      <input
        type='email'
        placeholder='Email'
        className='w-full mb-4 border-b border-b-gray-300 placeholder-gray-300 outline-0 caret-main focus:border-b-main'
      />
      <div className='flex justify-end space-x-4'>
        <Link to='/login' className='bg-secondary flex justify-center items-center text-xs h-8 w-28'>
          Back
        </Link>
        <button className='bg-main text-xs h-8 w-28'>Restore</button>
      </div>
    </form>
  );
};

export default RestorePasswordForm;
