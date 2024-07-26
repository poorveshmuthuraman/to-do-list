import React, { useState } from 'react'

export default function (props) {
  const {handleNewTodo} = props
  const [newTodoValue, setNewTodoValue] = useState("")
  return (
    <header>
      <input placeholder="Enter todo" type="text" onChange={(e) => {
        setNewTodoValue(e.target.value)
        }}/>
      <button onClick={() => {
        handleNewTodo(newTodoValue)
        setNewTodoValue('')
        }}>Add Task</button>
    </header>
  )
}
