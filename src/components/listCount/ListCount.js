import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';

function ListCount({ todoList}) {
  return <div>You have {todoList.length} tasks to finish today</div>;
}

export default ListCount;
