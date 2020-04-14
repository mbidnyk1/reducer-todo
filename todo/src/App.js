import React, { useState, useReducer } from 'react';
import './App.css';
import { v4 as uuidv4} from 'uuid';

const initialState = {
  todoList: []
 }

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todoList : [state.todoList, action.payload]
      }
    // case 'CLEAR_TODO':
    //   return {
    //     ...state,

    //   }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [newTodo, setNewTodo] = useState(
    {
      item: '',
      completed: false,
      id: uuidv4()
    }
  )
  
  const handleChanges = e => {
    setNewTodo(e.target.value)
  }

  const addTodo = (e, name) => {
    e.preventDefault()
    const newTodo = {
      item:name,
      completed: false,
      id: uuidv4()
    } 
  }
  console.log(state.todoList)

  return (
<>
    <h1> ToDo List </h1>
    <label htmlFor='todoInput'>Add your Todo's</label>
    <input 
      id='todoInput'
      type='text'
      name='todoInput'
      value={newTodo.item}
      onChange={handleChanges}
    />
    <button onClick={() => dispatch( { type: 'ADD_TODO', payload: newTodo })}>Add</button>
    <button onClick={() =>dispatch( {type: 'CLEAR_TODO' }) }>Clear</button>

    <div>
      {state.todoList.map((todo, index) => {
        return todo.item
       })
    }
    </div>
    

</>
  )
}

export default App;
