import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import Temprature from './components/Temprature'
import List from './components/List'
import ToggleButton from './components/ToggleButton'
import InputField from './components/InputField'
import Login from './components/Login'
import FetchApi from './components/FetchApi'

function App() {
  const [count, setCount] = useState(0)
  const item = ['Home', 'About', 'Services']
  return (
    <>
    <Navbar/>
    <Temprature celsius="150"/>
    <List items={item}/>
    <ToggleButton/>
    <InputField/>
    <Login/>
    <FetchApi/>
      {/* <div className='bg-black text-white'>{count}</div>
      <button onClick={()=>{setCount(count + 1)}} className='bg-black text-white'>Click Me</button> */}
      {/* <Cards Text='JavaScript' Description='JavaScript Is a Programming Language'/>
      <Cards Text='Python' Description='JavaScript Is a Programming Language'/>
      <Cards Text='java' Description='JavaScript Is a Programming Language'/>
      <Cards Text='C++' Description='JavaScript Is a Programming Language'/> */}
    </>
  )
}

export default App
