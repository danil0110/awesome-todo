import React from 'react';
import ListItem from './ListItem';

import './todoLists.scss';

type Props = {
  lists: any[];
};

const TodoLists = ({ lists }: Props) => {
  if (!lists.length) return <></>;

  return (
    <ul className='todo-lists flex flex-col list-none'>
      {lists.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default TodoLists;
