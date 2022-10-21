import React, { useState } from 'react';
import '../App.css';

function SingleTodo({ todoList, parentFunc, key, filter }) {
  //states:
  const [updateCompleteStatus, setUpdateCompleteStatus] = useState(false);
  const handleSelectClick = () => {
    setUpdateCompleteStatus(!updateCompleteStatus);
    parentFunc(todoList);
  };
  const [checkedItem, setCheckedItem] = useState(false);

  // If it's checked, set this to true
  // If it isn't checked, set this to false
  const isThisTodoChecked = true;

  // if (updateCompleteStatus) {
  //   setCheckedItem(true);
  // }
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
          // checked
          type="checkbox"
          onClick={handleSelectClick}
        />
        {todoList}
        {key}
      </label>
    </>
  );
}

export default SingleTodo;
