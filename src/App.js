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
  ]); //todo item

  //styling objects:
  const todoListStyle = {
    backgroundColor: 'cornsilk',
    fontWeight: 'bold',
    display: 'flex',
    border: '0.5px solid black',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>3 Items left</p>
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
        <p>Clear Completed</p>
      </div>
    </div>
  );
}

export default App;
