import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [formData, setformData] = useState({
    username: '',
    email: '',
  })

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setformData({...formData, [name] : value})
  }
  const handleSubmit= (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData);
  }

  useEffect(()=> {
    localStorage.setItem("username", formData.username)
    localStorage.setItem("username", formData.email)
  }, [formData])

  return (
    <>
      <form onSubmit={handleSubmit} className='parentForm'>
        <label htmlFor='username'>Username:
          <input type="text"
            value={formData.username}
            name='username'
            onChange={handleChange}
          />
        </label>
        <label htmlFor='email'>Email:
          <input type="text"
            value={formData.email}
            name='email'
            onChange={handleChange}
          />
        </label>

        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
