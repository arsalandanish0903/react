import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [card, setcards] = useState([])

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setcards(data)
    console.log(data);
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
      <div className='container'>
        {/* {card.map((cards) => {
          return (
            <div key={cards.id} className="cards">
              <h1>{cards.title}</h1>
              <p>{cards.body}</p>
              <span>By User Id: {cards.userId}</span>
            </div>
          )
        })} */}

        {card.map((cards) => {
          return(
            <div key={cards.id} className='cards'>
              <h1>{cards.title}</h1>
              <p>{cards.body}</p>
              <span>By User Id: {cards.userId}</span>
            </div>
          )
        })}

      </div>
    </>
  )
}

export default App
