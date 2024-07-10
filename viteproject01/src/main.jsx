import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Chai from './chai.jsx'

function myApp(){
  return(
    <div>
    <h1>Custom React</h1>
  </div>
  )
}

const reatElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click Me To Visit Google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reatElement
  // <>
  //   <myApp />
  //   <Chai />
  // </>
  
)
