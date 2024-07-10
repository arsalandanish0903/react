import React from 'react'
import UserContextProvide from './Context/UserContextProvider'

import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvide>
      <h1>Hello</h1>
      <Login />
      <Profile />
    </UserContextProvide>
  )
}

export default App
