import React from 'react';

function Filter({ filter, setFilter, completedList }) {
  const filterHandler = (event) => {
    setFilter(event.target.value);
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
        <button name="all" value="all" onClick={filterHandler}>
          All
        </button>
        <button name="completed" value="completed" onClick={filterHandler}>
          Completed
        </button>
        <button name="active" value="active" onClick={filterHandler}>
          Active-not completed
        </button>
      </div>
    </>
  );
}

export default Filter;
