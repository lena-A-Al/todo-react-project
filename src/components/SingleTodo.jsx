import React, { useState } from 'react';
import '../App.css';
import Filter from './filter/Filter';

function SingleTodo({ todoName }) {
  //states:
  const [updateCompleteStatus, setUpdateCompleteStatus] = useState(false);

  return (
    <>
      <label
        style={{
          textDecoration: updateCompleteStatus && 'line-through',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <input
          name="test"
          type="checkbox"
          onClick={() => setUpdateCompleteStatus(!updateCompleteStatus)}
        />
        {todoName}
      </label>
    </>
  );
}

export default SingleTodo;
