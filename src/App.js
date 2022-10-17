import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import SingleTodo from './components/SingleTodo';
import Filter from './components/filter/Filter';
import ListCount from './components/listCount/ListCount';
function App() {
  //state todos which is an array of todo items
  //states:
  //this state has the hard coded list in the page for the first time. 
  const [todos, setTodo] = useState([
    'reading',
    'Running',
    'Studying',
    'Cleaning',
    'Shopping',
    'Laundary',
  ]);
  //this state mentors when the item is clicked, if completed it will be added to this array.
  const [completedTodos, setCompletedTodos] = useState([]);
  const [filter, setFilter] = useState('all');
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
    setCompletedTodos((completedTodos) => {
      return [...completedTodos, dataFromChildSingleTodo];
    });
  };
  console.log(completedTodos);

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
      <Filter
        filter={filter}
        setFilter={parent}
        completedList={completedTodos}
      />
    </div>
  );
}

export default App;
