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

  const [currentTodo, setCurrentTodo] = useState('')

  function handleNewTodo(newTodo){ //going to pass this function in through props
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  function handleDeleteTodo(index) {
    const newTodos = todos.filter((_, todoIndex) => {return index != todoIndex })
    setTodos(newTodos)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setCurrentTodo(valueToBeEdited)
    handleDeleteTodo(index)
  }

  return (
    <>
    <TodoInput handleNewTodo={handleNewTodo} currentTodo={currentTodo} setCurrentTodo={setCurrentTodo} />
    <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}/>
    </>
  )
}

export default App
