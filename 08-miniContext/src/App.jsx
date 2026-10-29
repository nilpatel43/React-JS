import { useState } from 'react'
import './App.css'
import Profile from './Components/Profile'
import Login from './Components/Login'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>React with Context API Project</h1>
      <br />
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
