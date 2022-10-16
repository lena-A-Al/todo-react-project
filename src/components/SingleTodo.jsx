import React, { useState } from 'react';
import '../App.css';
import Filter from './filter/Filter';

function SingleTodo({
  todoName,
  updateCompleteStatus,
  setUpdateCompleteStatus,
}) {
  //states:
  // const [updateCompleteStatus, setUpdateCompleteStatus] = useState(false);

  //handler function
  const changeStatusOfComplete = () => {
    setUpdateCompleteStatus(!updateCompleteStatus);
  };
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
        <input name="test" type="checkbox" onClick={changeStatusOfComplete} />
        {todoName}
      </label>
    </>
  );
}

export default SingleTodo;
