import React, { useState } from 'react';
import '../App.css';

function SingleTodo({ todoList, parentFunc, key }) {
  //states:
  const [updateCompleteStatus, setUpdateCompleteStatus] = useState(false);
  const childFunc = () => {
    parentFunc(updateCompleteStatus);
  };
  childFunc();

  return (
    <>
      <label
        style={{
          textDecoration: updateCompleteStatus && 'line-through',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '10p',
        }}
      >
        <input
          name="test"
          type="checkbox"
          onClick={() => setUpdateCompleteStatus(!updateCompleteStatus)}
        />
        {todoList}
      </label>
    </>
  );
}

export default SingleTodo;
