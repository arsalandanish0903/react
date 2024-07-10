import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter, setCounter] = useState(15)
  const addValue = () =>{
    // setCounter(Counter + 1)
    
    //react interview question
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)

    // setCounter(Counter + 1)
  }
  const removeVal = () =>{
    Counter = Counter - 1
    setCounter(Counter)
  }

  return (
    <>
      <h1>Counter Value:{Counter}</h1>
      <button onClick={addValue}>Add Value {Counter}</button>
      <br/>
      <button onClick={removeVal}>Remove Value{Counter}</button>
      <p>footer: {Counter}</p>
    </>
  )
}

export default App
