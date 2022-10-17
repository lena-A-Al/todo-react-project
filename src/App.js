import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import SingleTodo from './components/SingleTodo';
import Filter from './components/filter/Filter';
import ListCount from './components/listCount/ListCount';
function App() {
  //state todos which is an array of todo items
  //states:
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
    display: 'flex',
    border: '0.5px solid black',
    width: '50%',
    textAlign: 'left',
    margin: 'auto',
  };

  const parent = (dataFromChildSingleTodo) => {
    console.log(dataFromChildSingleTodo);
  };

  const renderTodoList = todos.map((todoItem, idx) => {
    return (
      <div style={todoListStyle} key={idx}>
        <SingleTodo todoList={todoItem} parentFunc={parent} key={idx} />
      </div>
    );
  });

  return (
    <div className="App">
      <Header />
      <ListCount todoList={todos} />
      {renderTodoList}
      <Filter />
    </div>
  );
}

export default App;
