import React from 'react';

function Filter({ filter, setFilter, completedList }) {
  const completedHandler = () => {
    console.log('hello');
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginTop: '10px',
        }}
      >
        <button>All</button>
        <button onClick={completedHandler}>Completed</button>
        <button>Inactive</button>
      </div>
    </>
  );
}

export default Filter;
