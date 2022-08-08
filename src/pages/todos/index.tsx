import React from 'react';
import Sidebar from '../../components/Sidebar';

import Header from '../../components/Header';

const TodosPage = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full'>
        <Header />
        <div className='relative overflow-y-auto' style={{ height: 'calc(100vh - 50px)' }}>
          <div className='text-right border h-20 m-2'></div>
          <div className='text-right border h-20 m-2'></div>
          <div className='text-right border h-20 m-2'></div>
          <div className='text-right border h-20 m-2'></div>
          <div className='text-right border h-20 m-2'></div>
          <div className='text-right border h-20 m-2'></div>
          <div className='text-right border h-20 m-2'></div>
          <div className='text-right border h-20 m-2'></div>
          <div className='text-right border h-20 m-2'></div>
        </div>
      </div>
    </div>
  );
};

export default TodosPage;
