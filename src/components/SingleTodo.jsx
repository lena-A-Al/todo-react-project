import React, { useState } from 'react';
import '../App.css';

function SingleTodo({ todoName }) {
  //states:
  const [updateCompleteStatus, setUpdateCompleteStatus] = useState(false);

  //business lpogics
  const selectStatusHandler = () => {
    setUpdateCompleteStatus(true);
  };
  if (updateCompleteStatus) {
    alert('hello');
  }
  //   style={{
  //     updateCompleteStatus ?  {textDecoration: 'line-through'} : 'none',
  //    }}
  return (
    <label>
      <input
        // style={{ backgroundColor: updateCompleteStatus ? 'red' : 'green' }}
        // className={`checkbox${updateCompleteStatus && 'checkbox_completed'}`}
        style={{
          textDecoration: updateCompleteStatus && 'line-through',
        }}
        name="test"
        type="checkbox"
        // onClick={selectStatusHandler}
        onClick={() => setUpdateCompleteStatus(!updateCompleteStatus)}
      />
      {todoName}
    </label>
  );
}

export default SingleTodo;
