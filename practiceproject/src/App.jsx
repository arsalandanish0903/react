import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, switch as Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Router>
      <Navbar />
      <Route path="/" exact  />
    </Router>
        
    </>
  )
}

export default App
