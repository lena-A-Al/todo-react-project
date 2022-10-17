import React from 'react';

function Filter({ filter, setFilter }) {
  const filterStatus = (e) => {
    setFilter('all');
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
        <button onClick={filterStatus}>All</button>
        <button>Completed</button>
        <button>Inactive</button>
      </div>
    </>
  );
}

export default Filter;
