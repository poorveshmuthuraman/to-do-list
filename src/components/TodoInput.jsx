import React, { useState } from 'react'

export default function (props) {
  const {handleNewTodo, currentTodo, setCurrentTodo} = props
  return (
    <header>
      <input placeholder="Enter todo" type="text" value={currentTodo} onChange={(e) => {
        setCurrentTodo(e.target.value)
        }}/>
      <button onClick={() => {
        if (currentTodo.trim() !== "") {
          handleNewTodo(currentTodo)
          setCurrentTodo('')
        }
        }}>Add Task</button>
    </header>
  )
}
