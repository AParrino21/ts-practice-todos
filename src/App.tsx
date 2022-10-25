import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

// TO USE REACT ROUTER DOM --  npm i @types/react-router-dom

const App: React.FC = () => {

  // state array with the state type set as an array of objects with an id property that is a string and a text property that is a string ---importing from the todo.model.ts file
  const [todos, setTodos] = useState<Todo[]>([])

  const todoAddHandler = (text: string) => {

    setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(), text: text }])
  }

  const deleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return <div className='App'>
    <NewTodo
      onAddTodo={todoAddHandler}
    />
    <ToDoList
      items={todos}
      onDeleteTodo={deleteHandler}
    />
  </div>
}

export default App;