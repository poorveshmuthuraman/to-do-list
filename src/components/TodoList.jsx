import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList() {
  let todos = [
    'go to the gym',
    'drink coffee',
    'do meditation'
  ]
  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) =>{
        return (
        <TodoCard key={todoIndex}>
          <p>{todo}</p>
        </TodoCard>
      )
      })}
    </ul>
  )
}
