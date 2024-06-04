import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem("ITEMS")
        if (localValue == null) {
          return [];
        }
    
        return JSON.parse(localValue)
      })
    
    const handleSetTodo = (newTodos) => {
        setTodos(newTodos)
        localStorage.setItem("ITEMS", JSON.stringify(newTodos || []))
      }
      
    function addToDo (title) {
        handleSetTodo([
          ...todos,
          {
            id: uuidv4(),
            title,
            completed: false 
          },
        ])
    }
      
    function handleEditTodo (newTodo) {
        handleSetTodo(todos.map(todo => {
          if (todo.id === newTodo.id) {
            return { ...todo, ...newTodo }
          } else {
            return todo;
          }
        }))
    }
    
    function deleteToDo (id) {
        handleSetTodo(todos.filter(todo => todo.id !== id))
    }

    const value = {
        todos,
        setTodos,
        handleSetTodo,
        addToDo,
        handleEditTodo,
        deleteToDo
    }

    return (
        <AppContext.Provider value={value}> {children} </AppContext.Provider>
    )
}