import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <form>
      <h1 className='font-medium mb-6'>Sign in</h1>
      <input
        type='email'
        placeholder='Email'
        className='w-full mb-6 border-b border-b-gray-300 placeholder-gray-300 outline-0 caret-main focus:border-b-main'
      />
      <input
        type='password'
        placeholder='Password'
        className='w-full mb-4 border-b border-b-gray-300 placeholder-gray-300 outline-0 caret-main focus:border-b-main'
      />
      <div className='text-xs'>
        No account?{' '}
        <Link to='/register' className='text-main'>
          Create one!
        </Link>
      </div>
      <Link to='/restore' className='text-xs'>
        Forgot password?
      </Link>
      <button className='bg-main block mt-4 ml-auto text-xs h-8 w-28'>Sign in</button>
    </form>
  );
};

export default LoginForm;
