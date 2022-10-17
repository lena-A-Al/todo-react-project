import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import SingleTodo from './components/SingleTodo';
import Filter from './components/filter/Filter';
import ListCount from './components/listCount/ListCount';
function App() {
  //states

  /* this state holds todos list when the website renders for the first time
the state will be passed as props to SingleTodo component. */
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

  /* this state will be used to check if "all" , "completed"  , "inactive"
  if "all" will display everything.
  "completed" will display only checked items. 
  "inactive" will display unchecked item. */
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
    // console.log(dataFromChildSingleTodo);
    setCompletedTodos((completedTodos) => {
      return [...completedTodos, dataFromChildSingleTodo];
    });
  };

  // this will render todo list when the component first renders and filter === "all".
  const renderTodoList = todos.map((todoItem, idx) => {
    return (
      <div style={todoListStyle} key={idx}>
        <SingleTodo todoList={todoItem} parentFunc={parent} key={idx} />
      </div>
    );
  });

  // this will render only completed tasks.
  const renderTodoCompleteList = completedTodos.map((todoItem, idx) => {
    return (
      <div style={todoListStyle} key={idx}>
        <SingleTodo todoList={todoItem} parentFunc={parent} key={idx} />
      </div>
    );
  });

  // this will render only completed tasks.
  const InactiveList = todos.filter((item) => !completedTodos.includes(item));
  console.log(InactiveList);
  const renderTodoInactiveList = InactiveList.map((todoItem, idx) => {
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
      {filter === 'all'
        ? renderTodoList
        : filter === 'completed'
        ? renderTodoCompleteList
        : renderTodoInactiveList}

      <Filter filter={filter} setFilter={setFilter} />
    </div>
  );
}

export default App;
