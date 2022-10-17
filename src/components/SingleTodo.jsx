import React, { useState } from 'react';
import '../App.css';

function SingleTodo({ todoList, parentFunc, key, filter }) {
  console.log(filter);
  //states:
  const [updateCompleteStatus, setUpdateCompleteStatus] = useState(false);
  const handleSelectClick = () => {
    setUpdateCompleteStatus(!updateCompleteStatus);
    parentFunc(todoList);
  };
  // const childFunc = () => {
  //   parentFunc(updateCompleteStatus);
  // };
  // childFunc();

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
        <input name="test" type="checkbox" onClick={handleSelectClick} />
        {todoList}
        {key}
      </label>
    </>
  );
}

export default SingleTodo;
