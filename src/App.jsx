import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([
    'go to the gym',
    'drink coffee',
    'do meditation'
  ]);

  function handleNewTodo(newTodo){ //going to pass this function in through props
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  function handleDeleteTodo(index) {
    const newTodos = todos.filter((_, todoIndex) => {return index != todoIndex })
    setTodos(newTodos)
  }

  return (
    <>
    <TodoInput handleNewTodo={handleNewTodo}/>
    <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo}/>
    </>
  )
}

export default App
