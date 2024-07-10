import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-red-500 rounded-xl p-4">
      Hello world!
    </h1>
    <Card username="Arsalan" visit="Visit"/>
    </>
  )
}

export default App
