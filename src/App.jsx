import React from 'react'
import './App.scss'
import { ToDoForm } from './components/ToDoForm'
import { ToDoList } from './components/ToDoList'
import { AppContextProvider } from './components/AppContext'


function App() {

  return (
    <AppContextProvider>
      <ToDoForm/>
      <h1 className='h1-main'>Task list</h1>
      <ToDoList/>
    </AppContextProvider>
  )
}

export default App
