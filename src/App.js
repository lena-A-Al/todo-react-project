import { useState } from 'react';
import './App.css';

import Header from './components/header/Header';
import SingleTodo from './components/SingleTodo';
function App() {
  //state todos which is an array of todo items
  const [todos, setTodo] = useState([
    'reading',
    'Running',
    'Studying',
    'Cleaning',
    'Shopping',
    'Laundary',
  ]);
  //styling objects:
  const todoListStyle = {
    // backgroundColor: 'lightgray',
    display: 'flex',
    border: '0.5px solid black',
    width: '50%',
    textAlign: 'left',
    margin: 'auto',
  };
  const renderTodoList = todos.map((todoItem, idx) => {
    return (
      <div style={todoListStyle} key={idx}>
        <SingleTodo todoName={todoItem} />
      </div>
    );
  });

  return (
    <div className="App">
      <Header />
      {renderTodoList}
    </div>
  );
}

export default App;
