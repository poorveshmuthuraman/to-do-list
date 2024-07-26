import { useEffect, useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([]);

  const [currentTodo, setCurrentTodo] = useState('')

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function handleNewTodo(newTodo){ //going to pass this function in through props
    const newTodos = [...todos, newTodo];
    persistData(newTodos)
    setTodos(newTodos);
  }

  function handleDeleteTodo(index) {
    const newTodos = todos.filter((_, todoIndex) => {return index != todoIndex })
    persistData(newTodos)
    setTodos(newTodos)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setCurrentTodo(valueToBeEdited)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem("todos")
    if(!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
    <TodoInput handleNewTodo={handleNewTodo} currentTodo={currentTodo} setCurrentTodo={setCurrentTodo} />
    <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}/>
    </>
  )
}

export default App
